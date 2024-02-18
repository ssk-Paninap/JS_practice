let btn1 = document.getElementById("btn1");
let imgCont = document.getElementById("imgcont");

function randImg (){
     let imgcount = 1;
     let newVal = [];
     let images = [];

     for (let i = 0; i<imgcount; i++){
          let randInt = Math.floor(Math.random() * 2) + 1   ;
          newVal.push(randInt);
          images.push(`<img src = "img/${randInt}.png" style="width: 100px; height: 100px;">`)
     }

     imgCont.innerHTML = images;
}
