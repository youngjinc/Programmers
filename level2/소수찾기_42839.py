from itertools import permutations

def solution(numbers):
    primes = []

    for i in range(1, len(numbers)+1):
        tmp = list(map(''.join, permutations(numbers, i))) # 나올 수 있는 모든 숫자의 경우의 수 구함
        for t in tmp:
            num = int(t)
            if isPrime(num): # 소수인 경우
                primes.append(num)

    return len(set(primes)) # 중복 숫자 제거 후 소수 갯수 출력

def isPrime(num): # 소수판별 코드
    if num <= 1:
       return False

    else:
        for divisor in range(2, num//2+1):
            if num % divisor == 0:
                return False
    return True

print(solution("011")) # 테스트 코드