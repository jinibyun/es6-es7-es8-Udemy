// ! Callbacks
// ?1
// functions = 1st class objects
// - Pass them around
// - store them inside of a variable
const printUpper = function(text){
	console.log(text.toUpperCase());
}

function run(callback, input){
	callback(input);
}
run (printUpper, `Hello, World`);


// ?2. same concept as 1
run(
	function(text){console.log(text.toUpperCase());},
	`Hello, World`
);


// ?3 example
// $.getJSON(url,(data)=>{console.log(data)})

// $.prototype.getJSON = function(url, callback){
// 	// jquery does its httprequestobject thing from url
// 	// gets data... saves as ajaxData
// 	(data(ajaxData)

// }

// ?4 example
// function a(x){
// 	console.log(x)
// 	return function(y){
// 		console.log(x+y)
// 	}
// }

// a(2)(3);


// ?5  example
// function b(num){
// 	const objectToReturn = {run: `Haha, this is messed up, isn't it?`}
// 	return objectToReturn
// }

// console.log(b(2).run)
