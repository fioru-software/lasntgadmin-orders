
import { Spinner } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { debounce } from 'lodash';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { RadioControl } from '@wordpress/components';
import { isNil } from "lodash";

const AttendeeSearch = props => {

	let debouncedHandleInput = debounce( handleInput, 500);

  const textInput = useRef(null);

	const [ searchText, setSearchText ] = useState("");
	const [ attendees, setAttendees ] = useState([]);
	const [ options, setOptions ] = useState([]);

  const [ isDisabled, setIsDisabled ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

	useEffect( () => {
		if(props.defaultValue) {
			textInput.current.value = props.defaultValue;
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

	useEffect( () => {
		if( ! isNil(searchText) ) {
			if(searchText.length > 0) {
				async function runFetch() {
					setIsLoading(true);
					const res = await fetchAttendees( searchText );
					setIsLoading(false);
					if(textInput.current.value) {
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
		setOptions([]);
	}

  return (
		<>
			<p class="description">{ props.helpText }</p>
			<input type="text" ref={ textInput } onChange={ debouncedHandleInput } />
			{ isLoading && options.length === 0 && <Spinner/>  }
			{ ! isLoading && options.length > 0 && <RadioControl options={ options } onChange={ handleSelect } />}
		</>
  );
};

export {
  AttendeeSearch
};

