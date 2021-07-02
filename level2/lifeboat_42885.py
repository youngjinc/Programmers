def solution(people, limit):
    people.sort() # 무게 오름차 순 정렬

    f,r = 1, len(people)-1 # front, rear
    cnt = 0 # 보트 수

    while f <= r:
        cnt += 1 # 보트 추가
        if people[f] + people[r] <= limit: # 가장 가벼운 사람과 무거운 사람의 무게가 limit를 넘지 않은 경우
            f += 1 # 다음 가벼운 사람
        r -= 1 # 다음 덜 무거운 사람

    return cnt

print(solution([40,50,60,70,80,90],130)) # 테스트 코드