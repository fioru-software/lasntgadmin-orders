
import { 
  extractIndexedEmployeeNumbersFromForm, 
  extractLastIndexOfDuplicateEmployeeNumberField,
  countOccurrencesOfEmployeeNumber
} from "./attendee-form-utils";

import { generateAcfFormData } from "./attendee-form-test-helper";

import { faker } from "@faker-js/faker";

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

describe("extractLastIndexOfDuplicateEmployeeNumberfield()", () => {
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

