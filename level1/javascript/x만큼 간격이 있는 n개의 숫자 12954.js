function solution1(x, n) {
    var answer = [];
    for(var i = 1; i <= n; i++)
        answer.push(x*i);
    
    return answer;
}

function solution2(x, n) {    
    return Array.from({length : n}, (_,i)=>x*(i+1));
}

console.log(solution2(2,5))