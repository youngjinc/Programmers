def solution(msg):
    zip = []
    # dic = {chr(num+64):num for num in range(1,27)}
    dic = {'A':1, 'B':2, 'C':3, 'D':4, 'E':5, 'F':6, 'G':7, 'H':8, 'I':9, 'J':10, 'K':11, 'L':12, 'M':13, 'N':14, 'O':15, 'P':16, 'Q':17, 'R':18, 'S':19, 'T':20, 'U':21, 'V':22, 'W':23, 'X':24, 'Y':25, 'Z':26}
    w = msg[0] # 현재 입력
    
    for i in range(1,len(msg)):
        if w + msg[i] in dic.keys(): # 사전에서 현재 입력과 일치하는 가장 긴 문자열 w찾기
            w += msg[i]

        else:
            zip.append(dic[w]) # w에 해당하는 사전의 색인 번호를 출력
            dic[w+msg[i]] = len(dic)+1 # w+c(입력에서 처리되지 않은 다음 글자)에 해당하는 단어를 사전에 등록한다.
            w = msg[i] # 다음 글자를 w로 초기화

    zip.append(dic[w]) # 마지막 문자 압축
    return zip

print(solution('TOBEORNOTTOBEORTOBEORNOT')) # 테스트 코드
