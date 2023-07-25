
const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two numbers correctly', () => {
      expect(calculator.sum(2, 3)).toBe(5);
    });

    test('adds negative numbers correctly', () => {
      expect(calculator.sum(-5, -3)).toBe(-8);
    });

    test('returns zero when adding zero to a number', () => {
      expect(calculator.sum(10, 0)).toBe(10);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts negative numbers correctly', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('returns the same number when subtracting zero', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies a number by zero', () => {
      expect(calculator.multiply(10, 0)).toBe(0);
    });

    test('multiplies negative numbers correctly', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });
  });

  describe('divide', () => {
    test('divides two numbers correctly', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('returns the same number when dividing by one', () => {
      expect(calculator.divide(10, 1)).toBe(10);
    });
  });
});