/** 
 * @param {number} 
 * @return {number}
 */
function fib(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
return (fib(n - 2) + fib(n - 1));
};
