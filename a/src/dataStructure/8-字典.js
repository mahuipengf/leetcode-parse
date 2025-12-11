/**
 * 字典
 * 
 * 在js中对应es6 新特性中的Map
 */
class PerryMap {
    constructor() {
        this.items = {}
    }

    set(key, val) {
        let obj = new PerryObj(key, val);
        this.items[this.toStringFn(key)] = obj
        return this.items[this.toStringFn(key)]
    }

    get(key) {
        return this.items[this.toStringFn(key)]
    }

    has(key) {
        return this.items[this.toStringFn(key)] !== null
    }

    toStringFn(item) {
        if (item === null) {
            return 'NULL'
        } else if (item === undefined) {
            return 'UNDEFINED'
        } else if (typeof item === 'string' || item instanceof String) {
            return item
        }
        return JSON.stringify(item)
    }

    remove(key) {
        if (this.has(key)) {
            delete this.items[this.toStringFn(key)]
            return true
        }
        return false

    }

    clear() {
        return this.items = {}
    }

    keys() {
        return Object.keys(this.items)
    }

    values() {
        return Object.values(this.items).map(t => t.value)
    }
    
    size() {
        return this.keys().length
    }
}

class PerryObj {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

let map = new PerryMap()