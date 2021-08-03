def solution(prices):
    answer = [0] * len(prices)

    for i in range(len(prices)):
        for j in range(i+1, len(prices)):
            answer[i] += 1 # 시간 증가
            
            if prices[i] > prices[j]: # 가격이 떨어진 이후에는 검사를 중단
                break
                
    return answer