def solution(n):

    # 방법 1
    sum = 0
    while n : 
        sum += n % 10
        n = n // 10
    return sum

    # 방법 2
    # return sum([int(i) for i in str(n)])