const solution = (my_string) => {
  // 모두 소문자로 변경 후 알파벳 순으로 정렬
  return my_string.toLowerCase().split('').sort().join('');
};