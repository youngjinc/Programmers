def solution(files):
    for i in range(len(files)):
        for j in range(len(files[i])): # 해당 파일명 한 글자씩 검사
            if files[i][j].isdigit(): # 숫자인 경우
                idx = j+1 # 다음 글자가 있는 인덱스
                cnt = 1 # 연속된 숫자의 갯수
                while idx < len(files[i]) and files[i][idx].isdigit() and cnt < 5: # 인덱스를 초과하지 않으면서 해당 글자가 숫자이고, 연속된 숫자가 5개를 초과하지 않은 경우 
                    idx += 1
                    cnt += 1
                files[i] = [files[i][:j], files[i][j:idx], files[i][idx:]] # HEAD, NUMBER, TAIL 분할
                break
    files.sort(key = lambda x:(x[0].lower(), int(x[1]))) # HEAD 부분은 대소문자 구분 없이 사전 순으로 정렬, NUMBER 숫자 순으로 정렬
    return ["".join(file) for file in files] # 분할한 문자열 이어 붙이기


# 테스트 코드
print(solution(["a00000456", "a00000"])) 
print(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]))