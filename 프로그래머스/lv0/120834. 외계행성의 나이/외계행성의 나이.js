const solution = (age) => {
  const engArr = ['a','b','c','d','e','f','g','h','i','j']
  let ageArr = String(age).split('');
  return ageArr.map((el) => engArr[el]).join('')

}