
import { 
  filterOrderIdFromAttendeeMeta,
  filterProductIdFromAttendeeMeta,
  isProductIdInAttendeeMeta,
  isOrderIdInAttendeeMeta,
  extractIndexedEmployeeNumbersFromForm, 
  extractLastIndexOfDuplicateEmployeeNumberField,
  extractCoursePrerequisitesMetFieldValues,
  countOccurrencesOfEmployeeNumber,
  createAttendeeBatchRequestBody,
  createAttendeeMetaFieldsBatchRequestBody,
  createAttendeeAcfFieldsBatchRequestBody,
  createAttendeeRequestBody,
  createAttendeeBatchRequest,
  extractAcfFieldsByAttendeeIndex,
  extractValidAttendeesFromResponse,
  extractInvalidAttendeesFromResponse,
  addIdToValidAttendees
} from "./attendee-utils";

import { 
  generateFormDataForAttendeeWithIndex,
  generateAttendeeUpdateRequestErrorResponse,
  generateAttendeeUpdateRequestSuccessResponse,
  generateAttendeeBody,
  generateAttendeePostData
} from "./attendee-form-test-helper";

import { faker } from "@faker-js/faker";

describe("filterProductIdFromAttendeeMeta()", () => {
  describe("product id is present", () => {
    it("removes the product id", () => {
      const productId = faker.number.int();
      const attendeeMeta = {
        product_ids: [ productId, faker.number.int() ]
      }
      expect( attendeeMeta.product_ids).toContain( productId );
      expect( filterProductIdFromAttendeeMeta( productId, attendeeMeta)).not.toContain( productId ) ;
    });
  });
});


describe("filterOrderIdFromAttendeeMeta()", () => {
  describe("order id is present", () => {
    it("removes the order id", () => {
      const orderId = faker.number.int();
      const attendeeMeta = {
        order_ids: [ orderId, faker.number.int() ]
      }
      expect( attendeeMeta.order_ids).toContain( orderId );
      expect( filterOrderIdFromAttendeeMeta( orderId, attendeeMeta)).not.toContain( orderId ) ;
    });
  });
});

describe("isOrderIdInAttendeeMeta()", () => {

  describe("order id in attendee meta", () => {
    it("returns true", () => {
      const orderId = faker.number.int();
      const attendee = {
        meta: {
          order_ids: [ faker.number.int(), orderId, faker.number.int() ]
        }
      };
      expect( isOrderIdInAttendeeMeta( orderId, attendee.meta ) ).toEqual(true);
    });
  });

  describe("order id not in attendee meta", () => {
    it("returns true", () => {
      const orderId = faker.number.int();
      const attendee = {
        meta: {
          order_ids: [ faker.number.int(), faker.number.int() ]
        }
      };
      expect( isOrderIdInAttendeeMeta( orderId, attendee.meta ) ).toEqual(false);
    });
  });

});

describe("isProductIdInAttendeeMeta()", () => {

  describe("product id in attendee meta", () => {
    it("returns true", () => {
      const productId = faker.number.int();
      const attendee = {
        meta: {
          product_ids: [ faker.number.int(), productId, faker.number.int() ]
        }
      };
      expect( isProductIdInAttendeeMeta( productId, attendee.meta ) ).toEqual(true);
    });
  });

  describe("product id not in attendee meta", () => {
    it("returns true", () => {
      const productId = faker.number.int();
      const attendee = {
        meta: {
          product_ids: [ faker.number.int(), faker.number.int() ]
        }
      };
      expect( isProductIdInAttendeeMeta( productId, attendee.meta ) ).toEqual(false);
    });
  });

});

