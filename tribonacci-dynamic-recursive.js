/**
 * @param {number}
 * @return {number} 
 */
var tribonacci = function(n, cache) {
  cache = cache || {};

  if (cache[n]) return cache[n];
  if (n === 0) return 0;
  if (n <= 2) return 1;
return cache[n] = (tribonacci(n - 1, cache) + tribonacci(n - 2, cache) + tribonacci(n - 3, cache));
}

/**
 * base cases: if n == 0 return 0. if n <= 2 return 1
 * use memoization to speed-up expensive operations. 
 * if arguments (n) were used before, find the result in the cache object. else, store the result of tribonacci 
 * in the cache. ensure that the cache is passed on as an arguemnt within the stack. 
 */
