function solution1(s) { // 방법 1

    if(s.length % 2 != 0) 
        return 0;

    let cnt = 0;
    const len = s.length;
    const pair = {'}':'{', ']':'[', ')':'('};

    for(let i = 0; i < len; i++){
        let stack = [];
        let flag = true;
        const tmp = s.slice(i) + s.slice(0,i);
        
        for(let j = 0; j < len; j++){
            if(tmp[j] == '{' || tmp[j] == '[' || tmp[j] == '('){
                stack.push(tmp[j])
            }
            else{
                const last = stack.pop();
                if(last != pair[tmp[j]])
                    flag = false;
                    break
            }
        }
        
        if(flag) cnt++; 
    }
    return cnt;
}

function solution2(s) { // 방법 2

    if(s.length % 2 != 0) 
        return 0;

    let cnt = 0;
    const len = s.length;
    const brackets = {'{':'}', '[':']', '(':')'};

    for(let i = 0; i < len; i++){
        // 왼쪽으로 한칸 씩 이동
        const tmp = s.slice(i) + s.slice(0,i);
        if(tmp[0] == '}' || tmp[0] == ']' || tmp[0] == ')'){
            continue;
        }
        else{
            let stack = [tmp[0]];
            for(let j = 1; j < len; j++){
                if(brackets[stack[stack.length - 1]] == tmp[j])
                    stack.pop();
                else
                    stack.push(tmp[j])
            }

            // 스텍이 빈 경우, 올바른 괄호임
            if(stack.length == 0) 
                cnt++; 
        }
    }
    return cnt;
}

console.log(solution1("}]()[{"));