def solution(n):
    sum = n # 자신도 약수에 포함
    for num in range(1, n // 2 + 1):
        if n % num == 0:
            sum += num 
                
    return sum