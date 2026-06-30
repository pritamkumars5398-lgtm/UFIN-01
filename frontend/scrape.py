import urllib.request
import re

url = "https://ufin.online/lyudi/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Extract links
links = re.findall(r'<a\s+[^>]*>([\s\S]*?)</a>', html)
cleaned_links = []
for l in links:
    text = re.sub(r'<[^>]+>', '', l).strip()
    if text and len(text) < 50:
        cleaned_links.append(text)

with open('scraped_links.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(list(dict.fromkeys(cleaned_links))))
