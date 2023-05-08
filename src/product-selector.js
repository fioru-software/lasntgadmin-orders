
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import { isNil, isBoolean } from "lodash";

/**
 * @param { number } productId
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
  const [ productId, setProductId ] = useState(null);
  const [ isDisabled, setIsDisabled ]  = useState(true);

  useEffect( () => {
    if( ! isNil( props.disabled ) ) {
      setIsDisabled( props.disabled );
    }
  }, [props?.disabled]);

  useEffect( () => {
    if( ! isNil( props?.productId ) ) {
      setProductId(props.productId);
    }
  }, [props?.productId]);

  useEffect( () => {
    async function runFetch() {
      try {
        setIsLoading(true);
        setProductId(null);
        apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
        const result = await apiFetch( {
          path: `${props.apiPath}`,
          method: 'GET'
        } );
        if( ! result.length ) {
          props.setNotice({
            status: 'error',
            message: 'No courses are available.'
          });
        }
        props.onFetch(result);
      } catch (e) {
        props.setNotice({
          status: 'error',
          message: e.message
        });
        console.error(e);
      }
      setIsLoading(false);
    }
    runFetch();
  }, []);

  return (
    <>
      { isLoading && <Spinner/> }
      { !isLoading && <select id={ props.id } disabled={ isBoolean( props.disabled ) ? props.disabled : isDisabled } required onChange={ props.onChange } value={ productId } defaultValue={ productId } >
        <option selected disabled value="">Please select</option>
        { props.products.map( (product) => {
          return <option key={ product.id.toString() } value={ product.id }>{ product.name }</option>
        }
        )}
      </select> }
      <input type="hidden" name={ props.name } value={ props?.productId } />
    </>
  );

}

export { ProductSelector };

