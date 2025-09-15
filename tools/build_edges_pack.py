from PIL import Image, ImageFilter
import numpy as np, os, math

SRC = "public/bg/src/fon.png"
OUT = "public/bg/edges"
os.makedirs(OUT, exist_ok=True)

# таргеты
T = [(360,640),(375,667),(390,844),(414,896),(428,926),
     (768,1024),(834,1112),(1024,1366),
     (1140,768),(1280,800),(1366,768),(1440,900),
     (1600,900),(1680,1050),(1920,1080),(1920,1200),
     (2048,1280),(2560,1440),(2560,1600),(2880,1800),
     (3440,1440),(3840,2160)]

# исходник + маска только синих зон (уголки)
src = Image.open(SRC).convert("RGBA")
W0,H0 = src.size
rgb = np.array(src)[...,:3]
hsv = np.array(Image.fromarray(rgb).convert("HSV"))
H,S,V = hsv[...,0], hsv[...,1], hsv[...,2]
mask = ((H>=120)&(H<=190)&(S>=80)&(V>=40)).astype(np.uint8)*255
mask = Image.fromarray(mask).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(0.6))

overlay = Image.new("RGBA",(W0,H0),(0,0,0,0))
overlay.paste(src,(0,0),mask)   # центр прозрачный

OVERSCAN = 1.02                 # чтобы точно упираться в края
# базовый «идеальный» размер окна (где тебе нравится толщина) — под это окно = 0% усиления
REF_W, REF_H = 1700, 956
REF_DIAG = (REF_W**2 + REF_H**2) ** 0.5
GAIN = 0.35                     # плавное «покрупнее» на больших экранах
MAX_BIAS = 0.09                 # не толще +9%

def scale_bias(W,H):
    d = (W*W + H*H) ** 0.5
    b = (d/REF_DIAG - 1.0) * GAIN
    b = max(0.0, min(MAX_BIAS, b))  # мелкие экраны не худеем; крупные — +0…9%
    return 1.0 + b

def make(W,H):
    s = max(W/W0, H/H0) * OVERSCAN * scale_bias(W,H)  # cover + тонкий «ап»
    w,h = int(math.ceil(W0*s)), int(math.ceil(H0*s))
    sc = overlay.resize((w,h), Image.LANCZOS)
    x = max(0,(w-W)//2); y = max(0,(h-H)//2)          # ЦЕНТР!!!
    return sc.crop((x,y,x+W,y+H))

for W,H in T:
    out = make(W,H)
    out.save(os.path.join(OUT, f"edges-{W}x{H}.png"), "PNG")
    print("✓", W, "x", H)
print("DONE")