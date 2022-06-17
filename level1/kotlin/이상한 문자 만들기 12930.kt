fun solution(s: String): String {
        var answer = ""
        var wordIdx = 0
        for (i in s.indices) {
            answer += if (wordIdx % 2 == 0) s[i].uppercase() else s[i].lowercase()
            if (s[i] != ' ') wordIdx++
            else wordIdx = 0
        }
        return answer
    }