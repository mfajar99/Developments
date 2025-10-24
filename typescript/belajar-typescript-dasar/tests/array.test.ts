import { Console } from "console";

describe("Array", function () {
   it("should same with javascript", function () {
      const names: string[] = ["Fajar", "Budi", "Siti"];
      const values: number[] = [1, 2, 3];

      console.log(names);
      console.log(values);
   });

   it("should support readonly array", function () {
      const hobbies: ReadonlyArray<string> = ["Music", "Movie"];
      console.info(hobbies);
      console.info(hobbies[0]);
      console.info(hobbies[1]);

      // hobbies[0] = "Main Layangan";
   });

   it("should support tuple", function () {
      const person: readonly [string, string, number] = ["Fajar", "Amir", 28];
      console.info(person);

      console.info(person[0]);
      console.info(person[1]);
      console.info(person[2]);

      // person[0] = "Budi";
   });
});
