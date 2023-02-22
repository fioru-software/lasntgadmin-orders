/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/acf-inputs.js":
/*!***************************!*\
  !*** ./src/acf-inputs.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBox": function() { return /* binding */ CheckBox; },
/* harmony export */   "DateInput": function() { return /* binding */ DateInput; },
/* harmony export */   "EmailInput": function() { return /* binding */ EmailInput; },
/* harmony export */   "NumberInput": function() { return /* binding */ NumberInput; },
/* harmony export */   "SelectInput": function() { return /* binding */ SelectInput; },
/* harmony export */   "TelInput": function() { return /* binding */ TelInput; },
/* harmony export */   "TextInput": function() { return /* binding */ TextInput; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const SelectInput = props => {
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValue(props.defaultValue);
  }, [props.defaultValue]);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: props.id,
    name: props.name,
    disabled: (props === null || props === void 0 ? void 0 : props.disabled) || false,
    required: (props === null || props === void 0 ? void 0 : props.required) || false,
    value: value,
    onChange: handleChange
  }, !props.value && !props.defaultValue && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    disabled: true,
    value: ""
  }, "Please select"), props.children);
};
const CheckBox = props => {
  const [checked, setChecked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setChecked(props.defaultValue);
    setValue(props.defaultValue ? "On" : "Off");
  }, [props.defaultValue]);
  function handleClick(e) {
    setChecked(e.target.checked);
    setValue(e.target.checked ? "On" : "Off");
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    id: props.id,
    name: props.name,
    disabled: props.disabled,
    required: props === null || props === void 0 ? void 0 : props.required,
    onClick: handleClick,
    checked: checked,
    value: checked
  });
};
const TextInput = props => {
  const textInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "text",
    ref: textInput,
    maxlength: (props === null || props === void 0 ? void 0 : props.maxlength) || 32,
    minlength: (props === null || props === void 0 ? void 0 : props.minlength) || 1,
    defaultValue: props === null || props === void 0 ? void 0 : props.defaultValue,
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    required: (props === null || props === void 0 ? void 0 : props.required) || false,
    pattern: props === null || props === void 0 ? void 0 : props.pattern,
    readonly: (props === null || props === void 0 ? void 0 : props.readonly) || false,
    disabled: (props === null || props === void 0 ? void 0 : props.disabled) || false
  });
};
const EmailInput = props => {
  const emailInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "email",
    ref: emailInput,
    maxlength: (props === null || props === void 0 ? void 0 : props.maxlength) || 32,
    minlength: (props === null || props === void 0 ? void 0 : props.minlength) || 1,
    defaultValue: props === null || props === void 0 ? void 0 : props.defaultValue,
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    required: (props === null || props === void 0 ? void 0 : props.required) || false,
    pattern: (props === null || props === void 0 ? void 0 : props.pattern) || "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    readonly: (props === null || props === void 0 ? void 0 : props.readonly) || false,
    disabled: (props === null || props === void 0 ? void 0 : props.disabled) || false
  });
};
const DateInput = props => {
  const dateInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "date",
    ref: dateInput,
    defaultValue: props === null || props === void 0 ? void 0 : props.defaultValue,
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    required: (props === null || props === void 0 ? void 0 : props.required) || false,
    pattern: props === null || props === void 0 ? void 0 : props.pattern,
    readonly: (props === null || props === void 0 ? void 0 : props.readonly) || false,
    disabled: (props === null || props === void 0 ? void 0 : props.disabled) || false
  });
};
const NumberInput = props => {
  const numberInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "number",
    ref: numberInput,
    defaultValue: props === null || props === void 0 ? void 0 : props.defaultValue,
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    required: (props === null || props === void 0 ? void 0 : props.required) || false,
    pattern: (props === null || props === void 0 ? void 0 : props.pattern) || "^\d+",
    readonly: (props === null || props === void 0 ? void 0 : props.readonly) || false,
    max: props === null || props === void 0 ? void 0 : props.max,
    min: (props === null || props === void 0 ? void 0 : props.min) || 0,
    step: (props === null || props === void 0 ? void 0 : props.step) || 1,
    disabled: (props === null || props === void 0 ? void 0 : props.disabled) || false,
    onChange: props === null || props === void 0 ? void 0 : props.onChange,
    value: props === null || props === void 0 ? void 0 : props.value
  });
};
const TelInput = props => {
  const telInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "tel",
    ref: telInput,
    maxlength: (props === null || props === void 0 ? void 0 : props.maxlength) || 32,
    minlength: (props === null || props === void 0 ? void 0 : props.minlength) || 1,
    defaultValue: props === null || props === void 0 ? void 0 : props.defaultValue,
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    required: (props === null || props === void 0 ? void 0 : props.required) || false,
    pattern: (props === null || props === void 0 ? void 0 : props.pattern) || "[0-9+\s]+",
    readonly: (props === null || props === void 0 ? void 0 : props.readonly) || false,
    disabled: (props === null || props === void 0 ? void 0 : props.disabled) || false
  });
};


