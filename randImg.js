
function randImg() {
    let imgHolder = document.getElementById('img-holder');
    let myh3 = document.getElementById('myh3');
    let imgCase = [];
    let value = [];

    for (let i = 0; i < 1; i++){
        let values = Math.floor(Math.random() * 4)+1;
        value.push(values);
        imgCase.push(`<img src = "img/food${values}.jpg" style = "width:150px;height:150px;">`);
    }

    imgHolder.innerHTML = imgCase;
}
