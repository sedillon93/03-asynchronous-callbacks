'use strict';

const reader = require(`../lib/reader`);

describe(`reader.js`, () => {
  test(`reader should take in an array of three file paths and return an array of three strings if no errors are present`, (done) => {
    reader.readFile((error, output) => {
      expect(error).toBeNull();
      done();
    });
  });
});

// describe(`this file`, () => {
//   test(`some function does what I think`, () => {
//     expect(object.method(inputs)).toBe(expected output);
//   })
// })
