
import { Spinner } from '@wordpress/components';
import { useContext, useState, useEffect, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { RadioControl } from '@wordpress/components';
import { isNil } from "lodash";
import { AttendeeContext } from './attendee-context';

const PredictiveSearchInput = props => {

  const attendee = useContext( AttendeeContext );

  const quantity = props.quantity;

  const textInput = useRef(null);

	const [ attendees, setAttendees ] = useState([]);
	const [ options, setOptions ] = useState([]);
  const [ disabled, setDisabled ] = useState(false);

  const [ isLoading, setIsLoading ] = useState(false);

	useEffect( () => {
		if( ! isNil( props?.options ) ) {
			setIsLoading(false);
			setOptions(props.options);
		}
	}, [ props?.options ]);

	useEffect( () => {
		if( ! isNil( props?.defaultValue ) ) {
			textInput.current.value = props.defaultValue;
			if( props.defaultValue === "" ) {
				setDisabled(false);
			} else if( Object.hasOwn( attendee, 'id' ) || Object.hasOwn( attendee, 'ID' )) {
				setDisabled(true);
			}

		}
	}, [ props.defaultValue ]);

	useEffect( () => {
		if( attendees?.length ) {
			setOptions(
				formatAttendeesIntoOptions(
					attendees
				)
			);
		}
	}, [ attendees ]);

  function handleSearch( e ) {
    const searchText = textInput.current.value;
    if( ! isNil(searchText) ) {
      if(searchText.length > 0) {
        async function runFetch() {
          setIsLoading(true);
          const res = await fetchAttendees( searchText );
          setIsLoading(false);
					setAttendees( res );
        }
        runFetch();
      } else {
        setOptions([]);
        setIsLoading(false);
      }
    }
  }

	function formatAttendeesIntoOptions( attendees ) {
		return attendees.map( attendee => {
			const option = {
				label: attendee.acf[props.acfFieldName],
				value: attendee.id
			};
			if( props?.acfClarifyingFieldName ) {
				option.label += `, ${attendee.acf[props.acfClarifyingFieldName]}`
			}
			return option;
		});
	}

	async function fetchAttendees( searchText ) {
		const searchParams = new URLSearchParams( window.location.search);
		const query = searchText
			? {
				order_id: searchParams.get('post'),
				acf_field_name: props.acfFieldName,
				acf_field_value: searchText
			}
			: {};
    apiFetch.use( apiFetch.createNonceMiddleware( props.nonce ) );
		return await apiFetch( {
			path: addQueryArgs( '/wp/v2/attendee', query )
		});
	}

	function handleSelect( value ) {
		const attendee = attendees.find( attendee => attendee.id === parseInt(value) );
		props.onChange( attendee );
		textInput.current.value = attendee.acf[props.acfFieldName]
    setOptions([]);
    setDisabled(true);
	}

	function handleInput( e ) {
		if( Object.hasOwn( props, 'onInput' ) ) {
			props.onInput(e);
		}
		if( props?.capitalise ) {
			textInput.current.value = e.target.value.toUpperCase();
		}
	}

  function handleCancel() {
    setOptions([]);
  }

  function showSearchButton() {
    return options.length == 0;
  }

  function isSearchButtonDisabled() {
    return isLoading;
  }

  function showCancelButton() {
    return options.length > 0;
  }

  function showSpinner() {
    return isLoading && options.length === 0;
  }

  function showSearchResult() {
    return ! isLoading && options.length > 0;
  }

  return (
		<>
			<p className="description">{ props.helpText }</p>
			<input className={ props.acfFieldName } name={ props.name } id={ props.id } type="text" ref={ textInput } maxLength={ props?.maxlength || 32 } minLength={ props?.minlength || 1 } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern } disabled={ disabled } onInput={ handleInput } />
      { disabled && <input type="hidden" name={ props.name } value={ props?.defaultValue } /> }

			{ showSearchResult() && <RadioControl options={ options } onChange={ handleSelect } />}

      { showSearchButton() && <button className="button-link" disabled={ isSearchButtonDisabled() } onClick={ handleSearch }>Search</button> }
      { showCancelButton() && <button className="button-link" onClick={ handleCancel }>Cancel</button> }
			{ showSpinner() && <Spinner/>  }
		</>
  );
};

export {
  PredictiveSearchInput
};

