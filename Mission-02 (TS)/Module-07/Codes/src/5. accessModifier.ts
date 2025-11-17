// modify >> access

class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number;
    protected address: string

    constructor(userId: number, userName: string, userBalance: number, address: string) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
        this.address = address;
    }

    addBalance(amount: number) {
        this.userBalance += amount;
        return this.userBalance
    }
}

class StudentAccount extends BankAccount {
    test() {
        this.address = "Dhaka";
        return this.address;
    }
}


const userAccount1 = new BankAccount(222, "Sabina", 500, "ctg");
console.log(userAccount1.userId);   // we can only read this now, no further updating can not be done

console.log(userAccount1.addBalance(50));
console.log(userAccount1.addBalance(100));

const userAccount2 = new StudentAccount(555, "Lamia", 200, "ctg"); 

console.log(userAccount2.test());