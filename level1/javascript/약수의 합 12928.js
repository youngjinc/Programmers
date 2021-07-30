function solution(n) {
    var answer = n;
    for(let divisor = 1; divisor <= n/2; divisor++)
        if(n % divisor == 0)
            answer += divisor;

    return answer;
}
console.log(solution(5));