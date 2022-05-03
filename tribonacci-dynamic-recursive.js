/**
 * @param {number}
 * @return {number} 
 */
function tribonacci(n, cache) {
  cache = cache || {};

  if (cache[n]) return cache[n];
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return cache[n] = (tribonacci(n - 1, cache) + tribonacci(n - 2, cache) + tribonacci(n - 3, cache));
}
// Base cases: if n equals zero, return zero. if n is less-than or equal to two, return one.
// Use "memoization" to speed-up expensive operations. 
// If the argument n was used before, find the result in the cached object. Else, 
// store the result of the tribonacci sequence in the cache. 
// Ensure that the cache is passed on as an argument within every function call of the stack.