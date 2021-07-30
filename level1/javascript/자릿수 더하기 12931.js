function solution1(n) // 방법 1
{
    let num = (n+"").split("");
    return num.length == 1 ? +num[0] : num.reduce((a,b)=>(+a)+(+b));
}

function solution(n) // 방법 2
{
    let answer = 0;
    while(n){
        answer += n%10;
        n = Math.floor(n/10);
    }
    return answer;
}

console.log(solution(123));