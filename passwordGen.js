//Function to generate a random password 
function genPass(length, includeLowercase, includeUppercase, includeNums, includeSymbols){
     
     //setting up the characters
     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     const numbers = "1234567890"
     const symbols = "!@#$%^&*()"

     //setting the empty strings
     let allowedChars ="";
     let password = "";
     //using of ternary operator for conditioning 
     //if true then get chars = "" which means characters are now enabled 
     allowedChars += includeLowercase ? lowercaseChars : "";
     allowedChars += includeUppercase ? uppercaseChars : "";
     allowedChars += includeNums ? numbers : "";
     allowedChars += includeSymbols ? symbols: "";

     //for loop top iterate within the different sets of characters
     for (let i = 0; i < length; i++){
          //Creating a ranodm index to iterate in every variables and using math functions to randomly pick
          const randomIndex = Math.floor(Math.random() * allowedChars.length);
          password += allowedChars[randomIndex];
     }
     //returning the generated password;
     return password;
}
//variable setting and booleans
const passLen = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNums = true;
const includeSymbols = true;

const password = genPass(passLen, includeLowercase, includeUppercase, includeNums, includeSymbols);
//showing user the password
console.log (`Password: ${password}`);
