// ! REQUIRES AT LEAST NODE 7.6 
// 2 new keywords:
// 1. async
// 2. await


// ? BEFORE async and await
function one(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			console.log("Done!")
			resolve("2 seconds have passed!");
		},2000)
	});
}

// console.log("Calling function one")
// one().then((promiseData)=>{
	// console.log(promiseData)
// });


// ? 2 AFTER async and await: This is an exactly same thing as "then". but more convinient!!
async function two(){
	console.log("Calling function one")
	const oneResponse = await one();
	console.log(oneResponse)
}

two();
console.log("Last line of the code");