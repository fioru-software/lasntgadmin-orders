
import { waitFor, cleanup, render } from '@testing-library/react';

import '@testing-library/jest-dom'
//import '@testing-library/jest-dom/extend-expect';

import { faker } from "@faker-js/faker";

import { SelectInput, TextArea } from './acf-inputs';

/**
 * Inputs are disabled when 
 * - user selected an existing attendee
 * - order is paid
 */
describe("TextArea", () => {
  describe("paid order", () => {
    it.only("is disabled with hidden input", async () => {
      const name = faker.word.adjective();
      const value = faker.string.uuid();
      const { container } = render( <TextArea name={ name } disabled={ true } value="" /> );
      const textarea = container.querySelector( `textarea[name=${ name }]`);
      const input = container.querySelector( `input[type=hidden]`);
      expect( textarea ).toBeDisabled();
      expect( input ).toBeInTheDocument();
      expect( textarea.value ).toEqual( "" );
      expect( input.value ).toEqual( value );
    });
  });
});

describe("SelectInput", () => {

  afterEach(() => {
    cleanup();
  });

  describe("with default value", () => {
    it("preselects default option", () => {
      const name = faker.word.adjective();
      const value = faker.string.uuid();
      const { container } = render( <SelectInput name={ name } disabled={ true } value={ value } /> );
      const select = container.querySelector( `select[name=${ name }]` );
      const input = container.querySelector( `input[type=hidden]`)
      expect( select ).toBeDisabled();
      expect( input ).toBeInTheDocument();
      expect( select.value ).toEqual( "" );
      expect( input.value ).toEqual( value );
    })
  });

  describe("paid order", () => {
    it("is disabled with hidden input", async () => {
      const name = faker.word.adjective();
      const { container } = render( <SelectInput name={ name } disabled={ true } value="" /> );
      const select = container.querySelector( `select[name=${ name }]` );
      const input = container.querySelector( `input[type=hidden]`)
      expect( select ).toBeDisabled();
      expect( input ).toBeInTheDocument();
    });
  });

  describe("unpaid order", () => {
    it("is enabled without hidden input", async() => {
      const name = faker.word.adjective();
      const { container } = render( <SelectInput name={ name } value="" /> );
      const select = container.querySelector( `select[name=${ name }]` );
      const input = container.querySelector( `input[type=hidden]`)
      expect( select ).not.toBeDisabled();
      expect( input ).not.toBeInTheDocument();
    });
  });
});

describe("TextInput", () => {
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

