export interface Employee {
    name: string,
    lastName: string,
    age: number,
    fullName?: string
}


export interface IEmployeeService {
    createEmployee(employee:Employee):Promise<Employee>;
}