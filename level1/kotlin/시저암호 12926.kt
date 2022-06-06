class Solution {
    fun solution(s: String, n: Int): String =
    s.map { c ->
        when(c) {
            in 'A'..'Z' -> ('A'.toInt() + (c - 'A' + n) % 26).toChar()
            in 'a'..'z' -> ('a'.toInt() + (c - 'a' + n) % 26).toChar()
            else -> c
        }
    }.joinToString("")
}