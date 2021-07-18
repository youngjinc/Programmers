def solution(n, m):
    for divisor in range(1, min(n, m)+1): # 최대공약수 구하기
        if n % divisor == 0 and m % divisor == 0:
            gcd = divisor

    lcm = n * m // gcd # 최소공배수 구하기
        
    return [gcd, lcm]
print(solution(2, 5)) # 테스트 코드