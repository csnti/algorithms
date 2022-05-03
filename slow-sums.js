function getTotalTime(arr) {
  arr.sort((a,b) => b - a);
  let total = 0;
  let prev = arr[0];

  for( let i = 1; i < arr.length; i++) {
    total += arr[i] + prev;
    prev = arr[i] + prev;
  }
  return total;
}
// O(n) time. O(1) space
// Array.sort() may have O(n log n) time with O(1) space. It depends on the browser implementation and the array.
// Worst case-scenario O(n) time. O(n) space.


// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
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
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [4, 2, 1, 3];
var expected_1 = 26;
var output_1 = getTotalTime(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 3, 9, 8, 4];
var expected_2 = 88;
var output_2 = getTotalTime(arr_2);
check(expected_2, output_2);

// Add your own test cases here