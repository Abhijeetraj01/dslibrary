class Stack<T> {                    // Stack - Last In First Out (LIFO)
  private items: T[];

  constructor() {
    this.items = [];
  }

  /**
   * Adding item on the top of the stack
   * TC: O(1)
   */
  push(item: T): void {
    this.items.push(item);
  }

  
//    Removing and return the top item
//    TC: O(1)

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.pop();
  }

    // Return the top item of stack
  peek(): T | undefined { 
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  /**
   * Return the number of items
   * TC: O(1)
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Checking if stack is empty
   * TC: O(1)
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Removing all items
   * TC: O(1)
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Return stack as array
   * TC: O(1)
   */
  toArray(): T[] {
    return [...this.items];
  }
}

export { Stack };