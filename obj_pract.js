let a = { "a": 10, "b": 13, "c":23};

let num1 = 12
let num2 = a["c"]; //kunin yung value ni c
let ans = num1 + num2

console.log(ans)

//use math.random as the one to pick a random value in the object 
//method chaining para magset ng random idex sa obj na si a
let y = Object.values(a);
let randomIndex = Math.floor(Math.random() * y.length); 
let z = y[randomIndex];
let eq = num1 + z;


console.log(`Answer is ${eq} because the random num2 is ${z} and another is ${num1}`)



