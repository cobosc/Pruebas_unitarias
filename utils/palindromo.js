//FUNCIÓN A PROBAR
const palindromo = (string) => {
    return string
    .split('')
    .reverse()
    .join('')
}

module.exports = palindromo;
describe('espalindromo', () => {
    test.each`
      firstValue  | expectedResult    
      ${'CASA'}        | ${ASAC}
      ${'perro'}       | ${orrep}
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });