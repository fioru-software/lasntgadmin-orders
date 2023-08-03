
import { generateAcfFormData } from "./attendee-form-test-helper";

import { faker } from "@faker-js/faker";

describe("generateAcfFormData()", () => {

  describe("Attendees with employee numbers", () => {

    it("generates a form with attendees each with an employee number", () => {

      const attendees = [
        {
          employee_number: faker.string.uuid()
        },
        {
          employee_number: faker.string.uuid()
        }
      ];
      const formData = generateAcfFormData( attendees );

      let index = 0;
      for (const field of formData.entries()) {
        const [name, value] = field;
        expect( name ).toEqual( `attendees[${index}]['acf']['employee_number']` );
        expect( value ).toEqual( attendees[index]['employee_number'] );
        index++;
      }

    });
  });

});

