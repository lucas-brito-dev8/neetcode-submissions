class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head

        if (index < 0) {
            return -1
        }

        for (let i = 0; i < index; i++) {
            if (current === null) {
                return -1
            }

            current = current.next
        }

        return current === null ? -1 : current.val
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let nodeList = new Node(val)
        nodeList.next = this.head
        this.head = nodeList

        if (this.tail === null) {
            this.tail = nodeList
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let nodeList = new Node(val)

        if (this.head === null) {
            this.head = nodeList
            this.tail = nodeList
        } else {
            this.tail.next = nodeList
            this.tail = nodeList
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || this.head === null) {
            return false
        }

        if (index === 0) {
            this.head = this.head.next

            if (this.head === null) {
                this.tail = null
            }

            return true
        }

        let current = this.head

        for (let i = 0; i < index - 1; i++) {
            if (current.next === null) {
                return false
            }

            current = current.next
        }

        if (current.next === null) {
            return false
        }

        current.next = current.next.next

        if (current.next === null) {
            this.tail = current
        }

        return true
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const array = []
        let current = this.head

        while (current !== null) {
            array.push(current.val)
            current = current.next
        }

        return array
    }
}
