function solution1(info, query) { // 방법 1 : 정확성 통과 O, 효율성 통과 X 
    let answer = [];
    // 1. 데이터 전처리
    let infos = info.map(x=>x.split(' '));
    let querys = query.map(x=>x.split(' and '));
    querys = querys.map(x=>[x[0], x[1], x[2]].concat(x[3].split(" ")));
    querys = querys.map(x=>x.filter(y=>y != '-'));

    // 2. 조건 충족 여부 검사
    for(let j = 0, qLen = querys.length; j < qLen; j++){
        answer.push(0); // j번 째 쿼리에 만족하는 지원자 수
        const arr = [...querys[j]]; // 현재 info에서 점수 제외
        const score = +arr.pop();

        for(let k = 0, kLen = infos.length; k < kLen; k++){
            const target_score = +infos[k][infos[k].length - 1]; 
            if (score <= target_score) // 쿼리 점수 이상을 받은 지원자인 경우
                if(arr.filter(x => !infos[k].includes(x)).length == 0) // 조건을 만족하는지 검사
                    answer[answer.length - 1]++;
        }
    }
    return answer;
}

function solution2(info, query) { // 방법 2 : 정확성 통과 O, 효율성 통과 O
    let answer = [];
    let infoMap = {};

    // 2. 한 info에 대해서 가능한 모든 조합 구하기
    function combination(infos, score, start){
        const key = infos.join(""); //키 값으로 사용할 조건 이어붙이기
        const value = infoMap[key]; // 점수

        // 2.1. 현재 조합에 점수 저장
        if(value){ // 해당 조건에 점수(1개 이상)가 존재하는 경우, 점수 배열에 현재 점수 삽입
            infoMap[key].push(score);
        }
        else{ // 아직 점수가 없는 경우, 현재 점수 값으로 초기화
            infoMap[key] = [score];
        }

        // 2.2.  "-"가 들어갈 수 있는 모든 조합 구하기
        for(let i = start; i < infos.length; i++){
            let tmp = infos.slice();
            tmp[i] = '-';
            combination(tmp, score, i+1);
        }
    }

    // 5. 지원자 점수 목록 scores에서 score값 이상의 점수에 대한 하한선을 이진 탐색
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
        else{ // 검색 조건에 해당하는 지원자가 존재하지 않는 경우 0명으로 초기화
            answer.push(0);
        }
    }

    // 1. info 데이터 전처리
    for(let i = 0; i < info.length; i++){
        const infos = info[i].split(' ');
        const score = +infos.pop();
        combination(infos, score, 0);
    }

    // 3. infoMap 이진 탐색 전 정렬 필수 !
    for (const key in infoMap) { 
        infoMap[key] = infoMap[key].sort((a, b) => a - b);
    }

    // 4. query 데이터 전처리
    for(let i = 0; i < query.length; i++){
        let querys = query[i].replace(/ and /g, '').split(' ');
        const score = +querys.pop();
        const key = querys.join('');
        lowerboundSearch(infoMap[key], score);
    }
    return answer;
}

// 테스트 코드
console.log(solution2(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));