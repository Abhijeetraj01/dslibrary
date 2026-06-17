import { LinkedList } from "./structures/LinkedList";
const list = new LinkedList<number>();

list.append(10);
list.append(20);
list.append(30);

list.remove(2);

list.append(40);

list.printList();