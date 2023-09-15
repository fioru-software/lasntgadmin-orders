
import { 
  filterAttendeeIdFromOrderMeta,
  isAttendeeIdInOrderMeta,
  isItemInOrderMeta,
  filterItemFromOrderMeta
} from "./order-utils";

import { faker } from "@faker-js/faker";

describe("isItemInOrderMeta()", () => {

  describe("item in order meta", () => {
    it("returns true", () => {
      const attendeeId = faker.number.int();
      const orderMeta = [
        {
          id: faker.number.int(),
          key: 'groups-read',
          value: faker.number.int()
        },
        {
          id: faker.number.int(),
          key: 'attendee_ids',
          value: `${attendeeId}`
        },
        {
          id: faker.number.int(),
          key: 'attendee_ids',
          value: `${faker.number.int()}`
        }
      ];
      expect( isItemInOrderMeta( 'attendee_ids', attendeeId, orderMeta ) ).toBe(true);
    });
  });

  describe("item not in order meta", () => {
    it("returns false", () => {
      const attendeeId = faker.number.int();
      const orderMeta = [
        {
          id: faker.number.int(),
          key: 'groups-read',
          value: faker.number.int()
        },
        {
          id: faker.number.int(),
          key: 'attendee_ids',
          value: `${faker.number.int()}`
        }
      ];
      expect( isItemInOrderMeta( 'attendee_ids', attendeeId, orderMeta ) ).toBe(false);
    });
  });

});

describe("filterItemFromOrderMeta()", () => {

  it("returns order meta without the filtered item", () => {

    const orderMeta = [
      {
        id: faker.number.int(),
        key: 'groups-read',
        value: faker.number.int()
      },
      {
        id: faker.number.int(),
        key: 'attendee_ids',
        value: faker.number.int()
      },
      {
        id: faker.number.int(),
        key: 'attendee_ids',
        value: `${faker.number.int()}`
      }
    ];

    const filteredOrderMeta = filterItemFromOrderMeta( orderMeta[1].key, orderMeta[1].value, orderMeta );

    expect( isItemInOrderMeta( orderMeta[1].key, orderMeta[1].value, filteredOrderMeta ) ).toBe(false);
    expect( isItemInOrderMeta( orderMeta[0].key, orderMeta[0].value, filteredOrderMeta ) ).toBe(true);
    expect( isItemInOrderMeta( orderMeta[2].key, orderMeta[2].value, filteredOrderMeta ) ).toBe(true);

  });
});

describe("filterAttendeeIdFromOrderMeta()", () => {
  describe("attendee id is present", () => {
    it("removes the attendee id", () => {
      const attendeeId = faker.number.int();
      const orderMeta = [
        {
          id: faker.number.int(),
          key: 'attendee_ids',
          value: `${attendeeId}`
        },
        {
          id: faker.number.int(),
          key: 'attendee_ids',
          value: `${faker.number.int()}`
        }
      ];
      expect( isAttendeeIdInOrderMeta( attendeeId, orderMeta ) ).toEqual(true);
      const filteredAttendeeIds = filterAttendeeIdFromOrderMeta( attendeeId, orderMeta);

      expect( filteredAttendeeIds).not.toContain( attendeeId ) ;
      expect( filteredAttendeeIds ).toContain( parseInt(orderMeta[1].value) ) ;
    });
  });
});

describe("isAttendeeIdInOrderMeta()", () => {

  describe("attendee id in order meta", () => {
    it("returns true", () => {
      const attendeeId = faker.number.int();
      const orderMeta = [
        {
          id: faker.number.int(),
          key: 'attendee_ids',
          value: `${attendeeId}`
        },
        {
          id: faker.number.int(),
          key: 'attendee_ids',
          value: `${faker.number.int()}`
        }
      ];
      expect( isAttendeeIdInOrderMeta( attendeeId, orderMeta ) ).toEqual(true);
    });
  });

  describe("attendee id not in order meta", () => {
    it("returns true", () => {
      const attendeeId = faker.number.int();
      const orderMeta = [
        {
          id: faker.number.int(),
          key: 'attendee_ids',
          value: `${faker.number.int()}`
        },
        {
          id: faker.number.int(),
          key: 'attendee_ids',
          value: `${faker.number.int()}`
        }
      ];
      expect( isAttendeeIdInOrderMeta( attendeeId, orderMeta ) ).toEqual(false);
    });
  });

});

