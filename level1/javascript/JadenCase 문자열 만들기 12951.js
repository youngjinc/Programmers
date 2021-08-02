function solution(s) {
    let answer = s[0].toUpperCase();

    // 이전 문자가 공백(단어의 첫글자)이 아닌 경우 소문자로 변환, 그렇지 않은 경우 대문자로 변환
    for(let i = 1; i < s.length; i++)
        answer += (s[i-1] != " ") ? s[i].toLowerCase() : s[i].toUpperCase();

    return answer;
}

// 테스트 코드
console.log(solution(" f23a rglkj TTSD"));