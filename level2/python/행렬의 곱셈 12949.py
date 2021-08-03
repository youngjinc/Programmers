def solution(arr1, arr2):
    matrix = []
    
    for i in range(len(arr1)): # 행 선택
        list = []
        for j in range(len(arr2[0])): # 열 선택
            sum = 0
            for k in range(len(arr1[0])): # 요소 선택
                sum += arr1[i][k] * arr2[k][j]  
            list.append(sum)
        matrix.append(list)
        
    return matrix

print(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]))