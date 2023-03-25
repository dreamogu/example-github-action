const solution = (my_string) => {
  let arr =[];
  for(let i = 0; i < my_string.length; i++){
    if(my_string[i] === my_string[i].toLocaleLowerCase()){
      arr.push(my_string[i].toUpperCase())
    } else {
      arr.push(my_string[i].toLowerCase())
    }
  }
  return arr.join('');
};