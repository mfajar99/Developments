// Mengelompokkan beberapa test yang membahas tentang "Getter dan Setter"
describe('Getter and Setter', () => {

   // Membuat class bernama Category
   class Category {
      // Properti "_name" diawali dengan garis bawah (_) karena sifatnya seperti "private"
      // Artinya, tidak langsung diakses dari luar class, tapi lewat getter dan setter.
      _name?: string;

      // Getter digunakan untuk "mengambil" nilai _name dengan cara khusus
      get name(): string {
         // Jika _name sudah ada isinya, kembalikan nilainya
         if (this._name) {
            return this._name;
         } else {
            // Jika belum diisi, kembalikan teks 'empty'
            return 'empty';
         }
      }

      // Setter digunakan untuk "mengatur" nilai _name dengan cara khusus
      set name(value: string) {
         // Hanya simpan value jika tidak kosong
         if (value !== '') {
            this._name = value;
         }
      }
   }

   // Membuat test untuk memastikan getter dan setter bekerja
   it('should support in class', () => {
      // Membuat object baru dari class Category
      const category = new Category();

      // Memanggil getter (karena belum diisi, akan tampil "empty")
      console.info(category.name); // Output: empty

      // Menggunakan setter untuk mengisi nilai name
      category.name = 'Food';
      console.info(category.name); // Output: Food

      // Mencoba mengisi dengan string kosong -> tidak akan diubah
      category.name = '';
      console.info(category.name); // Output: tetap "Food"
   });
});
