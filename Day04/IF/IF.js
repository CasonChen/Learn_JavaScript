/*
语句的分类
    1.条件判断语句
    2.条件分支语句
    3.循环语句
*/
/*
1.条件判断语句
    if
    语法：
        1.  if(条件表达式){
                语句
            }
        if语句只能控制紧随其后的那个语句，若想控制后面的多条语句，那就将其放到一个code block里
        2.  if(条件表达式){
                语句
            }else{
                语句
            }
        3.  if(条件表达式){
                语句
            }else if{
                语句
            }else{
                语句
            }
*/
var a = 10, b = 20;
if (a < b)
    console.log("b is bigger");

var m = 10, n = 20;
if (m < n) {
    console.log("n is bigger");
    console.log("m is smaller");
}

if (a == n) {
    console.log("equal");
} else {
    console.log("unequal");
}

var age = 50;
if (age > 17 && age <= 30) {
    console.log("young");
} else if (age < 40 && age > 30) {
    console.log("mid-age");
} else {
    console.log("old guy");
}