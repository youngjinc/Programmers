function solution(cacheSize, cities) {
    const HIT = 1, MISS = 5;

    // cacheSize 0인 경우, 매번 MISS
    if (cacheSize == 0) return cities.length * MISS;

    // cacheSize 1이상인 경우
    let time = MISS; // 처음은 MISS로 시작
    let cache = [cities[0].toLowerCase()];
    for(let i = 1; i < caches.length; i++) {
        let city = cities[i].toLowerCase();
        let idx = cache.indexOf(city);

        if(idx != -1){ // hit
            cache.splice(idx,1);
            time += HIT;
        }
        else{ // miss
            if(cache.length >= cacheSize){
                cache.shift();
            }
            time += MISS;
        }

        cache.push(city);
    }
    return time;
}

// 테스트 코드
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));