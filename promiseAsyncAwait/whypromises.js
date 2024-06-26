// ! Premise
/*
// ?1 All a promise is, is a JavaScript constructor that gives you a few cool methods.
// - then
// - catch
// - All
// - race
// -- resolve, reject

// a promise constructor takes 1 arg:
// 1 . callback
	// The callback itself has 2 args:
	// 1. resolve - provided by JS ... a callback!
	// 2. reject - provided by JS ... a callback!

// DEFINITION: Promise will add "callback" to "event queue"
let myFirstPromise = new Promise((resolve, reject)=>{
 	console.log("Hey, I'm running!")
 	console.log("Hey, I'm also running!")
 	// series of processing
	// ajax...
 	// http...
 	// sql...
 	// mysql.query...
 	// nosql...

	const lang = [
		'JS',
		'Java',
		'Go'
	]
	// "order" is important
 	reject("I did not finish") //Something went wrong!
 	resolve(lang) // Im DONE!
	
});
console.log(myFirstPromise)

// the "then" will go on the promise OUTSIDE of the promise.
// it will keep an eye on the promise.
// when the resolve callback is run inside of the promise, the then will 
// fire off it's callback.
// then takes 1 arg: callback to run

// "then" will call "callback" from queue
myFirstPromise.then((promiseData)=>{
	console.log(promiseData)
})

myFirstPromise.catch((promiseError)=>{
	console.log(promiseError)
})

console.log("=====================")
console.log("I'm the last line in the program!")
console.log("=====================")
*/




// ?2 
function one(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("2 seconds has passed")
		},2000)
	})
}

function two(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("1 second has passed")
		},1000)
	})
}

const promiseOne = one();
const promiseTwo = two();
// It shows pending because they are still in the queue
console.log(promiseOne);
console.log(promiseTwo);


promiseOne.then((msgFromPromise)=>{
	console.log("====1====")
	console.log(msgFromPromise);
	console.log(promiseOne);
})

promiseTwo.then((msgFromPromise)=>{
	console.log("=====2====")
	console.log(msgFromPromise);
	console.log(promiseTwo);
})

console.log(promiseOne);
console.log(promiseTwo);

const promiseArray = [promiseOne,promiseTwo];
console.log(promiseArray)

// all method...
// Promise.all takes 1 arg:
// an array of Promises
// we run then just like always
// this will wait until ALL of the proimses in the array have resolved
Promise.all(promiseArray).then((data)=>{
	console.log("All the promises are done");
	console.log(data)
})

// race method...
// Promise.race takes 1 arg:
// an array of Promises
// we run then just like "always"
// this will run as soon as ANY promise is resolved
Promise.race(promiseArray).then((data)=>{
	console.log("One of the promises is done. I don't care which!");
	console.log(data)
})

