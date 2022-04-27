/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (cache[ nums[i] ] !== undefined) return [cache[ nums[i] ], i];
    cache[ target - nums[i] ] = i;
  }
return 0;
};
// [2,7,11,15] Store the target minus the current element, with the index as the key.
// 9 - 2 = 7. so {7: 0}. If 7 is found in the array, the target is met by two numbers.
// Return the key for the property where (target - nums[i]) took place
// along with the index of the current element, stored in a new array: [0, 1]