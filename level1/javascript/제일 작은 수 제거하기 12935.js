function solution(arr) {
    if (arr.length == 1)
        return [-1];

    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
}

// 테스트 코드
console.log(solution([1, 2, 3, 4])); // [4,3,2]
console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]