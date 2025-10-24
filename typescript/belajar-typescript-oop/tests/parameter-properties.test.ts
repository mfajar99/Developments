// Mengelompokkan test yang membahas tentang "Parameter Properties"
describe('Parameter Properties', () => {

   // Membuat class bernama Person
   class Person {
      // Parameter properties: langsung mendeklarasikan dan menginisialisasi properti di constructor
      constructor(public name: string) {
         // Tidak perlu lagi menulis: this.name = name;
      }
   }

   // Test untuk memastikan parameter properties berfungsi
   it('should support', () => {
      // Membuat object baru dari class Person
      const person = new Person('Budi');

      // Menampilkan nilai properti name
      console.info(person.name); // Output: Budi

      // Mengubah nilai properti name
      person.name = 'Andi';
      console.info(person.name); // Output: Andi
   });
});
