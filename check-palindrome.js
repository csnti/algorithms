function solution(inputString) {
  let p1 = 0;
  let p2 = inputString.length - 1;
  
  while (p1 < p2) {
    if (inputString[p1] === inputString[p2]) {
      p1++;
      p2--;
    } else return false;
  } 
  return true;  
};