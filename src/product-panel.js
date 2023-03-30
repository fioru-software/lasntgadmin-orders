
import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import { ProductSelector } from './product-selector';
import { GroupSelector } from './group-selector';
import { findProductById, findGroupQuotas, findGroupQuota, calculateAvailableSpaces } from './product-utils';

import { isNil, isNull, isUndefined } from "lodash";

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

  /**
   *  @see handleProductSelect()
   *  @see handlePreselectedProduct()
   */
  useEffect( () => {
    if( ! isNil(productId) && ! isNull(productId) && ! isUndefined(productId) && products?.length > 0 ) {
      const product = findProductById( productId, products );
      reset();
      setProduct( product );
    }
  }, [ productId ]);

  /**
   * Given it is a new order and productId has been preselected via URL query product, then product id is changed and new product id set
   * Given it is an existing order and order has a line item with product id, then product id is changed and a new product id is set
   */
  function handlePreselectedProduct( productId ) {
    if( ! isNil( productId ) && ! isNull( productId ) && ! isUndefined( productId ) ) {
      setProductId( productId );
    }
  }

  function handlePreselectedGroup( groupId ) {
    if( ! isNil( groupId ) && ! isNull( groupId ) && ! isUndefined( groupId ) ) {
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

  useEffect( () => {
    if( ! isNull(groupId) && ! isNull(product) ) {
      const groupQuota = findGroupQuota( 
        groupId, 
        findGroupQuotas( product.meta_data ) 
      ) ;
      const availableSpaces = calculateAvailableSpaces( 
        product.stock_quantity || product.quantity, 
        groupQuota
      );
      setSpaces( availableSpaces );

    }
  }, [ groupId ]);

  useEffect( () => {
    if( ! isNull(spaces) && ! isUndefined(spaces) ) {
      const stock = parseInt( product.stock_quantity );
      const price = parseInt( product.price );
      setPrice( price );
      setStock( stock );
      setQuantity( 0 );
      setTotal( 0 );

      if( spaces < 1 && stock > 0 ) {
        props.setStatus("waiting-list");
      } else {
        props.setStatus(props.order.status);
      }

      if( ! stock ) {
        setNotice({
          status: "error",
          message: "Out of stock"
        });
      } else {
        setNotice({
          status: parseInt(spaces) > 0 ? "info" : "warning",
          message: `${ spaces} spaces available.`
        });
      }
    }
  }, [ spaces ]);

  function reset() {
    setTotal(null);
    setQuantity(null);
    setNotice(null);
    setPrice(null);
    setStock(null);
    setGroupId(null);
  }

  /**
   * @todo add groupUtils for extracting group id
   */
  function handleFetchedGroups( groups ) {
    handlePreselectedGroup( parseInt( props?.order?.meta_data[0].value ) );
  }

  function handleFetchedProducts( products ) {

    setProducts(products);
    handlePreselectedProduct( props.productId );
    props.setIsDisabled(false); // activate the order form submit button

    /**
     * When editing an existing order
     * @todo refactor
     */
    /*
    if( props?.lineItem?.product_id ) {
      const product = products.find( product => props.lineItem.product_id === product.id );
      const price = parseInt( product.price );
      setPrice( price );
      setQuantity( props.lineItem.quantity );
      setTotal( price*props.lineItem.quantity );
      setProductId( props.lineItem.id );
    }
    */
  }

  function handleQuantitySelect(e) {
    const quantity = parseInt(e.target.value);
    setQuantity(quantity);
    setTotal(quantity*price);
  }

  return (
    <>
      { notice && <Notice status={ notice.status } isDismissable={ true } onDismiss={ () => setNotice(null) } >{ notice.message }</Notice> }
      <div class="form-wrap">
        <h3>Product</h3>
        <div class="form-field">
          <fieldset>
            <p class="form-row">
              <label for="product">Product<span class="required"> *</span></label>
              <ProductSelector id="product" name="product" disabled={ !! props?.lineItem?.id } groupId={ groupId } productId={ productId } apiPath={ props.productApiPath} nonce={ props.nonce } setNotice={ setNotice } onChange={ handleProductSelect } onFetch={ handleFetchedProducts } products={ products } />
            </p>
          </fieldset>
        </div>
        { props?.lineItem?.id && <input type="hidden" name="line_item_id" value={ props.lineItem.id } /> }

        { product && 
          <div class="form-field">
            <fieldset>
              <p class="form-row">
                <label for="order_group">Group<span class="required"> *</span></label>
                <GroupSelector productId={ productId } groupId={ groupId } id="order_group" name="order_group" apiPath={ props.groupApiPath } nonce={ props.nonce } onChange={ handleGroupSelect } onFetch={ handleFetchedGroups } />
              </p>
            </fieldset>
          </div> 
        }


        { !!price && productId > 0 && groupId &&
        <>
          <div class="form-field">
            <fieldset>
              <p class="form-row">
                <label for="price">Price</label>
                <input type="number" id="price" disabled placeholder="0" value={ price } />
                <input type="hidden" name="price" value={ price } />
              </p>
            </fieldset>
          </div>

          <div class="form-field">
            <fieldset>
              <p class="form-row">
                <label for="quantity">Quantity<span class="required"> *</span></label>
                <input type="number" id="quantity" disabled={ !! props?.lineItem?.id } step="1" min="1" max={ spaces > 0 ? spaces : stock } autocomplete="off" placeholder="0" onChange={ handleQuantitySelect } value={ quantity } required />
                <input type="hidden" name="quantity" value={ quantity } />
              </p>
            </fieldset>
          </div>

          <div class="form-field">
            <fieldset>
              <p class="form-row">
                <label for="total">Total</label>
                <input type="number" id="total" type="number" disabled placeholder="0" value={ total } />
                <input type="hidden" name="total" value={ total } />
              </p>
            </fieldset>
          </div>
        </>
        }

      </div> 
    </>
  );
};

export { ProductPanel };
