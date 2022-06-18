class Solution {
    fun solution(a: Int, b: Int): String {
        val days = listOf(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
        val dayOfTheWeek = listOf("THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED")

        var total = (0 until a - 1).map { idx ->
            days[idx]
        }.sum() + b

        return dayOfTheWeek[total % 7]
    }
}