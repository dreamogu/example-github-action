const solution = (sides) => {
  let result;
  sides.sort((a, b) => a - b);
  if (sides[0] + sides[1] > sides[2]) {
    result = 1;
  } else {
    result = 2;
  }
  return result;
};