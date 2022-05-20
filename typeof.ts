let Typeof = function (obj){
    const res = Object.prototype.toString.call(obj).slice(8,-1);
    return res
}

let test = Typeof(false);
console.log(test);