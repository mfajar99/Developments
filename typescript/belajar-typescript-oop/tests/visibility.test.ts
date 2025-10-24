// Mengelompokkan beberapa test yang membahas tentang "Visibility" (tingkat akses pada class)
describe('Visibility', () => {

   // Membuat class Counter
   class Counter {
      // 'protected' artinya hanya bisa diakses dari dalam class ini dan class turunannya
      protected counter: number = 0;

      // 'public' artinya bisa diakses dari mana saja (luar class juga)
      public increment(): void {
         this.counter++; // menambah nilai counter 1 setiap kali dipanggil
      }

      // Method untuk mengambil nilai counter
      public getCounter(): number {
         return this.counter;
      }
   }

   // Membuat class turunan dari Counter bernama DoubleCounter
   class DoubleCounter extends Counter {
      // Override method increment
      // Kali ini setiap kali dipanggil, counter bertambah 2
      public increment(): void {
         this.counter += 2;
      }
   }

   // Test pertama: menggunakan class Counter
   it('should support private', () => {
      const counter = new Counter();

      // Memanggil increment 3 kali → nilai counter bertambah 3
      counter.increment();
      counter.increment();
      counter.increment();

      // Mengambil nilai counter dan menampilkannya
      console.info(counter.getCounter()); // Output: 3
   });

   // Test kedua: menggunakan class turunan (DoubleCounter)
   it('should support protected', () => {
      const counter = new DoubleCounter( );

      // Setiap increment menambah 2
      counter.increment();
      counter.increment();
      counter.increment();

      // Hasil akhir: 2 + 2 + 2 = 6
      console.info(counter.getCounter()); // Output: 6
   });
});
