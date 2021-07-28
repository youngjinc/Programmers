function solution(n) {
    let primes = [0, 0].concat(new Array(n-1).fill(1));

    for(let i = 2; i <= n; i++){
        if(primes[i] == 1){
            for(let j = 2*i; j <= n; j+=i)
                    primes[j] = 0;
        }
    }
    
    return primes.reduce((a,b) => a+b);
}

console.log(solution(10));