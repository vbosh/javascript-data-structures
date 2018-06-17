class MaxHeap {
    constructor() {
        this.items = []
    }

    static getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1 }
    static getRightChildIndex(parentIndex) { return 2 * parentIndex + 2 }
    static getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2) }

    hasLeftChild(index) { return MaxHeap.getLeftChildIndex(index) < this.items.length }
    hasRightChild(index) { return MaxHeap.getRightChildIndex(index) < this.items.length }
    hasParent(index) { return MaxHeap.getParentIndex(index) >= this.items.length }

    leftChild(index) { return this.items[MaxHeap.getLeftChildIndex(index)] }
    rightChild(index) { return this.items[MaxHeap.getRightChildIndex(index)] }
    parent(index) { return this.items[MaxHeap.getParentIndex(index)] }

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

    bubbleUp() {
        // Start from last element, or last item in the array
        let index = this.items.length - 1

        while(this.hasParent(index) && this.parent(index) > this.items[index]) {
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

            if (this.items[index] > this.items[biggerChildIndex]) {
                break
            } else {
                this.swap(index, biggerChildIndex)
            }

            index = biggerChildIndex
        }
    }
}