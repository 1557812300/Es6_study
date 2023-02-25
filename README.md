# 第 1 章 ECMASript 6 介绍

![aHR0cHM6Ly9mZXJtaGFuLm9zcy1jbi1xaW5nZGFvLmFsaXl1bmNzLmNvbS9pbWcvMjAyMDA2MjUxMzQ3MjEucG5n](https://flowus.cn/preview/5a3064e7-3185-464c-9ea8-f932301b98f3)

## 1、[ES6](https://so.csdn.net/so/search?q=ES6&spm=1001.2101.3001.7020)

ECMAScript6.0（以下简称ES6，ECMAScript是一种由Ecma国际通过ECMA-262标准化的脚本），是JavaScript语言的下一代标准，2015年6月正式发布，从ES6开始的版本号采用年号，如ES2015，就是ES6。ES2016就是ES7。

ECMAScript是规范，JS的规范的具体实现。

# 第 2 章 ECMASript 6 新特性

## 2.1、let 关键字

let 关键字用来声明变量，使用 let 声明的变量有几个特点：
1) 不允许重复声明
2) 块儿级[作用域
](https://so.csdn.net/so/search?q=%E4%BD%9C%E7%94%A8%E5%9F%9F&spm=1001.2101.3001.7020)3) 不存在变量提升
4) 不影响作用域链

**应用场景：以后声明变量使用 let 就对了**

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>let</title>
</head>
<body>
    <script>
        //0. 声明变量
        let a;
        let b,c,d;
        let e = 100;
        let f = 521, g = 'iloveyou', h = [];
 
        //1. 变量不能重复声明
        // let star = '罗志祥';
        // let star = '小猪';
        // 结果：Uncaught SyntaxError: Identifier 'star' has already been declared
         
 
        //2. 块儿级作用域  全局, 函数, eval
        // if else while for 
        // {
        //     let girl = '周扬青';
        // }
        // console.log(girl);
        // 结果：Uncaught ReferenceError: girl is not defined
         
        //3. 不存在变量提升
        // console.log(song);
        // let song = '恋爱达人';
        // 结果：Uncaught ReferenceError: girl is not defined
 
        //4. 不影响作用域链
        {
            let school = '尚硅谷';
            function fn(){
                console.log(school);
            }
            fn();
        }
        // 结果：尚硅谷
 
    </script>
</body>
</html>
```


### 2.1.1、 let-实践案例

```HTML
<!DOCTYPE html>
<html lang="en">
         
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>点击 DIV 换色</title>
    <link crossorigin="anonymous" href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
        rel="stylesheet">
    <style>
        .item {
            width: 100px;
            height: 50px;
            border: solid 1px rgb(42, 156, 156);
            float: left;
            margin-right: 10px;
        }
    </style>
</head>
 
<body>
    <div class="container">
        <h2 class="page-header">点击切换颜色</h2>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
    <script>
        //1、获取div元素对象
        let items = document.getElementsByClassName('item');
 
        //2、遍历并绑定事件
        // for (var i = 0; i < items.length; i++) {
        //     items[i].onclick = function () {
        //         //修改当前元素的背景颜色
        //         // this.style.background = 'pink';   // 点击：每个模块变成红色
        //         items[i].style.background = 'pink';  // 点击：不可以每个模块不可以变成粉色
        //     }
        // }
        // console.log("输出结果：" + i) // 3
        // 结果：var声明的变量i为全局变量，遍历完以后i变为3,然后再去点击每个模块，找不到相应的当前元素
 
        for(let i = 0;i<items.length;i++){
            items[i].onclick = function(){
                //修改当前元素的背景颜色
                // this.style.background = 'pink';
                items[i].style.background = 'pink';
            }
        }
        // 结果：let声明的变量i为局部变量，遍历完以后i变为2，然后再去点击每个模块，可以找到相应的当前元素
    </script>
</body>
 
</html>
```


## 2.2、const 关键字

const 关键字用来声明常量，const 声明有以下特点
1) 声明必须赋初始值
2) 标识符一般为大写
3) 不允许重复声明
4) 值不允许修改
5) 块儿级作用域

**注意: 对象属性修改和数组元素变化不会出发 const 错误**

**应用场景：声明对象类型使用 const ，非对象类型声明选择 let**

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>const 定义常量</title>
</head>
<body>
    <script>
        //声明常量
        const SCHOOL = '尚硅谷';
 
        //1. 一定要赋初始值
        // const A;
        // 结果：Uncaught SyntaxError: Missing initializer in const declaration
 
        //2. 一般常量使用大写(潜规则)
        // const a = 100;
 
        //3. 常量的值不能修改
        // SCHOOL = 'ATGUIGU';
        // 结果：Uncaught TypeError: Assignment to constant variable.
 
        //4. 块儿级作用域
        // {
        //     const PLAYER = 'UZI';
        // }
        // console.log(PLAYER);
        // 结果：Uncaught ReferenceError: PLAYER is not defined
 
        //5. 对于数组和对象的元素修改, 不算做对常量的修改, 不会报错
        const TEAM = ['UZI','MXLG','Ming','Letme'];
        TEAM.push('Meiko');
        console.log(TEAM)
        // 结果： ["UZI", "MXLG", "Ming", "Letme", "Meiko"]
 
        
    </script>
</body>
</html>
```


