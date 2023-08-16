
import { 
  filterAttendeeIdFromOrderMeta,
  isAttendeeIdInOrderMeta
} from "./order-utils";

import { faker } from "@faker-js/faker";

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

