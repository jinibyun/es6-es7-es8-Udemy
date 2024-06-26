/* globla scope */
// ES5 and before, there is only one scope other than global... function scope
// "use strict";
// i = 1;
// console.log(i);

// for(i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log("Value after loop: ",i); // i is "still" accessible because it is global scope




/* HOISTING */
// means that all vars will be hoisted, or moved to the top of their scope
// var sum = 1;

// function sum_numbers(a,b){
//     console.log("Expect 1 (parent sum): ", sum); //get undefined
    
//     var sum = a + b; // we need to avoid confusion ...
//     console.log("Expect 5 from 2+3 (a and b): ", sum); 
// }
// sum_numbers(3,5);
// console.log("Expect 5 from child ", sum);




/* let: no longer needs to be hoisted. block level variable declaration */
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log("What's i? ",i);

// for(var i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log("What's i? ",i);




/* const */
// const isn't really immutable
// generally use const if you can. It will prevent unexpected behavior because JS will try and protect your state
// JS is single-threaded, so we don't have to deal with multiple processes as teh same time, but it still gets really 
// difficult to troubleshoot. It's a primary reason why constants are so important
const z = 2;
// z = 3; // Syntax Error
const arr = [1,2,3,4];

console.log("Before: ",arr); 
// arr = [4,5,6,7,8,9]; // you cannot bind "something" new
arr.push(5); // note: however, we are not chaingign  "something" new. Instead we add to existing one.
console.log("After: ",arr);

const obj = {
    name:"Rob",
    career: "Teacher"
}

obj.gender = "male";// note: however, we are not chaingign  "something" new. Instead we add to existing one.
console.log(obj);
