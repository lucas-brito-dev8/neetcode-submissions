class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.replace(/[^a-zA-Z0-9]/g, "");
        let toLowerCase = clean.toLowerCase()
        let rightPointer = toLowerCase.length - 1

        for (let i = 0; i < toLowerCase.length; i++) {
            if (toLowerCase[i] === toLowerCase[rightPointer]) {
                rightPointer--
            } else {
                return false
            }

            if (i > rightPointer) {
                break
            }
        }

        return true
    }
}
