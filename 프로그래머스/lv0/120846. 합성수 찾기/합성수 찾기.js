const solution = (n) => {
  let result = [];

  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0 && result.includes(i) === false) {
        result.push(i);
      }
    }
  }
  return result.length;
};