/***/ }),

/***/ "./src/attendee-fields.js":
/*!********************************!*\
  !*** ./src/attendee-fields.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendeeFields": function() { return /* binding */ AttendeeFields; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _acf_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acf-inputs */ "./src/acf-inputs.js");




const AttendeeFields = props => {
  var _props$attendee, _props$attendee2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Attendee ", props.index + 1), (props === null || props === void 0 ? void 0 : (_props$attendee = props.attendee) === null || _props$attendee === void 0 ? void 0 : _props$attendee.ID) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: `attendees[${props.index}]['id']`,
    value: props.attendee.ID
  }), (props === null || props === void 0 ? void 0 : (_props$attendee2 = props.attendee) === null || _props$attendee2 === void 0 ? void 0 : _props$attendee2.post_status) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: `attendees[${props.index}]['status']`,
    value: props.attendee.post_status
  }), props === null || props === void 0 ? void 0 : props.fields.map(field => {
    var _props$attendee3, _props$attendee4, _props$attendee5, _props$attendee6, _props$attendee7, _props$attendee8, _props$attendee9;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "form-field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: field.key
    }, field.label, !!field.required && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "required"
    }, " *")), field.type === 'text' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      placeholder: field.placeholder,
      defaultValue: (props === null || props === void 0 ? void 0 : (_props$attendee3 = props.attendee) === null || _props$attendee3 === void 0 ? void 0 : _props$attendee3.acf[field.name]) || field.default_value,
      maxlength: field.maxlength,
      required: !!field.required
    }), field.type === 'email' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_2__.EmailInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      placeholder: field.placeholder,
      defaultValue: (props === null || props === void 0 ? void 0 : (_props$attendee4 = props.attendee) === null || _props$attendee4 === void 0 ? void 0 : _props$attendee4.acf[field.name]) || field.default_value,
      maxlength: field.maxlength,
      required: !!field.required
    }), field.type === 'textarea' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      id: field.key,
      disabled: props.disabled,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      defaultValue: (props === null || props === void 0 ? void 0 : (_props$attendee5 = props.attendee) === null || _props$attendee5 === void 0 ? void 0 : _props$attendee5.acf[field.name]) || field.default_value,
      required: !!field.required
    }), field.type === 'date_picker' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_2__.DateInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      defaultValue: (props === null || props === void 0 ? void 0 : (_props$attendee6 = props.attendee) === null || _props$attendee6 === void 0 ? void 0 : _props$attendee6.meta[field.name][0]) || field.default_value,
      required: !!field.required
    }), field.type === 'true_false' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_2__.CheckBox, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      required: !!field.required,
      defaultValue: (props === null || props === void 0 ? void 0 : (_props$attendee7 = props.attendee) === null || _props$attendee7 === void 0 ? void 0 : _props$attendee7.acf[field.name]) || field.default_value
    }), field.type === 'number' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      defaultValue: (props === null || props === void 0 ? void 0 : (_props$attendee8 = props.attendee) === null || _props$attendee8 === void 0 ? void 0 : _props$attendee8.acf[field.name]) || field.default_value,
      required: !!field.required
    }), field.type === 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_2__.SelectInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      required: !!field.required,
      defaultValue: (props === null || props === void 0 ? void 0 : (_props$attendee9 = props.attendee) === null || _props$attendee9 === void 0 ? void 0 : _props$attendee9.acf[field.name]) || field.default_value || ""
    }, Object.keys(field.choices).map((key, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        key: key,
        value: field.name === 'local_authority' ? key : field.choices[key]
      }, field.choices[key]);
    })));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null));
};


/***/ }),

/***/ "./src/attendees.js":
/*!**************************!*\
  !*** ./src/attendees.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attendees": function() { return /* binding */ Attendees; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _attendee_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendee-fields */ "./src/attendee-fields.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-utils */ "./src/form-utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);









/**
 * @param { number } quantity
 * @param { array } fields
 * @param { string } groupId
 * @param { string } nonce 
 * @param { object } order
 */
