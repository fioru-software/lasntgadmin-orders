
import { useState, useEffect } from '@wordpress/element';
import { Spinner, Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import { GroupSelector } from './group-selector';
import { ProductPanel } from './product-panel';
import { StatusSelector } from './status-selector';
import { BillingAddress } from './billing-address';

const OrderForm = props => {

  const [ notice, setNotice ] = useState(null);
  const [ groupId, setGroupId ] = useState(null);
  const [ lineItem, setLineItem ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isDisabled, setIsDisabled ] = useState(true);
  const [ status, setStatus ] = useState("");
  const [ buttonText, setButtonText ] = useState("Create");

  useEffect( () => {
    setGroupId(props.groupId);
  }, [props.groupId]);

  /**
   * Set initial button text
   */
  useEffect( () => {
    setStatus(props.status);
    if(props.status !== 'auto-draft') {
      setButtonText('Update');
    }
  }, [props.status]);

  /**
   * Change button text
   */
  useEffect( () => {
    if( status === 'waiting-list' ) {
      setButtonText("Add to waiting list");
    } else {
      if(props?.status === 'auto-draft') {
        setButtonText("Create");
      } else {
        setButtonText("Update");
      }
    }
  }, [ status ]);

  /**
   * Only a single product line item per order
   */
  useEffect( () => {
    setLineItem( props.order.line_items[0] );
  }, props.order.line_items );

  /**
   * @todo fetch order via order api instead of injecting as prop
   * @see https://woocommerce.github.io/woocommerce-rest-api-docs/?php#retrieve-an-order
   */
  useEffect( async () => {
  }, [props?.order?.id]);

  /**
   * @todo Fetch user and meta via WP REST API
   * @see https://developer.wordpress.org/rest-api/reference/users/
   * @see https://developer.wordpress.org/rest-api/extending-the-rest-api/modifying-responses/
   */
  useEffect( async () => {
  }, [props?.user?.id]);

  useEffect( () => {
  }, [ props?.user]);

  useEffect( () => {
  }, [ props?.userMeta]);

  /**
   * @deprecated
   */
  function parseBillingData(formData) {
    return {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      address_1: formData.get('address_1'),
      address_2: formData.get('address_2'),
      city: formData.get('city'),
      state: formData.get('state'),
      postcode: formData.get('postcode'),
      country: formData.get('country'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };
  }

  function parseFormData(formData) {
    const body = {
      billing: {},
      shipping: {},
      currency: formData.get('currency'),
      customer_id: formData.get('customer_id'),
      status: formData.get('order_status'),
      meta_data: [
        {
          key: 'groups-read',
          value: formData.get('order_group')
        }
      ],
      line_items: [
        {
          product_id: parseInt( formData.get('product') ),
          quantity: parseInt( formData.get('quantity') )
        }
      ]
    };

    /**
     * When editing an existing order
     */
    if( lineItem?.order_id ) {
      body.line_items = [
        {
          ...body.line_items[0],
          ...{
            id: lineItem.id,
            order_id: lineItem.order_id,
            price: parseInt( formData.get('price') ),
            subtotal: `${formData.get('subtotal')}`,
            total: `${formData.get('total')}`
          }
        }
      ];
    }

    return body;

  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = parseFormData(formData);
    const method = props.order.date_created ? 'PUT' : 'POST';
    try {
      setNotice(null);
      setIsLoading(true);
      setIsDisabled(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
      props.order = await apiFetch( 
        {
          path: props.order.date_created ? `/wc/v3/orders/${ props.order.id }` : `/wc/v3/orders`,
          method,
          data
        } 
      );
      setNotice({
        status: 'success',
        message: 'Updated order. Redirecting to attendees tab...'
      });
      document.location.assign( `/wp-admin/post.php?post=${ props.order.id }&action=edit&tab=attendees` ); 
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setIsDisabled(false);
    }
  }

  /**
   * @deprecated
   */
  function renderPersonalFormInputs() {
    return (
      <>
        <div class="form-wrap">
          <h3>Personal</h3>
          <div class="form-field">
            <label for="first_name">First name<span class="required"> *</span></label>
            <input type="text" name="first_name" id="first_name" defaultValue={ props.order.billing.first_name || props.userMeta.first_name } required /> 
          </div>
          <div class="form-field">
            <label for="last_name">Last name<span class="required"> *</span></label>
            <input type="text" name="last_name" id="last_name" defaultValue={ props.order.billing.last_name || props.userMeta.last_name } required /> 
          </div>
          <div class="form-field">
            <label for="phone">Phone<span class="required"> *</span></label>
            <input type="tel" name="phone" id="phone" defaultValue={ props.order.billing.phone || props.userMeta.billing_phone } required /> 
          </div>
        </div>

        <div class="form-wrap">
          <h3>Address</h3>
          <BillingAddress order={ props.order } userMeta={ props.userMeta } />
        </div>
      </>
    );
  }

  return (
    <form class="panel-wrap woocommerce" onSubmit={ handleSubmit } >

      <input type="hidden" name="email" value={ props.order.billing.email || props.user.data.user_email } />
      <input type="hidden" name="currency" value={ props.order.currency || props.currency } />
      <input type="hidden" name="customer_id" value={ props.order.customer_id || props.user.ID } />

      <div id="order_data" class="panel woocommerce-order-data">

        <div class="form-wrap">

          <h3>Order</h3>

          <div class="form-field">
            <fieldset>
              <p class="form-row">
                <label for="order_status">Status<span class="required"> *</span></label>
                <StatusSelector id="order_status" name="order_status" user={ props?.user } order={ props?.order } status={ status } setStatus={ setStatus } apiPath={ props.orderApiPath} nonce={ props.nonce } />
              </p>
            </fieldset>
          </div>

          <div class="form-field">
            <fieldset>
              <p class="form-row">
                <label for="order_group">Order group<span class="required"> *</span></label>
                <GroupSelector groupId={ groupId || props.groupId } id="order_group" name="order_group" apiPath={ props.groupApiPath } nonce={ props.nonce } setGroupId={ setGroupId } />
              </p>
            </fieldset>
          </div>

        </div>

        { !!groupId && <><hr/><ProductPanel nonce={ props.nonce } setIsDisabled={ setIsDisabled } apiPath={ props.productApiPath } lineItem={ lineItem } order={ props.order } groupId={ groupId } setStatus={ setStatus } /></> }

        <div class="form-wrap">
          <div class="form-field">
          { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
          <button disabled={ isDisabled } type="submit" class="button save_order wp-element-button" name="save" value="Create">{ buttonText } the order</button>
          { isLoading && <Spinner/> }
          </div>
        </div>
      </div>

    </form>

  );
}

export { OrderForm };
