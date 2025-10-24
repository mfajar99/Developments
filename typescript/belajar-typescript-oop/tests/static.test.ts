// Mengelompokkan test yang membahas tentang "Static"
describe('Static', () => {

   // 🧩 Class Configuration berisi properti static.
   // Properti static bisa diakses langsung dari class-nya,
   // tanpa perlu membuat object (instance).
   class Configuration {
      static NAME: string = 'Belajar TypeScript OOP';
      static VERSION: number = 1.0;
      static AUTHOR: string = 'Muhammad Fajar Amir';
   }

   // 🧮 Class MathUtil dengan method static
   // Static method biasanya digunakan untuk fungsi utilitas
   // yang tidak bergantung pada data dari object.
   class MathUtil {
      static sum(...values: number[]): number {
         let total = 0;
         for (const value of values) {
            total += value;
         }
         return total;
      }
   }

   // 🧩 Test: penggunaan static method
   it('should support static method', () => {
      // Memanggil static method langsung lewat nama class-nya, tanpa membuat instance
      console.info(MathUtil.sum(1, 2, 3, 4, 5)); // Output: 15
   });

   // 🧩 Test: penggunaan static property
   it('should support static property', () => {
      // Mengakses property static langsung lewat class-nya
      console.info(Configuration.NAME);     // Output: Belajar TypeScript OOP
      console.info(Configuration.VERSION);  // Output: 1.0
      console.info(Configuration.AUTHOR);   // Output: Muhammad Fajar Amir
   });
});
