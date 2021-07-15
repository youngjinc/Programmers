def solution1(dirs): # 방법 1
    d = {'U':(0,1), 'D':(0,-1), 'L':(-1,0), 'R':(1,0)} # 상하좌우 이동에 따른 좌표값 변화량
    visited = set() # 방문한 간선 집합
    x,y = 0,0 

    for dir in dirs:
        next_x, next_y = x+d[dir][0], y+d[dir][1] # 이동한 후 좌표값
        if -5 <= next_x <= 5 and -5 <= next_y <= 5:
            visited.add((x, y, next_x, next_y)) # 크기가 1인 양방향 간선(무방향 간선을 구현하기 위함)을 추가
            visited.add((next_x, next_y, x, y))
            x,y = next_x, next_y # 이동에 따른 좌표값 갱신

    return len(visited) // 2 # 무방향 간선이므로 2로 나눔



def solution2(dirs): # 방법 2
    visited = set()
    x,y = 0,0

    for dir in dirs:
        cur = (x,y) #
        
        if dir == 'U' and y < 5:
            y += 1
        elif dir == 'D' and y > -5:
            y -= 1
        elif dir == 'L' and x > -5:
            x -= 1
        elif dir == 'R' and x < 5:
            x += 1
        else:
            continue

        visited.add(str([cur,(x,y)])) # 무방향 간선을 구현하기 위함
        visited.add(str([(x,y),cur]))

    return len(visited) // 2

# 테스트 코드
print(solution1("ULURRDLLU"))
print(solution1("UDU"))
print(solution1("UUUUULRDU"))