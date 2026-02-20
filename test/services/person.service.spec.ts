import {it, describe, expect} from "vitest"
import {PersonService} from "../../src/services/person.service"

describe("PersonService", () => {
    it("create person is Estefania", async () =>{
        const service = new PersonService();
        const person= {
            name: "Estefania",
            lastName: "Muñoz",
            age: 23
        }

        const result = await service.createPerson(person)

        expect(result).toBeDefined()
        expect(result.name).toEqual("Estefania")
    })

})