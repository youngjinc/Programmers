class Solution {
    fun solution(absolutes: IntArray, signs: BooleanArray): Int {
        var answer = 0
        for(i in 0 until absolutes.size) {
            if(signs[i]) answer += absolutes[i]
            else answer -= absolutes[i]
        }
        return answer
    }
}