
import { CountySelector } from './county-selector';
import { TextInput } from './text-input';

const BillingAddress = props => {

  return (
    <address>
      <div class="form-field">
        <label for="address_1">Address line 1</label>
        <TextInput name="address_1" id="address_1" default={ props.order.billing.address_1 || props.userMeta.billing_address_1 } required /> 
      </div>
      <div class="form-field">
        <label for="address_2">Address line 2</label>
        <TextInput name="address_2" id="address_2" default={ props.order.billing.address_2 || props.userMeta.billing_address_2 } required /> 
      </div>
      <div class="form-field">
        <label for="city">City</label>
        <TextInput name="city" id="city" default={ props.order.billing.city || props.userMeta.billing_city } required /> 
      </div>
      <div class="form-field">
        <label for="postcode">Eircode</label>
        <TextInput name="postcode" id="postcode" default={ props.order.billing.postcode || props.userMeta.billing_postcode } required /> 
      </div>
      <div class="form-field">
        <label for="country">Country</label>
        <select id="country" name="country" required>
          <option value="IE" selected="selected">Ireland</option>		
        </select>
      </div>
      <div class="form-field">
        <label for="state">County</label>
        <CountySelector id="state" name="state" selected={ props.order.billing.state || props.userMeta.billing_state } />
      </div>
    </address>
  );

}

export { BillingAddress };
