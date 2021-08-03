def solution(n, words):
    for i in range(1, len(words)):
        if words[i][0] != words[i-1][-1] or words[i] in words[:i]: # 이전 단어의 마지막문자와 현재 단어의 시작문자가 일치하고, 이전에 등장하지 않은 문자인 경우
            return [i%n+1, i//n+1]
    return [0, 0]

# 테스트 코드
print(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
print(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
print(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]))