function solution(s, n) {
    let answer = '';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    
    for(var c in s){
        if(s[c] == ' '){
            answer += ' ';
        }
        else{
            if(s[c] == s[c].toLowerCase())
                answer += lower[(lower.indexOf(s[c]) + n) % 26];
            else
                answer += upper[(upper.indexOf(s[c]) + n) % 26];
        } 
    }
    return answer;
}

// 테스트 코드
console.log(solution("AaZz", 25));