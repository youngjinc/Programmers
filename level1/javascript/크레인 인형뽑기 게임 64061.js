function solution(board, moves) {
    let basket = [];
    let cnt = 0;
    
    for(let i = 0; i < moves.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[j][moves[i] - 1] != 0){ // 해당 컬럼에 인형이 존재하는 경우
                if(board[j][moves[i] - 1] == basket[basket.length - 1]){ // 현재 인형과 바구니 최상단의 인형이 동일한지 검사, 동일할 경우
                    basket.pop(); // 바구니 최상단의 인형을 제거
                    cnt += 2; // 인형 두개 제거
                }
                else{ // 동일하지 않을 경우
                    basket.push(board[j][moves[i] - 1]); // 현재 인형을 꺼내서 바구니에 넣고
                }
                board[j][moves[i] - 1] = 0; // 꺼낸 인형 위치에 0으로 표시
                break;
            }
        }
    }

    return cnt;
}

// 테스트 코드
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));