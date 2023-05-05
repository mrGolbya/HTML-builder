const fs = require("fs");
const path = require('path');

fs.readFile(path.resolve(__dirname, './text.txt'), function(err, data){
    if (err) {
        console.log(err);
    } else {
      console.log(data.toString()); // содержимое файла
    }
});