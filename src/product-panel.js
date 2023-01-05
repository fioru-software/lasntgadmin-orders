
import { useState, useEffect, useRef } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import { ProductSelector } from './product-selector';
import { TextInput } from './text-input';
import apiFetch from '@wordpress/api-fetch';

const ProductPanel = props => {

  const [ notice, setNotice ] = useState(null);
  const [ price, setPrice ] =  useState(0);
  const [ quantity, setQuantity ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ products, setProducts ] = useState([]);

  useEffect( () => {
    setNotice(null);
    setPrice(null);
  }, [ props.groupId ]);

  function handleFetchedProducts( products ) {

    setProducts(products);

    /**
     * When editing an existing order
     */
    if( props.lineItem ) {
      const product = products.find( product => props.lineItem.product_id === product.id );
      const price = parseInt( product.price );
      setPrice( price );
      setQuantity( props.lineItem.quantity );
      setTotal( price*props.lineItem.quantity );
    }
  }

  function handleProductChange(e) {
    const option = e.target.querySelector(`option[value="${e.target.value}"]`);
    setPrice( parseInt(option.dataset.price) );
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
          <label for="product">Product</label>
          <ProductSelector id="product" name="product" groupId={ props.groupId } selectedProduct={ props.lineItem } apiPath={ props.apiPath} nonce={ props.nonce } setNotice={ setNotice } onChange={ handleProductChange } setProducts={ handleFetchedProducts } products={ products } />
        </div>
        { props?.lineItem?.id && <input type="hidden" name="line_item_id" value={ props.lineItem.id } /> }

        { !!price && products.length > 0 && 
        <>
          <div class="form-field">
            <label for="price">Price</label>
            <input id="price" type="number" disabled placeholder="0" value={ price } />
            <input type="hidden" name="price" value={ price } />
          </div>
          <div class="form-field">
            <label for="quantity">Quantity</label>
            <input id="quantity" name="quantity" type="number" step="1" min="1" autocomplete="off" placeholder="0" onChange={ handleQuantityChange } value={ quantity } required />
          </div>
          <div class="form-field">
            <label for="total">Total</label>
            <input id="total" type="number" disabled placeholder="0" value={ total } />
            <input type="hidden" name="total" value={ total } />
          </div>
        </>
        }

      </div> 
    </>
  );
};

export { ProductPanel };
