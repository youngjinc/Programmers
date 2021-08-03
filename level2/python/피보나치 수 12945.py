def solution(n):
    fibo = [0,1]

    for i in range(2,n+1): # 캐시를 사용해서 n번째 피보나치 수까지 모두 구하기
        fibo.append(fibo[i-1] + fibo[i-2])

    return fibo[-1] % 1234567

print(solution(3)) 