class Vivek{
     age = 25;
     Details = {
        Firstname: "Raghav",
        Lastname: "Jurle",
        fullname: function(){
           return this.Firstname+" "+ this.Lastname;
        }
    }

    get cityname(){
        return "India"
    }


}

let vd = new Vivek();
console.log(vd.Details);
console.log(vd.age);
console.log(vd.cityname);
console.log(vd.Details.fullname());


