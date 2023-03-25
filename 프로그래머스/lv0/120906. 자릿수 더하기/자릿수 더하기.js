const solution = (n) => {
  let newArr = String(n)
    .split('')
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);
  return newArr;
};