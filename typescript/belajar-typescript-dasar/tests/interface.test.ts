import type { Employee, Manager } from '../src/employee';
import type { Person } from '../src/person';
import type { Seller } from '../src/seller';

describe('Interface', function () {
   it('should support in typescript', function () {
      const seller: Seller = {
         id: 1,
         name: 'Toko ABC',
         nib: '24242342',
         npwp: '88038493',
      };

      seller.name = 'Toko Fajar';

      console.info(seller);
   });

   it('should support function interface', function () {
      interface AddFunction {
         (value1: number, value2: number): number;
      };

      const add: AddFunction = (value1: number, value2: number): number => {
         return value1 + value2;
      };

      expect(add(2,2)).toBe(4);
   });   

   it('should support indexable interface', function () {
      interface StringArray {
         [index: number]: string
      }

      const names : StringArray = ['Fajar', 'Amir'];
      console.info(names)
   })

   it('should support indexable interface for non number index', function () {
      interface StringDictionary {
         [key: string] : string
      }

      const dictionary: StringDictionary = {
         'name' : 'Fajar',
         'address' : 'Indonesia'
      };

      expect(dictionary['name']).toBe('Fajar')
      expect(dictionary['address']).toBe('Indonesia')
   });

   it('should support extends interface', function () {
      const employee: Employee = {
         id: '1',
         name: 'Fajar',
         division: 'IT'
      };
      
      console.info(employee);


      const manager: Manager = {
         id: '2',
         name: 'Amir',
         division: 'IT',
         numberOfEmployees: 10
      };

      console.info(manager);
   });

   it('should support function in interface', function () {
      const person: Person = {
         name: 'Fajar',
         sayHello: function (name: string): string {
            return `Hello ${name}, my names is ${this.name}`;
         }
      }

      console.info(person.sayHello('Amir'));
   });

   it('should support intersection types', function () {
      interface HasName {
         name: string
      }

      interface Hasid {
         id: string
      }

      type Domain = Hasid & HasName;

      const domain: Domain = {
         id: '1',
         name: 'Fajar'
      };

      console.info(domain)
   })
   
   it('should support type assertions', function () {
      const person: any = {
         name: 'Fajar',
         age: '28'
      };

      const person2 : Person = person as Person;
      console.info(person2);
   });

});
