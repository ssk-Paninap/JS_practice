//Function only no html
function solveTriangle () {
     //getting vals from the html
     let tb1 = document.getElementById("tb1");
     let myh4 = document.getElementById("myh4");

     //trimming input box from whitespaces
     let newTb1 = tb1.value.trim();
     //adding tb1 values to triVal array and separating each val every comma and them making it a number
     let triVal = tb1.value.trim().split(",").map(Number);

     //using the values from trival to assign vals for the formula
     let num1 = triVal[0];
     let num2 = triVal[1];
     let num3 = triVal[2];

     // Heron's formula for semi perimeter and the Area
     let sides = (num1 + num2 + num3)/2;
     //Area of the triangle
     let area = Math.sqrt(sides * (sides - num1) * (sides - num2) * (sides - num3));

     //setting the text content of the H4 to what the area is 
     myh4.textContent = `Answer is ${area.toFixed(2)}`

}
