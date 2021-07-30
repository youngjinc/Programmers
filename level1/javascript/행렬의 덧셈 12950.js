function solution(arr1, arr2) {
    // 방법 1
    var matrix = [];
    for(let i = 0; i < arr1.length; i++){
        var low = []
        for(let j = 0; j < arr1[0].length; j++){
            low.push(arr1[i][j] + arr2[i][j])
        }
        matrix.push(low);
    }
    return matrix;

    /* 방법 2
    return arr1.map((a,i)=>a.map((b,j) => b + arr2[i][j]));
    */ 
}

// 테스트 코드
console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));