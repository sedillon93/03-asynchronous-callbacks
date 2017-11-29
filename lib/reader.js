'use strict';

const reader = module.exports = {};
const fs = require(`fs`);

reader.readFile = (callback) => {
  let filePath = `${__dirname}/../assets/cupcakes.txt`;
  fs.readFile(filePath,(error,output) => {
    if(error)
      callback(error);

    callback(null,output.toString('utf-8',0,64));
  });
};
