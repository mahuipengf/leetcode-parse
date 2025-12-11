// 题库
// 调试中...
// 调试中...

const e = require('express');

// 0
// 连续打卡0天
// 等你回来！
// DCC Badge

// avatar
// Avatar
// Strange Noetherthn
// 升级 Plus 会员享专属特权
// coupon
// list
// 题单
// myList
// 收藏夹
// notebook
// 笔记本
// submissions
// 我的题解
// progress
// 进展分析
// points
// 积分
// 体验新功能
// 订单
// 我的 Playgrounds
// 账号设置
// 题目以英文显示
// 外观
// 退出
// Plus 会员
// 题目描述
// 题解
// 题解
// 提交记录
// 提交记录

// 代码
// 测试用例
// 测试用例
// 测试结果
// 6. Z 字形变换
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"

// 提示：

// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *
 *
 * i:
 *  0   4   8
 *  1 3 5 7
 *  2   6
 *
 *
 *
 * o.   6
 * 1. 5 7
 * 2 4. 8 10
 * 3.   9
 */

/**
 * 链表解罚 188ms
 */
class Node {
    constructor(key, count) {
        this.key = key;
        this.next = null;
        this.index = count;
    }
}

class PerryLinkedList {
    constructor( num) {
        this.head = null;
        this.count = 0;
        this.num = num;
        this.operate = 'add';
    }
    add(key) {
        let node = new Node(key, this.count);
        if (this.head === null) {
                this.head = node;
                this.count++;
            } 
            else {
                let current = this.head;
                while (current.next !== null) {
                    current = current.next
                }
                current.next = node
                if (this.count === this.num - 1 || this.operate === 'reduce') {
                    this.operate = 'reduce'
                    this.count--
                    if (this.count === 0) {
                        this.operate = 'add'
                    }
                } else if (this.operate === 'add') {
                    this.count++
                }
            }
        
    }
    map(callback) {
        let current = this.head;
        while(current !== null) {
            callback(current)
            current = current.next
        }
    }
    filter(callback) {
        let current = this.head;
        while(current !== null) {
            callback(current)
            current = current.next
        }
    }
}

let convert = (s, numRows) => {
    let linkedList = new PerryLinkedList(numRows);
    let obj = {}
    if (numRows < 2) {
        return s
    }
    for (let i = 0; i < s.length; i++) {
        linkedList.add(s[i]);
    }
    for (let j = 0; j < numRows; j++) {
        obj[j] = ''
        linkedList.map(item => {
            if (j === item.index) {
                obj[j] += item.key 
            }
        })
    }
    console.log('linkedList', linkedList);
    console.log('obj', obj);
    return Object.values(obj).join('')
}
console.log('aa', convert('PAYPALISHIRING', 3))
console.log('aa', convert('PAYPALISHIRING', 4))
console.log('aa', convert('AB', 1))
let convert1 = (s, numRows) => {
    let arr = new Array(numRows).fill('');
    let down = true
    let count = 0
    if (numRows < 2) {
        return s
    }
    for (let i = 0; i < s.length; i++) {
    arr[count] +=s[i]
    if (count === numRows - 1) {
        count --
        down = false
    } else if (count === 0) {
        count ++
        down = true
    } else if (down) {
        count ++
    }else if (!down) {
        count --
    }
    }
    return arr.join('')
    console.log('arr',arr)
}
console.log('aa', convert1('PAYPALISHIRING', 3))
console.log('aa', convert1('PAYPALISHIRING', 4))
console.log('aa', convert1('AB', 1))