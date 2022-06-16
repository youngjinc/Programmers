class Solution {
    fun solution(arr1: Array<IntArray>, arr2: Array<IntArray>): Array<IntArray> {
        return arr1.mapIndexed { row, intArray ->
            intArray.mapIndexed { col, value ->
                value + arr2[row][col]
            }.toIntArray()
        }.toTypedArray()
    }
}