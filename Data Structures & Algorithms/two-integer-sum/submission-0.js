class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {}
        const array = []

        for (let i = 0; i < nums.length; i++) {
            let current = nums[i]
            let missing = target - current

            if (hashMap[missing] === undefined) {
                hashMap[current] = i
            } else {
                array.push(i)
                array.push(hashMap[missing])
            }
        }

        return array.sort((a, b) => a - b)
    }
}
