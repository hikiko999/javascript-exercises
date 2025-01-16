const convertToCelsius = function(fahrenheit) {
  // Formula: (32°F − 32) × 5/9 = 0°C
  const celsius = (fahrenheit - 32) * 5/9;
  return Math.round(celsius*10)/10;
};

const convertToFahrenheit = function(celsius) {
  // Formula: (0°C × 9/5) + 32 = 32°F
  const fahrenheit = (celsius * 9/5) + 32
  return Math.round(fahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
