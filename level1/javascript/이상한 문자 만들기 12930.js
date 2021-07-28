function solution1(s) { // 방법 1
    s = s.split(' ');
    let answer = [];
    let tmp;

    for(let i = 0; i < s.length; i++){
        tmp = s[i].split('');
        for(let j = 0; j < tmp.length; j++)
            answer += j%2 ? tmp[j].toLowerCase() : tmp[j].toUpperCase(); 

        answer += ' ';   
    }
    return answer.slice(0, -1);
}

function solution2(s) { // 방법 2
    let answer = '';
    let widx = 0; // word_idx, 단어 기준 인덱스

    for(let i = 0; i < s.length; i++){
        if(s[i] == ' '){
            answer += ' ';
            widx = 0;
        }
        else{
            answer += widx % 2 ? s[i].toLowerCase() : s[i].toUpperCase(); 
            widx++;
        }
    }
    return answer;
}

// 테스트 코드
console.log(solution2("try hello world"));