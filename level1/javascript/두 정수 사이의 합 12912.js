function solution(a, b) {

    /* 방법 1
    if(a == b)
        return a;
    
    else if (a > b){
        let tmp = a;
        a = b;
        b = tmp;  
    }

    let answer = a;
    for(let i = a+1; i <= b; i++){
        console.log(answer, i);
        answer+= i;

    }
    
    return answer;
    */

   // 방법2
   return (Math.abs(a-b)+1)*(a+b) / 2;
}

console.log(solution(5,3));