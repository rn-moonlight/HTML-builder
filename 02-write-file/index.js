const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const writer = fs.createWriteStream(path.join(__dirname, 'text.txt'), {encoding: 'utf-8'});

stdout.write('Hello, please enter your text!\n');

stdin.on('data', (data) => {
    data.toString().trim() === 'exit' ? process.exit() : writer.write(data);
});

process.on('exit', () => {
    stdout.write('The file "text.txt" has already been created!\nGoodbye!\n');
});

writer.on('error', (err) => {
    console.error(`Error: ${err}`);
    process.exit();
});

process.on('SIGINT', () => {
    process.exit();
});