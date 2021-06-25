def solution(n):
    nums = [False,False] + [True]*(n-1) # 0, 1 제외 나머지 소수로 간주
    for i in range(2, int(n ** 0.5)+1): # 2부터 n의 제곱근(n의 최대 약수가 n의 제곱근 이하)까지의 모든 수를 확인하며 소수를 검사
        if nums[i]: # i가 소수인 경우
            for j in range(2*i, n+1, i): # i이후 i의 배수를 모두 소수에서 제거(False)
                nums[j] = False
    return nums.count(True) 
print(solution(10))