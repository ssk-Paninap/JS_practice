
//Variable setting
let btn1 = document.getElementById("btn1");
let tb1 = document.getElementById("tb1");
let tb2 = document.getElementById("tb2");
let tb3 = document.getElementById("tb3");
let bmi;

//setting button click function
btn1.onclick = function(){
    
    let weight = Number(tb1.value);
    let height = Number(tb2.value);

    bmi = weight/(height/100)**2;

    //converting bmi to be a string kasi di pwede number
    console.log(bmi)
    tb3.value = `BMI is ${bmi.toFixed(2)}`;

}

