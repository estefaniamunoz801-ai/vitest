let person = {
    name: "Estefania",
    lastName: "Muñoz",
    age: 23
}

export const personObject = async (person: any) => {
    console.log("person is ",person);
    return person;
}

personObject(person);