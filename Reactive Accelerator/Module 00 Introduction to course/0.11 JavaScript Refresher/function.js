// regular function
// function name(){
//     console.log('Hello World');
// }

// name();

//function expression
// const name = function(){
//     console.log('Hello World');
// }

// name();

// named function expression
// const hello = function hello(){
//     console.log('Hello World');
// }
// hello();



// arrow function
// const name = () => {
//     console.log('Hello');
// }

// name();

// anonymous function
// function name(){
//     return () => {
//         console.log('hello');
//     }
// }

// name()();

const language = {
    name: "JavaScript",
    year: 1995,
    creator: "Brendan Eich",
};

for (key in language){
    console.log(`${key}: ${language[key]}`);
}