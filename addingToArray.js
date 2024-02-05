let box = [];

while (true) {
    let age = Number(prompt( "add something in the ARRAY: "));
    box.push(age);
    
    let ans = prompt("Do you want to continue? (y/n): ");
    
    if (ans.toLowerCase() !== "y") {
        break;
    }
}

console.log(box);
