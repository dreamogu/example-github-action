const solution = (money) => {
  let count = parseInt(money / 5500);
  let remain = money % 5500;
  return [count, remain];
};