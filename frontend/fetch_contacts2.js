const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function downloadUrl(url, dest) {
  return new Promise((resolve) => {
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://ufin.online/' }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadUrl(res.headers.location, dest).then(resolve);
        return;
      }
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => { file.close(); console.log('OK:', path.basename(dest)); resolve(true); });
      } else {
        console.log('FAIL', res.statusCode, url);
        resolve(false);
      }
    });
    req.on('error', (e) => { console.log('ERR:', e.message, url); resolve(false); });
  });
}

const base = 'D:/ufin/UFIN-01/frontend/src/assets/';

async function run() {
  // Try Alexey Osipov image
  await downloadUrl('https://ufin.online/wp-content/uploads/2023/01/Osipov-Alexey-Ufin.png', base + 'osipov-alexey.png');
  
  // Try the contacts hero bg - different paths
  const heroPaths = [
    '/wp-content/uploads/2023/04/kontakty-bg.jpg',
    '/wp-content/uploads/2023/04/kontakty-main.jpg',
    '/wp-content/uploads/kontakty-fon.jpg',
    '/wp-content/uploads/contacts-bg.jpg',
    '/wp-content/uploads/2022/08/kontakty.jpg',
  ];
  for (const p of heroPaths) {
    const ok = await downloadUrl('https://ufin.online' + p, base + path.basename(p));
    if (ok) break;
  }
  
  // Yandex rating 
  const ratingPaths = [
    '/wp-content/uploads/rating-ya-1.svg',
    '/wp-content/uploads/2023/04/rating-ya.svg',
    '/wp-content/uploads/yandex-rating.svg',
  ];
  for (const p of ratingPaths) {
    const ok = await downloadUrl('https://ufin.online' + p, base + path.basename(p));
    if (ok) break;
  }
  
  console.log('All done.');
}

run();
