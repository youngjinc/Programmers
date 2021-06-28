-- 모든 레코드 조회하기 59034
SELECT * FROM ANIMAL_INS ORDER BY ANIMAL_ID;

-- 최댓값 구하기 59415 (V)
SELECT datetime FROM animal_ins ORDER BY datetime DESC LIMIT 1;

-- 역순 정렬하기 59035
SELECT name, datetime FROM animal_ins ORDER BY animal_id DESC;

-- 동물의 아이디와 이름 59403
SELECT animal_id, name FROM animal_ins ORDER BY animal_id;

-- 여러 기준으로 정렬하기 59404
SELECT ANIMAL_ID, NAME, DATETIME FROM animal_ins ORDER BY name, datetime desc;

-- 상위 n개의 레코드 59405 
SELECT name FROM animal_ins ORDER BY datetime limit 1;

-- 아픈 동물 찾기 59036
SELECT animal_id, name FROM animal_ins WHERE INTAKE_CONDITION = 'Sick' ORDER BY animal_id;

-- 어린동물 찾기 59037 (V)
SELECT animal_id, name FROM animal_ins WHERE NOT intake_condition = 'Aged' ORDER BY animal_id;

-- 이름이 없는 동물의 아이디 59039 (V)
SELECT animal_id FROM animal_ins WHERE name IS NULL ORDER BY animal_id;

-- 이름이 있는 동물의 아이디 59407
SELECT animal_id FROM animal_ins WHERE name IS NOT NULL ORDER BY animal_id;