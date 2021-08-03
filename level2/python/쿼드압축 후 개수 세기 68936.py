cnt = [0,0] # [0의 개수, 1의 개수]

def quad_zip(s):

    if len(s) == 1: # 영역의 길이(크기) 1인 경우 (if문 없으면 실행시간 더 길어짐)
        cnt[s[0][0]] += 1 # 해당 수 그대로 압축
        return

    else: # 1이 아닌 경우
        isSame = True # 영역s의 모든 수가 동일하다고 가정
        for i in range(len(s)):
            for j in range(len(s[i])):
                if s[0][0] != s[i][j]: # 첫번째 수와 다른 수가 발견된 경우
                    isSame = False
                    break

        if not isSame: # 영역s의 모든 수가 동일하지 않은 경우, 4영역으로 분할
            half = len(s) // 2
            quad_zip([row[:half] for row in s[:half]]) # 좌측 상단 영역
            quad_zip([row[half:] for row in s[:half]]) # 우측 상단 영역
            quad_zip([row[:half] for row in s[half:]]) # 좌측 하단 영역
            quad_zip([row[half:] for row in s[half:]]) # 우측 하단 영역

        else: # 영역s의 모든 수가 동일한 경우
            cnt[s[0][0]] += 1 # s를 해당 수 하나로 압축
            return

def solution(arr):
    quad_zip(arr)
    return cnt

print(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]])) # 테스트 코드
