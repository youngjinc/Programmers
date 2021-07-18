def solution(dartResult):
    num = ""
    score = []
    sdt = {'S' : 1, 'D' : 2, 'T' : 3}

    for dart in dartResult:
        if dart.isdigit(): # 숫자인 경우
            num += dart

        elif dart == "*": # 스타상인 경우
            if len(score) == 1: # 첫번째 스타상의 점수만 2배가 된다.
                score[0] *= 2
            else: # 이전점수와 해당 점수를 2배가 된다.
                score[-2] *= 2
                score[-1] *= 2

        elif dart == "#": # 아차상인 경우
            score[-1] *= -1 #  해당 점수는 마이너스 된다.

        else: # S D T 중에 하나인 경우
            score.append(int(num) ** sdt[dart])
            num = ""
    return sum(score)

print(solution("1S2D*3T")) # 테스트 코드