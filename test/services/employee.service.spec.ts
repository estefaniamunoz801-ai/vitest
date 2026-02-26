import {it, describe, expect} from "vitest"
import {EmployeeService} from "../../src/services/employee.service"

describe("EmployeeService", () => {
    it("create employee is Estefania", async () =>{
        const service = new EmployeeService();
        const employee= {
            name: "Estefania",
            lastName: "Muñoz",
            age: 23
        }

        const result = await service.createEmployee(employee)

        expect(result).toBeDefined()
        expect(result.name).toEqual("Estefania")

    })
    
    it("should throw an error if name is empty", async () => { 
        const service = new EmployeeService();
        const employee = {
            name: "",
            lastName: "Muñoz",
            age: 23
        }
        
        await expect(service.createEmployee(employee)).rejects.toThrow()
    })

    it("should throw an error if name is less than 3 characters", async () => {
        const service = new EmployeeService();
        const employee = {
            name: "CA",
            lastName: "Muñoz",
            age: 23
        }
        
        await expect(service.createEmployee(employee)).rejects.toThrow()
    })

    it("should throw an error if last name is empty", async () => {
        const service = new EmployeeService();
        const employee = {
            name:"Daniel",
            lastName:" ",
            age: 24
        }

        await expect(service.createEmployee(employee)).rejects.toThrow()
    })

    it("should throw an error if last name is less than 3 characters", async () => {
        const service = new EmployeeService();
        const employee = {
            name:"Daniel",
            lastName:"Mu",
            age: 24
        }

        await expect(service.createEmployee(employee)).rejects.toThrow()
    })

    it("should throw an error if age is greater than 18", async () => {
        const service = new EmployeeService();
        const employee = {
            name:"Daniel",
            lastName:"Montoya",
            age: 17
        }

        await expect(service.createEmployee(employee)).rejects.toThrow()
    })

    it("create employee if age is 18", async () => {
        const service = new EmployeeService();
        const employee = {
            name:"Daniel",
            lastName:"Montoya",
            age: 18
        }

        const result = await service.createEmployee(employee)

        expect(result.age).toBe(18)
    })

    it ("should return the full name of the employee", async () => {
        const service = new EmployeeService();
        const employee = {
            name: "Daniel",
            lastName: "Montoya",
            age: 24
        }
        const result = await service.createEmployee(employee)
        expect(result.fullName).toBe("Daniel Montoya")
    })

    it("should return complete employee object", async () => {
        const service = new EmployeeService();
        const employee = {
            name: "Estefania",
            lastName: "Muñoz",
            age: 24 
        }
        const result = await service.createEmployee(employee)
        expect(result).toEqual({
            name: "Estefania",
            lastName: "Muñoz",
            age: 24,
            fullName: "Estefania Muñoz"
        })
    })
})