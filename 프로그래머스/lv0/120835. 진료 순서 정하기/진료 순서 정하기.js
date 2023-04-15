const solution = (emergency) => {
  // input 배열
  // output 배열
  // 숫자 높은 순
  // 배열을 복사한 후 그 수의 인덱스를 찾아 리턴한다.
  let arr = emergency.slice().sort((a, b) => b - a);
  return emergency.map((el) => arr.indexOf(el) + 1);
  // 인덱스는 0부터 시작하니 +1을 해줘야한다.
};