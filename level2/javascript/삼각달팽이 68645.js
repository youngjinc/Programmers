function solution(n) {
    let answer = [];
    let row = -1, col = 0, num = 0;

    for(let i = 0; i < n ; i++)
        answer[i] = new Array(i+1).fill(0);

    for (let i = 0; i < n; i++) {
        switch (i % 3) {
            case 0:
                for (let j = i; j < n; j++)
                    answer[++row][col] = ++num;
                break;
            case 1:
                for (let j = i; j < n; j++) 
                    answer[row][++col] = ++num;
                break;
            case 2:
                for (let j = i; j < n; j++) 
                    answer[--row][--col] = ++num;
                break;
        }
    }

    return answer.flat() //answer.reduce((a,b)=>a.concat(b));
}

console.log(solution(4))