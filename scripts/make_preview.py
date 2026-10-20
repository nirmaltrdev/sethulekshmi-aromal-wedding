import json

with open('public/assets/images/photo_manifest.json', 'r', encoding='utf-8') as f:
    manifest = json.load(f)

html = """<!DOCTYPE html>
<html>
<head>
<title>Photo Inspection</title>
<style>
body { background: #161817; color: #f0f0f0; font-family: -apple-system, sans-serif; padding: 24px; margin: 0; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.card { background: #222624; border-radius: 8px; overflow: hidden; border: 1px solid #333; }
.card img { width: 100%; height: 180px; object-fit: cover; display: block; }
.card .info { padding: 10px 14px; font-size: 13px; line-height: 1.5; }
.badge { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 11px; background: #3b423f; margin-right: 6px; }
</style>
</head>
<body>
<h1>Photo Manifest Inspection (40 Photos)</h1>
<div class="grid">
"""

for item in manifest:
    html += f"""
<div class="card">
  <img src="{item['webFile']}" alt="{item['original']}" loading="lazy" />
  <div class="info">
    <div><strong>#{item['id']}</strong>: {item['original']}</div>
    <div><span class="badge" style="background:{item['color']};color:#fff;">Avg: {item['color']}</span></div>
  </div>
</div>
"""

html += """
</div>
</body>
</html>
"""

with open('public/gallery_preview.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Generated public/gallery_preview.html successfully.")
