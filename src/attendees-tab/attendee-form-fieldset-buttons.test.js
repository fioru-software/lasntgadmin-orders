
import { waitFor, cleanup, render } from '@testing-library/react';

import '@testing-library/jest-dom'

import { faker } from "@faker-js/faker";

import { ProductContext } from './attendees-form';
import { AttendeeFormFieldsetButtons } from './attendee-form-fieldset-buttons';

describe("AttendeeFormFieldsetButtons", () => {

    describe("Course is closed", () => {

      describe("Reset button", () => {
        it.only("Is disabled", async () => {
          const product = {
            status: 'closed'
          };
          const { findByText } = render( 
            <ProductContext.Provider value={ product }>
              <AttendeeFormFieldsetButtons /> 
            </ProductContext.Provider> 
          );
          const resetButton = await findByText('Reset Attendee');
          console.log(resetButton);
        });
      });

      describe("Remove button", () => {
        it.todo("Is disabled");
      });

    });

    describe("Course is open", () => {

      describe("Order paid with grant", () => {

        describe("Reset button", () => {
          it.todo("Is enabled");
        });

        describe("Remove button", () => {
          it.todo("Is enabled");
        });

      });

      describe("Order paid with purchase order", () => {

        describe("Reset button", () => {
          it.todo("Is enabled");
        });

        describe("Remove button", () => {
          it.todo("Is enabled");
        });

      });

      describe("Order paid with card", () => {

        describe("Reset button", () => {
          it.todo("Is enabled");
        });

        describe("Remove button", () => {
          it.todo("Is disabled");
        });

      });

    });

});

