class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""

        for (let word of strs) {
            encoded += word.length + '#' + word
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const array = []
        let i = 0

        while (i < str.length) {
            let length = ""

            while (str[i] !== "#") {
                length += str[i]
                i++
            }

            i++

            const word = str.slice(i, i + Number(length))

            array.push(word)

            i += Number(length)
        }

        return array
    }
}