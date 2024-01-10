let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let age = document.getElementById("tb1");
// let tb2 = document.getElementById("tb2");
// let apple = document.getElementById("cb1");
// let banana = document.getElementById("cb2");
// let dragonfruit = document.getElementById("cb3");
let h3 = document.getElementById('myh3');

function showFruit(){
    let fruits = [
        {checkbox: document.getElementById("cb1"), fruit: "Apple"},
        {checkbox: document.getElementById("cb2"), fruit: "Banana"},
        {checkbox: document.getElementById("cb3"), fruit: "Dragon fruit"}
    ];

    let fruit2 = [];
    
        for (let i = 0; i < fruits.length;i++){
            if (fruits[i].checkbox.checked){
                fruit2.push(fruits[i].fruit);
            }
        }
    
    h3.textContent = `Your list is as follows: ${fruit2.join(" , ")}`;

}


btn2.onclick = function (){
    showFruit();
}