function solution(numbers) {
  const totalNumber = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
  let num = numbers.reduce((acc, cur) => acc + cur, 0);
  return totalNumber - num;
}
