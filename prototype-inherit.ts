/*继承
1、接口继承：继承签名。需函数签名(可简单理解为强类型)
2、实现继承(JS使用的方式)：继承实际的方法
*/

//1、原型链继承
function Father(){
    this.colors = ['black']
}

function Son(){
}

Father.prototype.getColors = function(){
    return this.colors;
}

//the key step
Son.prototype = new Father();

let instance1 = new Son();
let instance2 = new Son();
instance2.colors.push('lightblue');
console.log(instance1.colors);
/*总结：实例本身有的属性直接访问，若没有则沿着原型链不断搜索
存在的问题：
Q1：原型中包含的引用类型属性将被所有实例共享
Q2：子类在实例化的时候不能给父类构造函数传参
*/

//2、借用构造函数实现继承
function Father2(name){
    this.name = name;
    this.getName = function(){
        return this.name
    }
}

function Son2(name){
    //the key step
    Father2.call(this, name)
}

Son2.prototype = new Father2('');

let s1 = new Son2('qiqi');
let s2 = new Son2('qiaqia');
console.log(s1.getName());
console.log(s2.getName());
/*总结：方法包含在定义的构造函数中
解决的问题：1、引用类型共享问题 2、传参问题
存在的问题：每次创建子类实例都会创建一遍方法
 */

//3、组合继承
function Animal(name){
    this.name = name;
    this.colors = ['pink', 'blue'];
}

Animal.prototype.getName = function(){
    return this.name
}

function Dog(name,age){
    //the key step1
    Animal.call(this, name)
    this.age = age
}
//the key step2
Dog.prototype = new Animal('');
Dog.prototype.constructor = Dog;


let dog1 = new Dog('beibei', 11);
dog1.colors.push('green');
let dog2 = new Dog('yaya', 12);
console.log(dog2);
/*总结：结合了原型链和借用构造函数
存在的问题：调用了两次父类构造函数
我的问题：利用原型链继承方法？利用借用构造函数继承属性？那引用类型怎么解决？
他人的回答：构造函数的call会把属性转到实例上 所以引用类型能够正确访问
*/

//4、寄生式组合继承
function object(o){
    function F(){}
    F.prototype = o
    return new F()    
}
function inheritPrototype(child, parent){
    let prototype = object(parent.prototype);
    prototype.constructor = child
    child.prototype = prototype
}

//以上等价于下面两行
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog
/*总结：对比组合继承，通过创建空函数F获取父类原型的副本，替换组合继承中的the key step2*/

//class实现继承
class Fruit{
    name:string;
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name
    }
}

class Apple extends Fruit{
    name: string;
    age: number;
    constructor(name, age){
        super(name)
        this.age = age
    }
}
/*总结：有自己的方法和属性同时能够继承父类的方法和属性 */



