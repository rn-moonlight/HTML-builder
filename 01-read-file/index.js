const fs = require('fs');
const path = require('path');

const reader = fs.createReadStream(path.join(__dirname, 'text.txt'), {encoding: 'utf-8'});

reader.on('data', (data) => {
  console.log(data)
});

reader.on('error', (err) => {
  console.error(`Error: ${err}`)
});
