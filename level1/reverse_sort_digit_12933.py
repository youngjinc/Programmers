def solution(n):
    digit = list(str(n))
    digit.sort(reverse=True)
    return int("".join(digit))

print(solution(118372))