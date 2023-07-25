const capitalize = require('./Capitalize');

describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns an empty string when input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('throws an error for non-string input', () => {
    expect(() => capitalize(123)).toThrow('Input should be a string');
  });
  test('does not change a string with the first character already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });
});