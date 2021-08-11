function solution(s)
{
    let stack = [s[0]];

    for(let i = 1; i < s.length; i++){ 
        if(stack[stack.length - 1] == s[i]) // 스택의 top과 현재 문자가 일치하는 경우 스택에서 pop
            stack.pop()
        else // 그렇지 않은 경우 스택에 push
            stack.push(s[i])
    }

    return stack.length ? 0 : 1;
}

// 테스트 코드
console.log(solution('baabaa'))