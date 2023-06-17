//OOP 
//JS is multiparadigm language (OOP & FP). 
//Allows us to organize code in a more clear and understandable way. Easier to extend. Easier to maintain. Memory efficient. Dry. 
const elf = {
    name1: 'Chucky',
    weapon: 'bow',
    attack(){
        return elf.name1+' attack with '+elf.weapon
    }
}

console.log(elf.attack());
//encapsulation: grouping functionality together to model real world.

//factory functions: functions that creates objects for us
function createElf(name,weapon) {
    return{
    name: name,
    weapon: weapon,
    attack(){
        return name+' attack with '+weapon
    }
}
}    

const elfFunctions = {
    attack(){
        return this.name+' attack with '+this.weapon
    }
}

function createElf2(name,weapon) {
    let newElf = Object.create(elfFunctions) //creates a link between the function and the const to do prototypal inheritance and allow the sharing of functions. 
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const newelf1 = createElf('manuelito','bow')
console.log(newelf1.attack())

const newelf2 = createElf('manuelito2','knife')
console.log(newelf2.attack())

const newelf3 = createElf2('manuelito3','long sword')
console.log(newelf3.attack())


//----------
//constructor functions (every function gets the this. and arguments. parameters)
function Elfconstructor(name,weapon){
    console.log('this',this) //will only show the functionName as empty
    this.name = name;
    this.weapon = weapon;
    console.log('this',this) //will show values already created with the object

}

Elfconstructor.prototype.attack = function(){ //use prototype to add functionality to multiple objects using constructor functions. every function has it but only this constr has a use
    return this.name+' attack with '+this.weapon
}

Elfconstructor.prototype.build = function(){
    const self = this;
    function building(){
        return self.name+' builds a house';
    }
    return building()
}


const manuelito1 = new Elfconstructor('manuelito1','piedra');
const manuelito2 = new Elfconstructor('manuelito2','fuego');

console.log(manuelito1.name+ ' use '+manuelito1.weapon);
console.log(manuelito1.attack());
console.log(manuelito2.attack());
console.log(manuelito1.build());

//this 4 ways. section 104. 
//implicit binding: creating an object in a const and assigning a function to it with ths this.variable value.
//explicit binding: when we dictate exactly what the this keyword is assigned to. is using call apply or bind to explicitly tell this what to be.
//arrow functions: allows us to do lexical scoping. 

//constructor function that comes natively in JS. Allow us to use the new keyword and create the objects for us. 
const Elf1 = new Function('name','weapon',`this.name = name; this.weapon = weapon;`) //backtic alt+96
const manu1 = new Elf1('manu1','katana')
console.log(manu1)


//ES6 class
class Elf{
    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon; 
    }
    attack(){
        return this.name+' attack with '+this.weapon
    }
    build(){
        return this.name+' built a house'
    }
}

const elfmanu = new Elf('manuelf','dagger') //the new keywords runs the constructor.
console.log(elfmanu.attack()) //if we move attack (functions) to the constructor it takes memory space for each object, not efficient. instead we just instance the function to every objects we create., 
console.log(elfmanu instanceof Elf) //returns True
console.log(elfmanu.build())

//classes are still just prototypal inheritance. When JS started they wanted to create somethingt to compete with Java that was not the same. Brendan came up with prototypal inheritance. 

//inheritance means passing info down.

const elfmanu2 = {...elfmanu} //clones an object to another const. wont be related to the main class. they dont reference the same place in memory. they also dont extends the functions.
console.log(elfmanu2)

//subclassing: we inherit from a super class, properties and methods, and create something new out of it. 
class Character{
    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon; 
    }
    attack(){
        return this.name+' attack with '+this.weapon
    }
    build(){
        return this.name+' built a house'
    }
}

class Elf01 extends Character{ //inherits character and all its functions
    constructor(name,weapon, type){
        super(name,weapon); //runs/calls the superclass constructor to add more variables to the extending class.
        this.type = type
}
}

class Ogre extends Character{
    constructor(name,weapon,color){
        super(name,weapon);
        this.color = color
    }
    fort(){
        return this.name+' built a fort'
    }
}

const manuelf = new Elf01('manuelf01','dagger','woodland');
console.log(manuelf);

