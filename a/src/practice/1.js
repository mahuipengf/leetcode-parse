// 版本号排序
// versions是一个项目的版本号列表，因多人维护，不规则
// 要求从小到大排序，注意'1.45'比'1.5'大
// 输入
const versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']

// 实现版本号排序函数
function sortVersions(versions) {
  return versions.sort((a, b) => {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);
    const maxLength = Math.max(aParts.length, bParts.length);
    // console.log('maxLength', maxLength)
    
    for (let i = 0; i < maxLength; i++) {
      const aNum = aParts[i] || 0;
      const bNum = bParts[i] || 0;
      console.log('aNum', aNum)
      console.log('bNum', bNum)
      
      if (aNum > bNum) return 1;
      if (aNum < bNum) return -1;
    }
    
    return 0;
  });
}

const sorted = sortVersions([...versions]);
console.log(sorted);

// 输出
// sorted=['1.5','1.45.0','3.3.3.3.3.3','6']

let obj = {}
let bool = true;
for (let i  in obj) {
  console.log('i', i)
  if (i) {
    bool = false
  } else {
    bool = true

  }
}
console.log('asd', bool, Object.keys(obj).length,Object.values(obj).length)