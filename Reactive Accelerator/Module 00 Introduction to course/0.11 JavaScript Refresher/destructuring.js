const obj = {
    name: "Ariful Islam",
    age: 42,
    education: {
        degree:"Graduate"
    },
};

const {education:{degree}={},} = obj;
console.log(degree);