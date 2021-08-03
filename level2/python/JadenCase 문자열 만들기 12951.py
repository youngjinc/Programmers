def solution(s):
    first_idx = 0 # 단어의 첫 글자 인덱스
    answer = ''

    for i in range(s.rfind(' ')): # 마지막 공백 전(마지막 단어 전)까지 반복
        if s[i] == ' ' and s[i+1] != ' ': # 현재문자가 공백이면서 바로뒤에 문자가 등장하는 경우 (다음 단어 시작 전)
            answer += s[first_idx].upper() + s[first_idx+1 :i+1].lower() # 첫글자는 대문자, 나머지는 소문자로 변환
            first_idx = i+1 # 인덱스 갱신
    answer += s[first_idx].upper() + s[first_idx+1:].lower() # 마지막 단어 변환
    
    return answer
print(solution("3people   unFollowed me")) # 테스트 코드