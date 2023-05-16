<<<<<<< HEAD
<<<<<<< HEAD
!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,n=window.wp.components,r=window.wp.apiFetch,s=e.n(r),a=window.lodash;const i=e=>{const[r,i]=(0,t.useState)(!0),[o,u]=(0,t.useState)(null),[l,c]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{(0,a.isNil)(e.disabled)||c(e.disabled)}),[e?.disabled]),(0,t.useEffect)((()=>{(0,a.isNil)(e?.productId)||u(e.productId)}),[e?.productId]),(0,t.useEffect)((()=>{!async function(){try{i(!0),u(null),s().use(s().createNonceMiddleware(e.nonce));const t=await s()({path:`${e.apiPath}`,method:"GET"});t.length||e.setNotice({status:"error",message:"No courses are available."}),e.onFetch(t)}catch(t){e.setNotice({status:"error",message:t.message}),console.error(t)}i(!1)}()}),[]),(0,t.createElement)(t.Fragment,null,r&&(0,t.createElement)(n.Spinner,null),!r&&(0,t.createElement)("select",{id:e.id,disabled:(0,a.isBoolean)(e.disabled)?e.disabled:l,required:!0,onChange:e.onChange,value:o,defaultValue:o},(0,t.createElement)("option",{selected:!0,disabled:!0,value:""},"Please select"),e.products.map((e=>(0,t.createElement)("option",{key:e.id.toString(),value:e.id},e.name)))),(0,t.createElement)("input",{type:"hidden",name:e.name,value:e?.productId}))},o=e=>{const[r,i]=(0,t.useState)(null),[o,u]=(0,t.useState)([]),[l,c]=(0,t.useState)(null),[d,m]=(0,t.useState)(!0),[h,f]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{(0,a.isNil)(e.disabled)||f(e.disabled)}),[e?.disabled]),(0,t.useEffect)((()=>{(0,a.isUndefined)(e.groupId)||i(e.groupId)}),[e?.groupId]),(0,t.useEffect)((()=>{if(!(0,a.isNil)(e.productId)){async function t(){try{m(!0),s().use(s().createNonceMiddleware(e.nonce));const t=await s()({path:`${e.apiPath}/${e.productId}`,method:"GET"});t.length||c({status:"warning",message:"You are not a member of any groups."}),u(t),e.onFetch(t)}catch(e){c({status:"error",message:e.message}),console.error(e)}m(!1)}t()}}),[e?.productId]),(0,t.createElement)(t.Fragment,null,l&&(0,t.createElement)(n.Notice,{status:l.status,isDismissable:!0,onDismiss:()=>c(null)},l.message),d&&(0,t.createElement)(n.Spinner,null),!d&&(0,t.createElement)("select",{id:e.id,disabled:e.disabled,required:!0,onChange:e.onChange,value:r,defaultValue:r},!r&&(0,t.createElement)("option",{selected:!0,disabled:!0,value:""},"Please select"),o.map((e=>(0,t.createElement)("option",{key:e.group_id.toString(),value:e.group_id},e.name)))),(0,t.createElement)("input",{type:"hidden",name:e.name,value:r}))};function u(e,t){return t.find((t=>t.key===e))}function l(e,t){return t.line_items.find((t=>t.product_id===e))}function c(e){return e.line_items.find((e=>(0,a.isNumber)(e?.product_id)))}function d(e){return m(e.status)}function m(e){return"waiting-list"===e}function h(e){return"auto-draft"===e}const f=e=>{const[r,s]=(0,t.useState)(null),[d,m]=(0,t.useState)(null),[h,f]=(0,t.useState)(null),[p,y]=(0,t.useState)(null),[g,w]=(0,t.useState)([]),[v,b]=(0,t.useState)(null),[S,E]=(0,t.useState)(null),[T,N]=(0,t.useState)(null),[O,k]=(0,t.useState)(null),[x,M]=(0,t.useState)(null),[I,D]=(0,t.useState)(!0);function V(e){(0,a.isNil)(e)||k(e)}return(0,t.useEffect)((()=>{if(!(0,a.isNil)(T)&&g?.length>0){const e=function(e,t){return t.find((t=>t.id===parseInt(e)))}(T,g);y(null),f(null),s(null),m(null),E(null),k(null),M(e)}}),[T]),(0,t.useEffect)((()=>{if(!(0,a.isNull)(O)&&!(0,a.isNull)(x)){const e=function(e,t){const n=t.find((t=>t.key===`_quotas_field_${e}`));return void 0===n?"":n.value}(O,x.meta_data.filter((e=>/_quotas_field_[\d]+/.test(e.key)))),t=function(e,t){return e=parseInt(e),t=parseInt(t),isNaN(e)?0:isNaN(t)?e:0===t?t:t>e?e:t}(x.stock_quantity||x.quantity,e);b(t)}}),[O]),(0,t.useEffect)((()=>{if(!(0,a.isNil)(v)){const t=parseInt(x.stock_quantity),n=parseInt(x.price);m(n),E(t),v<1&&t>0?e.setStatus("waiting-list"):e.setStatus(e.order.status),c(e.order)||s(t?{status:parseInt(v)>0?"info":"warning",message:`${v} spaces available.`}:{status:"error",message:"Out of stock"})}}),[v]),(0,t.useEffect)((()=>{if((0,a.isObject)(x)&&c(e.order)){const t=l(x.id,e.order);f(t.quantity),y(x.price*t.quantity)}}),[x]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{class:"form-wrap"},(0,t.createElement)("h3",null,"Course"),r&&(0,t.createElement)(n.Notice,{status:r.status,isDismissable:!0,onDismiss:()=>s(null)},r.message),(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"product"},"Course",(0,t.createElement)("span",{class:"required"}," *")),(0,t.createElement)(i,{id:"product",name:"product",disabled:I,groupId:O,productId:T,apiPath:e.productApiPath,nonce:e.nonce,setNotice:s,onChange:function(e){N(e.target.value)},onFetch:function(t){w(t),function(e){(e=parseInt(e))&&N(e)}(e.productId);const n=u("groups-read",e.order.meta_data);V(n?.value),c(e.order)||(D(!1),e.setSubmitButtonDisabled(!1))},products:g})))),e?.lineItem?.id&&(0,t.createElement)("input",{type:"hidden",name:"line_item_id",value:e.lineItem.id}),x&&(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"order_group"},"Group",(0,t.createElement)("span",{class:"required"}," *")),(0,t.createElement)(o,{productId:T,disabled:I,groupId:O,id:"order_group",name:"order_group",apiPath:e.groupApiPath,nonce:e.nonce,onChange:function(e){k(e.target.value)},onFetch:function(t){const n=u("groups-read",e.order.meta_data);V(n?.value),e?.user?.allcaps?.view_others_shop_orders&&e.setSubmitButtonDisabled(!1)}})))),!!d&&T>0&&O&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"price"},"Price"),(0,t.createElement)("input",{type:"number",id:"price",disabled:!0,placeholder:"0",value:d}),(0,t.createElement)("input",{type:"hidden",name:"price",value:d})))),(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"quantity"},"Quantity",(0,t.createElement)("span",{class:"required"}," *")),(0,t.createElement)("input",{type:"number",id:"quantity",disabled:I,step:"1",min:"1",max:v>0?v:S,autocomplete:"off",placeholder:"0",onChange:function(e){const t=parseInt(e.target.value);f(t),y(t*d)},value:h,required:!0}),(0,t.createElement)("input",{type:"hidden",name:"quantity",value:h})))),(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"total"},"Total"),(0,t.createElement)("input",{type:"number",id:"total",type:"number",disabled:!0,placeholder:"0",value:p}),(0,t.createElement)("input",{type:"hidden",name:"total",value:p})))))))},p=e=>{const[n,r]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{e.selected===e.value&&r(!0)}),[e.selected]),(0,t.createElement)("option",{key:e.value,selected:n,value:e.value},e.children)},y=e=>{const[r,a]=(0,t.useState)([]),[i,o]=(0,t.useState)(null),[u,l]=(0,t.useState)(!0),[c,d]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{e?.user?.allcaps?.view_others_shop_orders&&d(e.disabled)}),[e?.disabled]),(0,t.useEffect)((()=>{}),[e.status]),(0,t.useEffect)((()=>{!async function(){try{l(!0),s().use(s().createNonceMiddleware(e.nonce));const t=await s()({path:`${e.apiPath}/statuses`,method:"GET"});t.length||o({status:"warning",message:"Failed fetching order statuses."}),a(t)}catch(e){o({status:"error",message:e.message}),console.error(e)}l(!1)}()}),[]),(0,t.createElement)(t.Fragment,null,i&&(0,t.createElement)(n.Notice,{status:i.status,isDismissable:!0,onDismiss:()=>o(null)},i.message),u&&(0,t.createElement)(n.Spinner,null),!u&&(0,t.createElement)("select",{id:e.id,disabled:e.disabled,required:!0,value:e.status,onChange:function(t){e.setStatus(t.target.value)}},h(e.status)&&(0,t.createElement)("option",{selected:!0,value:"auto-draft"},"Draft"),!h(e.status)&&(0,t.createElement)("option",{selected:!0,disabled:!0,value:""},"Please select"),r.map((e=>(0,t.createElement)(p,{value:e.id},e.name)))),!h(e.status)&&(0,t.createElement)("input",{type:"hidden",name:e.name,value:e?.status}))},g=e=>{const[r,i]=(0,t.useState)(null),[o,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(!0),[g,w]=(0,t.useState)(""),[v,b]=(0,t.useState)("Create enrollment"),S=e.order.status;return(0,t.useEffect)((()=>{}),[e?.order]),(0,t.useEffect)((()=>{(0,a.isNil)(e?.status)||(w(e.status),h(e.status)||b("Update enrollment"))}),[e?.status]),(0,t.useEffect)((()=>{m(g)?b("Add enrollment to waiting list"):h(e?.status)?b("Create enrollment"):b("Update enrollment")}),[g]),(0,t.createElement)("form",{class:"panel-wrap woocommerce",onSubmit:async function(t){t.preventDefault();const n=function(t){const n={billing:{},shipping:{},currency:t.get("currency"),customer_id:t.get("customer_id"),status:h(g)?"attendees":g,meta_data:[{key:"groups-read",value:t.get("order_group")}],line_items:[{product_id:parseInt(t.get("product")),quantity:parseInt(t.get("quantity"))}]};if(c(e?.order)){const r=l(n.line_items[0].product_id,e.order);n.line_items=[{...n.line_items[0],id:r.id,order_id:r.order_id,price:parseInt(t.get("price")),subtotal:`${t.get("subtotal")}`,total:`${t.get("total")}`}]}return n}(new FormData(t.target)),r=c(e.order)?"PUT":"POST";try{switch(i(null),u(!0),p(!0),s().use(s().createNonceMiddleware(e.nonce)),e.order=await s()({path:c(e.order)?`/wc/v3/orders/${e.order.id}`:"/wc/v3/orders",method:r,data:n}),i({status:"success",message:"Updated enrollment. Redirecting to attendees tab..."}),m(S)&&function(e){return"pending"===e}(g)?(i({status:"success",message:"Updated enrollment. Client will be notified."}),u(!1)):i({status:"success",message:"Updated enrollment. Redirecting..."}),e.order.status){case"waiting-list":case"attendees":document.location.assign(`/wp-admin/post.php?post=${e.order.id}&action=edit&tab=attendees`);break;case"pending":document.location.assign(`/wp-admin/post.php?post=${e.order.id}&action=edit&tab=payment`);break;default:document.location.reload()}}catch(t){i({status:"error",message:t.message}),console.error(t),u(!1),p(!1)}}},(0,t.createElement)("input",{type:"hidden",name:"email",value:e.order.billing.email||e.user.data.user_email}),(0,t.createElement)("input",{type:"hidden",name:"currency",value:e.order.currency||e.currency}),(0,t.createElement)("input",{type:"hidden",name:"customer_id",value:e.order.customer_id||e.user.ID}),(0,t.createElement)("div",{id:"order_data",class:"panel woocommerce-order-data"},(0,t.createElement)("div",{class:"form-wrap"},(0,t.createElement)("h3",null,"Order"),!h(e.status)&&(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"order_status"},"Status",(0,t.createElement)("span",{class:"required"}," *")),(0,t.createElement)(y,{id:"order_status",disabled:d,name:"order_status",user:e?.user,order:e?.order,status:g,setStatus:w,apiPath:e.orderApiPath,nonce:e.nonce})))),(0,t.createElement)(f,{productId:e?.order?.line_items[0]?.product_id||e.productId,nonce:e.nonce,setSubmitButtonDisabled:p,groupApiPath:e.groupApiPath,productApiPath:e.productApiPath,order:e.order,setStatus:w,user:e?.user})),(0,t.createElement)("div",{class:"form-wrap"},(0,t.createElement)("div",{class:"form-field"},r&&(0,t.createElement)(n.Notice,{status:r.status,isDismissable:!0,onDismiss:()=>i(null)},r.message),(0,t.createElement)("button",{disabled:d,type:"submit",class:"button save_order wp-element-button button-primary",name:"save",value:"Create"},v),o&&(0,t.createElement)(n.Spinner,null)))))};var w=window.wp.url;const v=e=>{const r=(0,t.useCallback)((0,a.debounce)((function(e){i.current.value=e.target.value,u(e.target.value)}),500)),i=(0,t.useRef)(null),[o,u]=(0,t.useState)(""),[l,c]=(0,t.useState)([]),[d,m]=(0,t.useState)([]),[h,f]=(0,t.useState)(!1),[p,y]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{(0,a.isNil)(e?.options)||(y(!1),m(e.options))}),[e?.options]),(0,t.useEffect)((()=>{(0,a.isNil)(e?.defaultValue)||(i.current.value=e.defaultValue)}),[e?.defaultValue]),(0,t.useEffect)((()=>{l?.length&&m(function(t){return t.map((t=>{const n={label:t.acf[e.acfFieldName],value:t.id};return e?.acfClarifyingFieldName&&(n.label+=`, ${t.acf[e.acfClarifyingFieldName]}`),n}))}(l))}),[l]),(0,t.useEffect)((()=>{if(!(0,a.isNil)(o))if(o.length>0){async function t(){y(!0);const t=await async function(t){const n=new URLSearchParams(window.location.search),r=t?{order_id:n.get("post"),acf_field_name:e.acfFieldName,acf_field_value:t}:{};return s().use(s().createNonceMiddleware(e.nonce)),await s()({path:(0,w.addQueryArgs)("/wp/v2/attendee",r)})}(o);y(!1),i.current.value&&i.current.matches(":focus")&&c(t)}t()}else r.cancel(),m([]),y(!1)}),[o]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("p",{class:"description"},e.helpText),(0,t.createElement)("input",{name:e.name,id:e.id,type:"text",ref:i,maxlength:e?.maxlength||32,minlength:e?.minlength||1,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern,readonly:e?.readonly||!1,disabled:e?.disabled||!1,onChange:r,onBlur:function(e){y(!1)},onFocus:e.handleFocus}),p&&0===d.length&&(0,t.createElement)(n.Spinner,null),!p&&d.length>0&&(0,t.createElement)(n.RadioControl,{options:d,onChange:function(t){i.current.value=t;const n=l.find((e=>e.id===parseInt(t)));e.handleSelect(n)}}))};class b extends Error{}class S extends b{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class E extends b{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class T extends b{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class N extends b{}class O extends b{constructor(e){super(`Invalid unit ${e}`)}}class k extends b{}class x extends b{constructor(){super("Zone is an abstract class")}}const M="numeric",I="short",D="long",V={year:M,month:M,day:M},$={year:M,month:I,day:M},_={year:M,month:I,day:M,weekday:I},F={year:M,month:D,day:M},C={year:M,month:D,day:M,weekday:D},q={hour:M,minute:M},Z={hour:M,minute:M,second:M},L={hour:M,minute:M,second:M,timeZoneName:I},A={hour:M,minute:M,second:M,timeZoneName:D},z={hour:M,minute:M,hourCycle:"h23"},j={hour:M,minute:M,second:M,hourCycle:"h23"},P={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:I},U={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:D},R={year:M,month:M,day:M,hour:M,minute:M},J={year:M,month:M,day:M,hour:M,minute:M,second:M},H={year:M,month:I,day:M,hour:M,minute:M},W={year:M,month:I,day:M,hour:M,minute:M,second:M},Y={year:M,month:I,day:M,weekday:I,hour:M,minute:M},G={year:M,month:D,day:M,hour:M,minute:M,timeZoneName:I},B={year:M,month:D,day:M,hour:M,minute:M,second:M,timeZoneName:I},Q={year:M,month:D,day:M,weekday:D,hour:M,minute:M,timeZoneName:D},K={year:M,month:D,day:M,weekday:D,hour:M,minute:M,second:M,timeZoneName:D};class X{get type(){throw new x}get name(){throw new x}get ianaName(){return this.name}get isUniversal(){throw new x}offsetName(e,t){throw new x}formatOffset(e,t){throw new x}offset(e){throw new x}equals(e){throw new x}get isValid(){throw new x}}let ee=null;class te extends X{static get instance(){return null===ee&&(ee=new te),ee}get type(){return"system"}get name(){return(new Intl.DateTimeFormat).resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return We(e,t,n)}formatOffset(e,t){return Qe(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return"system"===e.type}get isValid(){return!0}}let ne={};const re={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};let se={};class ae extends X{static create(e){return se[e]||(se[e]=new ae(e)),se[e]}static resetCache(){se={},ne={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}}constructor(e){super(),this.zoneName=e,this.valid=ae.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return We(e,t,n,this.name)}formatOffset(e,t){return Qe(this.offset(e),t)}offset(e){const t=new Date(e);if(isNaN(t))return NaN;const n=(r=this.name,ne[r]||(ne[r]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),ne[r]);var r;let[s,a,i,o,u,l,c]=n.formatToParts?function(e,t){const n=e.formatToParts(t),r=[];for(let e=0;e<n.length;e++){const{type:t,value:s}=n[e],a=re[t];"era"===t?r[a]=s:Ie(a)||(r[a]=parseInt(s,10))}return r}(n,t):function(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,s,a,i,o,u,l,c]=r;return[i,s,a,o,u,l,c]}(n,t);"BC"===o&&(s=1-Math.abs(s));let d=+t;const m=d%1e3;return d-=m>=0?m:1e3+m,(Re({year:s,month:a,day:i,hour:24===u?0:u,minute:l,second:c,millisecond:0})-d)/6e4}equals(e){return"iana"===e.type&&e.name===this.name}get isValid(){return this.valid}}let ie={},oe={};function ue(e,t={}){const n=JSON.stringify([e,t]);let r=oe[n];return r||(r=new Intl.DateTimeFormat(e,t),oe[n]=r),r}let le={},ce={},de=null;function me(e,t,n,r,s){const a=e.listingMode(n);return"error"===a?null:"en"===a?r(t):s(t)}class he{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:r,floor:s,...a}=n;if(!t||Object.keys(a).length>0){const t={useGrouping:!1,...n};n.padTo>0&&(t.minimumIntegerDigits=n.padTo),this.inf=function(e,t={}){const n=JSON.stringify([e,t]);let r=le[n];return r||(r=new Intl.NumberFormat(e,t),le[n]=r),r}(e,t)}}format(e){if(this.inf){const t=this.floor?Math.floor(e):e;return this.inf.format(t)}return qe(this.floor?Math.floor(e):ze(e,3),this.padTo)}}class fe{constructor(e,t,n){let r;if(this.opts=n,this.originalZone=void 0,this.opts.timeZone)this.dt=e;else if("fixed"===e.zone.type){const t=e.offset/60*-1,n=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;0!==e.offset&&ae.create(n).valid?(r=n,this.dt=e):(r="UTC",this.dt=0===e.offset?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else"system"===e.zone.type?this.dt=e:"iana"===e.zone.type?(this.dt=e,r=e.zone.name):(r="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const s={...this.opts};s.timeZone=s.timeZone||r,this.dtf=ue(t,s)}format(){return this.originalZone?this.formatToParts().map((({value:e})=>e)).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map((e=>{if("timeZoneName"===e.type){const t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}return e})):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class pe{constructor(e,t,n){this.opts={style:"long",...n},!t&&$e()&&(this.rtf=function(e,t={}){const{base:n,...r}=t,s=JSON.stringify([e,r]);let a=ce[s];return a||(a=new Intl.RelativeTimeFormat(e,t),ce[s]=a),a}(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,n="always",r=!1){const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},a=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===n&&a){const n="days"===e;switch(t){case 1:return n?"tomorrow":`next ${s[e][0]}`;case-1:return n?"yesterday":`last ${s[e][0]}`;case 0:return n?"today":`this ${s[e][0]}`}}const i=Object.is(t,-0)||t<0,o=Math.abs(t),u=1===o,l=s[e],c=r?u?l[1]:l[2]||l[1]:u?s[e][0]:e;return i?`${o} ${c} ago`:`in ${o} ${c}`}(t,e,this.opts.numeric,"long"!==this.opts.style)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}}class ye{static fromOpts(e){return ye.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,t,n,r=!1){const s=e||Me.defaultLocale,a=s||(r?"en-US":de||(de=(new Intl.DateTimeFormat).resolvedOptions().locale,de)),i=t||Me.defaultNumberingSystem,o=n||Me.defaultOutputCalendar;return new ye(a,i,o,s)}static resetCache(){de=null,oe={},le={},ce={}}static fromObject({locale:e,numberingSystem:t,outputCalendar:n}={}){return ye.create(e,t,n)}constructor(e,t,n,r){const[s,a,i]=function(e){const t=e.indexOf("-x-");-1!==t&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(-1===n)return[e];{let t,r;try{t=ue(e).resolvedOptions(),r=e}catch(s){const a=e.substring(0,n);t=ue(a).resolvedOptions(),r=a}const{numberingSystem:s,calendar:a}=t;return[r,s,a]}}(e);this.locale=s,this.numberingSystem=t||a||null,this.outputCalendar=n||i||null,this.intl=function(e,t,n){return n||t?(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`),e):e}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}get fastNumbers(){var e;return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(e=this).numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),t=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar);return e&&t?"en":"intl"}clone(e){return e&&0!==Object.getOwnPropertyNames(e).length?ye.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1):this}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1,n=!0){return me(this,e,n,nt,(()=>{const n=t?{month:e,day:"numeric"}:{month:e},r=t?"format":"standalone";return this.monthsCache[r][e]||(this.monthsCache[r][e]=function(e){const t=[];for(let n=1;n<=12;n++){const r=pr.utc(2016,n,1);t.push(e(r))}return t}((e=>this.extract(e,n,"month")))),this.monthsCache[r][e]}))}weekdays(e,t=!1,n=!0){return me(this,e,n,it,(()=>{const n=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},r=t?"format":"standalone";return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=function(e){const t=[];for(let n=1;n<=7;n++){const r=pr.utc(2016,11,13+n);t.push(e(r))}return t}((e=>this.extract(e,n,"weekday")))),this.weekdaysCache[r][e]}))}meridiems(e=!0){return me(this,void 0,e,(()=>ot),(()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[pr.utc(2016,11,13,9),pr.utc(2016,11,13,19)].map((t=>this.extract(t,e,"dayperiod")))}return this.meridiemCache}))}eras(e,t=!0){return me(this,e,t,dt,(()=>{const t={era:e};return this.eraCache[e]||(this.eraCache[e]=[pr.utc(-40,1,1),pr.utc(2017,1,1)].map((e=>this.extract(e,t,"era")))),this.eraCache[e]}))}extract(e,t,n){const r=this.dtFormatter(e,t).formatToParts().find((e=>e.type.toLowerCase()===n));return r?r.value:null}numberFormatter(e={}){return new he(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new fe(e,this.intl,t)}relFormatter(e={}){return new pe(this.intl,this.isEnglish(),e)}listFormatter(e={}){return function(e,t={}){const n=JSON.stringify([e,t]);let r=ie[n];return r||(r=new Intl.ListFormat(e,t),ie[n]=r),r}(this.intl,e)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let ge=null;class we extends X{static get utcInstance(){return null===ge&&(ge=new we(0)),ge}static instance(e){return 0===e?we.utcInstance:new we(e)}static parseSpecifier(e){if(e){const t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new we(Ye(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${Qe(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${Qe(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return Qe(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return"fixed"===e.type&&e.fixed===this.fixed}get isValid(){return!0}}class ve extends X{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function be(e,t){if(Ie(e)||null===e)return t;if(e instanceof X)return e;if("string"==typeof e){const n=e.toLowerCase();return"default"===n?t:"local"===n||"system"===n?te.instance:"utc"===n||"gmt"===n?we.utcInstance:we.parseSpecifier(n)||ae.create(e)}return De(e)?we.instance(e):"object"==typeof e&&e.offset&&"number"==typeof e.offset?e:new ve(e)}let Se,Ee=()=>Date.now(),Te="system",Ne=null,Oe=null,ke=null,xe=60;class Me{static get now(){return Ee}static set now(e){Ee=e}static set defaultZone(e){Te=e}static get defaultZone(){return be(Te,te.instance)}static get defaultLocale(){return Ne}static set defaultLocale(e){Ne=e}static get defaultNumberingSystem(){return Oe}static set defaultNumberingSystem(e){Oe=e}static get defaultOutputCalendar(){return ke}static set defaultOutputCalendar(e){ke=e}static get twoDigitCutoffYear(){return xe}static set twoDigitCutoffYear(e){xe=e%100}static get throwOnInvalid(){return Se}static set throwOnInvalid(e){Se=e}static resetCaches(){ye.resetCache(),ae.resetCache()}}function Ie(e){return void 0===e}function De(e){return"number"==typeof e}function Ve(e){return"number"==typeof e&&e%1==0}function $e(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function _e(e,t,n){if(0!==e.length)return e.reduce(((e,r)=>{const s=[t(r),r];return e&&n(e[0],s[0])===e[0]?e:s}),null)[1]}function Fe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ce(e,t,n){return Ve(e)&&e>=t&&e<=n}function qe(e,t=2){let n;return n=e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0"),n}function Ze(e){return Ie(e)||null===e||""===e?void 0:parseInt(e,10)}function Le(e){return Ie(e)||null===e||""===e?void 0:parseFloat(e)}function Ae(e){if(!Ie(e)&&null!==e&&""!==e){const t=1e3*parseFloat("0."+e);return Math.floor(t)}}function ze(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function je(e){return e%4==0&&(e%100!=0||e%400==0)}function Pe(e){return je(e)?366:365}function Ue(e,t){const n=(r=t-1)-12*Math.floor(r/12)+1;var r;return 2===n?je(e+(t-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Re(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Je(e){const t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,n=e-1,r=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7;return 4===t||3===r?53:52}function He(e){return e>99?e:e>Me.twoDigitCutoffYear?1900+e:2e3+e}function We(e,t,n,r=null){const s=new Date(e),a={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(a.timeZone=r);const i={timeZoneName:t,...a},o=new Intl.DateTimeFormat(n,i).formatToParts(s).find((e=>"timezonename"===e.type.toLowerCase()));return o?o.value:null}function Ye(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0;return 60*n+(n<0||Object.is(n,-0)?-r:r)}function Ge(e){const t=Number(e);if("boolean"==typeof e||""===e||Number.isNaN(t))throw new k(`Invalid unit value ${e}`);return t}function Be(e,t){const n={};for(const r in e)if(Fe(e,r)){const s=e[r];if(null==s)continue;n[t(r)]=Ge(s)}return n}function Qe(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),s=e>=0?"+":"-";switch(t){case"short":return`${s}${qe(n,2)}:${qe(r,2)}`;case"narrow":return`${s}${n}${r>0?`:${r}`:""}`;case"techie":return`${s}${qe(n,2)}${qe(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Ke(e){return function(e,t){return["hour","minute","second","millisecond"].reduce(((t,n)=>(t[n]=e[n],t)),{})}(e)}const Xe=["January","February","March","April","May","June","July","August","September","October","November","December"],et=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tt=["J","F","M","A","M","J","J","A","S","O","N","D"];function nt(e){switch(e){case"narrow":return[...tt];case"short":return[...et];case"long":return[...Xe];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const rt=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],st=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],at=["M","T","W","T","F","S","S"];function it(e){switch(e){case"narrow":return[...at];case"short":return[...st];case"long":return[...rt];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const ot=["AM","PM"],ut=["Before Christ","Anno Domini"],lt=["BC","AD"],ct=["B","A"];function dt(e){switch(e){case"narrow":return[...ct];case"short":return[...lt];case"long":return[...ut];default:return null}}function mt(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const ht={D:V,DD:$,DDD:F,DDDD:C,t:q,tt:Z,ttt:L,tttt:A,T:z,TT:j,TTT:P,TTTT:U,f:R,ff:H,fff:G,ffff:Q,F:J,FF:W,FFF:B,FFFF:K};class ft{static create(e,t={}){return new ft(e,t)}static parseFormat(e){let t=null,n="",r=!1;const s=[];for(let a=0;a<e.length;a++){const i=e.charAt(a);"'"===i?(n.length>0&&s.push({literal:r||/^\s+$/.test(n),val:n}),t=null,n="",r=!r):r||i===t?n+=i:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=i,t=i)}return n.length>0&&s.push({literal:r||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(e){return ht[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}formatDateTime(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t}).format()}formatDateTimeParts(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t}).formatToParts()}formatInterval(e,t={}){return this.loc.dtFormatter(e.start,{...this.opts,...t}).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t}).resolvedOptions()}num(e,t=0){if(this.opts.forceSimple)return qe(e,t);const n={...this.opts};return t>0&&(n.padTo=t),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,t){const n="en"===this.loc.listingMode(),r=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,s=(t,n)=>this.loc.extract(e,t,n),a=t=>e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):"",i=(t,r)=>n?function(e,t){return nt(t)[e.month-1]}(e,t):s(r?{month:t}:{month:t,day:"numeric"},"month"),o=(t,r)=>n?function(e,t){return it(t)[e.weekday-1]}(e,t):s(r?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday"),u=t=>{const n=ft.macroTokenToFormatOpts(t);return n?this.formatWithSystemDefault(e,n):t},l=t=>n?function(e,t){return dt(t)[e.year<0?0:1]}(e,t):s({era:t},"era");return mt(ft.parseFormat(t),(t=>{switch(t){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12==0?12:e.hour%12);case"hh":return this.num(e.hour%12==0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return n?function(e){return ot[e.hour<12?0:1]}(e):s({hour:"numeric",hourCycle:"h12"},"dayperiod");case"d":return r?s({day:"numeric"},"day"):this.num(e.day);case"dd":return r?s({day:"2-digit"},"day"):this.num(e.day,2);case"c":case"E":return this.num(e.weekday);case"ccc":return o("short",!0);case"cccc":return o("long",!0);case"ccccc":return o("narrow",!0);case"EEE":return o("short",!1);case"EEEE":return o("long",!1);case"EEEEE":return o("narrow",!1);case"L":return r?s({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return r?s({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return i("short",!0);case"LLLL":return i("long",!0);case"LLLLL":return i("narrow",!0);case"M":return r?s({month:"numeric"},"month"):this.num(e.month);case"MM":return r?s({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return i("short",!1);case"MMMM":return i("long",!1);case"MMMMM":return i("narrow",!1);case"y":return r?s({year:"numeric"},"year"):this.num(e.year);case"yy":return r?s({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return r?s({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return r?s({year:"numeric"},"year"):this.num(e.year,6);case"G":return l("short");case"GG":return l("long");case"GGGGG":return l("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return u(t)}}))}formatDurationFromString(e,t){const n=e=>{switch(e[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},r=ft.parseFormat(t),s=r.reduce(((e,{literal:t,val:n})=>t?e:e.concat(n)),[]);return mt(r,(e=>t=>{const r=n(t);return r?this.num(e.get(r),t.length):t})(e.shiftTo(...s.map(n).filter((e=>e)))))}}class pt{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const yt=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function gt(...e){const t=e.reduce(((e,t)=>e+t.source),"");return RegExp(`^${t}$`)}function wt(...e){return t=>e.reduce((([e,n,r],s)=>{const[a,i,o]=s(t,r);return[{...e,...a},i||n,o]}),[{},null,1]).slice(0,2)}function vt(e,...t){if(null==e)return[null,null];for(const[n,r]of t){const t=n.exec(e);if(t)return r(t)}return[null,null]}function bt(...e){return(t,n)=>{const r={};let s;for(s=0;s<e.length;s++)r[e[s]]=Ze(t[n+s]);return[r,null,n+s]}}const St=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Et=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Tt=RegExp(`${Et.source}(?:${St.source}?(?:\\[(${yt.source})\\])?)?`),Nt=RegExp(`(?:T${Tt.source})?`),Ot=bt("weekYear","weekNumber","weekDay"),kt=bt("year","ordinal"),xt=RegExp(`${Et.source} ?(?:${St.source}|(${yt.source}))?`),Mt=RegExp(`(?: ${xt.source})?`);function It(e,t,n){const r=e[t];return Ie(r)?n:Ze(r)}function Dt(e,t){return[{hours:It(e,t,0),minutes:It(e,t+1,0),seconds:It(e,t+2,0),milliseconds:Ae(e[t+3])},null,t+4]}function Vt(e,t){const n=!e[t]&&!e[t+1],r=Ye(e[t+1],e[t+2]);return[{},n?null:we.instance(r),t+3]}function $t(e,t){return[{},e[t]?ae.create(e[t]):null,t+1]}const _t=RegExp(`^T?${Et.source}$`),Ft=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Ct(e){const[t,n,r,s,a,i,o,u,l]=e,c="-"===t[0],d=u&&"-"===u[0],m=(e,t=!1)=>void 0!==e&&(t||e&&c)?-e:e;return[{years:m(Le(n)),months:m(Le(r)),weeks:m(Le(s)),days:m(Le(a)),hours:m(Le(i)),minutes:m(Le(o)),seconds:m(Le(u),"-0"===u),milliseconds:m(Ae(l),d)}]}const qt={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Zt(e,t,n,r,s,a,i){const o={year:2===t.length?He(Ze(t)):Ze(t),month:et.indexOf(n)+1,day:Ze(r),hour:Ze(s),minute:Ze(a)};return i&&(o.second=Ze(i)),e&&(o.weekday=e.length>3?rt.indexOf(e)+1:st.indexOf(e)+1),o}const Lt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function At(e){const[,t,n,r,s,a,i,o,u,l,c,d]=e,m=Zt(t,s,r,n,a,i,o);let h;return h=u?qt[u]:l?0:Ye(c,d),[m,new we(h)]}const zt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,jt=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Pt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ut(e){const[,t,n,r,s,a,i,o]=e;return[Zt(t,s,r,n,a,i,o),we.utcInstance]}function Rt(e){const[,t,n,r,s,a,i,o]=e;return[Zt(t,o,n,r,s,a,i),we.utcInstance]}const Jt=gt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Nt),Ht=gt(/(\d{4})-?W(\d\d)(?:-?(\d))?/,Nt),Wt=gt(/(\d{4})-?(\d{3})/,Nt),Yt=gt(Tt),Gt=wt((function(e,t){return[{year:It(e,t),month:It(e,t+1,1),day:It(e,t+2,1)},null,t+3]}),Dt,Vt,$t),Bt=wt(Ot,Dt,Vt,$t),Qt=wt(kt,Dt,Vt,$t),Kt=wt(Dt,Vt,$t),Xt=wt(Dt),en=gt(/(\d{4})-(\d\d)-(\d\d)/,Mt),tn=gt(xt),nn=wt(Dt,Vt,$t),rn={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},sn={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...rn},an={years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:4.3481250000000005,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3},...rn},on=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],un=on.slice(0).reverse();function ln(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new dn(r)}function cn(e,t,n,r,s){const a=e[s][n],i=t[n]/a,o=Math.sign(i)!==Math.sign(r[s])&&0!==r[s]&&Math.abs(i)<=1?function(e){return e<0?Math.floor(e):Math.ceil(e)}(i):Math.trunc(i);r[s]+=o,t[n]-=o*a}class dn{constructor(e){const t="longterm"===e.conversionAccuracy||!1;let n=t?an:sn;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||ye.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,t){return dn.fromObject({milliseconds:e},t)}static fromObject(e,t={}){if(null==e||"object"!=typeof e)throw new k("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e));return new dn({values:Be(e,dn.normalizeUnit),loc:ye.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(e){if(De(e))return dn.fromMillis(e);if(dn.isDuration(e))return e;if("object"==typeof e)return dn.fromObject(e);throw new k(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,t){const[n]=function(e){return vt(e,[Ft,Ct])}(e);return n?dn.fromObject(n,t):dn.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,t){const[n]=function(e){return vt(e,[_t,Xt])}(e);return n?dn.fromObject(n,t):dn.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,t=null){if(!e)throw new k("need to specify a reason the Duration is invalid");const n=e instanceof pt?e:new pt(e,t);if(Me.throwOnInvalid)throw new T(n);return new dn({invalid:n})}static normalizeUnit(e){const t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new O(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){const n={...t,floor:!1!==t.round&&!1!==t.floor};return this.isValid?ft.create(this.loc,n).formatDurationFromString(this,e):"Invalid Duration"}toHuman(e={}){const t=on.map((t=>{const n=this.values[t];return Ie(n)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:t.slice(0,-1)}).format(n)})).filter((e=>e));return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(t)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return 0!==this.years&&(e+=this.years+"Y"),0===this.months&&0===this.quarters||(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(e+=ze(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const t=this.toMillis();if(t<0||t>=864e5)return null;e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e};const n=this.shiftTo("hours","minutes","seconds","milliseconds");let r="basic"===e.format?"hhmm":"hh:mm";e.suppressSeconds&&0===n.seconds&&0===n.milliseconds||(r+="basic"===e.format?"ss":":ss",e.suppressMilliseconds&&0===n.milliseconds||(r+=".SSS"));let s=n.toFormat(r);return e.includePrefix&&(s="T"+s),s}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.as("milliseconds")}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const t=dn.fromDurationLike(e),n={};for(const e of on)(Fe(t.values,e)||Fe(this.values,e))&&(n[e]=t.get(e)+this.get(e));return ln(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const t=dn.fromDurationLike(e);return this.plus(t.negate())}mapUnits(e){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=Ge(e(this.values[n],n));return ln(this,{values:t},!0)}get(e){return this[dn.normalizeUnit(e)]}set(e){return this.isValid?ln(this,{values:{...this.values,...Be(e,dn.normalizeUnit)}}):this}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}={}){return ln(this,{loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:n})}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return function(e,t){un.reduce(((n,r)=>Ie(t[r])?n:(n&&cn(e,t,n,t,r),r)),null)}(this.matrix,e),ln(this,{values:e},!0)}rescale(){return this.isValid?ln(this,{values:function(e){const t={};for(const[n,r]of Object.entries(e))0!==r&&(t[n]=r);return t}(this.normalize().shiftToAll().toObject())},!0):this}shiftTo(...e){if(!this.isValid)return this;if(0===e.length)return this;e=e.map((e=>dn.normalizeUnit(e)));const t={},n={},r=this.toObject();let s;for(const a of on)if(e.indexOf(a)>=0){s=a;let e=0;for(const t in n)e+=this.matrix[t][a]*n[t],n[t]=0;De(r[a])&&(e+=r[a]);const i=Math.trunc(e);t[a]=i,n[a]=(1e3*e-1e3*i)/1e3;for(const e in r)on.indexOf(e)>on.indexOf(a)&&cn(this.matrix,r,e,t,a)}else De(r[a])&&(n[a]=r[a]);for(const e in n)0!==n[e]&&(t[s]+=e===s?n[e]:n[e]/this.matrix[s][e]);return ln(this,{values:t},!0).normalize()}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const t of Object.keys(this.values))e[t]=0===this.values[t]?0:-this.values[t];return ln(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid)return!1;if(!this.loc.equals(e.loc))return!1;for(const r of on)if(t=this.values[r],n=e.values[r],!(void 0===t||0===t?void 0===n||0===n:t===n))return!1;var t,n;return!0}}const mn="Invalid Interval";class hn{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,t=null){if(!e)throw new k("need to specify a reason the Interval is invalid");const n=e instanceof pt?e:new pt(e,t);if(Me.throwOnInvalid)throw new E(n);return new hn({invalid:n})}static fromDateTimes(e,t){const n=yr(e),r=yr(t),s=function(e,t){return e&&e.isValid?t&&t.isValid?t<e?hn.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null:hn.invalid("missing or invalid end"):hn.invalid("missing or invalid start")}(n,r);return null==s?new hn({start:n,end:r}):s}static after(e,t){const n=dn.fromDurationLike(t),r=yr(e);return hn.fromDateTimes(r,r.plus(n))}static before(e,t){const n=dn.fromDurationLike(t),r=yr(e);return hn.fromDateTimes(r.minus(n),r)}static fromISO(e,t){const[n,r]=(e||"").split("/",2);if(n&&r){let e,s,a,i;try{e=pr.fromISO(n,t),s=e.isValid}catch(r){s=!1}try{a=pr.fromISO(r,t),i=a.isValid}catch(r){i=!1}if(s&&i)return hn.fromDateTimes(e,a);if(s){const n=dn.fromISO(r,t);if(n.isValid)return hn.after(e,n)}else if(i){const e=dn.fromISO(n,t);if(e.isValid)return hn.before(a,e)}}return hn.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;const t=this.start.startOf(e),n=this.end.startOf(e);return Math.floor(n.diff(t,e).get(e))+(n.valueOf()!==this.end.valueOf())}hasSame(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return!!this.isValid&&this.s>e}isBefore(e){return!!this.isValid&&this.e<=e}contains(e){return!!this.isValid&&this.s<=e&&this.e>e}set({start:e,end:t}={}){return this.isValid?hn.fromDateTimes(e||this.s,t||this.e):this}splitAt(...e){if(!this.isValid)return[];const t=e.map(yr).filter((e=>this.contains(e))).sort(),n=[];let{s:r}=this,s=0;for(;r<this.e;){const e=t[s]||this.e,a=+e>+this.e?this.e:e;n.push(hn.fromDateTimes(r,a)),r=a,s+=1}return n}splitBy(e){const t=dn.fromDurationLike(e);if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[];let n,{s:r}=this,s=1;const a=[];for(;r<this.e;){const e=this.start.plus(t.mapUnits((e=>e*s)));n=+e>+this.e?this.e:e,a.push(hn.fromDateTimes(r,n)),r=n,s+=1}return a}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return!!this.isValid&&+this.e==+e.s}abutsEnd(e){return!!this.isValid&&+e.e==+this.s}engulfs(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e}equals(e){return!(!this.isValid||!e.isValid)&&this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const t=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return t>=n?null:hn.fromDateTimes(t,n)}union(e){if(!this.isValid)return this;const t=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return hn.fromDateTimes(t,n)}static merge(e){const[t,n]=e.sort(((e,t)=>e.s-t.s)).reduce((([e,t],n)=>t?t.overlaps(n)||t.abutsStart(n)?[e,t.union(n)]:[e.concat([t]),n]:[e,n]),[[],null]);return n&&t.push(n),t}static xor(e){let t=null,n=0;const r=[],s=e.map((e=>[{time:e.s,type:"s"},{time:e.e,type:"e"}])),a=Array.prototype.concat(...s).sort(((e,t)=>e.time-t.time));for(const e of a)n+="s"===e.type?1:-1,1===n?t=e.time:(t&&+t!=+e.time&&r.push(hn.fromDateTimes(t,e.time)),t=null);return hn.merge(r)}difference(...e){return hn.xor([this].concat(e)).map((e=>this.intersection(e))).filter((e=>e&&!e.isEmpty()))}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:mn}toLocaleString(e=V,t={}){return this.isValid?ft.create(this.s.loc.clone(t),e).formatInterval(this):mn}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:mn}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:mn}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:mn}toFormat(e,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:mn}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):dn.invalid(this.invalidReason)}mapEndpoints(e){return hn.fromDateTimes(e(this.s),e(this.e))}}class fn{static hasDST(e=Me.defaultZone){const t=pr.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return ae.isValidZone(e)}static normalizeZone(e){return be(e,Me.defaultZone)}static months(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:s="gregory"}={}){return(r||ye.create(t,n,s)).months(e)}static monthsFormat(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:s="gregory"}={}){return(r||ye.create(t,n,s)).months(e,!0)}static weekdays(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||ye.create(t,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||ye.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return ye.create(e).meridiems()}static eras(e="short",{locale:t=null}={}){return ye.create(t,null,"gregory").eras(e)}static features(){return{relative:$e()}}}function pn(e,t){const n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(dn.fromMillis(r).as("days"))}const yn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},gn={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},wn=yn.hanidec.replace(/[\[|\]]/g,"").split("");function vn({numberingSystem:e},t=""){return new RegExp(`${yn[e||"latn"]}${t}`)}function bn(e,t=(e=>e)){return{regex:e,deser:([e])=>t(function(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(-1!==e[n].search(yn.hanidec))t+=wn.indexOf(e[n]);else for(const e in gn){const[n,s]=gn[e];r>=n&&r<=s&&(t+=r-n)}}return parseInt(t,10)}return t}(e))}}const Sn=`[ ${String.fromCharCode(160)}]`,En=new RegExp(Sn,"g");function Tn(e){return e.replace(/\./g,"\\.?").replace(En,Sn)}function Nn(e){return e.replace(/\./g,"").replace(En," ").toLowerCase()}function On(e,t){return null===e?null:{regex:RegExp(e.map(Tn).join("|")),deser:([n])=>e.findIndex((e=>Nn(n)===Nn(e)))+t}}function kn(e,t){return{regex:e,deser:([,e,t])=>Ye(e,t),groups:t}}function xn(e){return{regex:e,deser:([e])=>e}}const Mn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};let In=null;function Dn(e,t){return Array.prototype.concat(...e.map((e=>function(e,t){if(e.literal)return e;const n=$n(ft.macroTokenToFormatOpts(e.val),t);return null==n||n.includes(void 0)?e:n}(e,t))))}function Vn(e,t,n){const r=Dn(ft.parseFormat(n),e),s=r.map((t=>function(e,t){const n=vn(t),r=vn(t,"{2}"),s=vn(t,"{3}"),a=vn(t,"{4}"),i=vn(t,"{6}"),o=vn(t,"{1,2}"),u=vn(t,"{1,3}"),l=vn(t,"{1,6}"),c=vn(t,"{1,9}"),d=vn(t,"{2,4}"),m=vn(t,"{4,6}"),h=e=>{return{regex:RegExp((t=e.val,t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"))),deser:([e])=>e,literal:!0};var t},f=(f=>{if(e.literal)return h(f);switch(f.val){case"G":return On(t.eras("short",!1),0);case"GG":return On(t.eras("long",!1),0);case"y":return bn(l);case"yy":case"kk":return bn(d,He);case"yyyy":case"kkkk":return bn(a);case"yyyyy":return bn(m);case"yyyyyy":return bn(i);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return bn(o);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return bn(r);case"MMM":return On(t.months("short",!0,!1),1);case"MMMM":return On(t.months("long",!0,!1),1);case"LLL":return On(t.months("short",!1,!1),1);case"LLLL":return On(t.months("long",!1,!1),1);case"o":case"S":return bn(u);case"ooo":case"SSS":return bn(s);case"u":return xn(c);case"uu":return xn(o);case"uuu":case"E":case"c":return bn(n);case"a":return On(t.meridiems(),0);case"EEE":return On(t.weekdays("short",!1,!1),1);case"EEEE":return On(t.weekdays("long",!1,!1),1);case"ccc":return On(t.weekdays("short",!0,!1),1);case"cccc":return On(t.weekdays("long",!0,!1),1);case"Z":case"ZZ":return kn(new RegExp(`([+-]${o.source})(?::(${r.source}))?`),2);case"ZZZ":return kn(new RegExp(`([+-]${o.source})(${r.source})?`),2);case"z":return xn(/[a-z_+-/]{1,256}?/i);case" ":return xn(/[^\S\n\r]/);default:return h(f)}})(e)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"};return f.token=e,f}(t,e))),a=s.find((e=>e.invalidReason));if(a)return{input:t,tokens:r,invalidReason:a.invalidReason};{const[e,n]=function(e){return[`^${e.map((e=>e.regex)).reduce(((e,t)=>`${e}(${t.source})`),"")}$`,e]}(s),a=RegExp(e,"i"),[i,o]=function(e,t,n){const r=e.match(t);if(r){const e={};let t=1;for(const s in n)if(Fe(n,s)){const a=n[s],i=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(r.slice(t,t+i))),t+=i}return[r,e]}return[r,{}]}(t,a,n),[u,l,c]=o?function(e){let t,n=null;return Ie(e.z)||(n=ae.create(e.z)),Ie(e.Z)||(n||(n=new we(e.Z)),t=e.Z),Ie(e.q)||(e.M=3*(e.q-1)+1),Ie(e.h)||(e.h<12&&1===e.a?e.h+=12:12===e.h&&0===e.a&&(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),Ie(e.u)||(e.S=Ae(e.u)),[Object.keys(e).reduce(((t,n)=>{const r=(e=>{switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}})(n);return r&&(t[r]=e[n]),t}),{}),n,t]}(o):[null,null,void 0];if(Fe(o,"a")&&Fe(o,"H"))throw new N("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:r,regex:a,rawMatches:i,matches:o,result:u,zone:l,specificOffset:c}}}function $n(e,t){return e?ft.create(t,e).formatDateTimeParts((In||(In=pr.fromMillis(1555555555555)),In)).map((t=>function(e,t){const{type:n,value:r}=e;if("literal"===n){const e=/^\s+$/.test(r);return{literal:!e,val:e?" ":r}}const s=t[n];let a=Mn[n];if("object"==typeof a&&(a=a[s]),a)return{literal:!1,val:a}}(t,e))):null}const Fn=[0,31,59,90,120,151,181,212,243,273,304,334],Cn=[0,31,60,91,121,152,182,213,244,274,305,335];function qn(e,t){return new pt("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Zn(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const s=r.getUTCDay();return 0===s?7:s}function Ln(e,t,n){return n+(je(e)?Cn:Fn)[t-1]}function An(e,t){const n=je(e)?Cn:Fn,r=n.findIndex((e=>e<t));return{month:r+1,day:t-n[r]}}function zn(e){const{year:t,month:n,day:r}=e,s=Ln(t,n,r),a=Zn(t,n,r);let i,o=Math.floor((s-a+10)/7);return o<1?(i=t-1,o=Je(i)):o>Je(t)?(i=t+1,o=1):i=t,{weekYear:i,weekNumber:o,weekday:a,...Ke(e)}}function jn(e){const{weekYear:t,weekNumber:n,weekday:r}=e,s=Zn(t,1,4),a=Pe(t);let i,o=7*n+r-s-3;o<1?(i=t-1,o+=Pe(i)):o>a?(i=t+1,o-=Pe(t)):i=t;const{month:u,day:l}=An(i,o);return{year:i,month:u,day:l,...Ke(e)}}function Pn(e){const{year:t,month:n,day:r}=e;return{year:t,ordinal:Ln(t,n,r),...Ke(e)}}function Un(e){const{year:t,ordinal:n}=e,{month:r,day:s}=An(t,n);return{year:t,month:r,day:s,...Ke(e)}}function Rn(e){const t=Ve(e.year),n=Ce(e.month,1,12),r=Ce(e.day,1,Ue(e.year,e.month));return t?n?!r&&qn("day",e.day):qn("month",e.month):qn("year",e.year)}function Jn(e){const{hour:t,minute:n,second:r,millisecond:s}=e,a=Ce(t,0,23)||24===t&&0===n&&0===r&&0===s,i=Ce(n,0,59),o=Ce(r,0,59),u=Ce(s,0,999);return a?i?o?!u&&qn("millisecond",s):qn("second",r):qn("minute",n):qn("hour",t)}const Hn="Invalid DateTime",Wn=864e13;function Yn(e){return new pt("unsupported zone",`the zone "${e.name}" is not supported`)}function Gn(e){return null===e.weekData&&(e.weekData=zn(e.c)),e.weekData}function Bn(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new pr({...n,...t,old:n})}function Qn(e,t,n){let r=e-60*t*1e3;const s=n.offset(r);if(t===s)return[r,t];r-=60*(s-t)*1e3;const a=n.offset(r);return s===a?[r,s]:[e-60*Math.min(s,a)*1e3,Math.max(s,a)]}function Kn(e,t){const n=new Date(e+=60*t*1e3);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Xn(e,t,n){return Qn(Re(e),t,n)}function er(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),s=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),a={...e.c,year:r,month:s,day:Math.min(e.c.day,Ue(r,s))+Math.trunc(t.days)+7*Math.trunc(t.weeks)},i=dn.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),o=Re(a);let[u,l]=Qn(o,n,e.zone);return 0!==i&&(u+=i,l=e.zone.offset(u)),{ts:u,o:l}}function tr(e,t,n,r,s,a){const{setZone:i,zone:o}=n;if(e&&0!==Object.keys(e).length||t){const r=t||o,s=pr.fromObject(e,{...n,zone:r,specificOffset:a});return i?s:s.setZone(o)}return pr.invalid(new pt("unparsable",`the input "${s}" can't be parsed as ${r}`))}function nr(e,t,n=!0){return e.isValid?ft.create(ye.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function rr(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=qe(e.c.year,n?6:4),t?(r+="-",r+=qe(e.c.month),r+="-",r+=qe(e.c.day)):(r+=qe(e.c.month),r+=qe(e.c.day)),r}function sr(e,t,n,r,s,a){let i=qe(e.c.hour);return t?(i+=":",i+=qe(e.c.minute),0===e.c.second&&n||(i+=":")):i+=qe(e.c.minute),0===e.c.second&&n||(i+=qe(e.c.second),0===e.c.millisecond&&r||(i+=".",i+=qe(e.c.millisecond,3))),s&&(e.isOffsetFixed&&0===e.offset&&!a?i+="Z":e.o<0?(i+="-",i+=qe(Math.trunc(-e.o/60)),i+=":",i+=qe(Math.trunc(-e.o%60))):(i+="+",i+=qe(Math.trunc(e.o/60)),i+=":",i+=qe(Math.trunc(e.o%60)))),a&&(i+="["+e.zone.ianaName+"]"),i}const ar={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},ir={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},or={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ur=["year","month","day","hour","minute","second","millisecond"],lr=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],cr=["year","ordinal","hour","minute","second","millisecond"];function dr(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new O(e);return t}function mr(e,t){const n=be(t.zone,Me.defaultZone),r=ye.fromObject(t),s=Me.now();let a,i;if(Ie(e.year))a=s;else{for(const t of ur)Ie(e[t])&&(e[t]=ar[t]);const t=Rn(e)||Jn(e);if(t)return pr.invalid(t);const r=n.offset(s);[a,i]=Xn(e,r,n)}return new pr({ts:a,zone:n,loc:r,o:i})}function hr(e,t,n){const r=!!Ie(n.round)||n.round,s=(e,s)=>(e=ze(e,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(e,s)),a=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(n.unit)return s(a(n.unit),n.unit);for(const e of n.units){const t=a(e);if(Math.abs(t)>=1)return s(t,e)}return s(e>t?-0:0,n.units[n.units.length-1])}function fr(e){let t,n={};return e.length>0&&"object"==typeof e[e.length-1]?(n=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[n,t]}class pr{constructor(e){const t=e.zone||Me.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new pt("invalid input"):null)||(t.isValid?null:Yn(t));this.ts=Ie(e.ts)?Me.now():e.ts;let r=null,s=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,s]=[e.old.c,e.old.o];else{const e=t.offset(this.ts);r=Kn(this.ts,e),n=Number.isNaN(r.year)?new pt("invalid input"):null,r=n?null:r,s=n?null:e}this._zone=t,this.loc=e.loc||ye.create(),this.invalid=n,this.weekData=null,this.c=r,this.o=s,this.isLuxonDateTime=!0}static now(){return new pr({})}static local(){const[e,t]=fr(arguments),[n,r,s,a,i,o,u]=t;return mr({year:n,month:r,day:s,hour:a,minute:i,second:o,millisecond:u},e)}static utc(){const[e,t]=fr(arguments),[n,r,s,a,i,o,u]=t;return e.zone=we.utcInstance,mr({year:n,month:r,day:s,hour:a,minute:i,second:o,millisecond:u},e)}static fromJSDate(e,t={}){const n=(r=e,"[object Date]"===Object.prototype.toString.call(r)?e.valueOf():NaN);var r;if(Number.isNaN(n))return pr.invalid("invalid input");const s=be(t.zone,Me.defaultZone);return s.isValid?new pr({ts:n,zone:s,loc:ye.fromObject(t)}):pr.invalid(Yn(s))}static fromMillis(e,t={}){if(De(e))return e<-Wn||e>Wn?pr.invalid("Timestamp out of range"):new pr({ts:e,zone:be(t.zone,Me.defaultZone),loc:ye.fromObject(t)});throw new k(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,t={}){if(De(e))return new pr({ts:1e3*e,zone:be(t.zone,Me.defaultZone),loc:ye.fromObject(t)});throw new k("fromSeconds requires a numerical input")}static fromObject(e,t={}){e=e||{};const n=be(t.zone,Me.defaultZone);if(!n.isValid)return pr.invalid(Yn(n));const r=Me.now(),s=Ie(t.specificOffset)?n.offset(r):t.specificOffset,a=Be(e,dr),i=!Ie(a.ordinal),o=!Ie(a.year),u=!Ie(a.month)||!Ie(a.day),l=o||u,c=a.weekYear||a.weekNumber,d=ye.fromObject(t);if((l||i)&&c)throw new N("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&i)throw new N("Can't mix ordinal dates with month/day");const m=c||a.weekday&&!l;let h,f,p=Kn(r,s);m?(h=lr,f=ir,p=zn(p)):i?(h=cr,f=or,p=Pn(p)):(h=ur,f=ar);let y=!1;for(const e of h)Ie(a[e])?a[e]=y?f[e]:p[e]:y=!0;const g=m?function(e){const t=Ve(e.weekYear),n=Ce(e.weekNumber,1,Je(e.weekYear)),r=Ce(e.weekday,1,7);return t?n?!r&&qn("weekday",e.weekday):qn("week",e.week):qn("weekYear",e.weekYear)}(a):i?function(e){const t=Ve(e.year),n=Ce(e.ordinal,1,Pe(e.year));return t?!n&&qn("ordinal",e.ordinal):qn("year",e.year)}(a):Rn(a),w=g||Jn(a);if(w)return pr.invalid(w);const v=m?jn(a):i?Un(a):a,[b,S]=Xn(v,s,n),E=new pr({ts:b,zone:n,o:S,loc:d});return a.weekday&&l&&e.weekday!==E.weekday?pr.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${E.toISO()}`):E}static fromISO(e,t={}){const[n,r]=function(e){return vt(e,[Jt,Gt],[Ht,Bt],[Wt,Qt],[Yt,Kt])}(e);return tr(n,r,t,"ISO 8601",e)}static fromRFC2822(e,t={}){const[n,r]=function(e){return vt(function(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(e),[Lt,At])}(e);return tr(n,r,t,"RFC 2822",e)}static fromHTTP(e,t={}){const[n,r]=function(e){return vt(e,[zt,Ut],[jt,Ut],[Pt,Rt])}(e);return tr(n,r,t,"HTTP",t)}static fromFormat(e,t,n={}){if(Ie(e)||Ie(t))throw new k("fromFormat requires an input string and a format");const{locale:r=null,numberingSystem:s=null}=n,a=ye.fromOpts({locale:r,numberingSystem:s,defaultToEN:!0}),[i,o,u,l]=function(e,t,n){const{result:r,zone:s,specificOffset:a,invalidReason:i}=Vn(e,t,n);return[r,s,a,i]}(a,e,t);return l?pr.invalid(l):tr(i,o,n,`format ${t}`,e,u)}static fromString(e,t,n={}){return pr.fromFormat(e,t,n)}static fromSQL(e,t={}){const[n,r]=function(e){return vt(e,[en,Gt],[tn,nn])}(e);return tr(n,r,t,"SQL",e)}static invalid(e,t=null){if(!e)throw new k("need to specify a reason the DateTime is invalid");const n=e instanceof pt?e:new pt(e,t);if(Me.throwOnInvalid)throw new S(n);return new pr({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){const n=$n(e,ye.fromObject(t));return n?n.map((e=>e?e.val:null)).join(""):null}static expandFormat(e,t={}){return Dn(ft.parseFormat(e),ye.fromObject(t)).map((e=>e.val)).join("")}get(e){return this[e]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Gn(this).weekYear:NaN}get weekNumber(){return this.isValid?Gn(this).weekNumber:NaN}get weekday(){return this.isValid?Gn(this).weekday:NaN}get ordinal(){return this.isValid?Pn(this.c).ordinal:NaN}get monthShort(){return this.isValid?fn.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?fn.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?fn.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?fn.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}get isInLeapYear(){return je(this.year)}get daysInMonth(){return Ue(this.year,this.month)}get daysInYear(){return this.isValid?Pe(this.year):NaN}get weeksInWeekYear(){return this.isValid?Je(this.weekYear):NaN}resolvedLocaleOptions(e={}){const{locale:t,numberingSystem:n,calendar:r}=ft.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(we.instance(e),t)}toLocal(){return this.setZone(Me.defaultZone)}setZone(e,{keepLocalTime:t=!1,keepCalendarTime:n=!1}={}){if((e=be(e,Me.defaultZone)).equals(this.zone))return this;if(e.isValid){let r=this.ts;if(t||n){const t=e.offset(this.ts),n=this.toObject();[r]=Xn(n,t,e)}return Bn(this,{ts:r,zone:e})}return pr.invalid(Yn(e))}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){return Bn(this,{loc:this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n})})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const t=Be(e,dr),n=!Ie(t.weekYear)||!Ie(t.weekNumber)||!Ie(t.weekday),r=!Ie(t.ordinal),s=!Ie(t.year),a=!Ie(t.month)||!Ie(t.day),i=s||a,o=t.weekYear||t.weekNumber;if((i||r)&&o)throw new N("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&r)throw new N("Can't mix ordinal dates with month/day");let u;n?u=jn({...zn(this.c),...t}):Ie(t.ordinal)?(u={...this.toObject(),...t},Ie(t.day)&&(u.day=Math.min(Ue(u.year,u.month),u.day))):u=Un({...Pn(this.c),...t});const[l,c]=Xn(u,this.o,this.zone);return Bn(this,{ts:l,o:c})}plus(e){return this.isValid?Bn(this,er(this,dn.fromDurationLike(e))):this}minus(e){return this.isValid?Bn(this,er(this,dn.fromDurationLike(e).negate())):this}startOf(e){if(!this.isValid)return this;const t={},n=dn.normalizeUnit(e);switch(n){case"years":t.month=1;case"quarters":case"months":t.day=1;case"weeks":case"days":t.hour=0;case"hours":t.minute=0;case"minutes":t.second=0;case"seconds":t.millisecond=0}if("weeks"===n&&(t.weekday=1),"quarters"===n){const e=Math.ceil(this.month/3);t.month=3*(e-1)+1}return this.set(t)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,t={}){return this.isValid?ft.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):Hn}toLocaleString(e=V,t={}){return this.isValid?ft.create(this.loc.clone(t),e).formatDateTime(this):Hn}toLocaleParts(e={}){return this.isValid?ft.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const a="extended"===e;let i=rr(this,a);return i+="T",i+=sr(this,a,t,n,r,s),i}toISODate({format:e="extended"}={}){return this.isValid?rr(this,"extended"===e):null}toISOWeekDate(){return nr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:s=!1,format:a="extended"}={}){return this.isValid?(r?"T":"")+sr(this,"extended"===a,t,e,n,s):null}toRFC2822(){return nr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return nr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?rr(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let r="HH:mm:ss.SSS";return(t||e)&&(n&&(r+=" "),t?r+="z":e&&(r+="ZZ")),nr(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Hn}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t="milliseconds",n={}){if(!this.isValid||!e.isValid)return dn.invalid("created by diffing an invalid DateTime");const r={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=(o=t,Array.isArray(o)?o:[o]).map(dn.normalizeUnit),a=e.valueOf()>this.valueOf(),i=function(e,t,n,r){let[s,a,i,o]=function(e,t,n){const r=[["years",(e,t)=>t.year-e.year],["quarters",(e,t)=>t.quarter-e.quarter+4*(t.year-e.year)],["months",(e,t)=>t.month-e.month+12*(t.year-e.year)],["weeks",(e,t)=>{const n=pn(e,t);return(n-n%7)/7}],["days",pn]],s={},a=e;let i,o;for(const[u,l]of r)n.indexOf(u)>=0&&(i=u,s[u]=l(e,t),o=a.plus(s),o>t?(s[u]--,e=a.plus(s)):e=o);return[e,s,o,i]}(e,t,n);const u=t-s,l=n.filter((e=>["hours","minutes","seconds","milliseconds"].indexOf(e)>=0));0===l.length&&(i<t&&(i=s.plus({[o]:1})),i!==s&&(a[o]=(a[o]||0)+u/(i-s)));const c=dn.fromObject(a,r);return l.length>0?dn.fromMillis(u,r).shiftTo(...l).plus(c):c}(a?this:e,a?e:this,s,r);var o;return a?i.negate():i}diffNow(e="milliseconds",t={}){return this.diff(pr.now(),e,t)}until(e){return this.isValid?hn.fromDateTimes(this,e):this}hasSame(e,t){if(!this.isValid)return!1;const n=e.valueOf(),r=this.setZone(e.zone,{keepLocalTime:!0});return r.startOf(t)<=n&&n<=r.endOf(t)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const t=e.base||pr.fromObject({},{zone:this.zone}),n=e.padding?this<t?-e.padding:e.padding:0;let r=["years","months","days","hours","minutes","seconds"],s=e.unit;return Array.isArray(e.unit)&&(r=e.unit,s=void 0),hr(t,this.plus(n),{...e,numeric:"always",units:r,unit:s})}toRelativeCalendar(e={}){return this.isValid?hr(e.base||pr.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(pr.isDateTime))throw new k("min requires all arguments be DateTimes");return _e(e,(e=>e.valueOf()),Math.min)}static max(...e){if(!e.every(pr.isDateTime))throw new k("max requires all arguments be DateTimes");return _e(e,(e=>e.valueOf()),Math.max)}static fromFormatExplain(e,t,n={}){const{locale:r=null,numberingSystem:s=null}=n;return Vn(ye.fromOpts({locale:r,numberingSystem:s,defaultToEN:!0}),e,t)}static fromStringExplain(e,t,n={}){return pr.fromFormatExplain(e,t,n)}static get DATE_SHORT(){return V}static get DATE_MED(){return $}static get DATE_MED_WITH_WEEKDAY(){return _}static get DATE_FULL(){return F}static get DATE_HUGE(){return C}static get TIME_SIMPLE(){return q}static get TIME_WITH_SECONDS(){return Z}static get TIME_WITH_SHORT_OFFSET(){return L}static get TIME_WITH_LONG_OFFSET(){return A}static get TIME_24_SIMPLE(){return z}static get TIME_24_WITH_SECONDS(){return j}static get TIME_24_WITH_SHORT_OFFSET(){return P}static get TIME_24_WITH_LONG_OFFSET(){return U}static get DATETIME_SHORT(){return R}static get DATETIME_SHORT_WITH_SECONDS(){return J}static get DATETIME_MED(){return H}static get DATETIME_MED_WITH_SECONDS(){return W}static get DATETIME_MED_WITH_WEEKDAY(){return Y}static get DATETIME_FULL(){return G}static get DATETIME_FULL_WITH_SECONDS(){return B}static get DATETIME_HUGE(){return Q}static get DATETIME_HUGE_WITH_SECONDS(){return K}}function yr(e){if(pr.isDateTime(e))return e;if(e&&e.valueOf&&De(e.valueOf()))return pr.fromJSDate(e);if(e&&"object"==typeof e)return pr.fromObject(e);throw new k(`Unknown datetime argument: ${e}, of type ${typeof e}`)}const gr=e=>{const[n,r]=(0,t.useState)("");return(0,t.useEffect)((()=>{r(e.defaultValue)}),[e.defaultValue]),(0,t.createElement)("select",{id:e.id,name:e.name,disabled:e?.disabled||!1,required:e?.required||!1,value:n,onChange:function(e){r(e.target.value)},onFocus:e?.handleFocus},!e.value&&!e.defaultValue&&(0,t.createElement)("option",{disabled:!0,value:""},"Please select"),e.children)},wr=e=>{const[n,r]=(0,t.useState)(!1),[s,a]=(0,t.useState)("");return(0,t.useEffect)((()=>{r(e.defaultValue),a(e.defaultValue?"On":"Off")}),[e.defaultValue]),(0,t.createElement)("input",{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled,required:e?.required,onClick:function(e){r(e.target.checked),a(e.target.checked?"On":"Off")},checked:n,value:n,onFocus:e?.handleFocus})},vr=e=>{const n=(0,t.useRef)(null);return(0,t.createElement)("input",{name:e.name,id:e.id,type:"text",ref:n,maxlength:e?.maxlength||32,minlength:e?.minlength||1,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern,readonly:e?.readonly||!1,disabled:e?.disabled||!1,onFocus:e?.handleFocus})},br=e=>{const n=(0,t.useRef)(null);return(0,t.createElement)("input",{name:e.name,id:e.id,type:"email",ref:n,maxlength:e?.maxlength||32,minlength:e?.minlength||1,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern||"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",readonly:e?.readonly||!1,disabled:e?.disabled||!1,onFocus:e?.handleFocus})},Sr=e=>{(0,t.useEffect)((()=>{if(!(0,a.isNil)(e.defaultValue)){let t=pr.fromISO(e.defaultValue);t.invalid&&(t=pr.fromFormat(e.defaultValue,"dd/MM/yyyy")),n.current.value=t.toISODate()}}),[e.defaultValue]);const n=(0,t.useRef)(null);return(0,t.createElement)("input",{name:e.name,id:e.id,type:"date",ref:n,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern,readonly:e?.readonly||!1,disabled:e?.disabled||!1,onFocus:e?.handleFocus})},Er=e=>{const n=(0,t.useRef)(null);return(0,t.createElement)("input",{name:e.name,id:e.id,type:"number",ref:n,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern||"^d+",readonly:e?.readonly||!1,max:e?.max,min:e?.min||0,step:e?.step||1,disabled:e?.disabled||!1,onChange:e?.onChange,value:e?.value,onFocus:e?.handleFocus})},Tr=e=>{const[n,r]=(0,t.useState)(null),[s,i]=(0,t.useState)([]);function o(e){r(e),i([])}function u(){i([])}return(0,t.useEffect)((()=>{(0,a.isNil)(e.attendee)||r(e.attendee)}),[e.attendee]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("h3",null,"Attendee ",e.index+1),(e?.attendee?.ID||n?.id)&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['id']`,value:e?.attendee?.ID||n?.id}),(e?.attendee?.post_status||n?.status)&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['status']`,value:e?.attendee?.post_status||n?.status}),(e?.attendee?.meta?.order_ids||n?.meta?.order_ids)&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['meta']['order_ids']`,value:e?.attendee?.meta?.order_ids.join(",")||n?.meta?.order_ids.join(",")||""}),(e?.attendee?.meta?.product_ids||n?.meta?.product_ids)&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['meta']['product_ids']`,value:e?.attendee?.meta?.product_ids.join(",")||n?.meta?.product_ids.join(",")||""}),(e?.attendee?.meta["groups-read"]||n?.meta["groups-read"])&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['meta']['groups-read']`,value:e?.attendee?.meta["groups-read"].join(",")||n?.meta["groups-read"].join(",")||""}),e?.fields.map((r=>(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:r.key},r.label,!!r.required&&(0,t.createElement)("span",{class:"required"}," *")),"text"===r.type&&"employee_number"!==r.name&&"last_name"!==r.name&&"first_name"!==r.name&&(0,t.createElement)(vr,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,handleFocus:u,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required}),"text"===r.type&&"employee_number"===r.name&&(0,t.createElement)(v,{options:s,handleFocus:u,nonce:e.nonce,acfFieldName:r.name,handleSelect:o,helpText:"Enter or search for existing employee numbers",name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required}),"text"===r.type&&"last_name"===r.name&&(0,t.createElement)(v,{options:s,handleFocus:u,nonce:e.nonce,acfFieldName:r.name,acfClarifyingFieldName:"first_name",handleSelect:o,helpText:"Enter or search for existing last names",name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required}),"text"===r.type&&"first_name"===r.name&&(0,t.createElement)(v,{options:s,handleFocus:u,nonce:e.nonce,acfFieldName:r.name,acfClarifyingFieldName:"last_name",handleSelect:o,helpText:"Enter or search for existing first names",name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required}),"email"===r.type&&(0,t.createElement)(br,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required,onFocus:u}),"textarea"===r.type&&(0,t.createElement)("textarea",{id:r.key,disabled:e.disabled,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,defaultValue:n?.acf[r.name]||r.default_value,required:!!r.required,handleFocus:u}),"date_picker"===r.type&&(0,t.createElement)(Sr,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,defaultValue:n?.acf[r.name]||r.default_value,required:!!r.required,handleFocus:u}),"true_false"===r.type&&(0,t.createElement)(wr,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,required:!!r.required,defaultValue:n?.acf[r.name]||r.default_value,handleFocus:u}),"number"===r.type&&(0,t.createElement)(Er,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,defaultValue:n?.acf[r.name]||r.default_value,required:!!r.required,handleFocus:u}),"select"===r.type&&(0,t.createElement)(gr,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,required:!!r.required,defaultValue:n?.acf[r.name]||r.default_value||"",handleFocus:u},Object.keys(r.choices).map(((e,n)=>(0,t.createElement)("option",{key:e,value:"local_authority"===r.name?e:r.choices[e]},r.choices[e]))))))))),(0,t.createElement)("hr",null))},Nr=e=>{const[r,i]=(0,t.useState)(null),[o,u]=(0,t.useState)(0),[l,c]=(0,t.useState)(!0),[m,h]=(0,t.useState)(!1);function f(e,t){return Array.from(t.querySelectorAll(`[name^="attendees[${e}][acf]"]`)).filter((e=>""!==e.value)).map((e=>{return[p(e.getAttribute("name")),(t=e.value,"true"===t||"false"!==t&&t)];var t}))}function p(e){const t=e.match(/attendees\[\d\]\[acf\]\[(.+)\]/);return t?t[1]:null}return(0,t.useEffect)((()=>{e?.quantity>0?u(parseInt(e.quantity)):i({status:"warning",message:"Please add a product to your order"})}),[e.quantity]),(0,t.useEffect)((()=>{!(0,a.isNil)(e.status)&&["attendees","waiting-list"].includes(e.status)&&c(!1)}),[e.status]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{class:"form-wrap"},(0,t.createElement)("form",{class:"panel-wrap woocommerce",onSubmit:async function(t){t.preventDefault();const n=function(t,n,r,s){return(0,a.range)(t).map((t=>function(t,n,r,s){const a=new FormData(n),i=a.has(`attendees[${t}]['id']`)?parseInt(a.get(`attendees[${t}]['id']`)):null;return{path:i?`/wp/v2/attendee/${i}?order_id=${s}`:`/wp/v2/attendee?order_id=${s}`,method:"POST",body:{id:i,status:a.has(`attendees[${t}]['status']`)?a.get(`attendees[${t}]['status']`):"publish",meta:{"groups-read":a.has(`attendees[${t}]['meta']['groups-read']`)?[...new Set(a.get(`attendees[${t}]['meta']['groups-read']`).split(",").map(Number).filter(Number).concat(parseInt(e.groupId)))]:[parseInt(e.groupId)],order_ids:a.has(`attendees[${t}]['meta']['order_ids']`)?[...new Set(a.get(`attendees[${t}]['meta']['order_ids']`).split(",").map(Number).filter(Number).concat(e.order.id))]:[e.order.id],product_ids:a.has(`attendees[${t}]['meta']['product_ids']`)?[...new Set(a.get(`attendees[${t}]['meta']['product_ids']`).split(",").map(Number).filter(Number).concat(parseInt(e.productId)))]:[parseInt(e.productId)]},acf:Object.assign(Object.fromEntries(f(t,n)))}}}(t,n,0,s)))}(o,t.target,parseInt(e.groupId),e.order.id);try{i(null),h(!0),c(!0),i({status:"info",message:"Updating attendees."}),s().use(s().createNonceMiddleware(e.nonce));const t=(await s()({path:"/batch/v1",method:"POST",data:{requests:n}})).responses.map((e=>parseInt(e.body.id)));i({status:"info",message:"Updating order."}),await s()(function(e,t,n){return{path:`/wp/v2/shop_order/${e}`,method:"PUT",data:{id:e,status:t,meta:{attendee_ids:[...new Set(n)]}}}}(e.order.id,(r=e.order,Array.isArray(r.attendees)&&r.attendees>0||d(e.order)?e.order.status:"wc-pending"),t)),i({status:"success",message:`Updated attendees. Redirecting to ${d(e.order)?"order list":"payment tab"}...`}),document.location.assign(d(e.order)?"/wp-admin/edit.php?post_type=shop_order":`/wp-admin/post.php?post=${e.order.id}&action=edit&tab=payment`)}catch(t){i({status:"error",message:t.message}),console.error(t),h(!1),c(!1)}var r}},(0,t.createElement)("div",{id:"order_data",class:"panel woocommerce-order-data"},e?.quantity>0&&(0,a.range)(o).map((n=>(0,t.createElement)(Tr,{fields:e.fields,attendee:e.attendees[n],index:n,disabled:l,nonce:e.nonce}))),e?.quantity>0&&(0,t.createElement)("div",{class:"form-field"},r&&(0,t.createElement)(n.Notice,{status:r.status,isDismissable:!0,onDismiss:()=>i(null)},r.message),(0,t.createElement)("button",{disabled:l,type:"submit",class:"button alt save_order wp-element-button",name:"save",value:"Create"},"Save attendees"),m&&(0,t.createElement)(n.Spinner,null))))))};window.addEventListener("load",(function(e){const n=document.querySelector("#lasntgadmin-orders-form");n&&(0,t.render)((0,t.createElement)(g,{groupApiPath:n.dataset.groupApiPath,orderApiPath:n.dataset.orderApiPath,productApiPath:n.dataset.productApiPath,nonce:n.dataset.nonce,title:n.dataset.title,status:n.dataset.status,order:JSON.parse(n.dataset.order),orderId:n.dataset.orderId,productId:n.dataset.productId,groupId:JSON.parse(n.dataset.groupId),userId:n.dataset.userId,user:JSON.parse(n.dataset.user),userMeta:JSON.parse(n.dataset.userMeta)}),n);const r=document.querySelector("#lasntgadmin-orders-attendees");r&&(0,t.render)((0,t.createElement)(Nr,{quantity:r.dataset.quantity,nonce:r.dataset.nonce,fields:JSON.parse(r.dataset.fields),status:r.dataset.status,order:JSON.parse(r.dataset.order),groupId:JSON.parse(r.dataset.groupId),attendees:JSON.parse(r.dataset.attendees),productId:r.dataset.productId}),r)}),!1)}();
=======
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
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/src/luxon.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




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
    disabled: props?.disabled || false,
    required: props?.required || false,
    value: value,
    onChange: handleChange,
    onFocus: props?.handleFocus
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
    required: props?.required,
    onClick: handleClick,
    checked: checked,
    value: checked,
    onFocus: props?.handleFocus
  });
};
const TextInput = props => {
  const textInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "text",
    ref: textInput,
    maxlength: props?.maxlength || 32,
    minlength: props?.minlength || 1,
    defaultValue: props?.defaultValue,
    placeholder: props?.placeholder,
    required: props?.required || false,
    pattern: props?.pattern,
    readonly: props?.readonly || false,
    disabled: props?.disabled || false,
    onFocus: props?.handleFocus
  });
};
const EmailInput = props => {
  const emailInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "email",
    ref: emailInput,
    maxlength: props?.maxlength || 32,
    minlength: props?.minlength || 1,
    defaultValue: props?.defaultValue,
    placeholder: props?.placeholder,
    required: props?.required || false,
    pattern: props?.pattern || "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    readonly: props?.readonly || false,
    disabled: props?.disabled || false,
    onFocus: props?.handleFocus
  });
};
const DateInput = props => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isNil)(props.defaultValue)) {
      let dt = luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.fromISO(props.defaultValue);
      if (dt.invalid) {
        dt = luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.fromFormat(props.defaultValue, 'dd/MM/yyyy');
      }
      dateInput.current.value = dt.toISODate();
    }
  }, [props.defaultValue]);
  const dateInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "date",
    ref: dateInput,
    defaultValue: props?.defaultValue,
    placeholder: props?.placeholder,
    required: props?.required || false,
    pattern: props?.pattern,
    readonly: props?.readonly || false,
    disabled: props?.disabled || false,
    onFocus: props?.handleFocus
  });
};
const NumberInput = props => {
  const numberInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "number",
    ref: numberInput,
    defaultValue: props?.defaultValue,
    placeholder: props?.placeholder,
    required: props?.required || false,
    pattern: props?.pattern || "^\d+",
    readonly: props?.readonly || false,
    max: props?.max,
    min: props?.min || 0,
    step: props?.step || 1,
    disabled: props?.disabled || false,
    onChange: props?.onChange,
    value: props?.value,
    onFocus: props?.handleFocus
  });
};
const TelInput = props => {
  const telInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "tel",
    ref: telInput,
    maxlength: props?.maxlength || 32,
    minlength: props?.minlength || 1,
    defaultValue: props?.defaultValue,
    placeholder: props?.placeholder,
    required: props?.required || false,
    pattern: props?.pattern || "[0-9+\s]+",
    readonly: props?.readonly || false,
    disabled: props?.disabled || false,
    onFocus: props?.handleFocus
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
/* harmony import */ var _attendee_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendee-search */ "./src/attendee-search.js");
/* harmony import */ var _acf_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acf-inputs */ "./src/acf-inputs.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);







/**
 * @param { string } nonce 
 * @param { array } fields
 * @param { object } attendee
 * @param { number } index
 * @param { disabled } bool
 */
const AttendeeFields = props => {
  const [attendee, setAttendee] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [attendeeSearchOptions, setAttendeeSearchOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isNil)(props.attendee)) {
      setAttendee(props.attendee);
    }
  }, [props.attendee]);
  function handleAttendeeSearchSelect(attendee) {
    setAttendee(attendee);
    setAttendeeSearchOptions([]);
  }
  function handleAttendeeSearchFocus() {
    setAttendeeSearchOptions([]);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Attendee ", props.index + 1), (props?.attendee?.ID || attendee?.id) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: `attendees[${props.index}]['id']`,
    value: props?.attendee?.ID || attendee?.id
  }), (props?.attendee?.post_status || attendee?.status) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: `attendees[${props.index}]['status']`,
    value: props?.attendee?.post_status || attendee?.status
  }), (props?.attendee?.meta?.order_ids || attendee?.meta?.order_ids) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: `attendees[${props.index}]['meta']['order_ids']`,
    value: props?.attendee?.meta?.order_ids.join(',') || attendee?.meta?.order_ids.join(',') || ''
  }), (props?.attendee?.meta?.product_ids || attendee?.meta?.product_ids) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: `attendees[${props.index}]['meta']['product_ids']`,
    value: props?.attendee?.meta?.product_ids.join(',') || attendee?.meta?.product_ids.join(',') || ''
  }), (props?.attendee?.meta['groups-read'] || attendee?.meta['groups-read']) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: `attendees[${props.index}]['meta']['groups-read']`,
    value: props?.attendee?.meta['groups-read'].join(',') || attendee?.meta['groups-read'].join(',') || ''
  }), props?.fields.map(field => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "form-field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "form-row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: field.key
    }, field.label, !!field.required && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "required"
    }, " *")), field.type === 'text' && field.name !== 'employee_number' && field.name !== 'last_name' && field.name !== 'first_name' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      handleFocus: handleAttendeeSearchFocus,
      disabled: props.disabled,
      placeholder: field.placeholder,
      defaultValue: attendee?.acf[field.name] || field.default_value,
      maxlength: field.maxlength,
      required: !!field.required
    }), field.type === 'text' && field.name === 'employee_number' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_attendee_search__WEBPACK_IMPORTED_MODULE_2__.AttendeeSearch, {
      options: attendeeSearchOptions,
      handleFocus: handleAttendeeSearchFocus,
      nonce: props.nonce,
      acfFieldName: field.name,
      handleSelect: handleAttendeeSearchSelect,
      helpText: "Enter or search for existing employee numbers",
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      placeholder: field.placeholder,
      defaultValue: attendee?.acf[field.name] || field.default_value,
      maxlength: field.maxlength,
      required: !!field.required
    }), field.type === 'text' && field.name === 'last_name' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_attendee_search__WEBPACK_IMPORTED_MODULE_2__.AttendeeSearch, {
      options: attendeeSearchOptions,
      handleFocus: handleAttendeeSearchFocus,
      nonce: props.nonce,
      acfFieldName: field.name,
      acfClarifyingFieldName: "first_name",
      handleSelect: handleAttendeeSearchSelect,
      helpText: "Enter or search for existing last names",
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      placeholder: field.placeholder,
      defaultValue: attendee?.acf[field.name] || field.default_value,
      maxlength: field.maxlength,
      required: !!field.required
    }), field.type === 'text' && field.name === 'first_name' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_attendee_search__WEBPACK_IMPORTED_MODULE_2__.AttendeeSearch, {
      options: attendeeSearchOptions,
      handleFocus: handleAttendeeSearchFocus,
      nonce: props.nonce,
      acfFieldName: field.name,
      acfClarifyingFieldName: "last_name",
      handleSelect: handleAttendeeSearchSelect,
      helpText: "Enter or search for existing first names",
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      placeholder: field.placeholder,
      defaultValue: attendee?.acf[field.name] || field.default_value,
      maxlength: field.maxlength,
      required: !!field.required
    }), field.type === 'email' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_3__.EmailInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      placeholder: field.placeholder,
      defaultValue: attendee?.acf[field.name] || field.default_value,
      maxlength: field.maxlength,
      required: !!field.required,
      onFocus: handleAttendeeSearchFocus
    }), field.type === 'textarea' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      id: field.key,
      disabled: props.disabled,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      defaultValue: attendee?.acf[field.name] || field.default_value,
      required: !!field.required,
      handleFocus: handleAttendeeSearchFocus
    }), field.type === 'date_picker' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_3__.DateInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      defaultValue: attendee?.acf[field.name] || field.default_value,
      required: !!field.required,
      handleFocus: handleAttendeeSearchFocus
    }), field.type === 'true_false' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_3__.CheckBox, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      required: !!field.required,
      defaultValue: attendee?.acf[field.name] || field.default_value,
      handleFocus: handleAttendeeSearchFocus
    }), field.type === 'number' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      defaultValue: attendee?.acf[field.name] || field.default_value,
      required: !!field.required,
      handleFocus: handleAttendeeSearchFocus
    }), field.type === 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_acf_inputs__WEBPACK_IMPORTED_MODULE_3__.SelectInput, {
      id: field.key,
      name: `attendees[${props.index}][${field.prefix}][${field.name}]`,
      disabled: props.disabled,
      required: !!field.required,
      defaultValue: attendee?.acf[field.name] || field.default_value || "",
      handleFocus: handleAttendeeSearchFocus
    }, Object.keys(field.choices).map((key, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        key: key,
        value: field.name === 'local_authority' ? key : field.choices[key]
      }, field.choices[key]);
    })))));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null));
};


/***/ }),

/***/ "./src/attendee-search.js":
/*!********************************!*\
  !*** ./src/attendee-search.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendeeSearch": function() { return /* binding */ AttendeeSearch; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);








const AttendeeSearch = props => {
  const debouncedHandleInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)(handleInput, 500));
  const textInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [searchText, setSearchText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [attendees, setAttendees] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [options, setOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isNil)(props?.options)) {
      setIsLoading(false);
      setOptions(props.options);
    }
  }, [props?.options]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isNil)(props?.defaultValue)) {
      textInput.current.value = props.defaultValue;
    }
  }, [props?.defaultValue]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (attendees?.length) {
      setOptions(formatAttendeesIntoOptions(attendees));
    }
  }, [attendees]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isNil)(searchText)) {
      if (searchText.length > 0) {
        async function runFetch() {
          setIsLoading(true);
          const res = await fetchAttendees(searchText);
          setIsLoading(false);
          if (textInput.current.value && textInput.current.matches(':focus')) {
            setAttendees(res);
          }
        }
        runFetch();
      } else {
        debouncedHandleInput.cancel();
        setOptions([]);
        setIsLoading(false);
      }
    }
  }, [searchText]);
  function handleBlur(e) {
    setIsLoading(false);
  }
  function formatAttendeesIntoOptions(attendees) {
    return attendees.map(attendee => {
      const option = {
        label: attendee.acf[props.acfFieldName],
        value: attendee.id
      };
      if (props?.acfClarifyingFieldName) {
        option.label += `, ${attendee.acf[props.acfClarifyingFieldName]}`;
      }
      return option;
    });
  }
  async function fetchAttendees(searchText) {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchText ? {
      order_id: searchParams.get('post'),
      acf_field_name: props.acfFieldName,
      acf_field_value: searchText
    } : {};
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default().createNonceMiddleware(props.nonce));
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)('/wp/v2/attendee', query)
    });
  }
  function handleInput(e) {
    textInput.current.value = e.target.value;
    setSearchText(e.target.value);
  }
  function handleSelect(value) {
    textInput.current.value = value;
    const attendee = attendees.find(attendee => attendee.id === parseInt(value));
    props.handleSelect(attendee);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "description"
  }, props.helpText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: props.name,
    id: props.id,
    type: "text",
    ref: textInput,
    maxlength: props?.maxlength || 32,
    minlength: props?.minlength || 1,
    defaultValue: props?.defaultValue,
    placeholder: props?.placeholder,
    required: props?.required || false,
    pattern: props?.pattern,
    readonly: props?.readonly || false,
    disabled: props?.disabled || false,
    onChange: debouncedHandleInput,
    onBlur: handleBlur,
    onFocus: props.handleFocus
  }), isLoading && options.length === 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), !isLoading && options.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    options: options,
    onChange: handleSelect
  }));
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
/* harmony import */ var _order_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-utils */ "./src/order-utils.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-utils */ "./src/form-utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);










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
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props?.quantity > 0) {
      setQuantity(parseInt(props.quantity));
    } else {
      setNotice({
        status: 'warning',
        message: 'Please add a product to your order'
      });
    }
  }, [props.quantity]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_6__.isNil)(props.status) && ['attendees', 'waiting-list'].includes(props.status)) {
      setSubmitButtonDisabled(false);
    }
  }, [props.status]);

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
    return (0,lodash__WEBPACK_IMPORTED_MODULE_6__.range)(quantity).map(index => {
      return createAttendeesRequestBody(index, form, groupId, orderId);
    });
  }

  /**
   * @todo refactor groups-read, order_ids and product_ids meta
   */
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
          'groups-read': formData.has(`attendees[${index}]['meta']['groups-read']`) ? [...new Set(formData.get(`attendees[${index}]['meta']['groups-read']`).split(',').map(Number).filter(Number).concat(parseInt(props.groupId)))] : [parseInt(props.groupId)],
          'order_ids': formData.has(`attendees[${index}]['meta']['order_ids']`) ? [...new Set(formData.get(`attendees[${index}]['meta']['order_ids']`).split(',').map(Number).filter(Number).concat(props.order.id))] : [props.order.id],
          'product_ids': formData.has(`attendees[${index}]['meta']['product_ids']`) ? [...new Set(formData.get(`attendees[${index}]['meta']['product_ids']`).split(',').map(Number).filter(Number).concat(parseInt(props.productId)))] : [parseInt(props.productId)]
        },
        acf: Object.assign(Object.fromEntries(extractAttendeeByIndex(index, form)))
      }
    };
  }
  function createOrderUpdateRequestBody(orderId, status, attendeeIds) {
    const body = {
      path: `/wp/v2/shop_order/${orderId}`,
      method: 'PUT',
      data: {
        id: orderId,
        status,
        meta: {
          'attendee_ids': [...new Set(attendeeIds)]
        }
      }
    };
    return body;
  }
  function extractAttendeeIdsFromResponse(attendeeResponses) {
    return attendeeResponses.map(res => parseInt(res.body.id));
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
      setSubmitButtonDisabled(true);
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
      const orderRes = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()(createOrderUpdateRequestBody(props.order.id, (0,_order_utils__WEBPACK_IMPORTED_MODULE_4__.hasAttendees)(props.order) || (0,_order_utils__WEBPACK_IMPORTED_MODULE_4__.isWaitingOrder)(props.order) ? props.order.status : 'wc-pending', attendeeIds));
      setNotice({
        status: 'success',
        message: `Updated attendees. Redirecting to ${(0,_order_utils__WEBPACK_IMPORTED_MODULE_4__.isWaitingOrder)(props.order) ? 'order list' : 'payment tab'}...`
      });
      document.location.assign((0,_order_utils__WEBPACK_IMPORTED_MODULE_4__.isWaitingOrder)(props.order) ? `/wp-admin/edit.php?post_type=shop_order` : `/wp-admin/post.php?post=${props.order.id}&action=edit&tab=payment`);
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setSubmitButtonDisabled(false);
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
  }, props?.quantity > 0 && (0,lodash__WEBPACK_IMPORTED_MODULE_6__.range)(quantity).map(index => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_attendee_fields__WEBPACK_IMPORTED_MODULE_3__.AttendeeFields, {
      fields: props.fields,
      attendee: props.attendees[index],
      index: index,
      disabled: isSubmitButtonDisabled,
      nonce: props.nonce
    });
  }), props?.quantity > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: isSubmitButtonDisabled,
    type: "submit",
    class: "button alt save_order wp-element-button",
    name: "save",
    value: "Create"
  }, "Save attendees"), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null))))));
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);







/**
 * @param { number } productId
 * @param { number } groupId
 * @param { string } apiPath Group API path
 * @param { string } nonce
 * @param { function } handleGroupSelect
 */
const GroupSelector = props => {
  const [groupId, setGroupId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [groups, setGroups] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNil)(props.disabled)) {
      setIsDisabled(props.disabled);
    }
  }, [props?.disabled]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(props.groupId)) {
      setGroupId(props.groupId);
    }
  }, [props?.groupId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNil)(props.productId)) {
      async function runFetch() {
        try {
          setIsLoading(true);
          _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
          const groups = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
            path: `${props.apiPath}/${props.productId}`,
            method: 'GET'
          });
          if (!groups.length) {
            setNotice({
              status: 'warning',
              message: 'You are not a member of any groups.'
            });
          }
          setGroups(groups);
          props.onFetch(groups);
        } catch (e) {
          setNotice({
            status: 'error',
            message: e.message
          });
          console.error(e);
        }
        setIsLoading(false);
      }
      runFetch();
    }
  }, [props?.productId]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: props.id,
    disabled: props.disabled,
    required: true,
    onChange: props.onChange,
    value: groupId,
    defaultValue: groupId
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-panel */ "./src/product-panel.js");
/* harmony import */ var _status_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-selector */ "./src/status-selector.js");
/* harmony import */ var _order_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-utils */ "./src/order-utils.js");









/**
 * @param { string } nonce
 * @param { string } groupApiPath
 * @param { string } orderApiPath
 * @param { string } productApiPath
 * @param { string } title 
 * @param { string } status
 * @param { object } order
 * @param { number } orderId
 * @param { number } productId
 * @param { number } userId
 * @param { object } user
 * @param { object } userMeta
 * @param { string } currency
 */
const OrderForm = props => {
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [buttonText, setButtonText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("Create enrollment");
  const oldStatus = props.order.status;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [props?.order]);

  /**
   * Set initial button text
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNil)(props?.status)) {
      setStatus(props.status);
      if (!(0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isDraftStatus)(props.status)) {
        setButtonText('Update enrollment');
      }
    }
  }, [props?.status]);

  /**
   * Change button text
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isWaitingStatus)(status)) {
      setButtonText("Add enrollment to waiting list");
    } else {
      if ((0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isDraftStatus)(props?.status)) {
        setButtonText("Create enrollment");
      } else {
        setButtonText("Update enrollment");
      }
    }
  }, [status]);
  function determineStatus(formData) {
    if ((0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isDraftStatus)(status)) {
      return 'attendees';
    }
    return status;
  }
  function parseFormData(formData) {
    const body = {
      billing: {},
      shipping: {},
      currency: formData.get('currency'),
      customer_id: formData.get('customer_id'),
      status: determineStatus(formData),
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
     * @todo refactor
     */
    if ((0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isExistingOrder)(props?.order)) {
      const lineItem = (0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.getLineItemByProductId)(body.line_items[0].product_id, props.order);
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
    const method = (0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isExistingOrder)(props.order) ? 'PUT' : 'POST';
    try {
      setNotice(null);
      setIsLoading(true);
      setSubmitButtonDisabled(true);
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
      props.order = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: (0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isExistingOrder)(props.order) ? `/wc/v3/orders/${props.order.id}` : `/wc/v3/orders`,
        method,
        data
      });
      setNotice({
        status: 'success',
        message: 'Updated enrollment. Redirecting to attendees tab...'
      });

      // if the order is being moved from waiting-list to pending 
      if ((0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isWaitingStatus)(oldStatus) && (0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isPendingStatus)(status)) {
        setNotice({
          status: 'success',
          message: 'Updated enrollment. Client will be notified.'
        });
        setIsLoading(false);
      } else {
        setNotice({
          status: 'success',
          message: 'Updated enrollment. Redirecting...'
        });
      }
      switch (props.order.status) {
        case 'waiting-list':
        case 'attendees':
          document.location.assign(`/wp-admin/post.php?post=${props.order.id}&action=edit&tab=attendees`);
          break;
        case 'pending':
          document.location.assign(`/wp-admin/post.php?post=${props.order.id}&action=edit&tab=payment`);
          break;
        default:
          document.location.reload();
      }
    } catch (e) {
      setNotice({
        status: 'error',
        message: e.message
      });
      console.error(e);
      setIsLoading(false);
      setSubmitButtonDisabled(false);
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Order"), !(0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isDraftStatus)(props.status) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "form-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "order_status"
  }, "Status", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_status_selector__WEBPACK_IMPORTED_MODULE_5__.StatusSelector, {
    id: "order_status",
    disabled: isSubmitButtonDisabled,
    name: "order_status",
    user: props?.user,
    order: props?.order,
    status: status,
    setStatus: setStatus,
    apiPath: props.orderApiPath,
    nonce: props.nonce
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_panel__WEBPACK_IMPORTED_MODULE_4__.ProductPanel, {
    productId: props?.order?.line_items[0]?.product_id || props.productId,
    nonce: props.nonce,
    setSubmitButtonDisabled: setSubmitButtonDisabled,
    groupApiPath: props.groupApiPath,
    productApiPath: props.productApiPath,
    order: props.order,
    setStatus: setStatus,
    user: props?.user
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: isSubmitButtonDisabled,
    type: "submit",
    class: "button save_order wp-element-button button-primary",
    name: "save",
    value: "Create"
  }, buttonText), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)))));
};


/***/ }),

/***/ "./src/order-utils.js":
/*!****************************!*\
  !*** ./src/order-utils.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findOrderMetaByKey": function() { return /* binding */ findOrderMetaByKey; },
/* harmony export */   "getLineItemByProductId": function() { return /* binding */ getLineItemByProductId; },
/* harmony export */   "hasAttendees": function() { return /* binding */ hasAttendees; },
/* harmony export */   "isDraftOrder": function() { return /* binding */ isDraftOrder; },
/* harmony export */   "isDraftStatus": function() { return /* binding */ isDraftStatus; },
/* harmony export */   "isExistingOrder": function() { return /* binding */ isExistingOrder; },
/* harmony export */   "isPendingStatus": function() { return /* binding */ isPendingStatus; },
/* harmony export */   "isWaitingOrder": function() { return /* binding */ isWaitingOrder; },
/* harmony export */   "isWaitingStatus": function() { return /* binding */ isWaitingStatus; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function findOrderMetaByKey(key, orderMeta) {
  return orderMeta.find(item => item.key === key);
}
function getLineItemByProductId(productId, order) {
  return order.line_items.find(item => item.product_id === productId);
}
function isExistingOrder(order) {
  return order.line_items.find(item => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(item?.product_id));
}
function isWaitingOrder(order) {
  return isWaitingStatus(order.status);
}
function isWaitingStatus(status) {
  return status === 'waiting-list';
}
function isPendingStatus(status) {
  return status === 'pending';
}
function isDraftOrder(order) {
  return isDraftStatus(order.status);
}
function isDraftStatus(status) {
  return status === 'auto-draft';
}
function hasAttendees(order) {
  return Array.isArray(order.attendees) && order.attendees > 0;
}


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
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-selector */ "./src/product-selector.js");
/* harmony import */ var _group_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-selector */ "./src/group-selector.js");
/* harmony import */ var _product_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-utils */ "./src/product-utils.js");
/* harmony import */ var _order_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-utils */ "./src/order-utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);










/**
 * @param { object } order
 */
const ProductPanel = props => {
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [price, setPrice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [quantity, setQuantity] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [total, setTotal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [products, setProducts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [spaces, setSpaces] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [stock, setStock] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [productId, setProductId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [groupId, setGroupId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [product, setProduct] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isProductFormDisabled, setProductFormDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  /**
   *  @see handleProductSelect()
   *  @see handlePreselectedProduct()
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_7__.isNil)(productId) && products?.length > 0) {
      const product = (0,_product_utils__WEBPACK_IMPORTED_MODULE_5__.findProductById)(productId, products);
      reset();
      setProduct(product);
    }
  }, [productId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_7__.isNull)(groupId) && !(0,lodash__WEBPACK_IMPORTED_MODULE_7__.isNull)(product)) {
      const groupQuota = (0,_product_utils__WEBPACK_IMPORTED_MODULE_5__.findGroupQuota)(groupId, (0,_product_utils__WEBPACK_IMPORTED_MODULE_5__.findGroupQuotas)(product.meta_data));
      const availableSpaces = (0,_product_utils__WEBPACK_IMPORTED_MODULE_5__.calculateAvailableSpaces)(product.stock_quantity || product.quantity, groupQuota);
      setSpaces(availableSpaces);
    }
  }, [groupId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_7__.isNil)(spaces)) {
      const stock = parseInt(product.stock_quantity);
      const price = parseInt(product.price);
      setPrice(price);
      setStock(stock);
      if (spaces < 1 && stock > 0) {
        props.setStatus("waiting-list");
      } else {
        props.setStatus(props.order.status);
      }
      if (!(0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isExistingOrder)(props.order)) {
        if (!stock) {
          setNotice({
            status: "error",
            message: "Out of stock"
          });
        } else {
          setNotice({
            status: parseInt(spaces) > 0 ? "info" : "warning",
            message: `${spaces} spaces available.`
          });
        }
      }
    }
  }, [spaces]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_7__.isObject)(product) && (0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isExistingOrder)(props.order)) {
      const lineItem = (0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.getLineItemByProductId)(product.id, props.order);
      setQuantity(lineItem.quantity);
      setTotal(product.price * lineItem.quantity);
    }
  }, [product]);
  function reset() {
    setTotal(null);
    setQuantity(null);
    setNotice(null);
    setPrice(null);
    setStock(null);
    setGroupId(null);
  }

  /**
   * Given it is a new order and productId has been preselected via URL query product, then product id is changed and new product id set
   * Given it is an existing order and order has a line item with product id, then product id is changed and a new product id is set
   */
  function handlePreselectedProduct(productId) {
    productId = parseInt(productId);
    if (productId) {
      setProductId(productId);
    }
  }
  function handlePreselectedGroup(groupId) {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_7__.isNil)(groupId)) {
      setGroupId(groupId);
    }
  }

  /**
   * Given it is a new order, when product is selected from dropdown, then productId is changed and new product is set
   */
  function handleProductSelect(e) {
    setProductId(e.target.value);
  }

  /**
   * Given it is a new order, when group is selected from dropdown, then groupId is changed
   */
  function handleGroupSelect(e) {
    setGroupId(e.target.value);
  }

  /**
   * @todo add groupUtils for extracting group id
   */
  function handleFetchedGroups(groups) {
    const orderMeta = (0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.findOrderMetaByKey)('groups-read', props.order.meta_data);
    handlePreselectedGroup(orderMeta?.value);
    if (props?.user?.allcaps?.view_others_shop_orders) {
      props.setSubmitButtonDisabled(false);
    }
  }
  function handleFetchedProducts(products) {
    setProducts(products);
    handlePreselectedProduct(props.productId);
    const orderMeta = (0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.findOrderMetaByKey)('groups-read', props.order.meta_data);
    handlePreselectedGroup(orderMeta?.value);
    if (!(0,_order_utils__WEBPACK_IMPORTED_MODULE_6__.isExistingOrder)(props.order)) {
      setProductFormDisabled(false);
      props.setSubmitButtonDisabled(false);
    }
  }
  function handleQuantitySelect(e) {
    const quantity = parseInt(e.target.value);
    setQuantity(quantity);
    setTotal(quantity * price);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Course"), notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: notice.status,
    isDismissable: true,
    onDismiss: () => setNotice(null)
  }, notice.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "form-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "product"
  }, "Course", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_selector__WEBPACK_IMPORTED_MODULE_3__.ProductSelector, {
    id: "product",
    name: "product",
    disabled: isProductFormDisabled,
    groupId: groupId,
    productId: productId,
    apiPath: props.productApiPath,
    nonce: props.nonce,
    setNotice: setNotice,
    onChange: handleProductSelect,
    onFetch: handleFetchedProducts,
    products: products
  })))), props?.lineItem?.id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "line_item_id",
    value: props.lineItem.id
  }), product && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "form-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "order_group"
  }, "Group", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_group_selector__WEBPACK_IMPORTED_MODULE_4__.GroupSelector, {
    productId: productId,
    disabled: isProductFormDisabled,
    groupId: groupId,
    id: "order_group",
    name: "order_group",
    apiPath: props.groupApiPath,
    nonce: props.nonce,
    onChange: handleGroupSelect,
    onFetch: handleFetchedGroups
  })))), !!price && productId > 0 && groupId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "form-row"
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
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "form-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "quantity"
  }, "Quantity", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "required"
  }, " *")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "quantity",
    disabled: isProductFormDisabled,
    step: "1",
    min: "1",
    max: spaces > 0 ? spaces : stock,
    autocomplete: "off",
    placeholder: "0",
    onChange: handleQuantitySelect,
    value: quantity,
    required: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: "quantity",
    value: quantity
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "form-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "form-row"
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
  })))))));
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);







/**
 * @param { number } productId
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
  const [productId, setProductId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNil)(props.disabled)) {
      setIsDisabled(props.disabled);
    }
  }, [props?.disabled]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNil)(props?.productId)) {
      setProductId(props.productId);
    }
  }, [props?.productId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function runFetch() {
      try {
        setIsLoading(true);
        setProductId(null);
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(props.nonce));
        const result = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: `${props.apiPath}`,
          method: 'GET'
        });
        if (!result.length) {
          props.setNotice({
            status: 'error',
            message: 'No courses are available.'
          });
        }
        props.onFetch(result);
      } catch (e) {
        props.setNotice({
          status: 'error',
          message: e.message
        });
        console.error(e);
      }
      setIsLoading(false);
    }
    runFetch();
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), !isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: props.id,
    disabled: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isBoolean)(props.disabled) ? props.disabled : isDisabled,
    required: true,
    onChange: props.onChange,
    value: productId,
    defaultValue: productId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Please select"), props.products.map(product => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: product.id.toString(),
      value: product.id
    }, product.name);
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: props.name,
    value: props?.productId
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
/* harmony export */   "findGroupQuotas": function() { return /* binding */ findGroupQuotas; },
/* harmony export */   "findProductById": function() { return /* binding */ findProductById; }
/* harmony export */ });
function findProductById(productId, products) {
  return products.find(product => product.id === parseInt(productId));
}
function findGroupQuotas(metaData) {
  return metaData.filter(item => {
    return /_quotas_field_[\d]+/.test(item.key);
  });
}
function findGroupQuota(groupId, quotas) {
  const group = quotas.find(quota => {
    return quota.key === `_quotas_field_${groupId}`;
  });
  return group === undefined ? '' : group.value;
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
/* harmony import */ var _order_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-utils.js */ "./src/order-utils.js");







const StatusSelector = props => {
  const [statuses, setStatuses] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [notice, setNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isDisabled, setIsDisabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  /**
   * Default order status
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props?.user?.allcaps?.view_others_shop_orders) {
      setIsDisabled(props.disabled);
    }
  }, [props?.disabled]);

  /**
   * User changed the order status
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [props.status]);

  /**
   * Fetch list of statuses
   */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function runFetch() {
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
    }
    runFetch();
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
    disabled: props.disabled,
    required: true,
    value: props.status,
    onChange: handleChange
  }, (0,_order_utils_js__WEBPACK_IMPORTED_MODULE_4__.isDraftStatus)(props.status) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    value: "auto-draft"
  }, "Draft"), !(0,_order_utils_js__WEBPACK_IMPORTED_MODULE_4__.isDraftStatus)(props.status) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Please select"), statuses.map(status => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_option_js__WEBPACK_IMPORTED_MODULE_3__.Option, {
    value: status.id
  }, status.name))), !(0,_order_utils_js__WEBPACK_IMPORTED_MODULE_4__.isDraftStatus)(props.status) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "hidden",
    name: props.name,
    value: props?.status
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

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/luxon/src/datetime.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/datetime.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DateTime; },
/* harmony export */   "friendlyDateTime": function() { return /* binding */ friendlyDateTime; }
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interval.js */ "./node_modules/luxon/src/interval.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ "./node_modules/luxon/src/info.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_diff_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./impl/diff.js */ "./node_modules/luxon/src/impl/diff.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./impl/tokenParser.js */ "./node_modules/luxon/src/impl/tokenParser.js");
/* harmony import */ var _impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./impl/conversions.js */ "./node_modules/luxon/src/impl/conversions.js");
/* harmony import */ var _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./impl/formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");

















const INVALID = "Invalid DateTime";
const MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("unsupported zone", `the zone "${zone.name}" is not supported`);
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid,
  };
  return new DateTime({ ...current, ...alts, old: current });
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  const o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  const d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds(),
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.objToLocalTS)(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  const oPre = inst.o,
    year = inst.c.year + Math.trunc(dur.years),
    month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
    c = {
      ...inst.c,
      year,
      month,
      day:
        Math.min(inst.c.day, (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(year, month)) +
        Math.trunc(dur.days) +
        Math.trunc(dur.weeks) * 7,
    },
    millisToAdd = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds,
    }).as("milliseconds"),
    localTS = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.objToLocalTS)(c);

  let [ts, o] = fixOffset(localTS, oPre, inst.zone);

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts, o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if ((parsed && Object.keys(parsed).length !== 0) || parsedZone) {
    const interpretationZone = parsedZone || zone,
      inst = DateTime.fromObject(parsed, {
        ...opts,
        zone: interpretationZone,
        specificOffset,
      });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("unparsable", `the input "${text}" can't be parsed as ${format}`)
    );
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid
    ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(_impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].create("en-US"), {
        allowZ,
        forceSimple: true,
      }).formatDateTimeFromString(dt, format)
    : null;
}

function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.month);
    c += "-";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.day);
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.month);
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.day);
  }
  return c;
}

