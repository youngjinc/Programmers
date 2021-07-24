function solution(numbers, hand) {
    let answer = '';
    let left = [3,0]; // 왼손 엄지가 위치한 '*'의 키패드 위치
    let right = [3,2]; // 오른손 엄지가 위치한 '#'의 키패드 위치
    const keypad = {1:[0,0], 2:[0,1], 3:[0,2], 4:[1,0], 5:[1,1], 6:[1,2], 7:[2,0], 8:[2,1], 9:[2,2], 0:[3,1]};
    for(let i in numbers){
        if ([1, 4, 7].includes(numbers[i])){ // 왼손 엄지 사용하는 경우
            answer += 'L';
            left = keypad[numbers[i]];
        }
        else if ([3,6,9].includes(numbers[i])){ // 오른손 엄지를 사용하는 경우
            answer += 'R';
            right = keypad[numbers[i]];
        }
        else{ // 두 엄지 손가락 중 현재 키패드 위치에서 더 가까운 손가락 사용
            let ldist = Math.abs(keypad[numbers[i]][0] - left[0]) + Math.abs(keypad[numbers[i]][1] - left[1])
            let rdist = Math.abs(keypad[numbers[i]][0] - right[0]) + Math.abs(keypad[numbers[i]][1] - right[1])
            if (ldist < rdist){ // 왼쪽이 더 가까운 경우, 왼손 엄지 사용
                answer += 'L';
                left = keypad[numbers[i]];
            }
            else if (ldist > rdist){ // 오른쪽이 더 가까운 경우, 오른손 엄지 사용
                answer += 'R';
                right = keypad[numbers[i]];
            }
            else{ // 위치가 동일할 경우, 손잡이 방향에 따라 결정
                if (hand == 'left'){
                    answer += 'L';
                    left = keypad[numbers[i]];
                }
                else if (hand == 'right'){
                    answer += 'R';
                    right = keypad[numbers[i]];
                }
            }
        }
    }
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));