from PIL import Image, ImageFilter
import numpy as np, os

SRC = "public/bg/src/fon.png"             # твой исходник
OUT = "public/bg/edges/edges-raw.png"     # прозрачный центр + только синие края
os.makedirs(os.path.dirname(OUT), exist_ok=True)

img = Image.open(SRC).convert("RGBA")
rgb = np.array(img)[...,:3]
hsv = np.array(Image.fromarray(rgb).convert("HSV"))
H,S,V = hsv[...,0], hsv[...,1], hsv[...,2]

# маска teal/blue; чуть расширяем края, чтобы не было светлой каймы
mask = ((H>=120)&(H<=190)&(S>=80)&(V>=40)).astype(np.uint8)*255
mask = Image.fromarray(mask).filter(ImageFilter.MaxFilter(3))

out = Image.new("RGBA", img.size, (0,0,0,0))
out.paste(img, (0,0), mask)
out.save(OUT, "PNG")
print("OK ->", OUT)
