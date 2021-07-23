function solution(arr)
{
    let answer = [arr[0]];
    for(var i = 1; i < arr.length; i++)
        if(arr[i] != arr[i-1])
            answer.push(arr[i]);
  
    return answer;
}

// 테스트 코드
console.log(solution([4,4,4,3,3]))