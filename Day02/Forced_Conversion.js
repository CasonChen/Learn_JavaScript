/*
强制类型转换
    指将一个数据强制转换为其他的数据类型
*/
// String
var a = 123;
console.log(typeof a);
console.log(a);

// 此时a是一个Number，但是我想把a转换为String

/*
类型转换主要指，将其他数据类型转换为
    String Number Boolean
*/

//将其他的数据类型转换为String
/*
方法1：
    调用被转换数据类型的toString()方法
        语法：xxx.yyy();
    该方法不会影响到原变量，它会将转换的结果返回
*/
var a = a.toString();
// 先将a转换为一个字符串，然后再赋值给a
console.log(typeof a);
/*
方法2：
    调用String()函数，并将被转换的数据作为参数传递
    调用String()函数做强制类型转换时，
        对于Number和Boolean实际上就是调用的toString()方法
*/
var b = 456;
console.log(typeof b);
var b = String(b);
console.log(typeof b);



// Number
//将其他的数据类型转换为Number
/*
方法1：
    调用Number()函数
*/
var c = "789";
console.log(typeof c);
console.log(c);
var c = Number(c);
console.log(typeof c);
// 数字类型String-->Number，返回“Number”

var d = "today's weather is good";
console.log(d);
console.log(typeof d);
var d = Number(d);
console.log(d);
// 非数字类型String-->Number，返回“NaN”

var e = true;
console.log(typeof e);
var e = Number(e);
console.log(typeof e);
console.log(e);
// Boolean-->Number，返回“1”
// 以此类推，若变量是false，经过Number()函数转换之后会得到“0”

var f = null;
console.log(typeof f);
var f = Number(f);
console.log(typeof f);
console.log(f);
// null-->Number，返回“0”

var g = undefined;
console.log(typeof g);
var g = Number(g);
console.log(typeof g);
console.log(g);
// undefined-->Number，返回“NaN”

/*
方式2：
    专门对付字符串
        parseInt() 把一个字符串转换为一个整数
            该函数可以将一个字符串中的"有效整数值"提取出来
        parseFloat() 把一个字符串转换为一个浮点数
            该函数可以将一个字符串中的"有效浮点值"提取出来

    如果对非String使用上述两个函数
        它会先将其转换为String，然后再操作
*/
var h = "200px";
var h = parseInt(h);
console.log(typeof h);
console.log(h);

var i = "150.123px";
var i = parseFloat(i);
console.log(typeof i);
console.log(i);



// Boolean
/*
将其他的数据类型转换为Boolean
    使用Boolean()函数
    Number-->Boolean
        除了0和NaN是false，其余都是true
    String-->Boolean
        除了null是false，其余都是true
    null和undefined都会返回false
*/
var j = 123;
console.log(typeof j);
var j = Boolean(j);
console.log(typeof j);
console.log(j);
