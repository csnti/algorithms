/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
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