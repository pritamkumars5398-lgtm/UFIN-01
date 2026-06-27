import os
import re

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return

    # Replace emails/URLs first to avoid spaces
    content = re.sub(r'ufin\.online', r'tekonikasystems.online', content, flags=re.IGNORECASE)
    content = re.sub(r'ufin_online', r'tekonika_systems', content, flags=re.IGNORECASE)
    
    # Replace the brand names
    content = content.replace('UFIN-01', 'TEKONIKA-SYSTEMS-01')
    content = content.replace('UFIN-02', 'TEKONIKA-SYSTEMS-02')
    content = content.replace('UFIN', 'TEKONIKA SYSTEMS')
    content = content.replace('Ufin', 'Tekonika Systems')
    content = content.replace('ufin', 'tekonika systems')
    content = content.replace('УФИН', 'TEKONIKA SYSTEMS')
    content = content.replace('Уфин', 'Tekonika Systems')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root or 'dist' in root:
            continue
        for file in files:
            if file.endswith(('.js', '.jsx', '.json', '.html', '.css', '.md')):
                filepath = os.path.join(root, file)
                replace_in_file(filepath)

if __name__ == '__main__':
    project_dir = r'd:\ufin\UFIN-01'
    process_directory(project_dir)
    print("Replacement complete.")
