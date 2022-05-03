/**
 * Given a list of n integers arr[0..(n-1)], determine the number of different pairs of elements within it which sum to k.
 * If an integer appears in the list multiple times, each copy is considered to be different; that is, two pairs are considered
 * different if one pair includes at least one array index which the other doesn't, even if they include the same values.
 * @param {number} k
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function pairSums(k, n, arr) {
  let p1 = 0;
  let p2 = 1;
  let count = 0;

  while (p1 < n - 1) {
    if (arr[p1] + arr[p2] === k ) count++
    if (p2 === n - 1) {
      p1++;
      p2 = p1 + 1;
    } else {
      p2++;
    }
  }
  return count;
};
console.log(pairSums(6, 5, [1, 5, 3, 3, 3]), "Expected output: 4")
console.log(pairSums(4, 3, [1, 2, 3, 4, 3]), "Expected output: 1")
console.log(pairSums(6, 4, [1, 2, 3, 4, 3]), "Expected output: 1")
console.log(pairSums(2, 5, [1, 2, 3, 4, 3]), "Expected output: 0")
console.log(pairSums(27, 5, [23, 1, 2, 3, 4, 3, 26]), "Expected output: 1")
console.log(pairSums(27, 8, [23, 1, 2, 3, 4, 3, 0, 26]), "Expected output: 2")
console.log(pairSums(22, 12, [-4, 23, 25, -1, 1, 2, -3, 3, 4, 3, 0, 26]), "Expected output: 3")
console.log(pairSums(22, 10, [-4, 23, 25, -1, 1, 2, -3, 3, 4, 3, 0, 26]), "Expected output: 2")
