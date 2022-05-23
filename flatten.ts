//数组扁平化
 
//方法1：ES5：利用isArray()递归
function flatten(arr){
    let result = []
    for(let i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}

let arr = [[1],[[2]]];
console.log(flatten(arr));

//解决ts中重名问题（全局冲突），只要文件存在import或者export则被认为是module
// export {flatten};

//方法2：ES6：利用数组函数some+isArray
function flatten2(arr){
    //一层一层剥开
    while(arr.some(item=>Array.isArray(item))){
        console.log(arr);
        arr = [].concat(...arr)
    }
    return arr
}

console.log(arr);
console.log(flatten2(arr));