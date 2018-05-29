const fs = require('fs');
const FONTAWESOME_ICONS = /\.([a-zA-Z\-]+)\:before/g;

let fa = [];

fs.readFile('lib/fontawesome-all.min.css', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  fa = data.match(FONTAWESOME_ICONS).map((item) => item.replace('.', '').replace(':before', ''));

  fs.writeFile('./dist/fontawesome.json', JSON.stringify(fa), (err) => console.log(err));
});