const ogre = new Ogre('Shrek','punch','green');
console.log(ogre);
console.log(ogre.fort());

//in JS classes are just objects that inherit from other objects

//As of ES2022, we now have a feature that we are going to talk about in the next video: Private Class Field + Methods. 
//see if you can now officially use it in JavaScript by trying it on the latest version of the Chrome browser (inside the console tab). It should work!
/*
class Employee {
    #name = "Test"; // private field
    setName(name) {
        this.#name = name;
    }
}
const emp = new Employee();
emp.#name = 'New'; // error
emp.setName('New'); // ok


class Employee {
    #name = "Test";
    constructor(name) {
        this.#setName(name) // ok
    }
    #setName(name) { // Private method
        this.#name = name;
    }
}
const emp = new Employee('New'); // ok
emp.#setName('New'); // error
*/

//before we used "private classes" to _beforemethod() to let know a class was private and shouldnt be messed with. 

//PILLARS:
//Encapsulation // Abstraction // Inheritance // Polymorphism 


  //Polymorphism--

  //Extend the Character class to have a Queen class. The output of the below code should be:
  class Queen extends Character{
    constructor(name,weapon,type){
        super(name,weapon);
        this.type = type;
    }
    attack(){
        //to return as the superclass
        console.log(super.attack());
        //to return an additional string
        return 'I am the '+this.name+' of '+this.type;
    }
  }
  const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'
  console.log(victoria.attack()); // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
  
//-------------------------------------------------
//Functional Programming: Major programming paradigm. 
//
//pure functions: a function has to always return the same input and cannot modify anything outside themselves. 
//bunch of small reusable pure functions
//idempotence: always does/returns what is expected to be returned.
//imperative (tell how to do it) vs declarative (tell what to do)
//immutability: not changing the base memory but creating a copy to edit as a new object/variable. 
//HOF and Closures. 
//currying: expects one argument at the time.
const curriedMultiply = (a)=>(b)=>a*b;
console.log(curriedMultiply(3)(8));
const curriedMultiply3 = (a)=>(b)=>(c)=>a*b*c;
console.log(curriedMultiply3(3)(8)(10));
//High order function
const curriedMultiplyby10 = curriedMultiply(10);
console.log(curriedMultiplyby10(9));
//Partial application: similar to currying but allows to partially apply parameters. On the second call all the arguments are expected.
const multiply = (a,b,c) => a*b*c;
const partialMultiplyBy10 = multiply.bind(null,10) //null because its not binding other function, instead only an argument
console.log(partialMultiplyBy10(5,4));

//caching: way to store values to use later on. analogy: backpack. 
//memoization: is a form of caching the results of a function to reuse them instead of running the whole function statement from scratch.
let cache = {};
function memoizedAddToX(n){
    if(n in cache){//checks if cache is empty or it already has the existing process
        return cache[n];
    }else{
        console.log('first time');
        var X = 10;
        cache[n] = n + X;
        return cache[n];
    }
}
console.log('X1',memoizedAddToX(5));
console.log('X2',memoizedAddToX(5));
console.log('X3',memoizedAddToX(10));

//using closures for the cache to be within the function
function memoizedAddToY(){
    let cache = {};
    return function(n){ //has access to cache due to closures
    if(n in cache){//checks if cache is empty or it already has the existing process
        return cache[n];
    }else{
        console.log('first time');
        var X = 10;
        cache[n] = n + X;
        return cache[n];
    }
}
}
const memoizedY = memoizedAddToY(); 
console.log('Y1',memoizedY(5));
console.log('Y2',memoizedY(5));
console.log('Y3',memoizedY(10));

//compose: small pieces to create something bigger. allows to move use functions together and move around based on the user requirements. 
//nota: valor absoluto: remover el valor negativo ||
const compose = (f,g) => (data) => f(g(data)); //will apply "g" first, which corresponds to makePositive in compose's order.
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3,makePositive); // (f,g)
console.log(multiplyBy3AndAbsolute(-100));
//pipe is the same thing but it goes left to right instead. 
const pipe = (f,g) => (data) => g(f(data)); //
const multiplyby3 = (num) => num*3;
const makepositive = (num) => Math.abs(num);
const multiplyBy3Absolute = pipe(multiplyBy3,makePositive);
console.log(multiplyBy3Absolute(-200));
//arity: is the quantity of arguments that a function receives. 

