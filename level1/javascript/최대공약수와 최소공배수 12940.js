function solution(n, m) {
    var answer = [];
    let gcd = getGcd(n, m);
    return [gcd, n*m/gcd]; // [최대공약수, 최소공배수]
}
function getGcd(n, m){
    for(var divisor = Math.min(n, m); divisor > 0; divisor--){
        if(n % divisor == 0 && m % divisor == 0)
            return divisor;
    }
}