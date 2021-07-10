def solution1(info, query): # 정확성 통과 O, 효율성 통과 X
    answer = [0] * len(query)

    # 데이터 전처리
    info = [f.split(' ') for f in info]
    query = [q.split(' and ') for q in query]
    query = [q[:-1] + q[-1].split(' ') for q in query]
    
    for q in range(len(query)):
        idx = [] # 빈값 '-'이 아닌 항목의 인덱스 리스트
        for i in range(4): # 쿼리에서 점수를 제외한 나머지 항목을 검사
            if query[q][i] != '-': # 빈값 '-'이 아닌 항목의 인덱스를 검사
                idx.append(i)
        
        qr = [query[q][i] for i in idx] # 해당 인덱스의 항목으로만 구성된 쿼리
        for f in info: # 지원자 정보를 하나씩 검사
            if qr == [f[i] for i in idx] and query[q][-1].zfill(6) <= f[-1].zfill(6): # 쿼리와 일치하는 지원자 정보이면서, 지원자 점수가 쿼리 점수(0~100,000)이상인 경우
                answer[q] += 1

    return answer
print(solution1(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]))