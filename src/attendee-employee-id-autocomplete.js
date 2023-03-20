import { Autocomplete } from '@wordpress/components';

import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';
import { createElement } from '@wordpress/element';

/**
 * Parse a string suggestion, split apart by where the first matching query is.
 * Used to display matched partial in bold.
 *
 * @param {string} suggestion The item's label as returned from the API.
 * @param {string} query      The search term to match in the string.
 * @return {Object} A list in three parts: before, match, and after.
 */
function computeSuggestionMatch( suggestion, query ) {
	if ( ! query ) {
		return null;
	}
	const indexOfMatch = suggestion
		.toLocaleLowerCase()
		.indexOf( query.toLocaleLowerCase() );

	return {
		suggestionBeforeMatch: decodeEntities(
			suggestion.substring( 0, indexOfMatch )
		),
		suggestionMatch: decodeEntities(
			suggestion.substring( indexOfMatch, indexOfMatch + query.length )
		),
		suggestionAfterMatch: decodeEntities(
			suggestion.substring( indexOfMatch + query.length )
		),
	};
}

const AttendeeEmployeeIdAutocomplete = {

	name: 'employee_ids',
	className: 'lasntgadmin-search__employee-ids-result',
	options( acf_field_value ) {
		const query = acf_field_value
			? {
					acf_field_name: 'employee_number',
					acf_field_value
			  }
			: {};
		console.log(addQueryArgs( '/wp/v2/attendee', query ));
		return apiFetch( {
			path: addQueryArgs( '/wp/v2/attendee', query ),
		} );
	},
	isDebounced: true,
	getOptionIdentifier( attendee ) {
		return attendee.id;
	},
	getOptionKeywords( attendee ) {
		return [ attendee.acf.employee_number ];
	},
	getOptionLabel( attendee, query ) {
		const match = computeSuggestionMatch( attendee.acf.employee_number, query ) || {};
		return (
			<span
				key="name"
				className="woocommerce-search__result-name"
				aria-label={ attendee.acf.employee_number }
			>
				{ match.suggestionBeforeMatch }
				<strong className="components-form-token-field__suggestion-match">
					{ match.suggestionMatch }
				</strong>
				{ match.suggestionAfterMatch }
			</span>
		);
	},
	// This is slightly different than gutenberg/Autocomplete, we don't support different methods
	// of replace/insertion, so we can just return the value.
	getOptionCompletion( attendee ) {
		return {
			key: attendee.id,
			label: attendee.acf.employee_number,
		};
	},
};

export { AttendeeEmployeeIdAutocomplete };

