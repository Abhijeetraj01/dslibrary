class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }

    // Return the value of the node
    getvalue(): T {
        return this.value;
    }

    //return the next node
    getnext(): ListNode<T> | null {
        return this.next;
    }

    // Set the next node
    setvalue(value:T): void {
        this.value = value;
    }

    // Set the next node    
    setnext(next: ListNode<T> | null): void {
        this.next = next;
    }
}   

class LinkedList<T> {
    private head: ListNode<T> | null;
    private tail: ListNode<T> | null;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //append a new node to the end of the list
    append(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.setnext(newNode);
            this.tail = newNode;
        }
        this.length++;
    }

    //prepend a new node to the beginning of the list
    prepend(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setnext(this.head);
            this.head = newNode;
        }
        this.length++;
    }

    //return the value of the node at a specific index
    get(index: number): T | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.getnext();
        }
        return current!.getvalue();
    }

    //remove the node at a specific index
    remove(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        }

        if (index === 0) {
            this.head = this.head!.getnext();

            // If list becomes empty, update tail too
            if (this.head === null) {
                this.tail = null;
            }
        } else {
            let current = this.head;

            for (let i = 0; i < index - 1; i++) {
                current = current!.getnext();
            }

            const nodeToRemove = current!.getnext();

            current!.setnext(nodeToRemove!.getnext());

            if (nodeToRemove === this.tail) {
                this.tail = current;
            }
        }

        this.length--;
    }

    //get size of the list
    getsize(): number{
        return this.length;
    }

    //check if list is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    //print list values
    printList(): void {
        let current = this.head;
        while (current) {
            console.log(current.getvalue());
            current = current.getnext();
        }
    }

    //empty the list
    clear(): void {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

export { LinkedList };