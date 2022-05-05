function findEncryptedWord(s) {
  let mid = s.length % 2 === 1 ? Math.floor(s.length / 2) : s.length / 2 - 1;

  if (s === "") return s;  
  return s.charAt(mid) + findEncryptedWord(s.substring(0, mid)) + findEncryptedWord(s.substring(mid + 1));
};
// If s has an odd length, half it, the middle is rounded down.
// If s has an even length, half it, subtract one to get the "left-most" index in the middle.
// Get the middle char of s and append the "left side" of s (up-to mid),
// followed by the "right side" of s (up-to mid plus one, to start from the "right-most" char in the middle, to the end of s).
// The shuffling is done recursively until the input is empty and returns an empty string, which completes the stack.
// O(n log n) time. O(n) space.


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

var s_1 = "abc";
var expected_1 = "bac";
var output_1 = findEncryptedWord(s_1);
check(expected_1, output_1);

var s_2 = "abcd";
var expected_2 = "bacd";
var output_2 = findEncryptedWord(s_2);
check(expected_2, output_2);

var s_2 = "abcxcba";
var expected_2 = "xbacbca";
var output_2 = findEncryptedWord(s_2);
check(expected_2, output_2);

var s_2 = "facebook";
var expected_2 = "eafcobok";
var output_2 = findEncryptedWord(s_2);
check(expected_2, output_2);
// Add your own test cases here