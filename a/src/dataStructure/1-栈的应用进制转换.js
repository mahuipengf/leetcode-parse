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
    #items = []
    // constructor(initialData = []) {
    //     this.#items = [...initialData];
    // }
    // #items = [];
    
    push (data) {
        return this.#items.push(data)
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
    reverse () {
        return this.#items.reverse()
    }
    join (params) {
        return this.#items.join(params)
    }
    get () {
        return this.#items
    }
}

// 10进制
function cov (data, radix) {
    let stack = new Stack()
    let baseString = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str = '';
    while (data > 0) {
        let cur = data % radix
        stack.push(cur)
        data = Math.floor(data / radix)
    }
    console.log(stack.get())
    while (!stack.isEmpty()) {
        str += baseString[stack.pop()]
    }
    return str
}

console.log(cov(10, 2))
console.log(cov(88, 3))
console.log(cov(500, 16))
console.log(cov(500, 8))
console.log(cov(500, 2))