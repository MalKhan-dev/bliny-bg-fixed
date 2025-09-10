from PIL import Image
import numpy as np, os

SRC = "public/bg/src/fon.png"
OUT = "public/bg/overlays/edges.png"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

img = Image.open(SRC).convert("RGBA")
rgb = np.array(img)[...,:3]
hsv = np.array(Image.fromarray(rgb).convert("HSV"))
H,S,V = hsv[...,0], hsv[...,1], hsv[...,2]

# teal/blue mask (под твою картинку):
blue = ((H>=120) & (H<=190) & (S>=80) & (V>=40))

arr = np.dstack([rgb, (blue*255).astype(np.uint8)])  # прозрачный центр
out = Image.fromarray(arr, mode="RGBA")
out.save(OUT, "PNG")
print("OK ->", OUT)
