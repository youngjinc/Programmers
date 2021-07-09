def solution(cacheSize, cities):
    time = 0
    cache = []
    
    if cacheSize: # 캐시 사이즈가 0이 아닌 경우
        for city in cities:
            c = city.lower()
            if c in cache: # 캐시에 해당 도시가 있는 경우
                time+= 1
                cache.pop(cache.index(c)) # 기존에 있던 해당 도시를 캐시에서 제거
               
            else: # 캐시에 해당 도시가 없는 경우
                time+= 5
                if len(cache) == cacheSize: # 캐시가 모두 찬 경우
                    cache.pop(0) # 가장 오랫동안 참조하지 않은(0번 인덱스) 도시를 캐시에서 제거
               
            cache.append(c) # 해당 도시를 캐시의 끝 부분(최근 참조)에 삽입

    else: # 캐시 사이즈가 0인 경우
        time = len(cities)*5

    return time

# 테스트 코드
print(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])) 
print(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])) 
print(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))
print(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))
print(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]))
print(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))