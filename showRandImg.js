let btn1 = document.getElementById("btn1");
let imgCont = document.getElementById("imgcont");

//button func
function randImg (){
     //create a limit for the loop
     let imgcount = 1;
     //createa arrays that will contain the image and the values for the random int
     let newVal = [];
     let images = [];

     //loop to iterate and add to the arrays
     for (let i = 0; i<imgcount; i++){
          //creating a random int between 1 and 2
          let randInt = Math.floor(Math.random() * 2) + 1   ;
          //adding the value of randInt to the array to be used in getting images
          newVal.push(randInt);
          //adding the images from the folder to array
          images.push(`<img src = "img/${randInt}.png" style="width: 100px; height: 100px; margin:10px;">`)
     }
     //show the image after the button is clicked
     imgCont.innerHTML = images;
}
