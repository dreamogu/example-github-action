const solution = (n) => {
  // split 
  const arr = `${n}`.split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(parseInt(arr[i]));
  }
  return newArr;
};