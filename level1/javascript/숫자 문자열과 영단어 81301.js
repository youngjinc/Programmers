function solution(s) {
    let num2str = {0:'zero', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};
    for(let i = 0; i < 10; i++){
        let re = new RegExp(`${num2str[i]}`,"g");
        s = s.replace(re, i);
    }

    return +s;
}

// 테스트 코드
console.log(solution("23four5six7"));