const Attendees = props => {
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [quantity, setQuantity] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [buttonText, setButtonText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("Save");
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((props === null || props === void 0 ? void 0 : props.quantity) > 0) {
      setQuantity(parseInt(props.quantity));
    } else {
      setNotice({
        status: 'warning',
        message: 'Please add a product to your order'
      });
    }
  }, [props.quantity]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [props.fields]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [props.attendees]);

  /**
   * @param { number } index Attendee index for HTML inputs
   * @param { HTMLElement } form
   * @return array
   */
  function extractAttendeeByIndex(index, form) {
    return Array.from(form.querySelectorAll(`[name^="attendees[${index}][acf]"]`)).filter(input => input.value !== "").map(input => {
      return [extractAcfInputs(input.getAttribute('name')), determineAcfValue(input.value)];
    });
  }

  /**
   * Checkboxes require boolean
   */
  function determineAcfValue(value) {
    return value === "true" ? true : value === "false" ? false : value;
  }

  /**
   * @param { string } name ACF input field's name attribute
   */
  function extractAcfInputs(name) {
    const match = name.match(/attendees\[\d\]\[acf\]\[(.+)\]/);
    return match ? match[1] : null;
  }

  /**
   * @param { number } quantity Number of attendees
   * @param { HTMLElement } form
   * @param { number } groupId
   * @param { number } orderId
   * @return object 
   */
  function createBatchRequestBody(quantity, form, groupId, orderId) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.range)(quantity).map(index => {
      return createAttendeesRequestBody(index, form, groupId, orderId);
    });
  }
  function createAttendeesRequestBody(index, form, groupId, orderId) {
    const formData = new FormData(form);
    const attendeeId = formData.has(`attendees[${index}]['id']`) ? parseInt(formData.get(`attendees[${index}]['id']`)) : null;
    return {
      path: attendeeId ? `/wp/v2/attendee/${attendeeId}?order_id=${orderId}` : `/wp/v2/attendee?order_id=${orderId}`,
      method: 'POST',
      body: {
        id: attendeeId,
        status: formData.has(`attendees[${index}]['status']`) ? formData.get(`attendees[${index}]['status']`) : 'publish',
        meta: {
          'groups-read': parseInt(props.groupId),
          'attendee_order_ids': props.order.id
        },
        acf: Object.assign(Object.fromEntries(extractAttendeeByIndex(index, form)))
      }
    };
  }
  function createOrderUpdateRequestBody(orderId, status, attendeeIds) {
    return {
      path: `/wc/v3/orders/${orderId}`,
      method: 'PUT',
      data: {
        status,
        meta_data: [{
          key: 'attendee_ids',
          value: attendeeIds
        }]
      }
    };
  }
  function extractAttendeeIdsFromResponse(attendeeResponses) {
    return attendeeResponses.map(res => res.body.id);
  }

  /**
   * @requires ACF Field group settings for additional groups: when post_type = 'post' and rest_api = true;
   * @see https://make.wordpress.org/core/2020/11/20/rest-api-batch-framework-in-wordpress-5-6/
   */
  async function handleSubmit(e) {
    e.preventDefault();
    const batchReq = createBatchRequestBody(quantity, e.target, parseInt(props.groupId), props.order.id);
    try {
      setNotice(null);
      setIsLoading(true);
      setIsDisabled(true);
      setNotice({
        status: 'info',
        message: 'Updating attendees.'
      });
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
      const attendeesResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: `/batch/v1`,
        method: 'POST',
        data: {
          requests: batchReq
        }
      });
      const attendeeIds = extractAttendeeIdsFromResponse(attendeesResponse.responses);
      setNotice({
        status: 'info',
        message: 'Updating order.'
      });
      const orderRes = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()(createOrderUpdateRequestBody(props.order.id, 'pending', attendeeIds));
      setNotice({
        status: 'success',
        message: 'Updated attendees. Redirecting to payment tab...'
      });
      document.location.assign(`/wp-admin/post.php?post=${props.order.id}&action=edit&tab=payment`);
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setIsDisabled(false);
    }
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    class: "panel-wrap woocommerce",
    onSubmit: handleSubmit
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "order_data",
    class: "panel woocommerce-order-data"
  }, (props === null || props === void 0 ? void 0 : props.quantity) > 0 && (0,lodash__WEBPACK_IMPORTED_MODULE_5__.range)(quantity).map(index => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_attendee_fields__WEBPACK_IMPORTED_MODULE_3__.AttendeeFields, {
      fields: props.fields,
      attendee: props.attendees[index],
      index: index,
      disabled: isDisabled
    });
  }), (props === null || props === void 0 ? void 0 : props.quantity) > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: isDisabled,
    type: "submit",
    class: "button save_order button-primary",
    name: "save",
    value: "Create"
  }, buttonText), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null))))));
};


/***/ }),

