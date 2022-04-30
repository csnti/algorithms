const alphabet = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";

function rotationalCipher(input, rotationFactor) {
  if (rotationFactor === 0) return input;
  let i = 0;
  let result = "";
  let isNumber = false;
  let isLetter = false;
  let upper = false;
  let phaseRun = false;
  let phase = rotationFactor;
  let charIndex = 0;
  let currentChar = input.charAt(i);

  while (i < input.length) {
    if (phaseRun === false) {
      currentChar = input.charAt(i);

      if (+currentChar) { // if (isNaN(currentChar) === false) {
        isNumber = true; 
      } else if (currentChar.toLowerCase() !== currentChar.toUpperCase()) { // else if (/^([a-zA-Z])$/.test(currentChar) === true) {
          isLetter = true;
          if (currentChar !== currentChar.toLowerCase()) {
            currentChar = currentChar.toLowerCase();
            upper = true;
          }
      } else {
          phase = 1; // If char isn't a number or a letter, skip to phase 0 immediately.
      }
      phaseRun = true; // Begin the rotation of this char.
    }

    if (isNumber === true) {
      charIndex = nums.indexOf(currentChar);
      currentChar = charIndex === 9 ? nums.charAt(0) : nums.charAt(charIndex + 1);
    }

    if (isLetter === true) {      
      charIndex = alphabet.indexOf(currentChar);    
      currentChar = charIndex === 25 ? alphabet.charAt(0) : alphabet.charAt(charIndex + 1);      
    }

    phase--;

    if (phase === 0) {      
      if (upper === true) {
        currentChar = currentChar.toUpperCase();
        upper = false;
      }
      
      i++;
      result += currentChar;
      isNumber = false;
      isLetter = false;
      phaseRun = false;
      phase = rotationFactor;
    }
  }
return result;
};
// O(n) time, O(n) space
// From what I understand, strings in Javascript are immutable. I don't know if O(1) space can be achieved.
// Constraints: input <= 1,000,000 
// Chromium starts to hang if input > 10,000,000










// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var input_1 = "All-convoYs-9-be:Alert1.";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
check(expected_1, output_1);

var input_2 = "abcdZXYzxy-999.@";
var rotationFactor_2 = 200;
var expected_2 = "stuvRPQrpq-999.@";
var output_2 = rotationalCipher(input_2, rotationFactor_2);
check(expected_2, output_2);

// Add your own test cases here
