
const features = require('./Class1')
class Toyota extends features{
    constructor(names){
        super(names)
    }


    Safety(){
        return this.names + " has BharatNCAP 5 ratings"
    }
    
}

let car = new Toyota("Toyota");
console.log(car.Transmission());
console.log(car.Safety())
