def solution(num): 
    num = list(map(str, num))
    # 문자열을 3개 나열한 것들('333', '303030', '343434', '555', '999')을 내림차 순 정렬
    # 3개 나열하는 이유 : numbers의 원소는 0 이상 1,000 이하
    num.sort(key = lambda x : x*3, reverse = True) 
    return str(int(''.join(num)))

print(solution([3, 30, 34, 5, 9])) # 테스트 코드
