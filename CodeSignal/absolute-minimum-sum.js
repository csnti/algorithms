function abs(arr) {
  let minIndex = 0;
  let minVal = 0;
  let total = 0
  let sumStorage = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      total += sum(arr[i], arr[j])
    }
    sumStorage.push([ total, arr[i] ]);
    total = 0;
  }
  
  minIndex = sumStorage[0][1];
  minVal = sumStorage[0][0];
  
  for (let i = 0; i < sumStorage.length; i++) {
    if (sumStorage[i][0] < minVal && sumStorage[i][0] !== minVal) {
      minIndex = sumStorage[i][1];
      minVal = sumStorage[i][0];
    }   
  }
  return minIndex;
};

function sum(a, b) {
  return Math.abs(a - b);
};

// Time complexity: O(n^2). Space complexity: O(2n). 
// Iterate through all the elements of the array and 
// store the absolute total of arr[i] - arr[j] in a new 2D array.
// This is done to keep track of each absolute total and its corresponding index.
// If there is a duplicate minimum value, keep the first one, 
// since the input array is already sorted from low to high.
// Can it be done more efficiently?

let nums = [2, 4, 7];
let nums2 = [2, 3]
console.log(`Input: ${nums} \nExpected: 4 \nOutput: ${abs(nums)}`);
console.log(`Input: ${nums2} \nExpected: 2 \nOutput: ${abs(nums2)}`);