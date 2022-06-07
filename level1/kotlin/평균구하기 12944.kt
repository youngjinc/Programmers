fun solution1(numbers: IntArray): Double = numbers.average() // 방법1

fun solution2(numbers: IntArray): Double = numbers.sum().toDouble() / numbers.size // 방법2

fun solution3(arr: IntArray): Double { // 방법3
    var answer = 0.0
    arr.forEach { num ->
        answer += num
    }
    return answer / arr.size
}