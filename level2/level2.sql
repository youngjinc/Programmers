-- 고양이와 개는 몇 마리 있을까 59040
SELECT animal_type, COUNT(*) count 
FROM animal_ins 
GROUP BY animal_type 
order by animal_type;

-- 루시와 엘라 찾기 59046
SELECT animal_id, name, sex_upon_intake 
FROM animal_ins 
WHERE name IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty') 
ORDER BY animal_id;

-- 최솟값 구하기 59038
SELECT datetime 시간 
FROM animal_ins 
ORDER BY datetime LIMIT 1;

-- 동명 동물 수 찾기 59041
SELECT name, COUNT(*) count 
FROM animal_ins 
GROUP BY name 
HAVING count(name) >= 2 
ORDER BY name;

-- 중복 제거하기 59408
SELECT COUNT(DISTINCT name) count 
FROM animal_ins;

-- 동물 수 구하기 59406
SELECT COUNT(*) count 
FROM animal_ins;

-- 입양 시간 구하기 59412 (V)
SELECT SUBSTR(datetime, 12, 2) hour, COUNT(*) count 
FROM animal_outs 
GROUP BY hour 
HAVING hour 
BETWEEN '09' AND '19' 
ORDER BY hour;

SELECT HOUR(datetime) hour, COUNT(*) count 
FROM animal_outs 
GROUP BY hour 
HAVING hour 
BETWEEN 9 AND 19 
ORDER BY hour;

-- 중성화 여부 파악하기 59409 (V)
SELECT animal_id, name, 
CASE SUBSTRING_INDEX(sex_upon_intake, ' ', 1) 
    WHEN 'Neutered' THEN 'O'
    WHEN 'Spayed' THEN 'O'
    ELSE 'X'
END 중성화 
FROM animal_ins;

-- NULL 처리하기 59410 (V)
SELECT animal_type, IFNULL(name, "No name") name, sex_upon_intake 
FROM animal_ins 
ORDER BY animal_id;

-- 이름에 el이 들어가는 동물 찾기 (V)
SELECT animal_id, name 
FROM animal_ins 
WHERE animal_type = 'Dog' AND name LIKE '%el%' 
ORDER BY name;

-- DATETIME에서 DATE로 형 변환 59414(V)
SELECT animal_id, name, DATE_FORMAT(datetime, '%Y-%m-%d') 날짜 FROM animal_ins ORDER BY animal_id;