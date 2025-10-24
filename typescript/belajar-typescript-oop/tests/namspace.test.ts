// 📦 Mengimpor namespace "MathUtil" dari file "../src/math-util"
// - "import { MathUtil }" berarti kita hanya mengambil namespace MathUtil yang diekspor dari file tersebut
// - "../src/math-util" menunjukkan path relatif ke file sumber (math-util.ts) yang berada di folder src
// - Namespace ini berisi konstanta dan fungsi matematika yang ingin kita uji
import { MathUtil } from "../src/math-util"

// 🧪 "describe" digunakan untuk membuat grup pengujian (test suite)
// Di sini, grupnya membahas tentang penggunaan namespace di TypeScript
describe('Namespace', () => {

   // 🧩 "it" digunakan untuk mendefinisikan satu kasus pengujian (test case)
   // Nama test case-nya adalah "should support", artinya pengujian ini memastikan bahwa namespace bekerja dengan benar
   it('should support', () => {

      // 🔢 Mengakses konstanta "PI" yang ada di dalam namespace MathUtil
      console.info(MathUtil.PI);
      // Output di console: 3.14

      // ➕ Memanggil fungsi "sum" dari namespace MathUtil untuk menghitung total dari angka-angka
      console.info(MathUtil.sum(1, 2, 3, 4, 5));
      // Output di console: 15

   });
});
