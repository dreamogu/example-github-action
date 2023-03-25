const solution = (n, numlist) => {
  // input : 정수 n과 배열 numlist
  // filter 사용
  return numlist.filter((el) => el % n === 0);
};
