class Queue {
    /**
     * Create new queue
     */    
    constructor() {
        this._data = [];
    }

    /**
     * Add or 'enqueue' element
     *
     * @param {Any}
     * @return {undefined}
     */
    add(record) {
        this._data.unshift(record);
    }

    /**
     * Remove element from the queue
     *
     * @return {Any}
     */
    remove() {
        return this._data.pop();
    }

    /**
     * Return the last element from the queue
     *
     * @return {Any}
     */
    peek() {
        return this._data[this.size - 1];
    }

    /**
     * Get the 'size' of the queue
     *
     * @return {number}
     */
    size() {
        return this._data.length;
    }

    /**
     * Print the values of the queue
     *
     * @return {undefined}
     */
    print() {
        this._data.join(" ");
    }
}