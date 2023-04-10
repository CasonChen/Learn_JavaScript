// 双斜杠是单行注释符号
/*
    这个符号是多行注释
*/
/*
    1.JS中严格区分大小写
    2.每一条语句都要以;结尾
        -如果不写分号，浏览器会自动添加，但是会消耗系统资源
        -有些时候，浏览器会加错分号
    3.JS中会忽略多个空格和换行，所以我们可以利用空格和换行对代码进行格式化
*/




// 第一行JS代码
// 下面三条语句都是称为"输出语句"

// 控制浏览器弹出一个警告框
alert(
    "This is my first line of JS code"
);

// 让计算机在页面中输出一个内容
document.write("Guess where I am")
// document.write()可以向body中输出一个内容

// 向控制台输出一个内容
// 这个是需要打开开发者面板才能看到的
console.log("I'm here, in console")
// console.log()的作用是向控制台输出一个内容





// 标识符
/*
    标识符，在js中所有的可以由我们自主命名的都可以称为是标识符
        例如：变量名、函数名、属性名都属于标识符
    命名一个标识符时需要遵循如下的规则：
        1.标识符可以含有字母、数字、_、$
        2.标识符不能以数字开头
        3.表示不能是ES中的关键字或保留字
        4.标识符一般都采用驼峰命名法

    js底层保存标识符时实际上是采用的Unicode编码
        所以理论上讲，所有的uft-8中含有的内容都可以作为标识符
*/




// 字面量与变量
/*
    字面量，是一些不可改变的值，可理解为常量
        -字面量是可以直接使用，但一般不会直接使用字面量
    变量，可以用来保存字面量，而且变量的值是可以任意改变的
        -变量更加方便使用
        -所以在实际开发时，都是通过变量去保存一个字面量
*/

// 声明变量
// 在js中使用"var"关键字来声明一个变量
var a;

// 为a赋值
a = 123;

document.write(a);
alert(a);
console.log(a);




// 六种数据类型
// String
/*
数据类型指的就是字面量的类型
在js中一共有六种数据类型
    String 字符串
    Number 数字/数值
    Boolean 布尔值
    Null 空值
    Undefined 未定义
    Object 对象
其中String Number Boolean Null Undefined属于基本数据类型
    而Object属于引用数据类型
*/

// String需要用引号引起来
var str = "Hello";
document.write(str);
// 当表示一些特殊符号时可以使用\进行转义，与当时学Python一样

// Number
/*
在js中所有的数值都是Number类型
    与python、C及Java不同，js包括整数和浮点数
*/

var a = 123;
var b = 123.456;
var c = "123";
console.log(a);
console.log(b);
console.log(c);

// typeof运算符，可以检查一个变量的类型
// 语法：typeof 变量
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// js中可以表示的数字的最大值
console.log(Number.MAX_VALUE);
// js中可以表示的数字的最小值，此最小值非最小值，是大于0的最小值
console.log(Number.MIN_VALUE);
// 如果使用Number表示的数字超过了最大值，则会返回一个Infinity
// Infinity表示正无穷，-Infinity表示负无穷

var m = "abc";
var n = "def";
var q = m * n;
console.log(q);
/*
此时，会返回NaN
    NaN, Not A Number
    但是用typeof检测，会发现还是一个Number
*/

var z = 123 + 456;
console.log(z);
// js中整数的运算基本可以保证精确
var t = 0.0001 + 0.0002;
console.log(t);
// 此时会发现，使用js计算浮点数可能会得到一个不精确的结果

// Boolean
/*
Boolean布尔值，主要用来做逻辑判断
    只有两种结果
        true或false
*/
var b00l = true;
console.log(b00l);
console.log(typeof b00l);

// Null and Undefined
/*
Null类型的值只有一个，就是null
    专门用来表示一个为空的对象
使用typeof检测一个null值时，会返回object
*/
var a = null;
console.log(a);
console.log(typeof a);

/*
Undefined类型只有一个，就是undefined
*/
var b;
console.log(b);
console.log(typeof b);
