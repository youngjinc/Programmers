function solution(res) {
    let answer = [];
    let num = res[0];
    
    for(let i = 1; i < res.length; i++){
        if(!isNaN(res[i])){ // 숫자인 경우
            num += res[i];
        }

        else if(['S', 'T', 'D'].includes(res[i])){ // 보너스 영역인 경우
            if(res[i] == 'S'){
                answer.push(+num);
            }
            else if(res[i] == 'D'){
                answer.push(Math.pow(+num, 2));
            }
            else if(res[i] == 'T'){
                answer.push(Math.pow(+num, 3));
            }
            num = '';
        }

        else{ // 옵션인 경우
            if(res[i] == '*'){
                answer[answer.length - 1] *= 2;
                if(answer.length - 1 > 0){ // 첫번째 기회가 아닌 경우, 바로 전 기회에서 얻은 점수를 2배로 만듦
                    answer[answer.length - 2] *= 2;
                }
            }
            else{
                answer[answer.length - 1] *= (-1);
            }
        }  
    }

    return answer.reduce((a,b)=>a+b);
}

// 정규 표현식 사용한 solution2 추가 예정

// 테스트 코드
console.log(solution("1S2D*3T"));