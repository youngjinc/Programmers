import re

def solution(m, musicinfos):
    answer = []
    
    for i in range(len(musicinfos)):
        musicinfos[i] = musicinfos[i].split(',') # 한 곡 내 정보를 ','로 구분
        musicinfos[i][3] = re.findall('[A-Z]#*', musicinfos[i][-1]) # 곡정보 중 악보는 '#' 포함해서 음 구분

    for music in musicinfos:
        time = (int(music[1][:2])*60 + int(music[1][3:])) - (int(music[0][:2])*60 + int(music[0][3:])) # 재생시간
        melody = [] # 재생시간 동안의 멜로디(악보 : idx3)

        if len(music[3]) >= time: # 재생시간 <= 멜로디 길이
            melody = [music[3][i] for i in range(time)]

        else: # 재생시간 > 멜로디 길이
            for i in range(time - len(music[3])):
                melody.append(music[3][i % len(music[3])])
            melody  = music[3] + melody
       
        m = re.findall('[A-Z]#*', str(m)) # '#' 포함해서 음 구분
        for i in range(len(melody)-len(m)+1):
            if m == melody[i:i+len(m)]: #  기억한 멜로디와 부분 멜로디가 일치하는 경우
                answer.append([time, music[2]]) # 해당 곡을 저장 [재생시간, 곡제목]
                break

    if len(answer): # 방금그곡이 있는 경우
        if len(answer) > 1: # 곡이 여러 개인 경우
            answer.sort(key = lambda x : -x[0]) # 재생시간이 긴 순서로 정렬, 재생시간도 동일한 경우 입력된 순서대로 정렬되어있음.
        return answer[0][1] # 곡 제목 반환
        
    else: # 일치하는 곡이 없는 경우
        return '(None)' 

# 테스트 코드
print(solution("A#", ["13:00,13:02,HAPPY,B#A#"]))
print(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]))
print(solution("CCB", ["03:00,03:10,FOO,CCB#CCB", "04:00,04:08,BAR,ABC"]))
print(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]))
print(solution("ABC",["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]))