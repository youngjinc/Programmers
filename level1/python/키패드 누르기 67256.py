loc = [[3,1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]] # 0-9까지 키패드 위치를 나타내는 리스트

def solution(numbers, hand):
    answer = ''
    left_loc = [3,0] # '*'의 loc
    right_loc = [3,2] # '#'의 loc

    for n in numbers:
        if n in [1,4,7]:
            left_loc = loc[n]
            answer += 'L'
        elif n in [3,6,9]:
            right_loc = loc[n]
            answer += 'R'
        else:
            ldist = abs(loc[n][0]-left_loc[0]) + abs(loc[n][1]-left_loc[1]) # 왼쪽 엄지손가락과 현재 숫자의 키패드 거리
            rdist = abs(loc[n][0]-right_loc[0]) + abs(loc[n][1]-right_loc[1]) # 오른쪽 엄지손가락과 현재 숫자의 키패드 거리
            if ldist < rdist:
                left_loc = loc[n]
                answer += 'L'
            elif ldist > rdist:
                right_loc = loc[n]
                answer += 'R'
            else: # 거리가 같은 경우
                if hand == 'left': # 왼손잡이인 경우
                    left_loc = loc[n]
                    answer += 'L'
                else: # 오른손잡이인 경우
                    right_loc = loc[n]
                    answer += 'R'

    return answer