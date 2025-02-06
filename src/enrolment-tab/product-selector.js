
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
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
  const [ productId, setProductId ] = useState("");
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

  async function fetchProducts() {
    try {
      setIsLoading(true);
      setProductId("");
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
      const result = await apiFetch( {
        path: `${props.apiPath}`,
        method: 'GET'
      } );
      if( ! result.length ) {
        props.setNotice({
          status: 'error',
          message: __( 'No courses are available.', 'lasntgadmin' )
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

  async function fetchProduct( productId ) {
    try {
      setIsLoading(true);
      apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
      const result = await apiFetch( {
        path: `${props.apiPath}/product/${productId}`,
        method: 'GET'
      } );
      if( ! result ) {
        props.setNotice({
          status: 'error',
          message: __( 'Course does not exist.', 'lasntgadmin' )
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

  useEffect( () => {
    if( ! isNil( props.productId ) ) {
      fetchProduct( props.productId );
    }
  }, [ props.productId ] );

  return (
    <>
      { isLoading && <Spinner/> }
      { !isLoading && <select id={ props.id } disabled={ isBoolean( props.disabled ) ? props.disabled : isDisabled } required onChange={ props.onChange } value={ productId } >
        <option disabled value="">{ __( 'Please select', 'lasntgadmin' ) }</option>
        { props.products.map( (product) => {
          return <option key={ product.id.toString() } value={ product.id }>{ product.name }</option>
        }
        )}
      </select> }
      <input type="hidden" name={ props.name } defaultValue={ props?.productId } />
    </>
  );

}

export { ProductSelector };
