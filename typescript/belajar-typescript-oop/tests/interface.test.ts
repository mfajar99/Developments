// Mengelompokkan test yang membahas tentang "Interface" di TypeScript
describe('Interface', () => {

   // Interface pertama: menentukan bahwa object harus punya properti 'name'
   interface HasName {
      name: string;
   }

   // Interface kedua: menentukan bahwa object harus punya method 'sayHello'
   interface CanSayHello {
      sayHello(name: string): void;
   }

   // Class Person "mengimplementasikan" dua interface di atas
   // Artinya class ini wajib memiliki properti 'name' dan method 'sayHello'
   class Person implements HasName, CanSayHello {
      name: string; // sesuai dari interface HasName

      // Constructor dijalankan saat membuat object baru
      constructor(name: string) {
         this.name = name;
      }

      // Method ini sesuai dengan kontrak dari interface CanSayHello
      sayHello(name: string): void {
         console.info(`Hello ${name}, my name is ${this.name}`);
      }
   }

   // Membuat test untuk memastikan interface bekerja dengan benar
   it('should support inheritance', () => {
      // Membuat object baru dari class Person
      const person = new Person('Fajar');

      // Memanggil method sayHello
      person.sayHello('Budi');
      // Output:
      // Hello Budi, my name is Fajar
   });
});
