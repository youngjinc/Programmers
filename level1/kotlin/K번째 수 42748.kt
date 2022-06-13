class Solution {
    fun solution1(array: IntArray, commands: Array<IntArray>): IntArray {
        val answer = arrayListOf<Int>()
        commands.forEach { cmd ->
            val subList = array.slice(cmd[0] - 1 until cmd[1]).sorted()
            answer.add(subList[cmd[2] - 1])
        }
        return answer.toIntArray()
    }

    fun solution2(array: IntArray, commands: Array<IntArray>): IntArray =
        commands.map { cmd ->
            array.slice(cmd[0] - 1 until cmd[1]).sorted()[cmd[2] - 1]
        }.toIntArray()
}