def solution(s):
    stack = []
    for c in s:
        if c == '(': # 열린 괄호인 경우 스텍에 추가
            stack.append(c)
        elif c == ')': # 닫힌 괄호인 경우 스텍에서 상단의 열린괄호 꺼내기
            try:
                stack.pop()
            except: # pop할 요소가 없는 경우, False(올바르지 않은 괄호) 반환
                return False
                
    return len(stack) == 0 # 괄호가 완벽하게 짝을 이뤄서 모두 스텍에서 제거됐는지 여부를 반환