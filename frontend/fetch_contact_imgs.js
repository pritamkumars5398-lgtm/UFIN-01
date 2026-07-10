const https = require('https');
const fs = require('fs');
const path = require('path');

function download(url, dest) {
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://ufin.online/kontakty/'
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        console.log('Redirect to:', res.headers.location);
        download(res.headers.location, dest).then(resolve);
        return;
      }
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => { file.close(); console.log('✓ Downloaded:', path.basename(dest)); resolve(true); });
      } else {
        console.log('✗ Failed:', res.statusCode, url);
        resolve(false);
      }
    });
    req.on('error', (e) => { console.log('✗ Error:', e.message); resolve(false); });
  });
}

const base = 'D:/ufin/UFIN-01/frontend/src/assets/';

async function run() {
  // Try various URLs for the hero phone/hand image
  const heroAttempts = [
    'https://ufin.online/wp-content/uploads/2021/12/kontakty-scaled.jpg',
    'https://ufin.online/wp-content/uploads/2021/12/kontakty.jpg',
    'https://ufin.online/wp-content/uploads/2022/01/kontakty.jpg',
    'https://ufin.online/wp-content/uploads/2022/01/kontakty-scaled.jpg',
    'https://ufin.online/wp-content/uploads/2023/01/kontakty-scaled.jpg',
    'https://ufin.online/wp-content/uploads/2023/01/kontakty.jpg',
    'https://ufin.online/wp-content/uploads/2024/01/kontakty.jpg',
    'https://ufin.online/wp-content/uploads/kontakty.jpg',
    'https://ufin.online/wp-content/uploads/2021/12/kontakty.jpg.webp',
    'https://ufin.online/wp-content/uploads/2021/12/kontakty-scaled.jpg.webp',
    'https://ufin.online/wp-content/uploads/2022/08/rybric-bg.png',
    'https://ufin.online/wp-content/uploads/2023/09/contacts-hero.jpg',
    'https://ufin.online/wp-content/uploads/2023/09/kontakty.jpg',
    'https://ufin.online/wp-content/uploads/2024/12/kontakty.jpg',
    'https://ufin.online/wp-content/uploads/2025/01/kontakty.jpg',
  ];
  
  for (const url of heroAttempts) {
    const ext = url.includes('.webp') ? '.webp' : '.jpg';
    const ok = await download(url, base + 'contacts-hero' + ext);
    if (ok) { console.log('Hero image found at:', url); break; }
  }

  // Try various URLs for Alexey Osipov standing image (transparent bg)
  const ceoAttempts = [
    'https://ufin.online/wp-content/uploads/2023/01/Osipov-Alexey-Ufin.png',
    'https://ufin.online/wp-content/uploads/2023/01/osipov-alexey.png',
    'https://ufin.online/wp-content/uploads/2024/01/osipov.png',
    'https://ufin.online/wp-content/uploads/2023/01/alexey-osipov.png',
    'https://ufin.online/wp-content/uploads/2023/06/Osipov-Alexey-Ufin.png',
    'https://ufin.online/wp-content/uploads/2024/06/osipov.png',
    'https://ufin.online/wp-content/uploads/2023/01/osipov.webp',
    'https://ufin.online/wp-content/uploads/2023/01/Osipov-Alexey-Ufin.png.webp',
    'https://ufin.online/wp-content/uploads/2024/01/Osipov-Alexey-Ufin.png',
    'https://ufin.online/wp-content/uploads/2025/01/osipov.png',
    'https://ufin.online/wp-content/uploads/osipov.png',
    'https://ufin.online/wp-content/uploads/aleksej-osipov.png',
    'https://ufin.online/wp-content/uploads/aleksej-osipov.png.webp',
    'https://ufin.online/wp-content/uploads/2023/04/aleksej-osipov.png',
    'https://ufin.online/wp-content/uploads/2023/04/Osipov-Alexey-Ufin.png',
    'https://ufin.online/wp-content/uploads/2022/10/Osipov-Alexey-Ufin.png',
    'https://ufin.online/wp-content/uploads/2022/12/Osipov-Alexey-Ufin.png',
  ];
  
  for (const url of ceoAttempts) {
    const ext = url.includes('.webp') ? '.webp' : '.png';
    const ok = await download(url, base + 'osipov-fullbody' + ext);
    if (ok) { console.log('CEO image found at:', url); break; }
  }
  
  console.log('Done!');
}

run();
