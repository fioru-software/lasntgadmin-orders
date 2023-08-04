
import { 
  generateAcfFormDataForAttendees,
  generateMetaFormDataForAttendeeWithIndex
} from "./attendee-form-test-helper";

import { faker } from "@faker-js/faker";

describe("generateAcfFormDataForAttendees()", () => {

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
      const formData = generateAcfFormDataForAttendees( attendees );

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

describe("generateMetaFormDataForAttendeeWithIndex()", () => {
  describe("Course prerequisites met with product ids", () => {
    it("generates a form with multiple prerequisites met fields each with a product id", () => {

      const index = faker.number.int(10);
      const meta = [
        {
          course_prerequisites_met: faker.number.int({ min: 1000, max: 9999})
        },
        {
          course_prerequisites_met: faker.number.int({ min: 1000, max: 9999})
        }
      ];
      const formData = generateMetaFormDataForAttendeeWithIndex( index, meta );
      let count = 0;
      for (const field of formData.entries()) {
        const [name, value] = field;
        expect( name ).toEqual( `attendees[${index}]['meta']['course_prerequisites_met']` );
        expect( parseInt(value) ).toEqual( meta[count]['course_prerequisites_met'] );
        count++;
      }
    });
  });
});

