

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

//9. void does not retun any value: used with the funtion
//return type: void

function clickOnElement(element: string): void {
    console.log('click on the ', element);
}

clickOnElement('loginButton')

function getBrowserName(): string {
    return 'chrome';
}

function launchBrowser(browserName: string): boolean {
    switch (browserName) {
        case 'chrome':
            console.log('chrome is launched');
            return true;
        default:
            console.log('invalid browser');
            return false;    
    }
}

function getDevice(): string[] {
    return ['iph', 'samsung'];
}

//10. never: funtion never returns (throws error or infinite loop)
//throw: generate the error

// function throwSomeElementError(): never {
//     throw new Error('t=some element error')
// }

// throwSomeElementError();


//11. Arrays: dynamic
let score: number[] = [10, 20, 30]

let browser: string[] = ['chrome', 'ff', 'edge']
console.log(browser);

let empData: any = ['shiva', 30, true, 12.33]
console.log(empData);

let empIds: Array<string | number> = ['tom101', 'shiv', 101, '@!@!']
console.log(empIds);

//12. tuple: static array: fixed lenght fixed type per position
let user: [string, number, boolean] = ['shiva', 101, true]
console.log(user);
console.log(user[0]);
user[0] = 'naveen'
console.log(user[0]);

//13. objects:

let userObj: {username: string, age: number, salary: number, isActive: boolean, userId:string | number}= {
    username: 'venkat',
    age: 30,
    salary: 34.55,
    isActive: true,
    userId: 'user101'
}
console.log(userObj);

//14. enums: collection of constant/fixed values

enum Status { 
    Open,
    ReOpen,
    New,
    CLosed,
    Assigned,
    Fixed
}
console.log(Status);
console.log(Status.Open);
console.log(Status.Fixed);
console.log(Status[1]);



enum Browsers {
    ch = 'chrome',
    ff = 'firefox',
    sf = 'safari',
    eg = 'edge'
}
console.log(Browsers);
console.log(Browsers.ch);


let browserValue = 'chrome';

switch (browserName) {
    case Browsers.ch:
        console.log('open browser');
        break;
    case Browsers.eg:
        console.log('open edge');
    default:
        break;
}

enum Roles {
    Admin = 'admin',
    Seller = 'seller',
    Partner = 'partner'
}
console.log(typeof Roles);//object

//15. union type: |
let userId: string | number = 'shiva';

let myNumber: number | bigint;
myNumber = 10;
myNumber = 100000n;

//16. Literal (value) Types: exact value only:
let httpStatusCode: 200 | 400 | 500;

httpStatusCode = 500;
console.log(httpStatusCode);
console.log(typeof httpStatusCode);


function getSomeValue(): string | number {
    let flag = true;
    if(flag) {
        return 200;
    }
    else {
        return 'Bye';
    }
}

//arrow funtion:

let addition = (x: number, y: number): number => x + y;

let res = addition(100, 200)
console.log(res);

//Promises:

async function getUserData(data: string): Promise<string | number> {
    return new Promise((resolve, reject) => {
        let flag = true;
        if(flag){
            resolve(200); //number
        }
        else {
            reject('400 error') //string
        }
    })
}

let result = await getUserData('chrome');
console.log(result);