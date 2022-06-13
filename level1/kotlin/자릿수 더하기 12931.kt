class Solution {
    fun solution(n: Int): Int {
        var answer = 0
        n.toString().forEach { c ->
            answer += c.digitToInt()
        }
        return answer
    }
}