
//this function is just to show an image from a folder through a button
function showLogo(){
     //get the div where in the image will be place
     let logo = document.getElementById("imgCont");
     //take the image and insert it in the div
     logo.innerHTML = `<img src = img/au.png>`
}


// // this is the HTML code for easier access
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         #cont {
//             text-align: center;
//             font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//             font-size: 2rem;
//         }
//         button {
//             width: 100px;
//             height: 50px;
//             border: none;
//             border-radius: 10px;
//             background-color: rgb(255, 139, 139);
//             color: white;
//             font-weight: bold;
//         }
//     </style>
// </head>
// <body>
//     <div id="cont">
//         <h1 id="myh1">Here is the logo of my school</h1>
//     <button onclick="showLogo()">show</button>
//     <div id="imgCont">
        
//     </div>
//     </div>

//     <script src="rememberingpaststudies.js"></script>
// </body>
// </html>
