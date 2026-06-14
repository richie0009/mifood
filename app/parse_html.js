const fs = require('fs');

const html = fs.readFileSync('uploaded.html', 'utf8');

const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (mainMatch) {
  fs.writeFileSync('extracted_main.html', mainMatch[0]);
}

const stylesMatches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
let allStyles = '';
stylesMatches.forEach(m => {
  allStyles += m[1] + '\n';
});
fs.writeFileSync('extracted_styles.css', allStyles);
