function solution(lottos, win_nums) {
    const lank = {6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6}; // 맞힌 번호 개수에 따른 순위 정보
    let low = lottos.filter(x => win_nums.includes(x)).length; // 최저 순위 : 가장 적게 맞히는 경우, 정답 배열과 완전 일치하는 원소만 맞혔다고 간주
    let high = lottos.filter(x => x == 0).length + low; // 최고 순위 : 가장 많이 맞히는 경우, 알아볼 수 없는 번호(0)도 모두 맞힌 것으로 간주
    
    return [lank[high], lank[low]];
}

// 테스트 코드
console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]));