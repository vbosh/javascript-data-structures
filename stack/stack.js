class Stack {
    /**
     * Create new stack
     */
    constructor() {
        this._data = [];
    }

    /**
     * Push element from the queue
     *
     * @return {Any}
     */
    push(record) {
        this._data.push(record);
    }

    /**
     * Remove element from the stack
     *
     * @return {Any}
     */
    pop() {
        return this._data.pop();
    }

    /**
     * Return the last element from the stack
     *
     * @return {Any}
     */
    peek() {
        return this._data[this.size() - 1];
    }

    /**
     * Get the 'size' of the stack
     *
     * @return {number}
     */
    size() {
        return this._data.length;
    }

    /**
     * Print the values of the stack
     *
     * @return {undefined}
     */
    print() {
        this._data.join(" ");
    }
}