## **2.3、import、export**

**import导入模块、export导出模块**

```JavaScript
// 全部导入
import people from './example'
 
// 将整个模块当作单一对象进行导入，该模块的所有导出都会作为对象的属性存在
import * as example from "./example.js"
console.log(example.name)
console.log(example.getName())
 
// 导入部分，引入非 default 时，使用花括号
import {name, age} from './example'
 
 
// 导出默认, 有且只有一个默认
export default App
 
// 部分导出
export class App extend Component {};
```


## 2.4、变量的解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>变量的解构赋值</title>
</head>
<body>
    <script>
        //ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值，
        //这被称为解构赋值。
        
        //1. 数组的结构
        const F4 = ['小沈阳','刘能','赵四','宋小宝'];
        let [xiao, liu, zhao, song] = F4;
        console.log(xiao);
        console.log(liu);
        console.log(zhao);
        console.log(song);
        /**
         * 结果:  小沈阳 
         *        刘能 
         *        赵四 
         *        宋小宝
         */ 
 
        //2. 对象的解构
        const wang = {
            name: '王一博',
            age: '不详',
            xiaopin: function(){
                console.log("我可以演小品");
            }
        };
 
        let {name, age, xiaopin} = wang;
        console.log(name);
        console.log(age);
        console.log(xiaopin);
        xiaopin();
        /**
         * 结果: 王一博
         * 不详
         * ƒ (){
         *    console.log("我可以演小品");
         * }
         * 我可以演小品
         */
 
        // let {xiaopin} = wang;
        // xiaopin();
        // 结果：我可以演小品
 
 
    </script>
</body>
 
</html>
```


**注意：频繁使用对象方法、数组元素，就可以使用解构赋值形式**

## 2.5、模板字符串

模板字符串（template string）是增强版的字符串，用反引号（`）标识，特点：
1) 字符串中可以出现换行符
2) 可以使用 ${xxx} 形式输出变量

```HTML
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>模板字符串</title>
</head>
 
<body>
    <script>
        // ES6 引入新的声明字符串的方式 『``』 '' "" 
 
        //1. 声明
        let str1 = `我也是一个字符串哦!`;
        console.log(str1, typeof str1);
        // 结果：我也是一个字符串哦! string
 
        //2. 内容中可以直接出现换行符
        let str2 =  `<ul>
                        <li>沈腾</li>
                        <li>玛丽</li>
                        <li>魏翔</li>
                        <li>艾伦</li>
                    </ul>`;
        console.log(str2)
        /**
         * 结果：   
         *         <ul>
         *             <li>沈腾</li>
         *             <li>玛丽</li>
         *             <li>魏翔</li>
         *             <li>艾伦</li>
         *         </ul>
         */ 
 
        //3. 变量拼接
        let lovest = '魏翔';
        let out = `${lovest}是我心目中最搞笑的演员!!`;
        console.log(out);
        // 结果：魏翔是我心目中最搞笑的演员!!
    </script>
</body>
 
</html>
```


**注意：当遇到字符串与变量拼接的情况使用模板字符串**

## 2.6、简化对象写法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>简化对象写法</title>
</head>
<body>
    <script>
        //ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
        //这样的书写更加简洁
        let name = '尚硅谷';
        let change = function(){
            console.log('我们可以改变你!!');
        }
 
        const school = {
            name,
            change,
            improve(){
                console.log("我们可以提高你的技能");
            }
        }
 
        console.log(school);
        /**
         * 结果：
         *     change: ƒ ()
         *     improve: ƒ improve()
         *     name: "尚硅谷"
         */ 
 
    </script>
</body>
</html>
```


注意：对象简写形式简化了代码，所以以后用简写就对了

## 2.7、箭头函数

ES6 允许使用「箭头」（=>）定义函数。

箭头函数的注意点:
1) 如果形参只有一个，则小括号可以省略
2) 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果
3) 箭头函数 this 指向声明时所在作用域下 this 的值
4) 箭头函数不能作为构造函数实例化
5) 不能使用 argument

```HTML
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>箭头函数</title>
</head>
 
<body>
    <script>
        // ES6 允许使用「箭头」（=>）定义函数。
        //1、声明一个函数
        let fn1 = function(){
        
        }
 
        //2. 通用写法
        let fn2 = (arg1, arg2, arg3) => {     
            return arg1 + arg2 + arg3; 
        }
 
        // 举例
        let fn = (a,b) => {
            return a + b;
        }
        //调用函数
        let result = fn(1, 2);
        console.log(result);
        // 结果：3
 
        //3. 箭头函数的简写
            //1). 省略小括号, 当形参有且只有一个的时候
            let add = n => {
                return n + n;
            }
            console.log(add(9));
            // 结果：18
 
            //2) 省略花括号, 当代码体只有一条语句的时候, 此时 return 必须省略,而且语句的执行结果就是函数的返回值
            let pow = n => n * n;  
            console.log(pow(8));
            // 结果：64
 
        //4. this是静态的. this始终指向函数声明时所在作用域下的this的值
        function getName(){
            console.log(this.name);
        }
        let getName2 = () => {
            console.log(this.name);
        }
        //设置 window 对象的 name 属性
        window.name = '尚硅谷';
        const school = {
            name: "ATGUIGU"
        }
        
 
        //直接调用
        getName();
        getName2();
        // 结果：尚硅谷
        // 结果：尚硅谷
 
        //call 方法调用
        getName.call(school);
        getName2.call(school);
        // 结果：ATGUIGU
        // 结果：尚硅谷
 
        //2. 不能作为构造实例化对象
        let Person = (name, age) => {
            this.name = name;
            this.age = age;
        }
        let me = new Person('xiao',30);
        console.log(me);
        // 结果：Uncaught TypeError: Person is not a constructor
 
        //3. 不能使用 arguments 变量
        let fn3 = () => {
            console.log(arguments);
        }
        fn(1,2,3);
 
        
 
    </script>
