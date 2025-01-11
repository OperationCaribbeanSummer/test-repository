const sum = require('../sub');

test('sub 5 - 1 to equal 4', () => {
  expect(sum(5, 1)).toBe(4);
  // expect(sum(-5, 1)).toBe(4);
});
