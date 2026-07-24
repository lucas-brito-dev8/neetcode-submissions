class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = []
        let product = 1

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (j !== i) {
                    product *= nums[j]
                } else {
                    continue
                }
            }

            output.push(product)
            product = 1
        }

        return output
    }
}
