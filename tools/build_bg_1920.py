from PIL import Image
import numpy as np, os

SRC = "public/bg/src/fon.png"
OUT = "public/bg/pack/bg-1920x1080.png"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

img = Image.open(SRC).convert("RGBA")
w,h = img.size
rgb = np.array(img)[...,:3]
alpha = np.array(img)[...,3]

# HSV mask for teal/blue corners (tweakable ranges)
hsv = Image.fromarray(rgb).convert("HSV")
hsv = np.array(hsv)  # H,S,V in 0..255
H,S,V = hsv[...,0], hsv[...,1], hsv[...,2]
blue = ((H>=120) & (H<=190) & (S>=80) & (V>=40))  # teal–blue range

# Split by quadrants to get each corner
mask = blue.astype(np.uint8)*255
def corner_bbox(msk, x0,x1,y0,y1):
    sub = msk[y0:y1, x0:x1]
    ys,xs = np.where(sub>0)
    if len(xs)==0: return None
    xmin,xmax = xs.min(), xs.max()
    ymin,ymax = ys.min(), ys.max()
    return (x0+xmin, y0+ymin, x0+xmax+1, y0+ymax+1)

# BBoxes
tl = corner_bbox(mask, 0, w//2,   0, h//2)
tr = corner_bbox(mask, w//2, w,   0, h//2)
bl = corner_bbox(mask, 0, w//2,   h//2, h)
br = corner_bbox(mask, w//2, w,   h//2, h)

def cut(box):
    if box is None: return None,None
    x0,y0,x1,y1 = box
    crop = img.crop((x0,y0,x1,y1))
    # alpha = blue-mask inside bbox for clean edges
    m = Image.fromarray(mask[y0:y1, x0:x1])
    rgba = Image.new("RGBA", crop.size, (0,0,0,0))
    rgba.paste(crop, (0,0), m)
    return rgba, (x0,y0,x1,y1)

TL, TL_box = cut(tl)
TR, TR_box = cut(tr)
BL, BL_box = cut(bl)
BR, BR_box = cut(br)

# Paper tile from center (safe area free of blue)
cy0, cy1 = int(h*0.40), int(h*0.60)
cx0, cx1 = int(w*0.40), int(w*0.60)
paper = img.crop((cx0,cy0,cx1,cy1)).convert("RGBA")

# Compose 1920x1080
W,H = 1920,1080
out = Image.new("RGBA", (W,H), (0,0,0,0))

# Tile paper
pw,ph = paper.size
for y in range(0,H,ph):
    for x in range(0,W,pw):
        out.paste(paper, (x,y))

# helper: paste corner uniformly scaled, anchored
def paste_corner(piece, anchor):
    if piece is None: return
    # uniform scale by min(W/w, H/h)
    s = min(W/float(w), H/float(h))
    nw, nh = int(piece.width*s), int(piece.height*s)
    scaled = piece.resize((nw,nh), Image.LANCZOS)
    if anchor=="tl": pos=(0,0)
    elif anchor=="tr": pos=(W-nw,0)
    elif anchor=="bl": pos=(0,H-nh)
    else: pos=(W-nw,H-nh)
    out.paste(scaled, pos, scaled)

paste_corner(TL,"tl")
paste_corner(TR,"tr")
paste_corner(BL,"bl")
paste_corner(BR,"br")

out.save(OUT, "PNG")
print("OK ->", OUT)
