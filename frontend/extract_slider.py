from bs4 import BeautifulSoup
import json
import os

html_path = r'D:\ufin\UFIN-01\ufin.html'

with open(html_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

# The section seems to be a slider with class "card__item swiper-slide"
items = soup.find_all('a', class_='card__item swiper-slide')

results = []
for item in items:
    # Try to find the image inside
    img = item.find('img')
    if not img:
        continue
    
    src = img.get('data-src') or img.get('src')
    
    # Try to find the title
    title_div = item.find('div', class_='card__title')
    title = title_div.text.strip() if title_div else ""
    
    # Description (country)
    desc_p = item.find('p', class_='card__description')
    desc = desc_p.text.strip() if desc_p else ""
    
    # link
    link = item.get('href')
    
    # we only want items that are in this specific slider. This slider has Oktion, Torex, etc.
    # So we print them out to inspect.
    results.append({
        'title': title,
        'country': desc,
        'src': src,
        'link': link
    })

# Print the first 20 just to see if we got the right ones
print(json.dumps(results[:20], indent=2, ensure_ascii=False))
