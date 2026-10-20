import os
import glob
import json
from concurrent.futures import ThreadPoolExecutor
from PIL import Image, ImageOps, ImageStat

source_dir = r"c:\Users\dell\Downloads\selected pics"
web_dir = r"c:\Personal\WeddingWebsite\public\assets\images\gallery"
thumb_dir = r"c:\Personal\WeddingWebsite\public\assets\images\gallery\thumb"

os.makedirs(web_dir, exist_ok=True)
os.makedirs(thumb_dir, exist_ok=True)

pics = sorted(glob.glob(os.path.join(source_dir, "*.JPG")))
# Filter out (1) duplicates
unique_pics = [p for p in pics if "(1)" not in os.path.basename(p)]

print(f"Processing {len(unique_pics)} unique photos...")

def process_single(args):
    idx, p = args
    filename = os.path.basename(p)
    clean_name = os.path.splitext(filename)[0].lower()
    web_filename = f"photo_{idx+1:02d}_{clean_name}.jpg"
    thumb_filename = f"photo_{idx+1:02d}_{clean_name}_thumb.jpg"

    web_path = os.path.join(web_dir, web_filename)
    thumb_path = os.path.join(thumb_dir, thumb_filename)

    with Image.open(p) as img:
        # EXIF transpose to guarantee right-side-up orientation!
        img = ImageOps.exif_transpose(img)
        w, h = img.size
        is_portrait = h > w
        aspect_ratio = round(w / h, 4)
        orientation = "portrait" if is_portrait else "landscape"

        # Web resolution: max 1920 on longest edge
        if max(w, h) > 1920:
            scale = 1920 / max(w, h)
            target_size = (int(w * scale), int(h * scale))
            web_img = img.resize(target_size, Image.Resampling.BICUBIC)
        else:
            web_img = img.copy()

        # Thumb resolution: max 600 on longest edge
        scale_th = 600 / max(w, h)
        thumb_size = (int(w * scale_th), int(h * scale_th))
        thumb_img = img.resize(thumb_size, Image.Resampling.BILINEAR)

        # Save web & thumb
        web_img.save(web_path, "JPEG", quality=86, optimize=True)
        thumb_img.save(thumb_path, "JPEG", quality=80, optimize=True)

        # Sample dominant color
        small = thumb_img.resize((1, 1))
        pixel = small.getpixel((0, 0))
        avg_color = f"#{pixel[0]:02x}{pixel[1]:02x}{pixel[2]:02x}"

        print(f"Done [{idx+1:02d}]: {filename} -> {orientation.upper()} ({web_img.size[0]}x{web_img.size[1]})")

        return {
            "id": idx + 1,
            "original": filename,
            "webFile": f"/assets/images/gallery/{web_filename}",
            "thumbFile": f"/assets/images/gallery/thumb/{thumb_filename}",
            "width": web_img.size[0],
            "height": web_img.size[1],
            "aspectRatio": aspect_ratio,
            "orientation": orientation,
            "color": avg_color,
        }

with ThreadPoolExecutor(max_workers=6) as executor:
    manifest = list(executor.map(process_single, enumerate(unique_pics)))

# Sort manifest by ID
manifest.sort(key=lambda x: x["id"])

manifest_path = r"c:\Personal\WeddingWebsite\public\assets\images\photo_manifest.json"
with open(manifest_path, "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2)

print(f"\nAll {len(manifest)} photos successfully transposed and saved to {manifest_path}!")
