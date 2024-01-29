let dis = document.getElementById("myh2");
let ans = document.getElementById("myh1");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let sbtn = document.getElementById("sbtn");

let res = 0;

btn1.onclick = function () {
    dis.textContent += "1 + ";
    res += 1;
};

btn2.onclick = function () {
    dis.textContent += "1 + ";
    res += 1;
};

sbtn.onclick = function () {
    dis.textContent = ""; 
    ans.textContent = "Ans: " + res;
};
