// https://leetcode.com/problems/zigzag-conversion/

function convert(s, numRows) {
  if (numRows === 1) return s;
  let rows = Array(numRows).fill('');
  let currentRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; i++) {
    if (currentRow === 0) goingDown = true;
    if (currentRow === numRows - 1) goingDown = false;

    if (goingDown === true) {
      rows[currentRow] += s[i];
      currentRow++;
    }

    if (goingDown === false) {
      rows[currentRow] += s[i];
      currentRow--;
    }
  }
  return rows.join('');
};

// let rows = Array(numRows).fill(''); creates an array of empty strings like this : ["", "", ""] according to the number of rows.
// The "currentRow" decides which of these strings gets s[i] appended to it.
// The if-statements determine the direction of the zigzag pattern, it can only go up or down.
// Array.join('') flattens all the strings into one, providing the result.