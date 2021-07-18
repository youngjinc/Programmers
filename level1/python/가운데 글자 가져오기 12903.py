def solution(s):
    mid_idx = len(s) // 2
    if len(s) % 2 == 0:
        return s[mid_idx-1:mid_idx+1]
    else:
        return s[mid_idx]