function solution(n, lost, reserve) {
    for(var i = 0; i < reserve.length; i++){
        let idx = lost.indexOf(reserve[i]);
        if (idx != -1){ // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 경우
            lost.splice(idx, 1);
            reserve[i] = 0;
        }
    }

    if(lost.length > 0) { // 체육복을 빌리지 못한 학생이 남은 경우 | 체육복을 도난 당한 학생이 모두 여벌 체육복을 가져와서 lost배열이 빈 배열이 될 경우를 예외처리
        for(var i = 0; i < reserve.length; i++){
            if (reserve[i] != 0){
                let lidx = lost.indexOf(reserve[i] - 1); // 앞번호 학생
                let ridx = lost.indexOf(reserve[i] + 1); // 뒷번호 학생
                if (lidx != -1) // 앞번호 학생이 체육복을 도난 당한 경우 빌려줌
                    lost.splice(lidx, 1);
                else if (ridx != -1) // 뒷번호 학생이 체육복을 도난 당한 경우 빌려줌
                    lost.splice(ridx, 1);
            }
        }
    }
    return n - lost.length;
}

// 테스트 코드
console.log(solution(2,[1,2],[1,2])); // 2