function toISOTime(
  o,
  extended,
  suppressSeconds,
  suppressMilliseconds,
  includeOffset,
  extendedZone
) {
  let c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.hour);
  if (extended) {
    c += ":";
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.minute);
  }

  if (o.c.second !== 0 || !suppressSeconds) {
    c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(-o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(o.o / 60));
      c += ":";
      c += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.padStart)(Math.trunc(o.o % 60));
    }
  }

  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}

// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  };

// Units in the supported calendars, sorted by bigness
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

// standardize case and plurality in units
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[unit.toLowerCase()];

  if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  const zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
    loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(opts),
    tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now();

  let ts, o;

  // assume we have the higher-order units
  if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(obj.year)) {
    for (const u of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    const invalid = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidGregorianData)(obj) || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidTimeData)(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }

    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }

  return new DateTime({ ts, zone, loc, o });
}

function diffRelative(start, end, opts) {
  const round = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(opts.round) ? true : opts.round,
    format = (c, unit) => {
      c = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.roundTo)(c, round || opts.calendary ? 0 : 2, true);
      const formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
    differ = (unit) => {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  let opts = {},
    args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
class DateTime {
  /**
   * @access private
   */
  constructor(config) {
    const zone = config.zone || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone;

    let invalid =
      config.invalid ||
      (Number.isNaN(config.ts) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("invalid input") : null) ||
      (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */
    this.ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(config.ts) ? _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now() : config.ts;

    let c = null,
      o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"]("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
     * @access private
     */
    this._zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].create();
    /**
     * @access private
     */
    this.invalid = invalid;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
    /**
     * @access private
     */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new DateTime({});
  }

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;

    opts.zone = _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(date, options = {}) {
    const ts = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isDate)(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
    });
  }

  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(milliseconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(milliseconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(seconds, options = {}) {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(seconds)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(options.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone),
        loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(opts.zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    const tsNow = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].now(),
      offsetProvis = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(opts.specificOffset)
        ? opts.specificOffset
        : zoneToUse.offset(tsNow),
      normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.normalizeObject)(obj, normalizeUnit),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber,
      loc = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(opts);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    const useWeekData = definiteWeekDef || (normalized.weekday && !containsGregor);

    // configure ourselves to deal with gregorian dates or week stuff
    let units,
      defaultValues,
      objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    const higherOrderInvalid = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidWeekData)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidOrdinalData)(normalized)
        : (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidGregorianData)(normalized),
      invalid = higherOrderInvalid || (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidTimeData)(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    // compute the actual time
    const gregorian = useWeekData
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.weekToGregorian)(normalized)
        : containsOrdinal
        ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.ordinalToGregorian)(normalized)
        : normalized,
      [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse),
      inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc,
      });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        "mismatched weekday",
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
      );
    }

    return inst;
  }

  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseISODate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }

  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseRFC2822Date)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }

  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseHTTPDate)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }

  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(text, fmt, opts = {}) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(text) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(fmt)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("fromFormat requires an input string and a format");
    }

    const { locale = null, numberingSystem = null } = opts,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      }),
      [vals, parsedZone, specificOffset, invalid] = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.parseFromTokens)(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }

  /**
   * @deprecated use fromFormat instead
   */
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }

  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_10__.parseSQL)(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }

  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_15__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }

  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(o) {
    return (o && o.isLuxonDateTime) || false;
  }

  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.formatOptsToTokens)(formatOpts, _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => (t ? t.val : null)).join("");
  }

  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(fmt, localeOpts = {}) {
    const expanded = (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.expandMacroTokens)(_impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].parseFormat(fmt), _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromObject(localeOpts));
    return expanded.map((t) => t.val).join("");
  }

  // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(unit) {
    return this[unit];
  }

  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }

  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }

  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }

  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }

  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }

  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }

  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }

  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }

  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }

  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }

  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }

  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }

  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }

  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }

  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(this.c).ordinal : NaN;
  }

  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].months("short", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].months("long", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? _info_js__WEBPACK_IMPORTED_MODULE_3__["default"].weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }

  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }

  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return (
        this.offset > this.set({ month: 1, day: 1 }).offset ||
        this.offset > this.set({ month: 5 }).offset
      );
    }
  }

  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isLeapYear)(this.year);
  }

  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(this.year, this.month);
  }

  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInYear)(this.year) : NaN;
  }

  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.weeksInWeekYear)(this.weekYear) : NaN;
  }

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(
      this.loc.clone(opts),
      opts
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }

  // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(offset = 0, opts = {}) {
    return this.setZone(_zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance(offset), opts);
  }

  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
  }

  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_8__.normalizeZone)(zone, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }

  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }

  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }

  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(values) {
    if (!this.isValid) return this;

    const normalized = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.normalizeObject)(values, normalizeUnit),
      settingWeekStuff =
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekYear) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekNumber) ||
        !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.weekday),
      containsOrdinal = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal),
      containsGregorYear = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.year),
      containsGregorMD = !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.month) || !(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    let mixed;
    if (settingWeekStuff) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.weekToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToWeek)(this.c), ...normalized });
    } else if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.ordinal)) {
      mixed = (0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.ordinalToGregorian)({ ...(0,_impl_conversions_js__WEBPACK_IMPORTED_MODULE_12__.gregorianToOrdinal)(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(normalized.day)) {
        mixed.day = Math.min((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.daysInMonth)(mixed.year, mixed.month), mixed.day);
      }
    }

    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }

  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }

  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }

  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(unit) {
    if (!this.isValid) return this;
    const o = {},
      normalizedUnit = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through
      case "quarters":
      case "months":
        o.day = 1;
      // falls through
      case "weeks":
      case "days":
        o.hour = 0;
      // falls through
      case "hours":
        o.minute = 0;
      // falls through
      case "minutes":
        o.second = 0;
      // falls through
      case "seconds":
        o.millisecond = 0;
        break;
      case "milliseconds":
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }

  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(unit) {
    return this.isValid
      ? this.plus({ [unit]: 1 })
          .startOf(unit)
          .minus(1)
      : this;
  }

  // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(formatOpts = _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), formatOpts).formatDateTime(this)
      : INVALID;
  }

  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.loc.clone(opts), opts).formatDateTimeParts(this)
      : [];
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false,
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const ext = format === "extended";

    let c = toISODate(this, ext);
    c += "T";
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }

    return toISODate(this, format === "extended");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = "extended",
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    let c = includePrefix ? "T" : "";
    return (
      c +
      toISOTime(
        this,
        format === "extended",
        suppressSeconds,
        suppressMilliseconds,
        includeOffset,
        extendedZone
      )
    );
  }

  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";

    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }

    return toTechFormat(this, fmt, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }

    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }

  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }

  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }

  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1000) : NaN;
  }

  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }

  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(opts = {}) {
    if (!this.isValid) return {};

    const base = { ...this.c };

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }

  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].invalid("created by diffing an invalid DateTime");
    }

    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };

    const units = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.maybeArray)(unit).map(_duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalizeUnit),
      otherIsLater = otherDateTime.valueOf() > this.valueOf(),
      earlier = otherIsLater ? this : otherDateTime,
      later = otherIsLater ? otherDateTime : this,
      diffed = (0,_impl_diff_js__WEBPACK_IMPORTED_MODULE_9__["default"])(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }

  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }

  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(otherDateTime) {
    return this.isValid ? _interval_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDateTimes(this, otherDateTime) : this;
  }

  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }

  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(other) {
    return (
      this.isValid &&
      other.isValid &&
      this.valueOf() === other.valueOf() &&
      this.zone.equals(other.zone) &&
      this.loc.equals(other.loc)
    );
  }

  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }),
      padding = options.padding ? (this < base ? -options.padding : options.padding) : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit,
    });
  }

  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;

    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true,
    });
  }

  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.bestBy)(dateTimes, (i) => i.valueOf(), Math.min);
  }

  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.bestBy)(dateTimes, (i) => i.valueOf(), Math.max);
  }

  // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options,
      localeToUse = _impl_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      });
    return (0,_impl_tokenParser_js__WEBPACK_IMPORTED_MODULE_11__.explainFromTokens)(localeToUse, text, fmt);
  }

  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }

  // FORMAT PRESETS

  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATE_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.TIME_24_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_SHORT_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_FULL_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return _impl_formats_js__WEBPACK_IMPORTED_MODULE_13__.DATETIME_HUGE_WITH_SECONDS;
  }
}

