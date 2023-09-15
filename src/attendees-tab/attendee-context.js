
import { createContext } from '@wordpress/element';

const ProductContext = createContext();
const OrderContext = createContext();
const AcfFieldsContext = createContext();
const AttendeeContext = createContext();
const AttendeesContext = createContext();
const AttendeeFormContext = createContext();

export {
  AttendeeFormContext,
  ProductContext,
  OrderContext,
  AcfFieldsContext,
  AttendeeContext,
  AttendeesContext
}
