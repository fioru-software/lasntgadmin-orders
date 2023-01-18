
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import { findGroupQuotas, findGroupQuota, calculateAvailableSpaces } from './product-utils';

/**
 * @param { number } groupId
 * @param { object } selectedProduct
 * @param { string } apiPath
 * @param { string } nonce
 * @param { function } setNotice
 * @param { function } onChange
 * @param { function } setProducts
 * @param { array } products
 */
const ProductSelector = props => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ isDisabled, setIsDisabled ] = useState(false);

  useEffect( () => {
      setIsDisabled( props.disabled );
  }, [ props.disabled ]);

  function setDisabled(disabled) {
    if( ! props.disabled ) {
      setIsDisabled(disabled);
    }
  }

  useEffect( async () => {
    try {
      setIsLoading(true);
      setDisabled(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
      const result = await apiFetch( {
        path: `${props.apiPath}/${props.groupId}`,
        method: 'GET'
      } );
      if( ! result.length ) {
        props.setNotice({
          status: 'error',
          message: 'No products are available for this group.'
        });
      }
      props.setProducts(result);
    } catch (e) {
      props.setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
    }
    setIsLoading(false);
    setDisabled(false);
  }, [ props.groupId ]);

  return (
    <>
      { isLoading && <Spinner/> }
      { !isLoading && <select id={ props.id } disabled={ isDisabled } required onChange={ props.onChange } value={ props?.productId }>
        <option selected disabled value="">Please select</option>
        { props.products.map( (product) => {
          return <option key={ product.id.toString() } data-stock={ product.stock_quantity } data-spaces={ calculateAvailableSpaces( product.stock_quantity, findGroupQuota( props.groupId, findGroupQuotas( product.meta_data ) ) ) } data-price={ product.price } value={ product.id }>{ product.name }</option>
        }
        )}
      </select> }
      <input type="hidden" name={ props.name } value={ props?.productId } />
    </>
  );

}

export { ProductSelector };

