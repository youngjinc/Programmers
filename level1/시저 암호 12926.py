def solution(s, n):
    caesar_cipher = ''
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for i in range(len(s)):
        if s[i] == ' ':
            caesar_cipher += ' '
            continue
        if s[i].isupper():
            idx = (alphabet.index(s[i].lower()) + n) % 26
            caesar_cipher += alphabet[idx].upper()
        else:
            idx = (alphabet.index(s[i]) + n) % 26
            caesar_cipher += alphabet[idx]
    return caesar_cipher
    
print(solution("a B z", 4))