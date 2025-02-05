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

function isMeetingPossible(dayStart, dayEnd, meetingStart, meetingDuration) {
  const hoursToMinutes = (time) => time.split(':').reduce((hours, minutes) => hours * 60 + Number(minutes));

  return hoursToMinutes(meetingStart) >= hoursToMinutes(dayStart) && (hoursToMinutes(meetingStart) + meetingDuration) <= hoursToMinutes(dayEnd);
}

isMeetingPossible('08:00', '17:30', '14:00', 90); // true
isMeetingPossible('8:0', '10:0', '8:0', 120); // true
isMeetingPossible('08:00', '14:30', '14:00', 90); // false
isMeetingPossible('14:00', '17:30', '08:0', 90); // false
isMeetingPossible('8:00', '17:30', '08:00', 900); // false

