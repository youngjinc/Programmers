function solution1(a, b) {
    var answer = 0;
    for(var i = 0; i<a.length; i++)
        answer += a[i] * b[i]
    return answer;
}

function solution2(a, b) {
    // acc : 마지막 콜백에서 반환된 값 or 초기값
    // _ : 현재 배열 내 처리되고 있는 요소 (생략)
    // idx : guswo 배열 내 처리되고 있는 요소의 인덱스
    return a.reduce((answer, _, i) => answer += a[i] * b[i], 0);
}

// 테스트 코드
console.log(solution1([1,2,3,4], [-3,-1,0,2])) // 3