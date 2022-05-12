// https://leetcode.com/problems/rotate-string/

function rotateString(s, goal) {
  let arr = Array.from(s);

  for (let i = 0; i < s.length; i++) {
    if (arr.join('') === goal) return true;
    arr.shift(s[i]) && arr.push(s[i]);
  }
  return false;
};