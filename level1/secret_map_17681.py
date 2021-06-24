def solution(n, arr1, arr2):
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

print(solution(5,[9, 20, 28, 18, 11], [30, 1, 21, 17, 28])) # 테스트 코드