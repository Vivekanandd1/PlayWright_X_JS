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