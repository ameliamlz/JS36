/*继承
1、接口继承：继承签名。需函数签名(可简单理解为强类型)
2、实现继承(JS使用的方式)：继承实际的方法
*/

//1、原型链继承
function Father(){
    this.fage = 45;
}

function Son(){
    this.sage = 12;
}

Father.prototype.getFAge = function(){
    return this.fage;
}

Son.prototype = new Father();
Son.prototype.getAge = function(){
    return this.sage;
}

let instance = new Son();
console.log(instance.getFAge());
//总结：实例本身有的属性直接访问，若没有则沿着原型链不断搜索

//2、