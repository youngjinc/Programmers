function solution1(price, money, count) { // 방법 1 : 단순 반복문 사용
    let total = 0;
    for(let i = 0; i < count; i++)
        total+=price * (i+1);
    
    return money-total > 0 ? 0 : Math.abs(money-total);
}

function solution2(price, money, count) { // 방법 2 : 등차수열 합 공식 사용
    const total = count * price * (1+count) / 2; // "count * (price + price*(count)) / 2"을 정리함
    return money-total > 0 ? 0 : Math.abs(money-total);
}

// 테스트 코드
console.log(solution2(3, 20, 4));