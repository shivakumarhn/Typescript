
//type is a keyword in TS:
//used to define the schema of the objects

type userSchema = {
    username: string, 
    age: number, 
    salary: number, 
    isActive: boolean, 
    userId:string | number
};

let userObj: userSchema = {
    username: 'venkat',
    age: 30,
    salary: 34.55,
    isActive: true,
    userId: 'user101'
}

let appUser: userSchema = {
    username: 'venkat',
    age: 30,
    salary: 34.55,
    isActive: true,
    userId: 'user101'
}

//Interface for creating objects
//Used to create/define schema for the objects

interface myCustomerSchema {
    custermerName: string,
    city: string,
    tele: string,
    age: number,
    email?: string
}

let cust1: myCustomerSchema = {
    custermerName: 'shiva',
    city: 'Banglore',
    tele: '974177',
    age: 34,
    email: 'shiva@gmail.com'
}

console.log(cust1);


//Extend keyword with interface

interface comp {
    compName : string
}

interface employee {
    name: string,
    age: number,
    salary: number
}

interface HQ {
    hq: string
}

interface dept extends HQ, employee, comp {
    deptName : string,
    head?: string
}

let emp: dept = {
    compName : 'EMC',
    name: 'shiva',
    age: 36,
    salary: 34.45,
     hq: 'SF',
     deptName : 'storage',
    head: 'Manju'
}

console.log(emp);

interface car {
    model: string
}

interface car {
    comp: string
}

let bmw: car = {
    model: 'X6',
    comp: 'BMW'
}

console.log(bmw);