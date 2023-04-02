const solution = (num, k) => {
  const arr = num.toString().split('');
  const strN = String(k);
  return arr.includes(strN) ? arr.indexOf(strN) + 1 : -1;
};