//This is a callback we call another funtion through an argument
hello(bye); //bye is supposed to be the bye func
hello(leave);

//wtihin the hello func a callback arg is set
function hello (callback){
     console.log("Hello");
     callback();
}
function leave(){
     console.log("Leave");
}
function bye(){
     console.log("bye")
}
//another sample
addNum(res,3,23);

function addNum(callback, x,y){
     let ans = x + y
     callback(ans);
}
//made a func that set the h1 text to the result
function res (ans){
     document.getElementById("myh1").textContent = ans;
}
