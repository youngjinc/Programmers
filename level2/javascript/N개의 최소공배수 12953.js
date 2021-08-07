function solution(arr) {
    return arr.reduce((a, b) => a*b/getGcd1(a, b));
}

function getGcd1(a, b) {
    if(a > b){
        let tmp = a;
        a = b;
        b = tmp;
    }
    return (a != 0) ? getGcd1(b%a, a) : b;
}

// 테스크 코드
console.log(solution([1,2,3]));