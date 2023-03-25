const solution = (my_string) => {
  // split
  const newArr = my_string.split('');
  return newArr.reverse().join('');
};