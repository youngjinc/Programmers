function solution(land) {
    const last = land.length - 1;
  
    for(let row = last; row > 0; row--){
        const firstMaxIdx = getFirstMaxIdx(land[row]);

        for(let idx = 0 ; idx < 4; idx++){
            if(idx != firstMaxIdx)
                land[row-1][idx] += land[row][firstMaxIdx];
            else
                land[row-1][idx] += land[row][getSecondMaxIdx(land[row], idx)]; 
        }
    }

    return Math.max(...land[0]);
}
// 최댓값 인덱스 찾기
function getFirstMaxIdx(row) {
    let maxIdx = 0;
    for(let i = 1; i < 4; i++)
        if(row[maxIdx] < row[i])
            maxIdx = i;

    return maxIdx;
}

// 두번째로 큰 값 인덱스 찾기
function getSecondMaxIdx(row, col) {
    let maxIdx = (col == 0) ? 1 : 0;

    for(let i = 0; i < 4; i++){
        if(i == col) continue;

        if(row[maxIdx] < row[i])
            maxIdx = i;
    }
    return maxIdx;
}

// 테스트 코드
console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));