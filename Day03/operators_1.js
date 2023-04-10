/*
运算符也可以叫操作符
    比如，typeof就算是一个运算符，可以来获得一个值的类型
今天学习算数运算符
    + 加号
    - 减号
    * 乘号
    / 除号
    % 取余
*/

/*
一元运算符，只需要一个操作数
    + 正号
        正号不会对数字产生任何影响
    - 负号
        负号可以对数字进行符号取反
*/
var a = true;
// 对于非Number类型的值,会先转换为Number，然后再运算
a = -a;
console.log(typeof a);
console.log(a);

// 自增自减
/*
自增
    通过自增可以使变量在自身的基础上增加1
    运算符为++
    对于一个变量自增以后，原变量的值会立即自增1
    自增分成两种：
        前++(++a)、后++(a++)
            这两种都会立即使原变量的值自增1
                不同的是a++和++a的值不同
        a++的值等于原变量的值（自增前的值）
        ++a的值等于原变量自增后的值（自增后的值）
自减
    与自增的原理一样
*/
var b = 1;
b++;
console.log(b);
++b;
console.log(b);

// Exercise
var n1 = 10, n2 = 20;
var n = n1++;
console.log('n=' + n);
console.log('n1=' + n1);

n = ++n1;
console.log('n=' + n);
console.log('n1=' + n1);

n = n2--;
console.log('n=' + n);
console.log('n2=' + n2);

n = --n2;
console.log('n=' + n);
console.log('n2=' + n2);

// 逻辑运算符
/*
js中为我们提供了三种逻辑运算符
    ! 非
        !可以用来对一个之进行非运算
            所谓非运算就是指对一个布尔值进行取反操作
                true变false，false变true
            如果对一个值进行两次取反，它不会变化
            如果对一个非Boolean值进行非运算，它会先转化成Boolean，然后再取反
        我们可以对任意一个元素进行两次取反，来将其转换为Boolean，原理和Boolean()一样
    && 与
        &&可以对符号两侧的值进行运算并返回结果
            属于短路的与
                若第一个值为false，则不会看第二个值
    || 或
        可以对符号两侧的值进行或运算并返回结果
        运算规则：
            两个值中只要有一个true就返回true，若两个值都为false才返回false
*/
// !
var m = true;
console.log('m=' + m);
m = !m;
console.log('m=' + m);

// &&
var result = true && false;
console.log(result);
// 返回false
// 只要有一个false，就返回false
result = true && true;
console.log(result);
// 只有两个值都为true时，才会返回true

// ||
result = true || false;
console.log(result);
result = false || true;
console.log(result);
result = false || false;
console.log(result);
// 只要有一个true就会返回true

// 非Boolean值的与或运算
/*
对于非Boolean值进行与或运算时，会先将其转换为Boolean值，然后再运算
    如果两个值都是true，则返回后边的
    如果有false，则返回false
    如果两个值都是false，则返回前边的
    如果第一个值为true，则必然返回第二个值
    如果第一个值为false，则直接返回第一个值 
*/
// &&与
var result = 1 && 2;
console.log("result=" + result);
// 1和2都是true，结果会返回2

result = 0 && 2;
console.log("result=" + result);
// 0是false，2是true，但还是会返回0

result = NaN && 0;
console.log("result=" + result);
// 两个都是false，但返回的是NaN

// ||或
// true||true
result = 2 || 1;
console.log(result);
result = 4 || NaN;
console.log(result);
// 如果第一个值为true，则直接返回第一个值

result = NaN || 1;
console.log(result);
// 如果第一个值为false，则直接返回第二个值

result = "" || "hello";
console.log(result);

result = -1 || "hello";
console.log(result);

