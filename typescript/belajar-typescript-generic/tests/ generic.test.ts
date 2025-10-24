describe('generic', () => {

   // CLASS GENERIC DENGAN 1 TYPE PARAMETER
   // T adalah type parameter yang bisa diganti dengan tipe data apapun
   class GenericData<T> {
      value: T; 

      constructor(value: T) {
         this.value = value;
      }

      get(): T {
         return this.value;
      }

      set(value: T) {
         this.value = value;
      }
   }

   it('should support multiple data type', async () => {
      // Menggunakan generic dengan type number
      const dataNumber = new GenericData<number>(123);  
      expect(dataNumber.value).toBe(123); 

      // Menggunakan generic dengan type string
      const dataString = new GenericData<string>('Fajar');
      // Karena TypeScript tahu ini string, kita bisa pakai method string
      const upper = dataString.value.toUpperCase(); 
      expect(upper).toBe("FAJAR");
   });

   // FUNCTION GENERIC
   // T di sini membuat function bisa menerima dan mengembalikan berbagai tipe data
   function create<T>(value: T): T {
      return value;
   }

   it('should support function generic', async () => {
      // Function generic dengan type string
      const result: string = create<string>('Fajar');
      expect(result).toBe('Fajar');

      // Function generic dengan type number
      const result2: number = create<number>(123);
      expect(result2).toBe(123);
   });

   // CLASS DENGAN MULTIPLE GENERIC TYPE
   // K dan V adalah dua type parameter yang berbeda
   class Entry<K, V> {
      constructor(public key: K, public value: V) {
      }
   }

   // Class dengan tiga type parameter
   class Triple<K, V, T> {
      constructor(public first: K, public second: V, public third: T) {
      }
   }

   it('should support multiple generic type', async () => {
      // Entry dengan key number dan value string
      const entry = new Entry<number, string>(1, 'Hello');
      expect(entry.key).toBe(1);
      expect(entry.value).toBe('Hello');

      // Triple dengan tiga type yang berbeda
      const triple = new Triple<number, string, boolean>(1, 'Hello', true);
      expect(triple.first).toBe(1);
      expect(triple.second).toBe('Hello');
      expect(triple.third).toBe(true);
   });

   it('should support optional type', async () => {
      // TypeScript bisa infer (menebak) type secara otomatis
      const entry = new Entry(1, 'Hello'); // TypeScript tahu ini Entry<number, string>
      expect(entry.key).toBe(1);
      expect(entry.value).toBe('Hello');
   });

   // GENERIC DENGAN DEFAULT TYPE
   // Jika tidak specify type, akan menggunakan string sebagai default
   class SimpleGeneric<T = string> {
      private value?: T;

      setValue(value: T){
         this.value = value;
      }

      getValue(): T | undefined {
         return this.value;
      }
   }

   it('should create simple generic', async () => {
      const simple = new SimpleGeneric<string>();
      simple.setValue('Fajar');
      // Baris di bawah akan ERROR karena type sudah ditentukan string
      // simple.setValue(100);
      // simple.setValue(true);

      // ! operator artinya kita yakin value tidak undefined
      expect(simple.getValue()!.toUpperCase()).toBe('FAJAR');
   });

   // INTERFACE HIERARCHY untuk CONSTRAINT
   interface Employee {
      id: string;
      name: string;
   }

   interface Manager extends Employee {
      totalEmployee: number;
   }

   interface VP extends Manager {
      totalManager: number;
   }

   // GENERIC CONSTRAINT
   // T extends Employee artinya T harus berupa Employee atau turunannya
   class EmployeeData<T extends Employee> {
      constructor(public employee: T) {
      }
   }

   it('should support constraint', async () => {
      // Bisa pakai Employee
      const data1 = new EmployeeData<Employee>({
         id: '100',
         name: 'Fajar'
      });
      
      // Bisa pakai Manager (turunan Employee)
      const data2 = new EmployeeData<Manager>({
         id: '100',
         name: 'Fajar',
         totalEmployee: 100
      });
      
      // Bisa pakai VP (turunan Manager)
      const data3 = new EmployeeData<VP>({
         id: '100',
         name: 'Fajar',
         totalEmployee: 100,
         totalManager: 10
      });

      // BARIS DI BAWAH AKAN ERROR karena string bukan turunan Employee
      // const data4 = new EmployeeData<string>('Fajar');
      // const data4 = new EmployeeData<number>(100);
   });

   // GENERIC PADA COLLECTION
   it('should support array', async() => {
      // Array generic dengan type String
      const array = new Array<String>();
      array.push('Fajar');
      array.push('Amir');

      expect(array[0]).toBe('Fajar');
      expect(array[1]).toBe('Amir');
   })

   it('should support set', async () => {
      // Set generic yang hanya menerima string
      const set = new Set<string>();
      set.add('Fajar');
      set.add('Amir');
      set.add('Fajar'); // Duplikat akan diignore

      expect(set.size).toBe(2); // Hanya 2 unique values
      expect(set.has('Fajar')).toBe(true);
      expect(set.has('Amir')).toBe(true);
   });

   it('should support map', async () => {
      // Map generic dengan key string dan value number
      const map = new Map<string, number>();
      map.set('Fajar', 100);
      map.set('Budi', 100);

      expect(map.get('Fajar')).toBe(100);
      expect(map.get('Budi')).toBe(100);
   });

   // GENERIC PADA PROMISE
   // Promise<string> artinya promise ini akan resolve dengan value string
   async function fetchData(value: string): Promise<string> {
      return new Promise<string>((resolve, reject) => {
         setTimeout(() => {
            if(value === 'Fajar'){
               resolve('Hello ' + value);
            }else{
               reject('Not Found');
            }
         }, 1000);
      })
   }

   it('should support promise', async () => {
      // Test case success
      const result = await fetchData('Fajar');
      expect(result.toUpperCase()).toBe('HELLO FAJAR');

      // Test case error
      try {
         await fetchData('Budi');
      }catch (e) {
         expect(e).toBe('Not Found');
      }
   })
});