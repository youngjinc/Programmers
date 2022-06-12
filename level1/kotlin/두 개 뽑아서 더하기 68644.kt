class Solution {
    fun solution(numbers: IntArray): IntArray {
        val answer = mutableSetOf<Int>()
        for (i in 0..numbers.size - 2) {
            for (j in i + 1 until numbers.size) 
                answer.add(numbers[i] + numbers[j])
        }
        return answer.toIntArray().sortedArray()
    }
}