describe("addIdToValidAttendees()", () => {

  describe("valid new attendee and invalid existing attendee is already enrolled", () => {
    /**
     * New attendee form fieldset is converted to an existing attendee form fieldset
     * Existing attendee form fieldset remains the same
     * User needs to manually remove the existing attendee from the form using the reset or remove buttons
     */
    it("id and additional fields added to new attendee", () => {
      const newAttendee = generateAttendeeBody(); // no id in request
      const existingAttendee = generateAttendeeBody( { id: faker.number.int() } ); // id in request 
      const attendeeReqBodies = [ newAttendee, existingAttendee ];

      const successRes = generateAttendeeUpdateRequestSuccessResponse( Object.assign( { id: faker.number.int() }, newAttendee ) ); // only response contains id

      const errorRes = generateAttendeeUpdateRequestErrorResponse( generateAttendeePostData( existingAttendee ) ); // request and response contains id
      const attendeeBatchRes = [ errorRes, successRes ];

      // new attendee has been created, so we need to convert the attendee to an existing attendee in the form
      const validAttendees = extractValidAttendeesFromResponse( attendeeBatchRes ); 
      const updatedAttendeeReqBodies = addIdToValidAttendees( attendeeReqBodies, validAttendees );

      expect( attendeeReqBodies[0].acf.employee_number).toEqual( updatedAttendeeReqBodies[0].acf.employee_number ); // attendee index remains same in request and response
      expect( attendeeReqBodies[1].acf.employee_number).toEqual( updatedAttendeeReqBodies[1].acf.employee_number ); // attendee index remains same in request and response

      expect( attendeeReqBodies[0].id ).toBeUndefined(); // new attendee req does not contain an id
      expect( attendeeReqBodies[0].acf.dob ).toBeDefined(); // new attendee req contains dob
      expect( attendeeReqBodies[1].id ).toBeDefined(); // existing attendee req contains an id
      expect( attendeeReqBodies[1].acf.dob ).toBeDefined(); // existing attendee req contains dob

      expect( updatedAttendeeReqBodies[0].id ).toBeDefined(); // id added
      expect( updatedAttendeeReqBodies[0].acf.dob).toBeDefined(); // dob added
      expect( updatedAttendeeReqBodies[0].id ).toBeDefined(); // existing id
      expect( updatedAttendeeReqBodies[0].acf.dob).toBeDefined(); // existing dob

    });
  });
  describe("valid existing attendee and invalid new attendee with duplicate employee number", () => {
    /**
     * Existing attendee form fieldset remains unchanged
     * New attendee form fieldset remains unchanged
     * User needs to update the employee number manually.
     */
    it("all attendee fields remain the same", () => {

      const existingAttendee = generateAttendeeBody( { id: faker.number.int() } ); // id in request 
      const newAttendee = generateAttendeeBody(); // no id in request
      const attendeeReqBodies = [ existingAttendee, newAttendee ];

      const successRes = generateAttendeeUpdateRequestSuccessResponse( existingAttendee ); // request and response contains id

      const errorRes = generateAttendeeUpdateRequestErrorResponse( generateAttendeePostData( newAttendee ) ); // neither request nor response contains id
      const attendeeBatchRes = [ successRes, errorRes ];

      const validAttendees = extractValidAttendeesFromResponse( attendeeBatchRes ); 
      const updatedAttendeeReqBodies = addIdToValidAttendees( attendeeReqBodies, validAttendees );

      expect( attendeeReqBodies[0].acf.employee_number).toEqual( updatedAttendeeReqBodies[0].acf.employee_number ); // attendee index remains same in request and response
      expect( attendeeReqBodies[1].acf.employee_number).toEqual( updatedAttendeeReqBodies[1].acf.employee_number ); // attendee index remains same in request and response

      expect( attendeeReqBodies[0].id).toBeDefined(); // existing attendee req contains id
      expect( attendeeReqBodies[0].acf.dob).toBeDefined(); // existing attendee req contains dob
      expect( attendeeReqBodies[1].id).toBeUndefined(); // new attendee req does not contain id
      expect( attendeeReqBodies[1].acf.dob).toBeDefined(); // new attendee req contains dob

      expect( updatedAttendeeReqBodies[0].id ).toBeDefined();
      expect( updatedAttendeeReqBodies[0].acf.dob ).toBeDefined();
      expect( updatedAttendeeReqBodies[1].id ).toBeUndefined();
      expect( updatedAttendeeReqBodies[1].acf.dob ).toBeDefined();

    });
  });

});

describe("extractValidAttendeesFromResponse()", ()  => {
    it("returns body", () => {

      const existingAttendee = generateAttendeeBody( { id: faker.number.int() } ); // id in request 
      const newAttendee = generateAttendeeBody(); // no id in request
      const attendeeReqBodies = [ existingAttendee, newAttendee ];

      const successRes = generateAttendeeUpdateRequestSuccessResponse( existingAttendee ); // request and response contains id

      const errorRes = generateAttendeeUpdateRequestErrorResponse( generateAttendeePostData( newAttendee ) ); // neither request nor response contains id

      const res = [ errorRes, successRes ];
      const validAttendees = extractValidAttendeesFromResponse( res );
      validAttendees.forEach( validAttendee => {
        expect( validAttendee ).toEqual( successRes.body );
      });
    });
});

describe("extractInvalidAttendeesFromResponse()", () => {
    it("returns body.data", () => {

      const existingAttendee = generateAttendeeBody( { id: faker.number.int() } ); // id in request 
      const newAttendee = generateAttendeeBody(); // no id in request
      const attendeeReqBodies = [ existingAttendee, newAttendee ];

      const successRes = generateAttendeeUpdateRequestSuccessResponse( existingAttendee ); // request and response contains id
      const errorRes = generateAttendeeUpdateRequestErrorResponse( generateAttendeePostData( newAttendee ) );

      const res = [ errorRes, successRes ];
      const invalidAttendees = extractInvalidAttendeesFromResponse( res );
      invalidAttendees.forEach( invalidAttendee => {
        expect( invalidAttendee ).toEqual( errorRes.body.data );
      });
    });
});