</body>
 
</html>
```


**注意：箭头函数不会更改 this 指向，用来指定回调函数会非常合适**

### 2.7.1、箭头函数实践

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>箭头函数实践</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background: #58a;
        }
    </style>
</head>
<body>
    <div id="ad"></div>
    <script>
        //需求-1  点击 div 2s 后颜色变成『粉色』
        //获取元素
        let ad = document.getElementById('ad');
        //绑定事件
        ad.addEventListener("click", function(){
            //保存 this 的值
            // let _this = this;
            //定时器
            setTimeout(() => {
                //修改背景颜色 this
                // console.log(this);
                // _this.style.background = 'pink';
                this.style.background = 'pink';
            }, 2000);
        });
 
        //需求-2  从数组中返回偶数的元素
        const arr = [1,6,9,10,100,25];
        // const result = arr.filter(function(item){
        //     if(item % 2 === 0){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // });
        
        const result = arr.filter(item => item % 2 === 0);
        console.log(result);
        /**
         * 结果：Array(3)
         *          0: 6
         *          1: 10
         *          2: 100
         */ 
 
        // 箭头函数适合与 this 无关的回调. 定时器, 数组的方法回调
        // 箭头函数不适合与 this 有关的回调.  事件回调, 对象的方法
 
    </script>
</body>
 
</html>
```


## 2.8、rest 参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rest参数</title>
</head>
<body>
    <script>
        // ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments
        // ES5 获取实参的方式
        function date(){
            console.log(arguments);
        }
        date('白芷','阿娇','思慧');
        // 结果：["白芷", "阿娇", "思慧"]
 
        // 1、rest 参数
        function date(...args){
            console.log(args);// filter some every map 
        }
        date('阿娇','柏芝','思慧');
        // 结果：["阿娇", "柏芝", "思慧"]
 
        // 2、rest 参数必须要放到参数最后
        function fn(a,b,...args){
            console.log(a);
            console.log(b);
            console.log(args);
        }
        fn(1,2,3,4,5,6);
        /**
         * 结果：
         *      1
         *      2
         *      [3, 4, 5, 6]
         */ 
 
    </script>
</body>
</html>
```


**注意：rest 参数非常适合不定个数参数函数的场景**

## 2.9、spread 扩展运算符

扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包。

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>扩展运算符</title>
</head>
<body>
    <script>
        // 『...』 扩展运算符能将『数组』转换为逗号分隔的『参数序列』
        //声明一个数组 ...
        const tfboys = ['易烊千玺','王源','王俊凯'];
        // => '易烊千玺','王源','王俊凯'
 
        // 声明一个函数
        function chunwan(){
            console.log(arguments);
        }
        
        chunwan(...tfboys);// chunwan('易烊千玺','王源','王俊凯')
        /**
         * 结果：
         *     Arguments(3)
         *        0: "易烊千玺"
         *        1: "王源"
         *        2: "王俊凯"
         */ 
    </script>
</body>
</html>
```


### 2.9.1、扩展运算符应用

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>扩展运算符应用</title>
</head>
<body>
    <div></div>
    <div></div>
    <div></div>
    <script>
        //1. 数组的合并 情圣  误杀  唐探
        const kuaizi = ['王太利','肖央'];
        const fenghuang = ['曾毅','玲花'];
        // const zuixuanxiaopingguo = kuaizi.concat(fenghuang); // concat() 方法用于连接两个或多个数组。
        const zuixuanxiaopingguo = [...kuaizi, ...fenghuang];
        console.log(zuixuanxiaopingguo);
        /** 结果： Array(4)
         *             0: "王太利"
         *             1: "肖央"
         *             2: "曾毅"
         *             3: "玲花"
         */
 
        //2. 数组的克隆
        const sanzhihua = ['E','G','M'];
        const sanyecao = [...sanzhihua];//  ['E','G','M']
        console.log(sanyecao);
        /**
         *  结果：Array(3)
         *           0: "E"
         *           1: "G"
         *           2: "M"
         */
 
        //3. 将伪数组转为真正的数组
        const divs = document.querySelectorAll('div');
        const divArr = [...divs];
        console.log(divArr);// arguments
        /**
         * 结果：Array(3)
         *          0: div
         *          1: div
         *          2: div
         */ 
        
    </script>
