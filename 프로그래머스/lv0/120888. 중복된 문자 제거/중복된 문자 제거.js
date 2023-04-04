const solution = (my_string) => {
  // 중복된 문자 제거
  let newArr = my_string.split('');
  return newArr
    .filter((el, index) => {
      return newArr.indexOf(el) === index;
    })
    .join('');
};
