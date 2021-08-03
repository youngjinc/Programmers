def solution(str1, str2):

    str1, str2 = splitting(str1), splitting(str2)
    i,j = 0,0
    hap_cnt, kyo_cnt = 0,0

    while True:
        if i == len(str1): # str1이 먼저 검사를 마친 경우
            hap_cnt += len(str2)-j # 남은 str2 원소 갯수를 합집합에 누적
            break
        elif j == len(str2): # str2가 먼저 검사를 마친 경우
            hap_cnt += len(str1)-i # 남은 str1 원소 갯수를 합집합에 누적
            break
            
        if str1[i] == str2[j]: # str1과 str2가 같은 경우
            i+=1
            j+=1
            kyo_cnt += 1
            hap_cnt += 1
        elif str1[i] < str2[j]: # str1이 str2보다 작은 경우
            hap_cnt += 1 # str1의 원소를 합집합에 추가
            i+=1
        else: # str2가 str1보다 작은 경우
            hap_cnt += 1 # str2의 원소를 합집합에 추가
            j+=1

    if kyo_cnt == 0 and hap_cnt == 0: # 교집합, 합집합이 모두 공집합일 경우
        return 65536
    else:
        return int(kyo_cnt / hap_cnt * 65536)

def splitting(str): # 두 글자씩 끊어서 다중집합 만들기
    str_set = []
    for i in range(0, len(str)-1):
        if str[i:i+2].isalpha(): # 영문자로 된 글자 쌍만 유효
            str_set.append(str[i:i+2].lower())
    str_set.sort()
    return str_set

# 테스트 코드
print(solution('FRANCE','french'))
print(solution('aa1+aa2','AAAA12'))
print(solution('handshake','shake hands')) 
print(solution('E=M*C^2','e=m*c^2'))