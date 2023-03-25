const solution = (strlist) => {
  let result = [];
  strlist.forEach((el) => {
    return result.push(el.length);
  });
  return result;
};