/***/ "./src/billing-address.js":
/*!********************************!*\
  !*** ./src/billing-address.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingAddress": function() { return /* binding */ BillingAddress; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _county_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./county-selector */ "./src/county-selector.js");


const BillingAddress = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("address", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "address_1"
  }, "Address line 1", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "address_1",
    id: "address_1",
    defaultValue: props.order.billing.address_1 || props.userMeta.billing_address_1,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "address_2"
  }, "Address line 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "address_2",
    id: "address_2",
    defaultValue: props.order.billing.address_2 || props.userMeta.billing_address_2
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "city"
  }, "City", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "city",
    id: "city",
    defaultValue: props.order.billing.city || props.userMeta.billing_city,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "state"
  }, "County", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_county_selector__WEBPACK_IMPORTED_MODULE_1__.CountySelector, {
    id: "state",
    name: "state",
    selected: props.order.billing.state || props.userMeta.billing_state,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "postcode"
  }, "Eircode", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "postcode",
    id: "postcode",
    defaultValue: props.order.billing.postcode || props.userMeta.billing_postcode,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "country"
  }, "Country", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "country",
    name: "country",
    required: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "IE",
    selected: "selected"
  }, "Ireland"))));
};


/***/ }),

/***/ "./src/county-selector.js":
/*!********************************!*\
  !*** ./src/county-selector.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountySelector": function() { return /* binding */ CountySelector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);





const CountySelector = props => {
  const [counties, setCounties] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCounties([{
      code: "CW",
      name: "Carlow"
    }, {
      code: "CN",
      name: "Cavan"
    }, {
      code: "CE",
      name: "Clare"
    }, {
      code: "CO",
      name: "Cork"
    }, {
      code: "DL",
      name: "Donegal"
    }, {
      code: "D",
      name: "Dublin"
    }, {
      code: "G",
      name: "Galway"
    }, {
      code: "KY",
      name: "Kerry"
    }, {
      code: "KE",
      name: "Kildare"
    }, {
      code: "KK",
      name: "Kilkenny"
    }, {
      code: "LS",
      name: "Laois"
    }, {
      code: "LM",
      name: "Leitrim"
    }, {
      code: "LK",
      name: "Limerick"
    }, {
      code: "LD",
      name: "Longford"
    }, {
      code: "LH",
      name: "Louth"
    }, {
      code: "MO",
      name: "Mayo"
    }, {
      code: "MH",
      name: "Meath"
    }, {
      code: "MN",
      name: "Monaghan"
    }, {
      code: "OY",
      name: "Offaly"
    }, {
      code: "RN",
      name: "Roscommon"
    }, {
      code: "SO",
      name: "Sligo"
    }, {
      code: "TA",
      name: "Tipperary"
    }, {
      code: "WD",
      name: "Waterford"
    }, {
      code: "WH",
      name: "Westmeath"
    }, {
      code: "WX",
      name: "Wexford"
    }, {
      code: "WW",
      name: "Wicklow"
    }]);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: props.id,
    name: props.name,
    required: true
  }, !props.selected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Please select"), counties.map(county => {
    if (props.selected === county.code) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        selected: true,
        key: county.code,
        value: county.code
      }, county.name);
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        key: county.code,
        value: county.code
      }, county.name);
    }
  }));
};


/***/ }),

/***/ "./src/form-utils.js":
/*!***************************!*\
  !*** ./src/form-utils.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeEmptyEntries": function() { return /* binding */ removeEmptyEntries; }
/* harmony export */ });
function removeEmptyEntries(formData) {
  for (const pair of formData.entries()) {
    if (pair[1] === "") {
      formData.delete(pair[0]);
    }
  }
  return formData;
}


/***/ }),

/***/ "./src/group-selector.js":
/*!*******************************!*\
  !*** ./src/group-selector.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSelector": function() { return /* binding */ GroupSelector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);





const GroupSelector = props => {
  const [groupId, setGroupId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [groups, setGroups] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props.groupId) {
      setGroupId(props.groupId);
    }
  }, [props.groupId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    try {
      setIsLoading(true);
      setIsDisabled(true);
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
      const groups = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: `${props.apiPath}`,
        method: 'GET'
      });
      if (!groups.length) {
        setNotice({
          status: 'warning',
          message: 'You are not a member of any groups.'
        });
      }
      setGroups(groups);
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
    }
    setIsLoading(false);

    /**
     * Changing group is not allowed when editing an order
     * as it also impacts which products are available
     * and since the order already contains line items
     * this will cause unecessary complexity
     */
    if (!props.groupId) {
      setIsDisabled(false);
    }
  }, []);
  function handleChange(e) {
    props.setGroupId(e.target.value);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: props.id,
    disabled: isDisabled,
    required: true,
    onChange: handleChange,
    value: groupId
  }, !groupId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Please select"), groups.map(group => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: group.group_id.toString(),
      value: group.group_id
    }, group.name);
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: props.name,
    value: groupId
  }));
};


