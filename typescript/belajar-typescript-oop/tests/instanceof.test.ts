// Mengelompokkan test yang membahas tentang "Instance Of"
describe('Instance Of', () => {
   
   // Membuat dua class kosong: Employee dan Manager
   class Employee {}
   class Manager {}

   // Membuat object baru dari masing-masing class
   const budi = new Employee();
   const eko = new Manager();

   // Test pertama: menggunakan typeof
   it('should have problem using typeof', () => {
      // typeof hanya mengembalikan tipe dasar JavaScript seperti 'object', 'string', 'number', dll
      // Jadi tidak bisa membedakan apakah object ini dari class Employee atau Manager
      console.info(typeof budi); // Output: "object"
      console.info(typeof eko);  // Output: "object"
   });

   // Test kedua: menggunakan instanceof
   it('should support instanceof', () => {
      // instanceof digunakan untuk mengecek apakah sebuah object dibuat dari class tertentu
      expect(budi instanceof Employee).toBe(true);  // budi adalah instance dari Employee
      expect(budi instanceof Manager).toBe(false);  // budi bukan instance dari Manager

      expect(eko instanceof Employee).toBe(false);  // eko bukan instance dari Employee
      expect(eko instanceof Manager).toBe(true);    // eko adalah instance dari Manager
   });
});
