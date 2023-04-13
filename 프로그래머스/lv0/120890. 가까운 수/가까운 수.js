const solution = (array, n) => {
  // array for 문 돌려서 두 수의 차 절대값을 새 배열에 push하고
  // 새 배열에서 가장 작은 수 인덱스를 리턴함

  let arr = [];
  array.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < array.length; i++) {
    arr.push(Math.abs(n - array[i]));
  }

  let min = Math.min(...arr);
  return array[arr.indexOf(min)];
};
