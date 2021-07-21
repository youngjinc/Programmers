function solution(n) {
    // 방법 1
    var answer = '';
    for(let i = 0; i < n; i++){
        if (i % 2 == 0)
            answer += '수';
        else
            answer += '박';
    }
    return answer;
    
    // 방법 2
    // n/2 : "수박"은 두 글자
    // n%2 : 나머지가 있는 홀수의 경우 '수'를 더함
    return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
}