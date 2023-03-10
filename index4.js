
//Data Structures: code should be fast, readable and memory efficient
//they are way to store information. 
//DS: arrays,stacks,queues,linked lists,trees,tries,graphs,hash tables.
//Algorithms: sorting, dynamic programming, bfs+dfs(searching),recursion

//arrays (lists): lookup, push, insert, delete


const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push -appends to the end of the array
strings.push('e'); 

//pop - removes the last element of the array
strings.pop();
strings.pop();

//unshift - element to insert at the beginning of the array
strings.unshift('x')

//splice- first number is where it inserts in the array, second number is how many it will delete, third is the value to insert. 
strings.splice(2, 0, 'alien');

console.log(strings)


class MyArray {
    constructor() {
      this.length = 0; //length of the array
      this.data = {}; //data of the array
    }
    get(index) { //gets by index or id
      return this.data[index];
    } //
    push(item) { //add by index length 
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() { 
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    deleteAtIndex(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    shiftItems(index) { //shifts all items one to the left, starting from the index that got deleted. 
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      console.log(this.data[this.length - 1]); //deletes the last item in the array which remained full after shifting items to the left
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  const myArray = new MyArray();
  myArray.push('hi');
  myArray.push('you');
  myArray.push('!');
  myArray.pop();
  myArray.deleteAtIndex(0);
  myArray.push('are');
  myArray.push('nice');
  myArray.shiftItems(0);
  console.log(myArray);
  i=0;
  for(item in myArray){
  console.log(myArray[i]);
  i++;
  }

//reverse string function
//changes the order of a string and validates that it is a string with more than 2 chars
function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){ //iterates for the length of the string until 0 and pushes all chars into a new array "backwards"
      backwards.push(str[i]);
    }
    return backwards.join('');
  }
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }
  
  const reverse3 = str => [...str].reverse().join('');
  
  console.log(reverse('Timbits Hi1'));
  console.log(reverse2('Timbits Hi2'));
  console.log(reverse3('Timbits Hi3'));


//merge already sorted arrays
function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  
  console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));

//when to use arrays
//fast lookups, fast push/pop, ordered
//slow inserts, slow deleted, fixed size with static arrays.

//hash tables : similar to dictionaries in python 
///hash function : receives an input an generates a random pattern 
//no need to move indexes
//we can have functions, objects, arrays as values of keys. 
let user = {
    age:54,
    name:'Kyle',
    magic: true,
    scream: function(){
        console.log('Ah!');
    }
}

console.log(user.age);
user.spell = 'abra kadabra';
console.log(user.spell);
console.log(user);
//Map --> Gives you some order
//Set --> No duplicate keys

class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }
    
    keys(){
      const keysArray = [];
      console.log(this.data.length);
      for (let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          keysArray.push(this.data[i][0][0])
        }
      }
      return keysArray;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  console.log(myHashTable.keys());


//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if(input[i] === input[j]) {
          return input[i];
        }
      }
    }
    return undefined
  }
  
  function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) {
        return input[i]
      } else {
        map[input[i]] = i;
      }
    }
    return undefined
  }
  
  console.log(firstRecurringCharacter2([1,5,5,1,3,4,6]));
  
  
  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2







  












