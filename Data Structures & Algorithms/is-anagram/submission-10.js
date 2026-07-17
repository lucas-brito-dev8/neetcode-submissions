class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const characters = {};
        let value = 1;

        if (s.length !== t.length) {
            return false;
        }

        for (let char1 of s) {
            if (characters[char1] !== undefined) {
                characters[char1]++;
                continue;
            }

            characters[char1] = value++;

            value = 1;
        }

        for (let char2 of t) {
            if (characters[char2] !== 0 && characters[char2] !== undefined) {
                characters[char2]--;
                continue;
            }

            if (characters[char2] === 0 || characters[char2] === undefined) {
                return false;
            }
        }

        return true;
    }
}
