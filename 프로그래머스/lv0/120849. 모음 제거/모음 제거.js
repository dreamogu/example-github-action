const solution = (my_string) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  const result = my_string
    .split('')
    .filter((el) => vowels.includes(el) !== true)
    .join('');
  return result;
};