/***/ }),

/***/ "./src/option.js":
/*!***********************!*\
  !*** ./src/option.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Option": function() { return /* binding */ Option; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Option = props => {
  const [selected, setSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props.selected === props.value) {
      setSelected(true);
    }
  }, [props.selected]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: props.value,
    selected: selected,
    value: props.value
  }, props.children);
};


/***/ }),

/***/ "./src/order-form.js":
/*!***************************!*\
  !*** ./src/order-form.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderForm": function() { return /* binding */ OrderForm; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _group_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-selector */ "./src/group-selector.js");
/* harmony import */ var _product_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-panel */ "./src/product-panel.js");
/* harmony import */ var _status_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-selector */ "./src/status-selector.js");
/* harmony import */ var _billing_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./billing-address */ "./src/billing-address.js");








const OrderForm = props => {
  var _props$order, _props$user;
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [groupId, setGroupId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [lineItem, setLineItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [buttonText, setButtonText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("Create");
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setGroupId(props.groupId);
  }, [props.groupId]);

  /**
   * Set initial button text
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setStatus(props.status);
    if (props.status !== 'auto-draft') {
      setButtonText('Update');
    }
  }, [props.status]);

  /**
   * Change button text
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status === 'waiting-list') {
      setButtonText("Add to waiting list");
    } else {
      if ((props === null || props === void 0 ? void 0 : props.status) === 'auto-draft') {
        setButtonText("Create");
      } else {
        setButtonText("Update");
      }
    }
  }, [status]);

  /**
   * Only a single product line item per order
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLineItem(props.order.line_items[0]);
  }, props.order.line_items);

  /**
   * @todo fetch order via order api instead of injecting as prop
   * @see https://woocommerce.github.io/woocommerce-rest-api-docs/?php#retrieve-an-order
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {}, [props === null || props === void 0 ? void 0 : (_props$order = props.order) === null || _props$order === void 0 ? void 0 : _props$order.id]);

  /**
   * @todo Fetch user and meta via WP REST API
   * @see https://developer.wordpress.org/rest-api/reference/users/
   * @see https://developer.wordpress.org/rest-api/extending-the-rest-api/modifying-responses/
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {}, [props === null || props === void 0 ? void 0 : (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.id]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [props === null || props === void 0 ? void 0 : props.user]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [props === null || props === void 0 ? void 0 : props.userMeta]);
  function parseFormData(formData) {
    const body = {
      billing: {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        address_1: formData.get('address_1'),
        address_2: formData.get('address_2'),
        city: formData.get('city'),
        state: formData.get('state'),
        postcode: formData.get('postcode'),
        country: formData.get('country'),
        email: formData.get('email'),
        phone: formData.get('phone')
      },
      shipping: {},
      currency: formData.get('currency'),
      customer_id: formData.get('customer_id'),
      status: formData.get('order_status'),
      meta_data: [{
        key: 'groups-read',
        value: formData.get('order_group')
      }],
      line_items: [{
        product_id: parseInt(formData.get('product')),
        quantity: parseInt(formData.get('quantity'))
      }]
    };

    /**
     * When editing an existing order
     */
    if (lineItem !== null && lineItem !== void 0 && lineItem.order_id) {
      body.line_items = [{
        ...body.line_items[0],
        ...{
          id: lineItem.id,
          order_id: lineItem.order_id,
          price: parseInt(formData.get('price')),
          subtotal: `${formData.get('subtotal')}`,
          total: `${formData.get('total')}`
        }
      }];
    }
    return body;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = parseFormData(formData);
    const method = props.order.date_created ? 'PUT' : 'POST';
    try {
      setNotice(null);
      setIsLoading(true);
      setIsDisabled(true);
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
      props.order = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: props.order.date_created ? `/wc/v3/orders/${props.order.id}` : `/wc/v3/orders`,
        method,
        data
      });
      setNotice({
        status: 'success',
        message: 'Updated order. Redirecting to attendees tab...'
      });
      document.location.assign(method === 'POST' ? `/wp-admin/post.php?post=${props.order.id}&action=edit&tab=attendees` : '/wp-admin/post.php?post=${ props.order.id }&action=edit&tab=order');
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setIsDisabled(false);
    }
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    class: "panel-wrap woocommerce",
    onSubmit: handleSubmit
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "email",
    value: props.order.billing.email || props.user.data.user_email
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "currency",
    value: props.order.currency || props.currency
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "customer_id",
    value: props.order.customer_id || props.user.ID
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "order_data",
    class: "panel woocommerce-order-data"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Personal"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "first_name"
  }, "First name", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "first_name",
    id: "first_name",
    defaultValue: props.order.billing.first_name || props.userMeta.first_name,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "last_name"
  }, "Last name", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "last_name",
    id: "last_name",
    defaultValue: props.order.billing.last_name || props.userMeta.last_name,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "phone"
  }, "Phone", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "tel",
    name: "phone",
    id: "phone",
    defaultValue: props.order.billing.phone || props.userMeta.billing_phone,
    required: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Address"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_billing_address__WEBPACK_IMPORTED_MODULE_6__.BillingAddress, {
    order: props.order,
    userMeta: props.userMeta
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Order"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "order_status"
  }, "Status", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_status_selector__WEBPACK_IMPORTED_MODULE_5__.StatusSelector, {
    id: "order_status",
    name: "order_status",
    user: props === null || props === void 0 ? void 0 : props.user,
    order: props === null || props === void 0 ? void 0 : props.order,
    status: status,
    setStatus: setStatus,
    apiPath: props.orderApiPath,
    nonce: props.nonce
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "order_group"
  }, "Order group", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_group_selector__WEBPACK_IMPORTED_MODULE_3__.GroupSelector, {
    groupId: groupId || props.groupId,
    id: "order_group",
    name: "order_group",
    apiPath: props.groupApiPath,
    nonce: props.nonce,
    setGroupId: setGroupId
  }))), !!groupId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_panel__WEBPACK_IMPORTED_MODULE_4__.ProductPanel, {
    nonce: props.nonce,
    apiPath: props.productApiPath,
    lineItem: lineItem,
    order: props.order,
    groupId: groupId,
    setStatus: setStatus
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: isDisabled,
    type: "submit",
    class: "button save_order button-primary",
    name: "save",
    value: "Create"
  }, buttonText), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)))));
};


