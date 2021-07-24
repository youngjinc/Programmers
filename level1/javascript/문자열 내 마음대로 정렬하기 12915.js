function solution(strings, n) {
    strings.sort((a,b)=>{
        if (a[n] > b[n]) return 1; 
        else if (a[n] < b[n]) return -1;
        else if (a > b) return 1; // 동일 인덱스 문자가 같은 문자열이 여럿 일 경우 문자열 사전 순 정렬
        else if (a < b) return -1;
        else return 0;
    });
    return strings;
}

console.log(solution(["sun", "bed", "car"], 1));