from PIL import Image, ImageFilter
import numpy as np, os, math

SRC = "public/bg/src/fon.png"
OUT = "public/bg/final"
os.makedirs(OUT, exist_ok=True)

TARGETS = [
    (360,640),(375,667),(390,844),(414,896),(428,926),
    (768,1024),(834,1112),(1024,1366),
    (1140,768),(1280,800),(1366,768),(1440,900),
    (1600,900),(1680,1050),(1920,1080),(1920,1200),
    (2048,1280),(2560,1440),(2560,1600),(2880,1800),
    (3440,1440),(3840,2160)
]

# Точечные коэффициенты «толщины» уголков (где нужно — делаем крупнее)
SCALE_OVERRIDES = {
    (1920,1080): 1.02,  # тонкая подстройка под твой FHD (±0.01 при желании)
}
DEFAULT_SCALE = 1.00
OVERSCAN = 1.03  # чтобы точно упереться в края

src = Image.open(SRC).convert("RGBA")
W0,H0 = src.size

# HSV-хромакей: оставляем только синие области (уголки)
rgb = np.array(src)[...,:3]
hsv = np.array(Image.fromarray(rgb).convert("HSV"))
H,S,V = hsv[...,0], hsv[...,1], hsv[...,2]
mask = ((H>=120)&(H<=190)&(S>=80)&(V>=40)).astype(np.uint8)*255
mask = Image.fromarray(mask).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(0.6))
edges = Image.new("RGBA",(W0,H0),(0,0,0,0))
edges.paste(src,(0,0),mask)  # центр прозрачный

# Тайл бумаги из безопасного центра
cx0,cx1 = int(W0*0.40), int(W0*0.60)
cy0,cy1 = int(H0*0.40), int(H0*0.60)
paper_tile = src.crop((cx0,cy0,cx1,cy1)).convert("RGBA")
Pw,Ph = paper_tile.size

def tile(img, W, H):
    out = Image.new("RGBA",(W,H),(0,0,0,0))
    for y in range(0,H, img.size[1]):
        for x in range(0,W, img.size[0]):
            out.paste(img,(x,y))
    return out

def place_edges(W, H):
    # масштаб cover
    sw = W / W0
    sh = H / H0
    s_cover = max(sw, sh)

    # ВАЖНО: для сохранения толщины как в макете
    # если cover выбрал "по высоте", принудительно дотягиваем до "по ширине"
    bias_to_width = max(1.0, sw / sh)   # = (W/W0)/(H/H0)
    s = s_cover * bias_to_width

    # небольшой запас + твой точечный оверрайд
    s *= OVERSCAN * SCALE_OVERRIDES.get((W, H), DEFAULT_SCALE)

    w, h = int(math.ceil(W0 * s)), int(math.ceil(H0 * s))
    sc = edges.resize((w, h), Image.LANCZOS)
    x = max(0, (w - W) // 2)
    y = max(0, (h - H) // 2)  # строго по центру
    return sc.crop((x, y, x + W, y + H))

for (W,H) in TARGETS:
    bg  = tile(paper_tile, W, H)     # единый тайл бумаги по всей площади → никаких «овальных пятен»
    eg  = place_edges(W,H)           # синие края
    out = bg.copy(); out.alpha_composite(eg)
    out.save(os.path.join(OUT, f"bg-{W}x{H}.png"), "PNG")
    print("✓", f"bg-{W}x{H}.png")

print("DONE")
