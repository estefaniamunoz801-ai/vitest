import {it, describe, expect} from "vitest"
import {BankAccountService} from "../../src/services/bankAccount.service"

describe("BankAccountService", () => {
    it("should create account with initial balance", async () =>{
        const service = new BankAccountService();
        const account = await service.createAccount(4500);

        expect(account.balance).toBe(4500);
        expect(account.movements.length).toBe(1);
    })

    it("should store the movements correctly", async () => {
        const service = new BankAccountService();
        const account = await service.createAccount(1500);

        await service.withdraw(account,1000);
        await service.deposit(account,700);
        
        const movements = service.getMovements(account);

        expect(movements).toHaveLength(3);
        expect(movements[1].type).toBe('withdrawal');
        expect(movements[2].amount).toBe(700);
    })

    it("should return the updated balance after several movements", async () =>{
        const service = new BankAccountService();
        const account = await service.createAccount(5200);
        await service.deposit(account,1000);
        await service.withdraw(account,2000);

        const balance = await service.getBalance(account);

        expect(account.balance).toBe(4200)
    })

    it("should throw an error if initial balance is negative", async () => {
        const service = new BankAccountService();
        await expect(service.createAccount(-1000)).rejects.toThrow();
    })

    it("should throw an error if deposit amount is less than or equal to 0", async () => {
        const service = new BankAccountService();
        const account = await service.createAccount(8000);
        await expect(service.deposit(account, -500)).rejects.toThrow();
        await expect(service.deposit(account, 0)).rejects.toThrow();
    })

    it("should throw an error if withdrawal amount is less than or equal to 0", async () => {
        const service = new BankAccountService();
        const account = await service.createAccount(5000);
        await expect(service.withdraw(account,-1000)).rejects.toThrow();
        await expect(service.withdraw(account,0)).rejects.toThrow();
    })

    it("should throw an error if more than the available balance is withdrawn.", async () => {
        const service = new BankAccountService();
        const account = await service.createAccount(1200);
        await expect(service.withdraw(account,1201)).rejects.toThrow();
    })

})