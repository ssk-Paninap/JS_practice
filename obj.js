let smol = { 
    1:{"Num1":21,"Num2":25},
    2:{"Num1":33,"Num2":65}
}
//Inputting values to be added in the object
a = parseInt(prompt("Type a number: ")) //can be a  textbox pero pwede na den prompt
b = parseInt(prompt("Type a number: "))// make sure na number dahil always string ang user inputs
//pag add sa obj 
smol[3] = {"Num1":a,"Num2":b}
//checking kung naadd ba kaya pinag plus 
let sum = smol[1]["Num1"] + smol[3]["Num2"]

console.log(sum)
