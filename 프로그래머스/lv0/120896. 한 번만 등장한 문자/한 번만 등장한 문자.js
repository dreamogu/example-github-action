const solution = (s) => {
  // 매개변수 s
  // s에 한번만 등장하는 문자를 사전순으로 정렬
  // 앞으로 셌을 떄와 뒤에서 셌을 때가 똑같으면 된다.
  // sort 사용
  const result = [];
  const arr = s.split('').sort();
  arr.filter((el) => {
    if (arr.indexOf(el) === arr.lastIndexOf(el)) {
      result.push(el);
    }
  });
  return result.join('');
};