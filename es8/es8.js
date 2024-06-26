// ! other changes in es8
// ?1 Object.values() 
const footballer = {
	name: "Wayne Rooney",
	position: "Forward",
	club: "ManU",
	scoringAverage: 1.2
}
// old
// const footballerVals = [];
// for(prop in footballer){
// 	footballerVals.push(footballer[prop])
// }
// console.log(footballerVals)

//new
// const footballerVals = Object.values(footballer);
// console.log(footballerVals)



// ?2 Object.entries() : key value pair : return array of array
//const footballerEntries = Object.entries(footballer)
//console.log(footballerEntries)
// console.log(footballerEntries[0])
// console.log(footballerEntries[0][0])


// ?3 padEnd
// takes 2 args:
// // 1. How long you want the string to be
// // 2. What should be added in the extra characters... default: " "

// const name = "Wayne Rooney";
// str.padEnd()
// str.padStart()

// // DOES NOT MUTATE the string
// console.log(name.padEnd(2,"b"))
// console.log(name)


// ?4 padStart
// console.log(name.padStart(20,"b"))


// ?5 Object.getOwnPropertyDescriptors()
// const footballer = {
// 	name: "Wayne Rooney",
// 	position: "Forward",
// 	club: "ManU",
// 	scoringAverage: 1.2
// }
// const descriptors = Object.getOwnPropertyDescriptors(footballer);
// console.log(descriptors)




// ?6 Trailing commas in functions
// already existed for arrays, es1
// const worldCupClubs = [
// 	`England`,
// 	`Senegal`,
// 	`France`,
// 	`Russia`,
// ]
// // ES5, added for objects (object notation)
// const england = {
// 	name: "England",
// 	place: "3rd",
// }
// console.log(england)

// // ES8, added for functions
// function sum(x, y,){
// 	return x + y
// }

// console.log(sum(2,3,))

