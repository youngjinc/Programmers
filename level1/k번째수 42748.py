def solution(array, commands):
    kth_nums = []
    for cmd in commands:
        sub_array = array[cmd[0]-1:cmd[1]]
        sub_array.sort()
        kth_nums.append(sub_array[cmd[2]-1])
    return kth_nums