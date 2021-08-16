module.exports = function toReadable (number) {
  var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const convert = (number) => {
      if (number < 10) {
          return units[number];
      } else if (number >= 10 && number < 20) {
          return teens[number - 10];
      } else {
          result1 = `${tens[Math.floor(number / 10)]} ${units[number % 10]}`;
          return result1.trim();
      }
  };
  if (number > 99) {
      result2 = `${units[Math.floor(number / 100)]} hundred ${convert(number % 100)}`;
      return result2.trim();
  } else if (number === 0) {
      return 'zero';
  } else if (number < 0 || number > 999) {
      return false;
  } else {
      return convert(number);
  }
}
