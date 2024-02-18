const nums = [1,2,3,4,5];
const squares = nums.map(square);
function square (element){
     return Math.pow(element, 2);
}
console.log(squares);
function cube (element){
     return Math.pow(element,3);
}
const cubes = nums.map(cube);
console.log(cubes);

//other sample
const regs = ["1-4-5",'2-3-5',"1-3-4"];
const formattedNum = regs.map(formatNum);
console.log(formattedNum);
function formatNum (element){
     const contents = element.split("-");
     return `${contents[1]}/${contents[2]}/${contents[0]}`;
}
