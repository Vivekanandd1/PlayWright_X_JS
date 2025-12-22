let obj1={};
console.log(typeof obj1);


let obj2 = {"Name":"Vatsal","Sname":"Deshmukh"}
console.log(obj2.Sname,"-----",obj2.Name);

let obj3 = {"Name":"Vatsal",
    "Sname":"Deshmukh",
     "Number":9999999999,
    Status: true,
    "Skill":["Java","Selenium","Playwright"],
   "Basic":{"Lang":"English","Locality":"Maharastrian"}}

    console.log( typeof  obj3.Skill)
    console.log(obj3.Skill)
    console.log(obj3.Basic.Lang)
  
    let vivek = obj3;
    console.log("From vivek " +vivek.Basic.Lang)
     console.log( vivek.FlatNo)
    vivek.FlatNo=9;
    console.log("-------------------------")
     console.log(vivek)

