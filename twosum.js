/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let p1 = 0;
  let p2 = 1;
  
  while (p1 < nums.length-1) {
    if (nums[p1] + nums[p2] === target) return [p1, p2];
    if (p2 === nums.length-1) {
      p1++;
      p2 = p1+1;
    } else p2++;
  }
return 0;
};