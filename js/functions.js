//Функция для проверки длины строки
const stringCheck = (string, maxLength) => string.length <= maxLength;

// Функция для проверки палиндрома
function isPalindrome(string) {
  string = string.replaceAll(' ', '').toLowerCase();

  return string.split('').reverse().join('') === string;
}

// Функция для нахождения цифр в строке
function integerExtraction(string) {
  string = string.toString().replaceAll(' ', '');
  let extractedNumber = '';
  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(Number(string[i]))) {
      extractedNumber += string[i];
    }
  }
  if (extractedNumber === '') {
    return NaN;
  }

  return extractedNumber;
}

