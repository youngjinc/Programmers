def solution1(n, arr1, arr2): # 방법 1
    answer = []
    for i in range(n):
        row = '' # 지도에서 한 행씩 해독한 문자열을 저장하기 위한 변수
        # 각 지도에서 한 행씩 이진수로 변환 후, 5자리로 맞춤
        arr1[i] = (bin(arr1[i])[2:]).zfill(n)
        arr2[i] = (bin(arr2[i])[2:]).zfill(n)

        for j in range(n): # 한 행씩 지도 해독
            if arr1[i][j] == '1' or arr2[i][j] == '1':
                row += '#' 
            else:
                row += ' '
        answer.append(row) # 하나의 행 완성
    return answer

def solution2(n, arr1, arr2): # 방법 2 : 비트연산 사용
    answer = []
    for i in range(n):
        row = (bin(arr1[i] | arr2[i]))[2:].zfill(n) # 어느 하나라도 벽인 부분은 전체 지도에서도 벽이므로 or(|)연산 사용
        row = row.replace('1', '#')
        row = row.replace('0', ' ')
        answer.append(row)
    return answer

print(solution1(5,[9, 20, 28, 18, 11], [30, 1, 21, 17, 28])) # 테스트 코드

