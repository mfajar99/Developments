// 🧭 Namespace adalah cara untuk mengelompokkan kode agar lebih terorganisir.
// Di TypeScript, namespace digunakan untuk menghindari bentrok nama (name conflict)
// saat kita punya banyak variabel, fungsi, atau class dengan nama yang sama di file berbeda.


// 📦 Namespace MathUtil berisi konstanta dan fungsi matematika
export namespace MathUtil {

   // 🔢 Konstanta PI (nilai pendekatan dari π)
   export const PI: number = 3.14;

   // ➕ Fungsi sum() menerima banyak angka (menggunakan rest parameter ...values)
   // dan mengembalikan jumlah totalnya.
   export function sum(...values: number[]): number {
      let total = 0;

      // 🔁 Loop melalui semua angka yang diberikan dan jumlahkan satu per satu
      for (const value of values) {
         total += value;
      }

      // 🔙 Kembalikan hasil penjumlahan
      return total;
   }

}


// 🧍 Namespace Fajar (masih kosong)
// Kamu bisa menambahkan properti, fungsi, atau class di sini nanti.
// Misalnya: export function sayHello() { ... }
export namespace Fajar {

}


// 🧍 Namespace Amir (masih kosong)
// Sama seperti Fajar, ini bisa digunakan untuk mengelompokkan kode milik "Amir"
export namespace Amir {

}
