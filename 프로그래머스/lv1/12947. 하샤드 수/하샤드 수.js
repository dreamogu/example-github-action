const solution = (n) => {
  const str = `${n}`.split('');
  return n % str.reduce((acc, cur) => acc + Number(cur), 0) ? false : true;
};