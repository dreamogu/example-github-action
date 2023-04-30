const solution = (x, n) => {
  let newArr = [];
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += x;
    newArr.push(result);
  }
  return newArr;
};