from PIL import Image, ImageFilter
import numpy as np, os

SRC = "public/bg/src/Фон Голубой.png"   # как на скрине
OUT = "public/bg/corners"
os.makedirs(OUT, exist_ok=True)

img = Image.open(SRC).convert("RGBA")
W,H = img.size
rgb = np.array(img)[...,:3]
hsv = np.array(Image.fromarray(rgb).convert("HSV"))
Hh,Ss,Vv = hsv[...,0], hsv[...,1], hsv[...,2]

# маска синего (уголки)
m = ((Hh>=120)&(Hh<=190)&(Ss>=80)&(Vv>=40)).astype(np.uint8)*255
mask = Image.fromarray(m).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(0.6))

def save(qbox, name):
    x0,y0,x1,y1 = qbox
    crop = img.crop(qbox)
    m2   = mask.crop(qbox)
    out  = Image.new("RGBA", (x1-x0, y1-y0), (0,0,0,0))
    out.paste(crop, (0,0), m2)
    out.save(os.path.join(OUT, name), "PNG")

save((0,0,W//2,H//2),          "tl.png")
save((W//2,0,W,H//2),          "tr.png")
save((0,H//2,W//2,H),          "bl.png")
save((W//2,H//2,W,H),          "br.png")
print("OK -> public/bg/corners/{tl,tr,bl,br}.png")