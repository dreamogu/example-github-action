const solution = (s) => {
  const arr = s.split(' ');
  let result = Number(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 'Z') {
      result -= Number(arr[i - 1]);
    } else {
      result += Number(arr[i]);
    }
  }
  return result;
};