let names="Vatsal"
names="Manah"  /*let: Cab be reassigned but can't be redecleared*/

console.log(names);

var lnames="Vivek"
var lnames="Damini" /*var: Can be reassigned and redecleared*/

console.log(lnames);

const Cnames="Morgan"
const Cdnames="Freeman" /*const cannot be re-declared or re-assigned, but the value it points to can be mutated.*/

console.log(Cnames);
console.log(Cnames);
var a;
let b;
console.log(a);
console.log(b);

console.log("--------------------------------------------------");

var Vname = "Hello from var"
if(true){
    var Vname = "Hell0 from the inside block Var"
    console.log(Vname);
}

console.log("Outside the if conditions: "+ Vname);

console.log("--------------------------------------------------");


const Cname = "Hello from Const"
if(true){
    const Cname = "Hell0 from the inside block Const"
    console.log(Cname);
}

console.log("Outside the if conditions: "+ Cname);

console.log("--------------------------------------------------");

let LSname = "Hello from Let"
if(true){
    let LSname = "Hell0 from the inside block Let"
    console.log(LSname);
}

console.log("Outside the if conditions: "+ LSname);