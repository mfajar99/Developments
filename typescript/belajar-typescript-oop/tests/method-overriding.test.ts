// Mengelompokkan beberapa test yang membahas tentang "Method Overriding"
describe('Method Overriding', () => {

   // Membuat class dasar (parent class) bernama Employee
   class Employee {
      name: string; // Menyimpan nama karyawan

      // Constructor dijalankan saat object dibuat
      constructor(name: string) {
         this.name = name; // Menyimpan nilai parameter ke properti class
      }

      // Method sayHello untuk menampilkan sapaan
      sayHello(name: string): void {
         console.info(`Hello ${name}, my name is ${this.name}`);
      }
   }

   // Membuat class turunan (child class) bernama Manager
   // Manager mewarisi semua properti dan method dari Employee
   class Manager extends Employee {

      // Method sayHello di sini menimpa (override) method dari class Employee
      sayHello(name: string): void {
         // Memanggil method sayHello milik class Employee menggunakan super
         super.sayHello(name);

         // Menambahkan perilaku tambahan setelah method parent dijalankan
         console.info(`And, I am your manager`);
      }
   }

   // Membuat test untuk memastikan method overriding bekerja
   it('should support', () => {

      // Membuat object Employee dan memanggil sayHello()
      const employee = new Employee('Fajar');
      employee.sayHello('Budi');
      // Output:
      // Hello Budi, my name is Fajar

      // Membuat object Manager dan memanggil sayHello()
      const manager = new Manager('Fajar');
      manager.sayHello('Budi');
      // Output:
      // Hello Budi, my name is Fajar
      // And, I am your manager
   });
});
