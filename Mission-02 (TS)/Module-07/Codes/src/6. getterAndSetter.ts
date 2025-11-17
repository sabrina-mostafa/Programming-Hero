// getter & setter

class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // setter
    set addBalance(amount: number) {
        this.userBalance += amount;
    }

    get getBalance() {
        return this.userBalance;
    }
}

const userAccount1 = new BankAccount(222, "Sabina", 500);

userAccount1.addBalance = 100;
userAccount1.addBalance = 70;
console.log(userAccount1);

console.log(userAccount1.getBalance);
