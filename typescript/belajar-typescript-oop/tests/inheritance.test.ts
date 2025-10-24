// Mengelompokkan beberapa test yang membahas tentang "Inheritance" (pewarisan class)
describe('Inheritance', () => {

   // Parent class (kelas induk)
   class Employee {
      name: string; // properti untuk menyimpan nama karyawan

      // Constructor dijalankan ketika membuat object baru dari class ini
      constructor(name: string) {
         this.name = name;
      }
   }

   // Child class (kelas turunan) Manager mewarisi semua properti dan method dari Employee
   class Manager extends Employee {

   }

   // Class Director juga merupakan turunan, tapi dari Manager
   // Jadi, Director mewarisi Employee → Manager → Director (rantai pewarisan)
   class Director extends Manager {

   }

   // Membuat test untuk memastikan inheritance berjalan
   it('should support', () => {

      // Membuat object dari class Employee
      const employee = new Employee('Andi');
      console.info(employee.name); // Output: Andi

      // Membuat object dari class Manager
      const manager = new Manager('Budi');
      console.info(manager.name); // Output: Budi

      // Membuat object dari class Director
      const director = new Director('Jaka');
      console.info(director.name); // Output: Jaka
   });
});
