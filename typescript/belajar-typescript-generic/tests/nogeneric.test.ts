// 🧪 Mengelompokkan test yang membahas contoh class tanpa menggunakan "generic"
describe('no generic', () => {

   // 📦 Class "Data" didefinisikan dengan properti "value" yang bertipe "any"
   // - "any" berarti tipe data apa pun bisa diterima (string, number, boolean, object, dll.)
   // - Kekurangannya: TypeScript tidak bisa melakukan pemeriksaan tipe (type checking)
   //   sehingga rawan error saat dijalankan jika tipe data tidak sesuai.
   class Data {
      value: any;

      // 🏗️ Konstruktor untuk mengisi nilai awal properti "value"
      constructor(value: any) {
         this.value = value;
      }
   }

   // 🧩 Test case: menunjukkan bahwa class ini bisa menerima semua jenis nilai
   it('should accept all value', async () => {
      
      // ✅ Membuat instance dari class Data dengan nilai awal berupa string
      const data = new Data('Fajar');

      // ⚠️ Jika kita ubah ke number (contoh: data.value = 100),
      // maka baris berikutnya akan error saat runtime karena number tidak punya method .toUpperCase()
      // data.value = 100;

      // 🔠 Karena data.value adalah string, maka kita bisa memanggil .toUpperCase()
      console.info(data.value.toUpperCase()); // Output: FAJAR
   });
});
