function solution(info, query) { // 방법 1
    let answer = [];
    // 1. 데이터 전처리
    // info
    let i = info.map(x=>x.split(' '));
    // query
    let q = query.map(x=>x.split(' and '));
    q = q.map(x=>[x[0], x[1], x[2]].concat(x[3].split(" ")));
    q = q.map(x=>x.filter(y=>y != '-'));

    // 2. 조건 충족 여부 검사
    for(let j = 0, qLen = q.length; j < qLen; j++){
        answer.push(0); // j번 째 쿼리에 만족하는 지원자 수
        let arr = q[j].slice(0, q[j].length-1); // 현재 info에서 점수 제외
        let score = +q[j][q[j].length - 1];

        for(let k = 0, kLen = i.length; k < kLen; k++)
            if (score <= +i[k][i[k].length - 1]) // 쿼리 점수 이상을 받은 지원자인 경우
                if(arr.filter(x => !i[k].includes(x)).length == 0) // 조건을 만족하는지 검사
                    answer[answer.length - 1] += 1;
    }
    return answer;
}

function solution2(info, query) { // 방법 2
    let answer = [];
    let infoMap = {};

    // 1. 한 info에 대해서 가능한 모든 조합 구하기
    function combination(infos, score, start){
        const key = infos.join(""); //키 값으로 사용할 조건 이어붙이기
        const value = infoMap[key]; // 점수

        // 1.1. 현재 조합에 점수 저장
        if(value){ // 해당 조건에 점수(1개 이상)가 존재하는 경우, 점수 배열에 현재 점수 삽입
            infoMap[key].push(score);
        }
        else{ // 아직 점수가 없는 경우, 현재 점수 값으로 초기화
            infoMap[key] = [score];
        }

        // 1.2. 그 다음 조합 생성(단, - 를 이용해서 조합 생성)
        for(let i = start; i < infos.length; i++){
            let tmp = infos.slice();
            tmp[i] = '-';
            combination(tmp, score, i+1);
        }
    }

    // 2. 지원자의 코테 점수목록 중(scores) 목표 점수(score)이상인 요소의 인덱스 하한 선을 이진 탐색
    function lowerboundSearch(scores, score){
        if(scores){ // 점수가 존재할 경우에만 탐색 진행
            let low = 0;
            let high = scores.length; 
            
            while(low < high){
                const mid = Math.floor((low + high)/2);
                if(scores[mid] >= score){
                    high = mid;
                }
                else{
                    low = mid + 1;
                }
            }
            answer.push(scores.length - low);
        }
        else{
            answer.push(0);
        }
    }

    // 3. 데이터 전처리
    // info
    for(let i = 0; i < info.length; i++){
        const infos = info[i].split(' ');
        const score = +(infos.pop());
        combination(infos, score, 0); // 해당 지원자의 가능한 모든경우의 수('-' 대입)를 생성
    }

    // infoMap 이진 탐색 전 정렬 필수 !
    for (const key in infoMap) { 
        infoMap[key] = infoMap[key].sort((a, b) => a - b);
    }

    // query
    for(let i = 0; i < query.length; i++){
        let querys = query[i].replace(/ and /g, '').split(' ');
        const score = +(querys.pop());
        const key = querys.join('');
        lowerboundSearch(infoMap[key], score);
    }
    return answer;
}

// 테스트 코드
console.log(solution2(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));