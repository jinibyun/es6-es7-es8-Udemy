// ! Symbols
//?1 
// Up through ES5...
// Boolean
// console.log(typeof(true))
// // null
// console.log(typeof(null))
// // undefined
// console.log(typeof(undefined))
// // Number
// console.log(typeof(2))
// // String
// console.log(typeof(`a`))
// // Object, function, array
// console.log(typeof({}))


//?2
// New Datatype!
// Symbol = a something. identifier.
// primitive

// NOT A CONSTRUCTOR
// const str = String(`Hello, world`);
// const str2 = `Hello, world`; // same as above
// console.log(str);
// console.log(str2);
// const aSymbol = Symbol();

//?3
console.log(String(`a`) === String(`a`));
console.log(Number(2) === Number(2));
console.log({} === {});
console.log(undefined === undefined);
console.log(Symbol(`a`) === Symbol(`a`));

// // What is the point?
// // THe point... to avoid name collision.
const a = Symbol();
const b = Symbol();
console.log(a===b)

// ?4  (Cannot understand?????)
// const CARCOLOR = Symbol();
// const CARMAKE = Symbol();
// const CARMODEL = Symbol();

// class Car{
// 	constructor(color, make, model){
// 		this[CARCOLOR] = color;
// 		this[CARMAKE] = make;
// 		this[CARMODEL] = model;
// 	}
// 	get color(){
// 		return this[CARCOLOR];
// 	}
// 	set color(newColor){
// 		this[CARCOLOR] = newColor;
// 	}
// }

// let myCar = new Car(`Red`,`Chevy`,`Tahoe`);
// console.log(myCar)
// myCar.color = `blue`
// console.log(myCar[CARMODEL]);

// console.log(Symbol.for(`test`) == Symbol.for(`test`))
