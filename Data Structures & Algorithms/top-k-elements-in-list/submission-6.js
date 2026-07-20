class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = {}
        const array = []
        let counter = 1

        for (let num of nums) {
            if (hashMap[num] !== undefined) {
                hashMap[num]++
            } else {
                hashMap[num] = counter
            }
        }

        const vector = Object.entries(hashMap)
        const sorted = vector.sort((a, b) => a[1] - b[1])

        while (k > 0) {
            array.push(sorted.pop()[0])
            k--
        }

        return array
    }
}
