import urllib.request
import re

url = 'https://ufin.online/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Find all device items
items = re.findall(r'<div class="elementor-widget-container">\s*<div class="card-item[^>]*>\s*<img[^>]+src="([^"]+)"[^>]*>\s*<h3>([^<]+)</h3>\s*<p>([^<]+)</p>', html)

for img, title, desc in items:
    print(f"Title: {title.strip()}")
    print(f"Image: {img.strip()}")
    print(f"Desc: {desc.strip()}")
    print("---")
