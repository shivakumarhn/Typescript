

//0 to 100% abstraction.
//can not create the object of abstract class


abstract class page {
   abstract title(): void;
   abstract url(): void;

   loading(): void{
    console.log('page ---- loading 20 sec');
   }

   header(): void {
    console.log('page ----- header');
   }
}

class HomePage extends page {
    title() : void {
    }
     url() : void {
    }
     display() : void {
        console.log('HP --- display');
    }
}

class loginPage extends page {
    title(): void {
        console.log('LP ---- tilte');
    }
    url(): void {
         console.log('LP ---- url');
    }

    loading(): void{
    console.log('page ---- loading 5 sec');
   }

   doLogin(): void{
    console.log('login to app');
   }
    
}

let lp: loginPage = new loginPage();
lp.title();
lp.url();
lp.loading();
lp.doLogin();

//top casting
let pg: page = new loginPage();
lp.title();
lp.url();
lp.loading();


