function solution(arr) {
  let newArr = arr.filter((el, idx) => {
    return el !== arr[idx + 1] || idx === arr.length - 1;
    // 마지막 원소는 늘 새 배열에 포함되도록
  });
  return newArr;
}