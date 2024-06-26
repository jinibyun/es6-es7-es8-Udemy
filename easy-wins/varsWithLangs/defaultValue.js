// ! default parameter
// 1
// function getArea(x, y, s = "r") {
//     if (s === "r") {
//         return x * y;
//     }else {
//         return (x * y ) / 2;
//     }
// }

// const rectArea = getArea(2,5);
// console.log(rectArea);





// !rest syntax : ...  replacing argument
// ?1. Old
// old
// function findHighest(upperLimit){
//     // old : javascript supports natively "argument" object
//     // console.log(arguments);
//     // console.log(arguments.length);
//     console.log(upperLimit);
//     let max = 0;
//     for (let i = 1; i < arguments.length; i++){
//         if ((arguments[i] < upperLimit) && (arguments[i] > max ) ){
//             max = arguments[i];
//         }        
//     }
//     return max;
// }

// const highest = findHighest(80, 99, 33,44,35,25,98,12);
// console.log(highest);

// ?2. new (using rest syntax)
// function findHighest(upperLimit, ...numList){
//     // console.log(numList); // compare wih arguments
//     let max = 0;
//     numList.filter(function(n) {
//         if ( n < upperLimit && n>max){
//             max = n;
//         }
//     });
//     return max;
// }

// const highest = findHighest(80, 99, 33,44,35,25,98,12);
// console.log(highest);






// !spread syntax: opposite of rest . "rest": packing, "spread" : unpacking
function sum ( x, y){
    return x + y;
}

// ?1
const numbers = [1, 2,3,4,5];
// const uglyWay = sum(numbers);
// console.log(uglyWay);

// ?2. ref: https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/function/apply
// const oldway = sum.apply(null, numbers);
// console.log(oldway);

// ?3.
// const spreadway = sum (...numbers);
// console.log(spreadway);

// ?4. another example
// function memberDiscount(price, discount = 0.2 , tax = 0.06){
//     return (price - (price * discount )) * (1 + tax);
// }

// const  member1 = [48.99, .3, .09];
// const member1FinalPrice = memberDiscount(...member1);
// console.log(member1FinalPrice);

// ?5. another example
// function aReducer (state, actin){
//     // let newState = Object.assign({}, state); // how to copy object to new object
//     // same as above
//     let newState = {...state};
//     newState.newProperty = action.payload;
//     console.log(newState);
//     console.log(state);
//     return newState;
// }

// const currState = {
//     a:1,
//     b:2,
//     c:3
// }

// action = {
//     type: "done",
//     payload: 30
// }

// aReducer(currState, action);


// ?6. another example
// function Ball(radius, x, y){
//     this.r = radius;
//     this.x = x;
//     this.y = y;
// }

// let ballArgs = [50, 100, 100];
// // const ball = new Ball(ballArgs[0], ballArgs[1], ballArgs[2]);
// // const ball = Ball.apply(new Ball(), ballArgs); // NOTE: apply does not applied with constructor of object
// const ball = new Ball(...ballArgs);
// console.log(ball);



// ?7. another example
// const others = ['a', 'b', 'c'];
// const myArray = [1,2,3,4, ...others, 6,7,8];
// console.log(myArray); // array will be merged


// ?8. another example
let myArray2 = [1,2,3,4];
// let myArray3 = myArray2; // NOTE. this will change original array
// let myArray3= myArray2.slice();
let myArray3 = [...myArray2];

myArray3.push(5);
console.log(myArray2);
console.log(myArray3);