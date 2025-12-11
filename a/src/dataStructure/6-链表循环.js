    /**
     * 
     * 链表循环 
     * 尾部next 指向 第一个节点 this.head
     * 
     * 且整个结构只有 element 和 next 节点
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

    class CircularLinkedList extends LinkedList {
        constructor() {
            super()
        }
        push (ele) {
            let node = new Node(ele);
            let current;
            if (this.head === null) {
                this.head = node
            } else {
                current = this.getNodeAt(this.size() - 1);
                current.next = node
            }
            node.next = this.head
            this.count++
        }
        insert (ele, index) {
            let node = new Node(ele)
            if (index >= 0 && index <= this.count) {
                if (index === 0) {
                    if (this.head === null) {
                        this.head = node
                        node.next = this.head
                    } else {
                        let lastNode = this.getNodeAt(this.size() -1)
                        node.next = this.head
                        this.head = node
                        lastNode.next = this.head
                        
                    }
                    
                } else {
                    let previous = this.getNodeAt(index - 1)
                    node.next = previous.next
                    previous.next = node
                }

                this.count++
                return node.element
                
            }

            return undefined;
            
        }
        removeAt (index) {
            let current = this.getNodeAt(index)
            if (index >=0 && index < this.count) {
                if (index === 0) {
                if (this.size() === 1) {
                    this.head = null
                } else {
                    let last = this.getNodeAt(this.size - 1)
                    this.head = current.next
                    last.next = this.head
                    
                }
                } else if (index === this.count - 1) {
                let previous = this.getNodeAt(index - 1)
                previous.next = this.head
                } else {
                let previous = this.getNodeAt(index - 1)
                previous.next = current.next
                    
                }
            this.count--
            return current.element
            }
        return undefined;
        
        }
    }
    const list = new CircularLinkedList();
