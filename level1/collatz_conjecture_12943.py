def solution(num):
    cnt = 0
    while num != 1:
        if cnt == 500: # cnt가 500번을 반복해도 1이 되지 않는 경우
            return -1
        if num % 2 == 0: # 짝수인 경우
            num //= 2
        else: # 홀수인 경우
            num *= 3
            num += 1
        cnt += 1

    return cnt