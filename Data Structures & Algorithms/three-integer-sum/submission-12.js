class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const array = [];
        const sortedArray = nums.sort((a, b) => a - b);

        for (let i = 0; i < sortedArray.length; i++) {
            let fixed = sortedArray[i]
            let left = i + 1
            let right = sortedArray.length - 1

            if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
                continue
            }

            while (left < right) {
                let result = fixed + sortedArray[left] + sortedArray[right]

                if (result === 0) {
                    array.push([fixed, sortedArray[left], sortedArray[right]])
                    left++

                    while (left < right && sortedArray[left] === sortedArray[left - 1]) {
                        left++
                    }
                } else if (result > 0) {
                    right--
                    continue
                } else if (result < 0) {
                    left++
                    continue
                }
            }
        }

        return array
    }
}