</body>
</html>
```


## 2.10、Symbol

### 2.10.1. Symbol 基本使用

ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。
**Symbol 特点**
1) Symbol 的值是唯一的，用来解决命名冲突的问题
2) Symbol 值不能与其他数据进行运算
3) Symbol 定义的对象属性不能使用 for…in 循环遍历，但是可以使用
Reflect.ownKeys 来获取对象的所有键名

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>symbol</title>
</head>
<body>
    <script>
        //创建Symbol
        let s = Symbol();
        console.log(s, typeof s);
        // 结果：Symbol() "symbol"
 
        let s2 = Symbol('尚硅谷'); 
        let s3 = Symbol('尚硅谷'); 
        console.log(s2 === s3)
        // 结果：false
 
        //Symbol.for 创建
        let s4 = Symbol.for('尚硅谷'); // 创建一个 symbol 并放入 symbol 注册表中，键为 "尚硅谷"
        let s5 = Symbol.for('尚硅谷'); // 从 symbol 注册表中读取键为"尚硅谷"的 symbol
        console.log(s4 === s5)
       
        //不能与其他数据进行运算
        // let result = s + 100;
        // let result = s > 100;
        // let result = s + s;
        //结果：Cannot convert a Symbol value to a number
 
        // USONB  you are so niubility 
        // u  undefined
        // s  string  symbol
        // o  object
        // n  null number
        // b  boolean
 
    </script>
</body>
</html> 
```


**注: 遇到唯一性的场景时要想到 Symbol**

### 2.10.2. Symbol内置值

除了定义自己使用的 Symbol 值以外，ES6 还提供了11个内置的Symbol值，指向语言内部使用的方法。可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行。

|Symbol.hasInstance|当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法|
|-|-|
|Symbol.isConcatSpreadable|对象的 Symbol.isConcatSpreadable 属性等于的是一个布尔值，表示该对象用于 Array.prototype.concat()时，是否可以展开。|
|Symbol.species|创建衍生对象时，会使用该属性|
|Symbol.match|当执行 str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。|
|Symbol.replace|当该对象被 str.replace(myObject)方法调用时，会返回该方法的返回值。|
|Symbol.search|当该对象被 str. search (myObject)方法调用时，会返回该方法的返回值。|
|Symbol.split|当该对象被 str. split (myObject)方法调用时，会返回该方法的返回值。|
|Symbol.iterator|对象进行 for...of 循环时，会调用 Symbol.iterator 方法，返回该对象的默认遍历器|
|Symbol.toPrimitive|该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。|
|Symbol. toStringTag|在该对象上面调用 toString 方法时，返回该方法的返回值|
|Symbol. unscopables|该对象指定了使用 with 关键字时，哪些属性会被 with环境排除|

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Symbol内置属性</title>
</head>
<body>
    <script>
        class Person{
            static [Symbol.hasInstance](param){
                console.log(param);
                console.log("我被用来检测类型了");
                return false;
            }
        }
 
        // let o = {};
 
        // console.log(o instanceof Person);
 
        // const arr = [1,2,3];
        // const arr2 = [4,5,6];
        // arr2[Symbol.isConcatSpreadable] = false;
        // console.log(arr.concat(arr2));
    </script>
</body>
</html>
```


```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Symbol 创建对象属性</title>
</head>
<body>
    <script>
        //向对象中添加方法 up down
        let game = {
            name:'俄罗斯方块',
            up: function(){},
            down: function(){}
        };
        
        //声明一个对象
        // let methods = {
        //     up: Symbol(),
        //     down: Symbol()
        // };
 
        // game[methods.up] = function(){
        //     console.log("我可以改变形状");
        // }
 
        // game[methods.down] = function(){
        //     console.log("我可以快速下降!!");
        // }
 
        // console.log(game);
 
        //
        let youxi = {
            name:"狼人杀",
            [Symbol('say')]: function(){
                console.log("我可以发言")
            },
            [Symbol('zibao')]: function(){
                console.log('我可以自爆');
            }
        }
 
        console.log(youxi)
 
        
    </script>
</body>
</html>
```


## 2.11. 生成器

生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>生成器</title>
</head>
<body>
    <script>    
        //生成器其实就是一个特殊的函数
        //异步编程  纯回调函数  node fs  ajax mongodb
        //函数代码的分隔符
        function * gen(){
            // console.log(111);
            yield '一只没有耳朵';
            // console.log(222);
            yield '一只没有尾部';
            // console.log(333);
            yield '真奇怪';
            // console.log(444);
        }
 
        let iterator = gen();
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        /**
         * {value: "一只没有耳朵", done: false}
         * {value: "一只没有尾部", done: false}
         * {value: "真奇怪", done: false}
         */ 
        
 
        //遍历
        for(let v of gen()){
            console.log(v);
        }
        /**
         * 结果：
         *    一只没有耳朵
         *    一只没有尾部
         *    真奇怪
         */ 
 
    </script>
</body>
</html>
```


代码说明：
1)、 * 的位置没有限制
2)、 生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到yield 语句后的值
3)、 yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next方法，执行一段代码
4) 、next 方法可以传递实参，作为 yield 语句的返回值

### 2.11.1.生成器函数实例-1

