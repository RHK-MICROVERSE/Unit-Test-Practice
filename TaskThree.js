class rhkCalculator {

  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }

  static multiply(x, y) {
    return x * y;
  }

  static divide(x, y) {
    if (x === 0 && y !== 0)
      return "Invalid!";

    if (x === 0 && y === 0)
      return "Not Allowed!";

    if (x !== 0 && y === 0)
      return "Not Allowed!";

    return x / y;
  }

};

module.exports = rhkCalculator;

// console.log(rhkCalculator.divide(3, 0))
// console.log(rhkCalculator.divide(16, 4))
// console.log(rhkCalculator.multiply(1.5, 2))
// console.log(rhkCalculator.subtract(3, 1))
// console.log(rhkCalculator.add(.5, 0.5))