class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = new Array(capacity)
        this.capacity = capacity
        this.size = 0
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize()
        }

        this.array.splice(this.size, 0, n)
        this.size++
    }

    /**
     * @returns {number}
     */
    popback() {
        this.size--
        return this.array.splice(this.size, 1)[0]
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2
        const newArray = new Array(this.capacity)

        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i]
        }
        
        this.array = newArray

        return this.array
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}