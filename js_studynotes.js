// window.alert ("WHOOP WHOOP")

// let x = 0
// let y = 2
// let ans = x + y

// if (ans === 2) {
//     let counter = 0;
//     for (let i = 1; i <=10; i++){
        
//         for (let j = 0; j <=10;j++){
//             document.write(i*j);
           
            
//         }
//         document.write(`<br>`);
//     }
// } 
// else if (ans === 3){
//     document.write ("real answer is : " ,ans)
//     console.log(`Answer is ${ans}`)
//     ans = 99 

//     console.log (`ans is an example of a ${typeof ans}`)

// } 
// else {
//     window.alert("WRONG")
// }

// document.getElementById("myh1").textContent = ans;



// let x = "Lhars"
// let y = "Male"
// let z = 20

// document.getElementById("p1").textContent = `First name is ${x}`;
// document.getElementById("p2").textContent = y;
// document.getElementById("p3").textContent = z;

// let x = 3
// let y = 4

// // let ans = x **y
// // let ans = x + y
// // x += 1
// // x -= 1
// // // x *=2
// // x /=2



// console.log(x)


// let username;

// username = window.prompt("Your username: ")

// console.log (username)

// let username;
// document.getElementById("mysubmit").onclick = function (){
//     username = document.getElementById("myText").value;
//     document.getElementById("dh1").textContent= `Hello ${username} nice to meet you!`;
//     console.log(username)
// }

// let age = Number(window.prompt("Type age"));
// age +=1;
// console.log(age);   


// let x = 'Yeah';
// let y = 'Yeah';
// let z = 'Yeah';


// x = Number(x)
// y = String(y)
// z = Boolean(z)

// console.log(x , typeof x)
// console.log(y , typeof y)
// console.log(z , typeof z)

// let x;

// document.getElementById('mysubmit').onclick = function(){
//     x = document.getElementById('myText').value;
//     document.getElementById('dh1').textContent = `Hi ${x} welcome!`
// };
// let y;
// let z;
// let a;

// document.getElementById('btn1').onclick = function(){
//     y = Number(document.getElementById('tb1').value);
//     z = Number(document.getElementById('tb2').value);

//     a = y + z;

//     console.log(`answer is ${a}`)
// }

// const PI = 3.14159;
// let circum;
// let radius;
// let res;

// document.getElementById('btn1').onclick = function(){
//     radius = document.getElementById('tb1').value;

//     circum = 2 * PI * radius;
//     document.getElementById("myh1").textContent = `The answer is ${circum}`;
//     res = Number(document.getElementById("tb2").value = circum);
// }

// let w = 21;
// let x = 23.43;
// let y = 12;
// let z;

// // z = Math.round(x);
// // z = Math.floor(x);
// // z = Math.trunc(x);
// // z = Math.pow(x, y);
// // z = Math.max(x,y,w);
// console.log(z)


// let age = Number(window.prompt("Input your age"));
// let x;

// if (age >= 18 & age<= 59){
//     document.getElementById('myh1').textContent = "You are old";
// }
// else if (age >= 60){
//  document.getElementById('myh1').textContent = "too old bro";
// }
// else if (age <18){
//     document.getElementById('myh1').textContent = "too young son";
// }
// else{
//     document.getElementById('myh1').textContent = "Invalid age";
// }

// const mychecbox = document.getElementById('mycheckbox');
// const rad = document.getElementById('rad');
// const red = document.getElementById('rad');
// const rid = document.getElementById('rid');
// const btn1 = document.getElementById('btn1');
// const res = document.getElementById('result');
// const res2 = document.getElementById('result2');

// btn1.onclick = function(){
    
//     if (mychecbox.checked){
//         res.textContent = `You checked blue`
//     }
//     else {
//         res.textContent = `You didnt checked blue`
//     }
    
//     if (rad.checked){
//         res2.textContent = 'You is a rad man';
//     }
//     else if (red.checked){
//         res2.textContent = 'You is a red man';
//     }
//     else if (rid.checked){
//         res2.textContent = 'You is a rid man';
//     }
//     else {
//         res2.textContent = "Choose one";
//     }
// }

// let age = 21;

// let message = age >= 18 ? "OKAY" : "Not okay";

// console.log (message);

// let time = 16;

// let greeting = time >= 12 ? "Yeah it is afternoon" : "Na ugh it aint afternoon yet";

// console.log(greeting);

// let x = true;

// let y = x ? "x is true" : "x aint true";

// console.log(y);

// let casing = 2;

// switch(casing){
//     case 1 :
//         console.log("hi man");
//         break;
//     case 2 :
//         console.log("HI bot");
//         break;
//     case 3 :
//         console.log("hi nothing"); 
//         break;
//     default :
//         window.alert("Invalid case");
//         break;
// }

// let username = "Paninap";
// let phone = "3123-54234-65634"

// console.log(username.charAt(0));
// console.log(username.indexOf("a"));
// console.log(username.lastIndexOf("a"));
// console.log(username.length);
// console.log(username.trim());
// console.log(username.toLowerCase());
// console.log(username.startsWith("i"));
// if (username.startsWith("P")){
//     console.log ("It starts with P")
// }

// console.log(phone.replaceAll("-",":"));

// const fname = "hey Paninap";

// let tname = fname.slice(0,fname.indexOf(" "));

// let ename = fname.slice(fname.indexOf(" ") + 1);

// console.log (tname);
// console.log (ename);
// let rname = fname.slice(0,4);
// let sname = fname.slice(4   ,11);

// let gname = fname.slice(4   ,5);
// let aname = fname.slice(10   ,11);

// console.log(rname);
// console.log(sname);
// console.log(gname);
// console.log(aname);

// const email = "tisyo@email.com";

// let tis = email.slice(0, email.indexOf("@"));
// let eemail = email.slice(6, email.indexOf("."));

// console.log(tis);
// console.log(eemail);

// let newName = window.prompt("type email: ");
// let ign = newName.slice(0,newName.indexOf("@"));


// let ggwp = newName.trim().charAt(0).toUpperCase() + newName.trim().slice(1).toLowerCase();
// console.log(ggwp);


// let candy = 5;

// if (candy >5 && candy <= 10){
//     console.log("You have many candies");
// }
// else if (candy >= 5 ){
//     console.log("Small amount of candy");
// }
// else {
//     console.log("add a valid amount");  
// }

// const PI = 3.14;

// if (PI === "3.14"){
//     console.log("same content and same type")
// }
// else if (PI == "3.14"){
//     console.log("Same content but not same data type");
// }

