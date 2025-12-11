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

/**
 * 判断是否是回文字符串的方法 求出空格 和不区分 英文字母大小写
 * 
 * isPalindrome  只是使用队列在前面增加和后面增加的方法。
 * 并且前后同时增加的值是否相同， 并且，判断只取到中间值便结束
 * isPalindrome2 使用双端队列，队列的添加和删除方法，
 * 先把所有的值全部放队列，然后从队列开始和结束的地方进行删除操作，比对当前的值是否相同
 * 不相同证明不是一样的值 并且保证当前队列的size > 1
 * 
 */

function isPalindrome (str) {
    let deQueue = new DeQueue()
    let newStr = str.split().join('').toLocaleLowerCase()
    let bool = false
    if (str.length <=1) return str
    for (let i=0; i<newStr.length ;i ++) {
      if (deQueue.addFront(newStr[i]) !== deQueue.addBack(newStr[newStr.length-i-1])) {
        bool = false
        break
      } else {
        bool = true
      }
      if (newStr.length-i-1  === i) {
        bool = true
        break
      }
    }
    return bool
  }

  function isPalindrome2 (str) {
    let deQueue = new DeQueue()
    let newStr = str.split(' ').join('').toLocaleLowerCase()
    let bool = true
    for (let i = 0; i < newStr.length; i ++) {
        deQueue.addBack(newStr[i])
    }
    while(deQueue.size() > 1) {
        if (deQueue.removeFront()!== deQueue.removeBack()) {
            bool = false
            break
        }
    }
    return bool
  }

  console.log(isPalindrome('abac'))
  console.log(isPalindrome('abba'))
  console.log(isPalindrome('aabbaaa'))
  console.log(isPalindrome('abcba'))
  console.log(isPalindrome('A b c CBa'))
  console.log('-----------------')
  console.log(isPalindrome2('abac'))
  console.log(isPalindrome2('abba'))
  console.log(isPalindrome2('aabbaaa'))
  console.log(isPalindrome2('abcba'))
  console.log(isPalindrome2('A b c CBa'))

