function solution(n) {
  let a = n % 10;
  let b = (n - a) / 10;
  
  return a + b;
};