
import { 
  generateFormDataForAttendeeWithIndex,
  generateAttendeePostData,
  generateAttendeeBody
} from "./attendee-form-test-helper";

import { faker } from "@faker-js/faker";


describe("generateAttendeeBody", () => {
  it.skip("returns a random attendee object", () => {
    const body  = generateAttendeeBody();
    const data = generateAttendeePostData( faker.number.int(100), body );
  });
});

describe("generateFormDataForAttendeeWithIndex()", () => {

  describe("Multiple attendees with uniquely named inputs", () => {

    it("generates a form with attendees each with an employee number", () => {

      const formData = new FormData();
      const attendees = [
        [
          {
            employee_number: faker.string.uuid(),
          },
        ],
        [
          {
            employee_number: faker.string.uuid(),
          },
        ]
      ];
      attendees.forEach( (attendeeFields, index) => {
        generateFormDataForAttendeeWithIndex( formData, index, 'acf', attendeeFields );
      });

      let index = 0;
      for (const field of formData.entries()) {
        const [name, value] = field;
        expect( name ).toEqual( `attendees[${index}]['acf']['employee_number']` );
        expect( value ).toEqual( attendees[index][0]['employee_number'] );
        index++;
      }

    });
  });

  describe("Single attendee with multiple inputs of same name", () => {
    it("generates a form with multiple prerequisites met fields each with a product id", () => {

      const index = faker.number.int(10);

      // A single attendee with multiple course prereqs met fields.
      const attendeeFields = [
        {
          course_prerequisites_met: faker.number.int({ min: 1000, max: 9999})
        },
        {
          course_prerequisites_met: faker.number.int({ min: 1000, max: 9999})
        }
      ];
      const formData = new FormData();
      generateFormDataForAttendeeWithIndex( formData, index, 'meta', attendeeFields );

      let count = 0;
      for (const field of formData.entries()) {
        const [name, value] = field;
        expect( name ).toEqual( `attendees[${index}]['meta']['course_prerequisites_met']` );
        expect( parseInt(value) ).toEqual( attendeeFields[count]['course_prerequisites_met'] );
        count++;
      }
    });
  });

});


