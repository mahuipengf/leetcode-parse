
/**
 * 击鼓传花
 * 敲击几次到第几个人进行淘汰、从下一个人开始
 * 
 */

class Queue {
    #items = [];
    #lowCount = 0;
    #count = 0;

    enQueue (ele) {
        this.#items[this.#count] = ele
        this.#count ++
        return ele
    }
    deQueue () {
        if (this.size() === 0) return undefined;
        let cur = this.#items[this.#lowCount]
        delete this.#items[this.#lowCount]
        this.#lowCount ++
        return cur;
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
function DrummingSpreadFlowers (data , count) {
    let queue = new Queue()
    for (let i = 0; i < data.length; i++) {
        queue.enQueue(data[i])
    }
    while(queue.size() > 1) {
        for (let i= 0;i < count; i++) {
            queue.enQueue(queue.deQueue())
        }
        console.log(queue.deQueue(), '淘汰了')
    }
    return queue.get()
}

let arr = ['name1', 'name2' , 'name3', 'name4', 'name5'];
console.log('淘汰后人数', DrummingSpreadFlowers(arr, 7))