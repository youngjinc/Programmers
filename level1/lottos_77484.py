def solution(lottos, win_nums):
    lank = {6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6} # 일치한(맞힌) 번호 갯수에 따른 순위 정보
    zero_cnt = lottos.count(0)
   
    min = len(set(lottos) & set(win_nums)) # 확실히 맞힌 원소의 개수 : 최저 순위
    max = min + zero_cnt # 최대한으로 맞혔다고 가정했을 때, 맞힌 원소의 개수 : 최고 순위

    return [lank[max], lank[min]] # 최고 순위, 최저 순위
print(solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35]))