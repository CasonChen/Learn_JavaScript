/*
赋值运算符
    += 等价于a = a + x
    -= 等价于a = a - x
    *= 等价于a = a * x
    /= 等价于a = a / x
    %= 等价于a = a % x
*/




/*
关系运算符
    可以比较两个值之间的大小关系
        如果关系成立，则返回true；
        如果关系不成立，则返回false。
    > 大于号
    >= 大于等于号
    < 小于号
    <= 小于等于号
*/
var result = 5 > 10;
console.log(result);
// 返回false
var result = 5 > 4;
console.log(result);
// 返回true

// 非数值的情况下，会先转换为Number，然后再进行比较
console.log(1 > "0");
// 返回true

// 若符号两侧的值都是字符串时，则不会将其转为Number进行比较，而是会分别比较字符串中字符的Unicode编码
console.log("a" > "b");
// 返回false，因为a的编码是97，b的编码是98




/*
==
相等运算符用来比较两个值是否相等
    如果相等则会返回true，否则返回false
*/
console.log(1 == 1);
// 返回true

// 如果两个值的类型不同，则会自动进行类型转换，将其转换为相同的类型
console.log("1" == 1);
// 返回true

// isNaN()函数是来判断一个值是否为NaN
var result = NaN;
console.log(isNaN(result));

/*
!=
不相等，跟上面道理差不多
*/
console.log(10 != 5);

/*
===
全等，用来判断是否完全相等，并不会进行自动转换
    如两个值不同，则直接返回false
*/
console.log("123" === 123);
// 返回false

/*
!==
不全等，和不等类似，不同的是不会进行自动类型转换
    如两个值不同，则直接返回true
*/
console.log("345" !== 345);
// 返回true




/*
条件运算符
    又称为三元运算符
    语法：条件表达式 ? 语句1 : 语句2;
执行的流程：
    首先对条件表达式进行求值，如果该值为true，则执行语句1，相反则执行语句2
*/
var a = 10;
var b = 5;
var c = 15;
console.log(a > b ? console.log("a is bigger") : console.log("b is bigger"));
// 获取a和b中的最大值
var max = a > b ? a : b;
console.log(max);
// 获取a、b和c中的最大值
// 下面这句话不要使用，不便于阅读
var max = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(max);




/*
,运算符(就是个",")
    可以分割多个语句，一般可以在声明多个变量时使用
*/
var m = 5, n = 10, q = 15;
console.log(n);

/*
运算符的优先级
    在js中有一个运算符优先级的表
        在表上越靠上优先级越高，优先级越高越优先计算
我们可以通过()来改变优先级
*/