/***/ }),

/***/ "./src/payment.js":
/*!************************!*\
  !*** ./src/payment.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": function() { return /* binding */ Payment; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);






/**
 * @param { string } nonce 
 * @param { object } order
 * @param { string } groupId
 */
const Payment = props => {
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [buttonText, setButtonText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("Save");
  const [paymentGateways, setPaymentGateways] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    await fetchPaymentGateways();
  }, []);
  async function fetchPaymentGateways() {
    try {
      setNotice({
        status: 'info',
        message: 'Fetching payment gateways...'
      });
      setIsLoading(true);
      setIsDisabled(true);
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
      const paymentGateways = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: '/wc/v3/payment_gateways',
        method: 'GET'
      });
      setPaymentGateways(paymentGateways);
      setNotice({
        status: 'success',
        message: 'Fetched payment gateways.'
      });
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setIsDisabled(false);
    }
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "I am the payment gateway keeper"));
};


/***/ }),

/***/ "./src/product-panel.js":
/*!******************************!*\
  !*** ./src/product-panel.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPanel": function() { return /* binding */ ProductPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-selector */ "./src/product-selector.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);





const ProductPanel = props => {
  var _props$lineItem2, _props$lineItem3, _props$lineItem4, _props$lineItem5;
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [price, setPrice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [quantity, setQuantity] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [total, setTotal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [products, setProducts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [spaces, setSpaces] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [stock, setStock] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [productId, setProductId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setNotice(null);
    setPrice(null);
  }, [props === null || props === void 0 ? void 0 : props.groupId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _props$lineItem;
    if (props !== null && props !== void 0 && (_props$lineItem = props.lineItem) !== null && _props$lineItem !== void 0 && _props$lineItem.id) {
      setProductId(props.lineItem.id);
    }
  }, [props === null || props === void 0 ? void 0 : (_props$lineItem2 = props.lineItem) === null || _props$lineItem2 === void 0 ? void 0 : _props$lineItem2.id]);
  function handleFetchedProducts(products) {
    setProducts(products);

    /**
     * When editing an existing order
     */
    if (props !== null && props !== void 0 && props.lineItem) {
      const product = products.find(product => props.lineItem.product_id === product.id);
      const price = parseInt(product.price);
      setPrice(price);
      setQuantity(props.lineItem.quantity);
      setTotal(price * props.lineItem.quantity);
      setProductId(props.lineItem.id);
    }
  }
  function handleProductChange(e) {
    const option = e.target.querySelector(`option[value="${e.target.value}"]`);
    const stock = parseInt(option.dataset.stock);
    const price = parseInt(option.dataset.price);
    const spaces = parseInt(option.dataset.spaces);
    setPrice(price);
    setSpaces(spaces);
    setStock(stock);
    setQuantity(0);
    setTotal(0);
    setProductId(option.value);
    if (spaces < 1 && stock > 0) {
      props.setStatus("waiting-list");
    } else {
      props.setStatus(props.order.status);
    }
    if (!stock) {
      setNotice({
        status: "error",
        message: "Out of stock"
      });
    } else {
      setNotice({
        status: parseInt(option.dataset.spaces) > 0 ? "info" : "warning",
        message: `${option.dataset.spaces} spaces available.`
      });
    }
  }
  function handleQuantityChange(e) {
    const quantity = parseInt(e.target.value);
    setQuantity(quantity);
    setTotal(quantity * price);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Product"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "product"
  }, "Product", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_selector__WEBPACK_IMPORTED_MODULE_2__.ProductSelector, {
    id: "product",
    name: "product",
    disabled: !!(props !== null && props !== void 0 && (_props$lineItem3 = props.lineItem) !== null && _props$lineItem3 !== void 0 && _props$lineItem3.id),
    groupId: props.groupId,
    productId: productId,
    apiPath: props.apiPath,
    nonce: props.nonce,
    setNotice: setNotice,
    onChange: handleProductChange,
    setProducts: handleFetchedProducts,
    products: products
  })), (props === null || props === void 0 ? void 0 : (_props$lineItem4 = props.lineItem) === null || _props$lineItem4 === void 0 ? void 0 : _props$lineItem4.id) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "line_item_id",
    value: props.lineItem.id
  }), !!price && products.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "price"
  }, "Price"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "price",
    disabled: true,
    placeholder: "0",
    value: price
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "price",
    value: price
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "quantity"
  }, "Quantity", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "quantity",
    disabled: !!(props !== null && props !== void 0 && (_props$lineItem5 = props.lineItem) !== null && _props$lineItem5 !== void 0 && _props$lineItem5.id),
    step: "1",
    min: "1",
    max: spaces > 0 ? spaces : stock,
    autocomplete: "off",
    placeholder: "0",
    onChange: handleQuantityChange,
    value: quantity,
    required: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "quantity",
    value: quantity
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "total"
  }, "Total"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "total",
    type: "number",
    disabled: true,
    placeholder: "0",
    value: total
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "total",
    value: total
  })))));
};


