import java.lang.Math.max
import java.lang.Math.min

class Solution {
    fun solution(sizes: Array<IntArray>): Int {
    var maxLength = sizes[0][0]
        var maxOppositeLength = sizes[0][1]
        var maxLengthIdx = 0

        for (i in 0 until sizes.size) {
            if (!(maxLength < max(sizes[i][0], sizes[i][1]))) continue

            if (sizes[i][0] <= sizes[i][1]) {
                maxLength = sizes[i][1]
                maxOppositeLength = sizes[i][0]
            } else {
                maxLength = sizes[i][0]
                maxOppositeLength = sizes[i][1]
            }
            maxLengthIdx = i
        }

        for (i in 0..sizes.size - 1) {
            if (i == maxLengthIdx) continue
            val minSize = min(sizes[i][0], sizes[i][1])
            if (maxOppositeLength < minSize) maxOppositeLength = minSize
        }
    }
}
