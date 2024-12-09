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


console.log(stringCheck('проверяемая строка', 20));
console.log(stringCheck('проверяемая строка', 18));
console.log(stringCheck('проверяемая строка', 10));


console.log(isPalindrome('топот'));

console.log(integerExtraction('2023 год'));
console.log(integerExtraction('ECMAScript 2022'));
console.log(integerExtraction('1 кефир, 0.5 батона'));
console.log(integerExtraction('агент 007'));
console.log(integerExtraction('а я томат'));
console.log(integerExtraction(2023));
console.log(integerExtraction(-1));
console.log(integerExtraction(1.5));

