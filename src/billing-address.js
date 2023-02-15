
import { CountySelector } from './county-selector';

const BillingAddress = props => {

  return (
    <address>
      <div class="form-field">
        <label for="address_1">Address line 1<span class="required"> *</span></label>
        <input type="text" name="address_1" id="address_1" defaultValue={ props.order.billing.address_1 || props.userMeta.billing_address_1 } required /> 
      </div>
      <div class="form-field">
        <label for="address_2">Address line 2</label>
        <input type="text" name="address_2" id="address_2" defaultValue={ props.order.billing.address_2 || props.userMeta.billing_address_2 } /> 
      </div>
      <div class="form-field">
        <label for="city">City<span class="required"> *</span></label>
        <input type="text" name="city" id="city" defaultValue={ props.order.billing.city || props.userMeta.billing_city } required /> 
      </div>
      <div class="form-field">
        <label for="state">County<span class="required"> *</span></label>
        <CountySelector id="state" name="state" selected={ props.order.billing.state || props.userMeta.billing_state } required />
      </div>
      <div class="form-field">
        <label for="postcode">Eircode<span class="required"> *</span></label>
        <input type="text" name="postcode" id="postcode" defaultValue={ props.order.billing.postcode || props.userMeta.billing_postcode } required /> 
      </div>
      <div class="form-field">
        <label for="country">Country<span class="required"> *</span></label>
        <select id="country" name="country" required>
          <option value="IE" selected="selected">Ireland</option>		
        </select>
      </div>
    </address>
  );

}

export { BillingAddress };