describe("createAttendeeBatchRequest()", () => {
  describe("Existing attendee", () => {
    it("Creates a PUT request", () => {

      const nonce = faker.string.uuid();
      const index = faker.number.int(10);
      const formData = new FormData();

      const body = {};
      const orderId = faker.number.int();
      const attendeeId = faker.number.int();

      formData.append(`attendees[${index}]['id']`, attendeeId );

      const req = createAttendeeBatchRequest( nonce, index, formData, body, orderId );
      expect( req.path ).toEqual(`/wp/v2/attendee/${attendeeId}?order_id=${orderId}`);
      expect( req.method ).toEqual('PUT');
      expect( req.headers['X-WP-Nonce'] ).toEqual( nonce );
      expect( req.body.id ).toEqual( attendeeId );
    });

  });
  describe("New attendee", () => {
    it("Creates a POST request", () => {

      const nonce = faker.string.uuid();
      const index = faker.number.int(10);
      const formData = new FormData();
      const body = {};
      const orderId = faker.number.int();

      const req = createAttendeeBatchRequest( nonce, index, formData, body, orderId );
      expect( req.path ).toEqual(`/wp/v2/attendee?order_id=${orderId}`);
      expect( req.method ).toEqual('POST');
      expect( req.headers['X-WP-Nonce'] ).toEqual( nonce );
    });
  });
});

describe("createAttendeeMetaFieldsBatchRequestBody()", () => {
  it("returns body with meta fields", () => {

    const index = faker.number.int(10);
    const groupId = faker.number.int();
    const orderId = faker.number.int();
    const productId = faker.number.int();
    let formData = new FormData();

    const attendeeMetaFields = [
      {
        course_prerequisites_met: faker.number.int()
      },
      {
        course_prerequisites_met: faker.number.int()
      },
      {
        'groups-read': faker.number.int()
      },
      {
        'groups-read': groupId
      },
      {
        order_ids: faker.number.int()
      },
      {
        order_ids: orderId
      },
      {
        product_ids: productId
      },
      {
        product_ids: faker.number.int()
      }
    ];
    generateFormDataForAttendeeWithIndex( formData, index, 'meta', attendeeMetaFields );

    const body = createAttendeeMetaFieldsBatchRequestBody( index, formData, groupId, orderId, productId );

    expect( body.meta['groups-read']).toContain(groupId);
    expect( body.meta.order_ids).toContain(orderId);
    expect( body.meta.product_ids).toContain(productId);
  });
});

describe("createAttendeeAcfFieldsBatchRequestBody()", () => {
  it("returns body with acf fields", () => {

    const index = faker.number.int(10);
    let formData = new FormData();

    const attendeeAcfFields = [
      {
        first_name: faker.person.firstName(),
        course_prerequisites_met: faker.number.int()
      }
    ];
    generateFormDataForAttendeeWithIndex( formData, index, 'acf', attendeeAcfFields );

    const body = createAttendeeAcfFieldsBatchRequestBody( index, formData );

    expect( body.status ).toEqual('publish');
    expect( body.acf.first_name).toEqual( attendeeAcfFields[0].first_name );
    expect( body.acf.course_prerequisites_met).toContain( attendeeAcfFields[0].course_prerequisites_met );
  });
});

describe("createAttendeeBatchRequestBody()", () => {
  it("returns a request body object", () => {

    const index = faker.number.int(10);
    let formData = new FormData();
    const groupId = faker.number.int();
    const orderId = faker.number.int();
    const productId = faker.number.int();

    const attendeeMetaFields = [
      {
        course_prerequisites_met: faker.number.int()
      },
      {
        course_prerequisites_met: faker.number.int()
      }
    ];
    generateFormDataForAttendeeWithIndex( formData, index, 'meta', attendeeMetaFields );

    const attendeeAcfFields = [
      {
        course_prerequisites_met: faker.number.int()
      }
    ];
    generateFormDataForAttendeeWithIndex( formData, index, 'acf', attendeeAcfFields );

    const acfFieldsBatchRequestBody = createAttendeeAcfFieldsBatchRequestBody( index, formData );
    const metaFieldsBatchRequestBody = createAttendeeMetaFieldsBatchRequestBody( index, formData, groupId, orderId, productId );

    const body = createAttendeeBatchRequestBody( acfFieldsBatchRequestBody, metaFieldsBatchRequestBody );

    expect( body.acf.course_prerequisites_met).toContain( attendeeAcfFields[0].course_prerequisites_met );
    expect( body.acf.course_prerequisites_met).toContain( attendeeMetaFields[0].course_prerequisites_met );
    expect( body.acf.course_prerequisites_met).toContain( attendeeMetaFields[1].course_prerequisites_met );
  });
});

