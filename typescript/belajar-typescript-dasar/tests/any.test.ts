// Test untuk menunjukkan penggunaan tipe data 'any' di TypeScript.
// Tipe 'any' memungkinkan variabel memiliki nilai dan properti apa saja tanpa pemeriksaan tipe.
describe('Any', function () {
   it ('should support in typescript', function () {

      const person: any = {
         id: 1,
         name: "Fajar Amir",
         age: 28
      };

      // Properti dan nilai bisa diubah atau ditambah tanpa error tipe
      person.age = 28;
      person.address = "Indonesia";

      // Menampilkan objek person ke konsol
      console.info(person);
      
   })
})