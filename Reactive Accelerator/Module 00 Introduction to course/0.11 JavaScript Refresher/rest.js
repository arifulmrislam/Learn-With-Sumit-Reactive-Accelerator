const arr = [10,20,30,40,50,60,70,80,90,100];

function sumArr(...rest){
    return rest.reduce((sum, cur) => (sum+cur),0)
}

console.log(sumArr(...arr));