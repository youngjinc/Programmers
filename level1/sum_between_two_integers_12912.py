def solution(a, b):
    sum = 0
    for num in range(min(a,b), max(a,b)+1):
        sum += num
        
    return sum