let nums = [1,2,3,4,5];

nums.forEach(square);
//nums.forEach(triple);
nums.forEach(dispArray);

function triple (element, index, array){
     array[index] = element * 3
}

function square (element,index,array){
     array[index] = Math.pow(element,2);
}

function dispArray(element){
     console.log(element);
}
//another sample

let vegies = ["eggplant", "bittergourd", "petchay"]

//vegies.forEach(toUp);
vegies.forEach(capitalize);
vegies.forEach(displayVeg);

function addNewVeg( ){
     vegies.push("kalabasa");
}

function toUp(element,index,array){
     array[index]= element.toUpperCase();
     //array[index]= element.toLowerCase(); If you want them lowercase
}
function capitalize (element,index,array){
     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function displayVeg(element){
     console.log(element);
}
