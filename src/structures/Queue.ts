class Queue<T> {                            // Queue - FIFO (First In First Out)
    private items: T[];

    constructor() {
        this.items = [];
    }

    /**
     * Adding item to the end of the queue
     * TC: O(1) */
    enqueue(item:T): void{
        this.items.push(item);
    }

    /**
     * Removing and return the front item
     * TC: O(n) */
    dequeue(): T | undefined {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.shift();
    }

    /**
     * Return the front item
     * TC: O(1) */
    front(): T | undefined {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[0];
    }

    /**
     * Return the number of items
     * TC: O(1) */
    size(): number {
        return this.items.length;
    }

    /**
     * Checking if queue is empty
     * TC: O(1) */
    isEmpty(): boolean {
        return this.items.length === 0;
    }   
    
    clear(): void {
        this.items = [];
    }

    toArray(): T[] {
        return [...this.items];
    }
}

export { Queue };