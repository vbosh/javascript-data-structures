class Stack {
  /**
   * Create new stack
   */
  constructor() {
    this.data = [];
  }

  /**
   * Push element from the queue
   *
   * @return {Any}
   */
  push(record) {
    this.data.push(record);
  }

  /**
   * Remove element from the stack
   *
   * @return {Any}
   */
  pop() {
    return this.data.pop();
  }

  /**
   * Return the last element from the stack
   *
   * @return {Any}
   */
  peek() {
    return this.data[this.data.length - 1];
  }

  /**
   * Get the 'length' of the stack
   *
   * @return {number}
   */
  length() {
    return this.data.length;
  }

  /**
   * Print the values of the stack
   *
   * @return {undefined}
   */
  print() {
    this.data.join(" ");
  }
}

export default Stack;
