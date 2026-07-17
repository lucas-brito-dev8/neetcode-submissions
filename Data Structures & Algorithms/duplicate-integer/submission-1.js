class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const num = {}

        for (let i = 0; i < nums.length; i++) {
            if (num[nums[i]] === undefined) {
                num[nums[i]] = nums[i]
            } else {
                return true
            }
        }

        return false
    }
}
