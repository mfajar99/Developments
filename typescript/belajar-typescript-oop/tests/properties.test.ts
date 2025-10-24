// Mengelompokkan test yang membahas tentang "Properties" (properti & method di dalam class)
describe('Properties', () => { 

   // Membuat class bernama Customer
   class Customer {
      // 'readonly' artinya nilai hanya bisa diisi sekali (biasanya lewat constructor)
      readonly id: number;

      // Properti 'name' memiliki nilai default "Guest"
      name: string = "Guest";  // default value

      // Tanda '?' artinya properti ini bersifat opsional (boleh diisi, boleh tidak)
      age?: number;

      // Constructor dijalankan saat membuat object baru
      constructor(id: number, name: string) {
         this.id = id;     // mengisi nilai id
         this.name = name; // mengisi nilai name
      }

      // Method: fungsi di dalam class
      sayHello(name: string): void {
         console.info(`Hello ${name}, my name is ${this.name}`);
      }
   }

   // Test pertama: menunjukkan cara menggunakan properti di class
   it('should can have properties', () => {
      // Membuat object baru dari class Customer
      const customer = new Customer(1, 'Fajar');

      // Mengisi properti age (karena tidak wajib diisi dari constructor)
      customer.age = 20;

      // Menampilkan nilai properti ke console
      console.info(customer.id);   // Output: 1
      console.info(customer.name); // Output: Fajar
      console.info(customer.age);  // Output: 20

      // Menampilkan seluruh object
      console.info(customer); // Output: Customer { id: 1, name: 'Fajar', age: 20 }
   });

   // Test kedua: menunjukkan cara menggunakan method di class
   it('should can have methods', () => {
      const customer = new Customer(1, 'Budi');

      // Memanggil method sayHello()
      customer.sayHello('Andi');
      // Output:
      // Hello Andi, my name is Budi
   });
});
