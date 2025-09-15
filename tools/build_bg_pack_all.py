from PIL import Image
import numpy as np, os

SRC = "public/bg/src/fon.png"
OUT_DIR = "public/bg/pack"
os.makedirs(OUT_DIR, exist_ok=True)

# ---------- load
img = Image.open(SRC).convert("RGBA")
Wsrc, Hsrc = img.size
rgb = np.array(img)[...,:3]
hsv = Image.fromarray(rgb).convert("HSV")
hsv = np.array(hsv)  # 0..255
H, S, V = hsv[...,0], hsv[...,1], hsv[...,2]

# ---------- blue mask (tweak if нужно)
blue = ((H>=120) & (H<=190) & (S>=80) & (V>=40)).astype(np.uint8)*255

def bbox(msk, x0,x1,y0,y1):
    sub = msk[y0:y1, x0:x1]
    ys,xs = np.where(sub>0)
    if xs.size==0: return None
    xmin,xmax = xs.min(), xs.max()
    ymin,ymax = ys.min(), ys.max()
    return (x0+xmin, y0+ymin, x0+xmax+1, y0+ymax+1)

def cut_corner(box):
    if not box: return None
    x0,y0,x1,y1 = box
    crop = img.crop((x0,y0,x1,y1))
    m = Image.fromarray(blue[y0:y1, x0:x1])
    out = Image.new("RGBA", crop.size, (0,0,0,0))
    out.paste(crop, (0,0), m)
    return out

# quadrant bboxes
TL = cut_corner(bbox(blue, 0, Wsrc//2, 0, Hsrc//2))
TR = cut_corner(bbox(blue, Wsrc//2, Wsrc, 0, Hsrc//2))
BL = cut_corner(bbox(blue, 0, Wsrc//2, Hsrc//2, Hsrc))
BR = cut_corner(bbox(blue, Wsrc//2, Wsrc, Hsrc//2, Hsrc))

# paper tile from center
cx0,cx1 = int(Wsrc*0.40), int(Wsrc*0.60)
cy0,cy1 = int(Hsrc*0.40), int(Hsrc*0.60)
paper = img.crop((cx0,cy0,cx1,cy1)).convert("RGBA")
Pw,Ph = paper.size

def compose(W,H):
    canvas = Image.new("RGBA",(W,H),(0,0,0,0))
    # tile paper
    for y in range(0,H,Ph):
        for x in range(0,W,Pw):
            canvas.paste(paper,(x,y))
    # uniform scale relative to full source -> сохраняем пропорции
    s = min(W/float(Wsrc), H/float(Hsrc))
    def paste(piece, anchor):
        if piece is None: return
        nw,nh = int(piece.width*s), int(piece.height*s)
        scaled = piece.resize((nw,nh), Image.LANCZOS)
        if anchor=="tl": pos=(0,0)
        elif anchor=="tr": pos=(W-nw,0)
        elif anchor=="bl": pos=(0,H-nh)
        else: pos=(W-nw,H-nh)
        canvas.paste(scaled,pos,scaled)
    paste(TL,"tl"); paste(TR,"tr"); paste(BL,"bl"); paste(BR,"br")
    return canvas

targets = [
    (360,640),(375,667),(390,844),(414,896),(428,926),
    (768,1024),(834,1112),(1024,1366),
    (1140,768),(1280,800),(1366,768),(1440,900),
    (1600,900),(1680,1050),(1920,1080),(1920,1200),
    (2048,1280),(2560,1440),(2560,1600),(2880,1800),
    (3440,1440),(3840,2160)
]

def save_wh(W,H):
    out = compose(W,H)
    path = os.path.join(OUT_DIR, f"bg-{W}x{H}.png")
    out.save(path,"PNG"); print("✓", path)

for (W,H) in targets:
    save_wh(W,H)
    # rotated variant for landscape phones/tablets
    if W < 1024:  # phones/tablets -> делаем и альбомную
        save_wh(H,W)

print("DONE")
