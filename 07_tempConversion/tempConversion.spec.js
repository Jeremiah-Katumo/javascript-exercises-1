const {convertToCelsius, convertToFahrenheit} = require('./tempConversion');

describe('convertToCelsius', () => {
  test('works', () => {
    expect(convertFahrenheitToCelsius(32)).toEqual(0);
  });
  test('rounds to 1 decimal', () => {
    expect(convertFahrenheitToCelsius(100)).toEqual(37.8);
  });
  test('works with negatives', () => {
    expect(convertFahrenheitToCelsius(-100)).toEqual(-73.3);
  });
});

describe('convertToFahrenheit', () => {
  test('works', () => {
    expect(convertCelsiusToFahrenheit(0)).toEqual(32);
  });
  test('rounds to 1 decimal', () => {
    expect(convertCelsiusToFahrenheit(73.2)).toEqual(163.8);
  });
  test('works with negatives', () => {
    expect(convertCelsiusToFahrenheit(-10)).toEqual(14);
  });
});
