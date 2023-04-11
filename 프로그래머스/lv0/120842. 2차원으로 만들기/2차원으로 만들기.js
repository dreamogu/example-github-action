function solution(num_list, n) {
  let newArr = [];
  let innerArr = [];
  for (let i = 0; i < num_list.length / n; i++) {
    newArr.push(num_list.slice(i * n, i * n + n));
  }
  return newArr;
}