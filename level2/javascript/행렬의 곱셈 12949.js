function solution1(A, B) { // 방법 1
    let answer = [];
    const lenI = A.length; // i의 범위
    const lenJ = A[0].length; // j의 범위
    const lenK = B[0].length; // k의 범위

    for(let i = 0; i < lenI; i++){
        let tmp = new Array(lenK).fill(0);
        for(let j = 0; j < lenJ; j++){
            for(let k = 0; k < lenK; k++){
                tmp[k] += A[i][j] * B[j][k];
            }
        }
        answer[i] = tmp;
    }
    return answer;
}

function solution2(A, B) { // 방법 2
    return A.map((row) => B[0].map((_,k) => row.reduce((res,a,j) => res + a*B[j][k], 0)));
}

console.log(solution2([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));