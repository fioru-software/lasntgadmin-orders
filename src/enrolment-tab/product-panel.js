
import { useState, useEffect, useRef } from '@wordpress/element';
import { Spinner, Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __, _n, sprintf } from '@wordpress/i18n';

import { ProductSelector } from './product-selector';
import { GroupSelector } from './group-selector';
import { findProductById, findGroupQuotas, findGroupQuota, calculateAvailableSpaces, getReservedStockQuantity } from '../product-utils';
import { getLineItemByProductId, findOrderMetaByKey, isExistingOrder, isWaitingOrder, isDraftOrder, isCompletedOrder, isCancelledOrder, isPendingAttendeesStatus, isWaitingStatus, getDraftStatus, getWaitingStatus } from '../order-utils';

import { isNumber, isObject, isNil, isNull, isUndefined } from "lodash";

/**
 * @param { object } order
 */
const ProductPanel = props => {

  const [ remainingGroupQuota, setRemainingGroupQuota ] = useState(null);
  const [ groupQuota, setGroupQuota ] = useState(null);

  const [ notice, setNotice ] = useState(null);
  const [ price, setPrice ] =  useState(0);
  const [ quantity, setQuantity ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ products, setProducts ] = useState([]);
  const [ spaces, setSpaces ] = useState(null);
  const [ productId, setProductId ] = useState(null);
  const [ groupId, setGroupId ] = useState(""); // empty string when none selected else a number
  const [ product, setProduct ] = useState(null);
  const [ isQuantityInputDisabled, setQuantityInputDisabled ] = useState(false);
  const [ isProductDropdownDisabled, setProductDropdownDisabled ] = useState(true);
  const [ isGroupDropdownDisabled, setGroupDropdownDisabled ] = useState(true);
  const [ isPriceInfoVisible, setPriceInfoVisible ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);

  /**
   * @listens productId
   *
   * @see handleProductSelect()
   * @see handlePreselectedProduct()
   * @deprecated
   */
    /*
  useEffect( () => {
    if( ! isNil(productId) && products?.length > 0 ) {
      const product = findProductById( productId, products );
      reset();
      setProduct( product );
    }
  }, [ productId ]);
    */

  useEffect( () => {
    if( ! isNil( props.productId ) ) {
      setProductId( parseInt( props.productId ) );
    }
  }, [ props.productId ]);

  /**
   * @listens product
   */
  useEffect( () => {
    if( ! isNil( product ) ) {
      setPrice( product.price );
      props.setSubmitButtonDisabled(true);
      setPriceInfoVisible(false);
    }
  }, [ product ]);

  /**
   * @listens quantity
   * @fires props.setStatus
   */
  useEffect( () => {
    if( isNumber( quantity ) && isNumber( spaces ) ) {

      if( ! isCompletedOrder( props.order ) && ! isCancelledOrder( props.order ) ) {
        if( quantity > spaces && quantity > props.reservedStock ) {
          props.setStatus( getWaitingStatus() );
        } else {
          if( isWaitingStatus( props.order.status ) ) {
            props.setStatus( getDraftStatus() );
          } else {
            props.setStatus(props.order.status);
          }
        }
      } else {
        props.setStatus(props.order.status);
      }
    }
  }, [ quantity ]);

  /**
   * @listens groupId
   * @fires quantity
   * @fires spaces
   * @fires groupQuota
   */
  useEffect( () => {

    if( isNumber( groupId ) && isNumber( productId ) && isObject( product)  ) {

      if( isExistingOrder( props.order ) ) {
        const lineItem = getLineItemByProductId( product.id, props.order );
        setQuantity( lineItem.quantity );
        setTotal( product.price*lineItem.quantity );
        setPriceInfoVisible(true);

        if( isCompletedOrder( props.order) || isCancelledOrder( props.order ) ) {
          setQuantityInputDisabled(true);
        }
      }

      if( ! isCompletedOrder( props.order ) && ! isCancelledOrder( props.order ) ) {

        if( isGroupSelected(groupId) && ! isNil(product) && ! isNil(productId) ) {

          fetchProductGroupQuota( productId, groupId );

//          const quota = findGroupQuota(
//            groupId, 
//            findGroupQuotas( product.meta_data )
//          );
//
//          if( isNaN( quota ) || isNil( quota ) || quota === '' ) {
//            setSpaces(
//              calculateAvailableSpaces( product.stock_quantity || product.quantity, quota, getReservedStockQuantity( product ) )
//            );
//            setGroupQuota(null);
//          } else {
//            setSpaces(null);
//            /**
//             * Since we're doing a REST call to determine the remaining quota, we want groupQuota to trigger a change event
//             * even when the quota value is the same. 
//             *
//             * @see https://react.dev/reference/react/useState#ive-updated-the-state-but-the-screen-doesnt-update
//             */
//            setGroupQuota({
//              ...groupQuota,
//              value: quota
//            });
//          }
        }
      }

    }
  }, [ groupId ]);

  async function fetchProductGroupQuota( productId, groupId ) {
    setNotice(null);
    setLoading(true);
    props.setSubmitButtonDisabled(true);
    try {
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
      const result = await apiFetch( {
        path: `${props.productApiPath}/product/group-quota?product_id=${ productId }&group_id=${ groupId }`,
        method: 'GET'
      });

      /**
       * Since we're doing a REST call to determine the remaining quota, we want groupQuota to trigger a change event
       * even when the quota value is the same.
       *
       * @see https://react.dev/reference/react/useState#ive-updated-the-state-but-the-screen-doesnt-update
       */
      if( result === "" ) {
        setGroupQuota( new String("") );
      } else {
        setGroupQuota( new Number(result) );
      }

    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
    }    
  };

  /**
   * @listens groupQuota
   * @fires remainingGroupQuota
   */
  useEffect( () => {

    if( isGroupSelected(groupId) && ! isNil(product) && ! isNil( productId ) ) {
      if( ( typeof groupQuota.valueOf() ) === 'number' ) {
        calculateRemainingQuota( productId, groupId );
      } else {
        setSpaces(
          new Number(
            calculateAvailableSpaces( product.stock_quantity || product.quantity, groupQuota.valueOf(), getReservedStockQuantity( product ) )
          )
        );
      }
    }
  }, [ groupQuota ] );

  async function calculateRemainingQuota( productId, groupId ) {    
    setNotice(null);
    setLoading(true);
    setRemainingGroupQuota(null);
    props.setSubmitButtonDisabled(true);
    try {    
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );    
      const totalAttendees = await apiFetch( {    
        path: `${props.orderApiPath}/total_attendees?product_id=${ productId }&group_id=${ groupId }`,    
        method: 'GET'    
      });    
      setRemainingGroupQuota( new Number( groupQuota - totalAttendees ) );
    } catch (e) {    
      setNotice({    
        status: 'error',    
        message: e.message    
      });    
      console.error(e);    
    }    
  };

  /**
   * @listens remainingGroupQuota
   * @fires spaces
   */
  useEffect( () => {
    if( ! isNil( remainingGroupQuota ) ) {
      const availableSpaces = calculateAvailableSpaces(
        product.stock_quantity || product.quantity, 
        remainingGroupQuota,
        getReservedStockQuantity( product )
      );
      setSpaces( new Number(availableSpaces) );
    }
  }, [ remainingGroupQuota ]);

  /**
   * @listens spaces
   * @fires props.setStatus
   */
  useEffect( () => {

    if( isNumber(spaces) ) {

      if( ! isCompletedOrder( props.order ) && ! isCancelledOrder( props.order ) ) {

        let msg = '';

        if( spaces < 1 ) {
          msg += __('No spaces available. ', 'lasntgadmin' );

        } else {

          if( spaces < quantity && props.reservedStock < quantity ) {
            props.setStatus("waiting-list");
          }

          msg += sprintf( _n( '%s space available. ', '%s spaces available. ', spaces, 'lasntgadmin' ), spaces );
        }

        if( props.reservedStock > 0 ) {
          msg += sprintf( _n( '%s space is temporarily reserved for this order. ', '%s spaces are temporarily reserved for this order. ', parseInt( props.reservedStock ), 'lasntgadmin' ), props.reservedStock );
        }

        setNotice({
          status: spaces > 0 ? "info" : props.reservedStock > 0 ? "warning" : "error",
          message: msg
        });

        setPriceInfoVisible(true);
        setLoading(false);
        props.setSubmitButtonDisabled(false);
      }
    }
  }, [ spaces ]);

  function isGroupSelected( groupId ) {
    return ! isNil( groupId ) && groupId !== '';
  }

  /**
   * user changed order quantity > stock, auto switching order status to waiting list, 
   */
  function handleQuantitySelect(e) {
    const quantity = parseInt(e.target.value);
    setQuantity(quantity);
    setTotal(quantity*price);
  }


  function reset() {
    setTotal(null);
    setQuantity(null);
    setNotice(null);
    setPrice(null);
    setSpaces(null);
    setGroupId("");
  }

  /**
   * Given it is a new order and productId has been preselected via URL query product, then product id is changed and new product id set
   * Given it is an existing order and order has a line item with product id, then product id is changed and a new product id is set
   */
  function handlePreselectedProduct( productId ) {
    productId = parseInt(productId);
    if( productId > 0 ) {
      setProductId( productId );
    }
  }

  function handlePreselectedGroup( groupId ) {
    groupId = parseInt( groupId );
    if( groupId > 0 ) {
      setGroupId( groupId );
    }
  }

  /**
   * Given it is a new order, when product is selected from dropdown, then productId is changed and new product is set
   */
  function handleProductSelect(e) {
    setProductId( parseInt( e.target.value ) );
  }

  /**
   * Given it is a new order, when group is selected from dropdown, then groupId is changed
   * When changing group, quantity is reset, cause spaces is recalculated and may impact order status.
   */
  function handleGroupSelect(e) {
    setQuantity(0);
    setGroupId( parseInt( e.target.value ));
  }

  function handleFetchedGroups( groups ) {
    const orderMeta = findOrderMetaByKey( 'groups-read', props.order.meta_data );
    handlePreselectedGroup( orderMeta?.value );

    if( isExistingOrder( props.order ) ) {
      setGroupDropdownDisabled(true);
    } else {
      setGroupDropdownDisabled(false);
    }
  }

  /**
   * @deprecated
   */
  /*
  function handleFetchedProducts( products ) {

    setProducts(products);
    handlePreselectedProduct( props.productId );

    const orderMeta = findOrderMetaByKey( 'groups-read', props.order.meta_data );
    handlePreselectedGroup( orderMeta?.value );

    if( isExistingOrder( props.order ) ) {
      handleFetchedGroups();
      setProductDropdownDisabled(true);
    } else {
      setProductDropdownDisabled(false);
    }
  }
  */

  function handleFetchedProduct( product ) {
    setProduct(product);
    setProducts([product]); // legacy 
    const orderMeta = findOrderMetaByKey( 'groups-read', props.order.meta_data );
    handlePreselectedGroup( orderMeta?.value );

    if( isExistingOrder( props.order ) ) {
      handleFetchedGroups();
      setProductDropdownDisabled(true);
    } else {
      setProductDropdownDisabled(false);
    }
  }

  return (
    <>
        { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
        <div className="form-field form-row">
          <label htmlFor="product">{ __( 'Course', 'lasntgadmin' ) }<span className="required"> *</span></label>
          <ProductSelector id="product" name="product" disabled={ isProductDropdownDisabled } groupId={ groupId } productId={ props.productId } apiPath={ props.productApiPath} nonce={ props.nonce } setNotice={ setNotice } onChange={ handleProductSelect } onFetch={ handleFetchedProduct } products={ products } />
        </div>
        { props?.lineItem?.id && <input type="hidden" name="line_item_id" value={ props.lineItem.id } /> }

        { product && 
          <div className="form-field form-row">
            <label htmlFor="order_group">{ __( 'Group', 'lasntgadmin' ) }<span className="required"> *</span></label>
            <GroupSelector productId={ props.productId } disabled={ isGroupDropdownDisabled } groupId={ groupId } id="order_group" name="order_group" apiPath={ props.groupApiPath } nonce={ props.nonce } onChange={ handleGroupSelect } onFetch={ handleFetchedGroups } />
          </div> 
        }

        { isLoading && <Spinner/> }
        { ! isLoading && isPriceInfoVisible && 
          <>
            <div className="form-field form-row">
              <label htmlFor="price">{ __( 'Price', 'lasntgadmin' ) }</label>
              <input type="number" id="price" disabled placeholder="0" value={ price } />
              <input type="hidden" name="price" value={ price } />
            </div>

            <div className="form-field form-row">
              <label htmlFor="quantity">{ __( 'Quantity', 'lasntgadmin' ) }<span className="required"> *</span></label>
              <input type="number" id="quantity" disabled={ isQuantityInputDisabled } step="1" min="1" max={ props.max } autoComplete="off" placeholder="0" onChange={ handleQuantitySelect } value={ quantity } required />
              <input type="hidden" name="quantity" value={ quantity } />
            </div>

            <div className="form-field form-row">
              <label htmlFor="total">{ __( 'Total', 'lasntgadmin' ) }</label>
              <input type="number" id="total" type="number" disabled placeholder="0" value={ total } />
              <input type="hidden" name="total" value={ total } />
            </div>
          </>
        }

    </>
  );
};

export { ProductPanel };
