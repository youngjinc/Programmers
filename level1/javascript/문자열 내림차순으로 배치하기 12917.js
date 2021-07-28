function solution(s) {
    // 방법 1 : 대소문자 구분해서 정렬를 위해 sort에 비교 기준 명시
    return s.split("").sort((a,b)=>a<b? 1: -1).join("");

    /*방법 2 : 대소문자 구분해서 정렬를 위해 일반 정렬 후 거꾸로 뒤집음
    return s.split("").sort().reverse().join("");
    */
}

// 테스트 코드
console.log(solution("Zbcdefg"));