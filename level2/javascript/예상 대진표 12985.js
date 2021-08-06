function solution1(n,a,b)
{
    let round = 1;

    while(true){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        
        if(a == b)
            break;
        else
            round++;
    }
    return round;
}

// 테스트 코드
console.log(solution1(8,4,7));