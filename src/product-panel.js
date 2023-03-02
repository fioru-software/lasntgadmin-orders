
import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import { ProductSelector } from './product-selector';
import apiFetch from '@wordpress/api-fetch';

const ProductPanel = props => {

  const [ notice, setNotice ] = useState(null);
  const [ price, setPrice ] =  useState(0);
  const [ quantity, setQuantity ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ products, setProducts ] = useState([]);
  const [ spaces, setSpaces ] = useState(0);
  const [ stock, setStock ] = useState(0);
  const [ productId, setProductId ] = useState(null);

  useEffect( () => {
    setNotice(null);
    setPrice(null);
  }, [ props?.groupId ]);

  useEffect( () => {
    if( props?.lineItem?.id) {
      setProductId(props.lineItem.id);
    }
  }, [props?.lineItem?.id]);

  function handleFetchedProducts( products ) {

    setProducts(products);
    props.setIsDisabled(false); // activate the order form submit button

    /**
     * When editing an existing order
     */
    if( props?.lineItem ) {
      const product = products.find( product => props.lineItem.product_id === product.id );
      const price = parseInt( product.price );
      setPrice( price );
      setQuantity( props.lineItem.quantity );
      setTotal( price*props.lineItem.quantity );
      setProductId( props.lineItem.id );
    }
  }

  function handleProductChange(e) {
    const option = e.target.querySelector(`option[value="${e.target.value}"]`);
    const stock = parseInt( option.dataset.stock );
    const price = parseInt( option.dataset.price );
    const spaces = parseInt( option.dataset.spaces );
    setPrice( price );
    setSpaces( spaces );
    setStock( stock );
    setQuantity( 0 );
    setTotal( 0 );
    setProductId( option.value);

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
        status: parseInt(option.dataset.spaces) > 0 ? "info" : "warning",
        message: `${ option.dataset.spaces} spaces available.`
      });
    }
  }

  function handleQuantityChange(e) {
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
              <ProductSelector id="product" name="product" disabled={ !! props?.lineItem?.id } groupId={ props.groupId } productId={ productId } apiPath={ props.apiPath} nonce={ props.nonce } setNotice={ setNotice } onChange={ handleProductChange } setProducts={ handleFetchedProducts } products={ products } />
            </p>
          </fieldset>
        </div>
        { props?.lineItem?.id && <input type="hidden" name="line_item_id" value={ props.lineItem.id } /> }

        { !!price && products.length > 0 && 
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
                <input type="number" id="quantity" disabled={ !! props?.lineItem?.id } step="1" min="1" max={ spaces > 0 ? spaces : stock } autocomplete="off" placeholder="0" onChange={ handleQuantityChange } value={ quantity } required />
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
