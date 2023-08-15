
import { 
  findGroupQuotas, findGroupQuota, calculateAvailableSpaces,
  findFirstProductMetaByKey, isGrantFunded, isWaterGrantFunded
} from "./product-utils";

import { faker } from "@faker-js/faker";

describe("isGrantFunded()", () => {
  describe("product with meta", () => {
    describe("is grant funded", () => {
      it("returns true", () => {
        const product = {
          meta_data: [
            {
              id: faker.number.int(),
              key: `grant_year`,
              value: `${faker.date.recent().getFullYear()}`
            },
            {
              id: faker.number.int(),
              key: `_quotas_field_${faker.number.int()}`,
              value: faker.number.int()
            },
            {
              id: faker.number.int(),
              key: `funding_sources`,
              value: [ faker.word.sample() ]
            }
          ]
        };
        expect( isGrantFunded( product ) ).toEqual( true );
      });
    });
    describe("is not grant funded", () => {
      it("returns false", () => {
        const product = {
          meta_data: [
            {
              id: faker.number.int(),
              key: `_quotas_field_${faker.number.int()}`,
              value: faker.number.int()
            },
            {
              id: faker.number.int(),
              key: `funding_sources`,
              value: [ faker.word.sample() ]
            }
          ]
        };
        expect( isGrantFunded( product ) ).toEqual( false );
      });
    });
  });
});

describe("isWaterGrantFunded()", () => {
  describe("is water grant funded", () => {
    it("returns true", () => {
        const product = {
          meta_data: [
            {
              id: faker.number.int(),
              key: `funding_sources`,
              value: [ `water-grant` ]
            },
            {
              id: faker.number.int(),
              key: `grant_year`,
              value: `${faker.date.recent().getFullYear()}`
            },
          ]
        };
        expect( isWaterGrantFunded( product ) ).toEqual( true );
    });
  });
  describe("is not water grant funded", () => {
    it("returns false", () => {
        const product = {
          meta_data: [
            {
              id: faker.number.int(),
              key: `grant_year`,
              value: `${faker.date.recent().getFullYear()}`
            },
            {
              id: faker.number.int(),
              key: `_quotas_field_${faker.number.int()}`,
              value: faker.number.int()
            },
          ]
        };
        expect( isWaterGrantFunded( product ) ).toEqual( false );
    });
  });
});

describe("findFirstProductMetaByKey()", () => {

  describe("found", () => {
    it("returns meta data object", () => {
      const metaData = [
        {
          id: faker.number.int(),
          key: `funding_sources`,
          value: [ `${faker.number.int()}` ]
        },
        {
          id: faker.number.int(),
          key: `_quotas_field_${faker.number.int()}`,
          value: faker.number.int()
        },
        {
          id: faker.number.int(),
          key: `funding_sources`,
          value: [ `${faker.number.int()}` ]
        }
      ];
      expect( findFirstProductMetaByKey( 'funding_sources', metaData ) ).toEqual( metaData[0] );
    });
  });

  describe("not found", () => {
    it("returns undefined", () => {
      const metaData = [];
      expect( findFirstProductMetaByKey( 'funding_sources', metaData ) ).toEqual( undefined );
    });
  });

});

describe("findGroupQuotas()", () => {

  it("quotas in meta data", () => {

    const metaData = [
      {
        id: faker.number.int(),
        key: `groups-read`,
        value: faker.number.int()
      },
      {
        id: faker.number.int(),
        key: `_quotas_field_${faker.number.int()}`,
        value: faker.number.int()
      },
      {
        id: faker.number.int(),
        key: `groups-read`,
        value: faker.number.int()
      },
      {
        id: faker.number.int(),
        key: `_quotas_field_${faker.number.int()}`,
        value: faker.number.int()
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

    const groupId = faker.number.int();
    const quota = faker.number.int();

    const quotas = [
      {
        id: faker.number.int(),
        key: `_quotas_field_${faker.number.int()}`,
        value: faker.number.int()
      },
      {
        id: faker.number.int(),
        key: `_quotas_field_${ groupId }`,
        value: quota
      },
      {
        id: faker.number.int(),
        key: `_quotas_field_${faker.number.int()}`,
        value: faker.number.int()
      }
    ];

    expect( findGroupQuota( groupId, quotas ) ).toBe( quota );

  });

  it("group not in quotas", () => {
    const groupId = faker.number.int();
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

