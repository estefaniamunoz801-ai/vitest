import { BankAccount, Movements, IBankAccountService } from "./interfaces/bankAccount.interface";

export class BankAccountService implements IBankAccountService {
    constructor() {}

    async createAccount(initialBalance: number): Promise<BankAccount> {
        this.validateInitialBalance(initialBalance);
        return {
            balance: initialBalance,
            movements: initialBalance > 0 
            ? [{type: 'deposit', amount: initialBalance,date: new Date()}] 
            : []
        };
    }

    async deposit(account: BankAccount, amount: number): Promise<BankAccount> {
        this.validateAmount(amount);
        account.balance += amount;
        account.movements.push(this.addMovement(account, 'deposit', amount));
        return account;
    }

    async withdraw(account: BankAccount, amount: number): Promise<BankAccount> {
        this.validateAmount(amount);
        this.validateSufficientFunds(account, amount);
        account.balance -= amount;
        account.movements.push(this.addMovement(account, 'withdrawal', amount));
        return account;
    }

    getBalance(account: BankAccount): number { //
        return account.balance;
    }

    getMovements(account: BankAccount): Movements[] { //
        return account.movements;
    }

    //Validators 
    private validateInitialBalance(initialBalance: number): void {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
    }

    private validateAmount(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount must be greater than 0");
        }
    }

    private addMovement(account: BankAccount, type: 'deposit' | 'withdrawal', amount: number): Movements { //
        const movement: Movements = { type, amount, date: new Date() };
        //account.movements.push(movement);
        return movement;
    }

    private validateSufficientFunds(account: BankAccount, amount: number): void {
        if (account.balance < amount) {
            throw new Error("Insufficient balance");
        }
    }

}


