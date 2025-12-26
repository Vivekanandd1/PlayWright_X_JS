for(let i=0;i<10;i++){
    console.log(i);
}

console.log("______________________");

let arr = ["vatsal",1,23, "Vivek"]
for(c of arr){
    console.log(c);
}

console.log("______________________");

let srr = ["vatsal",1,23, "Vivek"]
for(c in srr){
    console.log(c);
}

console.log("______________________");

let frr = ["Damini",21,223, "Moto"]
frr.forEach(element=>{
    console.log("value from the foreach loop "+element); 
})

console.log("______________________");

let x=5
while(x<10){
    console.log(x);
    x++;    
}

console.log("______________________");

let y=5
do{console.log("Coming from do while loop: "+y);
    y++; }
while(y<10){
   
}

console.log("______________________");

let z=5
while(z<15){
   console.log("value of z with break "+ z)
   if(z===10){
    break;
   }
   z++
}

console.log("______________________");

let A=5
while(A<15){
  
   if(A===10){
    A++;
    continue;
   }

    console.log("value of A with Continue "+ A);
    A++;
}