function solution1(n) { // 문자 풀이
    return (n+'').split('').sort((a,b)=>b-a).join('')*1; // *1 : 문자열 -> 숫자 형변환
}

function solution2(n) { // 숫자 풀이
    let nums = []
    do{
        nums.push(n % 10);
        n = Math.floor(n / 10); // parseInt보다 Math.floor이 실행 속도 더 빠름
    }while(n > 0)
    return nums.sort((a,b)=>b-a).join('')*1; 
}

// 테스트 코드
console.log(solution2(12345));