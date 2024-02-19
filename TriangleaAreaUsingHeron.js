function solveTriangle () {
     let tb1 = document.getElementById("tb1");
     let myh4 = document.getElementById("myh4");

     let newTb1 = tb1.value.trim();
     let triVal = tb1.value.trim().split(",").map(Number);

     let num1 = triVal[0];
     let num2 = triVal[1];
     let num3 = triVal[2];
     let sides = (num1 + num2 + num3)/2;
     
     let area = Math.sqrt(sides * (sides - num1) * (sides - num2) * (sides - num3));
     
     myh4.textContent = `Answer is ${area.toFixed(2)}`

}
