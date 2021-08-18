function solution1(rows, columns, queries) { // 방법 1 : tmp 사용
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

function solution2(rows, columns, queries) { // 방법2 : 배열 복사, (에러발생 -> 업데이트 예정)
    let answer = [];
    let A = [];

    // 배열 초기화
    for(let i = 0; i < rows; i++){
        let row = []
        for(let j = 1; j <= columns; j++)
            row.push(i*columns+j)
        A.push(row)
    }

    let B = A.map(x => x.slice());

    queries.map(function(x){
        const x1 = x[0]-1, x2 = x[2]-1;
        const y1 = x[1]-1, y2 = x[3]-1;
        let min = A[x1][y1];

        for(let row = x1; row <= x2; row++){
            for(let col = y1; col <= y2; col++){
                // 섹션1
                if(row == x1 && col < y2){
                    A[row][col+1] = B[row][col];
                }
                // 섹션2
                else if (col == y2 && row != x2){
                    A[row+1][col] = B[row][col];
                }
                // 섹션3
                else if(row == x2 && col != y1){
                    A[row][col-1] = B[row][col];
                }
                // 섹션4
                else if(col != y1 && row != x1){
                    A[row-1][col] = B[row][col];
                }
                else{
                    continue;
                }            
                min = (min > A[row][col]) ? A[row][col] : min;
            }
        }
        answer.push(min);
        B = A.map(x => x.slice());
    });
    
    return answer;
}

// 테스트 코드
console.log(solution1(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]));
console.log(solution1(3, 3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]));