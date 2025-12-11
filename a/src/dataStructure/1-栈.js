/**
 * 
 * 
 * push 入栈
 * pop出栈
 * clear 清空栈
 * get 获取栈顶元素
 * size 获取栈大小
 * isEmpty 判断栈是否为空
 * 
 * 在js 中 #是私有属性 并且定义后的所有数据都适用#items
 */

class Stack {
    
    constructor() {
        
        this.#items = [];
    }
    push (data) {
        this.#items.push(data)
    }
    pop (data) {
        return this.#items.pop(data)
    }

    clear () {
        this.#items = []
        return this.#items
    }
    
    size () {
        return this.#items.length
    }
    isEmpty () {
        return this.#items.length === 0
    }
    peek () {
        // return this.#items[this.#items.length - 1]
        return this.#items.at(-1)
    }
}
let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.size())
console.log(stack.#items)