function solution(clothes) {
    let answer = 1;
    let clothType = {};
    for(let i = 0; i < clothes.length; i++){
        if(clothType[clothes[i][1]] == undefined)
            clothType[clothes[i][1]] = 1;
        else
            clothType[clothes[i][1]]++;
    }

    return Object.values(clothType).reduce((a,b)=>a*(b+1),1) - 1; // 초깃값 1 주의!
}

// 테스트 코드
console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));