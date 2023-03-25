function solution(array) {
    // sort를 사용하여 배열을 순서대로 정렬 한다. 
    // sort만 이용하면 1, 10, 3, ...으로 출력될 수 있으니 
    // .sort(function(a,b){return a-b;} )를 사용한다.
    // 인덱스는 0부터 세기 때문에 배열의 길이 / 2를 내림차순 하면 중앙값이 되므로
    // Math.floor(array.length/2)를 사용한다.
    let answer = 0;
    array.sort(function(a, b){
        return a - b
    });
    return answer = array[Math.floor(array.length/2)]
}