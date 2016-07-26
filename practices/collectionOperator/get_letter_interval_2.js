'use strict';

function get_letter_interval_2(number_a, number_b) {
  let array = [];
  let array1 = [];
  let result = [];
  for (let i = 0; i < 26; i++) {
    array.push(String.fromCharCode(i + 97));
  }
  array1 = [''];
  for (let i = 0; i < 26; i++) {
    array1.push(String.fromCharCode(i + 97));
  }
  if (number_a <= number_b) {
    for (let i = number_a - 1; i < number_b; i++) {
      result.push(array1[parseInt(i / 26)] + array[i % 26]);
    }
  }

  else {
    for (let i = number_a-1; i >=number_b-1; i--) {

      result.push(array1[parseInt(i / 26)] + array[i % 26]);
    }
  }
  return result;
}

module.exports = get_letter_interval_2;


