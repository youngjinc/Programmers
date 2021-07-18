function solution(num) {
    let cnt = 0;
    
    while(num > 1 && cnt < 500){
        num = (num%2 == 0) ? num/2 : num*3+1;
        cnt++;
    }
    return (num == 1) ? cnt : -1; // 단, 500번 반복해도 1이 되지 않은 경우 –1 반환
}

// 테스트 코드
console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1