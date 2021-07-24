function solution1(left, right) { // 방법 1
    let answer = 0;
    for(let num = left; num <= right; num++){
        let cnt = getGcdCnt(num);
        if(cnt % 2 == 0)
            answer+= num;
        else
            answer-= num;
    }
    return answer;
}

function solution2(left, right) { // 방법 2
    let answer = 0;
    for(let num = left; num <= right; num++){
        if(Number.isInteger(Math.sqrt(num))) // 제곱근이 정수면 약수의 개수가 홀수
            answer-= num;
        else
            answer+= num;            
    }
    return answer;
}

function getGcdCnt(num) {
    if (num == 1)
        return 1;
    let cnt = 2; // 모든 수의 약수 1과 자신을 카운트함.
    for(let divisor = 2; divisor <= num / 2; divisor++){
        if(num % divisor == 0)
            cnt++;
    }
    return cnt;
}

// 테스트 코드
console.log(solution1(13,17)) // 43
console.log(solution2(13,17))