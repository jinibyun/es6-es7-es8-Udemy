/* =============  Template literal =============== */
// 1
// const name = "Jini";
// const hello = `Hello, ${name}`;
// console.log(hello);

// // 2: multi line
// // do not need any carriage return. It automatically put
// const s = `It was
// rainy day
// and also warm`;
// console.log(s);

// // 3: expression
// const anExpressin = `43 * 1902 = ${43 * 1902}`;
// console.log(anExpressin);

// let isMember = true;
// const aTenary = `Your price is ${isMember ? "1.00" : "4.00"}`;
// console.log(aTenary);

/* =============== Tagged Template =============== */

let harry = `Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.`;
let lotr = `When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.`;
let orwell = `It was a bright cold day in April, and the clocks were striking thirteen.” — 1984, George Orwell`;
let lines = [harry, lotr, orwell];

// 1
// function buildHTML(strings, expr){
// function buildHTML(tags, lines) {
//     console.log(tags);
//     console.log(lines);
// }
// // buildHTML(`<li></li>`, `${lines}` );
// buildHTML`<li>${lines}</li>`;



// 2
// function buildHTML(tags, lines){
//   const newHTML = lines.map(function(line){ // map function is always loop through
//     return `${tags[0]}${line}${tags[1]}`;
//   });
//   return newHTML;
// }

// const result = buildHTML`<li>${lines}</li>`;
// //console.log(result);

// // instead of above console.log, move to "templateLiterasl.html" as well.
// document.querySelector('#quotes').innerHTML = result; // similar to jQuery



// 3
// test: open "templateLiterasl.html"
// const placeHTML = buildHTML2`<li>${lines}</li>`; // NOTE: placeHTML get returned "function"
// placeHTML('#quotes');

// function buildHTML2(tags, lines){
//   return function(element){
//     const newHTML = lines.map(function(line){
//       return `${tags[0]}${line}${tags[1]}`
//     });
//     // THIS IS NOT JSX/these are not components. You cant drop an array into the DOM
//     const finalHTML = newHTML.join(''); //will remove all the , and turn it into a string
//     document.querySelector(element).innerHTML += finalHTML
//   }
// }




// 4. Compare below
function testFunction(){
  return "Hello, from inside test Function";
}

const templateLiteralCallback = `Rob Jim Bill ${()=>testFunction()}`; 
console.log(templateLiteralCallback); // NOTE: arrow function is "not" called

function taggedCallback(strings, func){
  return strings[0]+func();
}

const taggedLiteralCallback = taggedCallback`Rob Jim Bill ${()=>testFunction()}`
console.log(taggedLiteralCallback);
