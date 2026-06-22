const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\3850b008-5a56-43bd-b70e-89f98c26fb17\\.system_generated\\steps\\68\\content.md', 'utf8');

// A simple approach: remove script, style, and head
let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
               .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
               .replace(/<head\b[^<]*(?:(?!<\/head>)<[^<]*)*<\/head>/gi, '')
               .replace(/<[^>]+>/g, ' ')
               .replace(/\s+/g, ' ')
               .trim();

console.log(text.substring(0, 3000));
