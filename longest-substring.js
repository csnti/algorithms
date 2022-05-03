function lengthOfLongestSubstring(s) {
  let seenIt = {};
  let p1 = 0;
  let p2 = 0;
  let result = 0;

  while (p2 < s.length) {
    if (seenIt[ s.charAt(p2) ] === undefined) {
      seenIt[ s.charAt(p2) ] = p2;
      p2++;
      result = Math.max(p2 - p1, result);
    } else {
      delete seenIt[ s.charAt(p1) ];
      p1++;
    }
  }
  return result;
};
// O(n) time, O(1) space.