function solution(s) {
  const word = s.toLowerCase();

  return word.split('p').length === word.split('y').length;
}