/***/ }),

/***/ "./src/product-selector.js":
/*!*********************************!*\
  !*** ./src/product-selector.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSelector": function() { return /* binding */ ProductSelector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-utils */ "./src/product-utils.js");







/**
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
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsDisabled(props.disabled);
  }, [props.disabled]);
  function setDisabled(disabled) {
    if (!props.disabled) {
      setIsDisabled(disabled);
    }
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    try {
      setIsLoading(true);
      setDisabled(true);
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
      const result = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: `${props.apiPath}/${props.groupId}`,
        method: 'GET'
      });
      if (!result.length) {
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
    setDisabled(false);
  }, [props.groupId]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: props.id,
    disabled: isDisabled,
    required: true,
    onChange: props.onChange,
    value: props === null || props === void 0 ? void 0 : props.productId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Please select"), props.products.map(product => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: product.id.toString(),
      "data-stock": product.stock_quantity,
      "data-spaces": (0,_product_utils__WEBPACK_IMPORTED_MODULE_3__.calculateAvailableSpaces)(product.stock_quantity, (0,_product_utils__WEBPACK_IMPORTED_MODULE_3__.findGroupQuota)(props.groupId, (0,_product_utils__WEBPACK_IMPORTED_MODULE_3__.findGroupQuotas)(product.meta_data))),
      "data-price": product.price,
      value: product.id
    }, product.name);
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: props.name,
    value: props === null || props === void 0 ? void 0 : props.productId
  }));
};


/***/ }),

/***/ "./src/product-utils.js":
/*!******************************!*\
  !*** ./src/product-utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateAvailableSpaces": function() { return /* binding */ calculateAvailableSpaces; },
/* harmony export */   "findGroupQuota": function() { return /* binding */ findGroupQuota; },
/* harmony export */   "findGroupQuotas": function() { return /* binding */ findGroupQuotas; }
/* harmony export */ });
function findGroupQuotas(metaData) {
  return metaData.filter(item => {
    return /_quotas_field_[\d]+/.test(item.key);
  });
}
function findGroupQuota(groupId, quotas) {
  const group = quotas.find(quota => {
    return quota.key === `_quotas_field_${groupId}`;
  });
  return group === undefined ? 0 : group.value;
}
function calculateAvailableSpaces(stockQuantity, groupQuota) {
  stockQuantity = parseInt(stockQuantity);
  groupQuota = parseInt(groupQuota);
  if (isNaN(stockQuantity)) {
    return 0;
  }
  if (isNaN(groupQuota)) {
    return stockQuantity;
  }
  if (groupQuota === 0) {
    return groupQuota;
  }
  if (groupQuota > stockQuantity) {
    return stockQuantity;
  }
  if (groupQuota <= stockQuantity) {
    return groupQuota;
  }
  return groupQuota;
}


