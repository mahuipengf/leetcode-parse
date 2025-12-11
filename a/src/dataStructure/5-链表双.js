

/**
 * 
 * 双链表
 * 
 * 有head 头
 * 尾 tail 
 * 双指针
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(element) {
        this.count = 0;
        this.head = null;
    }

    push(ele) {
        let node = new Node(ele);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head; // 整体数据结构改变应用的是浅拷贝，因为负值的对象地址一样
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
        return ele;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = this.head.next;
            } else {
                let previous
                let num = 0;
                while (num < index) {
                    previous = current
                    current = current.next
                    num++
                }
                previous.next = current.next

            }
            this.count--;
            return current.element;
        }
        return
    }
    removeAt2(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = this.head.next;
            } else {
                let previous = this.getNodeAt(index - 1)
                console.log('previous', previous)
                current = previous.next
                previous.next = current.next
            }
            this.count--;
            return current.element;
        }
        return
    }
    getNodeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            let num = 0;
            while (num < index) {
                current = current.next
                num++
            }
            return current;
        }
        return
    }
    indexOf(ele) {
        let current = this.head;
        let index = 0;
        while (current.element !== ele) {
            index++
            current = current.next
        }
        return index;
    }
    remove(ele) {
        let index = this.indexOf(ele);
        return this.removeAt(index);
    }
    insert(ele, index) {

        let node = new Node(ele);
        if (index >= 0 && index <= this.count) {
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getNodeAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true;

        }
        return false;
    }
    size() {
        return this.count
    }
    getNodeHead() {
        return this.head;
    }
}

class DoublyNode extends Node {
    constructor(element) {
        super(element)
        this.prev = null
    }

}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super()
        this.tail = null
    }

    push(ele) {
        const node = new DoublyNode(ele);
        if (this.head === null) {
            this.head = node;
            this.tail = node
        } else {
            this.tail.next = node; // 当前最后一个next 指向最新的node节点
            node.prev = this.tail; // 新的node节点的prev 节点指向当前最后一个节点
            this.tail = node; // 确保了链表最后节点的next 节点为null
        }
        this.count++;
    }
    insert (ele, index) {
        if (index >=0 && index <= this.count) {
        let current = this.head;
        let node = new DoublyNode(ele);
        if (index === 0) {
            if (this.head === null) {
                this.head = node
                this.tail = node
            } else {
                node.next = this.head
                this.head.prev = node
                this.head = node
            }
        } else if (index === this.count) {
                current = this.tail
                current.next = node
                node = current
                this.tail = node
            } else {
                let previous = this.getNodeAt(index-1)
                current = previous.next
                node.next = current
                previous.next = node
                node.prev = previous
            }
        this.count ++
            return true
        }
        return false
    }

    getNodeTail() {
        return this.tail
    }

    removeAt (index) {
        if (index>=0 && index< this.count ){
            let current = this.head
            if (index === 0) {
                this.head = current.next
                if (this.count === 1) {
                    this.tail = null
                } else {
                    current.next.prev = null
                }
            } else if (index === this.count - 1) {
                let previous = this.tail.prev
                previous.next = null;
                this.tail.next = null
            } else {
                current = this.getNodeAt(index)
                let previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            
            this.count--
            return current.element
        }
        return 
    }
    remove (ele) {
        let index = this.indexOf(ele)
        this.removeAt(index)
    }
}

const linkedList = new DoublyLinkedList();