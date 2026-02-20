import { IPersonService, Person } from "./interfaces/person.interface";

export class PersonService implements IPersonService {
    constructor(){

    }

    async createPerson(person:Person):Promise<Person>{
        return person
    }
}