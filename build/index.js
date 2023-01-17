/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/billing-address.js":
/*!********************************!*\
  !*** ./src/billing-address.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingAddress": function() { return /* binding */ BillingAddress; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _county_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./county-selector */ "./src/county-selector.js");
/* harmony import */ var _text_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-input */ "./src/text-input.js");



const BillingAddress = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("address", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "address_1"
  }, "Address line 1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_input__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    name: "address_1",
    id: "address_1",
    default: props.order.billing.address_1 || props.userMeta.billing_address_1,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "address_2"
  }, "Address line 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_input__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    name: "address_2",
    id: "address_2",
    default: props.order.billing.address_2 || props.userMeta.billing_address_2,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "city"
  }, "City"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_input__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    name: "city",
    id: "city",
    default: props.order.billing.city || props.userMeta.billing_city,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "postcode"
  }, "Eircode"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_input__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    name: "postcode",
    id: "postcode",
    default: props.order.billing.postcode || props.userMeta.billing_postcode,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "country"
  }, "Country"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "country",
    name: "country",
    required: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "IE",
    selected: "selected"
  }, "Ireland"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "state"
  }, "County"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_county_selector__WEBPACK_IMPORTED_MODULE_1__.CountySelector, {
    id: "state",
    name: "state",
    selected: props.order.billing.state || props.userMeta.billing_state
  })));
};


/***/ }),

/***/ "./src/county-selector.js":
/*!********************************!*\
  !*** ./src/county-selector.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./src/group-selector.js":
/*!*******************************!*\
  !*** ./src/group-selector.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    onChange: handleChange
  }, !groupId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Please select"), groups.map(group => {
    if (groupId == group.group_id) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        selected: true,
        key: group.group_id.toString(),
        value: group.group_id
      }, group.name);
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        key: group.group_id.toString(),
        value: group.group_id
      }, group.name);
    }
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

"use strict";
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

"use strict";
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
/* harmony import */ var _text_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-input */ "./src/text-input.js");
/* harmony import */ var _billing_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./billing-address */ "./src/billing-address.js");









const OrderForm = props => {
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [groupId, setGroupId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [lineItem, setLineItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setGroupId(props.groupId);
  }, [props.groupId]);

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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {}, [props.order.id]);

  /**
   * @todo Fetch user and meta via WP REST API
   * @see https://developer.wordpress.org/rest-api/reference/users/
   * @see https://developer.wordpress.org/rest-api/extending-the-rest-api/modifying-responses/
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {}, [props.user.id]);
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
    try {
      setNotice(null);
      setIsLoading(true);
      setIsDisabled(true);
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
      props.order = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: props.order.date_created ? `/wc/v3/orders/${props.order.id}` : `/wc/v3/orders`,
        method: props.order.date_created ? 'PUT' : 'POST',
        data
      });
      setNotice({
        status: 'success',
        message: 'Order created'
      });
      document.location.assign("/wp-admin/edit.php?post_type=shop_order");
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
  }, "First name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_input__WEBPACK_IMPORTED_MODULE_6__.TextInput, {
    name: "first_name",
    id: "first_name",
    default: props.order.billing.first_name || props.userMeta.first_name,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "last_name"
  }, "Last name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_input__WEBPACK_IMPORTED_MODULE_6__.TextInput, {
    name: "last_name",
    id: "last_name",
    default: props.order.billing.last_name || props.userMeta.last_name,
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "phone"
  }, "Phone"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_input__WEBPACK_IMPORTED_MODULE_6__.TextInput, {
    name: "phone",
    id: "phone",
    default: props.order.billing.phone || props.userMeta.billing_phone,
    required: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Address"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_billing_address__WEBPACK_IMPORTED_MODULE_7__.BillingAddress, {
    order: props.order,
    userMeta: props.userMeta
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Order"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "order_group"
  }, "Order group"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_group_selector__WEBPACK_IMPORTED_MODULE_3__.GroupSelector, {
    groupId: groupId || props.groupId,
    id: "order_group",
    name: "order_group",
    apiPath: props.groupApiPath,
    nonce: props.nonce,
    setGroupId: setGroupId
  })), props.order.status !== 'auto-draft' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "order_status"
  }, "Status"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_status_selector__WEBPACK_IMPORTED_MODULE_5__.StatusSelector, {
    id: "order_status",
    name: "order_status",
    order: props.order,
    status: props.status,
    apiPath: props.orderApiPath,
    nonce: props.nonce
  }))), !!groupId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_panel__WEBPACK_IMPORTED_MODULE_4__.ProductPanel, {
    nonce: props.nonce,
    apiPath: props.productApiPath,
    lineItem: lineItem,
    groupId: groupId
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
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
  }, props.order.status === 'auto-draft' ? 'Create' : 'Update'))));
};


/***/ }),

