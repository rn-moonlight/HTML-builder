const path = require('path');
const fsProm = require('fs/promises');

const originFiles = path.join(__dirname, "files")
const copyFiles = path.join(__dirname, "files-copy")

fsProm.rm(copyFiles, { recursive: true, force: true })
  .then(() => {
    fsProm.mkdir(copyFiles, { recursive: true })
      .then(() => copyFolder())
      .catch((err) => console.error(`Error: ${err}`));
  });

function copyFolder() {
  fsProm.readdir(originFiles)
    .then((files) => {
      files.forEach(file => {
        fsProm.copyFile(`${originFiles}/${file}`, `${copyFiles}/${file}`)
          .then(() => console.log('File has been copied.'))
          .catch((err) => console.error(`Error: ${err}`));
      });
    });
}