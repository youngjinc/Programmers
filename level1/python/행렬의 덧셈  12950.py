def solution(arr1, arr2):
    answer = []
    for list1, list2 in zip(arr1, arr2):
        answer.append([num1 + num2 for num1, num2 in zip(list1, list2)])
        
    return answer