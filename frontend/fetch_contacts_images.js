const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Hero background (phone in hand image) - using the one from the page
  'https://ufin.online/wp-content/uploads/2023/04/logos_telegram.svg',
  'https://ufin.online/wp-content/uploads/icon_rutube_dark_color_circle.svg',
  // Department icons  
  'https://ufin.online/wp-content/uploads/2023/04/kontakty-ikona-1.svg',
  'https://ufin.online/wp-content/uploads/2023/04/kontakty-ikona-2.svg',
  'https://ufin.online/wp-content/uploads/2023/04/kontakty-ikona-3.svg',
  'https://ufin.online/wp-content/uploads/2023/04/kontakty-ikona-4.svg',
];

images.forEach(imgUrl => {
  try {
    const urlObj = new URL(imgUrl);
    const filename = path.basename(urlObj.pathname);
    const dest = path.join('D:/ufin/UFIN-01/frontend/src/assets', filename);
    https.get(imgUrl + '?x45676', (res2) => {
      if (res2.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res2.pipe(file);
        file.on('finish', () => { file.close(); console.log('Downloaded', filename); });
      } else {
        console.log('Failed:', imgUrl, res2.statusCode);
      }
    }).on('error', (err) => console.error('Error:', imgUrl, err.message));
  } catch(e) {
    console.error('Bad URL:', imgUrl);
  }
});

// Also try to get the contacts hero image
const heroUrl = 'https://ufin.online/wp-content/uploads/2022/12/kontakty-fon.jpg';
const heroUrlWebp = 'https://ufin.online/wp-content/uploads/2022/12/kontakty-fon.jpg.webp';
[heroUrl, heroUrlWebp].forEach(imgUrl => {
  try {
    const urlObj = new URL(imgUrl);
    const filename = path.basename(urlObj.pathname);
    const dest = path.join('D:/ufin/UFIN-01/frontend/src/assets', filename);
    https.get(imgUrl, (res2) => {
      if (res2.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res2.pipe(file);
        file.on('finish', () => { file.close(); console.log('Downloaded hero:', filename); });
      } else {
        console.log('Failed hero:', imgUrl, res2.statusCode);
      }
    }).on('error', (err) => console.error('Error hero:', err.message));
  } catch(e) {}
});

// Also get Alexey Osipov image
const alexeyUrls = [
  'https://ufin.online/wp-content/uploads/2023/01/Osipov-Alexey-Ufin.png',
  'https://ufin.online/wp-content/uploads/2023/01/Osipov-Alexey-Ufin.webp',
  'https://ufin.online/wp-content/uploads/2023/01/Osipov-Alexey-Ufin.png.webp',
];
alexeyUrls.forEach(imgUrl => {
  try {
    const urlObj = new URL(imgUrl);
    const filename = path.basename(urlObj.pathname);
    const dest = path.join('D:/ufin/UFIN-01/frontend/src/assets', filename);
    https.get(imgUrl, (res2) => {
      if (res2.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res2.pipe(file);
        file.on('finish', () => { file.close(); console.log('Downloaded alexey:', filename); });
      } else {
        console.log('Failed alexey:', imgUrl, res2.statusCode);
      }
    }).on('error', (err) => {});
  } catch(e) {}
});

// Yandex rating image
const ratingUrl = 'https://ufin.online/wp-content/uploads/2023/04/rating-ya-1.svg';
try {
  const urlObj = new URL(ratingUrl);
  const filename = path.basename(urlObj.pathname);
  const dest = path.join('D:/ufin/UFIN-01/frontend/src/assets', filename);
  https.get(ratingUrl + '?x45676', (res2) => {
    if (res2.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res2.pipe(file);
      file.on('finish', () => { file.close(); console.log('Downloaded rating:', filename); });
    } else {
      console.log('Failed rating:', res2.statusCode);
    }
  }).on('error', () => {});
} catch(e) {}

setTimeout(() => console.log('Done.'), 8000);
