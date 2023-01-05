
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';

const ProductSelector = props => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ isDisabled, setIsDisabled ] = useState(false);

  useEffect( async () => {
    try {
      setIsLoading(true);
      setIsDisabled(true);
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
    setIsDisabled(false);
  }, [ props.groupId ]);

  return (
    <>
      { isLoading && <Spinner/> }
      { !isLoading && <select id={ props.id } name={ props.name } disabled={ isDisabled } required onChange={ props.onChange } value={ props?.selectedProduct?.product_id }>
        <option selected disabled value="">Please select</option>
        { props.products.map( (product) => {
          return product.stock_status === "instock" && <option key={ product.id.toString() } data-stock-quantity={ product.stock_quantity} data-price={ product.price } value={ product.id }>{ product.name }</option>
        }
        )}
      </select> }
    </>
  );

}

export { ProductSelector };

