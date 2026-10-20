import os, shutil, json
from PIL import Image

src_folder = r'C:\Users\dell\Downloads\selected pics'
dest_base = r'C:\Personal\WeddingWebsite\public\assets\images'
dest_gallery = os.path.join(dest_base, 'gallery')
dest_thumb = os.path.join(dest_gallery, 'thumb')

os.makedirs(dest_gallery, exist_ok=True)
os.makedirs(dest_thumb, exist_ok=True)

# Copy invitation card & existing images
for name in ['invitation_card.jpg', 'couple.jpg', 'mandap_venue.jpg', 'rings.jpg']:
    sp = os.path.join(r'C:\Users\dell\Downloads\invitation\public\assets\images', name)
    if os.path.exists(sp):
        dp = os.path.join(dest_base, name if name != 'couple.jpg' else 'invitation_couple.jpg')
        shutil.copy2(sp, dp)
        print(f'Copied {name} -> {dp}')

files = [f for f in sorted(os.listdir(src_folder)) if f.lower().endswith(('.jpg', '.jpeg'))]
unique_files = [f for f in files if '(1)' not in f]
print(f'Processing {len(unique_files)} unique photos...')

manifest = []

for idx, f in enumerate(unique_files):
    src_path = os.path.join(src_folder, f)
    base_name = f'photo_{idx+1:02d}_{os.path.splitext(f)[0].lower()}'
    web_file = f'{base_name}.jpg'
    thumb_file = f'{base_name}_thumb.jpg'
    
    web_path = os.path.join(dest_gallery, web_file)
    thumb_path = os.path.join(dest_thumb, thumb_file)
    
    with Image.open(src_path) as im:
        w, h = im.size
        orientation = 'landscape' if w > h else 'portrait'
        
        # Web full version (max dim 1920)
        scale_web = min(1920.0 / max(w, h), 1.0)
        web_size = (int(w * scale_web), int(h * scale_web))
        im_web = im.resize(web_size, Image.Resampling.LANCZOS)
        im_web.save(web_path, 'JPEG', quality=88, optimize=True, progressive=True)
        
        # Thumbnail (max dim 600)
        scale_th = min(600.0 / max(w, h), 1.0)
        th_size = (int(w * scale_th), int(h * scale_th))
        im_th = im.resize(th_size, Image.Resampling.LANCZOS)
        im_th.save(thumb_path, 'JPEG', quality=82, optimize=True)
        
        # Color sampling: sample 1x1 average pixel
        sample = im_th.resize((1, 1))
        pixel = sample.getpixel((0, 0))
        r, g, b = pixel[0], pixel[1], pixel[2]
        hex_color = f'#{r:02x}{g:02x}{b:02x}'
        
        web_kb = round(os.path.getsize(web_path) / 1024, 1)
        th_kb = round(os.path.getsize(thumb_path) / 1024, 1)
        orig_mb = round(os.path.getsize(src_path) / (1024*1024), 2)
        
        manifest.append({
            'id': idx + 1,
            'original': f,
            'webFile': f'/assets/images/gallery/{web_file}',
            'thumbFile': f'/assets/images/gallery/thumb/{thumb_file}',
            'width': web_size[0],
            'height': web_size[1],
            'aspectRatio': round(w / h, 3),
            'orientation': orientation,
            'color': hex_color,
            'origSizeMB': orig_mb,
            'webSizeKB': web_kb,
            'thumbSizeKB': th_kb
        })
        print(f'[{idx+1}/{len(unique_files)}] {f} -> {web_file} ({web_size[0]}x{web_size[1]}, {web_kb} KB)')

manifest_path = os.path.join(dest_base, 'photo_manifest.json')
with open(manifest_path, 'w', encoding='utf-8') as mf:
    json.dump(manifest, mf, indent=2)

print(f'SUCCESS: Processed {len(manifest)} photos. Manifest saved to {manifest_path}')
