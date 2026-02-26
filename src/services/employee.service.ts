import { IEmployeeService, Employee } from "./interfaces/employee.interface";

export class EmployeeService implements IEmployeeService {
    constructor() {}

    async createEmployee(employee:Employee):Promise<Employee>{
        this.validateEmployee(employee);
        employee.fullName = this.generateFullName(employee);
        return employee
    }

    private validateEmployee(employee: Employee): void {
        this.validateName(employee.name);
        this.validateLastName(employee.lastName);
        this.validateAge(employee.age);
    }

    private validateName(name: string): void {
        if (!name || name.trim() === "") {
            throw new Error("Name is required");
        }

        if (name.trim().length < 3) {
            throw new Error("Name must be at least 3 characters long");
        }
    }

    private validateLastName(lastName:string) : void {
        if(!lastName || lastName.trim() === ""){
            throw new Error("Last name is required")
        }

        if(lastName.trim().length < 3){
            throw new Error ("Last name must be at least 3 characters long")
        }
    }

    private validateAge(age: number): void {
        if(age < 18){ 
            throw new Error ("Age must be at least 18")
        }
    }

    private generateFullName(employee: Employee): string {
        return `${employee.name.trim()} ${employee.lastName.trim()}`;
    }

}