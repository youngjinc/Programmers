from itertools import combinations

def solution1(nums): # 방법1 : combinations 사용
    cnt = 0
    for cb in combinations(nums, 3): # 원소 3개로 구성된 리스트의 모든 조합
        s = sum(cb)
        if isPrime(s):
            cnt += 1
    return cnt

def solution2(nums): # 방법2 : 반복문 사용
    sum = 0
    cnt = 0
    nums_len = len(nums)
    
    for i in range(nums_len - 2):
        for j in range(i+1, nums_len - 1):
            for k in range(j+1, nums_len):
                sum = nums[i] + nums[j] + nums[k]
                if isPrime(sum):
                    cnt += 1
    return cnt

def isPrime(num): # 소수 판별
    for divisor in range(2, num // 2 + 1):
        if num % divisor == 0:
            return False
    return True

print(solution1([1,2,3,4])) # 테스트코드