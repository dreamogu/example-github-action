const solution = (my_string, num1, num2) => {
  // my_string에서 index를 뒤바꿈
  const arr = my_string.split('');

  let str1 = arr[num1];
  let str2 = arr[num2];

  arr.splice(num1, 1, str2);
  arr.splice(num2, 1, str1);
  return arr.join('');
};