/***/ "./src/product-panel.js":
/*!******************************!*\
  !*** ./src/product-panel.js ***!
  \******************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /usr/local/src/src/product-panel.js: Unexpected token (84:8)\n\n\u001b[0m \u001b[90m 82 |\u001b[39m         }\u001b[0m\n\u001b[0m \u001b[90m 83 |\u001b[39m         { \u001b[33m!\u001b[39m\u001b[33m!\u001b[39mprice \u001b[33m&&\u001b[39m products\u001b[33m.\u001b[39mlength \u001b[33m>\u001b[39m \u001b[35m0\u001b[39m \u001b[33m&&\u001b[39m spaces \u001b[33m<\u001b[39m \u001b[35m1\u001b[39m \u001b[33m&&\u001b[39m  \u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 84 |\u001b[39m         }\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 85 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 86 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m 87 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (/usr/local/src/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/usr/local/src/node_modules/@babel/parser/lib/index.js:367:12)\n    at JSXParserMixin.raise (/usr/local/src/node_modules/@babel/parser/lib/index.js:3706:19)\n    at JSXParserMixin.unexpected (/usr/local/src/node_modules/@babel/parser/lib/index.js:3744:16)\n    at JSXParserMixin.parseExprAtom (/usr/local/src/node_modules/@babel/parser/lib/index.js:13350:22)\n    at JSXParserMixin.parseExprAtom (/usr/local/src/node_modules/@babel/parser/lib/index.js:8203:20)\n    at JSXParserMixin.parseExprSubscripts (/usr/local/src/node_modules/@babel/parser/lib/index.js:12875:23)\n    at JSXParserMixin.parseUpdate (/usr/local/src/node_modules/@babel/parser/lib/index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (/usr/local/src/node_modules/@babel/parser/lib/index.js:12824:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/usr/local/src/node_modules/@babel/parser/lib/index.js:12615:61)\n    at JSXParserMixin.parseExprOpBaseRightExpr (/usr/local/src/node_modules/@babel/parser/lib/index.js:12737:34)\n    at JSXParserMixin.parseExprOpRightExpr (/usr/local/src/node_modules/@babel/parser/lib/index.js:12730:21)\n    at JSXParserMixin.parseExprOp (/usr/local/src/node_modules/@babel/parser/lib/index.js:12683:27)\n    at JSXParserMixin.parseExprOp (/usr/local/src/node_modules/@babel/parser/lib/index.js:12693:21)\n    at JSXParserMixin.parseExprOp (/usr/local/src/node_modules/@babel/parser/lib/index.js:12693:21)\n    at JSXParserMixin.parseExprOps (/usr/local/src/node_modules/@babel/parser/lib/index.js:12628:17)\n    at JSXParserMixin.parseMaybeConditional (/usr/local/src/node_modules/@babel/parser/lib/index.js:12592:23)\n    at JSXParserMixin.parseMaybeAssign (/usr/local/src/node_modules/@babel/parser/lib/index.js:12544:21)\n    at JSXParserMixin.parseExpressionBase (/usr/local/src/node_modules/@babel/parser/lib/index.js:12480:23)\n    at /usr/local/src/node_modules/@babel/parser/lib/index.js:12474:39\n    at JSXParserMixin.allowInAnd (/usr/local/src/node_modules/@babel/parser/lib/index.js:14576:12)\n    at JSXParserMixin.parseExpression (/usr/local/src/node_modules/@babel/parser/lib/index.js:12474:17)\n    at JSXParserMixin.jsxParseExpressionContainer (/usr/local/src/node_modules/@babel/parser/lib/index.js:8031:31)\n    at JSXParserMixin.jsxParseElementAt (/usr/local/src/node_modules/@babel/parser/lib/index.js:8131:36)\n    at JSXParserMixin.jsxParseElementAt (/usr/local/src/node_modules/@babel/parser/lib/index.js:8115:32)\n    at JSXParserMixin.jsxParseElement (/usr/local/src/node_modules/@babel/parser/lib/index.js:8184:17)\n    at JSXParserMixin.parseExprAtom (/usr/local/src/node_modules/@babel/parser/lib/index.js:8198:19)\n    at JSXParserMixin.parseExprSubscripts (/usr/local/src/node_modules/@babel/parser/lib/index.js:12875:23)\n    at JSXParserMixin.parseUpdate (/usr/local/src/node_modules/@babel/parser/lib/index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (/usr/local/src/node_modules/@babel/parser/lib/index.js:12824:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/usr/local/src/node_modules/@babel/parser/lib/index.js:12615:61)\n    at JSXParserMixin.parseExprOps (/usr/local/src/node_modules/@babel/parser/lib/index.js:12622:23)\n    at JSXParserMixin.parseMaybeConditional (/usr/local/src/node_modules/@babel/parser/lib/index.js:12592:23)\n    at JSXParserMixin.parseMaybeAssign (/usr/local/src/node_modules/@babel/parser/lib/index.js:12544:21)\n    at /usr/local/src/node_modules/@babel/parser/lib/index.js:12502:39\n    at JSXParserMixin.allowInAnd (/usr/local/src/node_modules/@babel/parser/lib/index.js:14576:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/usr/local/src/node_modules/@babel/parser/lib/index.js:12502:17)\n    at JSXParserMixin.parseParenAndDistinguishExpression (/usr/local/src/node_modules/@babel/parser/lib/index.js:13631:28)\n    at JSXParserMixin.parseExprAtom (/usr/local/src/node_modules/@babel/parser/lib/index.js:13203:23)\n    at JSXParserMixin.parseExprAtom (/usr/local/src/node_modules/@babel/parser/lib/index.js:8203:20)\n    at JSXParserMixin.parseExprSubscripts (/usr/local/src/node_modules/@babel/parser/lib/index.js:12875:23)\n    at JSXParserMixin.parseUpdate (/usr/local/src/node_modules/@babel/parser/lib/index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (/usr/local/src/node_modules/@babel/parser/lib/index.js:12824:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/usr/local/src/node_modules/@babel/parser/lib/index.js:12615:61)\n    at JSXParserMixin.parseExprOps (/usr/local/src/node_modules/@babel/parser/lib/index.js:12622:23)\n    at JSXParserMixin.parseMaybeConditional (/usr/local/src/node_modules/@babel/parser/lib/index.js:12592:23)\n    at JSXParserMixin.parseMaybeAssign (/usr/local/src/node_modules/@babel/parser/lib/index.js:12544:21)\n    at JSXParserMixin.parseExpressionBase (/usr/local/src/node_modules/@babel/parser/lib/index.js:12480:23)\n    at /usr/local/src/node_modules/@babel/parser/lib/index.js:12474:39\n    at JSXParserMixin.allowInAnd (/usr/local/src/node_modules/@babel/parser/lib/index.js:14570:16)");

/***/ }),

/***/ "./src/status-selector.js":
/*!********************************!*\
  !*** ./src/status-selector.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  const [statuses, setStatuses] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: props.id,
    name: props.name,
    disabled: isDisabled,
    required: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Please select"), statuses.map(status => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_option_js__WEBPACK_IMPORTED_MODULE_3__.Option, {
    value: status.id,
    selected: props.status
  }, status.name))));
};


/***/ }),

/***/ "./src/text-input.js":
/*!***************************!*\
  !*** ./src/text-input.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextInput": function() { return /* binding */ TextInput; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const TextInput = props => {
  const textInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "text",
    ref: textInput,
    defaultValue: props.default,
    required: props.required,
    pattern: props.pattern,
    disabled: props.disabled
  });
};


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _order_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-form */ "./src/order-form.js");




/**
 * Render components
 */
window.addEventListener('load', function (e) {
  const orderComponent = document.querySelector('#lasntgadmin-orders-component');
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
}, false);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map