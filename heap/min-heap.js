class MinHeap {
    constructor() {
        this.items = []
    }

    static getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1 }
    static getRightChildIndex(parentIndex) { return 2 * parentIndex + 2 }
    static getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2) }

    hasLeftChild(index) { return MinHeap.getLeftChildIndex(index) < this.items.length }
    hasRightChild(index) { return MinHeap.getRightChildIndex(index) < this.items.length }
    hasParent(index) { return MinHeap.getParentIndex(index) >= this.items.length }

    leftChild(index) { return this.items[MinHeap.getLeftChildIndex(index)] }
    rightChild(index) { return this.items[MinHeap.getRightChildIndex(index)] }
    parent(index) { return this.items[MinHeap.getParentIndex(index)] }

    swap(first, second) {
        const temp = this.items[first]
        this.items[first] = this.items[second]
        this.items[second] = temp
    }

    peek() {
        if (!this.items.length) {
            return null
        }

        return this.items[0]
    }

    poll() {
        if (!this.items.length) {
            return null
        }

        let item = this.items.shift()
        this.items.unshift(this.items.pop())

        this.sinkDown()

        return item
    }

    add(item) {
        this.items.push(item)
        this.bubbleUp()
    }

    bubbleUp(index) {
        // Start from last element, or last item in the array
        if (!index) {
            index = this.items.length - 1
        }

        while(this.hasParent(index) && this.parent(index) > this.items[index]) {
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

            if (this.items[index] < this.items[smallerChildIndex]) {
                break
            } else {
                this.swap(index, smallerChildIndex)
            }

            index = smallerChildIndex
        }
    }
}