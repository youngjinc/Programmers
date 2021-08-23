function solution(table, languages, preference) {
    let answer = []
    let jobs = [] // 직업군 리스트
    let scores = [] // 개발자가 선호하는 언어의 직업군 언어 점수 리스트
    let N = table.length;

    table.map(function(x){
        let score = 0; // 현재 직업군에 대한 언어 점수
        let jobNLanguage = x.split(" "); // [직업군, 언어1, ..., 언어5]
        jobs.push(jobNLanguage[0]); 

        for(let i = 0, len = languages.length; i < len; i++){
            let idx = jobNLanguage.indexOf((languages[i]))

            // 2. 해당 직업군 언어에 개발자가 선호하는 언어가 존재하는 경우, 점수 계산 및 누적
            if(idx != -1)
                score += preference[i] * (N+1-idx)
        }
        scores.push(score);
    })

    // 3. 최고 점수를 받은 직업군 구하기
    const MAX_SCORE = Math.max(...scores);
    for(let i = 0; i < N; i++){
        if(MAX_SCORE == scores[i])
            answer.push(jobs[i])
    }
    answer.sort()

    return answer[0];
}

// 테스트 코드
console.log(solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], ["JAVA", "JAVASCRIPT"], [7, 5]))
console.log(solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], ["PYTHON", "C++", "SQL"], [7, 5, 5]))