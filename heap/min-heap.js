class MinHeap {
    constructor() {
        this._items = []
    }

    static getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1 }
    static getRightChildIndex(parentIndex) { return 2 * parentIndex + 2 }
    static getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2) }

    hasLeftChild(index) { return MinHeap.getLeftChildIndex(index) < this.size() }
    hasRightChild(index) { return MinHeap.getRightChildIndex(index) < this.size() }
    hasParent(index) { return MinHeap.getParentIndex(index) >= this.size() }

    leftChild(index) { return this._items[MinHeap.getLeftChildIndex(index)] }
    rightChild(index) { return this._items[MinHeap.getRightChildIndex(index)] }
    parent(index) { return this._items[MinHeap.getParentIndex(index)] }

    size() {
        return this._items.length
    }

    swap(first, second) {
        const temp = this._items[first]
        this._items[first] = this._items[second]
        this._items[second] = temp
    }

    peek() {
        if (!this.size()) {
            return null
        }

        return this._items[0]
    }

    poll() {
        if (!this.size()) {
            return null
        }

        let item = this._items.shift()
        let last = this._items.pop()

        // If the array is empty, do not sinkDown
        if (this.size()) {
            this._items.unshift(last)

            this.sinkDown()
        }

        return item
    }

    add(item) {
        this._items.push(item)
        this.bubbleUp()
    }

    bubbleUp(index) {
        // Start from last element, or last item in the array
        if (!index) {
            index = this.size() - 1
        }

        while(this.hasParent(index) && this.parent(index) > this._items[index]) {
            this.swap(MinHeap.getParentIndex(index), index)

            index = MinHeap.getParentIndex(index)
        } 
    }

    sinkDown(index = 0) {
        // If there is no left child, there will be no right child as well!
        while(this.hasLeftChild(index)) {
            // Swap with the bigger element!
            let smallerChildIndex = MinHeap.getLeftChildIndex(index)

            // For Min Heap, when heapify down, use the smaller of the two children elements
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = MinHeap.getRightChildIndex(index)
            }

            if (this._items[index] < this._items[smallerChildIndex]) {
                break
            } else {
                this.swap(index, smallerChildIndex)
            }

            index = smallerChildIndex
        }
    }
}