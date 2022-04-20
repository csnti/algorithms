/** 
 * @param {number} 
 * @return {number}
 */
var fib = function(n) {
  let arr = [0,1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
return arr[n];
};

/**
 * use array to store each fibonacci value up to the n'th sequence
 * if n is greater than 1, execute the operations within the for loop
 * which appends the sum of the two elements at the end of the array
 */