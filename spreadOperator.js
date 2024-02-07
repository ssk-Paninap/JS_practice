let box = [10,332,2,123];
let max = Math.max(box)
let max2 = Math.max(...box)
//no spread
console.log (`This has no spread: ${max}`)
//spread operator
console.log(`This has spread operator ${max2}`)
//spread for adding two arrays in one
let blades = ["Buthcer knife", "Kunai", "Long sword", "Balisong"]
let alcohols = ["Beer", "Mule", "Brandy", "Wine"]
let container = [...blades, ...alcohols, "fries", "coffee"] //container for both arrays and some items to be added with it
console.log(container)
