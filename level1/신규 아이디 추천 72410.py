import re
def solution(new_id):
    
    # 1단계 : 모든 대문자를 소문자로 변경
    new_id = new_id.lower()
    
    # 2단계 : 알파벳 소문자, 숫자, '-', '_', '.'를 제외한 모든 문자를 제거
    new_id = re.sub('[^a-z0-9-_.]', '', new_id)
    
    # 3단계 : 2번 이상 연속된 '.'를 하나의 마침표(.)로 치환
    new_id = re.sub('[.]{2,}', '.', new_id)
    
    # 4단계 : 처음이나 끝에 위치한 '.'를 제거합니다.
    new_id = re.sub('^[.]|[.]$', '', new_id)
    
    # 5단계 : 빈 문자열인 경우, 'a'를 대입
    if len(new_id) == 0:
        new_id = 'a'
        
    # 6단계 : 16자 이상인 경우, 첫 15개의 문자를 제외한 나머지를 모두 제거 후 끝에 위치한 '.' 문자를 제거
    if len(new_id) > 15:
        new_id = new_id[:15]
        new_id = re.sub('[.]$', '', new_id)
        
    # 7단계 : 2자 이하인 경우, 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙임
    while len(new_id)< 3:
        new_id += new_id[-1]
            
    return new_id

# print(solution(''))
