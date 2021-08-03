function solution1(progresses, speeds) { // 방법 1
    let days = new Array(progresses.length).fill(1);

    // 개발기간 구하기
    for(let i = 0; i < progresses.length; i++){
        while(progresses[i] + speeds[i]*days[i] < 100)
            days[i]++;
    }

    // 배포일 구하기
    for(let i = 1; i < days.length; i++){ 
        if(days[i] < days[i-1]) // 앞 기능의 개발기간이 뒤에 있는 개발기간 보다 오래걸릴 경우
            days[i] = days[i-1] // 뒤에 있는 기능이 앞에 있는 기능과 함께 배포
    }
    
    return [...new Set(days)].map(x=>days.filter(y=>y==x).length); // 배포일에 따른 기능 개수 구하기
}

function solution2(progresses, speeds) { // 방법 2
    // 개발기간 구하기
    let days = progresses.map((x,idx)=>Math.ceil((100-x)/speeds[idx]));

    // 배포일에 따른 기능 개수 구하기
    let answer = [1], maxDay = days[0];
    for(let i = 1; i < days.length; i++){
        if(days[i] <= maxDay){
            answer[answer.length - 1]++;
        }
        else{
            maxDay = days[i];
            answer.push(1);
        }  
    }

    return answer; 
}

// 테스트 코드
console.log(solution2([93, 30, 55], [1, 30, 5]))
console.log(solution2([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])) 