```HTML
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>生成器函数实例</title>
</head>
 
<body>
    <script>
        // 异步编程  文件操作 网络操作(ajax, request) 数据库操作
        // 1s 后控制台输出 111  2s后输出 222  3s后输出 333 
        // 回调地狱
        // setTimeout(() => {
        //     console.log(111);
        //     setTimeout(() => {
        //         console.log(222);
        //         setTimeout(() => {
        //             console.log(333);
        //         }, 3000);
        //     }, 2000);
        // }, 1000);
 
        function one(){
            setTimeout(()=>{
                console.log(111);
                iterator.next();
            },1000)
        }
 
        function two(){
            setTimeout(()=>{
                console.log(222);
                iterator.next();
            },2000)
        }
 
        function three(){
            setTimeout(()=>{
                console.log(333);
                iterator.next();
            },3000)
        }
 
        function * gen(){
            yield one();
            yield two();
            yield three();
        }
 
        //调用生成器函数
        let iterator = gen();
        iterator.next();
 
        /**
         * 结果: 111
         *       222
         *       333
         */ 
    </script>
</body>
 
</html>
```


### 2.11.2.生成器函数实例-2

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>生成器函数</title>
</head>
<body>
    <script>
        //模拟获取  用户数据  订单数据  商品数据 
        function getUsers(){
            setTimeout(()=>{
                let data = '用户数据';
                console.log(data)
                //调用 next 方法, 并且将数据传入
                iterator.next(data);
            }, 1000);
        }
 
        function getOrders(){
            setTimeout(()=>{
                let data = '订单数据';
                console.log(data)
                iterator.next(data);
            }, 1000)
        }
 
        function getGoods(){
            setTimeout(()=>{
                let data = '商品数据';
                console.log(data)
                iterator.next(data);
            }, 1000)
        }
 
        function * gen(){
            let users = yield getUsers();
            let orders = yield getOrders();
            let goods = yield getGoods();
        }
 
        //调用生成器函数
        let iterator = gen();
        iterator.next();
        /**
         * 结果：
         *    用户数据
         *    订单数据
         *    商品数据
         */ 
 
    </script>
</body>
</html>
```


### 2.12. Promise

Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

- 1) Promise 构造函数: Promise (excutor) {}

- 2) Promise.prototype.then 方法

- 3) Promise.prototype.catch 方法

## 2.13、Set

ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，集合的属性和方法：

1. size 返回集合的元素个数

2. add 增加一个新元素，返回当前集合

3. delete 删除元素，返回 boolean 值

4. has 检测集合中是否包含某个元素，返回 boolean 值

5. clear 清空集合，返回 undefined

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>集合</title>
</head>
<body>
    <script>
        //0、声明一个 set
        let s = new Set();
        let s2 = new Set(['大事儿','小事儿','好事儿','坏事儿','小事儿']);
 
        //1、遍历每个元素
        for(let v of s2){
            console.log(v);
        }
        /**
         * 结果: 大事儿
         *       小事儿
         *       好事儿
         *       坏事儿
         */
 
        //2、元素个数（set去重）
        console.log(s2.size);
        // 结果：4
 
        //3、添加新的元素
        s2.add('喜事儿');
        console.log(s2);
        // 结果：Set(5) {"大事儿", "小事儿", "好事儿", "坏事儿", "喜事儿"}
 
        //4、删除元素
        s2.delete('坏事儿');
        console.log(s2)
        // 结果：Set(4) {"大事儿", "小事儿", "好事儿", "喜事儿"}
 
        //5、检测
        console.log(s2.has('糟心事'));
        // 结果：false
 
        //6、清空
        s2.clear();
        console.log(s2);
        // Set(0) {}
        
    </script>
</body>
</html>
```


### 2.13.1、Set集合实践

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Set 实践</title>
</head>
<body>
    <script>
        let arr = [1,2,3,4,5,4,3,2,1];
        //1. 数组去重
        let result1 = [...new Set(arr)];
        console.log(result1);
        // 结果：(5) [1, 2, 3, 4, 5]
 
        //2. 交集
        let arr2 = [4,5,6,5,6];
        let result2 = [...new Set(arr)].filter(item => {
            let s2 = new Set(arr2);// 4 5 6
            if(s2.has(item)){
                console.log(item)
                return true;
            }else{
                return false;
            }
        });
        /**
         *  结果:  4
         *         5
         */ 
          
        let result3 = [...new Set(arr)].filter(item => new Set(arr2).has(item));
        console.log(result3);
        // 结果：(2) [4, 5]
 
        //3. 并集
        let union = [...new Set([...arr, ...arr2])];
        console.log(union);
        // 结果：[1, 2, 3, 4, 5, 6]
 
        //4. 差集
        let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)));
        console.log(diff);
        // 结果：(3) [1, 2, 3]
 
    </script>
</body>
 
