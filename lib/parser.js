const fs = require('fs');
const FONTAWESOME_ICONS = /glyph\-name\=\"(.*?)\"/g;

let fa = [];

fs.readFile('lib/fa-solid-900.svg', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  fa = data.match(FONTAWESOME_ICONS).map((item) => item.replace('glyph-name=', '').replace(/\"/g, ''));
  fs.writeFile('./dist/fontawesome.json', JSON.stringify(fa), (err) => console.log(err));
});
