function solution(year) {
  if (year < 100) return 1;
  if (year < 1000) year % 10 === 0 ? Math.floor(year / 10) : Math.floor(year / 10 + 1);
  return year % 10 === 0 ? Math.floor(year / 100) : Math.floor(year / 100 + 1);
}