import fs from 'fs';

const htmlText = fs.readFileSync('app/uploaded1.html', 'utf8');

// extract styles
const styles = [...htmlText.matchAll(/<style([^>]*)>([\s\S]*?)<\/style>/g)];
let allStyles = '';
for (const match of styles) {
  allStyles += match[2] + '\n';
}

fs.writeFileSync('app/jonny.css', allStyles);

// extract main element
const mainMatch = htmlText.match(/<main([^>]*)>([\s\S]*?)<\/main>/);
if (mainMatch) {
  fs.writeFileSync('main_extracted.html', `<main${mainMatch[1]}>\n${mainMatch[2]}\n</main>`);
} else {
  console.log("No main found");
}

