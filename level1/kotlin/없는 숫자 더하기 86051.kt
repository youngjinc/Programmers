class Solution {
    fun solution1(numbers: IntArray): Int { // 방법1
    var answer = 0
    for (i in 0..9) {
        if(!numbers.contains(i)) answer += i
    }
    return answer
}

    fun solution2(numbers: IntArray): Int { // 방법2
        var answer = 45
        numbers.forEach { num ->
            answer -= num
        }
        return answer
    }
}