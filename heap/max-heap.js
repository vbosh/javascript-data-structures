class MaxHeap {
    constructor() {
        this._items = []
    }

    static getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1 }
    static getRightChildIndex(parentIndex) { return 2 * parentIndex + 2 }
    static getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2) }

    hasLeftChild(index) { return MaxHeap.getLeftChildIndex(index) < this.size() }
    hasRightChild(index) { return MaxHeap.getRightChildIndex(index) < this.size() }
    hasParent(index) { return MaxHeap.getParentIndex(index) >= this.size() }

    leftChild(index) { return this._items[MaxHeap.getLeftChildIndex(index)] }
    rightChild(index) { return this._items[MaxHeap.getRightChildIndex(index)] }
    parent(index) { return this._items[MaxHeap.getParentIndex(index)] }

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
            this._items.unshift(this._items.pop())

            this.sinkDown()
        }

        return item
    }

    add(item) {
        this._items.push(item)
        this.bubbleUp()
    }

    bubbleUp() {
        // Start from last element, or last item in the array
        let index = this.size() - 1

        while(this.hasParent(index) && this.parent(index) > this._items[index]) {
            this.swap(MaxHeap.getParentIndex(index), index)

            index = MaxHeap.getParentIndex(index)
        } 
    }

    sinkDown() {
        // Start from root element, or first item in the array
        let index = 0

        // If there is no left child, there will be no right child as well!
        while(this.hasLeftChild(index)) {
            // Swap with the bigger element!
            let biggerChildIndex = MaxHeap.getLeftChildIndex(index)

            // For Max Heap, when heapify down, use the larger of the two children elements
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                biggerChildIndex = MaxHeap.getRightChildIndex(index)
            }

            if (this._items[index] > this._items[biggerChildIndex]) {
                break
            } else {
                this.swap(index, biggerChildIndex)
            }

            index = biggerChildIndex
        }
    }
}