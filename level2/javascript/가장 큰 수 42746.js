function solution1(numbers) {  // 방법 1
    let answer = numbers.map((x)=>x+"").sort((a,b)=>a.repeat(3)>b.repeat(3)?-1:1).join("");
    return answer[0] == '0' ? '0' : answer;
}

function solution2(numbers) {  // 방법 2
    let answer = numbers.map((x)=>x + "").sort((a,b)=>(b+a)-(a+b)).join(""); // ex '3','30' => ('303')-('330')
    return answer[0] == '0' ? '0' : answer;
}

// 테스트 코드
console.log(solution2([6,10,2])); // numbers 배열이 0으로만 구성되어 있을 경우 '0'만 출력