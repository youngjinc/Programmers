function solution(new_id) {
    const answer = new_id
    .toLowerCase() // 1 : 대문자 -> 소문자로 치환
    .replace(/[^\w\d-_.]/g, '') // 2 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    .replace(/\.{2,}/g, '.') // 3 : 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    .replace(/^\.|\.$/g, '') // 4 : 마침표(.)가 처음이나 끝에 위치한다면 제거
    .padEnd(1, 'a') // 5 : 빈 문자열이라면, new_id에 "a"를 대입
    .slice(0, 15) // 6 : 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    .replace(/\.$/, '') // 만약 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
   
    const len = answer.length;
    return len > 2 ? answer : answer.padEnd(3,answer[len-1]); // 7 : 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙임
}

// 테스트 코드 
console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z--"));