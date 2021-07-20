function solution(a, b) {
    let week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']; // 1(FRI) % 7 = 1
    let day = [31,29,31,30,31,30,31,31,30,31,30,31];
    let days = b;
    
    for (var i = 0; i < a-1; i++)
        days += day[i];
    
    return week[days % 7];
}

// 테스트 코드
console.log(solution(5, 24)) // "TUE"