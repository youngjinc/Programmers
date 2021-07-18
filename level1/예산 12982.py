def solution(d, budget):
    cnt = 0
    d.sort() # 신청금액 오름차순으로 정렬
    for i in d:
        if budget >= i: # 남은 예산보다 해당 부서의 신청금액이 작다면
            budget -= i # 신청금액을 지원한다.
            cnt += 1
    return cnt