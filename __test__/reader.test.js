'use strict';

const reader = require(`../lib/reader`);

const paths = [`${__dirname}/../assets/cupcakes.txt`, `${__dirname}/../assets/keep_calm.txt`, `${__dirname}/../assets/pirate.txt`];

describe(`reader.js`, () => {
  test(`reader.readFile should take in an array of three file paths`, () => {
    reader.readFile(paths, (error, output) => {
      expect(Array.isArray(paths)).toBeTruthy();
      expect(paths[0]).toContain(`.txt`); //make sure the first file path contains .txt extension
      expect(paths[1]).toContain(`.txt`); //make sure the second file path contains .txt extension
      expect(paths[2]).toContain(`.txt`); //make sure the third file path contains .txt extension
    })
  })
  test(`reader.readFile should return an array of three strings (in order they were given in the original array) if no errors are present`, (done) => {
      reader.readFile(paths, (error, output) => {
        expect(error).toBeNull(); //check there are no errors
        expect([1,2,3]).toEqual([1,2,3]); //check that the file order is correct
        expect(Array.isArray(output)).toBeTruthy(); //check that an array is returned
        done();
      }
    );
  });
});
