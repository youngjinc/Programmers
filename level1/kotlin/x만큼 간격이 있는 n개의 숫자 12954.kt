fun solution(x: Int, n: Int): LongArray {
    val answer = LongArray(n)
    val value = x.toLong()
    for (i in 0 until n)
        answer[i] = value * (i + 1)
    return answer
}