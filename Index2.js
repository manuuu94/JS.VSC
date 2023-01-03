const number = 610;
console.log(number);

function calculate(){
    const sumTotal  = 4*5;
    return console.log(sumTotal);
}

calculate();

//insert into arrays
let array = []
for (let i = 0;i < 5;i++){
    array.push(i+1);
    console.log(array[i]);
}

function test(){ //liveserver w/ html
    alert('hi');
}

//WebApi async DOM Fetch() setTimeOut()
console.log('1');
setTimeout(()=> {console.log('2'),0}); //even at 0, it will print later because it uses the webapi everytime settimeout is used.
console.log('3');


//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        console.log(item);
        //this will prevent the stack overflow but is super slow. Each .pop() is synchronously called via the setTimeout
        setTimeout(removeItemsFromList,0);
    }
};
//removeItemsFromList();

function printname(){
    console.log('manu');
}
function callprintname(){
    return printname();
}
function callthecall(){
    return callprintname();
}
callthecall();

//hoisting: allocates memory for the variables and functions during the creation phase before it executes it. as soon as it sees "var" or "function" it allocates memory for it. 
//is not the same for a function as for a variable. For a variable the position matters or it will be "undefined" if printed (console.log())

//function declaration start with the function keyword: function namefunction(){} 
//function expression is a var equalized to a function: var namefunction = function(){}
//function: invocation/call/execution

function persons(person1,person2){
    console.log(arguments); //arguments object - not recommended
    console.log(Array.from(arguments)); //create array from arguments
    console.log(person1,person2);
}
persons('manu','manu2'); 

//scope chain links to variables environments
//Lexical scope (available data + variables where the function was defined) determines our available variables. 
//Not where the function is called (which is dynamic scope). 
//

function loop(){
    for(var i=0;i<6;i++){
        console.log(i);
    }
}
loop();
//scoping means declaring a variable not only in a function, but in defined loops, brackets too, etc {}
//IIFE immediately invoked function expression.

//this: this is the object that the function is property of.

const obj = {
    name: 'manu',
    intro: function(){ //function within an object
        return 'hello my name is '+ this.name //this point to the same object in this case function "obj" and its variables
    }
}
console.log(obj.intro())

//Arrow functions: they allow to lexicaly scope functions within an object. instead of using function()
//call():calls a function. apply():same thing. bind(): binds objects to a subfunction. 
//call and apply are also used to borrow methods. Substitutes and object for another in the (). 
//call can take parameters , separated, and apply an array to pass arguments
const wizard = {
    name: 'Merlin',
    health: 50,
    heal(){
        return this.health = 100;
    }
}
const archer = {
    name: 'Robin',
    health: 30
}
console.log('1',archer)
wizard.heal.call(archer) //substitued the object and applied the function to "archer"
console.log('2',archer)

//bind() allows us to store the this keyword or function borrowing for later use with a variable

//function currying
function multiply(a,b){
    return a*b
}
let multiplyByTwo = multiply.bind(this,2)
console.log(multiplyByTwo(4))
let multiplyBy4 = multiply.bind(this,4)
console.log(multiplyBy4(4))

const array2 = [1,2,3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr){
  return Math.max.apply(null, arr);  
}

console.log(getMaxNumber(array2))



const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  //using bind to return the character instead of undefined
  //const giveMeTheCharacterNOW = character.getCharacter
  const giveMeTheCharacterNOW = character.getCharacter.bind(character);
   
  console.log(character.getCharacter)
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't


//static and dynamic languages
//typeof: numbers, boolean,string,undefined,null,symbol('me),{}
//primitive type: data that only represents a single values. no ambiguity. 
//.isArray() to determine if something is an array
//immutable: cant be changed, to change it you have to remove it from memory first. 
//

lista = [1,2,3,5]
lista.push(4)
console.log(lista)
//
const number2 = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;

function change(number2, string, obj1, obj2) {
    number2 = number2 * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}
change(number2, string, obj1, obj2);
//Guess the outputs here before you run the code: 
console.log(number2); 
console.log(string);
console.log(obj1.value);

//type coercion means the language inserting a type to another type. all languages have this because different types need to be converted at all times. 
//JS is dyanmically typed. 
//statically typed languages: means you have to specify the type of language. less bugs. 
//dynamically languages: you are not bound to specific type. 
//typescript allows js to behave like a statically typed language: (flow) babel compiler, TS (tries to mimic JS), RE ML. TypeScript outweighs all of them. 
//function is an object. is callable object. call apply bind. 
//functions can be assigned to a variable or an object property, which then becomes a method. 
//pass arguments to a function and make it receive another function. return functions, etc. first class citizen. 
//higher order functions: sending a function within a parameter into another function. It can be sent with another argument or variable too. 

//high order functions, because it returns another function. 
const multiplyBy = function(num1){
    return function(num2){
        return num1*num2;
    }
}
//arrow functions to replace the functions:
const multiplyBy_arrow = (num1) => (num2) => num1*num2;
console.log(multiplyBy_arrow(5)(5));

const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(8));
const multiplyBy5 = multiplyBy(5);
console.log(multiplyBy5(8));

const multiplyBy10 = multiplyBy(10);
console.log(multiplyBy10(10));

//close 2 main benefits: memory efficient & encapsulation. 

function bigArray(){
    const arr = new Array(100).fill('manu');
    return arr;
}
console.log(bigArray());
//access array with index
function bigArrayIndex(index){
    const arr = new Array(100).fill('manu');
    return arr[index];
}
console.log(bigArrayIndex(2));

//let allows us to use block scoping. Var makes it part of the global scope and does not wait for the settimeout
const array3 = [1,2,3,4];
for(let i=0;i<array3.length;i++){
        setTimeout(function()
        {
        console.log('I am index'+ array3[i])
        },3000)
}
//convoluted : hard to follow;complex

//prototypal inheritance: inherits through a prototype chain, all the method and properties from a different object to use them in a new object
let dragon = {
    name: 'Dragus',
    fire:true,
    fight(){
        return 5
    },
    sing(){
        if(this.fire){
            return 'I am '+this.name+', heheps'
        }
    }
}
//show the properties
for(let prop in dragon){
    console.log(prop)
}
let lizard = {
    name: 'lizi',
    fight(){
        return 1
    }
}
//prototypal inheritance : not recommended
lizard.__proto__ = dragon;
console.log(lizard.sing());


//inherit from an object
let human = {
    mortal:true
}
//inherits mortal from human (true) - instead of using __proto__ 
let manuelito = Object.create(human)
console.log(manuelito.mortal)

//adding a last year method / wouldnt work withb => instead of function becuase itd be lexically scoped, instead of dynamically. 
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
console.log(new Date().lastYear())

//prototype also allows modifying existing methods. 
Array.prototype.map = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++){
        arr.push((this[i]+"Jejeps"))
    }
    return arr
}
console.log([1,2,3].map())

//How would you be able to create your own .bind() method using call or apply.
Function.prototype.bind = function(whoIsCallingMe){
    const self = this;
    return function(){
      return self.apply(whoIsCallingMe, arguments);
    };
  }









