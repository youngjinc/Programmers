function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++){
        let tmp = array.slice(commands[i][0]-1, commands[i][1]); // 해당범위의 배열 복사
        tmp.sort((a,b)=>a-b); //문자열 비교가 아닌 숫자를 비교해야되므로 sort함수에 정렬순서 정의
        answer.push(tmp[commands[i][2]-1]); // 복사한 배열에서 k번째 수
    }
    
    return answer;
}

// 테스트 코드
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])) // [5,6,3]