function solution(n)
{
    if(n == 1) return 1;
    let ans = 0;

    while(n > 0){
        ans += n % 2;
        n = Math.floor(n / 2);
    }

    return ans;
}