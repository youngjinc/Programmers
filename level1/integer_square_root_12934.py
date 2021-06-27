def solution(n):
    answer = n ** 0.5 # 제곱근 구하기
    if str(answer)[-2:] == '.0': # 제곱근이 양의정수인지 검사
        return (answer + 1)**2
    else:
        return -1