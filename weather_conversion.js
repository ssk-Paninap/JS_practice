let tb1 = document.getElementById("tb1");
let tb2 = document.getElementById("tb2");
let tb3 = document.getElementById("tb3");
let btn = document.getElementById("btn");
let myh3 = document.getElementById("myh3");

let temp = Number(tb1.value);

function celToFaren(temp){
    let far = 9/5 * (temp) + 32;

    console.log(far);
    let ans = myh3.textContent = `${far.toFixed(2)}°F`;

    return ans;
}

function farToCel(temp){
    let cel = 5/9 * (temp-32);

    let ans = myh3.textContent = `${cel.toFixed(2)}°C`;

    return ans;
}


btn.onclick = function(){
    if (tb2.checked){

        celToFaren(tb1.value);
    }
    else if (tb3.checked){
        farToCel(tb1.value)
    }
    else {
        myh3.textContent = "PLEASE CHOOSE CONVERSION METHOD";
    }
}