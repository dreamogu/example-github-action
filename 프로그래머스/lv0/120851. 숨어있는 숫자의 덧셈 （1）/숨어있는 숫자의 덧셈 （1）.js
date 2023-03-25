const solution = (my_string) => {
  return [...my_string]
    .filter((el) => !isNaN(el))
    .reduce((acc, cur) => Number(acc) + Number(cur));
};