/**
 * @private
 */
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_7__.isNumber)(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_14__.InvalidArgumentError(
      `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/duration.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/duration.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accurateMatrix": function() { return /* binding */ accurateMatrix; },
/* harmony export */   "casualMatrix": function() { return /* binding */ casualMatrix; },
/* harmony export */   "daysInMonthAccurate": function() { return /* binding */ daysInMonthAccurate; },
/* harmony export */   "daysInYearAccurate": function() { return /* binding */ daysInYearAccurate; },
/* harmony export */   "default": function() { return /* binding */ Duration; },
/* harmony export */   "lowOrderMatrix": function() { return /* binding */ lowOrderMatrix; }
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/regexParser.js */ "./node_modules/luxon/src/impl/regexParser.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");








const INVALID = "Invalid Duration";

// unit conversion constants
const lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
    minutes: { seconds: 60, milliseconds: 60 * 1000 },
    seconds: { milliseconds: 1000 },
  },
  casualMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1000,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1000,
    },

    ...lowOrderMatrix,
  },
  daysInYearAccurate = 146097.0 / 400,
  daysInMonthAccurate = 146097.0 / 4800,
  accurateMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: (daysInYearAccurate * 24) / 4,
      minutes: (daysInYearAccurate * 24 * 60) / 4,
      seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
      milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
    },
    ...lowOrderMatrix,
  };

// units ordered by size
const orderedUnits = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
];

const reverseUnits = orderedUnits.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts, clear = false) {
  // deep merge for vals
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...(alts.values || {}) },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix,
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit],
    raw = fromMap[fromUnit] / conv,
    sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
    // ok, so this is wild, but see the matrix in the tests
    added =
      !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}

// Remove all properties with a value of 0 from an object
function removeZeroes(vals) {
  const newVals = {};
  for (const [key, value] of Object.entries(vals)) {
    if (value !== 0) {
      newVals[key] = value;
    }
  }
  return newVals;
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
class Duration {
  /**
   * @private
   */
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    let matrix = accurate ? accurateMatrix : casualMatrix;

    if (config.matrix) {
      matrix = config.matrix;
    }

    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__["default"].create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.matrix = matrix;
    /**
     * @access private
     */
    this.isLuxonDuration = true;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }

  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${
          obj === null ? "null" : typeof obj
        }`
      );
    }

    return new Duration({
      values: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.normalizeObject)(obj, Duration.normalizeUnit),
      loc: _impl_locale_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix,
    });
  }

  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(durationLike) {
    if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(
        `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
      );
    }
  }

  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__.parseISODuration)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(text, opts) {
    const [parsed] = (0,_impl_regexParser_js__WEBPACK_IMPORTED_MODULE_4__.parseISOTimeOnly)(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_2__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_6__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }

  /**
   * @private
   */
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[unit ? unit.toLowerCase() : unit];

    if (!normalized) throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidUnitError(unit);

    return normalized;
  }

  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(o) {
    return (o && o.isLuxonDuration) || false;
  }

  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false,
    };
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(opts = {}) {
    const l = orderedUnits
      .map((unit) => {
        const val = this.values[unit];
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(val)) {
          return null;
        }
        return this.loc
          .numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) })
          .format(val);
      })
      .filter((n) => n);

    return this.loc
      .listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts })
      .format(l);
  }

  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;

    let s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.roundTo)(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;

    const millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;

    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts,
    };

    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");

    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    let str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }

  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }

  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration),
      result = {};

    for (const k of orderedUnits) {
      if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(dur.values, k) || (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, { values: result }, true);
  }

  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }

  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.asNumber)(fn(this.values[k], k));
    }
    return clone(this, { values: result }, true);
  }

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }

  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(values) {
    if (!this.isValid) return this;

    const mixed = { ...this.values, ...(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.normalizeObject)(values, Duration.normalizeUnit) };
    return clone(this, { values: mixed });
  }

  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc, matrix, conversionAccuracy };
    return clone(this, opts);
  }

  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }

  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, { values: vals }, true);
  }

  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const vals = removeZeroes(this.normalize().shiftToAll().toObject());
    return clone(this, { values: vals }, true);
  }

  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...units) {
    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map((u) => Duration.normalizeUnit(u));

    const built = {},
      accumulated = {},
      vals = this.toObject();
    let lastUnit;

    for (const k of orderedUnits) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;

        let own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }

        // plus anything that's already in this unit
        if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(vals[k])) {
          own += vals[k];
        }

        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000;

        // plus anything further down the chain that should be rolled up in to this
        for (const down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
        // otherwise, keep it in the wings to boil it later
      } else if ((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] +=
          key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, { values: built }, true).normalize();
  }

  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    if (!this.isValid) return this;
    return this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    );
  }

  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone(this, { values: negated }, true);
  }

  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }

  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }

  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }

  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }

  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }

  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }

  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }

  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }

  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }

  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (const u of orderedUnits) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/errors.js":
/*!******************************************!*\
  !*** ./node_modules/luxon/src/errors.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConflictingSpecificationError": function() { return /* binding */ ConflictingSpecificationError; },
/* harmony export */   "InvalidArgumentError": function() { return /* binding */ InvalidArgumentError; },
/* harmony export */   "InvalidDateTimeError": function() { return /* binding */ InvalidDateTimeError; },
/* harmony export */   "InvalidDurationError": function() { return /* binding */ InvalidDurationError; },
/* harmony export */   "InvalidIntervalError": function() { return /* binding */ InvalidIntervalError; },
/* harmony export */   "InvalidUnitError": function() { return /* binding */ InvalidUnitError; },
/* harmony export */   "ZoneIsAbstractError": function() { return /* binding */ ZoneIsAbstractError; }
/* harmony export */ });
// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
 * @private
 */
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class ConflictingSpecificationError extends LuxonError {}

/**
 * @private
 */
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
 * @private
 */
class InvalidArgumentError extends LuxonError {}

/**
 * @private
 */
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/conversions.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/conversions.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gregorianToOrdinal": function() { return /* binding */ gregorianToOrdinal; },
/* harmony export */   "gregorianToWeek": function() { return /* binding */ gregorianToWeek; },
/* harmony export */   "hasInvalidGregorianData": function() { return /* binding */ hasInvalidGregorianData; },
/* harmony export */   "hasInvalidOrdinalData": function() { return /* binding */ hasInvalidOrdinalData; },
/* harmony export */   "hasInvalidTimeData": function() { return /* binding */ hasInvalidTimeData; },
/* harmony export */   "hasInvalidWeekData": function() { return /* binding */ hasInvalidWeekData; },
/* harmony export */   "ordinalToGregorian": function() { return /* binding */ ordinalToGregorian; },
/* harmony export */   "weekToGregorian": function() { return /* binding */ weekToGregorian; }
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _invalid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalid.js */ "./node_modules/luxon/src/impl/invalid.js");



const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new _invalid_js__WEBPACK_IMPORTED_MODULE_1__["default"](
    "unit out of range",
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
  );
}

function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));

  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  const js = d.getUTCDay();

  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  const table = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(year) ? leapLadder : nonLeapLadder,
    month0 = table.findIndex((i) => i < ordinal),
    day = ordinal - table[month0];
  return { month: month0 + 1, day };
}

/**
 * @private
 */

function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj,
    ordinal = computeOrdinal(year, month, day),
    weekday = dayOfWeek(year, month, day);

  let weekNumber = Math.floor((ordinal - weekday + 10) / 7),
    weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(weekYear);
  } else if (weekNumber > (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return { weekYear, weekNumber, weekday, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(gregObj) };
}

function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData,
    weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
    yearInDays = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(weekYear);

  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
    year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(weekYear);
  } else {
    year = weekYear;
  }

  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(weekData) };
}

function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(gregData) };
}

function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.timeObject)(ordinalData) };
}

function hasInvalidWeekData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.weekYear),
    validWeek = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.weekNumber, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.weeksInWeekYear)(obj.weekYear)),
    validWeekday = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}

function hasInvalidOrdinalData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.year),
    validOrdinal = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.ordinal, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}

function hasInvalidGregorianData(obj) {
  const validYear = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(obj.year),
    validMonth = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.month, 1, 12),
    validDay = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(obj.day, 1, (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.daysInMonth)(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}

function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour =
      (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(hour, 0, 23) ||
      (hour === 24 && minute === 0 && second === 0 && millisecond === 0),
    validMinute = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(minute, 0, 59),
    validSecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(second, 0, 59),
    validMillisecond = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.integerBetween)(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/diff.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration.js */ "./node_modules/luxon/src/duration.js");


function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(),
    ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(_duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - (days % 7)) / 7;
      },
    ],
    ["days", dayDiff],
  ];

  const results = {};
  const earlier = cursor;
  let lowestOrder, highWater;

  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;

      results[unit] = differ(cursor, later);
      highWater = earlier.plus(results);

      if (highWater > later) {
        results[unit]--;
        cursor = earlier.plus(results);
      } else {
        cursor = highWater;
      }
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);

  const remainingMillis = later - cursor;

  const lowerOrderUnits = units.filter(
    (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
  );

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  const duration = _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    return _duration_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromMillis(remainingMillis, opts)
      .shiftTo(...lowerOrderUnits)
      .plus(duration);
  } else {
    return duration;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/digits.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/digits.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "digitRegex": function() { return /* binding */ digitRegex; },
/* harmony export */   "parseDigits": function() { return /* binding */ parseDigits; }
/* harmony export */ });
const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d",
};

const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};

const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");

function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}

function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/english.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/english.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eraForDateTime": function() { return /* binding */ eraForDateTime; },
/* harmony export */   "eras": function() { return /* binding */ eras; },
/* harmony export */   "erasLong": function() { return /* binding */ erasLong; },
/* harmony export */   "erasNarrow": function() { return /* binding */ erasNarrow; },
/* harmony export */   "erasShort": function() { return /* binding */ erasShort; },
/* harmony export */   "formatRelativeTime": function() { return /* binding */ formatRelativeTime; },
/* harmony export */   "formatString": function() { return /* binding */ formatString; },
/* harmony export */   "meridiemForDateTime": function() { return /* binding */ meridiemForDateTime; },
/* harmony export */   "meridiems": function() { return /* binding */ meridiems; },
/* harmony export */   "monthForDateTime": function() { return /* binding */ monthForDateTime; },
/* harmony export */   "months": function() { return /* binding */ months; },
/* harmony export */   "monthsLong": function() { return /* binding */ monthsLong; },
/* harmony export */   "monthsNarrow": function() { return /* binding */ monthsNarrow; },
/* harmony export */   "monthsShort": function() { return /* binding */ monthsShort; },
/* harmony export */   "weekdayForDateTime": function() { return /* binding */ weekdayForDateTime; },
/* harmony export */   "weekdays": function() { return /* binding */ weekdays; },
/* harmony export */   "weekdaysLong": function() { return /* binding */ weekdaysLong; },
/* harmony export */   "weekdaysNarrow": function() { return /* binding */ weekdaysNarrow; },
/* harmony export */   "weekdaysShort": function() { return /* binding */ weekdaysShort; }
/* harmony export */ });
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");



function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

/**
 * @private
 */

const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}

const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}

const meridiems = ["AM", "PM"];

const erasLong = ["Before Christ", "Anno Domini"];

const erasShort = ["BC", "AD"];

const erasNarrow = ["B", "A"];

function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."],
  };

  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
      default: // fall through
    }
  }

  const isInPast = Object.is(count, -0) || count < 0,
    fmtValue = Math.abs(count),
    singular = fmtValue === 1,
    lilUnits = units[unit],
    fmtUnit = narrow
      ? singular
        ? lilUnits[1]
        : lilUnits[2] || lilUnits[1]
      : singular
      ? units[unit][0]
      : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  const filtered = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.pick)(knownFormat, [
      "weekday",
      "era",
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "timeZoneName",
      "hourCycle",
    ]),
    key = stringify(filtered),
    dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
  switch (key) {
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_SHORT):
      return "M/d/yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MED):
      return "LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_FULL):
      return "LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATE_HUGE):
      return "EEEE, LLLL d, yyyy";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_SIMPLE):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SECONDS):
      return "h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_SHORT_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_WITH_LONG_OFFSET):
      return "h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_SIMPLE):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SECONDS):
      return "HH:mm:ss";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED):
      return "LLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE):
      return dateTimeHuge;
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";
    case stringify(_formats_js__WEBPACK_IMPORTED_MODULE_0__.DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return dateTimeHuge;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/formats.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/formats.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATETIME_FULL": function() { return /* binding */ DATETIME_FULL; },
/* harmony export */   "DATETIME_FULL_WITH_SECONDS": function() { return /* binding */ DATETIME_FULL_WITH_SECONDS; },
/* harmony export */   "DATETIME_HUGE": function() { return /* binding */ DATETIME_HUGE; },
/* harmony export */   "DATETIME_HUGE_WITH_SECONDS": function() { return /* binding */ DATETIME_HUGE_WITH_SECONDS; },
/* harmony export */   "DATETIME_MED": function() { return /* binding */ DATETIME_MED; },
/* harmony export */   "DATETIME_MED_WITH_SECONDS": function() { return /* binding */ DATETIME_MED_WITH_SECONDS; },
/* harmony export */   "DATETIME_MED_WITH_WEEKDAY": function() { return /* binding */ DATETIME_MED_WITH_WEEKDAY; },
/* harmony export */   "DATETIME_SHORT": function() { return /* binding */ DATETIME_SHORT; },
/* harmony export */   "DATETIME_SHORT_WITH_SECONDS": function() { return /* binding */ DATETIME_SHORT_WITH_SECONDS; },
/* harmony export */   "DATE_FULL": function() { return /* binding */ DATE_FULL; },
/* harmony export */   "DATE_HUGE": function() { return /* binding */ DATE_HUGE; },
/* harmony export */   "DATE_MED": function() { return /* binding */ DATE_MED; },
/* harmony export */   "DATE_MED_WITH_WEEKDAY": function() { return /* binding */ DATE_MED_WITH_WEEKDAY; },
/* harmony export */   "DATE_SHORT": function() { return /* binding */ DATE_SHORT; },
/* harmony export */   "TIME_24_SIMPLE": function() { return /* binding */ TIME_24_SIMPLE; },
/* harmony export */   "TIME_24_WITH_LONG_OFFSET": function() { return /* binding */ TIME_24_WITH_LONG_OFFSET; },
/* harmony export */   "TIME_24_WITH_SECONDS": function() { return /* binding */ TIME_24_WITH_SECONDS; },
/* harmony export */   "TIME_24_WITH_SHORT_OFFSET": function() { return /* binding */ TIME_24_WITH_SHORT_OFFSET; },
/* harmony export */   "TIME_SIMPLE": function() { return /* binding */ TIME_SIMPLE; },
/* harmony export */   "TIME_WITH_LONG_OFFSET": function() { return /* binding */ TIME_WITH_LONG_OFFSET; },
/* harmony export */   "TIME_WITH_SECONDS": function() { return /* binding */ TIME_WITH_SECONDS; },
/* harmony export */   "TIME_WITH_SHORT_OFFSET": function() { return /* binding */ TIME_WITH_SHORT_OFFSET; }
/* harmony export */ });
/**
 * @private
 */

const n = "numeric",
  s = "short",
  l = "long";

const DATE_SHORT = {
  year: n,
  month: n,
  day: n,
};

const DATE_MED = {
  year: n,
  month: s,
  day: n,
};

const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
};

const DATE_FULL = {
  year: n,
  month: l,
  day: n,
};

const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
};

const TIME_SIMPLE = {
  hour: n,
  minute: n,
};

const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
};

const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};

const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
};

const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s,
};

const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l,
};

const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n,
};

const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s,
};

const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l,
};

const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};


/***/ }),

/***/ "./node_modules/luxon/src/impl/formatter.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/impl/formatter.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Formatter; }
/* harmony export */ });
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _formats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats.js */ "./node_modules/luxon/src/impl/formats.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");




function stringifyTokens(splits, tokenToString) {
  let s = "";
  for (const token of splits) {
    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}

const macroTokenToFormatOpts = {
  D: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_SHORT,
  DD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_MED,
  DDD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_FULL,
  DDDD: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATE_HUGE,
  t: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_SIMPLE,
  tt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SECONDS,
  ttt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_SHORT_OFFSET,
  tttt: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_WITH_LONG_OFFSET,
  T: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_SIMPLE,
  TT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SECONDS,
  TTT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_SHORT_OFFSET,
  TTTT: _formats_js__WEBPACK_IMPORTED_MODULE_1__.TIME_24_WITH_LONG_OFFSET,
  f: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT,
  ff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED,
  fff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL,
  ffff: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE,
  F: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_SHORT_WITH_SECONDS,
  FF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_MED_WITH_SECONDS,
  FFF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_FULL_WITH_SECONDS,
  FFFF: _formats_js__WEBPACK_IMPORTED_MODULE_1__.DATETIME_HUGE_WITH_SECONDS,
};

/**
 * @private
 */

class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }

  static parseFormat(fmt) {
    // white-space is always considered a literal in user-provided formats
    // the " " token has a special meaning (see unitForToken)

    let current = null,
      currentFull = "",
      bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
    }

    return splits;
  }

  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }

  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }

  formatInterval(interval, opts = {}) {
    const df = this.loc.dtFormatter(interval.start, { ...this.opts, ...opts });
    return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
  }

  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }

  num(n, p = 0) {
    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.padStart)(n, p);
    }

    const opts = { ...this.opts };

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  }

  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en",
      useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      string = (opts, extract) => this.loc.extract(dt, opts, extract),
      formatOffset = (opts) => {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }

        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      },
      meridiem = () =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.meridiemForDateTime(dt)
          : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      month = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.monthForDateTime(dt, length)
          : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"),
      weekday = (length, standalone) =>
        knownEnglish
          ? _english_js__WEBPACK_IMPORTED_MODULE_0__.weekdayForDateTime(dt, length)
          : string(
              standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
              "weekday"
            ),
      maybeMacro = (token) => {
        const formatOpts = Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      },
      era = (length) =>
        knownEnglish ? _english_js__WEBPACK_IMPORTED_MODULE_0__.eraForDateTime(dt, length) : string({ era: length }, "era"),
      tokenToString = (token) => {
        // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
        switch (token) {
          // ms
          case "S":
            return this.num(dt.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(dt.millisecond, 3);
          // seconds
          case "s":
            return this.num(dt.second);
          case "ss":
            return this.num(dt.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(dt.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt.millisecond / 100));
          // minutes
          case "m":
            return this.num(dt.minute);
          case "mm":
            return this.num(dt.minute, 2);
          // hours
          case "h":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case "hh":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case "H":
            return this.num(dt.hour);
          case "HH":
            return this.num(dt.hour, 2);
          // offset
          case "Z":
            // like +6
            return formatOffset({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            // like +06:00
            return formatOffset({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            // like +0600
            return formatOffset({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            // like EST
            return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
          // zone
          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems
          case "a":
            return meridiem();
          // dates
          case "d":
            return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
          case "dd":
            return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
          // weekdays - standalone
          case "c":
            // like 1
            return this.num(dt.weekday);
          case "ccc":
            // like 'Tues'
            return weekday("short", true);
          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);
          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format
          case "E":
            // like 1
            return this.num(dt.weekday);
          case "EEE":
            // like 'Tues'
            return weekday("short", false);
          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);
          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone
          case "L":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric", day: "numeric" }, "month")
              : this.num(dt.month);
          case "LL":
            // like 01, doesn't seem to work
            return useDateTimeFormatter
              ? string({ month: "2-digit", day: "numeric" }, "month")
              : this.num(dt.month, 2);
          case "LLL":
            // like Jan
            return month("short", true);
          case "LLLL":
            // like January
            return month("long", true);
          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format
          case "M":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric" }, "month")
              : this.num(dt.month);
          case "MM":
            // like 01
            return useDateTimeFormatter
              ? string({ month: "2-digit" }, "month")
              : this.num(dt.month, 2);
          case "MMM":
            // like Jan
            return month("short", false);
          case "MMMM":
            // like January
            return month("long", false);
          case "MMMMM":
            // like J
            return month("narrow", false);
          // years
          case "y":
            // like 2014
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
          case "yy":
            // like 14
            return useDateTimeFormatter
              ? string({ year: "2-digit" }, "year")
              : this.num(dt.year.toString().slice(-2), 2);
          case "yyyy":
            // like 0012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 4);
          case "yyyyyy":
            // like 000012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 6);
          // eras
          case "G":
            // like AD
            return era("short");
          case "GG":
            // like Anno Domini
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return this.num(dt.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(dt.weekYear, 4);
          case "W":
            return this.num(dt.weekNumber);
          case "WW":
            return this.num(dt.weekNumber, 2);
          case "o":
            return this.num(dt.ordinal);
          case "ooo":
            return this.num(dt.ordinal, 3);
          case "q":
            // like 1
            return this.num(dt.quarter);
          case "qq":
            // like 01
            return this.num(dt.quarter, 2);
          case "X":
            return this.num(Math.floor(dt.ts / 1000));
          case "x":
            return this.num(dt.ts);
          default:
            return maybeMacro(token);
        }
      };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }

  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
        switch (token[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      tokenToString = (lildur) => (token) => {
        const mapped = tokenToField(token);
        if (mapped) {
          return this.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      },
      tokens = Formatter.parseFormat(fmt),
      realTokens = tokens.reduce(
        (found, { literal, val }) => (literal ? found : found.concat(val)),
        []
      ),
      collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/invalid.js":
/*!************************************************!*\
  !*** ./node_modules/luxon/src/impl/invalid.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Invalid; }
/* harmony export */ });
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/luxon/src/impl/locale.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Locale; }
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");






// todo - remap caching

let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}

let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}

let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}

let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}

let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  // private subtags and unicode subtags have ordering requirements,
  // and we're not properly parsing this, so just strip out the
  // private ones if they exist.
  const xIndex = localeStr.indexOf("-x-");
  if (xIndex !== -1) {
    localeStr = localeStr.substring(0, xIndex);
  }

  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    let selectedStr;
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
      selectedStr = localeStr;
    } catch (e) {
      const smaller = localeStr.substring(0, uIndex);
      options = getCachedDTF(smaller).resolvedOptions();
      selectedStr = smaller;
    }

    const { numberingSystem, calendar } = options;
    return [selectedStr, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    if (!localeStr.includes("-u-")) {
      localeStr += "-u";
    }

    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }

    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}

function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return (
      loc.numberingSystem === "latn" ||
      !loc.locale ||
      loc.locale.startsWith("en") ||
      new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn"
    );
  }
}

/**
 * @private
 */

class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    const { padTo, floor, ...otherOpts } = opts;

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      const fixed = this.floor ? Math.floor(i) : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.roundTo)(i, 3);
      return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.padStart)(fixed, this.padTo);
    }
  }
}

/**
 * @private
 */

class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;
    this.originalZone = undefined;

    let z = undefined;
    if (this.opts.timeZone) {
      // Don't apply any workarounds if a timeZone is explicitly provided in opts
      this.dt = dt;
    } else if (dt.zone.type === "fixed") {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_4__["default"].create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata so
        // we manually apply the offset and substitute the zone as needed.
        z = "UTC";
        this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({ minutes: dt.offset });
        this.originalZone = dt.zone;
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else if (dt.zone.type === "iana") {
      this.dt = dt;
      z = dt.zone.name;
    } else {
      // Custom zones can have any offset / offsetName so we just manually
      // apply the offset and substitute the zone as needed.
      z = "UTC";
      this.dt = dt.setZone("UTC").plus({ minutes: dt.offset });
      this.originalZone = dt.zone;
    }

    const intlOpts = { ...this.opts };
    intlOpts.timeZone = intlOpts.timeZone || z;
    this.dtf = getCachedDTF(intl, intlOpts);
  }

  format() {
    if (this.originalZone) {
      // If we have to substitute in the actual zone name, we have to use
      // formatToParts so that the timezone can be replaced.
      return this.formatToParts()
        .map(({ value }) => value)
        .join("");
    }
    return this.dtf.format(this.dt.toJSDate());
  }

  formatToParts() {
    const parts = this.dtf.formatToParts(this.dt.toJSDate());
    if (this.originalZone) {
      return parts.map((part) => {
        if (part.type === "timeZoneName") {
          const offsetName = this.originalZone.offsetName(this.dt.ts, {
            locale: this.dt.locale,
            format: this.opts.timeZoneName,
          });
          return {
            ...part,
            value: offsetName,
          };
        } else {
          return part;
        }
      });
    }
    return parts;
  }

  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}

/**
 * @private
 */
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasRelative)()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return _english_js__WEBPACK_IMPORTED_MODULE_1__.formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }

  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}

/**
 * @private
 */

class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }

  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultLocale;
    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultNumberingSystem;
    const outputCalendarR = outputCalendar || _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }

  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }

  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }

  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }

    return this.fastNumbersCached;
  }

  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness =
      (this.numberingSystem === null || this.numberingSystem === "latn") &&
      (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }

  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        alts.defaultToEN || false
      );
    }
  }

  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }

  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }

  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_1__.months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length },
        formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }

  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdays, () => {
      const intl = format
          ? { weekday: length, year: "numeric", month: "long", day: "numeric" }
          : { weekday: length },
        formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) =>
          this.extract(dt, intl, "weekday")
        );
      }
      return this.weekdaysCache[formatStr][length];
    });
  }

  meridiems(defaultOK = true) {
    return listStuff(
      this,
      undefined,
      defaultOK,
      () => _english_js__WEBPACK_IMPORTED_MODULE_1__.meridiems,
      () => {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!this.meridiemCache) {
          const intl = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [_datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13, 9), _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, "dayperiod")
          );
        }

        return this.meridiemCache;
      }
    );
  }

  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, _english_js__WEBPACK_IMPORTED_MODULE_1__.eras, () => {
      const intl = { era: length };

      // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!this.eraCache[length]) {
        this.eraCache[length] = [_datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(-40, 1, 1), _datetime_js__WEBPACK_IMPORTED_MODULE_3__["default"].utc(2017, 1, 1)].map((dt) =>
          this.extract(dt, intl, "era")
        );
      }

      return this.eraCache[length];
    });
  }

  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts),
      results = df.formatToParts(),
      matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }

  numberFormatter(opts = {}) {
    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }

  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }

  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }

  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }

  isEnglish() {
    return (
      this.locale === "en" ||
      this.locale.toLowerCase() === "en-us" ||
      new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
    );
  }

  equals(other) {
    return (
      this.locale === other.locale &&
      this.numberingSystem === other.numberingSystem &&
      this.outputCalendar === other.outputCalendar
    );
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/regexParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/regexParser.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseHTTPDate": function() { return /* binding */ parseHTTPDate; },
/* harmony export */   "parseISODate": function() { return /* binding */ parseISODate; },
/* harmony export */   "parseISODuration": function() { return /* binding */ parseISODuration; },
/* harmony export */   "parseISOTimeOnly": function() { return /* binding */ parseISOTimeOnly; },
/* harmony export */   "parseRFC2822Date": function() { return /* binding */ parseRFC2822Date; },
/* harmony export */   "parseSQL": function() { return /* binding */ parseSQL; }
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _english_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./english.js */ "./node_modules/luxon/src/impl/english.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");





/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}

function combineExtractors(...extractors) {
  return (m) =>
    extractors
      .reduce(
        ([mergedVals, mergedZone, cursor], ex) => {
          const [val, zone, next] = ex(m, cursor);
          return [{ ...mergedVals, ...val }, zone || mergedZone, next];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}

function parse(s, ...patterns) {
  if (s == null) {
    return [null, null];
  }

  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}

function simpleParse(...keys) {
  return (match, cursor) => {
    const ret = {};
    let i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
const extractISOOrdinalData = simpleParse("year", "ordinal");
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
const sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);

function int(match, pos, fallback) {
  const m = match[pos];
  return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(m) ? fallback : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(m);
}

function extractISOYmd(match, cursor) {
  const item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1),
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  const item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(match[cursor + 3]),
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  const local = !match[cursor] && !match[cursor + 1],
    fullOffset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(match[cursor + 1], match[cursor + 2]),
    zone = local ? null : _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  const zone = match[cursor] ? _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);

// ISO duration parsing

const isoDuration =
  /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function extractISODuration(match) {
  const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] =
    match;

  const hasNegativePrefix = s[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";

  const maybeNegate = (num, force = false) =>
    num !== undefined && (force || (num && hasNegativePrefix)) ? -num : num;

  return [
    {
      years: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(yearStr)),
      months: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(monthStr)),
      weeks: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(weekStr)),
      days: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(dayStr)),
      hours: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(hourStr)),
      minutes: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(minuteStr)),
      seconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseFloating)(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(millisecondsStr), negativeSeconds),
    },
  ];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr)) : (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(yearStr),
    month: _english_js__WEBPACK_IMPORTED_MODULE_1__.monthsShort.indexOf(monthStr) + 1,
    day: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(dayStr),
    hour: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(hourStr),
    minute: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(minuteStr),
  };

  if (secondStr) result.second = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseInteger)(secondStr);
  if (weekdayStr) {
    result.weekday =
      weekdayStr.length > 3
        ? _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdaysLong.indexOf(weekdayStr) + 1
        : _english_js__WEBPACK_IMPORTED_MODULE_1__.weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
const rfc2822 =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  const [
      ,
      weekdayStr,
      dayStr,
      monthStr,
      yearStr,
      hourStr,
      minuteStr,
      secondStr,
      obsOffset,
      milOffset,
      offHourStr,
      offMinuteStr,
    ] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  let offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(offHourStr, offMinuteStr);
  }

  return [result, new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"](offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
}

// http date

const rfc1123 =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  rfc850 =
    /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  ascii =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance];
}

function extractASCII(match) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance];
}

const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);

const extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

/*
 * @private
 */

function parseISODate(s) {
  return parse(
    s,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(
    s,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

const extractISOTimeOnly = combineExtractors(extractISOTime);

function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}

const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);

const extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

function parseSQL(s) {
  return parse(
    s,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/tokenParser.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/impl/tokenParser.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expandMacroTokens": function() { return /* binding */ expandMacroTokens; },
/* harmony export */   "explainFromTokens": function() { return /* binding */ explainFromTokens; },
/* harmony export */   "formatOptsToTokens": function() { return /* binding */ formatOptsToTokens; },
/* harmony export */   "parseFromTokens": function() { return /* binding */ parseFromTokens; }
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _digits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digits.js */ "./node_modules/luxon/src/impl/digits.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");








const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s]) => post((0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.parseDigits)(s)) };
}

const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s
    .replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s]) =>
        strings.findIndex((i) => stripInsensitivities(s) === stripInsensitivities(i)) + startIndex,
    };
  }
}

function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(h, m), groups };
}

function simple(regex) {
  return { regex, deser: ([s]) => s };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  const one = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc),
    two = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{2}"),
    three = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{3}"),
    four = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{4}"),
    six = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{6}"),
    oneOrTwo = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,2}"),
    oneToThree = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,3}"),
    oneToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,6}"),
    oneToNine = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{1,9}"),
    twoToFour = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{2,4}"),
    fourToSix = (0,_digits_js__WEBPACK_IMPORTED_MODULE_5__.digitRegex)(loc, "{4,6}"),
    literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s]) => s, literal: true }),
    unitate = (t) => {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short", false), 0);
        case "GG":
          return oneOf(loc.eras("long", false), 0);
        // years
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        // months
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true, false), 1);
        case "MMMM":
          return oneOf(loc.months("long", true, false), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false, false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false, false), 1);
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, _util_js__WEBPACK_IMPORTED_MODULE_0__.untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false, false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false, false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true, false), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true, false), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        // this special-case "token" represents a place where a macro-token expanded into a white-space literal
        // in this case we accept any non-newline white-space
        case " ":
          return simple(/[^\S\n\r]/);
        default:
          return literal(t);
      }
    };

  const unit = unitate(token) || {
    invalidReason: MISSING_FTP,
  };

  unit.token = token;

  return unit;
}

const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy",
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM",
  },
  day: {
    numeric: "d",
    "2-digit": "dd",
  },
  weekday: {
    short: "EEE",
    long: "EEEE",
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh",
  },
  minute: {
    numeric: "m",
    "2-digit": "mm",
  },
  second: {
    numeric: "s",
    "2-digit": "ss",
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ",
  },
};

function tokenForPart(part, formatOpts) {
  const { type, value } = part;

  if (type === "literal") {
    const isSpace = /^\s+$/.test(value);
    return {
      literal: !isSpace,
      val: isSpace ? " " : value,
    };
  }

  const style = formatOpts[type];

  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val,
    };
  }

  return undefined;
}

function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}

function match(input, regex, handlers) {
  const matches = input.match(regex);

  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(handlers, i)) {
        const h = handlers[i],
          groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };

  let zone = null;
  let specificOffset;
  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.z)) {
    zone = _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(matches.z);
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.Z)) {
    if (!zone) {
      zone = new _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"](matches.Z);
    }
    specificOffset = matches.Z;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(matches.u)) {
    matches.S = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.parseMillis)(matches.u);
  }

  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone, specificOffset];
}

let dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = _datetime_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  const formatOpts = _formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);

  if (tokens == null || tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}

/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(_formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseFormat(format), locale),
    units = tokens.map((t) => unitForToken(t, locale)),
    disqualifyingUnit = units.find((t) => t.invalidReason);

  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units),
      regex = RegExp(regexString, "i"),
      [rawMatches, matches] = match(input, regex, handlers),
      [result, zone, specificOffset] = matches
        ? dateTimeFromMatches(matches)
        : [null, null, undefined];
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(matches, "a") && (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(matches, "H")) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_6__.ConflictingSpecificationError(
        "Can't include meridiem when specifying 24-hour format"
      );
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}

function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}

function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }

  const formatter = _formatter_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map((p) => tokenForPart(p, formatOpts));
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/util.js":
/*!*********************************************!*\
  !*** ./node_modules/luxon/src/impl/util.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asNumber": function() { return /* binding */ asNumber; },
/* harmony export */   "bestBy": function() { return /* binding */ bestBy; },
/* harmony export */   "daysInMonth": function() { return /* binding */ daysInMonth; },
/* harmony export */   "daysInYear": function() { return /* binding */ daysInYear; },
/* harmony export */   "floorMod": function() { return /* binding */ floorMod; },
/* harmony export */   "formatOffset": function() { return /* binding */ formatOffset; },
/* harmony export */   "hasOwnProperty": function() { return /* binding */ hasOwnProperty; },
/* harmony export */   "hasRelative": function() { return /* binding */ hasRelative; },
/* harmony export */   "integerBetween": function() { return /* binding */ integerBetween; },
/* harmony export */   "isDate": function() { return /* binding */ isDate; },
/* harmony export */   "isInteger": function() { return /* binding */ isInteger; },
/* harmony export */   "isLeapYear": function() { return /* binding */ isLeapYear; },
/* harmony export */   "isNumber": function() { return /* binding */ isNumber; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "isUndefined": function() { return /* binding */ isUndefined; },
/* harmony export */   "maybeArray": function() { return /* binding */ maybeArray; },
/* harmony export */   "normalizeObject": function() { return /* binding */ normalizeObject; },
/* harmony export */   "objToLocalTS": function() { return /* binding */ objToLocalTS; },
/* harmony export */   "padStart": function() { return /* binding */ padStart; },
/* harmony export */   "parseFloating": function() { return /* binding */ parseFloating; },
/* harmony export */   "parseInteger": function() { return /* binding */ parseInteger; },
/* harmony export */   "parseMillis": function() { return /* binding */ parseMillis; },
/* harmony export */   "parseZoneInfo": function() { return /* binding */ parseZoneInfo; },
/* harmony export */   "pick": function() { return /* binding */ pick; },
/* harmony export */   "roundTo": function() { return /* binding */ roundTo; },
/* harmony export */   "signedOffset": function() { return /* binding */ signedOffset; },
/* harmony export */   "timeObject": function() { return /* binding */ timeObject; },
/* harmony export */   "untruncateYear": function() { return /* binding */ untruncateYear; },
/* harmony export */   "weeksInWeekYear": function() { return /* binding */ weeksInWeekYear; }
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings.js */ "./node_modules/luxon/src/settings.js");
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/




/**
 * @private
 */

// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}

function isNumber(o) {
  return typeof o === "number";
}

function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}

function isString(o) {
  return typeof o === "string";
}

function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input, n = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }
  return padded;
}

function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}

function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}

function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    const f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}

function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits,
    rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1,
    modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  );

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    // set the month and day again, this is necessary because year 2000 is a leap year, but year 100 is not
    // so if obj.year is in 99, but obj.day makes it roll over into year 100,
    // the calculations done by Date.UTC are using year 2000 - which is incorrect
    d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
  }
  return +d;
}

function weeksInWeekYear(weekYear) {
  const p1 =
      (weekYear +
        Math.floor(weekYear / 4) -
        Math.floor(weekYear / 100) +
        Math.floor(weekYear / 400)) %
      7,
    last = weekYear - 1,
    p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].twoDigitCutoffYear ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts),
    intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  const modified = { timeZoneName: offsetFormat, ...intlOpts };

  const parsed = new Intl.DateTimeFormat(locale, modified)
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  const offMin = parseInt(offMinuteStr, 10) || 0,
    offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}

function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}

function formatOffset(offset, format) {
  const hours = Math.trunc(Math.abs(offset / 60)),
    minutes = Math.trunc(Math.abs(offset % 60)),
    sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}

function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}


/***/ }),

/***/ "./node_modules/luxon/src/impl/zoneUtil.js":
/*!*************************************************!*\
  !*** ./node_modules/luxon/src/impl/zoneUtil.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeZone": function() { return /* binding */ normalizeZone; }
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zones/invalidZone.js */ "./node_modules/luxon/src/zones/invalidZone.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/**
 * @private
 */









function normalizeZone(input, defaultZone) {
  let offset;
  if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(input) || input === null) {
    return defaultZone;
  } else if (input instanceof _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return input;
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isString)(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "default") return defaultZone;
    else if (lowered === "local" || lowered === "system") return _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance;
    else if (lowered === "utc" || lowered === "gmt") return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].utcInstance;
    else return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].parseSpecifier(lowered) || _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(input);
  } else if ((0,_util_js__WEBPACK_IMPORTED_MODULE_4__.isNumber)(input)) {
    return _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_3__["default"](input);
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/info.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/info.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Info; }
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/util.js */ "./node_modules/luxon/src/impl/util.js");








/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
class Info {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(zone = _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultZone) {
    const proto = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].now().setZone(zone).set({ month: 12 });

    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }

  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(zone) {
    return _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_3__["default"].isValidZone(zone);
  }

  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(input) {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_4__.normalizeZone)(input, _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].defaultZone);
  }

  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, outputCalendar)).months(length);
  }

  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, outputCalendar)).months(length, true);
  }

  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, null)).weekdays(length);
  }

  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null } = {}
  ) {
    return (locObj || _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, numberingSystem, null)).weekdays(length, true);
  }

  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale).meridiems();
  }

  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(length = "short", { locale = null } = {}) {
    return _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(locale, null, "gregory").eras(length);
  }

  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_5__.hasRelative)() };
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/interval.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/interval.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Interval; }
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");
/* harmony import */ var _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impl/invalid.js */ "./node_modules/luxon/src/impl/invalid.js");
/* harmony import */ var _impl_formatter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./impl/formatter.js */ "./node_modules/luxon/src/impl/formatter.js");
/* harmony import */ var _impl_formats_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impl/formats.js */ "./node_modules/luxon/src/impl/formats.js");








const INVALID = "Invalid Interval";

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
    );
  } else {
    return null;
  }
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toLocaleString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */
class Interval {
  /**
   * @private
   */
  constructor(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.isLuxonInterval = true;
  }

  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__.InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    const invalid = reason instanceof _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? reason : new _impl_invalid_js__WEBPACK_IMPORTED_MODULE_4__["default"](reason, explanation);

    if (_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].throwOnInvalid) {
      throw new _errors_js__WEBPACK_IMPORTED_MODULE_3__.InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }

  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(start, end) {
    const builtStart = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(start),
      builtEnd = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(end);

    const validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd,
      });
    } else {
      return validateError;
    }
  }

  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(start, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }

  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(end, duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration),
      dt = (0,_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }

  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(text, opts) {
    const [s, e] = (text || "").split("/", 2);
    if (s && e) {
      let start, startIsValid;
      try {
        start = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      let end, endIsValid;
      try {
        end = _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromISO(s, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(o) {
    return (o && o.isLuxonInterval) || false;
  }

  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }

  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }

  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }

  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }

  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(unit = "milliseconds") {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit),
      end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
  }

  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }

  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }

  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }

  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }

  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }

  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes
        .map(_datetime_js__WEBPACK_IMPORTED_MODULE_0__.friendlyDateTime)
        .filter((d) => this.contains(d))
        .sort(),
      results = [];
    let { s } = this,
      i = 0;

    while (s < this.e) {
      const added = sorted[i] || this.e,
        next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }

  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(duration) {
    const dur = _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    let { s } = this,
      idx = 1,
      next;

    const results = [];
    while (s < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }

  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }

  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }

  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }

  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }

  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }

  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }

  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(other) {
    if (!this.isValid) return this;
    const s = this.s > other.s ? this.s : other.s,
      e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }

  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(other) {
    if (!this.isValid) return this;
    const s = this.s < other.s ? this.s : other.s,
      e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }

  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(intervals) {
    const [found, final] = intervals
      .sort((a, b) => a.s - b.s)
      .reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        },
        [[], null]
      );
    if (final) {
      found.push(final);
    }
    return found;
  }

  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(intervals) {
    let start = null,
      currentCount = 0;
    const results = [],
      ends = intervals.map((i) => [
        { time: i.s, type: "s" },
        { time: i.e, type: "e" },
      ]),
      flattened = Array.prototype.concat(...ends),
      arr = flattened.sort((a, b) => a.time - b.time);

    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }

  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...intervals) {
    return Interval.xor([this].concat(intervals))
      .map((i) => this.intersection(i))
      .filter((i) => i && !i.isEmpty());
  }

  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    if (!this.isValid) return INVALID;
    return `[${this.s.toISO()} – ${this.e.toISO()})`;
  }

  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(formatOpts = _impl_formats_js__WEBPACK_IMPORTED_MODULE_6__.DATE_SHORT, opts = {}) {
    return this.isValid
      ? _impl_formatter_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(this.s.loc.clone(opts), formatOpts).formatInterval(this)
      : INVALID;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    if (!this.isValid) return INVALID;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(opts) {
    if (!this.isValid) return INVALID;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }

  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(dateFormat, { separator = " – " } = {}) {
    if (!this.isValid) return INVALID;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }

  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"].invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }

  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/luxon.js":
/*!*****************************************!*\
  !*** ./node_modules/luxon/src/luxon.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTime": function() { return /* reexport safe */ _datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "Duration": function() { return /* reexport safe */ _duration_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "FixedOffsetZone": function() { return /* reexport safe */ _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "IANAZone": function() { return /* reexport safe */ _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "Info": function() { return /* reexport safe */ _info_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "Interval": function() { return /* reexport safe */ _interval_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "InvalidZone": function() { return /* reexport safe */ _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "Settings": function() { return /* reexport safe */ _settings_js__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "SystemZone": function() { return /* reexport safe */ _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "VERSION": function() { return /* binding */ VERSION; },
/* harmony export */   "Zone": function() { return /* reexport safe */ _zone_js__WEBPACK_IMPORTED_MODULE_4__["default"]; }
/* harmony export */ });
/* harmony import */ var _datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime.js */ "./node_modules/luxon/src/datetime.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/luxon/src/duration.js");
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ "./node_modules/luxon/src/interval.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ "./node_modules/luxon/src/info.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zone.js */ "./node_modules/luxon/src/zone.js");
/* harmony import */ var _zones_fixedOffsetZone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zones/fixedOffsetZone.js */ "./node_modules/luxon/src/zones/fixedOffsetZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _zones_invalidZone_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zones/invalidZone.js */ "./node_modules/luxon/src/zones/invalidZone.js");
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings.js */ "./node_modules/luxon/src/settings.js");











const VERSION = "3.3.0";




/***/ }),

/***/ "./node_modules/luxon/src/settings.js":
/*!********************************************!*\
  !*** ./node_modules/luxon/src/settings.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Settings; }
/* harmony export */ });
/* harmony import */ var _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zones/systemZone.js */ "./node_modules/luxon/src/zones/systemZone.js");
/* harmony import */ var _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zones/IANAZone.js */ "./node_modules/luxon/src/zones/IANAZone.js");
/* harmony import */ var _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/locale.js */ "./node_modules/luxon/src/impl/locale.js");
/* harmony import */ var _impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/zoneUtil.js */ "./node_modules/luxon/src/impl/zoneUtil.js");






let now = () => Date.now(),
  defaultZone = "system",
  defaultLocale = null,
  defaultNumberingSystem = null,
  defaultOutputCalendar = null,
  twoDigitCutoffYear = 60,
  throwOnInvalid;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
class Settings {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }

  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n) {
    now = n;
  }

  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(zone) {
    defaultZone = zone;
  }

  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return (0,_impl_zoneUtil_js__WEBPACK_IMPORTED_MODULE_3__.normalizeZone)(defaultZone, _zones_systemZone_js__WEBPACK_IMPORTED_MODULE_0__["default"].instance);
  }

  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }

  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }

  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }

  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }

  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }

  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }

  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return twoDigitCutoffYear;
  }

  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpretted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpretted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpretted as 50
   */
  static set twoDigitCutoffYear(cutoffYear) {
    twoDigitCutoffYear = cutoffYear % 100;
  }

  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }

  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    _impl_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"].resetCache();
    _zones_IANAZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].resetCache();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zone.js":
/*!****************************************!*\
  !*** ./node_modules/luxon/src/zone.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Zone; }
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/luxon/src/errors.js");


/**
 * @interface
 */
class Zone {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  get ianaName() {
    return this.name;
  }

  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new _errors_js__WEBPACK_IMPORTED_MODULE_0__.ZoneIsAbstractError();
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/IANAZone.js":
/*!**************************************************!*\
  !*** ./node_modules/luxon/src/zones/IANAZone.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IANAZone; }
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short",
    });
  }
  return dtfCache[zone];
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
    [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];

    if (type === "era") {
      filled[pos] = value;
    } else if (!(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

let ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */
class IANAZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(s) {
    return this.isValidZone(s);
  }

  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(name) {
    super();
    /** @private **/
    this.zoneName = name;
    /** @private **/
    this.valid = IANAZone.isValidZone(name);
  }

  /** @override **/
  get type() {
    return "iana";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.parseZoneInfo)(ts, format, locale, this.name);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    const date = new Date(ts);

    if (isNaN(date)) return NaN;

    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts
      ? partsOffset(dtf, date)
      : hackyOffset(dtf, date);

    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }

    // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
    const adjustedHour = hour === 24 ? 0 : hour;

    const asUTC = (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.objToLocalTS)({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0,
    });

    let asTS = +date;
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }

  /** @override **/
  get isValid() {
    return this.valid;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/fixedOffsetZone.js":
/*!*********************************************************!*\
  !*** ./node_modules/luxon/src/zones/fixedOffsetZone.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FixedOffsetZone; }
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */
class FixedOffsetZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }

  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(s) {
    if (s) {
      const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone((0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.signedOffset)(r[1], r[2]));
      }
    }
    return null;
  }

  constructor(offset) {
    super();
    /** @private **/
    this.fixed = offset;
  }

  /** @override **/
  get type() {
    return "fixed";
  }

  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.fixed, "narrow")}`;
  }

  get ianaName() {
    if (this.fixed === 0) {
      return "Etc/UTC";
    } else {
      return `Etc/GMT${(0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(-this.fixed, "narrow")}`;
    }
  }

  /** @override **/
  offsetName() {
    return this.name;
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.fixed, format);
  }

  /** @override **/
  get isUniversal() {
    return true;
  }

  /** @override **/
  offset() {
    return this.fixed;
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/invalidZone.js":
/*!*****************************************************!*\
  !*** ./node_modules/luxon/src/zones/invalidZone.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InvalidZone; }
/* harmony export */ });
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");


