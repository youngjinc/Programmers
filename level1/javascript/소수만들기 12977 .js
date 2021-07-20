function solution(nums) {
    let cnt = 0;
    for (var i = 0; i < nums.length - 2; i++){
        for (var j = i + 1; j < nums.length - 1; j++){
            for (var k = j + 1; k < nums.length; k++){
                if (isPrime(nums[i] + nums[j] + nums[k])){
                    cnt += 1;
                }
            }
        }
    }
    return cnt;
}

function isPrime(n){ // 소수 판별
    for(var i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0)
            return false;

    return true;
}

console.log(solution([1,2,3,4]))