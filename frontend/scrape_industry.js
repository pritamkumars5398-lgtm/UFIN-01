const cheerio = require('cheerio');
const https = require('https');

https.get('https://ufin.online/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const $ = cheerio.load(data);
    const areas = $('.b-areas').parent().html();
    console.log(areas ? areas.substring(0, 1500) : 'Not found b-areas');
  });
});
