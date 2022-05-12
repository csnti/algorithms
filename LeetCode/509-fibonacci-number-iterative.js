// https://leetcode.com/problems/fibonacci-number/

function fib(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
// Use an array to store each fibonacci value up to the n'th sequence.
// If n is greater than one, execute the operations within the for loop,
// then append the sum of the two elements to the end of the array.
