function solution(numbers) {
    var answer = [];
    let length = numbers.length

    for(let i = 0; i < length; i++ ){
        answer.push(numbers[i]*2)
    }
    return answer;
}