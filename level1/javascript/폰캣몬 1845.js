function solution(nums) {
    let set = new Set(nums);
    return Math.min(set.size, Math.floor(nums.length / 2));
}

// 테스트 코드
console.log(solution([3, 1, 2, 3]))