<?php

namespace Lasntg\Admin\Orders;

use Lasntg\Admin\Attendees\AttendeeUtils;

class AdminTableViewFilters {

	public static function dropdown_attendees( array $args = [] ) {
		$defaults    = array(
			'name'     => 'attendee_id',
			'id'       => 'attendee_id',
			'class'    => 'postform',
			'required' => false,
		);
		$parsed_args = wp_parse_args( $args, $defaults );

		$name     = esc_attr( $parsed_args['name'] );
		$class    = esc_attr( $parsed_args['class'] );
		$id       = $parsed_args['id'] ? esc_attr( $parsed_args['id'] ) : $name;
		$required = $parsed_args['required'] ? 'required' : '';

		$attendees = AttendeeUtils::get_visible_attendees();

		$output  = "<select $required name='$name' id='$id' class='$class'>";
		$output .= sprintf( "<option value='0'>%s</option>", __( 'All attendees', 'lasntgadmin' ) );
		$output .= implode(
			array_map(
				function( $attendee ) {
					$attendee = AttendeeUtils::get_attendee_with_profile( $attendee );
					$option   = "<option value='{$attendee->ID}'";
					$option  .= isset( $_GET['attendee_id'] ) && absint( $_GET['attendee_id'] ) === $attendee->ID ? " selected='selected'" : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
					$option  .= ">{$attendee->acf['employee_number']} ({$attendee->acf['last_name']}, {$attendee->acf['first_name']})</option>";
					return $option;
				},
				$attendees
			)
		);

		$output .= '</select>';
		return $output;
	}

}
