def solution1(skill, skill_trees): # 방법 1
    skill = list(skill)
    cnt = 0

    for tree in skill_trees:
        skill_list = [] # 각 스킬트리에서 선행 스킬 요소를 담는 리스트
        for s in tree:
            if s in skill: # 해당 스킬트리에서 선행 스킬 요소를 발견한 경우
                skill_list.append(s)
        if skill_list == skill[0:len(skill_list)]: # 스킬리스트와 선행 스킬의 순서가 일치하는 경우
            cnt += 1

    return cnt

def solution2(skill, skill_trees): # 방법 2
    cnt = 0
    dic = {} # 스킬에 따른 순서 정보를 담을 딕셔너리

    for i in range(len(skill)): # 딕셔너리 초기화
        dic[skill[i]] = i 

    for i in range(len(skill_trees)):
        order = 0 # 순서
        is_valid = True # 유효한 스킬 트리인지 판별
        for j in range(len(skill_trees[i])): 
            if skill_trees[i][j] in dic: # 딕셔너리에 있는 스킬인 경우
                #print(i, j, skill_trees[i][j])
                if dic[skill_trees[i][j]] != order: # 해당 스킬의 순서가 옳바르지 않은 경우
                    is_valid = False
                    break
                else: # 순서가 옳은 경우
                    order += 1
        if is_valid: # 유효한 스킬 트리인 경우
            cnt += 1 # 카운트 증가
        #print('cnt : ', cnt)

    return cnt

print(solution1("CBD", ["BACDE", "CBADF", "AECB", "BDA"])) # 테스트 코드