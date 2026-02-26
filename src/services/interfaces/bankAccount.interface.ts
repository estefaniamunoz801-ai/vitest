export interface Movements {
    type: 'deposit' | 'withdrawal',
    amount: number,
    date: Date,
}

export interface BankAccount {
    balance: number,
    movements: Movements[];
}

export interface IBankAccountService {
    createAccount(initialBalance: number): Promise<BankAccount>;
    deposit(account: BankAccount, amount: number): Promise<BankAccount>;
    withdraw(account: BankAccount, amount: number): Promise<BankAccount>;
    getBalance(account: BankAccount): number;
    getMovements(account: BankAccount): Movements[];
}