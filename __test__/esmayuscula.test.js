const isUpperCase = require('c:/Users/Usuario/Desktop/Curso QA/Pruebas_unitarias/utils/esmayuscula');


  test('should return true for all uppercase letters', () => {
    expect(isUpperCase('HELLO')).toBe(true);
  });

  test('should return true for all uppercase letters', () => {
    expect(isUpperCase('hello')).toBe(false);
  });
  describe('tablamayuscula', () => {
    test.each`
      firstValue  | expectedResult    
      ${'CASA'}        | ${true}
      ${'perro'}       | ${false}
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });