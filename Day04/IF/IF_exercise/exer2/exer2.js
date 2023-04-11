/*
练习要求：
    大家都知道，男大当婚，女大当嫁。那么女方家长要嫁女儿，当然要提出一定的条件：
    高：180cm以上; 富:1000万以上; 帅:500以上;
    如果这三个条件同时满足，则:'我一定要嫁给他'
    如果三个条件有为真的情况，则:'嫁吧，比上不足，比下有余。'
    如果三个条件都不满足，则:'不嫁！'
 */

var getHeight = prompt("Please enter your height");
var getWealth = prompt("Please enter your wealth");
var getHandsome = prompt("Please enter your handsome");

if (getHeight > 180 && getWealth > 1000 && getHandsome > 500) {
    alert("我一定要嫁给他");
} else if (getHeight > 180 || getWealth > 1000 || getHandsome > 500) {
    alert("嫁吧，比上不足，比下有余。");
} else {
    alert("不嫁！");
}