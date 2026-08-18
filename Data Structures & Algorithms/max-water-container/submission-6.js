class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let biggestContainer = 0

        while (right > left) {
            let height = 0
            let width = right - left

            if (heights[left] < heights[right] || heights[left] === heights[right]) {
                height = heights[left]
                left++
            } else {
                height = heights[right]
                right--
            }

            let result = width * height

            if (result > biggestContainer) {
                biggestContainer = result
            }
        }

        return biggestContainer
    }
}
