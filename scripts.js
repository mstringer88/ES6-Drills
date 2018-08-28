//Template Literals and Default Parameters Value
// function favMovie(movie = "The Room", name = "World") {
//     console.log(`My name is ${name} and my favorite movie is ${movie}.`)
// }
// favMovie("Braveheart", "Michael");
// favMovie();

//Arrow Functions
// let favMovie = (name, movie) => {console.log (`My name is ${name} and my favorite movie is ${movie}.`)};
// favMovie("Michael", "Braveheart");

// let firstName = "Michael Stringer";
// getFirstName = firstName.split(" ");
// console.log(getFirstName[0]);

// getFirstName = (firstName) => {console.log(getFirstName)};
// getFirstName = firstName => console.log(getFirstName);

// let stats = (x, y) => ({
//     product: x * y,
//     exponent: Math.pow(x,y)
// });

// let getResults = stats(3, 3);
// console.log(getResults);

//Spread Syntax

let myArray = ["Michael", "Birmingham", "steak"];
let makeFunc = (name, location, favFood) => {
    console.log(...myArray)
}
makeFunc();

let myName = "Michael"             //I can not figure this out. I can't figure out how to create a variable inside the function.


function randomFunc(parameter1) {
    console.log(...myName)
}


for (let i = 0; i < 6; i++) {
    console.log()
}