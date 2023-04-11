
import { Spinner } from '@wordpress/components';
import { useState, useEffect, useRef, useCallback } from '@wordpress/element';
import { debounce } from 'lodash';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { RadioControl } from '@wordpress/components';
import { isNil } from "lodash";

const AttendeeSearch = props => {

	const debouncedHandleInput = useCallback( debounce( handleInput, 500) );

  const textInput = useRef(null);

	const [ searchText, setSearchText ] = useState("");
	const [ attendees, setAttendees ] = useState([]);
	const [ options, setOptions ] = useState([]);

  const [ isDisabled, setIsDisabled ] = useState(false);
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
		}
	}, [ props?.defaultValue ]);

	useEffect( () => {
		if( attendees?.length ) {
			setOptions(
				formatAttendeesIntoOptions(
					attendees
				)
			);
		}
	}, [ attendees ]);

	useEffect( () => {
		if( ! isNil(searchText) ) {
			if(searchText.length > 0) {
				async function runFetch() {
					setIsLoading(true);
					const res = await fetchAttendees( searchText );
					setIsLoading(false);
					if(textInput.current.value && textInput.current.matches(':focus')) {
						setAttendees( res );
					}
				}
				runFetch();
			} else {
				debouncedHandleInput.cancel();
				setOptions([]);
				setIsLoading(false);
			}
		}
	}, [ searchText ]);

  function handleBlur(e) {
    setIsLoading(false);
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

  function handleInput( e ) {
		textInput.current.value = e.target.value;
		setSearchText(e.target.value);
  }

	function handleSelect( value ) {
		textInput.current.value = value;
		const attendee = attendees.find( attendee => attendee.id === parseInt(value) );
		props.handleSelect( attendee );
	}

  return (
		<>
			<p class="description">{ props.helpText }</p>
			<input name={ props.name } id={ props.id } type="text" ref={ textInput } maxlength={ props?.maxlength || 32 } minlength={ props?.minlength || 1 } defaultValue={ props?.defaultValue } placeholder={ props?.placeholder } required={ props?.required || false } pattern={ props?.pattern } readonly={ props?.readonly || false } disabled={ props?.disabled || false } onChange={ debouncedHandleInput } onBlur={ handleBlur } onFocus={ props.handleFocus } />
			{ isLoading && options.length === 0 && <Spinner/>  }
			{ ! isLoading && options.length > 0 && <RadioControl options={ options } onChange={ handleSelect } />}
		</>
  );
};

export {
  AttendeeSearch
};

