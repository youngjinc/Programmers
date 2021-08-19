function solution1(rows, columns, queries) {
    let answer = [];
    let A = [];

    // 배열 초기화
    for(let i = 0; i < rows; i++){
        let row = []
        for(let j = 1; j <= columns; j++)
            row.push(i*columns+j)
        A.push(row)
    }

    queries.map(function(x){
        const x1 = x[0]-1, y1 = x[1]-1, x2 = x[2]-1, y2 = x[3]-1;
        let tmp = A[x1][y1], min = tmp;
        // 섹션1 : y1열 원소는 위로 1칸 이동
         for(let row = x1; row < x2; row++){
            A[row][y1] = A[row+1][y1];
            min = Math.min(min, A[row][y1]);
        }
        // 섹션2 : x2행 원소는 왼쪽으로 1칸 이동
        for(let col = y1; col < y2; col++){
            A[x2][col] = A[x2][col+1];
            min = Math.min(min, A[x2][col]);
        }
        // 섹션3 : y2열 원소는 아래쪽으로 1칸 이동
        for(let row = x2; row > x1; row--){
            A[row][y2] = A[row-1][y2];
            min = Math.min(min, A[row][y2]);
        }
        // 섹션4 : x1행 원소는 오른쪽으로 1칸 이동
        for(let col = y2; col > y1; col--){
            A[x1][col] = A[x1][col-1];
            min = Math.min(min, A[x1][col]);
        }
        A[x1][y1+1] = tmp;
        answer.push(min);
    });
    
    return answer;
}

// 테스트 코드
console.log(solution1(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]));
console.log(solution1(3, 3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]));