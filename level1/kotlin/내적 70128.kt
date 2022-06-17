fun solution1(a: IntArray, b: IntArray): Int {
    var answer = 0
    for (i in a.indices)
        answer += a[i] * b[i]
    return answer
}

fun solution2(a: IntArray, b: IntArray): Int {
    return a.mapIndexed { idx, value ->
        value * b[idx]
    }.sum()
}