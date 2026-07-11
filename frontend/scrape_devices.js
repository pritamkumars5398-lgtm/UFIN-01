const cheerio = require('cheerio');
const fs = require('fs');

async function scrape() {
  const res = await fetch('https://ufin.online/');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const items = [];
  $('.swiper-slide').each((i, el) => {
    const title = $(el).find('h3').text().trim();
    const img = $(el).find('img').attr('src');
    const desc = $(el).find('p').text().trim();
    if (title) {
      items.push({ title, img, desc });
    }
  });
  console.log(JSON.stringify(items, null, 2));
}

scrape();
