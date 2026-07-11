import urllib.request
from urllib.parse import quote
import os
import sys

# Force UTF-8 stdout to avoid encoding issues with Cyrillic filenames
sys.stdout.reconfigure(encoding='utf-8')

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
assets_dir = r'd:\ufin\UFIN-01\frontend\src\assets'

def get_first_product_img(url, filename):
    import re
    req = urllib.request.Request(url, headers=headers)
    raw = urllib.request.urlopen(req).read().decode('utf-8', errors='replace')
    imgs = re.findall(r'(https?://ufin\.online/wp-content/uploads/[^\x22\x27\s]+(?:jpg|png|jpeg|webp))', raw)
    imgs = [i for i in imgs if not any(x in i.lower() for x in ['logo', 'cropped', 'favicon', 'rybric', 'nord', 'toplivo', 'image_2025', 'passazhir', 'gruz', 'legkiy', 'kontrol'])]
    if imgs:
        img_url = imgs[0]
        out = os.path.join(assets_dir, filename)
        if not os.path.exists(out):
            base = 'https://ufin.online'
            path = img_url[len(base):]
            encoded = base + quote(path, safe='/')
            req2 = urllib.request.Request(encoded, headers=headers)
            with urllib.request.urlopen(req2) as resp:
                data = resp.read()
            with open(out, 'wb') as f:
                f.write(data)
            print(f"Downloaded {filename}")
        else:
            print(f"Already exists: {filename}")
        return img_url
    else:
        print(f"No image found for {filename}")
        return None

# SIGNAL S-2653
get_first_product_img('https://ufin.online/product/bortovoj-navigacionnyj-terminal-cmart/', 'signal-s2653.jpg')
