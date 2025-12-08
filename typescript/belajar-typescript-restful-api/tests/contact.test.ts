import supertest from "supertest";
import { ContactTest, UserTest } from "./test-util"
import { web } from "../src/application/web";
import { logger } from "../src/application/logging";

describe('POST /api/contacts', () => {
   beforeEach(async () => {
      await UserTest.create()
   });

   afterEach(async () => {
      await ContactTest.deleteAll();
      await UserTest.delete();
   });

   it('should create new contact', async () => {
      const response = await supertest(web)
         .post("/api/contacts")
         .set("X-API-TOKEN", "test")
         .send({
            first_name: "fajar",
            last_name: "muhammad",
            email: "fajar@example.com",
            phone: "089999999"
         });
      logger.debug(response.body);
      expect(response.status).toBe(200);
      expect(response.body.data.id).toBeDefined();
      expect(response.body.data.first_name).toBe("fajar");
      expect(response.body.data.last_name).toBe("muhammad");
      expect(response.body.data.email).toBe("fajar@example.com");
      expect(response.body.data.phone).toBe("089999999");
   });

   it('should reject create new contact if data is invalid', async () => {
      const response = await supertest(web)
         .post("/api/contacts")
         .set("X-API-TOKEN", "test")
         .send({
            first_name: "",
            last_name: "",
            email: "fajar",
            phone: "089999999000909009"
         });
      logger.debug(response.body);
      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
   });
});