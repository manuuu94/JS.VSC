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

