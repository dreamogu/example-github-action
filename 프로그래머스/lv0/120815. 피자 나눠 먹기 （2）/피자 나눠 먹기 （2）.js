const solution = (n) => {
  // 피자조각 6개
  // input : 피자를 먹을 사람의 수
  // n % 6 === 0
  for (let i = 1; i < n*6; i++) {
    if ((i * 6) % n === 0) {
      return i;
    }
  }
};