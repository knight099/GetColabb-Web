"""
Process Logo.png into web-ready variants:
  logo.png           — original (no bg removal; bg is already glassy)
  logo-transparent.png  — white/near-white bg removed, soft alpha
  logo-rounded.png   — transparent bg + rounded outer corners (22% radius)
  logo-512.png       — 512x512 optimized
  logo-256.png       — 256x256 optimized
Run:  python3 scripts/process-logo.py path/to/Logo.png
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

SRC = Path(sys.argv[1] if len(sys.argv) > 1 else "../Logo.png").resolve()
OUT = Path(__file__).resolve().parent.parent / "public"
OUT.mkdir(exist_ok=True)

img = Image.open(SRC).convert("RGBA")
print(f"Loaded {SRC} ({img.size})")

# --- Background removal: treat near-white pixels as transparent, feathered ---
w, h = img.size
px = img.load()
THRESH = 238       # r,g,b above this → fully transparent
FEATHER_FROM = 210 # below this → keep, between → gradient alpha
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        m = min(r, g, b)
        if m >= THRESH:
            px[x, y] = (r, g, b, 0)
        elif m >= FEATHER_FROM:
            frac = (m - FEATHER_FROM) / (THRESH - FEATHER_FROM)
            px[x, y] = (r, g, b, int(a * (1 - frac)))

# Light blur on alpha to soften edges
alpha = img.split()[-1].filter(ImageFilter.GaussianBlur(0.6))
img.putalpha(alpha)

transparent = img.copy()
transparent.save(OUT / "logo-transparent.png", optimize=True)
print("→ logo-transparent.png")

# --- Rounded corners mask on top of the transparent version ---
def rounded(src, radius_frac=0.22):
    w, h = src.size
    radius = int(min(w, h) * radius_frac)
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w, h), radius=radius, fill=255)
    out = src.copy()
    a = out.split()[-1]
    a = Image.eval(a, lambda v: v)  # keep existing alpha
    combined = Image.new("L", (w, h), 0)
    combined.paste(a, mask=mask)
    out.putalpha(combined)
    return out

rounded(transparent).save(OUT / "logo-rounded.png", optimize=True)
print("→ logo-rounded.png")

# --- Downscaled optimized copies ---
for size in (512, 256, 128):
    transparent.resize((size, size), Image.LANCZOS).save(
        OUT / f"logo-{size}.png", optimize=True
    )
    print(f"→ logo-{size}.png")

# Also save a clean overwrite of /public/logo.png with transparent version
transparent.resize((512, 512), Image.LANCZOS).save(OUT / "logo.png", optimize=True)
print("→ logo.png (overwritten, 512x512 transparent)")
print("Done.")
