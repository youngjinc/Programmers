def solution(board, moves):
    answer = 0
    basket = []
    cols = [] # 열 별 원소 리스트가 저장된 2차원 리스트로 사용
    for col in range(len(board)): # board의 특정 열을 가리킴
        cols.append([row[col] for row in reversed(board)]) # 해당 열의 밑의 행부터 순서대로 원소를 추가한 리스트를 cols에 저장

    for i in moves: 
        for j in range(len(cols[i-1])): 
            doll = cols[i-1].pop()
            if doll != 0: # 뽑은 인형이 0이 아닌 경우
                if len(basket) > 0 and basket[-1] == doll: # basket에 저장된 인형이 1개 이상이며, basket의 최상단 인형과 현재 뽑은 인형이 동일한 경우
                   basket.pop()
                   answer += 2 # 인형 2개 제거
                else: # basket에 저장된 인형이 없거나, basket의 최상단 인형과 현재 뽑은 인형이 동일하지 않은 경우
                    basket.append(doll)
                break
       
    return answer
print(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]))