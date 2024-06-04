const fruits = ['Banana', 'Orange'];
const result = [...fruits];

// console.log(result);

const obj = {
    name: 'Ariful Islam',
    age: 29,
    education:{
        name: 'DIU',
        degree: 'Graduate',
    }
}
const obj2 = {
    ...obj,
}
console.log(obj2);