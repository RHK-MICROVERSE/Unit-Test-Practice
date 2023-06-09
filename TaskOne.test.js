const stringCount = require('./TaskOne');

describe('Count space string length', () => {
  test('string length for space string equal 1', () => {
    expect(stringCount(' ')).toBe(1);
  });
});


describe('COUNT Rassel string length', () => {
  test('string length for rassel equal 6', () => {
    expect(stringCount('Rassel')).toBe(6);
  });
});

describe('count Kadir string length', () => {
  test('string length for Kadir equal 5', () => {
    expect(stringCount('Kadir')).toBe(5);
  });
});


describe('COUNT double space string length', () => {
  test('string length for double space string equal 2', () => {
    expect(stringCount('  ')).toBe(2);
  });
});

describe('throws error for empty string length', () => {
  test('throws on empty string', () => {
    expect(() => {
      stringCount('');
    }).toThrow(new Error("The string arguments is at least 1 character long and not longer than 10 characters!"));
  });
});


describe('throws error for string length characters more than 10', () => {
  test('throws on string longer than 10', () => {
    expect(() => {
      stringCount('Rassel Hassan Kadir');
    }).toThrow(new Error("The string arguments is at least 1 character long and not longer than 10 characters!"));
  });
});


