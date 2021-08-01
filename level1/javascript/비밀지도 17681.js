function solution(n, arr1, arr2) {
    /*
    (x|arr2[i]) : 비트연산
    .toString(2) : 이진수로 변환
    .padStart(n,'0') : 0으로 n자리수 맞추기
    .replace(/1|0/g, x=> x =='1'? '#':' ') : 1 또는 0을 발견하면 '#', ' '으로 변환
    */
    return arr1.map((x,i)=>(x|arr2[i]).toString(2).padStart(n,'0').replace(/1|0/g, x=> x =='1'? '#':' '));
}

// 테스트 코드
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));