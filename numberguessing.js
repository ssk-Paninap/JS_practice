let userAns = document.getElementById('tb1');
let btn = document.getElementById('btn');
let result = document.getElementById('myh3');
let maxNum = 100;
let minNum = 1;

let gameAns = Math.floor(Math.random() * (maxNum - minNum + 1)+ minNum);

let count = 0;
let running = true;


btn.onclick = function (){

        console.log(gameAns);
        //Easy methiod yung commented block
        //let ans = parseInt(userAns.value) === gameAns ? "You guessed it right" :  "You guessed wrong try again :(";
 
        let guess = Number(userAns.value); 

        if (guess < gameAns) {
            count++;
            result.textContent = `Attempt # ${count}: GUESS IS LOWER THAN THE ANSWER`;
        } else if (guess > gameAns) {
            count++;
            result.textContent = `Attempt # ${count}: GUESS IS BIGGER THAN THE ANSWER`;
        } else {
            count++;
            result.textContent = `Attempt # ${count}: GUESS IS CORRECT. THE ANSWER IS ${gameAns}`;
        }

    
}
