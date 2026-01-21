let a = 5;
const b = 6;
var c = 7;

function as(){
    let a = 6;
    console.log("this is from as : "+a);
}

as();

function bs(){
    var b = 7;
    console.log("this is from bs : "+b);
}

bs();

function cs(){
    const c = 8;
    console.log("this is from cs : "+c);
}

cs();

console.log("_________________________________");

let marks = [12,14,65,14,67,64];
var sum = 0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}

console.log(sum);
console.log("_________________________________");

let total  = marks.reduce((sums,marks)=>sums+marks,0);
console.log("this is from reduce : "+ total);

console.log("_________________________________");

let totals = function(a,b){
    return a+b;
}

console.log(totals(5,10));

 
