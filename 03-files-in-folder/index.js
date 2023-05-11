const fs = require("fs/promises");
const path = require("path");

const secret = path.resolve(__dirname, "./secret-folder");

fs.readdir(secret, { withFileTypes: true }).then((files) => {
  files.forEach((file) => {
    if (file.isFile()) {
      fs.stat(path.resolve(secret, file.name)).then((fileS) => {
        const fileName = path.parse(file.name).name;
        const extend = path.parse(file.name).ext.slice(1);
        const fileSize = fileS.size / 1024;
        console.log(`${fileName} - ${extend} - ${fileSize}kb`);
      });
    }
  });
});
