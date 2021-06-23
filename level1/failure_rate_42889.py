def solution(N, stages):
    frate = []
    sum = stages.count(N+1) # 실패율의 분모, 상위 스테이지에 도달한 플레이어 수를 누적할 변수

    for i in reversed(range(N)):
        stage = i+1 # 해당 스테이지
        count = stages.count(stage) # 실패율의 분자, 해당 스테이지에 도달한 플레이어 수
        
        if count != 0: # 실패율의 분자가 0이 아닌 경우
            sum += count
            frate.append([count/sum, stage]) # [실패율, 스테이지]
        else: # 실패율의 분자가 0인 경우
            frate.append([0, stage])

    frate = sorted(frate, key = lambda x : (-x[0], x[1])) # 실패율 내림차순, 실패율이 동일한 경우 스테이지 오름차순 정렬
    return [frate[i][1] for i in range(N)]

print(solution(5,[2, 1, 2, 6, 2, 4, 3, 3])) # 테스트 코드