/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */
class InvalidZone extends _zone_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(zoneName) {
    super();
    /**  @private */
    this.zoneName = zoneName;
  }

  /** @override **/
  get type() {
    return "invalid";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName() {
    return null;
  }

  /** @override **/
  formatOffset() {
    return "";
  }

  /** @override **/
  offset() {
    return NaN;
  }

  /** @override **/
  equals() {
    return false;
  }

  /** @override **/
  get isValid() {
    return false;
  }
}


/***/ }),

/***/ "./node_modules/luxon/src/zones/systemZone.js":
/*!****************************************************!*\
  !*** ./node_modules/luxon/src/zones/systemZone.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SystemZone; }
/* harmony export */ });
/* harmony import */ var _impl_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../impl/util.js */ "./node_modules/luxon/src/impl/util.js");
/* harmony import */ var _zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zone.js */ "./node_modules/luxon/src/zone.js");



let singleton = null;

/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */
class SystemZone extends _zone_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton === null) {
      singleton = new SystemZone();
    }
    return singleton;
  }

  /** @override **/
  get type() {
    return "system";
  }

  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.parseZoneInfo)(ts, format, locale);
  }

  /** @override **/
  formatOffset(ts, format) {
    return (0,_impl_util_js__WEBPACK_IMPORTED_MODULE_0__.formatOffset)(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }

  /** @override **/
  get isValid() {
    return true;
  }
}


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
      productId: orderComponent.dataset.productId,
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
      status: attendeesComponent.dataset.status,
      order: JSON.parse(attendeesComponent.dataset.order),
      groupId: JSON.parse(attendeesComponent.dataset.groupId),
      attendees: JSON.parse(attendeesComponent.dataset.attendees),
      productId: attendeesComponent.dataset.productId
    }), attendeesComponent);
  }
}, false);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map
>>>>>>> 436e236 (adding filters)
=======
!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,n=window.wp.components,r=window.wp.apiFetch,s=e.n(r),a=window.lodash;const i=e=>{const[r,i]=(0,t.useState)(!0),[o,u]=(0,t.useState)(null),[l,c]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{(0,a.isNil)(e.disabled)||c(e.disabled)}),[e?.disabled]),(0,t.useEffect)((()=>{(0,a.isNil)(e?.productId)||u(e.productId)}),[e?.productId]),(0,t.useEffect)((()=>{!async function(){try{i(!0),u(null),s().use(s().createNonceMiddleware(e.nonce));const t=await s()({path:`${e.apiPath}`,method:"GET"});t.length||e.setNotice({status:"error",message:"No courses are available."}),e.onFetch(t)}catch(t){e.setNotice({status:"error",message:t.message}),console.error(t)}i(!1)}()}),[]),(0,t.createElement)(t.Fragment,null,r&&(0,t.createElement)(n.Spinner,null),!r&&(0,t.createElement)("select",{id:e.id,disabled:(0,a.isBoolean)(e.disabled)?e.disabled:l,required:!0,onChange:e.onChange,value:o,defaultValue:o},(0,t.createElement)("option",{selected:!0,disabled:!0,value:""},"Please select"),e.products.map((e=>(0,t.createElement)("option",{key:e.id.toString(),value:e.id},e.name)))),(0,t.createElement)("input",{type:"hidden",name:e.name,value:e?.productId}))},o=e=>{const[r,i]=(0,t.useState)(null),[o,u]=(0,t.useState)([]),[l,c]=(0,t.useState)(null),[d,m]=(0,t.useState)(!0),[h,f]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{(0,a.isNil)(e.disabled)||f(e.disabled)}),[e?.disabled]),(0,t.useEffect)((()=>{(0,a.isUndefined)(e.groupId)||i(e.groupId)}),[e?.groupId]),(0,t.useEffect)((()=>{if(!(0,a.isNil)(e.productId)){async function t(){try{m(!0),s().use(s().createNonceMiddleware(e.nonce));const t=await s()({path:`${e.apiPath}/${e.productId}`,method:"GET"});t.length||c({status:"warning",message:"You are not a member of any groups."}),u(t),e.onFetch(t)}catch(e){c({status:"error",message:e.message}),console.error(e)}m(!1)}t()}}),[e?.productId]),(0,t.createElement)(t.Fragment,null,l&&(0,t.createElement)(n.Notice,{status:l.status,isDismissable:!0,onDismiss:()=>c(null)},l.message),d&&(0,t.createElement)(n.Spinner,null),!d&&(0,t.createElement)("select",{id:e.id,disabled:e.disabled,required:!0,onChange:e.onChange,value:r,defaultValue:r},!r&&(0,t.createElement)("option",{selected:!0,disabled:!0,value:""},"Please select"),o.map((e=>(0,t.createElement)("option",{key:e.group_id.toString(),value:e.group_id},e.name)))),(0,t.createElement)("input",{type:"hidden",name:e.name,value:r}))};function u(e,t){return t.find((t=>t.key===e))}function l(e,t){return t.line_items.find((t=>t.product_id===e))}function c(e){return e.line_items.find((e=>(0,a.isNumber)(e?.product_id)))}function d(e){return m(e.status)}function m(e){return"waiting-list"===e}function h(e){return"auto-draft"===e}const f=e=>{const[r,s]=(0,t.useState)(null),[d,m]=(0,t.useState)(null),[h,f]=(0,t.useState)(null),[p,y]=(0,t.useState)(null),[g,w]=(0,t.useState)([]),[v,b]=(0,t.useState)(null),[S,E]=(0,t.useState)(null),[T,N]=(0,t.useState)(null),[O,k]=(0,t.useState)(null),[x,M]=(0,t.useState)(null),[I,D]=(0,t.useState)(!0);function V(e){(0,a.isNil)(e)||k(e)}return(0,t.useEffect)((()=>{if(!(0,a.isNil)(T)&&g?.length>0){const e=function(e,t){return t.find((t=>t.id===parseInt(e)))}(T,g);y(null),f(null),s(null),m(null),E(null),k(null),M(e)}}),[T]),(0,t.useEffect)((()=>{if(!(0,a.isNull)(O)&&!(0,a.isNull)(x)){const e=function(e,t){const n=t.find((t=>t.key===`_quotas_field_${e}`));return void 0===n?"":n.value}(O,x.meta_data.filter((e=>/_quotas_field_[\d]+/.test(e.key)))),t=function(e,t){return e=parseInt(e),t=parseInt(t),isNaN(e)?0:isNaN(t)?e:0===t?t:t>e?e:t}(x.stock_quantity||x.quantity,e);b(t)}}),[O]),(0,t.useEffect)((()=>{if(!(0,a.isNil)(v)){const t=parseInt(x.stock_quantity),n=parseInt(x.price);m(n),E(t),v<1&&t>0?e.setStatus("waiting-list"):e.setStatus(e.order.status),c(e.order)||s(t?{status:parseInt(v)>0?"info":"warning",message:`${v} spaces available.`}:{status:"error",message:"Out of stock"})}}),[v]),(0,t.useEffect)((()=>{if((0,a.isObject)(x)&&c(e.order)){const t=l(x.id,e.order);f(t.quantity),y(x.price*t.quantity)}}),[x]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{class:"form-wrap"},(0,t.createElement)("h3",null,"Course"),r&&(0,t.createElement)(n.Notice,{status:r.status,isDismissable:!0,onDismiss:()=>s(null)},r.message),(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"product"},"Course",(0,t.createElement)("span",{class:"required"}," *")),(0,t.createElement)(i,{id:"product",name:"product",disabled:I,groupId:O,productId:T,apiPath:e.productApiPath,nonce:e.nonce,setNotice:s,onChange:function(e){N(e.target.value)},onFetch:function(t){w(t),function(e){(e=parseInt(e))&&N(e)}(e.productId);const n=u("groups-read",e.order.meta_data);V(n?.value),c(e.order)||(D(!1),e.setSubmitButtonDisabled(!1))},products:g})))),e?.lineItem?.id&&(0,t.createElement)("input",{type:"hidden",name:"line_item_id",value:e.lineItem.id}),x&&(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"order_group"},"Group",(0,t.createElement)("span",{class:"required"}," *")),(0,t.createElement)(o,{productId:T,disabled:I,groupId:O,id:"order_group",name:"order_group",apiPath:e.groupApiPath,nonce:e.nonce,onChange:function(e){k(e.target.value)},onFetch:function(t){const n=u("groups-read",e.order.meta_data);V(n?.value),e?.user?.allcaps?.view_others_shop_orders&&e.setSubmitButtonDisabled(!1)}})))),!!d&&T>0&&O&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"price"},"Price"),(0,t.createElement)("input",{type:"number",id:"price",disabled:!0,placeholder:"0",value:d}),(0,t.createElement)("input",{type:"hidden",name:"price",value:d})))),(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"quantity"},"Quantity",(0,t.createElement)("span",{class:"required"}," *")),(0,t.createElement)("input",{type:"number",id:"quantity",disabled:I,step:"1",min:"1",max:v>0?v:S,autocomplete:"off",placeholder:"0",onChange:function(e){const t=parseInt(e.target.value);f(t),y(t*d)},value:h,required:!0}),(0,t.createElement)("input",{type:"hidden",name:"quantity",value:h})))),(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"total"},"Total"),(0,t.createElement)("input",{type:"number",id:"total",type:"number",disabled:!0,placeholder:"0",value:p}),(0,t.createElement)("input",{type:"hidden",name:"total",value:p})))))))},p=e=>{const[n,r]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{e.selected===e.value&&r(!0)}),[e.selected]),(0,t.createElement)("option",{key:e.value,selected:n,value:e.value},e.children)},y=e=>{const[r,a]=(0,t.useState)([]),[i,o]=(0,t.useState)(null),[u,l]=(0,t.useState)(!0),[c,d]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{e?.user?.allcaps?.view_others_shop_orders&&d(e.disabled)}),[e?.disabled]),(0,t.useEffect)((()=>{}),[e.status]),(0,t.useEffect)((()=>{!async function(){try{l(!0),s().use(s().createNonceMiddleware(e.nonce));const t=await s()({path:`${e.apiPath}/statuses`,method:"GET"});t.length||o({status:"warning",message:"Failed fetching order statuses."}),a(t)}catch(e){o({status:"error",message:e.message}),console.error(e)}l(!1)}()}),[]),(0,t.createElement)(t.Fragment,null,i&&(0,t.createElement)(n.Notice,{status:i.status,isDismissable:!0,onDismiss:()=>o(null)},i.message),u&&(0,t.createElement)(n.Spinner,null),!u&&(0,t.createElement)("select",{id:e.id,disabled:e.disabled,required:!0,value:e.status,onChange:function(t){e.setStatus(t.target.value)}},h(e.status)&&(0,t.createElement)("option",{selected:!0,value:"auto-draft"},"Draft"),!h(e.status)&&(0,t.createElement)("option",{selected:!0,disabled:!0,value:""},"Please select"),r.map((e=>(0,t.createElement)(p,{value:e.id},e.name)))),!h(e.status)&&(0,t.createElement)("input",{type:"hidden",name:e.name,value:e?.status}))},g=e=>{const[r,i]=(0,t.useState)(null),[o,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(!0),[g,w]=(0,t.useState)(""),[v,b]=(0,t.useState)("Create enrollment"),S=e.order.status;return(0,t.useEffect)((()=>{}),[e?.order]),(0,t.useEffect)((()=>{(0,a.isNil)(e?.status)||(w(e.status),h(e.status)||b("Update enrollment"))}),[e?.status]),(0,t.useEffect)((()=>{m(g)?b("Add enrollment to waiting list"):h(e?.status)?b("Create enrollment"):b("Update enrollment")}),[g]),(0,t.createElement)("form",{class:"panel-wrap woocommerce",onSubmit:async function(t){t.preventDefault();const n=function(t){const n={billing:{},shipping:{},currency:t.get("currency"),customer_id:t.get("customer_id"),status:h(g)?"attendees":g,meta_data:[{key:"groups-read",value:t.get("order_group")}],line_items:[{product_id:parseInt(t.get("product")),quantity:parseInt(t.get("quantity"))}]};if(c(e?.order)){const r=l(n.line_items[0].product_id,e.order);n.line_items=[{...n.line_items[0],id:r.id,order_id:r.order_id,price:parseInt(t.get("price")),subtotal:`${t.get("subtotal")}`,total:`${t.get("total")}`}]}return n}(new FormData(t.target)),r=c(e.order)?"PUT":"POST";try{switch(i(null),u(!0),p(!0),s().use(s().createNonceMiddleware(e.nonce)),e.order=await s()({path:c(e.order)?`/wc/v3/orders/${e.order.id}`:"/wc/v3/orders",method:r,data:n}),i({status:"success",message:"Updated enrollment. Redirecting to attendees tab..."}),m(S)&&function(e){return"pending"===e}(g)?(i({status:"success",message:"Updated enrollment. Client will be notified."}),u(!1)):i({status:"success",message:"Updated enrollment. Redirecting..."}),e.order.status){case"waiting-list":case"attendees":document.location.assign(`/wp-admin/post.php?post=${e.order.id}&action=edit&tab=attendees`);break;case"pending":document.location.assign(`/wp-admin/post.php?post=${e.order.id}&action=edit&tab=payment`);break;default:document.location.reload()}}catch(t){i({status:"error",message:t.message}),console.error(t),u(!1),p(!1)}}},(0,t.createElement)("input",{type:"hidden",name:"email",value:e.order.billing.email||e.user.data.user_email}),(0,t.createElement)("input",{type:"hidden",name:"currency",value:e.order.currency||e.currency}),(0,t.createElement)("input",{type:"hidden",name:"customer_id",value:e.order.customer_id||e.user.ID}),(0,t.createElement)("div",{id:"order_data",class:"panel woocommerce-order-data"},(0,t.createElement)("div",{class:"form-wrap"},(0,t.createElement)("h3",null,"Order"),!h(e.status)&&(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:"order_status"},"Status",(0,t.createElement)("span",{class:"required"}," *")),(0,t.createElement)(y,{id:"order_status",disabled:d,name:"order_status",user:e?.user,order:e?.order,status:g,setStatus:w,apiPath:e.orderApiPath,nonce:e.nonce})))),(0,t.createElement)(f,{productId:e?.order?.line_items[0]?.product_id||e.productId,nonce:e.nonce,setSubmitButtonDisabled:p,groupApiPath:e.groupApiPath,productApiPath:e.productApiPath,order:e.order,setStatus:w,user:e?.user})),(0,t.createElement)("div",{class:"form-wrap"},(0,t.createElement)("div",{class:"form-field"},r&&(0,t.createElement)(n.Notice,{status:r.status,isDismissable:!0,onDismiss:()=>i(null)},r.message),(0,t.createElement)("button",{disabled:d,type:"submit",class:"button save_order wp-element-button button-primary",name:"save",value:"Create"},v),o&&(0,t.createElement)(n.Spinner,null)))))};var w=window.wp.url;const v=e=>{const r=(0,t.useCallback)((0,a.debounce)((function(e){i.current.value=e.target.value,u(e.target.value)}),500)),i=(0,t.useRef)(null),[o,u]=(0,t.useState)(""),[l,c]=(0,t.useState)([]),[d,m]=(0,t.useState)([]),[h,f]=(0,t.useState)(!1),[p,y]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{(0,a.isNil)(e?.options)||(y(!1),m(e.options))}),[e?.options]),(0,t.useEffect)((()=>{(0,a.isNil)(e?.defaultValue)||(i.current.value=e.defaultValue)}),[e?.defaultValue]),(0,t.useEffect)((()=>{l?.length&&m(function(t){return t.map((t=>{const n={label:t.acf[e.acfFieldName],value:t.id};return e?.acfClarifyingFieldName&&(n.label+=`, ${t.acf[e.acfClarifyingFieldName]}`),n}))}(l))}),[l]),(0,t.useEffect)((()=>{if(!(0,a.isNil)(o))if(o.length>0){async function t(){y(!0);const t=await async function(t){const n=new URLSearchParams(window.location.search),r=t?{order_id:n.get("post"),acf_field_name:e.acfFieldName,acf_field_value:t}:{};return s().use(s().createNonceMiddleware(e.nonce)),await s()({path:(0,w.addQueryArgs)("/wp/v2/attendee",r)})}(o);y(!1),i.current.value&&i.current.matches(":focus")&&c(t)}t()}else r.cancel(),m([]),y(!1)}),[o]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("p",{class:"description"},e.helpText),(0,t.createElement)("input",{name:e.name,id:e.id,type:"text",ref:i,maxlength:e?.maxlength||32,minlength:e?.minlength||1,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern,readonly:e?.readonly||!1,disabled:e?.disabled||!1,onChange:r,onBlur:function(e){y(!1)},onFocus:e.handleFocus}),p&&0===d.length&&(0,t.createElement)(n.Spinner,null),!p&&d.length>0&&(0,t.createElement)(n.RadioControl,{options:d,onChange:function(t){i.current.value=t;const n=l.find((e=>e.id===parseInt(t)));e.handleSelect(n)}}))};class b extends Error{}class S extends b{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class E extends b{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class T extends b{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class N extends b{}class O extends b{constructor(e){super(`Invalid unit ${e}`)}}class k extends b{}class x extends b{constructor(){super("Zone is an abstract class")}}const M="numeric",I="short",D="long",V={year:M,month:M,day:M},$={year:M,month:I,day:M},_={year:M,month:I,day:M,weekday:I},F={year:M,month:D,day:M},C={year:M,month:D,day:M,weekday:D},q={hour:M,minute:M},Z={hour:M,minute:M,second:M},L={hour:M,minute:M,second:M,timeZoneName:I},A={hour:M,minute:M,second:M,timeZoneName:D},z={hour:M,minute:M,hourCycle:"h23"},j={hour:M,minute:M,second:M,hourCycle:"h23"},P={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:I},U={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:D},R={year:M,month:M,day:M,hour:M,minute:M},J={year:M,month:M,day:M,hour:M,minute:M,second:M},H={year:M,month:I,day:M,hour:M,minute:M},W={year:M,month:I,day:M,hour:M,minute:M,second:M},Y={year:M,month:I,day:M,weekday:I,hour:M,minute:M},G={year:M,month:D,day:M,hour:M,minute:M,timeZoneName:I},B={year:M,month:D,day:M,hour:M,minute:M,second:M,timeZoneName:I},Q={year:M,month:D,day:M,weekday:D,hour:M,minute:M,timeZoneName:D},K={year:M,month:D,day:M,weekday:D,hour:M,minute:M,second:M,timeZoneName:D};class X{get type(){throw new x}get name(){throw new x}get ianaName(){return this.name}get isUniversal(){throw new x}offsetName(e,t){throw new x}formatOffset(e,t){throw new x}offset(e){throw new x}equals(e){throw new x}get isValid(){throw new x}}let ee=null;class te extends X{static get instance(){return null===ee&&(ee=new te),ee}get type(){return"system"}get name(){return(new Intl.DateTimeFormat).resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return We(e,t,n)}formatOffset(e,t){return Qe(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return"system"===e.type}get isValid(){return!0}}let ne={};const re={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};let se={};class ae extends X{static create(e){return se[e]||(se[e]=new ae(e)),se[e]}static resetCache(){se={},ne={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}}constructor(e){super(),this.zoneName=e,this.valid=ae.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return We(e,t,n,this.name)}formatOffset(e,t){return Qe(this.offset(e),t)}offset(e){const t=new Date(e);if(isNaN(t))return NaN;const n=(r=this.name,ne[r]||(ne[r]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),ne[r]);var r;let[s,a,i,o,u,l,c]=n.formatToParts?function(e,t){const n=e.formatToParts(t),r=[];for(let e=0;e<n.length;e++){const{type:t,value:s}=n[e],a=re[t];"era"===t?r[a]=s:Ie(a)||(r[a]=parseInt(s,10))}return r}(n,t):function(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,s,a,i,o,u,l,c]=r;return[i,s,a,o,u,l,c]}(n,t);"BC"===o&&(s=1-Math.abs(s));let d=+t;const m=d%1e3;return d-=m>=0?m:1e3+m,(Re({year:s,month:a,day:i,hour:24===u?0:u,minute:l,second:c,millisecond:0})-d)/6e4}equals(e){return"iana"===e.type&&e.name===this.name}get isValid(){return this.valid}}let ie={},oe={};function ue(e,t={}){const n=JSON.stringify([e,t]);let r=oe[n];return r||(r=new Intl.DateTimeFormat(e,t),oe[n]=r),r}let le={},ce={},de=null;function me(e,t,n,r,s){const a=e.listingMode(n);return"error"===a?null:"en"===a?r(t):s(t)}class he{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:r,floor:s,...a}=n;if(!t||Object.keys(a).length>0){const t={useGrouping:!1,...n};n.padTo>0&&(t.minimumIntegerDigits=n.padTo),this.inf=function(e,t={}){const n=JSON.stringify([e,t]);let r=le[n];return r||(r=new Intl.NumberFormat(e,t),le[n]=r),r}(e,t)}}format(e){if(this.inf){const t=this.floor?Math.floor(e):e;return this.inf.format(t)}return qe(this.floor?Math.floor(e):ze(e,3),this.padTo)}}class fe{constructor(e,t,n){let r;if(this.opts=n,this.originalZone=void 0,this.opts.timeZone)this.dt=e;else if("fixed"===e.zone.type){const t=e.offset/60*-1,n=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;0!==e.offset&&ae.create(n).valid?(r=n,this.dt=e):(r="UTC",this.dt=0===e.offset?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else"system"===e.zone.type?this.dt=e:"iana"===e.zone.type?(this.dt=e,r=e.zone.name):(r="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const s={...this.opts};s.timeZone=s.timeZone||r,this.dtf=ue(t,s)}format(){return this.originalZone?this.formatToParts().map((({value:e})=>e)).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map((e=>{if("timeZoneName"===e.type){const t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}return e})):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class pe{constructor(e,t,n){this.opts={style:"long",...n},!t&&$e()&&(this.rtf=function(e,t={}){const{base:n,...r}=t,s=JSON.stringify([e,r]);let a=ce[s];return a||(a=new Intl.RelativeTimeFormat(e,t),ce[s]=a),a}(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,n="always",r=!1){const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},a=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===n&&a){const n="days"===e;switch(t){case 1:return n?"tomorrow":`next ${s[e][0]}`;case-1:return n?"yesterday":`last ${s[e][0]}`;case 0:return n?"today":`this ${s[e][0]}`}}const i=Object.is(t,-0)||t<0,o=Math.abs(t),u=1===o,l=s[e],c=r?u?l[1]:l[2]||l[1]:u?s[e][0]:e;return i?`${o} ${c} ago`:`in ${o} ${c}`}(t,e,this.opts.numeric,"long"!==this.opts.style)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}}class ye{static fromOpts(e){return ye.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,t,n,r=!1){const s=e||Me.defaultLocale,a=s||(r?"en-US":de||(de=(new Intl.DateTimeFormat).resolvedOptions().locale,de)),i=t||Me.defaultNumberingSystem,o=n||Me.defaultOutputCalendar;return new ye(a,i,o,s)}static resetCache(){de=null,oe={},le={},ce={}}static fromObject({locale:e,numberingSystem:t,outputCalendar:n}={}){return ye.create(e,t,n)}constructor(e,t,n,r){const[s,a,i]=function(e){const t=e.indexOf("-x-");-1!==t&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(-1===n)return[e];{let t,r;try{t=ue(e).resolvedOptions(),r=e}catch(s){const a=e.substring(0,n);t=ue(a).resolvedOptions(),r=a}const{numberingSystem:s,calendar:a}=t;return[r,s,a]}}(e);this.locale=s,this.numberingSystem=t||a||null,this.outputCalendar=n||i||null,this.intl=function(e,t,n){return n||t?(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`),e):e}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}get fastNumbers(){var e;return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(e=this).numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),t=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar);return e&&t?"en":"intl"}clone(e){return e&&0!==Object.getOwnPropertyNames(e).length?ye.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1):this}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1,n=!0){return me(this,e,n,nt,(()=>{const n=t?{month:e,day:"numeric"}:{month:e},r=t?"format":"standalone";return this.monthsCache[r][e]||(this.monthsCache[r][e]=function(e){const t=[];for(let n=1;n<=12;n++){const r=pr.utc(2016,n,1);t.push(e(r))}return t}((e=>this.extract(e,n,"month")))),this.monthsCache[r][e]}))}weekdays(e,t=!1,n=!0){return me(this,e,n,it,(()=>{const n=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},r=t?"format":"standalone";return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=function(e){const t=[];for(let n=1;n<=7;n++){const r=pr.utc(2016,11,13+n);t.push(e(r))}return t}((e=>this.extract(e,n,"weekday")))),this.weekdaysCache[r][e]}))}meridiems(e=!0){return me(this,void 0,e,(()=>ot),(()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[pr.utc(2016,11,13,9),pr.utc(2016,11,13,19)].map((t=>this.extract(t,e,"dayperiod")))}return this.meridiemCache}))}eras(e,t=!0){return me(this,e,t,dt,(()=>{const t={era:e};return this.eraCache[e]||(this.eraCache[e]=[pr.utc(-40,1,1),pr.utc(2017,1,1)].map((e=>this.extract(e,t,"era")))),this.eraCache[e]}))}extract(e,t,n){const r=this.dtFormatter(e,t).formatToParts().find((e=>e.type.toLowerCase()===n));return r?r.value:null}numberFormatter(e={}){return new he(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new fe(e,this.intl,t)}relFormatter(e={}){return new pe(this.intl,this.isEnglish(),e)}listFormatter(e={}){return function(e,t={}){const n=JSON.stringify([e,t]);let r=ie[n];return r||(r=new Intl.ListFormat(e,t),ie[n]=r),r}(this.intl,e)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let ge=null;class we extends X{static get utcInstance(){return null===ge&&(ge=new we(0)),ge}static instance(e){return 0===e?we.utcInstance:new we(e)}static parseSpecifier(e){if(e){const t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new we(Ye(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${Qe(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${Qe(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return Qe(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return"fixed"===e.type&&e.fixed===this.fixed}get isValid(){return!0}}class ve extends X{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function be(e,t){if(Ie(e)||null===e)return t;if(e instanceof X)return e;if("string"==typeof e){const n=e.toLowerCase();return"default"===n?t:"local"===n||"system"===n?te.instance:"utc"===n||"gmt"===n?we.utcInstance:we.parseSpecifier(n)||ae.create(e)}return De(e)?we.instance(e):"object"==typeof e&&e.offset&&"number"==typeof e.offset?e:new ve(e)}let Se,Ee=()=>Date.now(),Te="system",Ne=null,Oe=null,ke=null,xe=60;class Me{static get now(){return Ee}static set now(e){Ee=e}static set defaultZone(e){Te=e}static get defaultZone(){return be(Te,te.instance)}static get defaultLocale(){return Ne}static set defaultLocale(e){Ne=e}static get defaultNumberingSystem(){return Oe}static set defaultNumberingSystem(e){Oe=e}static get defaultOutputCalendar(){return ke}static set defaultOutputCalendar(e){ke=e}static get twoDigitCutoffYear(){return xe}static set twoDigitCutoffYear(e){xe=e%100}static get throwOnInvalid(){return Se}static set throwOnInvalid(e){Se=e}static resetCaches(){ye.resetCache(),ae.resetCache()}}function Ie(e){return void 0===e}function De(e){return"number"==typeof e}function Ve(e){return"number"==typeof e&&e%1==0}function $e(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function _e(e,t,n){if(0!==e.length)return e.reduce(((e,r)=>{const s=[t(r),r];return e&&n(e[0],s[0])===e[0]?e:s}),null)[1]}function Fe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ce(e,t,n){return Ve(e)&&e>=t&&e<=n}function qe(e,t=2){let n;return n=e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0"),n}function Ze(e){return Ie(e)||null===e||""===e?void 0:parseInt(e,10)}function Le(e){return Ie(e)||null===e||""===e?void 0:parseFloat(e)}function Ae(e){if(!Ie(e)&&null!==e&&""!==e){const t=1e3*parseFloat("0."+e);return Math.floor(t)}}function ze(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function je(e){return e%4==0&&(e%100!=0||e%400==0)}function Pe(e){return je(e)?366:365}function Ue(e,t){const n=(r=t-1)-12*Math.floor(r/12)+1;var r;return 2===n?je(e+(t-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Re(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Je(e){const t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,n=e-1,r=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7;return 4===t||3===r?53:52}function He(e){return e>99?e:e>Me.twoDigitCutoffYear?1900+e:2e3+e}function We(e,t,n,r=null){const s=new Date(e),a={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(a.timeZone=r);const i={timeZoneName:t,...a},o=new Intl.DateTimeFormat(n,i).formatToParts(s).find((e=>"timezonename"===e.type.toLowerCase()));return o?o.value:null}function Ye(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0;return 60*n+(n<0||Object.is(n,-0)?-r:r)}function Ge(e){const t=Number(e);if("boolean"==typeof e||""===e||Number.isNaN(t))throw new k(`Invalid unit value ${e}`);return t}function Be(e,t){const n={};for(const r in e)if(Fe(e,r)){const s=e[r];if(null==s)continue;n[t(r)]=Ge(s)}return n}function Qe(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),s=e>=0?"+":"-";switch(t){case"short":return`${s}${qe(n,2)}:${qe(r,2)}`;case"narrow":return`${s}${n}${r>0?`:${r}`:""}`;case"techie":return`${s}${qe(n,2)}${qe(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Ke(e){return function(e,t){return["hour","minute","second","millisecond"].reduce(((t,n)=>(t[n]=e[n],t)),{})}(e)}const Xe=["January","February","March","April","May","June","July","August","September","October","November","December"],et=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tt=["J","F","M","A","M","J","J","A","S","O","N","D"];function nt(e){switch(e){case"narrow":return[...tt];case"short":return[...et];case"long":return[...Xe];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const rt=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],st=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],at=["M","T","W","T","F","S","S"];function it(e){switch(e){case"narrow":return[...at];case"short":return[...st];case"long":return[...rt];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const ot=["AM","PM"],ut=["Before Christ","Anno Domini"],lt=["BC","AD"],ct=["B","A"];function dt(e){switch(e){case"narrow":return[...ct];case"short":return[...lt];case"long":return[...ut];default:return null}}function mt(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const ht={D:V,DD:$,DDD:F,DDDD:C,t:q,tt:Z,ttt:L,tttt:A,T:z,TT:j,TTT:P,TTTT:U,f:R,ff:H,fff:G,ffff:Q,F:J,FF:W,FFF:B,FFFF:K};class ft{static create(e,t={}){return new ft(e,t)}static parseFormat(e){let t=null,n="",r=!1;const s=[];for(let a=0;a<e.length;a++){const i=e.charAt(a);"'"===i?(n.length>0&&s.push({literal:r||/^\s+$/.test(n),val:n}),t=null,n="",r=!r):r||i===t?n+=i:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=i,t=i)}return n.length>0&&s.push({literal:r||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(e){return ht[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}formatDateTime(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t}).format()}formatDateTimeParts(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t}).formatToParts()}formatInterval(e,t={}){return this.loc.dtFormatter(e.start,{...this.opts,...t}).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t}).resolvedOptions()}num(e,t=0){if(this.opts.forceSimple)return qe(e,t);const n={...this.opts};return t>0&&(n.padTo=t),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,t){const n="en"===this.loc.listingMode(),r=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,s=(t,n)=>this.loc.extract(e,t,n),a=t=>e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):"",i=(t,r)=>n?function(e,t){return nt(t)[e.month-1]}(e,t):s(r?{month:t}:{month:t,day:"numeric"},"month"),o=(t,r)=>n?function(e,t){return it(t)[e.weekday-1]}(e,t):s(r?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday"),u=t=>{const n=ft.macroTokenToFormatOpts(t);return n?this.formatWithSystemDefault(e,n):t},l=t=>n?function(e,t){return dt(t)[e.year<0?0:1]}(e,t):s({era:t},"era");return mt(ft.parseFormat(t),(t=>{switch(t){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12==0?12:e.hour%12);case"hh":return this.num(e.hour%12==0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return n?function(e){return ot[e.hour<12?0:1]}(e):s({hour:"numeric",hourCycle:"h12"},"dayperiod");case"d":return r?s({day:"numeric"},"day"):this.num(e.day);case"dd":return r?s({day:"2-digit"},"day"):this.num(e.day,2);case"c":case"E":return this.num(e.weekday);case"ccc":return o("short",!0);case"cccc":return o("long",!0);case"ccccc":return o("narrow",!0);case"EEE":return o("short",!1);case"EEEE":return o("long",!1);case"EEEEE":return o("narrow",!1);case"L":return r?s({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return r?s({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return i("short",!0);case"LLLL":return i("long",!0);case"LLLLL":return i("narrow",!0);case"M":return r?s({month:"numeric"},"month"):this.num(e.month);case"MM":return r?s({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return i("short",!1);case"MMMM":return i("long",!1);case"MMMMM":return i("narrow",!1);case"y":return r?s({year:"numeric"},"year"):this.num(e.year);case"yy":return r?s({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return r?s({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return r?s({year:"numeric"},"year"):this.num(e.year,6);case"G":return l("short");case"GG":return l("long");case"GGGGG":return l("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return u(t)}}))}formatDurationFromString(e,t){const n=e=>{switch(e[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},r=ft.parseFormat(t),s=r.reduce(((e,{literal:t,val:n})=>t?e:e.concat(n)),[]);return mt(r,(e=>t=>{const r=n(t);return r?this.num(e.get(r),t.length):t})(e.shiftTo(...s.map(n).filter((e=>e)))))}}class pt{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const yt=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function gt(...e){const t=e.reduce(((e,t)=>e+t.source),"");return RegExp(`^${t}$`)}function wt(...e){return t=>e.reduce((([e,n,r],s)=>{const[a,i,o]=s(t,r);return[{...e,...a},i||n,o]}),[{},null,1]).slice(0,2)}function vt(e,...t){if(null==e)return[null,null];for(const[n,r]of t){const t=n.exec(e);if(t)return r(t)}return[null,null]}function bt(...e){return(t,n)=>{const r={};let s;for(s=0;s<e.length;s++)r[e[s]]=Ze(t[n+s]);return[r,null,n+s]}}const St=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Et=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Tt=RegExp(`${Et.source}(?:${St.source}?(?:\\[(${yt.source})\\])?)?`),Nt=RegExp(`(?:T${Tt.source})?`),Ot=bt("weekYear","weekNumber","weekDay"),kt=bt("year","ordinal"),xt=RegExp(`${Et.source} ?(?:${St.source}|(${yt.source}))?`),Mt=RegExp(`(?: ${xt.source})?`);function It(e,t,n){const r=e[t];return Ie(r)?n:Ze(r)}function Dt(e,t){return[{hours:It(e,t,0),minutes:It(e,t+1,0),seconds:It(e,t+2,0),milliseconds:Ae(e[t+3])},null,t+4]}function Vt(e,t){const n=!e[t]&&!e[t+1],r=Ye(e[t+1],e[t+2]);return[{},n?null:we.instance(r),t+3]}function $t(e,t){return[{},e[t]?ae.create(e[t]):null,t+1]}const _t=RegExp(`^T?${Et.source}$`),Ft=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Ct(e){const[t,n,r,s,a,i,o,u,l]=e,c="-"===t[0],d=u&&"-"===u[0],m=(e,t=!1)=>void 0!==e&&(t||e&&c)?-e:e;return[{years:m(Le(n)),months:m(Le(r)),weeks:m(Le(s)),days:m(Le(a)),hours:m(Le(i)),minutes:m(Le(o)),seconds:m(Le(u),"-0"===u),milliseconds:m(Ae(l),d)}]}const qt={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Zt(e,t,n,r,s,a,i){const o={year:2===t.length?He(Ze(t)):Ze(t),month:et.indexOf(n)+1,day:Ze(r),hour:Ze(s),minute:Ze(a)};return i&&(o.second=Ze(i)),e&&(o.weekday=e.length>3?rt.indexOf(e)+1:st.indexOf(e)+1),o}const Lt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function At(e){const[,t,n,r,s,a,i,o,u,l,c,d]=e,m=Zt(t,s,r,n,a,i,o);let h;return h=u?qt[u]:l?0:Ye(c,d),[m,new we(h)]}const zt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,jt=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Pt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ut(e){const[,t,n,r,s,a,i,o]=e;return[Zt(t,s,r,n,a,i,o),we.utcInstance]}function Rt(e){const[,t,n,r,s,a,i,o]=e;return[Zt(t,o,n,r,s,a,i),we.utcInstance]}const Jt=gt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Nt),Ht=gt(/(\d{4})-?W(\d\d)(?:-?(\d))?/,Nt),Wt=gt(/(\d{4})-?(\d{3})/,Nt),Yt=gt(Tt),Gt=wt((function(e,t){return[{year:It(e,t),month:It(e,t+1,1),day:It(e,t+2,1)},null,t+3]}),Dt,Vt,$t),Bt=wt(Ot,Dt,Vt,$t),Qt=wt(kt,Dt,Vt,$t),Kt=wt(Dt,Vt,$t),Xt=wt(Dt),en=gt(/(\d{4})-(\d\d)-(\d\d)/,Mt),tn=gt(xt),nn=wt(Dt,Vt,$t),rn={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},sn={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...rn},an={years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:4.3481250000000005,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3},...rn},on=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],un=on.slice(0).reverse();function ln(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new dn(r)}function cn(e,t,n,r,s){const a=e[s][n],i=t[n]/a,o=Math.sign(i)!==Math.sign(r[s])&&0!==r[s]&&Math.abs(i)<=1?function(e){return e<0?Math.floor(e):Math.ceil(e)}(i):Math.trunc(i);r[s]+=o,t[n]-=o*a}class dn{constructor(e){const t="longterm"===e.conversionAccuracy||!1;let n=t?an:sn;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||ye.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,t){return dn.fromObject({milliseconds:e},t)}static fromObject(e,t={}){if(null==e||"object"!=typeof e)throw new k("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e));return new dn({values:Be(e,dn.normalizeUnit),loc:ye.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(e){if(De(e))return dn.fromMillis(e);if(dn.isDuration(e))return e;if("object"==typeof e)return dn.fromObject(e);throw new k(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,t){const[n]=function(e){return vt(e,[Ft,Ct])}(e);return n?dn.fromObject(n,t):dn.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,t){const[n]=function(e){return vt(e,[_t,Xt])}(e);return n?dn.fromObject(n,t):dn.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,t=null){if(!e)throw new k("need to specify a reason the Duration is invalid");const n=e instanceof pt?e:new pt(e,t);if(Me.throwOnInvalid)throw new T(n);return new dn({invalid:n})}static normalizeUnit(e){const t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new O(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){const n={...t,floor:!1!==t.round&&!1!==t.floor};return this.isValid?ft.create(this.loc,n).formatDurationFromString(this,e):"Invalid Duration"}toHuman(e={}){const t=on.map((t=>{const n=this.values[t];return Ie(n)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:t.slice(0,-1)}).format(n)})).filter((e=>e));return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(t)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return 0!==this.years&&(e+=this.years+"Y"),0===this.months&&0===this.quarters||(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(e+=ze(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const t=this.toMillis();if(t<0||t>=864e5)return null;e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e};const n=this.shiftTo("hours","minutes","seconds","milliseconds");let r="basic"===e.format?"hhmm":"hh:mm";e.suppressSeconds&&0===n.seconds&&0===n.milliseconds||(r+="basic"===e.format?"ss":":ss",e.suppressMilliseconds&&0===n.milliseconds||(r+=".SSS"));let s=n.toFormat(r);return e.includePrefix&&(s="T"+s),s}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.as("milliseconds")}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const t=dn.fromDurationLike(e),n={};for(const e of on)(Fe(t.values,e)||Fe(this.values,e))&&(n[e]=t.get(e)+this.get(e));return ln(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const t=dn.fromDurationLike(e);return this.plus(t.negate())}mapUnits(e){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=Ge(e(this.values[n],n));return ln(this,{values:t},!0)}get(e){return this[dn.normalizeUnit(e)]}set(e){return this.isValid?ln(this,{values:{...this.values,...Be(e,dn.normalizeUnit)}}):this}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}={}){return ln(this,{loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:n})}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return function(e,t){un.reduce(((n,r)=>Ie(t[r])?n:(n&&cn(e,t,n,t,r),r)),null)}(this.matrix,e),ln(this,{values:e},!0)}rescale(){return this.isValid?ln(this,{values:function(e){const t={};for(const[n,r]of Object.entries(e))0!==r&&(t[n]=r);return t}(this.normalize().shiftToAll().toObject())},!0):this}shiftTo(...e){if(!this.isValid)return this;if(0===e.length)return this;e=e.map((e=>dn.normalizeUnit(e)));const t={},n={},r=this.toObject();let s;for(const a of on)if(e.indexOf(a)>=0){s=a;let e=0;for(const t in n)e+=this.matrix[t][a]*n[t],n[t]=0;De(r[a])&&(e+=r[a]);const i=Math.trunc(e);t[a]=i,n[a]=(1e3*e-1e3*i)/1e3;for(const e in r)on.indexOf(e)>on.indexOf(a)&&cn(this.matrix,r,e,t,a)}else De(r[a])&&(n[a]=r[a]);for(const e in n)0!==n[e]&&(t[s]+=e===s?n[e]:n[e]/this.matrix[s][e]);return ln(this,{values:t},!0).normalize()}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const t of Object.keys(this.values))e[t]=0===this.values[t]?0:-this.values[t];return ln(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid)return!1;if(!this.loc.equals(e.loc))return!1;for(const r of on)if(t=this.values[r],n=e.values[r],!(void 0===t||0===t?void 0===n||0===n:t===n))return!1;var t,n;return!0}}const mn="Invalid Interval";class hn{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,t=null){if(!e)throw new k("need to specify a reason the Interval is invalid");const n=e instanceof pt?e:new pt(e,t);if(Me.throwOnInvalid)throw new E(n);return new hn({invalid:n})}static fromDateTimes(e,t){const n=yr(e),r=yr(t),s=function(e,t){return e&&e.isValid?t&&t.isValid?t<e?hn.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null:hn.invalid("missing or invalid end"):hn.invalid("missing or invalid start")}(n,r);return null==s?new hn({start:n,end:r}):s}static after(e,t){const n=dn.fromDurationLike(t),r=yr(e);return hn.fromDateTimes(r,r.plus(n))}static before(e,t){const n=dn.fromDurationLike(t),r=yr(e);return hn.fromDateTimes(r.minus(n),r)}static fromISO(e,t){const[n,r]=(e||"").split("/",2);if(n&&r){let e,s,a,i;try{e=pr.fromISO(n,t),s=e.isValid}catch(r){s=!1}try{a=pr.fromISO(r,t),i=a.isValid}catch(r){i=!1}if(s&&i)return hn.fromDateTimes(e,a);if(s){const n=dn.fromISO(r,t);if(n.isValid)return hn.after(e,n)}else if(i){const e=dn.fromISO(n,t);if(e.isValid)return hn.before(a,e)}}return hn.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;const t=this.start.startOf(e),n=this.end.startOf(e);return Math.floor(n.diff(t,e).get(e))+(n.valueOf()!==this.end.valueOf())}hasSame(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return!!this.isValid&&this.s>e}isBefore(e){return!!this.isValid&&this.e<=e}contains(e){return!!this.isValid&&this.s<=e&&this.e>e}set({start:e,end:t}={}){return this.isValid?hn.fromDateTimes(e||this.s,t||this.e):this}splitAt(...e){if(!this.isValid)return[];const t=e.map(yr).filter((e=>this.contains(e))).sort(),n=[];let{s:r}=this,s=0;for(;r<this.e;){const e=t[s]||this.e,a=+e>+this.e?this.e:e;n.push(hn.fromDateTimes(r,a)),r=a,s+=1}return n}splitBy(e){const t=dn.fromDurationLike(e);if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[];let n,{s:r}=this,s=1;const a=[];for(;r<this.e;){const e=this.start.plus(t.mapUnits((e=>e*s)));n=+e>+this.e?this.e:e,a.push(hn.fromDateTimes(r,n)),r=n,s+=1}return a}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return!!this.isValid&&+this.e==+e.s}abutsEnd(e){return!!this.isValid&&+e.e==+this.s}engulfs(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e}equals(e){return!(!this.isValid||!e.isValid)&&this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const t=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return t>=n?null:hn.fromDateTimes(t,n)}union(e){if(!this.isValid)return this;const t=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return hn.fromDateTimes(t,n)}static merge(e){const[t,n]=e.sort(((e,t)=>e.s-t.s)).reduce((([e,t],n)=>t?t.overlaps(n)||t.abutsStart(n)?[e,t.union(n)]:[e.concat([t]),n]:[e,n]),[[],null]);return n&&t.push(n),t}static xor(e){let t=null,n=0;const r=[],s=e.map((e=>[{time:e.s,type:"s"},{time:e.e,type:"e"}])),a=Array.prototype.concat(...s).sort(((e,t)=>e.time-t.time));for(const e of a)n+="s"===e.type?1:-1,1===n?t=e.time:(t&&+t!=+e.time&&r.push(hn.fromDateTimes(t,e.time)),t=null);return hn.merge(r)}difference(...e){return hn.xor([this].concat(e)).map((e=>this.intersection(e))).filter((e=>e&&!e.isEmpty()))}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:mn}toLocaleString(e=V,t={}){return this.isValid?ft.create(this.s.loc.clone(t),e).formatInterval(this):mn}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:mn}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:mn}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:mn}toFormat(e,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:mn}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):dn.invalid(this.invalidReason)}mapEndpoints(e){return hn.fromDateTimes(e(this.s),e(this.e))}}class fn{static hasDST(e=Me.defaultZone){const t=pr.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return ae.isValidZone(e)}static normalizeZone(e){return be(e,Me.defaultZone)}static months(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:s="gregory"}={}){return(r||ye.create(t,n,s)).months(e)}static monthsFormat(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:s="gregory"}={}){return(r||ye.create(t,n,s)).months(e,!0)}static weekdays(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||ye.create(t,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||ye.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return ye.create(e).meridiems()}static eras(e="short",{locale:t=null}={}){return ye.create(t,null,"gregory").eras(e)}static features(){return{relative:$e()}}}function pn(e,t){const n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(dn.fromMillis(r).as("days"))}const yn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},gn={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},wn=yn.hanidec.replace(/[\[|\]]/g,"").split("");function vn({numberingSystem:e},t=""){return new RegExp(`${yn[e||"latn"]}${t}`)}function bn(e,t=(e=>e)){return{regex:e,deser:([e])=>t(function(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(-1!==e[n].search(yn.hanidec))t+=wn.indexOf(e[n]);else for(const e in gn){const[n,s]=gn[e];r>=n&&r<=s&&(t+=r-n)}}return parseInt(t,10)}return t}(e))}}const Sn=`[ ${String.fromCharCode(160)}]`,En=new RegExp(Sn,"g");function Tn(e){return e.replace(/\./g,"\\.?").replace(En,Sn)}function Nn(e){return e.replace(/\./g,"").replace(En," ").toLowerCase()}function On(e,t){return null===e?null:{regex:RegExp(e.map(Tn).join("|")),deser:([n])=>e.findIndex((e=>Nn(n)===Nn(e)))+t}}function kn(e,t){return{regex:e,deser:([,e,t])=>Ye(e,t),groups:t}}function xn(e){return{regex:e,deser:([e])=>e}}const Mn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};let In=null;function Dn(e,t){return Array.prototype.concat(...e.map((e=>function(e,t){if(e.literal)return e;const n=$n(ft.macroTokenToFormatOpts(e.val),t);return null==n||n.includes(void 0)?e:n}(e,t))))}function Vn(e,t,n){const r=Dn(ft.parseFormat(n),e),s=r.map((t=>function(e,t){const n=vn(t),r=vn(t,"{2}"),s=vn(t,"{3}"),a=vn(t,"{4}"),i=vn(t,"{6}"),o=vn(t,"{1,2}"),u=vn(t,"{1,3}"),l=vn(t,"{1,6}"),c=vn(t,"{1,9}"),d=vn(t,"{2,4}"),m=vn(t,"{4,6}"),h=e=>{return{regex:RegExp((t=e.val,t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"))),deser:([e])=>e,literal:!0};var t},f=(f=>{if(e.literal)return h(f);switch(f.val){case"G":return On(t.eras("short",!1),0);case"GG":return On(t.eras("long",!1),0);case"y":return bn(l);case"yy":case"kk":return bn(d,He);case"yyyy":case"kkkk":return bn(a);case"yyyyy":return bn(m);case"yyyyyy":return bn(i);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return bn(o);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return bn(r);case"MMM":return On(t.months("short",!0,!1),1);case"MMMM":return On(t.months("long",!0,!1),1);case"LLL":return On(t.months("short",!1,!1),1);case"LLLL":return On(t.months("long",!1,!1),1);case"o":case"S":return bn(u);case"ooo":case"SSS":return bn(s);case"u":return xn(c);case"uu":return xn(o);case"uuu":case"E":case"c":return bn(n);case"a":return On(t.meridiems(),0);case"EEE":return On(t.weekdays("short",!1,!1),1);case"EEEE":return On(t.weekdays("long",!1,!1),1);case"ccc":return On(t.weekdays("short",!0,!1),1);case"cccc":return On(t.weekdays("long",!0,!1),1);case"Z":case"ZZ":return kn(new RegExp(`([+-]${o.source})(?::(${r.source}))?`),2);case"ZZZ":return kn(new RegExp(`([+-]${o.source})(${r.source})?`),2);case"z":return xn(/[a-z_+-/]{1,256}?/i);case" ":return xn(/[^\S\n\r]/);default:return h(f)}})(e)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"};return f.token=e,f}(t,e))),a=s.find((e=>e.invalidReason));if(a)return{input:t,tokens:r,invalidReason:a.invalidReason};{const[e,n]=function(e){return[`^${e.map((e=>e.regex)).reduce(((e,t)=>`${e}(${t.source})`),"")}$`,e]}(s),a=RegExp(e,"i"),[i,o]=function(e,t,n){const r=e.match(t);if(r){const e={};let t=1;for(const s in n)if(Fe(n,s)){const a=n[s],i=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(r.slice(t,t+i))),t+=i}return[r,e]}return[r,{}]}(t,a,n),[u,l,c]=o?function(e){let t,n=null;return Ie(e.z)||(n=ae.create(e.z)),Ie(e.Z)||(n||(n=new we(e.Z)),t=e.Z),Ie(e.q)||(e.M=3*(e.q-1)+1),Ie(e.h)||(e.h<12&&1===e.a?e.h+=12:12===e.h&&0===e.a&&(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),Ie(e.u)||(e.S=Ae(e.u)),[Object.keys(e).reduce(((t,n)=>{const r=(e=>{switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}})(n);return r&&(t[r]=e[n]),t}),{}),n,t]}(o):[null,null,void 0];if(Fe(o,"a")&&Fe(o,"H"))throw new N("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:r,regex:a,rawMatches:i,matches:o,result:u,zone:l,specificOffset:c}}}function $n(e,t){return e?ft.create(t,e).formatDateTimeParts((In||(In=pr.fromMillis(1555555555555)),In)).map((t=>function(e,t){const{type:n,value:r}=e;if("literal"===n){const e=/^\s+$/.test(r);return{literal:!e,val:e?" ":r}}const s=t[n];let a=Mn[n];if("object"==typeof a&&(a=a[s]),a)return{literal:!1,val:a}}(t,e))):null}const Fn=[0,31,59,90,120,151,181,212,243,273,304,334],Cn=[0,31,60,91,121,152,182,213,244,274,305,335];function qn(e,t){return new pt("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Zn(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const s=r.getUTCDay();return 0===s?7:s}function Ln(e,t,n){return n+(je(e)?Cn:Fn)[t-1]}function An(e,t){const n=je(e)?Cn:Fn,r=n.findIndex((e=>e<t));return{month:r+1,day:t-n[r]}}function zn(e){const{year:t,month:n,day:r}=e,s=Ln(t,n,r),a=Zn(t,n,r);let i,o=Math.floor((s-a+10)/7);return o<1?(i=t-1,o=Je(i)):o>Je(t)?(i=t+1,o=1):i=t,{weekYear:i,weekNumber:o,weekday:a,...Ke(e)}}function jn(e){const{weekYear:t,weekNumber:n,weekday:r}=e,s=Zn(t,1,4),a=Pe(t);let i,o=7*n+r-s-3;o<1?(i=t-1,o+=Pe(i)):o>a?(i=t+1,o-=Pe(t)):i=t;const{month:u,day:l}=An(i,o);return{year:i,month:u,day:l,...Ke(e)}}function Pn(e){const{year:t,month:n,day:r}=e;return{year:t,ordinal:Ln(t,n,r),...Ke(e)}}function Un(e){const{year:t,ordinal:n}=e,{month:r,day:s}=An(t,n);return{year:t,month:r,day:s,...Ke(e)}}function Rn(e){const t=Ve(e.year),n=Ce(e.month,1,12),r=Ce(e.day,1,Ue(e.year,e.month));return t?n?!r&&qn("day",e.day):qn("month",e.month):qn("year",e.year)}function Jn(e){const{hour:t,minute:n,second:r,millisecond:s}=e,a=Ce(t,0,23)||24===t&&0===n&&0===r&&0===s,i=Ce(n,0,59),o=Ce(r,0,59),u=Ce(s,0,999);return a?i?o?!u&&qn("millisecond",s):qn("second",r):qn("minute",n):qn("hour",t)}const Hn="Invalid DateTime",Wn=864e13;function Yn(e){return new pt("unsupported zone",`the zone "${e.name}" is not supported`)}function Gn(e){return null===e.weekData&&(e.weekData=zn(e.c)),e.weekData}function Bn(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new pr({...n,...t,old:n})}function Qn(e,t,n){let r=e-60*t*1e3;const s=n.offset(r);if(t===s)return[r,t];r-=60*(s-t)*1e3;const a=n.offset(r);return s===a?[r,s]:[e-60*Math.min(s,a)*1e3,Math.max(s,a)]}function Kn(e,t){const n=new Date(e+=60*t*1e3);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Xn(e,t,n){return Qn(Re(e),t,n)}function er(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),s=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),a={...e.c,year:r,month:s,day:Math.min(e.c.day,Ue(r,s))+Math.trunc(t.days)+7*Math.trunc(t.weeks)},i=dn.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),o=Re(a);let[u,l]=Qn(o,n,e.zone);return 0!==i&&(u+=i,l=e.zone.offset(u)),{ts:u,o:l}}function tr(e,t,n,r,s,a){const{setZone:i,zone:o}=n;if(e&&0!==Object.keys(e).length||t){const r=t||o,s=pr.fromObject(e,{...n,zone:r,specificOffset:a});return i?s:s.setZone(o)}return pr.invalid(new pt("unparsable",`the input "${s}" can't be parsed as ${r}`))}function nr(e,t,n=!0){return e.isValid?ft.create(ye.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function rr(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=qe(e.c.year,n?6:4),t?(r+="-",r+=qe(e.c.month),r+="-",r+=qe(e.c.day)):(r+=qe(e.c.month),r+=qe(e.c.day)),r}function sr(e,t,n,r,s,a){let i=qe(e.c.hour);return t?(i+=":",i+=qe(e.c.minute),0===e.c.second&&n||(i+=":")):i+=qe(e.c.minute),0===e.c.second&&n||(i+=qe(e.c.second),0===e.c.millisecond&&r||(i+=".",i+=qe(e.c.millisecond,3))),s&&(e.isOffsetFixed&&0===e.offset&&!a?i+="Z":e.o<0?(i+="-",i+=qe(Math.trunc(-e.o/60)),i+=":",i+=qe(Math.trunc(-e.o%60))):(i+="+",i+=qe(Math.trunc(e.o/60)),i+=":",i+=qe(Math.trunc(e.o%60)))),a&&(i+="["+e.zone.ianaName+"]"),i}const ar={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},ir={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},or={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ur=["year","month","day","hour","minute","second","millisecond"],lr=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],cr=["year","ordinal","hour","minute","second","millisecond"];function dr(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new O(e);return t}function mr(e,t){const n=be(t.zone,Me.defaultZone),r=ye.fromObject(t),s=Me.now();let a,i;if(Ie(e.year))a=s;else{for(const t of ur)Ie(e[t])&&(e[t]=ar[t]);const t=Rn(e)||Jn(e);if(t)return pr.invalid(t);const r=n.offset(s);[a,i]=Xn(e,r,n)}return new pr({ts:a,zone:n,loc:r,o:i})}function hr(e,t,n){const r=!!Ie(n.round)||n.round,s=(e,s)=>(e=ze(e,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(e,s)),a=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(n.unit)return s(a(n.unit),n.unit);for(const e of n.units){const t=a(e);if(Math.abs(t)>=1)return s(t,e)}return s(e>t?-0:0,n.units[n.units.length-1])}function fr(e){let t,n={};return e.length>0&&"object"==typeof e[e.length-1]?(n=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[n,t]}class pr{constructor(e){const t=e.zone||Me.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new pt("invalid input"):null)||(t.isValid?null:Yn(t));this.ts=Ie(e.ts)?Me.now():e.ts;let r=null,s=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,s]=[e.old.c,e.old.o];else{const e=t.offset(this.ts);r=Kn(this.ts,e),n=Number.isNaN(r.year)?new pt("invalid input"):null,r=n?null:r,s=n?null:e}this._zone=t,this.loc=e.loc||ye.create(),this.invalid=n,this.weekData=null,this.c=r,this.o=s,this.isLuxonDateTime=!0}static now(){return new pr({})}static local(){const[e,t]=fr(arguments),[n,r,s,a,i,o,u]=t;return mr({year:n,month:r,day:s,hour:a,minute:i,second:o,millisecond:u},e)}static utc(){const[e,t]=fr(arguments),[n,r,s,a,i,o,u]=t;return e.zone=we.utcInstance,mr({year:n,month:r,day:s,hour:a,minute:i,second:o,millisecond:u},e)}static fromJSDate(e,t={}){const n=(r=e,"[object Date]"===Object.prototype.toString.call(r)?e.valueOf():NaN);var r;if(Number.isNaN(n))return pr.invalid("invalid input");const s=be(t.zone,Me.defaultZone);return s.isValid?new pr({ts:n,zone:s,loc:ye.fromObject(t)}):pr.invalid(Yn(s))}static fromMillis(e,t={}){if(De(e))return e<-Wn||e>Wn?pr.invalid("Timestamp out of range"):new pr({ts:e,zone:be(t.zone,Me.defaultZone),loc:ye.fromObject(t)});throw new k(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,t={}){if(De(e))return new pr({ts:1e3*e,zone:be(t.zone,Me.defaultZone),loc:ye.fromObject(t)});throw new k("fromSeconds requires a numerical input")}static fromObject(e,t={}){e=e||{};const n=be(t.zone,Me.defaultZone);if(!n.isValid)return pr.invalid(Yn(n));const r=Me.now(),s=Ie(t.specificOffset)?n.offset(r):t.specificOffset,a=Be(e,dr),i=!Ie(a.ordinal),o=!Ie(a.year),u=!Ie(a.month)||!Ie(a.day),l=o||u,c=a.weekYear||a.weekNumber,d=ye.fromObject(t);if((l||i)&&c)throw new N("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&i)throw new N("Can't mix ordinal dates with month/day");const m=c||a.weekday&&!l;let h,f,p=Kn(r,s);m?(h=lr,f=ir,p=zn(p)):i?(h=cr,f=or,p=Pn(p)):(h=ur,f=ar);let y=!1;for(const e of h)Ie(a[e])?a[e]=y?f[e]:p[e]:y=!0;const g=m?function(e){const t=Ve(e.weekYear),n=Ce(e.weekNumber,1,Je(e.weekYear)),r=Ce(e.weekday,1,7);return t?n?!r&&qn("weekday",e.weekday):qn("week",e.week):qn("weekYear",e.weekYear)}(a):i?function(e){const t=Ve(e.year),n=Ce(e.ordinal,1,Pe(e.year));return t?!n&&qn("ordinal",e.ordinal):qn("year",e.year)}(a):Rn(a),w=g||Jn(a);if(w)return pr.invalid(w);const v=m?jn(a):i?Un(a):a,[b,S]=Xn(v,s,n),E=new pr({ts:b,zone:n,o:S,loc:d});return a.weekday&&l&&e.weekday!==E.weekday?pr.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${E.toISO()}`):E}static fromISO(e,t={}){const[n,r]=function(e){return vt(e,[Jt,Gt],[Ht,Bt],[Wt,Qt],[Yt,Kt])}(e);return tr(n,r,t,"ISO 8601",e)}static fromRFC2822(e,t={}){const[n,r]=function(e){return vt(function(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(e),[Lt,At])}(e);return tr(n,r,t,"RFC 2822",e)}static fromHTTP(e,t={}){const[n,r]=function(e){return vt(e,[zt,Ut],[jt,Ut],[Pt,Rt])}(e);return tr(n,r,t,"HTTP",t)}static fromFormat(e,t,n={}){if(Ie(e)||Ie(t))throw new k("fromFormat requires an input string and a format");const{locale:r=null,numberingSystem:s=null}=n,a=ye.fromOpts({locale:r,numberingSystem:s,defaultToEN:!0}),[i,o,u,l]=function(e,t,n){const{result:r,zone:s,specificOffset:a,invalidReason:i}=Vn(e,t,n);return[r,s,a,i]}(a,e,t);return l?pr.invalid(l):tr(i,o,n,`format ${t}`,e,u)}static fromString(e,t,n={}){return pr.fromFormat(e,t,n)}static fromSQL(e,t={}){const[n,r]=function(e){return vt(e,[en,Gt],[tn,nn])}(e);return tr(n,r,t,"SQL",e)}static invalid(e,t=null){if(!e)throw new k("need to specify a reason the DateTime is invalid");const n=e instanceof pt?e:new pt(e,t);if(Me.throwOnInvalid)throw new S(n);return new pr({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){const n=$n(e,ye.fromObject(t));return n?n.map((e=>e?e.val:null)).join(""):null}static expandFormat(e,t={}){return Dn(ft.parseFormat(e),ye.fromObject(t)).map((e=>e.val)).join("")}get(e){return this[e]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Gn(this).weekYear:NaN}get weekNumber(){return this.isValid?Gn(this).weekNumber:NaN}get weekday(){return this.isValid?Gn(this).weekday:NaN}get ordinal(){return this.isValid?Pn(this.c).ordinal:NaN}get monthShort(){return this.isValid?fn.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?fn.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?fn.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?fn.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}get isInLeapYear(){return je(this.year)}get daysInMonth(){return Ue(this.year,this.month)}get daysInYear(){return this.isValid?Pe(this.year):NaN}get weeksInWeekYear(){return this.isValid?Je(this.weekYear):NaN}resolvedLocaleOptions(e={}){const{locale:t,numberingSystem:n,calendar:r}=ft.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(we.instance(e),t)}toLocal(){return this.setZone(Me.defaultZone)}setZone(e,{keepLocalTime:t=!1,keepCalendarTime:n=!1}={}){if((e=be(e,Me.defaultZone)).equals(this.zone))return this;if(e.isValid){let r=this.ts;if(t||n){const t=e.offset(this.ts),n=this.toObject();[r]=Xn(n,t,e)}return Bn(this,{ts:r,zone:e})}return pr.invalid(Yn(e))}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){return Bn(this,{loc:this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n})})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const t=Be(e,dr),n=!Ie(t.weekYear)||!Ie(t.weekNumber)||!Ie(t.weekday),r=!Ie(t.ordinal),s=!Ie(t.year),a=!Ie(t.month)||!Ie(t.day),i=s||a,o=t.weekYear||t.weekNumber;if((i||r)&&o)throw new N("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(a&&r)throw new N("Can't mix ordinal dates with month/day");let u;n?u=jn({...zn(this.c),...t}):Ie(t.ordinal)?(u={...this.toObject(),...t},Ie(t.day)&&(u.day=Math.min(Ue(u.year,u.month),u.day))):u=Un({...Pn(this.c),...t});const[l,c]=Xn(u,this.o,this.zone);return Bn(this,{ts:l,o:c})}plus(e){return this.isValid?Bn(this,er(this,dn.fromDurationLike(e))):this}minus(e){return this.isValid?Bn(this,er(this,dn.fromDurationLike(e).negate())):this}startOf(e){if(!this.isValid)return this;const t={},n=dn.normalizeUnit(e);switch(n){case"years":t.month=1;case"quarters":case"months":t.day=1;case"weeks":case"days":t.hour=0;case"hours":t.minute=0;case"minutes":t.second=0;case"seconds":t.millisecond=0}if("weeks"===n&&(t.weekday=1),"quarters"===n){const e=Math.ceil(this.month/3);t.month=3*(e-1)+1}return this.set(t)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,t={}){return this.isValid?ft.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):Hn}toLocaleString(e=V,t={}){return this.isValid?ft.create(this.loc.clone(t),e).formatDateTime(this):Hn}toLocaleParts(e={}){return this.isValid?ft.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const a="extended"===e;let i=rr(this,a);return i+="T",i+=sr(this,a,t,n,r,s),i}toISODate({format:e="extended"}={}){return this.isValid?rr(this,"extended"===e):null}toISOWeekDate(){return nr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:s=!1,format:a="extended"}={}){return this.isValid?(r?"T":"")+sr(this,"extended"===a,t,e,n,s):null}toRFC2822(){return nr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return nr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?rr(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let r="HH:mm:ss.SSS";return(t||e)&&(n&&(r+=" "),t?r+="z":e&&(r+="ZZ")),nr(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Hn}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t="milliseconds",n={}){if(!this.isValid||!e.isValid)return dn.invalid("created by diffing an invalid DateTime");const r={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=(o=t,Array.isArray(o)?o:[o]).map(dn.normalizeUnit),a=e.valueOf()>this.valueOf(),i=function(e,t,n,r){let[s,a,i,o]=function(e,t,n){const r=[["years",(e,t)=>t.year-e.year],["quarters",(e,t)=>t.quarter-e.quarter+4*(t.year-e.year)],["months",(e,t)=>t.month-e.month+12*(t.year-e.year)],["weeks",(e,t)=>{const n=pn(e,t);return(n-n%7)/7}],["days",pn]],s={},a=e;let i,o;for(const[u,l]of r)n.indexOf(u)>=0&&(i=u,s[u]=l(e,t),o=a.plus(s),o>t?(s[u]--,e=a.plus(s)):e=o);return[e,s,o,i]}(e,t,n);const u=t-s,l=n.filter((e=>["hours","minutes","seconds","milliseconds"].indexOf(e)>=0));0===l.length&&(i<t&&(i=s.plus({[o]:1})),i!==s&&(a[o]=(a[o]||0)+u/(i-s)));const c=dn.fromObject(a,r);return l.length>0?dn.fromMillis(u,r).shiftTo(...l).plus(c):c}(a?this:e,a?e:this,s,r);var o;return a?i.negate():i}diffNow(e="milliseconds",t={}){return this.diff(pr.now(),e,t)}until(e){return this.isValid?hn.fromDateTimes(this,e):this}hasSame(e,t){if(!this.isValid)return!1;const n=e.valueOf(),r=this.setZone(e.zone,{keepLocalTime:!0});return r.startOf(t)<=n&&n<=r.endOf(t)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const t=e.base||pr.fromObject({},{zone:this.zone}),n=e.padding?this<t?-e.padding:e.padding:0;let r=["years","months","days","hours","minutes","seconds"],s=e.unit;return Array.isArray(e.unit)&&(r=e.unit,s=void 0),hr(t,this.plus(n),{...e,numeric:"always",units:r,unit:s})}toRelativeCalendar(e={}){return this.isValid?hr(e.base||pr.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(pr.isDateTime))throw new k("min requires all arguments be DateTimes");return _e(e,(e=>e.valueOf()),Math.min)}static max(...e){if(!e.every(pr.isDateTime))throw new k("max requires all arguments be DateTimes");return _e(e,(e=>e.valueOf()),Math.max)}static fromFormatExplain(e,t,n={}){const{locale:r=null,numberingSystem:s=null}=n;return Vn(ye.fromOpts({locale:r,numberingSystem:s,defaultToEN:!0}),e,t)}static fromStringExplain(e,t,n={}){return pr.fromFormatExplain(e,t,n)}static get DATE_SHORT(){return V}static get DATE_MED(){return $}static get DATE_MED_WITH_WEEKDAY(){return _}static get DATE_FULL(){return F}static get DATE_HUGE(){return C}static get TIME_SIMPLE(){return q}static get TIME_WITH_SECONDS(){return Z}static get TIME_WITH_SHORT_OFFSET(){return L}static get TIME_WITH_LONG_OFFSET(){return A}static get TIME_24_SIMPLE(){return z}static get TIME_24_WITH_SECONDS(){return j}static get TIME_24_WITH_SHORT_OFFSET(){return P}static get TIME_24_WITH_LONG_OFFSET(){return U}static get DATETIME_SHORT(){return R}static get DATETIME_SHORT_WITH_SECONDS(){return J}static get DATETIME_MED(){return H}static get DATETIME_MED_WITH_SECONDS(){return W}static get DATETIME_MED_WITH_WEEKDAY(){return Y}static get DATETIME_FULL(){return G}static get DATETIME_FULL_WITH_SECONDS(){return B}static get DATETIME_HUGE(){return Q}static get DATETIME_HUGE_WITH_SECONDS(){return K}}function yr(e){if(pr.isDateTime(e))return e;if(e&&e.valueOf&&De(e.valueOf()))return pr.fromJSDate(e);if(e&&"object"==typeof e)return pr.fromObject(e);throw new k(`Unknown datetime argument: ${e}, of type ${typeof e}`)}const gr=e=>{const[n,r]=(0,t.useState)("");return(0,t.useEffect)((()=>{r(e.defaultValue)}),[e.defaultValue]),(0,t.createElement)("select",{id:e.id,name:e.name,disabled:e?.disabled||!1,required:e?.required||!1,value:n,onChange:function(e){r(e.target.value)},onFocus:e?.handleFocus},!e.value&&!e.defaultValue&&(0,t.createElement)("option",{disabled:!0,value:""},"Please select"),e.children)},wr=e=>{const[n,r]=(0,t.useState)(!1),[s,a]=(0,t.useState)("");return(0,t.useEffect)((()=>{r(e.defaultValue),a(e.defaultValue?"On":"Off")}),[e.defaultValue]),(0,t.createElement)("input",{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled,required:e?.required,onClick:function(e){r(e.target.checked),a(e.target.checked?"On":"Off")},checked:n,value:n,onFocus:e?.handleFocus})},vr=e=>{const n=(0,t.useRef)(null);return(0,t.createElement)("input",{name:e.name,id:e.id,type:"text",ref:n,maxlength:e?.maxlength||32,minlength:e?.minlength||1,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern,readonly:e?.readonly||!1,disabled:e?.disabled||!1,onFocus:e?.handleFocus})},br=e=>{const n=(0,t.useRef)(null);return(0,t.createElement)("input",{name:e.name,id:e.id,type:"email",ref:n,maxlength:e?.maxlength||32,minlength:e?.minlength||1,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern||"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",readonly:e?.readonly||!1,disabled:e?.disabled||!1,onFocus:e?.handleFocus})},Sr=e=>{(0,t.useEffect)((()=>{if(!(0,a.isNil)(e.defaultValue)){let t=pr.fromISO(e.defaultValue);t.invalid&&(t=pr.fromFormat(e.defaultValue,"dd/MM/yyyy")),n.current.value=t.toISODate()}}),[e.defaultValue]);const n=(0,t.useRef)(null);return(0,t.createElement)("input",{name:e.name,id:e.id,type:"date",ref:n,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern,readonly:e?.readonly||!1,disabled:e?.disabled||!1,onFocus:e?.handleFocus})},Er=e=>{const n=(0,t.useRef)(null);return(0,t.createElement)("input",{name:e.name,id:e.id,type:"number",ref:n,defaultValue:e?.defaultValue,placeholder:e?.placeholder,required:e?.required||!1,pattern:e?.pattern||"^d+",readonly:e?.readonly||!1,max:e?.max,min:e?.min||0,step:e?.step||1,disabled:e?.disabled||!1,onChange:e?.onChange,value:e?.value,onFocus:e?.handleFocus})},Tr=e=>{const[n,r]=(0,t.useState)(null),[s,i]=(0,t.useState)([]);function o(e){r(e),i([])}function u(){i([])}return(0,t.useEffect)((()=>{(0,a.isNil)(e.attendee)||r(e.attendee)}),[e.attendee]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("h3",null,"Attendee ",e.index+1),(e?.attendee?.ID||n?.id)&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['id']`,value:e?.attendee?.ID||n?.id}),(e?.attendee?.post_status||n?.status)&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['status']`,value:e?.attendee?.post_status||n?.status}),(e?.attendee?.meta?.order_ids||n?.meta?.order_ids)&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['meta']['order_ids']`,value:e?.attendee?.meta?.order_ids.join(",")||n?.meta?.order_ids.join(",")||""}),(e?.attendee?.meta?.product_ids||n?.meta?.product_ids)&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['meta']['product_ids']`,value:e?.attendee?.meta?.product_ids.join(",")||n?.meta?.product_ids.join(",")||""}),(e?.attendee?.meta["groups-read"]||n?.meta["groups-read"])&&(0,t.createElement)("input",{type:"hidden",name:`attendees[${e.index}]['meta']['groups-read']`,value:e?.attendee?.meta["groups-read"].join(",")||n?.meta["groups-read"].join(",")||""}),e?.fields.map((r=>(0,t.createElement)("div",{class:"form-field"},(0,t.createElement)("fieldset",null,(0,t.createElement)("p",{class:"form-row"},(0,t.createElement)("label",{for:r.key},r.label,!!r.required&&(0,t.createElement)("span",{class:"required"}," *")),"text"===r.type&&"employee_number"!==r.name&&"last_name"!==r.name&&"first_name"!==r.name&&(0,t.createElement)(vr,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,handleFocus:u,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required}),"text"===r.type&&"employee_number"===r.name&&(0,t.createElement)(v,{options:s,handleFocus:u,nonce:e.nonce,acfFieldName:r.name,handleSelect:o,helpText:"Enter or search for existing employee numbers",name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required}),"text"===r.type&&"last_name"===r.name&&(0,t.createElement)(v,{options:s,handleFocus:u,nonce:e.nonce,acfFieldName:r.name,acfClarifyingFieldName:"first_name",handleSelect:o,helpText:"Enter or search for existing last names",name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required}),"text"===r.type&&"first_name"===r.name&&(0,t.createElement)(v,{options:s,handleFocus:u,nonce:e.nonce,acfFieldName:r.name,acfClarifyingFieldName:"last_name",handleSelect:o,helpText:"Enter or search for existing first names",name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required}),"email"===r.type&&(0,t.createElement)(br,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,placeholder:r.placeholder,defaultValue:n?.acf[r.name]||r.default_value,maxlength:r.maxlength,required:!!r.required,onFocus:u}),"textarea"===r.type&&(0,t.createElement)("textarea",{id:r.key,disabled:e.disabled,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,defaultValue:n?.acf[r.name]||r.default_value,required:!!r.required,handleFocus:u}),"date_picker"===r.type&&(0,t.createElement)(Sr,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,defaultValue:n?.acf[r.name]||r.default_value,required:!!r.required,handleFocus:u}),"true_false"===r.type&&(0,t.createElement)(wr,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,required:!!r.required,defaultValue:n?.acf[r.name]||r.default_value,handleFocus:u}),"number"===r.type&&(0,t.createElement)(Er,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,defaultValue:n?.acf[r.name]||r.default_value,required:!!r.required,handleFocus:u}),"select"===r.type&&(0,t.createElement)(gr,{id:r.key,name:`attendees[${e.index}][${r.prefix}][${r.name}]`,disabled:e.disabled,required:!!r.required,defaultValue:n?.acf[r.name]||r.default_value||"",handleFocus:u},Object.keys(r.choices).map(((e,n)=>(0,t.createElement)("option",{key:e,value:"local_authority"===r.name?e:r.choices[e]},r.choices[e]))))))))),(0,t.createElement)("hr",null))},Nr=e=>{const[r,i]=(0,t.useState)(null),[o,u]=(0,t.useState)(0),[l,c]=(0,t.useState)(!0),[m,h]=(0,t.useState)(!1);function f(e,t){return Array.from(t.querySelectorAll(`[name^="attendees[${e}][acf]"]`)).filter((e=>""!==e.value)).map((e=>{return[p(e.getAttribute("name")),(t=e.value,"true"===t||"false"!==t&&t)];var t}))}function p(e){const t=e.match(/attendees\[\d\]\[acf\]\[(.+)\]/);return t?t[1]:null}return(0,t.useEffect)((()=>{e?.quantity>0?u(parseInt(e.quantity)):i({status:"warning",message:"Please add a product to your order"})}),[e.quantity]),(0,t.useEffect)((()=>{!(0,a.isNil)(e.status)&&["attendees","waiting-list"].includes(e.status)&&c(!1)}),[e.status]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{class:"form-wrap"},(0,t.createElement)("form",{class:"panel-wrap woocommerce",onSubmit:async function(t){t.preventDefault();const n=function(t,n,r,s){return(0,a.range)(t).map((t=>function(t,n,r,s){const a=new FormData(n),i=a.has(`attendees[${t}]['id']`)?parseInt(a.get(`attendees[${t}]['id']`)):null;return{path:i?`/wp/v2/attendee/${i}?order_id=${s}`:`/wp/v2/attendee?order_id=${s}`,method:"POST",body:{id:i,status:a.has(`attendees[${t}]['status']`)?a.get(`attendees[${t}]['status']`):"publish",meta:{"groups-read":a.has(`attendees[${t}]['meta']['groups-read']`)?[...new Set(a.get(`attendees[${t}]['meta']['groups-read']`).split(",").map(Number).filter(Number).concat(parseInt(e.groupId)))]:[parseInt(e.groupId)],order_ids:a.has(`attendees[${t}]['meta']['order_ids']`)?[...new Set(a.get(`attendees[${t}]['meta']['order_ids']`).split(",").map(Number).filter(Number).concat(e.order.id))]:[e.order.id],product_ids:a.has(`attendees[${t}]['meta']['product_ids']`)?[...new Set(a.get(`attendees[${t}]['meta']['product_ids']`).split(",").map(Number).filter(Number).concat(parseInt(e.productId)))]:[parseInt(e.productId)]},acf:Object.assign(Object.fromEntries(f(t,n)))}}}(t,n,0,s)))}(o,t.target,parseInt(e.groupId),e.order.id);try{i(null),h(!0),c(!0),i({status:"info",message:"Updating attendees."}),s().use(s().createNonceMiddleware(e.nonce));const t=(await s()({path:"/batch/v1",method:"POST",data:{requests:n}})).responses.map((e=>parseInt(e.body.id)));i({status:"info",message:"Updating order."}),await s()(function(e,t,n){return{path:`/wp/v2/shop_order/${e}`,method:"PUT",data:{id:e,status:t,meta:{attendee_ids:[...new Set(n)]}}}}(e.order.id,(r=e.order,Array.isArray(r.attendees)&&r.attendees>0||d(e.order)?e.order.status:"wc-pending"),t)),i({status:"success",message:`Updated attendees. Redirecting to ${d(e.order)?"order list":"payment tab"}...`}),document.location.assign(d(e.order)?"/wp-admin/edit.php?post_type=shop_order":`/wp-admin/post.php?post=${e.order.id}&action=edit&tab=payment`)}catch(t){i({status:"error",message:t.message}),console.error(t),h(!1),c(!1)}var r}},(0,t.createElement)("div",{id:"order_data",class:"panel woocommerce-order-data"},e?.quantity>0&&(0,a.range)(o).map((n=>(0,t.createElement)(Tr,{fields:e.fields,attendee:e.attendees[n],index:n,disabled:l,nonce:e.nonce}))),e?.quantity>0&&(0,t.createElement)("div",{class:"form-field"},r&&(0,t.createElement)(n.Notice,{status:r.status,isDismissable:!0,onDismiss:()=>i(null)},r.message),(0,t.createElement)("button",{disabled:l,type:"submit",class:"button alt save_order wp-element-button",name:"save",value:"Create"},"Save attendees"),m&&(0,t.createElement)(n.Spinner,null))))))};window.addEventListener("load",(function(e){const n=document.querySelector("#lasntgadmin-orders-form");n&&(0,t.render)((0,t.createElement)(g,{groupApiPath:n.dataset.groupApiPath,orderApiPath:n.dataset.orderApiPath,productApiPath:n.dataset.productApiPath,nonce:n.dataset.nonce,title:n.dataset.title,status:n.dataset.status,order:JSON.parse(n.dataset.order),orderId:n.dataset.orderId,productId:n.dataset.productId,groupId:JSON.parse(n.dataset.groupId),userId:n.dataset.userId,user:JSON.parse(n.dataset.user),userMeta:JSON.parse(n.dataset.userMeta)}),n);const r=document.querySelector("#lasntgadmin-orders-attendees");r&&(0,t.render)((0,t.createElement)(Nr,{quantity:r.dataset.quantity,nonce:r.dataset.nonce,fields:JSON.parse(r.dataset.fields),status:r.dataset.status,order:JSON.parse(r.dataset.order),groupId:JSON.parse(r.dataset.groupId),attendees:JSON.parse(r.dataset.attendees),productId:r.dataset.productId}),r)}),!1)}();
>>>>>>> dd4a5db (fresh build)
