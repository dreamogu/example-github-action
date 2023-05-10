function solution(num) {
  if(num===1) return 0
  let number = 0;
  while (number < 500) {
    number++;
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    if (num === 1) return number;
  }
  return -1;
}
