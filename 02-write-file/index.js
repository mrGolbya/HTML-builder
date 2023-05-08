const fs = require('fs');
const path = require('path');
const readline = require('readline');

const writeStr = fs.createWriteStream(path.resolve(__dirname, './text.txt'));
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Введите Ваш текст:');

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('Отличная работа!');
    process.exit();
  } else {
    writeStr.write(input+'\n', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
  