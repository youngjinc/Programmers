class Solution {
    fun solution(n: Long): Long {
        return n.toString().toList().sortedWith { a, b -> b - a }.joinToString("").toLong()
    }
}