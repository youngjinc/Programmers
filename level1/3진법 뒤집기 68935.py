def solution(n):
    ternary = []
    answer = 0

    while n: # 10진법 -> 앞뒤 반전 3진법 
        ternary.append(n % 3)
        n //= 3 
    ternary.reverse() # 맨 뒷 자리부터 3제곱을 누적해서 곱하기 위함

    for i in range(len(ternary)): # 앞뒤 반전 3진법 -> 10진법
        answer += ternary[i] * 3**i

    return answer

print(solution(45)) # 테스트 코드


