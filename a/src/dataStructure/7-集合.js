/**
 * 集合 
 * 对应es6 的Set结构
 * 
 * 可以有去重，获取长度，获取元素，删除元素，获取元素，清空集合
 * 并且可以拥有取并集 、取交集、取差集的实际操作场景
 */

class PerrySet {
    constructor () {
        this.items = {}
    }

    add (ele) {
        if (this.has(ele)) {
            this.items[ele] = ele
            return true
        }
        return false
    }
    set (key, value) {
      this.items[key] = value
      return value
    }

    has (key) {
      return key in this.items
    }

    delete (key) {
      if (this.has(key)) {
        delete this.items[key]
        return true
      }
      return false
    }
    get (key) {
      return this.items[key]
    }

    size () {
      return Object.keys(this.items).length + 1
    }

    keys () {
      return Object.keys(this.items)
    }

    values () {
      return object.values(this.items)
    }
    clear () {
      this.items = {}
      return this.items
    }

    
}