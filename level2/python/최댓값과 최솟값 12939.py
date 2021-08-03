def solution(s):
    s = s.split()
    numbers = list(map(int, s))
    return str(min(numbers)) + " " + str(max(numbers))