// ! value and reference
// primitives and objects
// six different primitive type: string, number, boolean, null, undefined and symbol

// 1. primitive: immutable
// let str = `Popeye`;
// let name = str; // copy value 
// str = `Oliver oil`;
// console.log(name);

// 2. object: mutable
let obj = {
	name : `popeye`
}
let cartoon = obj;
console.log(obj);
console.log(cartoon);
cartoon.girlfriend = `Olive Oil`;
console.log(obj);
console.log(cartoon);


let arr = [1, 2, 3]; // array is object
let arr2 = arr;
arr2.push(4);
console.log(arr);