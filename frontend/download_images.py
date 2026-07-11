import urllib.request
import re
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

product_urls = [
    ('mdsm-7.jpg', 'https://ufin.online/product/mdsm-7/'),
    ('mdas-9.jpg', 'https://ufin.online/product/mdas-9/'),
    ('mrv-21.jpg', 'https://ufin.online/product/mrv-21/'),
    ('escort-td-ble.jpg', 'https://ufin.online/product/eskort-td-ble-1000-mm/'),
    ('external-tpms.jpg', 'https://ufin.online/product/datchik-davleniya-v-shine-vneshnij/'),
    ('hp21.jpg', 'https://ufin.online/product/termoregistrator/'),
    ('tpms-monitor.jpg', 'https://ufin.online/?post_type=product&p=36472'),
    ('internal-tpms.jpg', 'https://ufin.online/product/datchik-davleniya-v-shine-vneshnij-duplicate-1/'),
]

assets_dir = r'd:\ufin\UFIN-01\frontend\src\assets'

for filename, url in product_urls:
    out_path = os.path.join(assets_dir, filename)
    if os.path.exists(out_path):
        print(f"Already exists: {filename}")
        continue
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Find the main product image
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']*(?:jpg|png|webp)[^"\']*)["\']', html, re.IGNORECASE)
        # Find WooCommerce product image
        wc_imgs = re.findall(r'class="[^"]*woocommerce-product-gallery__image[^"]*"[^>]*>.*?<img[^>]+src=["\']([^"\']+)["\']', html, re.DOTALL)
        if not wc_imgs:
            wc_imgs = re.findall(r'wp-post-image[^>]*src=["\']([^"\']+)["\']', html)
        if not wc_imgs:
            # Try og:image
            wc_imgs = re.findall(r'og:image.*?content=["\']([^"\']+)["\']', html)
        
        img_url = None
        for img in imgs:
            if 'wp-content/uploads' in img and not 'logo' in img.lower() and not 'icon' in img.lower():
                img_url = img
                break
        
        if not img_url and wc_imgs:
            img_url = wc_imgs[0]
            
        if img_url:
            print(f"Found image for {filename}: {img_url}")
            # Download it
            img_req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(img_req) as resp:
                img_data = resp.read()
            with open(out_path, 'wb') as f:
                f.write(img_data)
            print(f"Downloaded: {filename}")
        else:
            print(f"No image found for {filename} at {url}")
            print("First 5 imgs:", imgs[:5])
    except Exception as e:
        print(f"Error for {filename}: {e}")
