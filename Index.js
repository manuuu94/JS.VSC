//OOP 
//JS is multiparadigm language (OOP & FP). 
//Allows us to organize code in a more clear and understandable way. Easier to extend. Easier to maintain. Memory efficient. Dry. 
const elf = {
    name1: 'Orwell',
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









