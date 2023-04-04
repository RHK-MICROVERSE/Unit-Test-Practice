const stringReverse = require('./TaskTwo.js');

describe('testing string reverse function', () => {
  test('reverse the string rassel to lessar', () => {
    expect(stringReverse('rassel')).toBe('lessar');
  });
});

describe('testing string reverse function', () => {
  test('reversed of string hassan is nassah', () => {
    expect(stringReverse('hassan')).toBe('nassah');
  });
});

describe('testing string reverse function', () => {
  test('reversed of string kadir is ridak', () => {
    expect(stringReverse('kadir')).toBe('ridak');
  })
});

describe('testing string reverse function', () => {
  test('reversed of string rassel hassan kadir is ridak nassah lessar', () => {
    expect(stringReverse('rassel hassan kadir')).toBe('ridak nassah lessar');
  })
});