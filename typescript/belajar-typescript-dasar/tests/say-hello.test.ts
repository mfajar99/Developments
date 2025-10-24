import { sayHello } from "../src/say-hello";

describe("Say Hello", function (): void {
   it("should return hello fajar", function (): void {
      expect(sayHello("fajar")).toBe("Hello fajar");
   });
});

 