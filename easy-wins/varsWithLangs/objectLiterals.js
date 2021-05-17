// ! 3 primary ways of making an object

// 1. let x = new Object();
// 2. let x = Object.create(null);
// 3. let x = {}; // this is "object literal"





// ! using object literal
// Old way:
let stuffFromAPI = {
	name: "Rob",
	career: "Teacher",
	langauge: "JavaScript",
	aMethod : function(){
		console.log("I teach");
	}
};

let name = stuffFromAPI.name;
let career = stuffFromAPI.career;
let langauge = stuffFromAPI.langauge;
const me = stuffFromAPI.aMethod();

// New way:
let newThingToPassToAPI = {
	name: name,
	career: career,
	langauge: langauge
}

// new way: better
let coolNewWay = {
	name,
	career,
	langauge,
	aMethod(){
		console.log("I teach");
	}
}
