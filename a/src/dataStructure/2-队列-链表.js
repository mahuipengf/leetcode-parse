

/**
 * 队列
 * deQueue 
 * 
 * 使用delete obj 是链表结构，这样会提升性能
 */

class Queue {
    #items = [];
    #count = 0;

    enQueue (ele) {
        this.#items[this.#count] = ele
        this.#count ++
        return ele
    }
    deQueue () {
        delete this.#items[0]
        this.#count --
    }
    front () {
        return this.#items[0]
    }
    get () {
        return Object.values(this.#items)
    }
    size () {
        return Object.values(this.#items).length
    }
    reverse () {
        return Object.values(this.#items).reverse()
    }
    isEmpty () {
        return Object.values(this.#items).length === 0
    }
    clear () {
        this.#items = {}
        return Object.values(this.#items)
    }
}
let queue = new Queue();