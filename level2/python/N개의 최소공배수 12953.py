def solution(arr):
    answer = arr[0]
    for num in arr:
        answer = lcm(answer, num)
    return answer

def lcm (a,b):
    return a*b//gcd(a,b)

def gcd(a,b):
    if not a % b:
        return b
    else:
        return gcd(b, a%b)
        
# 유클리드 알고리즘(Euclidean algorithm)
# 비교대상의 두 개의 자연수 a와 b에서(단 a>b) a를 b로 나눈 나머지를 r이라고 했을 때 
# GCD(a, b) = GCD(b, r)과 같고 "r이 0이면 그때의 b가 최대공약수인 원리

print(solution([2,6,8,14])) # 테스트 코드 : 168