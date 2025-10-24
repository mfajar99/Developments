// Mengelompokkan test yang membahas tentang "Polymorphism" (Polimorfisme)
describe('Polymorphism', () => {

   // ✅ Class dasar (parent class)
   class Employee {
      constructor(public name: string) {}
   }
 
   // ✅ Class Manager mewarisi (extends) dari Employee
   class Manager extends Employee {}

   // ✅ Class VicePresident mewarisi dari Manager (berarti juga turunan dari Employee)
   class VicePresident extends Manager {}
   
   // ✅ Fungsi sayHello menggunakan tipe parameter Employee.
   // Karena Manager dan VicePresident adalah turunan dari Employee,
   // maka fungsi ini bisa menerima semua jenis object turunan tersebut.
   // Di sini kita gunakan `instanceof` untuk menentukan jenis class-nya.
   function sayHello(employee: Employee): void {
      if (employee instanceof VicePresident) {
         const vp = employee as VicePresident;
         console.info(`Hello VP ${vp.name}`);
      } else if (employee instanceof Manager) {
         const manager = employee as Manager;
         console.info(`Hello Manager ${manager.name}`);
      } else {
         console.info(`Hello Employee ${employee.name}`);
      }
   }

   // ⚠️ Contoh fungsi yang salah urutan pengecekan `instanceof`
   // Karena VicePresident juga merupakan turunan dari Manager,
   // maka jika kita cek `Manager` terlebih dahulu, hasilnya salah —
   // VicePresident akan terdeteksi sebagai Manager.
   function sayHelloWrong(employee: Employee): void {
      if (employee instanceof Manager) { // Salah: ini akan menangkap VicePresident juga
         const manager = employee as Manager;
         console.info(`Hello Manager ${manager.name}`);
      } else if (employee instanceof VicePresident) {
         const vp = employee as VicePresident;
         console.info(`Hello VP ${vp.name}`);
      } else {
         console.info(`Hello Employee ${employee.name}`);
      }
   }

   // 🧩 Test pertama: contoh dasar polymorphism dengan variabel
   it('should support', () => {
      // Variabel "employee" bertipe Employee
      let employee: Employee = new Employee('Fajar');
      console.info(employee); // Instance dari Employee

      // Polymorphism: variabel bertipe Employee bisa menyimpan object dari class turunannya
      employee = new Manager('Fajar');
      console.info(employee); // Instance dari Manager

      // Bahkan bisa juga menyimpan instance dari VicePresident
      employee = new VicePresident('Fajar');
      console.info(employee); // Instance dari VicePresident
   });

   // 🧩 Test kedua: polymorphism dalam parameter fungsi
   it('should support method parameter polymorphism', () => {
      // Fungsi sayHello menerima Employee, tapi bisa juga menerima turunan lain
      sayHello(new Employee('Eko'));          // Output: Hello Employee Eko
      sayHello(new Manager('Budi'));          // Output: Hello Manager Budi
      sayHello(new VicePresident('Joko'));    // Output: Hello VP Joko
   });

   // ⚠️ Test ketiga: contoh fungsi dengan logika `instanceof` yang salah urutan
   it('should support method parameter polymorphism wrong', () => {
      // Karena urutan pengecekan salah, VicePresident akan terdeteksi sebagai Manager
      sayHelloWrong(new Employee('Eko'));          // Output: Hello Employee Eko
      sayHelloWrong(new Manager('Budi'));          // Output: Hello Manager Budi
      sayHelloWrong(new VicePresident('Joko'));    // ❌ Output: Hello Manager Joko (harusnya "Hello VP Joko")
   });
});
