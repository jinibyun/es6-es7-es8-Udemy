// ! Array.of()
// 1   compare
const arr1 = Array.of(7); // create 1 element  same as arr1= [7];
console.log(arr1);

const arr2 = Array(7); // create 7 elements
console.log(arr2);


const arr3 = Array.of(7, "Hulk", [23,12,5],{sport:"baseball"});
console.log(arr3);



// !Polyfill: FYI, If the browser does not support
if(!Array.of){
	Array.of = function(){
		return Array.prototype.slice.call(arguments);
	}
}