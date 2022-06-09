class Solution {
    fun solution(sizes: Array<IntArray>): Int {
        var edge1 = 1
        var edge2 = 1

        sizes.forEach { size ->
            val result = compareNum(size[0], size[1])
            edge1 = compareNum(edge1, result.first).first
            edge2 = compareNum(edge2, result.second).first
        }

        return edge1 * edge2
    }

    /** Pair<Int, Int> : first() -> max, second() -> min */
    fun compareNum(num1: Int, num2: Int): Pair<Int, Int> {
        if (num1 < num2) return Pair(num2, num1)
        else return Pair(num1, num2)
    }
}