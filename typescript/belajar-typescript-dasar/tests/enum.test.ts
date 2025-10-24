import { CustomerType, type Customer } from "../src/enum"

describe('Enum', function () {
   it('should support it typescript', function () {
      
      const customer: Customer = {
         id: 1,
         name: "Fajar",
         type: CustomerType.GOLD
      }

      console.info(customer)
      
   })
})