def solution(s):
    answer = []
    s = s.split(" ", -1)
    for word in s:
        tmp = ''
        for i in range(len(word)):
            if i % 2 == 0:
                tmp += word[i].upper()
            else:
                tmp += word[i].lower()
        answer.append(tmp)
    return " ".join(answer)

print(solution("try hello world")) # 테스트 코드