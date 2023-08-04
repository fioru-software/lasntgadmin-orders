
import { 
  extractIndexedEmployeeNumbersFromForm, 
  extractLastIndexOfDuplicateEmployeeNumberField,
  extractCoursePrerequisitesMetFieldValue,
  countOccurrencesOfEmployeeNumber,
  createAttendeeRequestBody
} from "./attendee-form-utils";

import { generateAcfFormData, generateMetaFormData } from "./attendee-form-test-helper";

import { faker } from "@faker-js/faker";

describe("createBatchRequestBody()", () => {

  it.todo("todo");

  describe("createAttendeeRequestBody()", () => {
    it.todo("todo");
  });

  describe("extractAttendeeByIndex()", () => {
    it.todo("todo");
  });

  describe("extractAcfInputs()", () => {
    it.todo("todo");
  });

  describe("extractCoursePrerequisitesMetFieldValue()", () => {
    it.only("wip", () => {

      const meta = [
        {
          course_prerequisites_met: faker.number.int()
        },
        {
          course_prerequisites_met: faker.number.int()
        }
      ];
      const formData = generateMetaFormData( meta );
      
      // @todo continue from here
      const values = extractCoursePrerequisitesMetFieldValue( 1, formData );
      console.log(values);
      //const existingCoursePrerequisitesMetProductIds = formData.getAll(`attendees[${index}]['meta']['course_prerequisites_met']`).map(Number).filter(Number);
      //const courePrerequisitesMetProductIds = formData.getAll(`attendees[${index}]['acf']['course_prerequisites_met']`).map(Number).filter(Number);

    });
  });

  describe("determineAcfValue()", () => {
    it.todo("todo");
  });
});


describe("extractIndexedEmployeeNumbersFromForm()", () => {

  it("extracts employee numbers whilst retaining the original index", () => {

    const attendees = [
      {
        employee_number: faker.string.uuid()
      },
      {
        employee_number: ''
      },
      {
        employee_number: faker.string.uuid()
      }
    ];
    const formData = generateAcfFormData( attendees );
    const employeeNumbers = extractIndexedEmployeeNumbersFromForm( attendees.length, formData );
    expect( Object.keys(employeeNumbers).length ).toEqual(2);
    expect( employeeNumbers[0]).toEqual( attendees[0].employee_number);
    expect( employeeNumbers[2]).toEqual( attendees[2].employee_number);

  });

});


describe("extractLastIndexOfDuplicateEmployeeNumberfield()", () => {

  describe("countOccurrencesOfEmployeeNumber()", () => {
    describe("contains a duplicate employee number", () => {
      it("returns count > 1", () => {
        const duplicateEmployeeNumber = faker.string.uuid();
        const count = countOccurrencesOfEmployeeNumber(
          duplicateEmployeeNumber,
          [ faker.string.uuid(), duplicateEmployeeNumber, faker.string.uuid(), duplicateEmployeeNumber ]
        );
        expect( count ).toEqual(2);
      });
    });
  });

  describe("with a duplicate", () => {
    it("returns index", () => {
      const duplicateEmployeeNumber = faker.string.uuid();
      const attendees = [
        {
          employee_number: faker.string.uuid()
        },
        {
          employee_number: duplicateEmployeeNumber
        },
        {
          employee_number: faker.string.uuid()
        },
        {
          employee_number: duplicateEmployeeNumber
        }
      ];
      const formData = generateAcfFormData( attendees );
      const index = extractLastIndexOfDuplicateEmployeeNumberField(
        extractIndexedEmployeeNumbersFromForm( 4, formData )
      );
      expect( index ).toEqual( 3 );
    });
  });

  describe("without a duplicate", () => {
    it("returns false", () => {
      const attendees = [
        {
          employee_number: faker.string.uuid()
        },
        {
          employee_number: faker.string.uuid()
        },
        {
          employee_number: faker.string.uuid()
        }
      ];
      const formData = generateAcfFormData( attendees );
      const index = extractLastIndexOfDuplicateEmployeeNumberField(
        extractIndexedEmployeeNumbersFromForm( 3, formData )
      );
      expect( index ).toEqual( false );
    });
  });

});

