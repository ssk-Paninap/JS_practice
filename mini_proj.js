var btn1 = document.getElementById("btn1");
var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var myh1 = document.getElementById("myh1");
var myh3 = document.getElementById("myh3");


let a;
let b;
let c;
let d;
btn1.onclick = function (){
    // if (rad1.checked){
    //     myh1.textContent = "Good luck kid";
    // }
    // else if (rad2.checked){
    //     myh1.textContent = "Good luck bro";
    // }
    // else {
    //     myh1.textContent = "Good luck to you whatever you are";
    // }
    a = rad1.checked;
    b = rad2.checked;

    c = a == true ? myh1.textContent = "Good luck kid" :  myh1.textContent = "Good luck bro";
    
    const workout = [
        document.getElementById("Push Ups"),
        document.getElementById("Kettlebell Swings"),
        document.getElementById("Jump Squats")
    ] 
    const newWorkouts = [];
    for (let i = 0; i <workout.length; i++){
        if (workout[i].checked){
            newWorkouts.push(workout[i].id);
        }
    }
    
    myh3.textContent = `These are your workouts added ${newWorkouts.join(" , ")}`;
}