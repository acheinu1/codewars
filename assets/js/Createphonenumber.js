// Write a function that accepts an array of 10 integers (between 0 and 9),
//  that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "

function CreatePhoneNumber(arr) {
  return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr
    .slice(6)
    .join('')}`;
}
console.log(CreatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// 22222222222222222222222222222222
function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return (
    '(' +
    numbers.substring(0, 3) +
    ') ' +
    numbers.substring(3, 6) +
    '-' +
    numbers.substring(6)
  );
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//333333333333333333333333333333333333333
function createPhoneNumber(numbers) {
  var format = '(xxx) xxx-xxxx';

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
