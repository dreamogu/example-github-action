function solution(s) {
  const floor = Math.floor(s.length / 2);
  return s.length % 2 === 0
    ? s.slice(floor - 1, floor + 1)
    : s.slice(floor, floor + 1);
}