const solution = (rsp) => {
  let arr = rsp.split('');
  let newArr = arr.map((el, index) => {
    if (arr[index] === '2') {
      return '0';
    } else if (arr[index] === '0') {
      return '5';
    } else if (arr[index] === '5') {
      return '2';
    }
  });
  return newArr.join('');
};