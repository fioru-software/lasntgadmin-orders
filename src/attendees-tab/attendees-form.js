
import { createContext, useState, useEffect, useRef } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { range } from 'lodash';

import { AttendeeFormFieldset } from './attendee-form-fieldset';

const ProductContext = createContext();
const OrderContext = createContext();
const AcfFieldsContext = createContext();

/**
 * @param { number } quantity
 * @param { array } fields
 * @param { string } groupId
 * @param { string } nonce 
 * @param { object } order
 * @param { object } product
 */
const AttendeesForm = props => {

  const [ notice, setNotice ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  /**
   * @todo remove
   */
  useEffect( () => {
    console.log('=== attendees ===');
    console.log(props.attendees);
  }, [ props.attendees ]);

  function handleSubmit( e ) {
    e.preventDefault();
    console.log('TODO: handle submit');
  }

  return (
    <>
      <div class="form-wrap">
        <form class="panel-wrap woocommerce" onSubmit={ handleSubmit }>
          <div id="order_data" class="panel woocommerce-order-data">
            <ProductContext.Provider value={ props.product }>
              <OrderContext.Provider value={ props.order }>
                <AcfFieldsContext.Provider value={ props.fields }>

                { props?.quantity > 0 && range( props.quantity ).map( ( index ) => {
                  return (
                    <AttendeeFormFieldset index={ index } attendee={ props.attendees[index] } />
                  );
                })}

                </AcfFieldsContext.Provider>
              </OrderContext.Provider>
            </ProductContext.Provider>

            { props?.quantity > 0 && 
            <div class="form-field">
              { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
              <button type="submit" class="button alt save_order wp-element-button button-primary" name="save" value="Create">{ __( 'Save attendees', 'lasntgadmin' ) }</button>
              { isLoading && <Spinner/> }
            </div>}

          </div>
        </form>
      </div> 
    </>
  );
};

export { 
  AttendeesForm, 
  AcfFieldsContext,
  ProductContext, 
  OrderContext 
};
