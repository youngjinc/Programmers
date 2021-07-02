from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []

    for c in course:
        tmp = []
        for order in orders:
            combi = combinations(sorted(order), c) # 주문 마다 c개로 구성된 모든 메뉴 조합 생성
            tmp += combi # 현재 주문에서 생성된 combi를 tmp에 저장

        menu_cnt = Counter(tmp) # 각 메뉴 조합이 등장한 횟수를 카운트
        
        if menu_cnt: # 해당하는 수의 메뉴조합이 있는 경우
            max_cnt = max(list(menu_cnt.values())) # 등장 횟수의 최댓값

            if max_cnt >= 2: # 최댓값이 2(최소 2명 주문)이상을 만족하는 경우
                for key, value in menu_cnt.items():
                    if menu_cnt[key] == max_cnt:
                        answer.append("".join(key)) # 해당 조합을 새로 출시할 메뉴 조합에 추가

    return sorted(answer)

print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])) # 테스트 코드