// Encapsulation - to limit the access of any property/method using access modifier

class BankAccount {
    public readonly userId: number;
    public userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    private addBalance(amount: number) {
        return this.userBalance +=amount;
    }

    getHiddenMethod(amount: number) {
        return this.addBalance(amount);
    }

}

const user1 = new BankAccount(111, "Mr. X", 200);

console.log(user1.getHiddenMethod(500));