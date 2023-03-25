const solution = (numbers) => {
  let length = numbers.length;
  // 정수 배열 numbers
  // numbers의 원소 중 두 개를 곱해 만들 수 있는 최대값 => sort 정렬 후 가장 뒤에 있는거 2개 곱하면 될듯~
  numbers.sort((a, b) => a - b);
  return numbers[length - 1] * numbers[length - 2];
};
