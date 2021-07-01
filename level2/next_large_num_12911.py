def solution(n):
    next_num = n
    n_bin = bin(n)
    
    while True:
        next_num += 1 # 다음 큰 숫자
        if n_bin.count('1') == bin(next_num).count('1'): # 2진수로 변환했을 때 1의갯수가 같은지 검사
            return next_num