def solution(n):
    # 방법1
    clap = '수'
    for i in range(2, n+1):
        if i % 2 == 0:
            clap += '박'
        else:
            clap += '수'
    return clap

    # 방법 2
    # return "".join("수박"[i%2] for i in range(n)) 