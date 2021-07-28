function solution(d, budget) {
    let cnt = 0;
    d.sort((a,b) => a-b);
    for(let i = 0; i < d.length; i++){
        if(d[i] <= budget){
            budget -= d[i];
            cnt++;
        } 
    }
    return cnt;
}

// 테스트 코드
console.log(solution([1,3,2,5,4], 9));