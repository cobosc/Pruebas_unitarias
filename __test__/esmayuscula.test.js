const isUpperCase = require('c:/Users/Usuario/Desktop/Curso QA/Pruebas_unitarias/utils/esmayuscula');


  test('should return true for all uppercase letters', () => {
    expect(isUpperCase('HELLO')).toBe(true);
  });

  test('should return true for all uppercase letters', () => {
    expect(isUpperCase('hello')).toBe(false);
  });