def solution(n):
    answer = ''
    num = ['1','2','4']
    while n:
        n -= 1
        answer += num[n % 3]
        n //= 3
        
    return answer[::-1]

print(solution(15))