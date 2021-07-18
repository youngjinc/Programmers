def solution(a, b):
    week = ['FRI','SAT','SUN','MON','TUE','WED','THU',]
    day = b; # 현재 달의 날짜 수
    for month in range(1, a): # 이전 월(1월 ~ a-1월)의 날짜 수 계산
        if month in [1,3,5,7,8,10,12]: # 한달이 31일인 경우
            day += 31
        elif month in [4,6,9,11]: # 한달이 30일인 경우
            day += 30
        else: # 2월인 경우
            day += 29
    return week[day % 7 - 1]
