from PIL import Image
import numpy as np, os

SRC="public/bg/src/fon.png"
TILE="public/bg/paper-tile.png"
OUT="public/bg/corners"
os.makedirs(OUT, exist_ok=True)

img=Image.open(SRC).convert("RGBA")
W,H=img.size
rgb=np.array(img)[...,:3]
hsv=np.array(Image.fromarray(rgb).convert("HSV"))
Hh, Ss, Vv = hsv[...,0], hsv[...,1], hsv[...,2]
blue = ((Hh>=120)&(Hh<=190)&(Ss>=80)&(Vv>=40)).astype(np.uint8)*255

# paper tile = центр 20%
cx0,cx1=int(W*0.40),int(W*0.60)
cy0,cy1=int(H*0.40),int(H*0.60)
paper=img.crop((cx0,cy0,cx1,cy1)).convert("RGBA")
paper.save(TILE,"PNG")

def bbox(msk,x0,x1,y0,y1):
    sub=msk[y0:y1,x0:x1]
    ys,xs=np.where(sub>0)
    if xs.size==0: return None
    return (x0+xs.min(), y0+ys.min(), x0+xs.max()+1, y0+ys.max()+1)

def save_corner(name, box):
    if not box: return
    x0,y0,x1,y1=box
    crop=img.crop((x0,y0,x1,y1))
    m=Image.fromarray(blue[y0:y1,x0:x1])
    out=Image.new("RGBA", crop.size, (0,0,0,0))
    out.paste(crop,(0,0),m)
    out.save(os.path.join(OUT, name),"PNG")

save_corner("tl.png", bbox(blue, 0, W//2, 0, H//2))
save_corner("tr.png", bbox(blue, W//2, W, 0, H//2))
save_corner("bl.png", bbox(blue, 0, W//2, H//2, H))
save_corner("br.png", bbox(blue, W//2, W, H//2, H))
print("OK")
