const tudi = [[1,2,3],
              [4,5,6],
              [7,8,9]]; // 2D array in js
              
tudi[0][0] = "x";
tudi[0][1] = "o";
tudi[0][2] = "x";

tudi[1][0] = "x";
tudi[1][1] = "o";
tudi[1][2] = "x";

tudi[2][0] = "x";
tudi[2][1] = "o";
tudi[2][2] = "x";

for (let row of tudi){
     //console.log(row)// Print the array
     let rowStr = row.join(" ");
     console.log(rowStr);
}
