/*Basic Operators*/
let num1 = 10;
let num2 = 5;
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

console.log("-----------------------------------------------------")

let fname="vatsal"
console.log(fname+num1)
console.log(fname+num1+num2)
console.log(fname/num1)
console.log(fname-num1)
console.log(fname*num1)
console.log(fname%num1)


console.log("-----------------------------------------------------")

let fullname = "vatsal is my son";
let sname = "Vatsal";

if(fullname.includes(sname)){
   console.log("matched")
}
else{
    console.log("not matched")
}

console.log("-----------------------------------------------------")

if(fullname.toUpperCase().includes(sname.toUpperCase())){
   console.log("matched")
}
else{
    console.log("not matched")
}

