// Mengelompokkan test yang membahas tentang "Relationship" (Hubungan antar class)
describe('Relationship', () => {

   // 🧩 Class Person
   class Person {
      constructor(public name: string) {}
   }

   // 🧩 Class Customer
   class Customer {
      constructor(public name: string) {}
   }

   // 🧪 Test: mencoba hubungan antara dua class berbeda
   it('should support', () => {
      // ⚠️ Secara default, TypeScript membolehkan ini karena struktur (shape) kedua class sama.
      // Kedua class memiliki properti "name" dengan tipe string,
      // sehingga secara *structural typing*, Customer dianggap "mirip" dengan Person.
      const person: Person = new Customer('Fajar');

      // Menampilkan nama
      console.info(person.name); // Output: Fajar
   });
});
