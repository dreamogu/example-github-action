const solution = (n) => {
  const str = `${n}`;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return Number(arr.sort((a, b) => b - a).join(''));
};