function solution1(citations) { // 방법 1, 마지막 테스트케이스 시간 초과
    let hidx = 0, i = 0;
    const len = citations.length;
    citations.sort((a,b)=>a-b);

    while(true){
        if(hidx <= citations[i]){
            if(hidx <= len-i)
                hidx++;
            else
                return --hidx;
        }
        else{
            i++;
        }
    }
}

function solution2(citations) { // 방법 2
    let idx = 0;
    citations.sort((a,b)=>b-a);

    while(idx+1 <= citations[idx])
        idx++;
    
    return idx;
}

// 테스트 코드
console.log(solution2([3,0,6,1,5]))