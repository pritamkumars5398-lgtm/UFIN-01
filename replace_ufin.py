import os
import re

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        
        # We handle 3 main cases of capitalization
        # 1. UPPERCASE: UFIN -> TEKONIKA SYSTEMS
        content = re.sub(r'\bUFIN\b', 'TEKONIKA SYSTEMS', content)
        # 2. TitleCase: Ufin -> Tekonika Systems
        content = re.sub(r'\bUfin\b', 'Tekonika Systems', content)
        # 3. lowercase: ufin -> tekonika systems (but handle emails separately if needed, though they want all ufin replaced)
        # The user specifically said "jha v ufin likha hai usko tekonika systems se replace kro" 
        # But we should be careful with ufin.online. They probably still want tekonikasystems.online or maybe just "tekonika systems" text.
        # Let's replace 'ufin' with 'tekonika systems'
        content = re.sub(r'\bufin\b', 'tekonika systems', content)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

def main():
    root_dir = r"d:\ufin\UFIN-01\frontend\src"
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(('.js', '.jsx', '.css', '.html', '.json')):
                filepath = os.path.join(subdir, file)
                replace_in_file(filepath)

if __name__ == "__main__":
    main()
