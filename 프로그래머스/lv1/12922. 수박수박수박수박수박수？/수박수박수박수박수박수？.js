function solution(n) {
  const watermelon = '수박';
  const num = Math.floor(n / 2);
  return watermelon.repeat(num) + (n % 2 ? '수' : '');
}