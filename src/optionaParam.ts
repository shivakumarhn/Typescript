

//optional param in funtions:
// ?

function getDetails(name: string, age?:number, salary= 12.33){
    console.log(name, age, salary);
}

getDetails('shiva')
getDetails('shiva', 20);
getDetails('shiva', 35, 45.33);
getDetails('Maanu', 23)