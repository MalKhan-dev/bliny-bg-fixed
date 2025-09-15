from PIL import Image, ImageFilter, ImageDraw
import numpy as np, os, math

SRC = "public/bg/src/fon.png"   # твой: $HOME/Downloads/Блины/page 1/Фон Голубой.png -> public/bg/src/fon.png
OUT = "public/bg/final"
os.makedirs(OUT, exist_ok=True)

targets = [
    (360,640),(375,667),(390,844),(414,896),(428,926),
    (768,1024),(834,1112),(1024,1366),
    (1140,768),(1280,800),(1366,768),(1440,900),
    (1600,900),(1680,1050),(1920,1080),(1920,1200),
    (2048,1280),(2560,1440),(2560,1600),(2880,1800),
    (3440,1440),(3840,2160)
]

# --- src + blue mask
src = Image.open(SRC).convert("RGBA")
W0,H0 = src.size
rgb = np.array(src)[...,:3]
hsv = np.array(Image.fromarray(rgb).convert("HSV"))
H,S,V = hsv[...,0], hsv[...,1], hsv[...,2]
blue = ((H>=120)&(H<=190)&(S>=80)&(V>=40)).astype(np.uint8)

# --- измеряем «толщину синего» на исходнике по центру
bm = blue.astype(bool)
cx, cy = W0//2, H0//2

def run_from_start(a):
    n=len(a); i=0
    while i<n and a[i]: i+=1
    return i

top    = run_from_start(bm[:,cx])
bottom = run_from_start(bm[::-1, cx])
left   = run_from_start(bm[cy, :])
right  = run_from_start(bm[cy, ::-1])

f_v = ((top + bottom)/2) / H0
f_h = ((left + right)/2) / W0

# бумажный тайл из центра
cx0,cx1 = int(W0*.40), int(W0*.60)
cy0,cy1 = int(H0*.40), int(H0*.60)
paper = src.crop((cx0,cy0,cx1,cy1)).convert("RGBA")

def tile(img, W, H):
    out = Image.new("RGBA",(W,H),(0,0,0,0))
    w,h = img.size
    for y in range(0,H,h):
        for x in range(0,W,w):
            out.paste(img,(x,y))
    return out

def cover(im, W, H):
    w0,h0 = im.size
    s = max(W/w0, H/h0)
    w,h = int(math.ceil(w0*s)), int(math.ceil(h0*s))
    sc = im.resize((w,h), Image.LANCZOS)
    x = (w-W)//2; y = (h-H)//2
    return sc.crop((x,y,x+W,y+H))

def ellipse_mask(W,H, rx, ry, aa=4):
    big = Image.new("L",(W*aa,H*aa),0)
    d = ImageDraw.Draw(big)
    cx,cy = (W*aa)//2, (H*aa)//2
    d.ellipse((cx-rx*aa, cy-ry*aa, cx+rx*aa, cy+ry*aa), fill=255)
    big = big.filter(ImageFilter.GaussianBlur(aa*0.6))
    return big.resize((W,H), Image.LANCZOS)

# параметры гарантии видимости + чуть «пожирнее»
MIN_FRAC = 0.065     # минимум 6.5% от размера
MIN_PX   = 40        # и не меньше 40px
BOOST    = 1.15      # сделать края на 15% толще, т.к. «маленькие»

for (W,H) in targets:
    base = cover(src, W, H)       # синие углы по краям
    pap  = tile(paper, W, H)

    # требуемая толщина краёв (гор/верт)
    e_h = max(int(round(f_h*W)), int(round(MIN_FRAC*W)), MIN_PX)
    e_v = max(int(round(f_v*H)), int(round(MIN_FRAC*H)), MIN_PX)
    e_h = int(e_h * BOOST); e_v = int(e_v * BOOST)

    # радиусы эллипса
    rx = max(1, W//2 - e_h)
    ry = max(1, H//2 - e_v)

    mask = ellipse_mask(W,H, rx, ry, aa=4)
    out = base.copy()
    out.paste(pap, (0,0), mask)
    out.save(os.path.join(OUT, f"bg-{W}x{H}.png"), "PNG")
    print("✓", f"bg-{W}x{H}.png")

print("DONE")
