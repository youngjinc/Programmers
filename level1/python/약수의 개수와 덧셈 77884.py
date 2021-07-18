def solution(left, right):
    answer = 0
    for num in range(left, right+1):
        cnt = 1 # 약수 중 자신을 의미
        for divisor in range(1, num // 2 + 1): # 해당 숫자의 절반까지만 약수 탐색
            if num % divisor == 0:
                cnt += 1

        if cnt % 2 == 0: # 약수의 개수가 짝수인 경우
            answer += num
        else: # 약수의 개수가 홀수인 경우
            answer -= num  

    return answer