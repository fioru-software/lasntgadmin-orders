
import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __, _n, sprintf } from '@wordpress/i18n';

import { ProductSelector } from './product-selector';
import { GroupSelector } from './group-selector';
import { findProductById, findGroupQuotas, findGroupQuota, calculateAvailableSpaces } from '../product-utils';
import { getLineItemByProductId, findOrderMetaByKey, isExistingOrder } from '../order-utils';

import { isObject, isNil, isNull, isUndefined } from "lodash";

/**
 * @param { object } order
 */
const ProductPanel = props => {

  const [ notice, setNotice ] = useState(null);
  const [ price, setPrice ] =  useState(null);
  const [ quantity, setQuantity ] = useState(null);
  const [ total, setTotal ] = useState(null);
  const [ products, setProducts ] = useState([]);
  const [ spaces, setSpaces ] = useState(null);
  const [ stock, setStock ] = useState(null);
  const [ productId, setProductId ] = useState(null);
  const [ groupId, setGroupId ] = useState(null);
  const [ product, setProduct ] = useState(null);
  const [ isQuantityDisabled, setQuantityIsDisabled ] = useState(true);
  const [ isProductFormDisabled, setProductFormDisabled ] = useState(true);

  /**
   *  @see handleProductSelect()
   *  @see handlePreselectedProduct()
   */
  useEffect( () => {
    if( ! isNil(productId) && products?.length > 0 ) {
      const product = findProductById( productId, products );
      reset();
      setProduct( product );
    }
  }, [ productId ]);

  useEffect( () => {
    if( ! isNull(groupId) && ! isNull(product) ) {
      const groupQuota = findGroupQuota( 
        groupId, 
        findGroupQuotas( product.meta_data ) 
      );
      const availableSpaces = calculateAvailableSpaces( 
        product.stock_quantity || product.quantity, 
        groupQuota
      );
      setSpaces( availableSpaces );

    }
  }, [ groupId ]);

  const handleNotice = () => {
    if(!productId){
      setNotice(null);
      return;
    }
    if( ! isExistingOrder( props.order ) 
          || 
        ( 'attendees' == props.order.status 
        || 'attendees' === props.status
        ||'waiting-list' === props.status) 
      ) {
        if( ! stock ) {
          setNotice({
            status: "error",
            message: __( 'Out of stock', 'lasntgadmin' )
          });
        } else {
          setNotice({
            status: parseInt(spaces) > 0 ? "info" : "warning",
            message: sprintf( _n( '%s space available.', '%s spaces available.', spaces, 'lasntgadmin' ), spaces )
          });
        }
      }
      else{
        setNotice(null);
      }
  }

  useEffect( () => {
    if( ! isNil(spaces) ) {
      const stock = parseInt( product.stock_quantity );
      const price = parseInt( product.price );
      setPrice( price );
      setStock( stock );

      if( spaces < 1 || stock < 1 ) {
        props.setStatus("waiting-list");
      } else {
        props.setStatus(props.order.status);
      }

      handleNotice();

      
    }
  }, [ spaces ]);
  useEffect(() => {
    if( 
        'attendees' == props.status ||
        'waiting-list' == props.status
      ){
      setQuantityIsDisabled(false);
      setGroupId(groupId);
      handleFetchedGroups()
    }
    else{
      setQuantityIsDisabled(true);
    }
    handleNotice();
  }, [props.status, stock]);
  useEffect( () => {
    if( isObject(product) && isExistingOrder( props.order ) ) {
      const lineItem = getLineItemByProductId( product.id, props.order );
      setQuantity( lineItem.quantity );
      setTotal( product.price*lineItem.quantity );
    }
  }, [ product ]);

  function handleQuantitySelect(e) {
    const quantity = parseInt(e.target.value);
    if ( quantity > spaces || quantity > stock ) {
      props.setStatus("waiting-list");
    } else {
      props.setStatus(props.order.status);
    }
    setQuantity(quantity);
    setTotal(quantity*price);
  }


  function reset() {
    setTotal(null);
    setQuantity(null);
    setNotice(null);
    setPrice(null);
    setStock(null);
    setGroupId(null);
  }

  /**
   * Given it is a new order and productId has been preselected via URL query product, then product id is changed and new product id set
   * Given it is an existing order and order has a line item with product id, then product id is changed and a new product id is set
   */
  function handlePreselectedProduct( productId ) {
    productId = parseInt(productId);
    if( productId ) {
      setProductId( productId );
    }
  }

  function handlePreselectedGroup( groupId ) {
    if( ! isNil( groupId ) ) {
      setGroupId( groupId );
    }
  }

  /**
   * Given it is a new order, when product is selected from dropdown, then productId is changed and new product is set
   */
  function handleProductSelect(e) {
    setProductId( e.target.value );
  }

  /**
   * Given it is a new order, when group is selected from dropdown, then groupId is changed
   */
  function handleGroupSelect(e) {
    setGroupId(e.target.value);
  }

  /**
   * @todo add groupUtils for extracting group id
   */
  function handleFetchedGroups( groups ) {
    const orderMeta = findOrderMetaByKey( 'groups-read', props.order.meta_data );
    handlePreselectedGroup( orderMeta?.value );

    if( props?.user?.allcaps?.view_others_shop_orders ) {
      props.setSubmitButtonDisabled(false);
    }

  }

  function handleFetchedProducts( products ) {

    setProducts(products);
    handlePreselectedProduct( props.productId );

    const orderMeta = findOrderMetaByKey( 'groups-read', props.order.meta_data );
    handlePreselectedGroup( orderMeta?.value );
    
    if( ! isExistingOrder( props.order ) ) {
      
      setQuantityIsDisabled(false)
      setProductFormDisabled(false);
      props.setSubmitButtonDisabled(false);
    }

    else{
      if( 'attendees' == props.order.status ){
        setQuantityIsDisabled(false);
        setGroupId(groupId);
        handleFetchedGroups();
        
      }
    }
    
  }

  return (
    <>
        { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
        <div class="form-field form-row">
          <label for="product">{ __( 'Course', 'lasntgadmin' ) }<span class="required"> *</span></label>
          <ProductSelector id="product" name="product" disabled={ isProductFormDisabled } groupId={ groupId } productId={ productId } apiPath={ props.productApiPath} nonce={ props.nonce } setNotice={ setNotice } onChange={ handleProductSelect } onFetch={ handleFetchedProducts } products={ products } />
        </div>
        { props?.lineItem?.id && <input type="hidden" name="line_item_id" value={ props.lineItem.id } /> }

        { product && 
          <div class="form-field form-row">
            <label for="order_group">{ __( 'Group', 'lasntgadmin' ) }<span class="required"> *</span></label>
            <GroupSelector productId={ productId } disabled={ isProductFormDisabled } groupId={ groupId } id="order_group" name="order_group" apiPath={ props.groupApiPath } nonce={ props.nonce } onChange={ handleGroupSelect } onFetch={ handleFetchedGroups } />
          </div> 
        }

        { !!price && productId > 0 && groupId &&
          <>
            <div class="form-field form-row">
              <label for="price">{ __( 'Price', 'lasntgadmin' ) }</label>
              <input type="number" id="price" disabled placeholder="0" value={ price } />
              <input type="hidden" name="price" value={ price } />
            </div>

            <div class="form-field form-row">
              <label for="quantity">{ __( 'Quantity', 'lasntgadmin' ) }<span class="required"> *</span></label>
              <input type="number" id="quantity" disabled={ isProductFormDisabled && isQuantityDisabled } step="1" min="1" max={ props.max } autocomplete="off" placeholder="0" onChange={ handleQuantitySelect } value={ quantity } required />
              <input type="hidden" name="quantity" value={ quantity } />
            </div>

            <div class="form-field form-row">
              <label for="total">{ __( 'Total', 'lasntgadmin' ) }</label>
              <input type="number" id="total" type="number" disabled placeholder="0" value={ total } />
              <input type="hidden" name="total" value={ total } />
            </div>
          </>
        }

    </>
  );
};

export { ProductPanel };
