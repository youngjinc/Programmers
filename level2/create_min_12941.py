def solution(A,B):
    sum = 0
    A.sort() # 오름차순 정렬
    B.sort(reverse = True) # 내림차순 정렬
    for a, b in zip(A,B):
        sum += a * b

    return sum