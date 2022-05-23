//数组去重

//方法1：ES5：利用filter函数和indexof
function unique(arr){
    //结果是副本
    const res = arr.filter(function (item, index, array){
        return array.indexOf(item) === index
    }) 
    return res   
}

let arr = [1,2,2,2,2,3,2,4];
let result = unique(arr)
console.log(result);

//方法2：ES6：利用Set特性
function unique2(arr){
   return [...new Set(arr)]
}

console.log(arr);
result = unique2(arr);
console.log(result);
