// Mengelompokkan test yang membahas tentang "Abstract Class"
describe('Abstract Class', () => {

   // 🧩 Abstract class tidak bisa dibuat object secara langsung (tidak bisa diinstansiasi).
   // Biasanya digunakan sebagai *blueprint* (cetakan dasar) untuk class lain.
   abstract class Customer {
      // Properti hanya bisa dibaca (tidak bisa diubah setelah dibuat)
      readonly id: number;

      // Properti abstract -> wajib diimplementasikan di class turunan
      abstract name: string;

      // Constructor untuk menginisialisasi id
      constructor(id: number) {
         this.id = id;
      }

      // Method biasa yang bisa langsung digunakan oleh class turunan
      hello() {
         console.info('Hello');
      }

      // Method abstract -> wajib diimplementasikan di class turunan
      abstract sayHello(name: string): void;
   }

   // 🧩 Class RegularCustomer mewarisi (extends) dari Customer
   // Karena Customer adalah abstract class, maka RegularCustomer harus
   // mengimplementasikan semua member abstract (misalnya "name" dan "sayHello").
   class RegularCustomer extends Customer {
      name: string;

      // Constructor wajib memanggil constructor parent (super)
      constructor(id: number, name: string) {
         super(id); // memanggil constructor Customer
         this.name = name;
      }

      // Mengimplementasikan method abstract dari class Customer
      sayHello(name: string): void {
         console.info(`Hello ${name}, my name is ${this.name}`);
      }
   }
   
   // 🧩 Test: penggunaan abstract class lewat class turunannya
   it('should support', () => {
      // Tidak bisa: const customer = new Customer(1); ❌
      // Karena Customer adalah abstract class
      
      // Yang benar: membuat object dari class turunan
      const customer1 = new RegularCustomer(1, 'Fajar');

      // Memanggil method yang diimplementasikan
      customer1.sayHello('Fajar'); // Output: Hello Fajar, my name is Fajar
   });
});
