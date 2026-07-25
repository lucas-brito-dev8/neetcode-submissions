class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    let biggestLength = 0
    let currentLength = 1
    let current = 0
    const sortedArray = nums.sort((a, b) => a - b)

    for (let i = 0; i < sortedArray.length; i++) {
        current = sortedArray[i]

        for (let j = 0; j < sortedArray.length; j++) {
            if (sortedArray[j] === current) {
                continue
            }

            if (current + 1 === sortedArray[j]) {
                currentLength++
                current = sortedArray[j]
            }
        }

        if (currentLength > biggestLength) {
            biggestLength = currentLength
        }

        currentLength = 1
    }

    return biggestLength
    }
}
