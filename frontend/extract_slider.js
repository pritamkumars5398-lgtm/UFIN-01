const fs = require('fs');
const html = fs.readFileSync('D:/ufin/UFIN-01/ufin.html', 'utf8');

const regex = /<a[^>]*class="card__item swiper-slide bg-white"[^>]*href="([^"]+)"[^>]*>[\s\S]*?<img[^>]*data-src="([^"]+)"[\s\S]*?<div[^>]*class="card__title[^"]*"[^>]*>([^<]+)<\/div>[\s\S]*?<p[^>]*class="card__description[^"]*"[^>]*>([^<]+)<\/p>/gi;

let match;
const results = [];
while ((match = regex.exec(html)) !== null) {
  results.push({
    link: match[1],
    img: match[2],
    title: match[3].trim(),
    country: match[4].trim()
  });
}

console.log(JSON.stringify(results.slice(0, 15), null, 2));
