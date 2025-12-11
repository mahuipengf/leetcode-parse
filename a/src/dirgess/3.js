// 5. 最长回文子串
// 已解答
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 提示
// 给你一个字符串 s，找到 s 中最长的 回文 子串。

 

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
 

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    if (s.length < 2) return s;
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        let len1 = expandCenter(s, i, i);
        let len2 = expandCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
}

function expandCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

/**
 * 对三分之一
 * for (let j = 0; j < arr.length ; j ++) {
    let index = str.indexOf(arr[j]);
    if (index === -1) {
        str += arr[j];
        if (str.length === 1) {
            newArr.push(str)
        }
    } else {
        left = index
        str = str.substring(left) + arr[j]
        newArr.push(str)
        str = str.substring(left)
    }
}
 */
/**
 * 对一半
 * for (let j = 0; j < arr.length ; j ++) {
        let index = s.indexOf(arr[j]);
        let lastIndex = s.lastIndexOf(arr[j]);
        if (index !== -1 && lastIndex !== -1) {
            str = s.substring(index, lastIndex+1);
            newArr.push(str)
        } else if (index === lastIndex) {
            str =  s.substring(index); 
            newArr.push(str)
        }
    }
 */
// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("a"))
// console.log(longestPalindrome("aaaa"))
// console.log(longestPalindrome("abcaaa"))
console.log(longestPalindrome("aacabdkacaa"))
console.log(longestPalindrome("abcba"))

