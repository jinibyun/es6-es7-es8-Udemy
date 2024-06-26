// !passing object literal:
// 1
const someJSON = {
	vote_count: 541,
	id: 460793,
	video: false,
	vote_average: 5.9,
	title: "Olaf's Frozen Adventure",
	popularity: 96.893887,
	poster_path: "/As8WTtxXs9e3cBit3ztTf7zoRmm.jpg",
	original_language: "en",
	original_title: "Olaf's Frozen Adventure",
	genre_ids: [
		12,
		16,
		35,
		10751,
		14,
		10402
	],
	backdrop_path: "/9K4QqQZg4TVXcxBGDiVY4Aey3Rn.jpg",
	adult: false,
	overview: "Olaf is on a mission to harness the best holiday traditions for Anna, Elsa, and Kristoff.",
	release_date: "2017-10-27"
}

// const title = someJSON.title;
// const overview = someJSON.overview;
// const release_date = someJSON.release_date;

// // passing object literal
// processData({
// 	title, // NOTE: someJSON.title property cannot be used "directly"
// 	overview,
// 	release_date
// });

// function processData(data){
// 	console.log(data);
// }




// 2. desructuring object 1
// const { title, overview, release_date } = someJSON; // automatic mapping. NOTE: const does "not" have name in this case
// // console.log(title)
// // console.log(release_date)
// processData({
// 	title,
// 	release_date,
// 	overview
// });
// function processData(data){
// 	console.log(data);
// }






//// 3. desructuring object 2
// const { title: movieTitle, overview: movieOverview, release_date: x} = someJSON;
// console.log(x);





//// 4. desructuring object 3
// const { title, overview, release_date } = someJSON;
// processData({
// 	title,
// 	release_date,
// 	overview
// });
// // function processData(data){
// // 	// inside function, desctructing object
// // 	const { title, release_date, overview } = data;
// // 	console.log(`${title} is an awesome flick. It came out on ${release_date}. ${overview}`);
// // }

// // best practice
// function processData({ title, release_date, overview }){
// 	// rather than desctructing object, in parameter section, desctructing object
// 	console.log(`${title} is an awesome flick. It came out on ${release_date}. ${overview}`);	
// }








// 5. destructing "nested" objects
// const { genre_ids: {[0]: firstGenre, [1]: secondGenre} } = someJSON;
// console.log(firstGenre);
// console.log(secondGenre);







// 6. 
const [first, second, third] = someJSON.genre_ids;
console.log(first, second, third);
const [,,,fourth,fifth] = someJSON.genre_ids;
console.log(fourth, fifth);
const [,two,...others] = someJSON.genre_ids; // rest operator
console.log(others);







// 7. desctructuring review: just see the code
// function userProfile(userData){
// 	// Awful Way
// 	const name = userData.name;
// 	const address = userData.address
// 	// ...
// }

// function userProfile(userData){
// 	// Better Way
// 	const {name, address} = userData
// }

// function userProfile({name, address}){
// 	// Best Way
// }