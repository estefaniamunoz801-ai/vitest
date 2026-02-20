export interface Person {
    name: string,
    lastName: string,
    age: number
}


export interface IPersonService {
    createPerson(person:any):Promise<any>;
}