class Solution {
    fun solution(arr: IntArray, divisor: Int): IntArray {
        val answer = arr.filter { num -> num % divisor == 0 }.sorted().toIntArray()
        return if(answer.isNotEmpty()) answer else intArrayOf(-1)
    }
}