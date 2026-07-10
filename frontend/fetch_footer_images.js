const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

https.get('https://ufin.online/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const footer = $('footer');
    
    // Find all images in footer
    const images = [];
    footer.find('img').each((i, el) => {
      let src = $(el).attr('data-src-webp') || $(el).attr('data-src') || $(el).attr('src');
      if (src) {
        if (src.startsWith('/')) src = 'https://ufin.online' + src;
        images.push(src);
      }
    });

    // Also look for explicit svg or background images if any, but let's just print images first
    console.log("Found images in footer:", images);
    
    // Download them
    images.forEach(imgUrl => {
      const filename = path.basename(new URL(imgUrl).pathname);
      const dest = path.join('D:/ufin/UFIN-01/frontend/src/assets', filename);
      https.get(imgUrl, (res2) => {
        const file = fs.createWriteStream(dest);
        res2.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded', filename);
        });
      }).on('error', (err) => console.error(err));
    });
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
