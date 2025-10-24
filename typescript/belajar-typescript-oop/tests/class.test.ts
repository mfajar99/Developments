// Mengelompokkan beberapa test case ke dalam satu grup bernama "class"
describe('class', () => { 

   // Membuat class bernama Customer
   class Customer {
      // Constructor akan dijalankan otomatis saat membuat object baru dari class ini
      constructor() {
         console.info("Create new customer"); // Menampilkan pesan di console
      }
   }

   // Membuat class bernama Order (masih kosong, belum punya isi)
   class Order {

   }

   // Test pertama: memastikan bahwa class bisa dibuat (diinstansiasi)
   it('should can create class', () => {

      // Membuat object baru dari class Customer
      const customer: Customer = new Customer();

      // Membuat object baru dari class Order
      const order = new Order();   
   });

   // Test kedua: memastikan constructor dijalankan setiap kali membuat object baru
   it('should can create constructors', () => {

      // Membuat dua object baru dari class Customer
      // Setiap kali dijalankan, constructor akan menampilkan pesan di console
      new Customer();
      new Customer();
   })
});
