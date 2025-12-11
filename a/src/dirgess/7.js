// 9. 回文数
// 已解答
// 简单
// 相关标签
// premium lock icon
// 相关企业
// 提示
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 例如，121 是回文，而 123 不是。
 

// 示例 1：

// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3：

// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数
// 方法1
var isPalindrome = function (x) {
    x = `${x}`
    console.log('x', x)
    let bool = true
    let i = 0
    let j = x.length - 1
    while (i !== j && i < j) {
        if (x[i] !== x[j]) {
            bool = false
            break
        }
        i++
        j--
    }
    console.log('bool22', bool)
    return bool
};
// 方法二
var isPalindrome = function (x) {
    x = `${x}`.split('')
    let bool = true
    while (x.length >1) {
        if (x.shift() !== x.pop()) {
            bool = false
            break;
        }
    }
    
    return bool
};

//方法3
var isPalindrome = function (x) {
    x = `${x}`
    let number  = `${x}`.split('').reverse().join('')
    if (number === x) {
        return true
    }
    return false
};
var isPalindrome = function (x) {
    if (x.length < 2) return true;
    x = `${x}`
    let str = '';
    for (let i = 0; i < x.length; i++) {
        str = x[i] + str;
    }
    if (str === x) {
        return true
    }
    return false
};
