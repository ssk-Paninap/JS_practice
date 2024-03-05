let myArray  = [1,2,"Dis",4,true]
let varNum = 1;
let varStr = "Jojo";
let varBool = true;

console.log(typeof(myArray)) //will return object as output
console.log(myArray.constructor.name)//will return array 
console.log(typeof(varNum))// will return "number"
console.log(varNum.constructor.name) //will return "Number"
console.log(varStr.constructor.name)//Will return "String"
console.log(typeof(varStr))// will return "string"
console.log(typeof(varBool))//WIll return "boolean"
console.log(varBool.constructor.name)// will return "Boolean"

for(let i = 0; i < myArray.length; i++){
    console.log(`element ${i} is a ${typeof(myArray[i])}`)//will check the data types of all array elements
}
console.log(true + 1) // true = 1 and false = 0
