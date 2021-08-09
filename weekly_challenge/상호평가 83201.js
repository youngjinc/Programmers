function solution1(scores) {
    let answer = '';
    let min = [], max = [], sum = [], self = [];
    const len = scores.length;
    
    // 학생별 점수 정보 초기화
    for(let i = 0; i < len; i++){
        min.push({'score': 100,'cnt': 0});
        max.push({'score': 0,'cnt': 0});
        sum.push(0) // sum = new Array(len).fill(0)과 동일
    }

    for (let i = 0; i < len; i++) {
        self.push(scores[i][i]); // 자신을 평가한 점수 저장
        for (let j = 0; j < len; j++) {
            sum[j] += scores[i][j]; // 해당 학생이 받은 점수를 누적

            // 해당 학생이 받은 점수의 최저점 및 최저점 개수 구하기
            if (min[j]['score'] > scores[i][j]) { 
                min[j]['score'] = scores[i][j];
                min[j]['cnt'] = 1;
            } else if (min[j]['score'] == scores[i][j]) {
                min[j]['cnt']++;
            } 
            
            // 해당 학생이 받은 점수의 최고점 및 최고점 개수 구하기
            if (max[j]['score'] < scores[i][j]) {
                max[j]['score'] = scores[i][j];
                max[j]['cnt'] = 1;
            } else if (max[j]['score'] == scores[i][j]) {
                max[j]['cnt']++;
            }
        }
    }

    // 자기 자신을 평가한 점수가 유일한 최고점 또는 최저점인 경우, 그 점수를 제외한 평균을 구한 후 학점 계산
    max.map((x, idx) => {
        if ((x['score'] == self[idx] && x['cnt'] == 1) || (min[idx]['score'] == self[idx] && min[idx]['cnt'] == 1)) {
            answer += getGrade((sum[idx] - self[idx]) / (len - 1))
        } else {
            answer += getGrade(sum[idx] / len)
        }
    });

    return answer;
}

function getGrade(avg) {
    if (avg >= 90) return 'A';
    else if (avg >= 80) return 'B';
    else if (avg >= 70) return 'C';
    else if (avg >= 50) return 'D';
    else return 'F';
}

// 테스트 코드
console.log(solution1([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65]
]));