'use strict';

const reader = module.exports = {};
const fs = require(`fs`);

let filePaths = [`${__dirname}/../assets/cupcakes.txt`, `${__dirname}/../assets/keep_calm.txt`, `${__dirname}/../assets/pirate.txt`];

reader.readFile = (paths, callback) => {
  let newArray = [];
  fs.readFile(filePaths[0], (error, output) => {
    if (error)
      callback(error);
    newArray.push(output.toString(`utf-8`, 0, 64));

    fs.readFile(filePaths[1], (error, output) => {
      if (error)
        callback(error);
      newArray.push(output.toString(`utf-8`, 0, 64));

      fs.readFile(filePaths[2], (error, output) => {
        if (error)
          callback(error);
        newArray.push(output.toString(`utf-8`, 0, 64));
        callback(null, newArray);
      });
    });
  });
}
