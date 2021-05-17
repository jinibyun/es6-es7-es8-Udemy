// ! class: ES6 introuce this concept
// Sequence to study: index.js -->> es5.js -->> es6.js
// ref: https://developer.mozilla.org/en-US/docs/web/javascript/reference/classes
// but just syntatic sugar. No inheritance.
class NoWay{
	constructor(js,withhh,classes,huh){
		this.person = `disbelief`;
		this.js = js;
		this.withh;
		this.classes = classes;
		this.huh = huh;
	}

	really(){
		return `Yes.`
	}

	reallyReally(){
		return `Yes. Well, mostly yes.`
	}

	likeJava(){
		return `Yes and no.`
	}

	whichIsIt(){
		return 'Shut up, and use them!'
	}
}

const developersEverywhere = new NoWay(`I`,`can't`,`believe`,`it!`);
console.log(developersEverywhere)
