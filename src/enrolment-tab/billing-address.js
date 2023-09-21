
import { CountySelector } from './county-selector';

const BillingAddress = props => {

  return (
    <address>
      <div className="form-field">
        <label htmlFor="address_1">Address line 1<span className="required"> *</span></label>
        <input type="text" name="address_1" id="address_1" defaultValue={ props.order.billing.address_1 || props.userMeta.billing_address_1 } required /> 
      </div>
      <div className="form-field">
        <label htmlFor="address_2">Address line 2</label>
        <input type="text" name="address_2" id="address_2" defaultValue={ props.order.billing.address_2 || props.userMeta.billing_address_2 } /> 
      </div>
      <div className="form-field">
        <label htmlFor="city">City<span className="required"> *</span></label>
        <input type="text" name="city" id="city" defaultValue={ props.order.billing.city || props.userMeta.billing_city } required /> 
      </div>
      <div className="form-field">
        <label htmlFor="state">County<span className="required"> *</span></label>
        <CountySelector id="state" name="state" selected={ props.order.billing.state || props.userMeta.billing_state } required />
      </div>
      <div className="form-field">
        <label htmlFor="postcode">Eircode<span className="required"> *</span></label>
        <input type="text" name="postcode" id="postcode" defaultValue={ props.order.billing.postcode || props.userMeta.billing_postcode } required /> 
      </div>
      <div className="form-field">
        <label htmlFor="country">Country<span className="required"> *</span></label>
        <select id="country" name="country" required>
          <option value="IE" selected="selected">Ireland</option>		
        </select>
      </div>
    </address>
  );

}

export { BillingAddress };
