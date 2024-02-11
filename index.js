//This is only the JS part!!!!!!
//Dice Roller func

function rollDice(){
    const tb1 = document.getElementById("tb1").value;
    const diceRes = document.getElementById("diceRes");
    const diceImg = document.getElementById("diceImg");
    const vals= [];
    const img = [];


    for (let i = 0 ;i < tb1; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        vals.push(value);
        img.push(`<img src= dice_img/D${value}.png alt = "Dice: ${value}">`);

    }   

    diceRes.textContent = `dice: ${vals.join(',')}`;
    diceImg.innerHTML = `${img.join(' ')}`;
}
// //HTML AREA
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         #container {
//             font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//             font-size: 2rem;
//             text-align: center;
//         }
//         #tb1 {
//             font-size: 2rem;
//             border: none;
//             border-radius: 10px;
//             background-color: rgb(59, 59, 255);
//             color: #fff;
//             padding: 10px;
//         }
//         #btn1 {
//             margin: 15px;
//             padding: 10px;
//             border-radius: 10px;
//             border: none;
//             background-color: rgb(250, 66, 66);
//             color: white;
//             width: 100px;
//             height: 50px;
//             font-size: 20px;
//             cursor: pointer;
//         }
//         #btn1:hover {
//             background-color: rgb(250, 81, 137);
//         }
//         #btn1:active {
//             background-color: rgb(255, 137, 210);
//         }
//         #diceRes {
//             margin: 10px;
//         }
//         #diceImg {
//             gap: 10px;
//             justify-content: space-between;
//         }

//     </style>
// </head>
// <body>
//     <div id="container">
//         <h1>Dice Roller </h1>
//         <label># for Dice</label>
//         <input type="number" value = "1" min="1" id="tb1">
//         <div>
//             <button onclick="rollDice()" id="btn1">Roll</button>
//         </div>

//         <div id="diceRes">
//         </div>

//         <div id="diceImg">
//         </div>
//     </div>

//     <script src="index.js"></script>
// </body>
// </html>