</html>
```


## 2.14、Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map 也实现了iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历。Map 的属性和方法：

6. size 返回 Map 的元素个数

7. set 增加一个新元素，返回当前 Map

8. get 返回键名对象的键值

9. has 检测 Map 中是否包含某个元素，返回 boolean 值

10. clear 清空集合，返回 undefined

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Map</title>
</head>
<body>
    <script>
        //0、声明 Map
        let m = new Map();
 
        //1、添加元素
        m.set('name','尚硅谷');
        m.set('change', function(){
            console.log("我们可以改变你!!");
        });
        let key = {
            school : 'ATGUIGU'
        };
        m.set(key, ['北京','上海','深圳']);
 
        //2、遍历
        for(let v of m){
            console.log(v);
        }
        /**
         * (2) ["name", "尚硅谷"]
         * (2) ["change", ƒ]
         * (2) [{…}, Array(3)]
         */ 
 
        //3、size
        console.log(m.size);
        // 结果：3
 
        //4、删除
        m.delete('name');
        console.log(m)
        /**
         * 结果：
         * Map(2) {"change" => ƒ, {…} => Array(3)}[[Entries]]0: {"change" => function(){
         *                    console.log("我们可以改变你!!");
         *        }}1: {Object => Array(3)}size: (...)__proto__: Map
         * (2) ["change", ƒ]0: "change"1: ƒ ()arguments: nullcaller: nulllength: 0name: ""prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: 20.Map.html:15[[Scopes]]: Scopes[2]length: 2__proto__: Array(0)
         * (2) [{…}, Array(3)]
         */ 
 
        //5、获取
        console.log(m.get('change'));
        // 结果：(2) ["change", ƒ]
        console.log(m.get(key));
        // 结果：(2) [{…}, Array(3)]
 
        //6、清空
        m.clear();
        console.log(m);
        // 结果：Map(0) {}
        
    </script>
</body>
</html>
```


## 2.15、class 类

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
知识点：

11. class 声明类

12. constructor 定义构造函数初始化

13. extends 继承父类

14. super 调用父级构造方法

15. static 定义静态方法和属性

16. 父类方法可以重写

### 2.15.1、类声明

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类声明</title>
</head>
<body>
    <script>
        //手机
        function Phone(brand, price){
            this.brand = brand;
            this.price = price;
        }
 
        //添加方法
        Phone.prototype.call = function(){
            console.log("我可以打电话!!");
        }
 
        //实例化对象
        let Huawei = new Phone('华为', 5999);
        Huawei.call();
        console.log(Huawei);
        /**
         * 结果： 我可以打电话!!
         *        Phone {brand: "华为", price: 5999}
         */ 
 
        //class
        class Shouji{
            //构造方法 名字不能修改
            constructor(brand, price){
                this.brand = brand;
                this.price = price;
            }
 
            //方法必须使用该语法, 不能使用 ES5 的对象完整形式
            call(){
                console.log("我可以打电话!!!");
            }
        }
 
        let onePlus = new Shouji("1+", 1999);
        onePlus.call();
        console.log(onePlus);
        /**
         * 结果：我可以打电话!!!
         * Shouji {brand: "1+", price: 1999}
         */ 
 
    </script>
</body>
</html>
```


### 2.15.2、get 和 set方法

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>get 和 set</title>
</head>
<body>
    <script>
        // get 和 set  
        class Phone{
            get price(){
                console.log("价格属性被读取了");
                return 'iloveyou';
            }
 
            set price(newVal){
                console.log('价格属性被修改了'+newVal);
            }
        }
 
        //实例化对象
        let s = new Phone();
        console.log(s.price);
        /**
         * get结果：价格属性被读取了
         * iloveyou
         */  
        s.price = 'free';
        // set结果：价格属性被修改了free
 
    </script>
</body>
</html>
```


### 2.15.3、静态成员

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>静态成员</title>
</head>
<body>
    <script>
        function Phone(){
 
        }
        Phone.name = '手机';
        Phone.change = function(){
            console.log("我可以改变世界");
        }
        Phone.prototype.size = '5.5inch';
 
        let nokia = new Phone();
 
        console.log(nokia.name);
        console.log(nokia.change); 
        console.log(nokia.size);
        /**
         * 结果：undefined
         *      undefined
         *      5.5inch
         */ 
 
        class MobilePhone{
            //静态属性
            static name = '手机';
            static change(){
                console.log("我可以改变世界");
            }
        }
 
        let iphone = new MobilePhone();
        console.log(iphone.name);
        console.log(MobilePhone.name);
        /**
         * 结果：
         *  undefined
         *  手机
         */ 
    </script>
</body>
</html>
```


### 2.15.4、对象继承

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>对象继承</title>
</head>
<body>
    <script>
        //手机
        function Phone(brand, price){
            this.brand = brand;
            this.price = price;
        }
 
        Phone.prototype.call = function(){
            console.log("我可以打电话");
        }
 
        //智能手机
        function SmartPhone(brand, price, color, size){
            Phone.call(this, brand, price);
            this.color = color;
            this.size = size;
        }
 
        //设置子级构造函数的原型
        SmartPhone.prototype = new Phone;
        SmartPhone.prototype.constructor = SmartPhone;
 
        //声明子类的方法
        SmartPhone.prototype.photo = function(){
            console.log("我可以拍照")
        }
 
        SmartPhone.prototype.playGame = function(){
            console.log("我可以玩游戏");
        }
 
        const chuizi = new SmartPhone('锤子',2499,'黑色','5.5inch');
 
        console.log(chuizi);
 
    </script>
</body>
</html>
```


