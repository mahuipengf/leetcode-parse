
/**
 * 队列
 * deQueue 
 * 使用shift() // 当前方法每次都会移除最初第一个， 并且后面的元素会前移
 * 使用delete obj 是链表结构，这样会提升性能
 */

class Queue {
    #items = [];
    constructor (initial = []) {
        this.#items = initial;
    }

    enQueue (ele) {
        return this.#items.push(ele)
    }
    deQueue () {
        if (this.isEmpty()) {
            return this.#items.shift()
        }
        return this.#items.length
    }
    front () {
        return this.#items.at(0)
    }
    get () {
        return this.#items
    }
    size () {
        return this.#items.length
    }
    reverse () {
        return this.#items.reverse()
    }
    isEmpty () {
        return this.#items.length === 0
    }
    clear () {
        this.#items = []
    }
}
let queue = new Queue();