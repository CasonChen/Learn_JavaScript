/*
练习要求：
    从键盘输入小明的期末成绩:
    当成绩为100时，'奖励一辆BMW'
    当成绩为[80-99]时，'奖励一台iphone15s'
    当成绩为[60-80]时，'奖励一本参考书'
    其他时，什么奖励也没有

小提示：
    prompt()可以弹出一个提示框，该提示框中会带有一个文本框，
    用户可以在文本框中输入一段内容，该函数需要一个字符串作为参数，
    该字符串将会作为提示框的提示文字
    用户输入的内容将会作为函数的返回值返回，可以定义一个变量来接收该内容
 */

var getGrade = prompt("Please enter your grade");

// 检验分数是否合法
// 利用isNaN()来判断成绩是否为数组
if (getGrade > 100 || getGrade < 0 || isNaN(getGrade)) {
    alert("The grade is invalid");
} else {
    if (getGrade == 100) {
        alert("You got a new BMW car");
    } else if (getGrade >= 80 && getGrade <= 99) {
        alert("You got a iPhone 14 Pro Max");
    } else if (getGrade >= 60 && getGrade < 80) {
        alert("You got a GuideBook");
    } else {
        alert("Young man, you got nothing");
    }
}