def solution(bridge_length, weight, truck_weights):
    time = 0
    bridge = [0]*bridge_length # 다리의 단위 길이 마다 트럭 위치를 나타낼 수 있는 큐

    while bridge:
        bridge.pop(0) 
        time += 1
        if truck_weights: # 대기 트럭이 존재하는 경우
            if sum(bridge) + truck_weights[0] <= weight: # 다음 트럭이 다리에 올라왔을 때 무게를 초과하지 않는 경우
                bridge.append(truck_weights.pop(0)) # 다리 위에 트럭을 올림
            else: # 무게를 초과하는 경우
                bridge.append(0) # 기존에 다리를 지나고 있는 트럭을 1씩 이동
   
    return time

print(solution(2, 10, [7,4,5,6])) # 테스트 코드