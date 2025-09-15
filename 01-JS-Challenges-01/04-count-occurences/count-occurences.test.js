const countOccurences = require("./count-occurences");


test('Count Occurrences of a Character', () => {
  expect(countOccurences('hello', 'l')).toBe(2);
  expect(countOccurences('programming', 'm')).toBe(2);
  expect(countOccurences('banana', 'a')).toBe(3);
});

