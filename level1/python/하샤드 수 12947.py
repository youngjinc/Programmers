def solution(x):
    s = sum([int(i) for i in list(str(x))])
    return x % s == 0