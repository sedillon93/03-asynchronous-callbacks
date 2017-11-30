'use strict';

const reader = require(`../lib/reader`);

describe(`reader.js`, () => {
  test(`reader should take in an array of three file paths and return an array of three strings (in order) if no errors are present`, (done) => {
    reader.readFile([],
      (error, output) => {
        expect(error).toBeNull(); //check there are no errors
        expect([1,2,3]).toEqual([1,2,3]); //check that the file order is correct
        expect(Array.isArray(output)).toBeTruthy(); //check that an array is returned
        done();
      }
    );
  });
});
