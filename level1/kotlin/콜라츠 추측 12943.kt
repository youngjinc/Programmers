class Solution {
    fun solution(num: Int): Int {
        var value = num.toLong()
        var count = 0

        while (value != 1L && count <= 500) {
            if (value % 2 == 0L) {
                value /= 2
            } else {
                value *= 3
                value += 1
            }
            count++
        }

        return if (count <= 500) count else -1
    }
}