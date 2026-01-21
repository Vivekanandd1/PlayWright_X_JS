const { log } = require("node:console")

let arr=[1,2,3,"Vatsal","Damini","Vivek","X"]
console.log(arr[4])
arr.push("Walker")
console.log(arr)
console.log(typeof arr[2])
console.log(arr.pop())
console.log(arr)
console.log(arr.splice(1,2))

let arr2 = ["Vivek","Vatsal","Damini"]
arr.push(arr2);
console.log(arr);

console.log("------------------------------------------");

console.log(arr[5][2])


console.log("------------------------------------------");

let arr3= [ 1, 2, 3, {"name":"Vatsal", "fullname":"Damini"}]
console.log(arr3[3].fullname)

console.log("Reduce------------------------------------------");


/*Stream way - reduce*/
let Marks = [12, 13,14, 16];
let NewMarks = []
let evenmarks = Marks.reduce((NewMarks,marks)=>marks%2==0?(NewMarks.push(marks),NewMarks):NewMarks,[]);
console.log(evenmarks);

console.log("Filter------------------------------------------");

let Age = [21, 17,14, 26];
let newage = Age.filter(age=>age>18);
console.log(newage);

console.log("Maps------------------------------------------");

let table = [1,2,3]
let newtable = table.map(tab=>tab*3);
console.log(newtable);
