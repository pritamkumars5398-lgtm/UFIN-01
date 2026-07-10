const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');
const path = require('path');

const html = fs.readFileSync('D:/ufin/UFIN-01/ufin.html', 'utf8');
const $ = cheerio.load(html);

// Find the section that has "Более 500 компаний"
// Actually, let's just find the slider that contains Torex.
// Torex in Russian is "Торэкс".
let companySlider = null;
$('a.card__item.swiper-slide').each((i, el) => {
    const title = $(el).find('.card__title').text().trim();
    if (title === 'Торэкс' || title === 'Torex') {
        companySlider = $(el).closest('.swiper-wrapper');
    }
});

if (!companySlider) {
    console.log('Slider not found');
    process.exit(1);
}

const companies = [];
companySlider.find('a.card__item').each((i, el) => {
    const title = $(el).find('.card__title').text().trim();
    const country = $(el).find('.card__description').text().trim();
    let imgUrl = $(el).find('img').attr('data-src-webp') || $(el).find('img').attr('data-src') || $(el).find('img').attr('src');
    
    if (imgUrl && title) {
        // Handle relative URLs just in case
        if (imgUrl.startsWith('/')) {
            imgUrl = 'https://ufin.online' + imgUrl;
        }
        companies.push({ title, country, imgUrl });
    }
});

console.log(`Found ${companies.length} companies.`);

// Let's generate a JSON array and download the images.
const assetsDir = 'D:/ufin/UFIN-01/frontend/src/assets/companies';
if (!fs.existsSync(assetsDir)){
    fs.mkdirSync(assetsDir, { recursive: true });
}

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err.message);
        });
    });
};

async function processCompanies() {
    const resultData = [];
    for (let i = 0; i < companies.length; i++) {
        const c = companies[i];
        let filename = c.imgUrl.split('/').pop().split('?')[0];
        // clean up .webp if present to keep it simple, or keep it.
        const dest = path.join(assetsDir, filename);
        
        console.log(`Downloading ${filename}...`);
        try {
            await download(c.imgUrl, dest);
            resultData.push({
                name: c.title,
                country: c.country,
                imgFile: filename
            });
        } catch (e) {
            console.error(`Failed to download ${c.imgUrl}: ${e}`);
        }
    }
    
    fs.writeFileSync('D:/ufin/UFIN-01/frontend/src/data/company_slider.json', JSON.stringify(resultData, null, 2));
    console.log('Done!');
}

processCompanies();
