const fs = require('fs');

const html = fs.readFileSync('C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\3850b008-5a56-43bd-b70e-89f98c26fb17\\.system_generated\\steps\\68\\content.md', 'utf8');

// Remove script and style tags
let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
// Remove head
clean = clean.replace(/<head\b[^<]*(?:(?!<\/head>)<[^<]*)*<\/head>/gi, '');

// match h1, h2, h3, p
const regex = /<(h[1-6]|p|a|span|div)[^>]*>([\s\S]*?)<\/\1>/gi;
let match;
const tags = [];
while ((match = regex.exec(clean)) !== null) {
  let text = match[2].replace(/<[^>]+>/g, '').trim();
  text = text.replace(/\s+/g, ' ');
  if (text && text.length > 2) {
    tags.push(`${match[1].toUpperCase()}: ${text}`);
  }
}

console.log([...new Set(tags)].join('\n'));
