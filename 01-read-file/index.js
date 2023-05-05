const fs = require('fs');
const path = require('path');
const read = fs.createReadStream(path.resolve(__dirname, './text.txt'),'utf-8');

read.on('data', chunk => console.log(chunk));
read.on('end', () => console.log('End'));
read.on('error', error => console.log('Error', error.message));
