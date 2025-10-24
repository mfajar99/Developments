// Mengelompokkan test yang membahas tentang "Error Handling" (Penanganan Error)
describe("Error Handling", () => {

   // 🧩 Membuat custom error class bernama ValidationError
   // Class ini mewarisi (extends) class bawaan JavaScript yaitu `Error`.
   // Dengan cara ini, kita bisa membuat jenis error sendiri dengan pesan yang lebih spesifik.
   class ValidationError extends Error {
      constructor(public message: string) {
         super(message); // Memanggil constructor dari class Error
      }
   }

   // 🧮 Fungsi sederhana yang menggandakan angka
   // Namun, jika nilai kurang dari 0, fungsi akan melempar error ValidationError.
   function doubleIt(value: number): number {
      if (value < 0) {
         // Melempar error custom yang kita buat sendiri
         throw new ValidationError("Validation cannot be less than 0");
      }
      // Jika tidak error, kembalikan hasil kali dua
      return value * 2;
   }

   // 🧪 Test: mencoba menangani error yang mungkin muncul
   it("should support", () => {
      try {
         // Mencoba menjalankan fungsi dengan nilai -1
         const result = doubleIt(-1); // Akan menyebabkan error
         console.info(result); // Baris ini tidak akan dijalankan karena error dilempar
      } catch (e) {
         // Menangkap error yang dilempar
         if (e instanceof ValidationError) {
            // Mengecek apakah error yang ditangkap adalah ValidationError
            console.info(e.message); // Output: Validation cannot be less than 0
         }
      }
   });
});
