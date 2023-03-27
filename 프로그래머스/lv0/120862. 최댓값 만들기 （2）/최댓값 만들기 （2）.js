function solution(numbers) {
  // input : 정수 배열
  // output : Number 타입
  // 원소 중 두 개를 곱해 최대값이 되려면 두 수 중 하나의 값이 -면 안된다.
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        arr.push(numbers[i] * numbers[j]);
      }
    }
  }
  let result = Math.max(...arr);
  return result
}