function solution(answers) {
    // 학생 별 정답 패턴
    let no1 = [1, 2, 3, 4, 5];
    let no2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let no3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let answer = [];
    let cnt = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == no1[i % no1.length])
            cnt[0]++;
        if (answers[i] == no2[i % no2.length])
            cnt[1]++;
        if (answers[i] == no3[i % no3.length])
            cnt[2]++;
    }

    // 가장 높은 점수 받은 사람 찾기
    const max = Math.max(...cnt);
    for (let i = 0; i < cnt.length; i++) { // 가장 높은 점수를 받은 사람이 여럿일 경우
        if (max == cnt[i])
            answer.push(i + 1);
    }
    return answer;
}

// 테스트 코드 
console.log(solution([1, 3, 2, 4, 2]));