
// Inheritance: child class(sub class) is inheriting the properties (var/methods) from parent claa(super class)
//child extends parent
//Child can inherit anything from parent but parent cant take anything from child
//multiple inheritance is not allowed


class Truck {
    loading(): void {
        console.log('Truck ---- loading');
    }
}

class Vehicle {
    engine(): void {
        console.log('engine --- loading');
    }
}

class car extends Vehicle{
    start(): void {
        console.log('car --- start');
    }
    stop(): void {
        console.log('car --- stop');
    }
    refuel(): void {
        console.log('refuel --- car');
    }
}

//creating object of child class BMW
class BMW extends car {
    override start(): void {
        console.log('BMW ---- start');
    }
    autoParking(): void {
        console.log('BMW ---- auto parking');
    }
}

let b:BMW = new BMW();
b.start(); //override
b.stop(); //inheritance
b.refuel(); //inheritance
b.autoParking(); //individual
b.engine();

console.log('--------------');

//create object of parent class
let c: car = new car();
c.start();
c.stop();
c.refuel();

//Top casting;
//child class object can be reffered by parent class ref variable
//IS-A relationship
//only parent class (inherited/overriden methods) can be accessed
//Individual methods can not be accessed

let c1: car = new BMW();
c1.start();
c1.stop();
c1.refuel();


//Down casting
//Parent class object can be referred by child class ref variable???:
//let bm: BMW = new Car();
//every car is not BMW