```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类继承-2</title>
</head>
<body>
    <script>
        class Phone{
            //构造方法
            constructor(brand, price){
                this.brand = brand;
                this.price = price;
            }
            //父类的成员属性
            call(){
                console.log("我可以打电话!!");
            }
        }
 
        class SmartPhone extends Phone {
            //构造方法
            constructor(brand, price, color, size){
                super(brand, price);// Phone.call(this, brand, price)
                this.color = color;
                this.size = size;
            }
 
            photo(){
                console.log("拍照");
            }
 
            playGame(){
                console.log("玩游戏");
            }
 
            call(){
                console.log('我可以进行视频通话');
            }
        }
 
        const xiaomi = new SmartPhone('小米',799,'黑色','4.7inch');
        console.log(xiaomi);
        xiaomi.call();
        xiaomi.photo();
        xiaomi.playGame();
 
        /**
         * 结果：SmartPhonebrand: "小米"color: "黑色"price: 799size: "4.7inch"__proto__: Phone
         * 我可以进行视频通话
         * 拍照
         * 玩游戏
         */ 
    </script>
</body>
</html>
```


## 2.16、对象继承参数默认值

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>函数参数默认值</title>
</head>
<body>
    <script>
        //ES6 允许给函数参数赋值初始值
        //1. 形参初始值 具有默认值的参数, 一般位置要靠后(潜规则)
        function add(a,b,c=10) {
            return a + b + c;
        }
        let result = add(1,2);
        console.log(result);
        // 结果：13
        
        //2. 与解构赋值结合
        function connect({host="127.0.0.1", username,password, port}){
            console.log(host)
            console.log(username)
            console.log(password)
            console.log(port)
        }
        connect({
            host: 'atguigu.com',
            username: 'root',
            password: 'root',
            port: 3306
        })
        /**
         * 结果：atguigu.com
         *       root
         *       root
         *       3306
         */ 
    </script>
</body>
</html>
```


## 2.17、迭代器

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>迭代器</title>
</head>
<body>
    <script>
        //声明一个数组
        const xiyou = ['唐僧','孙悟空','猪八戒','沙僧'];
 
        //使用 for...of 遍历数组
        for(let v of xiyou){
            console.log(v);
        }
        /**
         * 结果：
         *     唐僧
         *     孙悟空
         *     猪八戒
         *     沙僧
         */ 
 
        let iterator = xiyou[Symbol.iterator]();
        //调用对象的next方法
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        /**
         * 结果：
         *    {value: "唐僧", done: false}
         *    {value: "孙悟空", done: false}
         *    {value: "猪八戒", done: false}
         *    {value: "沙僧", done: false}
         */ 
    </script>
</body>
</html>
```


## 2.18、迭代器自定义遍历对象

```HTML
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>自定义遍历数据</title>
</head>
 
<body>
    <script>
        //声明一个对象
        const banji = {
            name: "终极一班",
            stus: [
                'xiaoming',
                'xiaoning',
                'xiaotian',
                'knight'
            ],
            [Symbol.iterator]() {
                //索引变量
                let index = 0;
                //
                let _this = this;
                return {
                    next: function () {
                        if (index < _this.stus.length) {
                            const result = { value: _this.stus[index], done: false };
                            //下标自增
                            index++;
                            //返回结果
                            return result;
                        }else{
                            return {value: undefined, done: true};
                        }
                    }
                };
            }
        }
 
        //遍历这个对象 
        for (let v of banji) {
            console.log(v);
        }
        /**
         * 结果：xiaoming
         *       xiaoning
         *       xiaotian
         *       knight
         */ 
    </script>
</body>
 
</html>
```


## 2.19、数值扩展

### 2.19.1. 二进制和八进制

ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b 和 0o 表示。

### 2.19.2. Number.isFinite() 与 Number.isNaN()

Number.isFinite() 用来检查一个数值是否为有限的
Number.isNaN() 用来检查一个值是否为 NaN

### 2.19.3. Number.parseInt() 与 Number.parseFloat()

ES6 将全局方法 parseInt 和 parseFloat，移植到 Number 对象上面，使用不变。

### 2.19.4. Math.trunc

用于去除一个数的小数部分，返回整数部分。

### 2.19.5. Number.isInteger

Number.isInteger() 用来判断一个数值是否为整数

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数值扩展</title>
</head>
<body>
    <script>
        //0. Number.EPSILON 是 JavaScript 表示的最小精度
        //EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16
        function equal(a, b){
            if(Math.abs(a-b) < Number.EPSILON){
                return true;
            }else{
                return false;
            }
        }
        console.log(0.1 + 0.2 === 0.3);
        // 结果：false
        console.log(equal(0.1 + 0.2, 0.3))
        // 结果：true
 
        //1. 二进制和八进制
        // let b = 0b1010;
        // let o = 0o777;
        // let d = 100;
        // let x = 0xff;
        // console.log(x);
 
        //2. Number.isFinite  检测一个数值是否为有限数
        console.log(Number.isFinite(100));      // true
        console.log(Number.isFinite(100/0));    // false
        console.log(Number.isFinite(Infinity)); // false
        
        //3. Number.isNaN 检测一个数值是否为 NaN 
        console.log(Number.isNaN(123)); // false 
 
        //4. Number.parseInt Number.parseFloat字符串转整数
        console.log(Number.parseInt('5211314love'));      // 5211314
        console.log(Number.parseFloat('3.1415926神奇'));  //  3.1415926
 
        //5. Number.isInteger 判断一个数是否为整数
        console.log(Number.isInteger(5));   // true
        console.log(Number.isInteger(2.5)); // false
 
        //6. Math.trunc 将数字的小数部分抹掉  
        console.log(Math.trunc(3.5));  // 3
 
        //7. Math.sign 判断一个数到底为正数 负数 还是零
        console.log(Math.sign(100));    // 1
        console.log(Math.sign(0));      // 0
        console.log(Math.sign(-20000)); // -1
 
    </script>