/***/ }),

/***/ "./src/status-selector.js":
/*!********************************!*\
  !*** ./src/status-selector.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusSelector": function() { return /* binding */ StatusSelector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _option_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option.js */ "./src/option.js");






const StatusSelector = props => {
  var _props$order2;
  const [statuses, setStatuses] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  /**
   * Default order status
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _props$order, _props$user, _props$user$allcaps;
    if ((props === null || props === void 0 ? void 0 : (_props$order = props.order) === null || _props$order === void 0 ? void 0 : _props$order.status) !== 'auto-draft' && props !== null && props !== void 0 && (_props$user = props.user) !== null && _props$user !== void 0 && (_props$user$allcaps = _props$user.allcaps) !== null && _props$user$allcaps !== void 0 && _props$user$allcaps.view_others_shop_orders) {
      setIsDisabled(false);
    }
  }, [props === null || props === void 0 ? void 0 : (_props$order2 = props.order) === null || _props$order2 === void 0 ? void 0 : _props$order2.status]);

  /**
   * User changed the order status
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [props.status]);

  /**
   * Fetch list of statuses
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    try {
      setIsLoading(true);
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
      const statuses = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: `${props.apiPath}/statuses`,
        method: 'GET'
      });
      if (!statuses.length) {
        setNotice({
          status: 'warning',
          message: 'Failed fetching order statuses.'
        });
      }
      setStatuses(statuses);
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
    }
    setIsLoading(false);
  }, []);
  function handleChange(e) {
    props.setStatus(e.target.value);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: props.id,
    disabled: isDisabled,
    required: true,
    value: props.status,
    onChange: handleChange
  }, props.status === 'auto-draft' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    value: "auto-draft"
  }, "Draft"), props.status !== 'auto-draft' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Please select"), statuses.map(status => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_option_js__WEBPACK_IMPORTED_MODULE_3__.Option, {
    value: status.id
  }, status.name))), props.status !== 'auto-draft' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: props.name,
    value: props === null || props === void 0 ? void 0 : props.status
  }));
};


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _order_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-form */ "./src/order-form.js");
/* harmony import */ var _attendees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendees */ "./src/attendees.js");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment */ "./src/payment.js");






/**
 * Render components
 */
window.addEventListener('load', function (e) {
  const orderComponent = document.querySelector('#lasntgadmin-orders-form');
  if (orderComponent) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_form__WEBPACK_IMPORTED_MODULE_1__.OrderForm, {
      groupApiPath: orderComponent.dataset.groupApiPath,
      orderApiPath: orderComponent.dataset.orderApiPath,
      productApiPath: orderComponent.dataset.productApiPath,
      nonce: orderComponent.dataset.nonce,
      title: orderComponent.dataset.title,
      status: orderComponent.dataset.status,
      order: JSON.parse(orderComponent.dataset.order),
      orderId: orderComponent.dataset.orderId,
      groupId: JSON.parse(orderComponent.dataset.groupId),
      userId: orderComponent.dataset.userId,
      user: JSON.parse(orderComponent.dataset.user),
      userMeta: JSON.parse(orderComponent.dataset.userMeta)
    }), orderComponent);
  }
  const attendeesComponent = document.querySelector('#lasntgadmin-orders-attendees');
  if (attendeesComponent) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_attendees__WEBPACK_IMPORTED_MODULE_2__.Attendees, {
      quantity: attendeesComponent.dataset.quantity,
      nonce: attendeesComponent.dataset.nonce,
      fields: JSON.parse(attendeesComponent.dataset.fields),
      order: JSON.parse(attendeesComponent.dataset.order),
      groupId: JSON.parse(attendeesComponent.dataset.groupId),
      attendees: JSON.parse(attendeesComponent.dataset.attendees)
    }), attendeesComponent);
  }
  const paymentComponent = document.querySelector('#lasntgadmin-orders-payments');
  if (paymentComponent) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_payment__WEBPACK_IMPORTED_MODULE_3__.Payment, {
      nonce: paymentComponent.dataset.nonce,
      order: JSON.parse(paymentComponent.dataset.order),
      groupId: JSON.parse(paymentComponent.dataset.groupId)
    }), paymentComponent);
  }
}, false);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map