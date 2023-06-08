function solution(absolutes, signs) {
  let positive = 0;
  let negative = 0;
  for(let i = 0; i < absolutes.length ; i++){
    if(signs[i]) positive += absolutes[i]
    else negative += absolutes[i]
  }
  
  return positive - negative
}
