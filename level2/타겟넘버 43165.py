cnt = 0
def dfs(idx, numbers, target, value): # 방법 1
    global cnt
    if idx == len(numbers): # 모든 숫자를 사용한 경우
        if value == target: # 합계와 타겟넘버와 
            cnt+=1
            return
        else:
            return

    dfs(idx+1, numbers, target, value+numbers[idx]) # -num
    dfs(idx+1, numbers, target, value-numbers[idx]) # +num

def solution(numbers, target):
    global cnt
    dfs(0, numbers, target, 0)
    return cnt

def bp(numbers, target): # 방법 2
    values = [0] # 부분합 리스트
    for num in numbers:
        tmp = []
        for _ in range(len(values)):
            v = values.pop() # 부분합
            tmp.append(v+num) # -num
            tmp.append(v-num) # +num
        values = tmp # 부분합 리스트 갱신
    cnt = values.count(target)
    return cnt

print(solution([1,1,1,1,1],3)) # 테스트 코드 : dfs
print(bp([1,1,1,1,1],3)) # 테스트 코드 : bp