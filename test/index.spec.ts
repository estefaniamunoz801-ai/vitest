import { describe, it, expect } from "vitest"; 
import { personObject } from "../src";

describe("Test index.ts", () => {

    it("test person create", async () => {

        const person = {
            name: "Estefania",
            lastName: "Muñoz",
            age: 23
        }

        const result = personObject(person);
        
        expect(result).toBeDefined();
    })
    
  });