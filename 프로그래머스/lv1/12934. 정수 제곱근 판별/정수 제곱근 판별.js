const solution = (n) => {
  // 임의의 정수 n
  // n이 어떤 양의 정수 x의 제곱인지 아닌지 확인
  const num = Math.sqrt(n);
  return num % 1 === 0 ? Math.pow(num+1, 2) : -1;
};