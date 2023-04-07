function solution(before, after) {
  const splitBefore = before.split('');
  for (let i = 0; i < before.length; i++) {
    if (after.includes(splitBefore[i])) {
      after = after.replace(splitBefore[i], '');
    }
  }
  return after.length === 0 ? 1 : 0;
}