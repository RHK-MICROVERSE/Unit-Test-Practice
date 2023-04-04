const initialCap = require('./TaskFour.js');

describe('Testing capitalize(string) function', () => {

  test('if input: r output: R', () => {
    expect(initialCap('r')).toBe('R');
  });

  test('if input: rassel output: Rassel', () => {
    expect(initialCap('rassel')).toBe('Rassel');
  });

  test('if input: ra output: Ra', () => {
    expect(() => {
      initialCap('');
    }).toThrow(new Error('Input String is empty'));
  });
});