//OOP: define what it is: properties, methods, inheritance w/ classes.
//tight coupling / fragile base class problem : changes eventually may create issues where the code needs to be refactored or where the code repeats itself.

//FP/Composition: define what it has: functions based on what it does and that may be easily reused. 

//programming paradigms: writing certain code by following a certain set of rules. OOP - FP 

//a program needs to be able to : allocate memory & parse and execute (Read and Run commands)
//engine consists of memory heap (memory allocated) & call stack (where you are in the program)
//memory leaks: unused memory that lingers around which fills up the memory heap
//single threaded means it only has one call stack. why? no issues such as deadlocks. 
//synchronous programming: gets executed in line. can get slow.
//callstack overflow is when the call stack runs out of space (i.e w/ recursion: function self called)
//asynchronous programming: allows to run a function while the program is still running. 
//call stack (only until its done then it runs => web api, call back queue & the event loop). A setTimeout at 0s will only run after the call stack is completed, ie. 
//promises: fetch function,ie. .then() / give a response based on a result. 
//parallel promising: run all parallel; sequencial: depend on each other; race
//async function functionName(){}
//.finally() will be called after a promise is completed
//job queue 
//Promise.all() 
//Promise.allSettled() 
//Promise.any() : resolves if any of the supplied promises is resolved
////parallel promising: run all parallel; sequencial: depend on each other; race
const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
//all at the same time
async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}
//whichever is faster
async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}
//one after the other
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log) //wins because its whoever resolves first

//promise.any()
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
  });
//Out of p1, p2 and p3, whichever resolves first is taken by Promise.any().
  (async function () {
    const result = await Promise.any([p1, p2, p3]);
    console.log(result); // Prints "A", "B" or "C"
  })();

//node.js: web worker is a js program running on a different thread.
//modules: pieces of code to make large applications. give us a better way to organize variables and functions. 
//Math.floor makes the numb an integer. 

var harry = 'potter'
var voldemort = 'voldemort'
function fight(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}
console.log(fight(harry, voldemort)); 

//global scrope => module scope => function scope => block scope - let and const
//The Module pattern is used to mimic the concept of classes (since JavaScript doesn't natively support classes) 
//so that we can store both public and private methods and variables inside a single object — 
//similar to how classes are used in other programming languages like Java or Python.
//revealing Module pattern (show only what you want to reveal to the public, ie, in html scripts)
var fightModule = (function(){
var harry = 'potter'
var voldemort = 'voldemort'
function fight(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}
return{
    fight: fight
}
})();
//variables and function fight is no longer global scoped because they are inside a module (emulating classes)
console.log(fightModule.fight('manu','manu2'));

//ES6 Modules
const harry3 = 'potter3'
const voldemort3 = 'voldemort3'
/*export default function fight2(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}*/
//console.log(fight2(harry3, voldemort3)); 

//throw : stops the program with whatever is sent to the program. usually for catching an error
//try catch : only for synchronouos code

/* function tryCatch(){
    try{
        testing();
    }catch{
        throw 'test aprobado' //funciona
    }
}
*/

//console.log(tryCatch());

Promise.resolve('asyncfail')
    .then(response => {
        console.log(response)
        throw new Error('#1 fail')
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.error('error', err.message)
    })
    .then(response => {
        console.log('hi am I still needed?', response)
        return 'done'
    })
    .catch(err => {
        console.error(err)
        return 'failed'
    });

    //try catch with async function immediately invoked functions. can be used because of the await 
    (async function() {
        try {
            await Promise.reject('oopsie')
        } catch (err) {
            console.error(err)
        }
    
        console.log('This is still good!')
    })();



    (function () {
        try {
          throw new Error();
        } catch (err) {
          var err = 5;
          var boo = 10;
          console.log(err);
        }
        //Guess what the output is here:
        console.log(err);
        console.log(boo);
      })();

//Data Structures: code should be fast, readable and memory efficient
//they are way to store information. 
//DS: arrays,stacks,queues,linked lists,trees,tries,graphs,hash tables.
//Algorithms: sorting, dynamic programming, bfs+dfs(searching),recursion

//arrays (lists): lookup, push, insert, delete


















