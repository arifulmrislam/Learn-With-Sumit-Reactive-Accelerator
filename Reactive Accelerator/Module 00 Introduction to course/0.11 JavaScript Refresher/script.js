//scope

/* var lang = "Bangla";

//var works in function block
function learn (topic) {
    var lang = topic;
    console.log(lang);
    if(true){
        let a = 5;
        console.log(a);
    }
    // console.log(`let is a normal block scope ${a}`);    
    console.log(`I'm learning ${topic}`);
}

learn("javascript");

console.log(lang); */

// Array Methods

// const arr = ['Mango', 'Banana', 'Pineapple', 'Orange', 'Apple', 'Watermelon'];
// const numbers = [1, 2, 3, 4, 5];
// const str = "Hello";
// const find = arr.find((f)=> f === "Orange");
// const find = arr.findIndex((f)=> f === "Watermelon");
// const find = numbers.filter((f)=> f % 2 == 0);
// const find = arr.slice(2,4);
// const find = arr.splice(5, 0, 'fruits-1', 'fruits-2');
// const find = numbers.map((f) => f * 2);
// const find = numbers.reduce((total, num) => total + num);
// const find = arr.forEach((f) => console.log(f));
// const find = str.reverse();
// const find = str.split('').reverse().join('');
// for(let i=str.length-1;i>=0;i--){
//     var newRev = str[i];
// console.log(`${newRev}`);
// }
// console.log(find);
// console.log(numbers);

//Object

// const obj = {
//     name: "Ariful",
//     age: 29,
//     education:
//     {
//         school:"High School",
//         certificate: "SSC 4.94"
//     }
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// Dynamic way
// const a = "popularity";
// const obj = {
//     name: "Ariful",
//     age: 29,
//     education: {
//     school: "High School",
//     certificate: "SSC 4.94",
//     },
// };
// obj[a] = '100%';
// console.log(obj);

// const {name, age, education} = obj;

// console.log(name, age, `${education.school}`);

// const dogFactory = (name, age, breed) => {
//     return {
//         name: name,
//         age: age,
//         breed: breed,
//         bark() {
//             console.log("Woof!");
//         },
//     };
// };

// const myDog = dogFactory("Tiger",3,"German Shafer")
// myDog.bark();

// console.log(Object.values(myDog));

// const cat = {
//     name: 'Pipey',
//     age: 8,
//     whatName(){
//         return this.name;
//     }
// };
// console.log(cat.whatName());

// const engine = {
//     start(adverb){
//         console.log(`The engine starts up ${adverb}....`);
//     },

//     sputter:() =>{
//         console.log(`The engine sputters...`);
//     },
// };

// console.log(engine.start('noisily'));
// console.log(engine.sputter);

// spread

// const arr = ["Mango", "Banana", "Pineapple", "Orange", "Apple", "Watermelon"];
// const arr1 = [...arr];

// function arr2 (...rest){
//     return rest.reduce((arr2, cur) => arr2+cur,0);
// }
// console.log(arr1);
// console.log(arr2);

//Condition

// var c = "January";

// switch(c){
//     case 'January':
//         console.log("It's 1st month of the year");
//         break;

//     case 'February':
//         console.log("Nothing");
//         break;
//     case 'March':
//         console.log('Hello')
//         break;
// }

//ternary operator

// const x = 11;

// console.log(x == 10 ? true : x != 10 || x < 10 ? "why" : "something else");

//Nullish coalescing

// let lang = 'Python';
// console.log(lang ?? 'Javascript');

// Destructuring
// const object ={
//     name:'Ariful Islam',
//     age:45,
//     education:{
//         school_name:'Tejgaon Adarsh School and College',
//         Degree:'Graduate',
//     }
// }

// const {name, age} = object;
// const {education:{school_name,Degree}}= {} = object;

// // console.log(name, age);
// console.log(school_name,Degree);

// optional chaining

// const object ={
//     name:'Ariful Islam',
//     age:45,
//     education:{
//         school_name:'Tejgaon Adarsh School and College',
//         Degree:'Graduate',
//     }
// }

// console.log(object.name, object.age);

// Nullish

// let lang = null;

// console.log(lang ?? 'JavaScript');
// console.log(lang || 'JavaScript');
// console.log(lang && 'JavaScript');