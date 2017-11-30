'use strict';

const reader = module.exports = {};
const fs = require(`fs`);

// reader.readFile = (callback) => {
//   let filePath = `${__dirname}/../assets/cupcakes.txt`;
//   fs.readFile(filePath,(error,output) => {
//     if(error)
//       callback(error);
//
//     callback(null,output.toString('utf-8',0,64));
//   });
// };

// reader.readFile = (paths, callback) => {
//   let filePaths = [`${__dirname}/../assets/cupcakes.txt`, `${__dirname}/../assets/keep_calm.txt`, `${__dirname}/../assets/pirate.txt`];
//   fs.readFile(filePaths[0], (error, output) => {
//     if(error)
//       callback(error);
//
//     callback(null, output.toString('utf-8', 0, 64));
//   });
// };

reader.readFile = (paths, callback) => {
  let filePaths = [`${__dirname}/../assets/cupcakes.txt`, `${__dirname}/../assets/keep_calm.txt`, `${__dirname}/../assets/pirate.txt`];
  let newArray = [];
  fs.readFile(filePaths[0], (error, output) => {
    if (error)
      callback(error);
    newArray.push(output.toString(`utf-8`, 0, 64));
    console.log(newArray, `this is the New Array after function 1`);

    fs.readFile(filePaths[1], () => {
      if (error)
        callback(error);
      newArray.push(output.toString(`utf-8`, 0, 64));
      console.log(newArray, `this is the New Array after function 2`);

      fs.readFile(filePaths[2], () => {
        if (error)
          callback(error);
        newArray.push(output.toString(`utf-8`, 0, 64));
        console.log(newArray, `this is the New Array after function 3`);
        callback(null, newArray.push(output.toString(`utf-8`, 0, 64)))
      });
    });
  });
}
