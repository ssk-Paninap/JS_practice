let tb1 = document.getElementById("tb1");
let btn1 = document.getElementById("btn1");
let myh1 = document.getElementById("myh1");
let container = [];

btn1.onclick = function (){
     container.push(tb1.value);

     myh1.textContent = `List: ${container.join(",")}`; 
}