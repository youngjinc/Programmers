function solution(x) {
    let num = x;
    let sum = 0;
    
    while(num > 0){
        sum += num % 10;
        num = parseInt(num / 10);
    }
    return x % sum == 0;
}

// 테스트 코드
console.log(solution(10)); // true
console.log(solution(11)); // false