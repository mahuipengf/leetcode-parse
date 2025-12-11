// 版本号排序
// versions是一个项目的版本号列表，因多人维护，不规则
// 要求从小到大排序，注意'1.45'比'1.5'大
// 输入
const versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']
// 输出
sorted=['1.5','1.45.0','3.3.3.3.3.3','6']
let a= versions.sort((a,b) => {
    let a1 = a.split('.');
    let b1 = b.split('.');
    for(let i=0;i<a1.length;i++){
        if(a1[i]>b1[i]){
            return 1;
        }else if(a1[i]<b1[i]){
            return -1;
        }
    }
});
console.log(a)