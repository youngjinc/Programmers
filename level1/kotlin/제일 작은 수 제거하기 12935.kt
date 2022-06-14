class Solution {
    fun solution(arr: IntArray): IntArray {
        if (arr.size == 1) return intArrayOf(-1)

        val answer = arr.toMutableList()
        answer.remove(arr.minOrNull() ?: return intArrayOf(-1))
        return answer.toIntArray()
    }
}