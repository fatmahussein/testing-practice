const count = require('./StringLength');

test('string length', () => {
  expect(count('camel')).toBe(5);
});

test('string length', () => {
  expect(count('xenophobias')).toBe(undefined);
})