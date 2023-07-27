
import { faker } from "@faker-js/faker";

describe("AcfInput", () => {
  describe("Paid order", () => {
    it.todo("Is disabled");
  });
  describe("Unpaid order", () => {
    describe("Existing attendee", () => {
      describe("Empty field", () => {
        it.todo("Is enabled");
      });
      describe("Filled field", () => {
        it.todo("Is enabled");
      });
    });
    describe("New attendee", () => {
      describe("Empty field", () => {
        it.todo("Is enabled");
      });
    });
  });
});

describe("ResetAttendeeButton", () => {
  describe("Unpaid order", () => {
    describe("Existing attendee", () => {
      it.todo("Button is visible");
    });
    describe("New attendee", () => {
      it.todo("Button is hidden");
    });
  });
  describe("Paid order", () => {
    it.todo("Button is hidden");
  });
});

describe("RemoveAttendeeButton", () => {
  describe("Unpaid order", () => {
    describe("Existing attendee", () => {
      it.todo("Button is visible");
    });
    describe("New attendee", () => {
      it.todo("Button is visible");
    });
  });
  describe("Paid order", () => {
    it.todo("Button is hidden");
  });
});



