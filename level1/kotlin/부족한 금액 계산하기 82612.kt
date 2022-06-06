class Solution {
    fun solution(price: Int, money: Int, count: Int): Long {
        var answer = money.toLong()
        for(currentCount in 1..count)
            answer -= price * currentCount
        return if (answer < 0L) -answer else 0L
    }
}