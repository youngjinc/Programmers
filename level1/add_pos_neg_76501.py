def solution(absolutes, signs):    
    for i in range(len(signs)):
        if not signs[i]: # False인 경우만 -1 곱하기
            absolutes[i] *= -1 
    return sum(absolutes)