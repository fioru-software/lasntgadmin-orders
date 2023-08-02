
import {  } from "./attendees-form-utils";

import { faker } from "@faker-js/faker";

describe("findGroupQuotas()", () => {

  it("quotas in meta data", () => {

    const metaData = [
      {
        id: faker.datatype.number(),
        key: `groups-read`,
        value: faker.datatype.number()
      },
      {
        id: faker.datatype.number(),
        key: `_quotas_field_${faker.datatype.number()}`,
        value: faker.datatype.number()
      },
      {
        id: faker.datatype.number(),
        key: `groups-read`,
        value: faker.datatype.number()
      },
      {
        id: faker.datatype.number(),
        key: `_quotas_field_${faker.datatype.number()}`,
        value: faker.datatype.number()
      }
    ];
    expect( findGroupQuotas( metaData ) ).toEqual( [metaData[1], metaData[3] ] );
  });

  it("quotas not in meta data", () => {
    expect( findGroupQuotas( [] ) ).toEqual( [] );
  });

});

describe("findGroupQuota()", () => {
  it("group in quotas", () => {

    const groupId = faker.datatype.number();
    const quota = faker.datatype.number();

    const quotas = [
      {
        id: faker.datatype.number(),
        key: `_quotas_field_${faker.datatype.number()}`,
        value: faker.datatype.number()
      },
      {
        id: faker.datatype.number(),
        key: `_quotas_field_${ groupId }`,
        value: quota
      },
      {
        id: faker.datatype.number(),
        key: `_quotas_field_${faker.datatype.number()}`,
        value: faker.datatype.number()
      }
    ];

    expect( findGroupQuota( groupId, quotas ) ).toBe( quota );

  });

  it("group not in quotas", () => {
    const groupId = faker.datatype.number();
    expect( findGroupQuota( groupId, [] ) ).toBe( "" );
  });
});

describe("calculateAvailableSpaces()", () => {

  describe("5 in stock with quota of 2", () => {
    it("2 spaces available", () => {
      expect( calculateAvailableSpaces( 5, 2 ) ).toBe( 2 );
    });
  });

  describe("2 in stock with quota of 5", () => {
    it("2 spaces available", () => {
      expect( calculateAvailableSpaces( 2, 5 ) ).toBe( 2 );
    });
  });

  describe("5 in stock without a quota", () => {
    it("5 spaces available", () => {
      expect( calculateAvailableSpaces( 5, "" ) ).toBe( 5 );
      expect( calculateAvailableSpaces( 5, null ) ).toBe( 5 );
      expect( calculateAvailableSpaces( 5, undefined ) ).toBe( 5 );
    });
  });

  describe("5 in stock with a quota of 0", () => {
    it("0 spaces available", () => {
      expect( calculateAvailableSpaces( 5, 0 ) ).toBe( 0 );
    });
  });

  describe("Stock is not set with a quota of 5", () => {
    it("0 spaces available", () => {
      expect( calculateAvailableSpaces( null, 5 ) ).toBe( 0 );
      expect( calculateAvailableSpaces( "", 5 ) ).toBe( 0 );
      expect( calculateAvailableSpaces( undefined, 5 ) ).toBe( 0 );
    });
  });

});

