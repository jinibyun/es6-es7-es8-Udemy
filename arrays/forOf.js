//! for looping
// // 1
const arr = [1,2,3,10,11,12];

for(let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}


// 2
// for..in : NOTE: it returns index number!
for(let key in arr){
	console.log(key)
}


// //3
// const obj = {
// 	name: "Rob",
// 	occ: "teacher",
// 	langauge: "JS"
// }

// for(let key in obj){
// 	console.log(key);
// }





// ! Array.prototype.forEach
// 1
// const arr = [1,2,3,10,11,12];
// arr.forEach((value, i)=>{
// 	console.log("Value",value)
// 	console.log("Index",i)
// })


// 2 . diffrence
// for..in interates over the keys of the iterator
// const arr = [1,2,3,10,11,12];
// for(let key in arr){
// 	console.log(key)
// }

// // for..in interates over the value of the iterator
// for(let value of arr){
// 	console.log(value)
// }

// const str = `Robert Bunch`;
// for(let letter of str){
// 	console.log(letter);
// }