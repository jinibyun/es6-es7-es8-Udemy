// !arrow function (= rocket function)
// ?1. basic
const myArray = [1, 2, 3];
myArray.map(function(elem, i){
	console.log(elem);
});
// same
myArray.map((elem, i) => {
	console.log(elem);
});




// // ?2
// // look at the arrow.html for testing
// appid = 'e312dbeb8840e51f92334498a261ca1d';
// $('.city').each(function(){ //jQuery
// 	const city = $(this).attr('city');
// 	// TIP: getJson always returns premise
// 		$.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=imperial`)
// 			// .then(function(response) { // rocket function translate below "this" differently
// 			.then((response)=> {
// 			console.log(this);

// 			console.log(response);
// 			$(this).html(`${response.main.temp} &deg;f`); 
// 	});
// })



// ?3 
// difference between function (){} and => is that "rocket function" function() {} create "execution context", but arrow function does not.
// function Timer(){
// 	setInterval(()=>{
// 		console.log(this);
// 	}, 1000);
// }

// const timer = new Timer();