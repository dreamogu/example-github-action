const solution = (order) => {
  const arr = order.toString().split('');
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
    if (arr[i] % 3 === 0 && arr[i] !== 0) {
      result++;
    }
  }
  return result;
};