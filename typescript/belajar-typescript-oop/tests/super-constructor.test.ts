// Mengelompokkan test yang membahas tentang "Super Constructor"
describe('Super Constructor', () => {
   
   // Class induk (parent class)
   class Person {
      name: string; // properti untuk menyimpan nama

      // Constructor dijalankan ketika membuat object baru dari class ini
      constructor(name: string) {
         this.name = name;
      }
   }

   // Class turunan (child class) yang mewarisi dari Person
   class Employee extends Person {
      department: string; // properti tambahan khusus untuk Employee

      // Constructor di class turunan
      constructor(name: string, department: string) {
         // Memanggil constructor milik class induk (Person)
         // supaya properti 'name' diisi oleh parent
         super(name);

         // Mengisi properti tambahan milik class Employee
         this.department = department;
      }
   }

   // Membuat test untuk memastikan super constructor berfungsi
   it('should support', () => {
      // Membuat object baru dari class Employee
      const employee = new Employee('Fajar', 'Amir');

      // Menampilkan hasil properti dari parent class dan child class
      console.info(employee.name);        // Output: Fajar
      console.info(employee.department);  // Output: Amir
   });
});
