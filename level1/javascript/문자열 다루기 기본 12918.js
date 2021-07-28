function solution(s) {
    /* 방법 1
    let str = s.replace(/\d/g, ""); // 숫자를 모두 제거한 순수 문자열 /^[0-9]+$/.test(s))
    return [4,6].includes(s.length) && str.length == 0? true : false; 
    */

    // 방법 2
    return [4,6].includes(s.length) && /^\d+$/.test(s)? true : false;
}

console.log(solution('5.1153')); // false : '.'이 존재하므로 조건에 위배
console.log(solution('1 2222')); // false : ' '이 존재하므로 조건에 위배
console.log(solution('1e22')); // false : 'e'가 존재하므로 조건에 위배