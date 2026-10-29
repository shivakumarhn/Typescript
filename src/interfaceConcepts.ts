

//Inheritance can have only abstact methods
//Abstract methods: a method doesn't have any method body/no business logic
//Only method declaration/prototype
//can not create object of interface
//OOP: abstraction: 100%

interface IMF {
    rating(): void;
}


interface Bank extends IMF{
    fee?: number
    credit(): void;
    debit(): void;
    transfer(): void;
    recoveryLoan(): void;
    mf(): void;
}

interface worldBank {
    loan(): void;
    recoveryLoan(): void;
}

interface FinBank {
    upi(): void;
    recoveryLoan(): void;
}

class BankPolicy {
    homeLoan(): void {
        console.log('bank policy --- home loan');
    }
    eduLoan(): void {
        console.log('bank policy --- edu loan');
    }
}

class HDFCBank extends BankPolicy implements Bank, worldBank, FinBank {
  
    fee: number = 100;

      rating(): void {
        console.log('Hdfc----rating');;
    }

    override homeLoan(): void {
        console.log('Hdfc bank ---- home loan');
    }
    
    //Bank

    mf(): void {
        console.log('HDFC --- MF');
    }

    credit(): void {
        console.log('Hdfc ---- credit');
    }

    transfer(): void {
        console.log('Hdfc ---- transfer');
    }

    debit(): void {
        console.log('Hdfc --- debit');
    }

    //World bank
    loan(): void {
        console.log('hdfc --- loan');
    }

    //Finbank
    upi(): void {
        console.log('Hdfc --- upi');
    }

    //common
    recoveryLoan(): void {
        console.log('Hdfc ---- recover');
    }

    //Individual methods
    fixedDeposit(): void {
        console.log('HDFC --- FD');
    }
}
    //Create the object of the class : HDFCBank

    let hf: HDFCBank = new HDFCBank();
    hf.credit();
    hf.debit();
    hf.transfer();
    hf.loan();
    hf.upi();
    hf.recoveryLoan();
    hf.fixedDeposit();
    hf.homeLoan();
    hf.eduLoan();

    //Top casting;
    //Child class object can be reffered by Parent interface ref variable
    let bk: Bank = new HDFCBank();
    bk.credit();
    bk.debit();
    bk.transfer();
    bk.recoveryLoan();

    let wb: worldBank = new HDFCBank();
    wb.loan();
    wb.recoveryLoan();

    let fb: FinBank = new HDFCBank();
    fb.recoveryLoan();
    fb.upi();


//C-C: extends
//C-I: implement
//I-I: extends
//I-C: NA