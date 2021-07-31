function solution(participant, completion) { // 방법 1 : 해시
    let hash = {};
    participant.forEach(p => {
        hash[p] = hash[p] ? hash[p] + 1 : 1;
    });
    completion.forEach(c => {
        hash[c] -= 1;
    });

    for(let key in hash){
        if(hash[key] > 0)
            return key;
    }
}

function solution2(participant, completion) { // 방법 2 : 정렬
    participant.sort();
    completion.sort();

    for(let i in participant){
        if(participant[i] != completion[i]) return participant[i];
    }
}

// 테스트 코드
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));