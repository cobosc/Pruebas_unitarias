const palindromo = require('../utils/palindromo');

test('Comprobar reverse 1', () => {
    expect(palindromo("perro")).toBe("orrep");
})

test('Comprobar reverse 2', () => {
    expect(palindromo("hola perro")).toBe("orrep aloh");
})
describe('palindromo', () => {
    test.each`
      firstValue  | expectedResult    
      ${"CASA"}        | ${"ASAC"}
      ${"perro"}       | ${"orrep"}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });