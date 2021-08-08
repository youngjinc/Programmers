function solution1(n,a,b)
{
    let round = 0;

    while(a != b){
        round++;
        a = Math.ceil(a/2); // a = (a+1) >> 1 도 가능
        b = Math.ceil(b/2); // b = (b+1) >> 1 도 가능 
        console.log(a,b)
    }
    return round;
}

// 테스트 코드
console.log(solution2(8,4,7));