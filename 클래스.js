class Vehicle {
    constructor(maker, model, year, color) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0;
    }
    getMaker() {
        return this.maker;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getColor() {
        return this.color;
    }
    getSpeed() {
        return this.speed;
    }
    accelerate(amount){
        this.speed += amount;
        console.log(`The ${this.maker} ${this.mpdel} is now going ${this.speed} km/h.`)
    }
    break(amount) {
        this.speed = Math.max(0, this.spped - amount);
            console.log(`The ${this.Maker} ${this.model} is now going  ${this.speed} km/h.`)

    }
}

class Car extends Vehicle {
    constructor(maker, model, year, color, numDoors){
        super(maker,model,year, color);
        this.numDoors = numDoors;
    }
    getNumDoors() {
        return this.numDoors;
    }
    static getNumberOfWheels() {
        return 4;
    }
}
class Trunck extends Vehicle {
     constructor(maker, model, year, color, towingCapacity) {
            super(maker, model, year, color);
            this.towingCapacity = towingCapacity;
     }
     getTowingCapacity() {
        return this.towingCapacity;
     }

     static getNumberOfWheels() {
        return 6;
  }
}

const myCar = new Car( "현대자동차",'쏘나타',2021, "실버", 4);
console.log(myCar.getMaker());
console.log(myCar.getModel());
console.log(myCar.getYear());
console.log(myCar.getColor());
console.log(myCar.getSpeed());
console.log(myCar.getNumDoors());
myCar.accelerate(30); 
myCar.break(10);
console.log(Car.getNumberOfWheels());

const myTruck = new Trunck( "현대자동차", "봉고", 2021, "화이트", 10000 );
console.log(myTruck.getMaker()); 
console.log(myTruck.getModel()); 
console.log(myTruck.getYear()); 
console.log(myTruck.getColor()); 
console.log(myTruck.getSpeed()); 
console.log(myTruck.getTowingCapacity()); 
myTruck.accelerate(30); 
myTruck.break(10); 
console.log(Trunck.getNumberOfWheels()); 