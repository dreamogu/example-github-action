function solution(s) {
   if (s.length === 4 || s.length === 6) {
    return s.split('').every((el) => {
      return !isNaN(Number(el));
    });
  } else {
      return false
  }
  //every : 하나라도 참이 아니면 false 출력
}