describe("extractAcfFieldsByAttendeeIndex()", () => {
  it("Returns an object keyed by acf field shortname", () => {

    let formData = new FormData();

    const attendees = [
      [
        {
          first_name: faker.person.firstName(),
          course_prerequisites_met: faker.number.int()
        }
      ],
      [
        {
          first_name: faker.person.firstName(),
          course_prerequisites_met: faker.number.int()
        }
      ]
    ];

    attendees.forEach( ( attendeeFields, index ) => {
      generateFormDataForAttendeeWithIndex( formData, index, 'acf', attendeeFields );
    });

    for( let index=0; index<attendees.length; index++) {
      const acfFields = extractAcfFieldsByAttendeeIndex( index, formData );
      expect( acfFields.first_name ).toEqual( attendees[index][0].first_name );
      expect( typeof acfFields.first_name ).toEqual( 'string' );
      expect( acfFields.course_prerequisites_met ).toBeInstanceOf( Array );
      expect( acfFields.course_prerequisites_met ).toContain( attendees[index][0].course_prerequisites_met );
    }

  });
});

describe("extractCoursePrerequisitesMetFieldValues()", () => {

  describe("Existing product ids in meta fields", () => {

    describe("New product ids in acf field", () => {

      it("Combine product ids from meta and acf fields", () => {

        const index = faker.number.int(10);
        let formData = new FormData();

        const attendeeMetaFields = [
          {
            course_prerequisites_met: faker.number.int()
          },
          {
            course_prerequisites_met: faker.number.int()
          }
        ];
        generateFormDataForAttendeeWithIndex( formData, index, 'meta', attendeeMetaFields );

        const attendeeAcfFields = [
          {
            course_prerequisites_met: faker.number.int()
          }
        ];
        generateFormDataForAttendeeWithIndex( formData, index, 'acf', attendeeAcfFields );

        const values = extractCoursePrerequisitesMetFieldValues( index, formData );

        expect( values.length ).toEqual(3);
        expect( values ).toContain( attendeeMetaFields[0].course_prerequisites_met );
        expect( values ).toContain( attendeeMetaFields[1].course_prerequisites_met );
        expect( values ).toContain( attendeeAcfFields[0].course_prerequisites_met );

      });

    });

  });

});


describe("extractIndexedEmployeeNumbersFromForm()", () => {

  it("extracts employee numbers whilst retaining the original index", () => {

    const attendees = [
      [
        {
          employee_number: faker.string.uuid()
        }
      ],
      [
        {
          employee_number: ''
        }
      ],
      [
        {
          employee_number: faker.string.uuid()
        }
      ]
    ];

    const formData = new FormData();
    attendees.forEach( ( attendeeFields, index ) => {
      generateFormDataForAttendeeWithIndex( formData, index, 'acf', attendeeFields );
    });

    const employeeNumbers = extractIndexedEmployeeNumbersFromForm( attendees.length, formData );
    expect( Object.keys(employeeNumbers).length ).toEqual(2);
    expect( employeeNumbers[0]).toEqual( attendees[0][0].employee_number);
    expect( employeeNumbers[2]).toEqual( attendees[2][0].employee_number);

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
        [
          {
            employee_number: faker.string.uuid()
          }
        ],
        [
          {
            employee_number: duplicateEmployeeNumber
          }
        ],
        [
          {
            employee_number: faker.string.uuid()
          }
        ],
        [
          {
            employee_number: duplicateEmployeeNumber
          }
        ]
      ];

      const formData = new FormData();
      attendees.forEach( ( attendeeFields, index ) => {
        generateFormDataForAttendeeWithIndex( formData, index, 'acf', attendeeFields );
      });
      const index = extractLastIndexOfDuplicateEmployeeNumberField(
        extractIndexedEmployeeNumbersFromForm( 4, formData )
      );
      expect( index ).toEqual( 3 );
    });
  });

  describe("without a duplicate", () => {
    it("returns false", () => {
      const attendees = [
        [
          {
            employee_number: faker.string.uuid()
          }
        ],
        [
          {
            employee_number: faker.string.uuid()
          }
        ],
        [
          {
            employee_number: faker.string.uuid()
          }
        ]
      ];
      const formData = new FormData();
      attendees.forEach( ( attendeeFields, index ) => {
        generateFormDataForAttendeeWithIndex( formData, index, 'acf', attendeeFields );
      });
      const index = extractLastIndexOfDuplicateEmployeeNumberField(
        extractIndexedEmployeeNumbersFromForm( 3, formData )
      );
      expect( index ).toEqual( false );
    });
  });

});

