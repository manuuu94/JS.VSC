//JS basics
//Types:
//number,string,boolean,undefined,null,symbol,object
// % (modulo) in arithmethic gives me the remainder of a division

//JS Comparisons: 
// <!-- !== === <= >= < > -->
console.log(3 === 3); //returns TRUE - boolean

//var : variable : used to store
var nombre = "manu3";
console.log(nombre);
//camel case is capitalizing the second first letter : camelCase

//prompt() is the comparable to JOptionPane / use in browser console for it to work
/*
var number = prompt("Enter a number!");
console.log(number);
alert("the number is "+number)
*/

//alert() will do a pop up
//

//conditionals: if, else, else if, ternary operator, switch
if(nombre === "manu"){
    console.log("Hello "+nombre);
}else if(nombre === "manu2"){
    console.log("Hi "+nombre);
}else{
    console.log("I don't know you!")
}

//JS Logical Operators: && || !
// () next to the function is what executes it. 

//ways to write a function in JS
//function declaration
function sayHello(){
    console.log("hello!");
}
sayHello();

//function expression
var sayHello2 = function(){ //anonymous function which is just assigned to a variable
    console.log("hello 2!");
}
sayHello2();

var sayHello3 = function hello2(){ //anonymous function which is just assigned to a variable
    console.log("hello 3!");
}
sayHello3();

//DRY : do not repeat yourself. Do things as efficient as possible. 

//using arguments
function sing(song){
    console.log(song);
}
sing("hihihihi");
sing("hohohoho");

//as soon as return is used a function will exit
function multiply(a,b){
    return a*b;
}
var total = multiply(4,5);
alert(total);

//arrays : way to organize information
var list = ["num1","num2","num3","a"];
console.log(list[0]);

//array within array
var list2 = [["num1","num2","num3"]];
console.log(list[0]);
console.log(list2)
console.log(list2[0][1]);
//shift(),pop(),push(),concat()
console.log(list.concat());
console.log(list.sort());

//Objects
var user = {
    name: "manu",
    age: 28,
    hobby: "coding",
    isMarried: false,
    attacks: ["punch","double kick"],
    shout: function(){
        console.log("HAHA!");
    }
};
console.log(user);
user.favFood = "pizza";
console.log(user.favFood);
console.log(user);
user.shout();

//expression: something that produces a value

//loops

















