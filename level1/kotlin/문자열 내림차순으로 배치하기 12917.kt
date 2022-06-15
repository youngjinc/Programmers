class Solution {
    fun solution1(s: String): String = s.toList().sortedWith { a, b ->
        b - a
    }.joinToString("")

    fun solution2(s: String): String = String(s.toCharArray().sortedArrayDescending())
}