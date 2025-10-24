/*
   Test ini menggunakan framework testing Jest.
   - describe("Hello", ...) mendefinisikan grup test dengan nama "Hello".
   - it("should say hello", ...) adalah satu kasus test yang memeriksa perilaku tertentu.
   - Di dalam test, dibuat variabel name yang diisi string "Hello Fajar".
   - Fungsi expect(name).toBe("Hello Fajar") digunakan untuk memastikan bahwa nilai variabel name benar-benar sama persis dengan "Hello Fajar".
   - Jika nilai name tidak sama dengan "Hello Fajar", maka test akan gagal.
   Test ini berguna untuk memastikan bahwa variabel atau fungsi yang menghasilkan sapaan "Hello Fajar" bekerja sesuai harapan.
*/
describe("Hello", function () {
   it("should say hello", function () {
      const name = "Hello Fajar";
      expect(name).toBe("Hello Fajar");
   });
});