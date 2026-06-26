import {
    Stack,
    Queue,
    LinkedList,
    BinarySearchTree
} from "../src";

// Stack
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack:");
console.log(stack.pop());
console.log(stack.peek());

// Queue
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("\nQueue:");
console.log(queue.dequeue());
console.log(queue.front());

// Linked List
const list = new LinkedList<number>();

list.append(10);
list.append(20);
list.append(30);

console.log("\nLinked List:");
console.log(list);

// BST
const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);

console.log("\nBST Inorder:");
bst.inOrder();