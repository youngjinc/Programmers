def solution(n):
    cnt = 1 # n 자신을 의미
    i = 1
    
    for num in range(1, round(n//2) + 1): 
        sum = 0
        while sum < n: # 현재까지의 sum이 n보다 작은 경우, 연속된 숫자 더하기
            sum += num
            num += 1 
                    
        if sum == n: # sum이 n이 된 경우 cnt증가
            cnt += 1

    return cnt

print(solution(15)) # 테스트 코드