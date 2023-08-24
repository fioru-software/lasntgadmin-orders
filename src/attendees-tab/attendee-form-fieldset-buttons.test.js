
import { faker } from "@faker-js/faker";

describe("handleRemoveAttendee()", () => {
  describe("page just loaded", () => {
    describe("quantity = 3", () => {

      describe("no attendees", () => {

        describe("remove an empty attendee slot", () => {
          it.todo("decrements order quantity and removes an attendee slot");
        });

        describe("add three attendees", () => {
          describe("remove middle attendee", () => {
            it.todo("decrements order quantity and removes the middle attendee")
          });
        });

      });
    });
  });
});
