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














