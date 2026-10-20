import os
import glob
import json
from PIL import Image, ImageOps, ImageStat

source_dir = r"c:\Users\dell\Downloads\selected pics"
web_dir = r"c:\Personal\WeddingWebsite\public\assets\images\gallery"
thumb_dir = r"c:\Personal\WeddingWebsite\public\assets\images\gallery\thumb"

os.makedirs(web_dir, exist_ok=True)
os.makedirs(thumb_dir, exist_ok=True)

pics = sorted(glob.glob(os.path.join(source_dir, "*.JPG")))
print(f"Found {len(pics)} original photographs.")

manifest = []

for idx, p in enumerate(pics):
    filename = os.path.basename(p)
    # Ignore accidental duplicates like JIS09407 (1).JPG
    if "(1)" in filename:
        continue

    img = Image.open(p)
    # Apply EXIF rotation to ensure image is oriented right-side up!
    img = ImageOps.exif_transpose(img)

    w, h = img.size
    is_portrait = h > w
    aspect_ratio = round(w / h, 4)
    orientation = "portrait" if is_portrait else "landscape"

    clean_name = os.path.splitext(filename)[0].lower()
    web_filename = f"photo_{idx+1:02d}_{clean_name}.jpg"
    thumb_filename = f"photo_{idx+1:02d}_{clean_name}_thumb.jpg"

    web_path = os.path.join(web_dir, web_filename)
    thumb_path = os.path.join(thumb_dir, thumb_filename)

    # Calculate web dimensions: max 1920 on longest side
    if max(w, h) > 1920:
        if is_portrait:
            target_w = int(1920 * (w / h))
            target_h = 1920
        else:
            target_w = 1920
            target_h = int(1920 * (h / w))
        web_img = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    else:
        web_img = img.copy()

    # Calculate thumb dimensions: max 600 on longest side
    if is_portrait:
        thumb_w = int(600 * (w / h))
        thumb_h = 600
    else:
        thumb_w = 600
        thumb_h = int(600 * (h / w))
    thumb_img = img.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)

    # Save web image (Quality 88, optimize, progressive)
    web_img.save(web_path, "JPEG", quality=88, optimize=True, progressive=True)

    # Save thumb image (Quality 80, optimize)
    thumb_img.save(thumb_path, "JPEG", quality=80, optimize=True)

    # Sample color from center
    small = thumb_img.resize((10, 10))
    stat = ImageStat.Stat(small)
    avg_color = f"#{int(stat.mean[0]):02x}{int(stat.mean[1]):02x}{int(stat.mean[2]):02x}"

    entry = {
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
    manifest.append(entry)
    print(f"[{idx+1:02d}] {filename} -> {orientation.upper()} ({web_img.size[0]}x{web_img.size[1]})")

# Save manifest
manifest_path = r"c:\Personal\WeddingWebsite\public\assets\images\photo_manifest.json"
with open(manifest_path, "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2)

print(f"\nProcessing complete! Saved {len(manifest)} correctly oriented photos to manifest.")
