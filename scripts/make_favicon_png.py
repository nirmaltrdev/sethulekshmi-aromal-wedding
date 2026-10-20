import os
from PIL import Image, ImageDraw, ImageFont

# Create high-res 128x128 icon
size = 128
img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Outer rounded rectangle: Royal Emerald
# Background
draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=30, fill="#0A2A22")

# Gold border
draw.rounded_rectangle([3, 3, size - 4, size - 4], radius=26, outline="#D6B265", width=3)
draw.rounded_rectangle([7, 7, size - 8, size - 8], radius=22, outline="#8C6820", width=1)

# Text: S & A
try:
    font = ImageFont.truetype("georgiab.ttf", 46)
    font_amp = ImageFont.truetype("georgiai.ttf", 36)
except Exception:
    font = ImageFont.load_default()
    font_amp = font

# Draw text centered
# S
draw.text((22, 38), "S", fill="#FAF7F0", font=font)
# &
draw.text((54, 44), "&", fill="#D6B265", font=font_amp)
# A
draw.text((78, 38), "A", fill="#FAF7F0", font=font)

# Save PNG and ICO
public_dir = r"c:\Personal\WeddingWebsite\public"
img.save(os.path.join(public_dir, "favicon.png"), "PNG")
img.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(public_dir, "favicon-32x32.png"), "PNG")
img.resize((48, 48), Image.Resampling.LANCZOS).save(os.path.join(public_dir, "favicon.ico"), format="ICO")
print("Saved S & A favicon.png, favicon-32x32.png, and favicon.ico successfully.")
