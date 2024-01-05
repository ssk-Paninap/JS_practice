const tb1 = document.getElementById('tb1');
const btn = document.getElementById('btn1');
const myh3 = document.getElementById('myh3');

function checkEmail (tb1){
    return tb1.value.includes("@") ? myh3.textContent = `Hi ${tb1.value.slice(0,tb1.value.indexOf("@"))} plese continue`: myh3.textContent = `not a valid email`;
                                                        
}


btn.onclick = function (){
    checkEmail(tb1);
}