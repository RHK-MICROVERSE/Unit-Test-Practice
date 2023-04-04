const rhkCalculation = require('./TaskThree.js');

describe('Testing rhkCalculator functionality',() =>{

  test('divide 777 / 7 is equal 111', () => {
    expect(rhkCalculation.divide(777, 7)).toBe(111);
  });

  test('divide 0 / 1 is Invalid!', () => {
    expect(rhkCalculation.divide(0, 1)).toBe('Invalid!');
  });

  test('divide 10 / 0 is Not Allowed!', () => {
    expect(rhkCalculation.divide(10, 0)).toBe('Not Allowed!');
  });

  test('divide 0 / 0 is Not Allowed!', () => {
    expect(rhkCalculation.divide(0, 0)).toBe('Not Allowed!');
  });

  test('multiply 5 * 5 is equal to 25', () => {
    expect(rhkCalculation.multiply(5, 5)).toBe(25);
  });

  test('multiply 97.5378 * 10000 is equal to 975378', () => {
    expect(rhkCalculation.multiply(97.5378, 10000)).toBe(975378);
  });

  test('multiply 325 * 7185 is equal to 2335125', () => {
    expect(rhkCalculation.multiply(325, 7185)).toBe(2335125);
  });

  test('subtraction 325 - 7185 is equal to -6860', () => {
    expect(rhkCalculation.subtract(325, 7185)).toBe(-6860);
  });

  test('subtraction 325 - (-7185) is equal to 7510', () => {
    expect(rhkCalculation.subtract(325, -7185)).toBe(7510);
  });

  test('subtraction -325 - 7185 is equal to -7510', () => {
    expect(rhkCalculation.subtract(-325, 7185)).toBe(-7510);
  });

  test('add 2 + 5 is equal to 7', () => {
    expect(rhkCalculation.add(2, 5)).toBe(7);
  });

  test('add -2 + -5 is equal to -7', () => {
    expect(rhkCalculation.add(-2, -5)).toBe(-7);
  });

  test('add 2 + -5 is equal to -3', () => {
    expect(rhkCalculation.add(2, -5)).toBe(-3);
  });
  
});




