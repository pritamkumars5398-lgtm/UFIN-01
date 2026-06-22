import sys
from bs4 import BeautifulSoup

try:
    with open(r'C:\Users\Dell\.gemini\antigravity-ide\brain\3850b008-5a56-43bd-b70e-89f98c26fb17\.system_generated\steps\68\content.md', 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # We want to find the main content.
    main = soup.find('main') or soup.find('div', class_='elementor') or soup.find('body')
    
    if main:
        print('--- Main Content Structure ---')
        for tag in main.find_all(['h1', 'h2', 'h3', 'p', 'a', 'div', 'section', 'form', 'iframe']):
            if tag.name in ['h1', 'h2', 'h3', 'p', 'a']:
                text = tag.get_text(strip=True)
                if text:
                    print(f'{tag.name.upper()}: {text}')
            elif tag.name == 'div' and tag.get('class'):
                classes = ' '.join(tag.get('class'))
                if 'elementor-section' in classes or 'container' in classes:
                    print(f'DIV [{classes}]')
            elif tag.name == 'iframe':
                src = tag.get('src', 'no-src')
                print(f'IFRAME: {src}')
    else:
        print('No main content found.')
except Exception as e:
    print(f'Error: {e}')