</body>
</html>
```


## 2.20、 对象扩展

ES6 新增了一些 Object 对象的方法

17. Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）

18. Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象

19. __proto__、setPrototypeOf、 setPrototypeOf 可以直接设置对象的原型

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>对象方法扩展</title>
</head>
<body>
    <script>
        //1. Object.is 判断两个值是否完全相等 
        console.log(Object.is(120, 120));// ===  true
        console.log(Object.is(NaN, NaN));// ===  true
        console.log(NaN === NaN);// ===  false  NaN和所有值包括自己都不相等
 
        //2. Object.assign 对象的合并
        const config1 = {
            host: 'localhost',
            port: 3306,
            name: 'root',
            pass: 'root',
            test: 'test'
        };
        const config2 = {
            host: 'http://atguigu.com',
            port: 33060,
            name: 'atguigu.com',
            pass: 'iloveyou',
            test2: 'test2'
        }
        console.log(Object.assign(config1, config2));
        /**
         * 结果:
         *      host: "http://atguigu.com"
         *      name: "atguigu.com"
         *      pass: "iloveyou" 
         *      port: 33060
         *      test: "test"
         *      test2: "test2"
         */ 
 
        //3. Object.setPrototypeOf 设置原型对象  Object.getPrototypeof
        const school = {
            name: '尚硅谷'
        }
        const cities = {
            xiaoqu: ['北京','上海','深圳']
        }
        Object.setPrototypeOf(school, cities);
        console.log(Object.getPrototypeOf(school));
        // 结果：xiaoqu: (3) ["北京", "上海", "深圳"]
        console.log(school);
        // {name: "尚硅谷"}
 
 
        
    </script>
</body>
</html>
```


## 2.21、模块化

模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。

### 2.21.1. 模块化的好处

模块化的优势有以下几点：

20. 防止命名冲突

21. 代码复用

22. 高维护性

### 2.21.2. 模块化规范产品

ES6 之前的模块化规范有：
1) CommonJS => NodeJS、Browserify
2) AMD => requireJS
3) CMD => seaJS

### 2.21.3. ES6 模块化语法

模块功能主要由两个命令构成：export 和 import。
⚫ export 命令用于规定模块的对外接口
⚫ import 命令用于输入其他模块提供的功能

## 2.22、三个等号和两个等号的区别（“===”和“==”）

1、===：称为等同符，当两边值的类型相同时，直接比较值，若类型不相同，直接返回false；

2、==：称为等值符，当等号两边的类型相同时，直接比较值是否相等，若不相同，则先转化为类型相同的值，再进行比较；

类型转换规则：1）如果等号两边是boolean、string、number三者中任意两者进行比较时，优先转换为数字进行比较。

2）如果等号两边出现了null或undefined,null和undefined除了和自己相等，就彼此相等

注意：NaN==NaN //返回false，NaN和所有值包括自己都不相等。

## 2.22、局部严格模式

**严格模式不仅可以用在全局，还能用在局部。**
当在严格模式下，this不会指向window

**两个简单函数，对比局部严格模式和非严格模式下的两种this指向**

```JavaScript
function f(){
    console.log(this)
}
 
function f2(){
    'use strict'
    console.log(this)
}
f();
f2();
```


**执行结果：**

![20210423151515745.png](https://flowus.cn/preview/8754e021-794f-477d-b385-2df993290aa5)

**可见：
局部严格模式下的this值为undefined**

在ES6的类定义中，类的内部默认是严格模式，即其中函数的this指向默认是undefined,在React类组件状态改变时会涉及函数this的指向问题

```JavaScript
        //1.创建组件
        class MyComponent extends React.Component{
 
            constructor(props){
                super(props)
                this.state={isHot=true}
 
                //实例方法=原型链上的weatherChange绑定给实例对象得到新的函数（新函数的this指向实例）
 
                this.change=this.weatherChange.bind(this)
            }
 
            render(){
                return <h1 onClick="change">The weather is {isHot?'hot':'cold'}</h1>
            }
 
            //3.修改状态
            weatherChange(){
                const isHot=this.state.isHot
                
                //通过内置的api去更改状态，且更新是合并，不是替换（即原来的属性不变）
                this.setState({isHot:!isHot})
                
                //this.state.isHot=this.state.isHot?false:true
            }
 
        }
        //2.渲染组件
        ReactDOM.render(<MyComponent/>,getElementById('root'));
```


