function solution(s){
    let p = s.match(/p/gi);
    let y = s.match(/y/gi);
    if(p == null) p = [];
    if(y == null) y = [];

    return p.length == y.length;
}

// 테스트 코드
console.log(solution("odfg")) // 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