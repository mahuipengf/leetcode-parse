/**
 * 双端队列 double ended queue
 * 允许在前面添加 和删除
 * 允许在后面添加 和删除
 */

class DeQueue {
    #items = [];
    #lowCount = 0;
    #count = 0;

    addBack(ele) {
        this.#items[this.#count] = ele
        this.#count ++
        return ele
    }
    removeFront() {
        if (this.size() === 0) return undefined;
        let cur = this.#items[this.#lowCount]
        delete this.#items[this.#lowCount]
        this.#lowCount ++
        return cur;
    }
    addFront(ele) {
        if (this.isEmpty()) return this.addBack(ele)
        else {
            if (this.#lowCount > 0) {
                this.#lowCount --
                this.#items[this.#lowCount] = ele
            } else {
                for (let i = this.#count; i > 0; i--) {
                    this.#items[i] = this.#items[i - 1]
                }
                this.#count ++
                this.#items[this.#lowCount] = ele
                return ele
            }

        }

    }
    removeBack() {
        if (this.isEmpty()) return;

        this.#count --
        let res = this.#items[this.#count]
        delete this.#items[this.#count]
        return res
    }
    peekFront() {
        return this.#items[0]
    }
    peekBack() {
        return this.#items[this.#count - 1]
    }
    get() {
        return Object.values(this.#items)
    }
    size() {
        return Object.values(this.#items).length
    }
    reverse() {
        return Object.values(this.#items).reverse()
    }
    isEmpty() {
        return this.size() === 0
    }
    clear() {
        this.#items = {}
        return Object.values(this.#items)
    }
}

let deQueue = new DeQueue()