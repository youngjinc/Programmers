class Solution {
    fun solution(a: Int, b: Int): Long {
        val result = compareNum(a, b)
        var answer = 0L
        var value = result.first

        while (value <= result.second) {
            if (value < 0) answer -= value
            else answer += value
            value++
        }

        return answer
    }

    /** Pair<Int, Int> : first() -> min, second() -> max */
    fun compareNum(a: Int, b: Int): Pair<Int, Int> {
        return if (a < b) Pair(a, b) else Pair(b, a)
    }
}