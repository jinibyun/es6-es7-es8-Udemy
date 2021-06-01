// ! Map
// Map is just a key-value pair and it is also an iterable.
// ============= 1 ==============
// const myContactsObj = {
// 	"Rob" : "555-1234",
// 	"Jim" : "555-2345",
// 	// function(){}: "ANything"
// }

// for(value of myContactsObj){ // error: because object is not iterable
// 	console.log(value)
// }


// ============= 2. Defime map ============
let myContacts = new Map();
// get and set methods
myContacts.set("Rob","555-1234");
const rob = myContacts.get("Rob");
console.log(rob);

let keyFunction = () => {
	console.log("Hello World");
}
// even set function to "key"
myContacts.set(keyFunction, "Haha, I just used a function as a key");
const huh = myContacts.get(keyFunction);
console.log(huh);

// size property
console.log(myContacts.size);

for(value of myContacts){
	console.log(value);
}

// clear method (clear the map)
// myContacts.clear();
// console.log(myContacts);

// entries method (get all the entries)
console.log(myContacts.entries());

myContacts.forEach((value)=>{
	console.log(value);
})

// keys method
console.log(myContacts.keys());
console.log(myContacts.values());