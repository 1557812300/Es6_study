//创建Symbol
let s=Symbol();
console.log(s,typeof s);
// Symbol() symbol

let s2=Symbol('是是是');
let s3=Symbol('是是是')
console.log(s2===s3)
// false

// Symbol.for创建
let s4=Symbol.for('是是是')
let s5=Symbol.for('是是是')
console.log(s4===s5)
// true

//不能与其他数据进行运算
// let result = s + 100;
// let result = s > 100;
// let result = s + s;
// Cannot convert a Symbol value to a number