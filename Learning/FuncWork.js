function namez(){
   console.log("Vatsal")
}
namez()
console.log("------------------------")
let f1 = function(x1,x2){
  console.log("Here is the total");
  return x1+x2;
}

console.log(f1(12,12))
console.log("------------------------")

let f2=function(name,sname,age){
   return(name+" "+sname+" "+age)
}
console.log(f2("Vatsal","Deshmukh",1))

console.log("------------------------")

let f3=(x1,x2)=> console.log(x1*x2)

f3(5,5)

console.log("------------------------")

let arr = ["Vivek","Damini",function f3(){console.log("Vatsal")},"Deshmukh"]

arr[2]()