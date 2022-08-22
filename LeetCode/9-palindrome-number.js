https://leetcode.com/problems/palindrome-number/

function isPalindrome (x) {
  let str = x.toString();
  let p1 = 0;
  let p2 = str.length-1;

  while (p1 < p2) { 
    console.log(str[p1], str[p2])
    if (str[p1] === str[p2]) {
      p1++;
      p2--;
        
    } else {
      return false;
    }    
  }
    
  return true;
}
