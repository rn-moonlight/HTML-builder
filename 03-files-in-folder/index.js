const fs = require('fs');
const path = require('path');
const pathFolder = path.join(__dirname, "secret-folder");

fs.readdir(pathFolder, {withFileTypes: true}, (err, items) => {
    if (err) {
      console.error(`Error: ${err}`);
    }

    items.forEach((file) => {
      if(file.isFile()) {
        let currPath = path.join(pathFolder, file.name);

        fs.stat(currPath, (err, stats) => {
          if (err) {
            console.error(`Error: ${err}`);
          }

          let fileName = file.name.split('.')[0];
          let extName = path.extname(currPath).slice(1);
          let fileSize = (stats.size / 1024).toFixed(3);

          console.log(`${fileName} - ${extName} - ${fileSize}kb`);
        })
      }
    })
})

