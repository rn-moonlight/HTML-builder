const fs = require('fs');
const path = require('path');

const stylesPath = path.join(__dirname, "styles")
const bundlePath = path.join(__dirname, "project-dist", "bundle.css")

function bundleStyles(style, bundle) {
  const ws = fs.createWriteStream(bundle, 'utf-8');

  fs.readdir(style, {withFileTypes: true, encoding: 'utf-8'}, (err, files) => {
    if (err) {
      return console.error(`Error: ${err}`);
    }
  
    files
      .filter(file => file.isFile())
      .filter(file => path.parse(file.name).ext === '.css')
      .forEach(file => {
        const readStyles = fs.createReadStream(path.join(style, file.name));
        readStyles.pipe(ws);
      })
  });
}

bundleStyles(stylesPath, bundlePath);
