function solution1(res) { // 방법 1 : 단순 조건문 사용
    let score = [];
    let num = res[0];
    
    for(let i = 1; i < res.length; i++){
        if(!isNaN(res[i])){ // 숫자인 경우
            num += res[i];
        }

        else if(['S', 'T', 'D'].includes(res[i])){ // 보너스 영역인 경우
            if(res[i] == 'S'){
                score.push(+num);
            }
            else if(res[i] == 'D'){
                score.push(Math.pow(+num, 2));
            }
            else if(res[i] == 'T'){
                score.push(Math.pow(+num, 3));
            }
            num = '';
        }

        else{ // 옵션인 경우
            if(res[i] == '*'){
                score[score.length - 1] *= 2;
                if(score.length - 1 > 0){ // 이전 기회의 점수가 저장된(첫번째 기회가 아닌) 경우, 바로 전 기회에서 얻은 점수를 2배로 만듦
                    score[score.length - 2] *= 2;
                }
            }
            else{
                score[score.length - 1] *= (-1);
            }
        }  
    }

    return score.reduce((a,b)=>a+b);
}

function solution2(dartResult) { // 방법 2 : 정규표현식 사용
    let score = [];
    const bonus = {'S' : 1, 'D' : 2, 'T' : 3};
    const option = {'*' : 2, '#' : -1};
    let darts = dartResult.match(/\d.\D?/g); // 단계별로 점수 분할

    for(let i = 0; i < darts.length; i++){
        let cur = darts[i].match(/(\d+)(S|D|T)(\*|#)?/); // 현재 기회의 점수를 "점수|보너스|[옵션]"으로 분할
        score.push(Math.pow(cur[1],bonus[cur[2]])); // 보너스 계산
        
        /*
        console.log(cur) 
        출력 예시 : [ '1S', '1', 'S', undefined, index: 0, input: '1S', groups: undefined ]
        */ 
    
        if(cur[3] != undefined){ // 옵션이 존재하는 경우
            score[score.length-1] *= option[cur[3]];

            if(cur[3] == '*' && score.length > 0){ // 옵션이 스타상이면서 이전 기회의 점수가 저장된 경우, 바로 전 기회에서 얻은 점수를 2배로 만듦
                score[score.length-2] *= option[cur[3]];
            }
        }
    }

    return score.reduce((a,b)=>a+b);
}

// 테스트 코드
console.log(solution2("1S2D*3T"));