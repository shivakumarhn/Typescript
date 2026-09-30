

// Data types

//1. nubmer
let num: number = 100;
let mark: number = 1000;


//2.string
let username: string = 'Shiva'
console.log(username);
let browserName: string = 'chrome';


//3. boolean
let isAlive: boolean = true

//4. bigInt
let bigNum: bigint = 9090985n

//5. null
let noValue: null = null;
console.log(noValue);
console.log(typeof noValue);

//6. undefined
let notSet: undefined = undefined;
console.log(notSet);
console.log(typeof notSet);

//7. any
let data: any;
data = 'Shiva'
console.log(typeof data);
data = 10;
console.log(typeof data);
data = true;
console.log(data);
console.log(typeof data);

//8. unknow 
let value: unknown = "hello"
console.log(value);
console.log(typeof value); //string
console.log(value + ' Mahesh'); //hello Mahesh