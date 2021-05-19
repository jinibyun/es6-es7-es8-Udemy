// ! Array.prototype.fill()

const arr1 =[2,4,5,"a",17,"r",9,9];
// args
// 1. Value you want to fill in
// 2. starting index
// 3. stopping index

//1
// arr1.fill("b", 1); // mutate an array
// console.log(arr1);

// const arr2 = [1,2,3,4];
// console.log(arr2.slice(1,3)); // slice is different from fill: slice does "not" mutate, but fill does "mutate"
// console.log(arr2);


// 2
const arr2 = [2,4,5,"a",17,"r",9,9];
arr2.fill("c",-3);
console.log(arr2);


// 3
// similar to splice... (not slice). It is acutally mutate
let discountMonths = ['Jan','Feb','April','Nov'];
// 1. Where to start
// 2. how many to delete
// 3. What to insert
discountMonths.splice(3,0,'August','August','August');
console.log(discountMonths);