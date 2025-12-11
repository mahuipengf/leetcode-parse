
// 3. 无重复字符的最长子串
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 提示
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。

const e = require("express");

 

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let ns = s.split('');
    let str = ns[0];
    let left = 0;

    for(let i=1;i<ns.length;i++){
       for(let j=left;j<=i;j++) {
            if(!str.includes(ns[j]))
       }
    }
    
    console.log('arr', arr);
    let sort = arr.sort((a, b) => {
        return b.length - a.length
    });
    return sort[0]?.length || 0
};
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring('aaaa'));
// console.log(lengthOfLongestSubstring('pwwkaewcdcdweasd'));
// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('dvdf '));
