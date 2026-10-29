
//public(default), protected, private

class Car {
    public name: string = 'honda';
    protected model: string = 'Tata harrier';
    private license: number = 8909;
    //final: readonly -- fixed value/constant

    public readonly logo: string = 'car logo';

    getCarData(): void {
        console.log(this.name, this.model, this.logo, this.license);
    }
}


class Audi extends Car {
    getCarData(): void {
        console.log(this.name, this.model, this.logo);
    }
}

class Cycle {
    getSomeData() {
        let c: Car = new Car()
        console.log(c.name);
        console.log(c.logo);
    }
}