// ! new class (compare with es5.js)
// in terms of "functionality", it is same. NOTE: this is again syntati sugar. Internally it is changed to the "function"
// Replace the constuctor with the "class" keyword
class SuperHero {
    constructor(name, strength, speed, weapon, cape) {
        // add _ and it makes it a pseudo "private" property: this is a convention
        this._name = name; // NOTE: this.name is callying set property recursively.
        this._strength = strength;
        this._speed = speed;
        this._weapon = weapon;
        this._cape = cape;
    }
    powerUp() {
        this.strength += 5;
    }

    // get property
    get name() {
        console.log("Getting Name");
    }
    // set property
    set name(newName) {
        console.log("Setting name");
        this._name = newName;
    }

    // static method
    static goodHero() {
        return true;
    }
}

// const hankDetails = ["Hank", 10, 5, "Fist", true];
// const philDetails = ["Phil", 15, 1, "Fist2", false];
// let hero1 = new SuperHero(...hankDetails); // spread syntax
// let hero2 = new SuperHero(...philDetails);

// // _name is "private", name is "publc"
// hero1.name = "George";
// console.log(hero1.name);

// console.log(hero2);

// hero1.powerUp();
// hero1.speed = 2;
// console.log(hero1);
// console.log(hero2);
// console.log("Is hero good?", SuperHero.goodHero());



// ! inheritance 
class Human extends SuperHero{
	constructor(healthPoints, ...superHeroStuff){ // automatically unpacking: healthoPoints get value of index zero, and remaining  will be passed to ...superHeroStuff
		// console.log(healthPoints);
		// console.log(superHeroStuff);
		
		super(...superHeroStuff); // NOTE: super() "must" be called at first
		this._healthPoints = healthPoints;
	}

	// overriding is possible
	set name(newName){
		
		this._name = "overriding: " +newName;
	}
}

const billDetails = [20, "Bill", 10, 8, "Fast Feet", true];
const hero3 = new Human(...billDetails);
hero3.name = "Jini";
console.log(hero3);





// ! static more example
// class DoMath{
// 	static add(x,y){
// 		return x + y;
// 	}
// 	static subtract(x,y){
// 		return x - y;
// 	}
// 	static square(x){
// 		return x * x;
// 	}
// }

// let x = DoMath.add(2,5)
// console.log(x)
