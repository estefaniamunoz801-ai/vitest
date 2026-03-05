import { IPersonService, Person } from "./interfaces/person.interface";

export class PersonService implements IPersonService {
    
    async createPerson(person:Person):Promise<Person>{
        return person
    }
}