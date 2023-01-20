//JS intermediate ++
//root scope (window) vs child scope

var testVar = 5; //root scope
function testFunction(){
    console.log(testVar);
};
testFunction();

function test2Function(){
    //child scope
    var testVar = 10;
    console.log(testVar);
}
function test3Function(){
    //child scope
    var testVar = 15;
    console.log(testVar);
}
test2Function();
test3Function();
console.log(testVar);

//advanced condition
console.log((5>1)?"5 is higher":"5 is lower"); //if true it prints the first value

var result = (5>10)?"5 is higher":"5 is lower"; //if false it prints the second value
console.log(result);

function trueOrFalse(bool){
    return bool;
}
var result2 = trueOrFalse(false)? "Enter":"Do not enter";
console.log(result2);

//switch
function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case "forward":
            whatHappens = "Moved forward";
            break; //break says finish here. 
        case "back":
            whatHappens = "Moved back";
            break;
        case "left":
            whatHappens = "Moved left";
            break;
        default:
            whatHappens = "Enter valid value";
    }
    return whatHappens;
}
console.log(moveCommand("123"));

//EcmaScript (ie. ES6) reusable code in JS : ECMA international, so when browsers apply what JS should do, they all agree on the same standard. 

//Babel : is a javascript compiler. 
var sum = (a,b) => a+b;
console.log(sum(5,6));

// var vs let 
let experience = 100;
var wizardlevel = false;
if(experience > 90){
    var wizardlevel = true;
    console.log("inside", wizardlevel); //will print true because we are using VAR
}
console.log("outside",wizardlevel); //will print true 

let wizardlevel2 = false;
if(experience > 90){
    let wizardlevel2 = true;
    console.log("inside", wizardlevel2); //true
}
console.log("outside",wizardlevel2); //false because we are using LET

//recommendation: stop using VAR and start using LET. 

//const : if you want a variable not to change its value. it will constantly be the same value as it was first given. 
/* const z = "hola";
z = "adios"; //TypeError: Assignment to constant variable. */

//template strings with backticks
let nam = "manu";
console.log(`Hello ${nam}, how are you?`);

//symbols : allow to assign unique values to a LET, even though they are the "same"

//arrow functions
function add(a,b){
    return a+b;
}

const add2 = (a,b) => a+b; //ARROW FUNCTION

console.log(add(5,10));
console.log(add2(4,4));

//closures : function that uses a high order function variables
//currying : function within a fucntion that accepts one parameter at the time. allows to combine parameters or static one too
const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(10));

//compose : combines functions to apply to a variable : reads right to left
const compose = (f,g) => (a) => f(g(a));
const sum2 = (num) => num + 1;
let total = compose(sum2,sum2)(10);
console.log(total); //should print 12

//pipe : reads left to right

//functional purity : receives and returns the same process every time.

//arrays 
//foreach iterates an array
const array = [1,2,4,5,7];
const array2 = [];
const newArray = array.forEach((num) => {
    array2.push(num*3);
});
console.log("forEach ",array2);

//map (transforms/clones and creates a new array)
const arrayMap = array.map((num) => {
    return num * 3;
});
const arrayMap2 = array.map(num => num * 3);

console.log("map1 ",arrayMap);
console.log("map2 ",arrayMap2);

//filter (only shows the values that comply with the condition)

const arrayFilter = array.filter(num => num>3);
console.log("arrayFilter ",arrayFilter);

//reduce ()
const arrayReduce = array.reduce((accumulator,num)=>{
    return accumulator + num; //decide what to do with the additional value "accumulator"
}, 20); //enter the accumulator's value
console.log("arrayReduce total: ",arrayReduce); //sums the value and adds the accumulator

//advanced object concepts
//reference type
//instantiation : reusing the code / object - create a class to copy an object
class Player {
    constructor(name,type){ //creates the properties on the player object. 
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log("Hi, I am "+this.name+" my type is "+this.type);
    }
}

//if we extend we have to call the prev constructor with SUPER
class Wizard extends Player{
    constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(this.name+" plays ataque "+this.type);
    }
}

const wizard1 = new Wizard('manumago','oscuro');
wizard1.play();
wizard1.introduce();

//.include(); to return a boolean wether a value is included in a variable or array
//.padStart(X); will add spaces in front of a string
//.padEnd(X); will add spaces to the end of a string

//object.values .entries .keys
let obj = {
    key1 : "manu1",
    key2 : "manu2",
    key3 : "manu3"
}
Object.keys(obj).forEach((key,index) =>{ //iterates through the keys showing both key and index value
    console.log(key,obj[key]);
});

Object.values(obj).forEach(value => { //iterates only through the values of each key
    console.log(value);
})

Object.entries(obj).forEach(value => { //iterates through the values and their key
    console.log(value);
})


//array.flat() will remove the nested arrays and show it all as a single flat array () layers to remove
const array4 = [1,[2,3],[4,5]];
console.log(array4.flat());

const array5 = [1,[2,3],[4,5,[6,7]]];
console.log(array5.flat());
console.log(array5.flat(2));

//.flatMap() both map and then flat (depth of 1)

const array6 = array4.flatMap(num => num *3);
console.log(array6);

//.trimStart() will remove spaces at the start of a string
//.trimEnd() will remove spaces a the end of a string

//formEntries transforms key value pairs into objects Object.fromEntries()

//try catch(error) : variable "error" displays the actual error

//for of loop X of array/object/string
for(item of array){
    console.log(item);
}
let cadena = "cadena";
for(letra in cadena){
    console.log(cadena[letra]);
}
//for in loop object : enumerates properties of an object
const detailedBasket = {
    apples:5,
    oranges:19
}
for(item in detailedBasket){
    console.log(item);
    console.log(detailedBasket[item]);
}


//MAX_SAFE_INTEGER = 9 quadrillion (solved by big int)
/* console.log(number.MAX_SAFE_INTEGER);
 */

//Optional Chaining Operator 222

//Nullish Coalescing Operator : 223

//globalThis = browser window

//replaceAll(x,y) replaces the strings of a string
const str = "manu es el mejor";
const str2 = str.replace('mejor','mucho mejor');
console.log(str2);














