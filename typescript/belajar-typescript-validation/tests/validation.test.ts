// 📦 Import modul "zod" untuk membuat dan mengelola skema validasi data
// - z → digunakan untuk membuat skema (schema builder)
// - ZodError → digunakan untuk menangani error validasi
// - RefinementCtx → digunakan untuk membuat validasi custom (manual)
import { z, ZodError, type RefinementCtx } from "zod";

// 🧪 Mengelompokkan semua test yang berhubungan dengan "zod"
describe('zod', () => {

   // ✅ Contoh dasar validasi string
   it('should support validation', async () => {
      // Membuat skema validasi string dengan panjang minimal 3 dan maksimal 100
      const schema = z.string().min(3).max(100);

      const request = "eko"; // Data yang akan divalidasi
      const result = schema.parse(request); // parse() → validasi dan kembalikan hasil

      expect(result).toBe('eko'); // ✅ Lolos validasi
   });

   // ✅ Validasi berbagai tipe data primitif (string, boolean, number)
   it('should support validate primitive data type', async () => {

      const emailSchema = z.string().email(); // Harus email
      const isAdminSchema = z.boolean(); // Harus boolean
      const priceSchema = z.number().min(1000).max(1000000); // Harus angka antara 1000–1.000.000

      // Jika data valid, parse() akan mengembalikan nilainya
      const email = emailSchema.parse('fajar@example.com');
      console.info(email);

      const isAdmin = isAdminSchema.parse(true);
      console.info(isAdmin);

      const price = priceSchema.parse(10000);
      console.info(price);
   });

   // ✅ Konversi tipe data otomatis menggunakan z.coerce
   it('should support data conversion', async () => {

      const usernameSchema = z.coerce.string().min(3).max(100);
      const isAdminSchema = z.coerce.boolean(); // Akan mengubah "true"/"false" string → boolean
      const priceSchema = z.coerce.number().min(1000).max(1000000);

      const username = usernameSchema.parse(12345); // 🔄 number → string
      console.info(username); // "12345"

      const isAdmin = isAdminSchema.parse("true"); // 🔄 string → boolean
      console.info(isAdmin); // true

      const price = priceSchema.parse("10000"); // 🔄 string → number
      console.info(price); // 10000
   });

   // ✅ Validasi tanggal (Date)
   it('should support date validation', async () => {
      const birthDateSchema = z.coerce.date()
         .min(new Date(1980, 0, 1)) // tanggal minimal
         .max(new Date(2020, 0, 1)); // tanggal maksimal

      const birthDate = birthDateSchema.parse("1990-01-01"); // string akan diubah ke Date
      console.info(birthDate);

      const birtDate2 = birthDateSchema.parse(new Date(1990, 0, 1));
      console.info(birtDate2);
   });

   // ❌ Menangani error ketika data tidak valid
   it('should return zod error if invalid', async () => {

      const schema = z.string().email().min(3).max(100);

      try {
         schema.parse('fj'); // ❌ Tidak valid (bukan email, terlalu pendek)
      } catch (err) {
         if (err instanceof ZodError) {
            console.error(err);
            // err.errors.forEach(e => console.info(e.message)); // Menampilkan pesan error per bagian
         }
      }
   });

   // ✅ Menangani error tanpa "throw exception" menggunakan safeParse()
   it('should return zod error if invalid without exception', async () => {

      const schema = z.string().email().min(3).max(100);
      const result = schema.safeParse('fajar@example.com'); // Tidak akan throw error

      if (result.success) {
         console.info(result.data); // ✅ Valid
      } else {
         console.error(result.error); // ❌ Tidak valid
      }
   });

   // ✅ Validasi object
   it('should can validate object', async () => {

      const loginSchema = z.object({
         username: z.string().email(),
         password: z.string().min(6).max(20)
      });

      const request = {
         username: 'fajar@example.com',
         password: 'rahasia',
         ignore: 'ignore', // Properti tambahan akan diabaikan
         name: 'Muhammad Fajar'
      };

      const result = loginSchema.parse(request);
      console.info(result); // Hanya field sesuai schema yang diambil
   });

   // ✅ Validasi object bersarang (nested object)
   it('should support nested object', async () => {

      const createUserSchema = z.object({
         id: z.string().max(100),
         name: z.string().max(100),
         address: z.object({
            street: z.string().max(100),
            city: z.string().max(100),
            zip: z.string().max(10),
            country: z.string().max(100)
         })
      });
      
      const request = {
         id: '123',
         name: 'Fajar',
         address: {
            street: 'Jalan yang sama',
            city: 'Sampang',
            zip: '12345',
            country: 'Indonesia'
         }
      };

      const result = createUserSchema.parse(request);
      console.info(result);
   });

   // ✅ Validasi array
   it('should support array validation', async () => {

      const schema = z.array(
         z.string().email()
      ).min(1).max(10); // Array minimal 1 elemen dan maksimal 10

      const request = ["fajar@example.com", "budi@example.com"];
      const result = schema.parse(request);

      console.info(result);
   });

   // ✅ Validasi Set (mirip array tapi tanpa duplikat)
   it('should support set validation', async () => {

      const schema = z.set(
         z.string().email()
      ).min(1).max(10);

      const request = new Set(["fajar@example.com", "budi@example.com", "andi@example.com"]);
      const result = schema.parse(request);

      console.info(result);
   });

   // ✅ Validasi Map (key-value pair)
   it('should support map validation', async () => {

      const schema = z.map(
         z.string(),         // key harus string
         z.string().email()  // value harus email
      );

      const request = new Map([
         ['fajar', 'fajar@example.com'],
         ['amir', 'amir@example.com'],
      ]);

      const result = schema.parse(request);
      console.info(result);
   });

   // ✅ Menampilkan pesan error custom jika validasi gagal
   it('should can validate object with message', async () => {

      const loginSchema = z.object({
         username: z.string().email('username harus email'),
         password: z.string()
            .min(6, 'password minimal 6 karakter')
            .max(20, 'password maksimal 20 karakter')
      });

      const request = {
         username: 'fajar@example.com',
         password: '123456'
      };

      try {
         const result = loginSchema.parse(request);
         console.info(result);
      } catch (err) {
         console.error(err);
      }
   });

   // ✅ Optional field: boleh ada atau tidak
   it('should can support optional validation', async () => {

      const registerSchema = z.object({
         username: z.string().email(),
         password: z.string().min(6).max(20),
         firstName: z.string().min(3).max(100),
         lastName: z.string().min(3).max(100).optional() // ❗ optional = boleh tidak diisi
      });

      const request = {
         username: 'fajar@example.com',
         password: 'rahasia',
         firstName: 'Fajar'
      };

      const result = registerSchema.parse(request);
      console.info(result);
   });

   // ✅ Transform data saat validasi (ubah data sebelum dikembalikan)
   it('should support transform', async () => {

      const schema = z.string().transform((data) => {
         // ubah huruf jadi kapital dan hapus spasi di awal/akhir
         return data.toUpperCase().trim();
      });

      const result = schema.parse('fajar');
      console.info(result); // "FAJAR"
   });
   
   // ⚙️ Contoh membuat validasi custom dengan RefinementCtx
   function mustUpperCase(data: string, ctx: RefinementCtx): string {
      // Jika data tidak huruf besar semua → tambahkan error
      if (data !== data.toUpperCase()) {
         ctx.addIssue({
            code: z.ZodIssueCode.custom, // Menandakan error kustom
            message: 'username harus uppercase'
         });
         return z.NEVER; // Memberi tahu Zod bahwa validasi gagal
      } else {
         return data; // Jika valid, kembalikan datanya
      }
   }

   // ✅ Menggunakan fungsi validasi custom
   it('should can use custom validation', async () => {

      const loginSchema = z.object({
         username: z.string().email().transform(mustUpperCase),
         password: z.string().min(6).max(20)
      });

      const request = {
         username: 'FAJAR@EXAMPLE.COM', // ✅ sudah huruf besar
         password: 'rahasia'
      };

      const result = loginSchema.parse(request);
      console.info(result);
   });
});
