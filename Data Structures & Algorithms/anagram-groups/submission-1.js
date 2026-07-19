class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};

        for (let word of strs) {
            const sortedWord = word.split('').sort().join('')

            if (hashMap[sortedWord] === undefined) {
                hashMap[sortedWord] = [];
            }

            hashMap[sortedWord].push(word);
        }

        return Object.values(hashMap)
    }
}
