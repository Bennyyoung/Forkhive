(self.webpackChunkforkhive=self.webpackChunkforkhive||[]).push([[934,207],{741:function(e){var t,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,i=(e,t,n)=>new Promise(((r,a)=>{var o=e=>{try{l(n.next(e))}catch(t){a(t)}},i=e=>{try{l(n.throw(e))}catch(t){a(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,i);l((n=n.apply(e,t)).next())})),l={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(l,{SubmissionError:()=>y,appendExtraData:()=>S,createClient:()=>T,getDefaultClient:()=>N,isSubmissionError:()=>f}),e.exports=(t=l,((e,t,i,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let c of a(t))!o.call(e,c)&&c!==i&&n(e,c,{get:()=>t[c],enumerable:!(l=r(t,c))||l.enumerable});return e})(n({},"__esModule",{value:!0}),t));var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var u=()=>navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!s.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,n,r,a="",o=0;o<e.length;)t=c.indexOf(e.charAt(o++))<<18|c.indexOf(e.charAt(o++))<<12|(n=c.indexOf(e.charAt(o++)))<<6|(r=c.indexOf(e.charAt(o++))),a+=64===n?String.fromCharCode(t>>16&255):64===r?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return a}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,m=class{constructor(){this.loadedAt=Date.now(),this.webdriver=u()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},d=class{constructor(e){this.kind="success",this.next=e.next}};var p=class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind="stripePluginPending"}};function f(e){return"error"===e.kind}var y=class{constructor(...e){var t;this.kind="error",this.formErrors=[],this.fieldErrors=new Map;for(let n of e){if(!n.field){this.formErrors.push({code:n.code&&E(n.code)?n.code:"UNSPECIFIED",message:n.message});continue}let e=null!=(t=this.fieldErrors.get(n.field))?t:[];e.push({code:n.code&&g(n.code)?n.code:"UNSPECIFIED",message:n.message}),this.fieldErrors.set(n.field,e)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){var t;return null!=(t=this.fieldErrors.get(e))?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function E(e){return e in h}var h={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function g(e){return e in v}var v={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};var b=e=>function(e){for(var t,n,r,a,o="",i=0,l=(e=String(e)).length%3;i<e.length;){if((n=e.charCodeAt(i++))>255||(r=e.charCodeAt(i++))>255||(a=e.charCodeAt(i++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");o+=c.charAt((t=n<<16|r<<8|a)>>18&63)+c.charAt(t>>12&63)+c.charAt(t>>6&63)+c.charAt(63&t)}return l?o.slice(0,l-3)+"===".substring(l):o}(JSON.stringify(e)),w=e=>{let t="@formspree/core@3.0.1";return e?`${e} ${t}`:t};function S(e,t,n){e instanceof FormData?e.append(t,n):e[t]=n}var C=class{constructor(e={}){this.project=e.project,this.stripe=e.stripe,"undefined"!=typeof window&&(this.session=new m)}submitForm(e,t){return i(this,arguments,(function*(e,t,n={}){let r=n.endpoint||"https://formspree.io",a=this.project?`${r}/p/${this.project}/f/${e}`:`${r}/f/${e}`,o={Accept:"application/json","Formspree-Client":w(n.clientName)};function l(e){return i(this,null,(function*(){try{let t=yield(yield fetch(a,{method:"POST",mode:"cors",body:e instanceof FormData?e:JSON.stringify(e),headers:o})).json();if(function(e){return null!==e&&"object"==typeof e}(t)){if(function(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every((e=>"string"==typeof e.message))||"error"in e&&"string"==typeof e.error}(t))return Array.isArray(t.errors)?new y(...t.errors):new y({message:t.error});if(function(e){if("stripe"in e&&"resubmitKey"in e&&"string"==typeof e.resubmitKey){let{stripe:t}=e;return"object"==typeof t&&null!=t&&"paymentIntentClientSecret"in t&&"string"==typeof t.paymentIntentClientSecret}return!1}(t))return new p(t.stripe.paymentIntentClientSecret,t.resubmitKey);if(function(e){return"next"in e&&"string"==typeof e.next}(t))return new d({next:t.next})}return new y({message:"Unexpected response format"})}catch(t){let e=t instanceof Error?t.message:`Unknown error while posting to Formspree: ${JSON.stringify(t)}`;return new y({message:e})}}))}if(this.session&&(o["Formspree-Session-Data"]=b(this.session.data())),t instanceof FormData||(o["Content-Type"]="application/json"),this.stripe&&n.createPaymentMethod){let e=yield n.createPaymentMethod();if(e.error)return new y({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});S(t,"paymentMethod",e.paymentMethod.id);let r=yield l(t);if("error"===r.kind)return r;if("stripePluginPending"===r.kind){let e=yield this.stripe.handleCardAction(r.paymentIntentClientSecret);if(e.error)return new y({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});t instanceof FormData?t.delete("paymentMethod"):delete t.paymentMethod,S(t,"paymentIntent",e.paymentIntent.id),S(t,"resubmitKey",r.resubmitKey);let n=yield l(t);return O(n),n}return r}let c=yield l(t);return O(c),c}))}};function O(e){let{kind:t}=e;if("success"!==t&&"error"!==t)throw new Error(`Unexpected submission result (kind: ${t})`)}var k,T=e=>new C(e),N=()=>(k||(k=T()),k)},2926:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return l(e)||c(e,t)||s(e,t)||m()}function l(e){if(Array.isArray(e))return e}function c(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}function s(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function f(){}function y(){}y.resetWarningCache=f;var E=function(){function e(e,t,n,r,a,o){if(o!==p){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y,resetWarningCache:f};return n.PropTypes=n,n},h=d((function(e){e.exports=E()})),g=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},v=function(e){return null!==e&&"object"===a(e)},b=function(e){return v(e)&&"function"==typeof e.then},w=function(e){return v(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment},S="[object Object]",C=function e(t,n){if(!v(t)||!v(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var a=Object.prototype.toString.call(t)===S;if(a!==(Object.prototype.toString.call(n)===S))return!1;if(!a&&!r)return t===n;var o=Object.keys(t),i=Object.keys(n);if(o.length!==i.length)return!1;for(var l={},c=0;c<o.length;c+=1)l[o[c]]=!0;for(var s=0;s<i.length;s+=1)l[i[s]]=!0;var u=Object.keys(l);if(u.length!==o.length)return!1;var m=t,d=n,p=function(t){return e(m[t],d[t])};return u.every(p)},O=function(e,t,n){return v(e)?Object.keys(e).reduce((function(a,i){var l=!v(t)||!C(e[i],t[i]);return n.includes(i)?(l&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),a):l?r(r({},a||{}),{},o({},i,e[i])):a}),null):null},k="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",T=function(e){if(null===e||w(e))return e;throw new Error(k)},N=function(e){if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then(T)};var t=T(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},A=t.createContext(null);A.displayName="ElementsContext";var P=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},_=t.createContext(null);_.displayName="CartElementContext";var I=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},j=function(e){var n=e.stripe,r=e.options,a=e.children,o=t.useMemo((function(){return N(n)}),[n]),l=i(t.useState(null),2),c=l[0],s=l[1],u=i(t.useState(null),2),m=u[0],d=u[1],p=i(t.useState((function(){return{stripe:"sync"===o.tag?o.stripe:null,elements:"sync"===o.tag?o.stripe.elements(r):null}})),2),f=p[0],y=p[1];t.useEffect((function(){var e=!0,t=function(e){y((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==o.tag||f.stripe?"sync"!==o.tag||f.stripe||t(o.stripe):o.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[o,f,r]);var E=g(n);t.useEffect((function(){null!==E&&E!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[E,n]);var h=g(r);return t.useEffect((function(){if(f.elements){var e=O(r,h,["clientSecret","fonts"]);e&&f.elements.update(e)}}),[r,h,f.elements]),t.useEffect((function(){var e=f.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[f.stripe]),t.createElement(A.Provider,{value:f},t.createElement(_.Provider,{value:{cart:c,setCart:s,cartState:m,setCartState:d}},a))};j.propTypes={stripe:h.any,options:h.object};var x=function(e){var n=t.useContext(A);return P(n,e)},R=function(e){var n=t.useContext(_);return I(n,e)},F=function(){return x("calls useElements()").elements},M=function(){return x("calls useStripe()").stripe},D=function(){return R("calls useCartElement()").cart},L=function(){return R("calls useCartElementState()").cartState},B=function(e){return(0,e.children)(x("mounts <ElementsConsumer>"))};B.propTypes={children:h.func.isRequired};var U=function(e,n,r){var a=!!r,o=t.useRef(r);t.useEffect((function(){o.current=r}),[r]),t.useEffect((function(){if(!a||!e)return function(){};var t=function(){o.current&&o.current.apply(o,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[a,n,e,o])},W=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Y=function(e,n){var r="".concat(W(e),"Element"),a=n?function(e){x("mounts <".concat(r,">")),R("mounts <".concat(r,">"));var n=e.id,a=e.className;return t.createElement("div",{id:n,className:a})}:function(n){var a,o=n.id,l=n.className,c=n.options,s=void 0===c?{}:c,u=n.onBlur,m=n.onFocus,d=n.onReady,p=n.onChange,f=n.onEscape,y=n.onClick,E=n.onLoadError,h=n.onLoaderStart,v=n.onNetworksChange,b=n.onCheckout,w=n.onLineItemClick,S=n.onConfirm,C=n.onCancel,k=n.onShippingAddressChange,T=n.onShippingRateChange,N=x("mounts <".concat(r,">")).elements,A=i(t.useState(null),2),P=A[0],_=A[1],I=t.useRef(null),j=t.useRef(null),F=R("mounts <".concat(r,">")),M=F.setCart,D=F.setCartState;U(P,"blur",u),U(P,"focus",m),U(P,"escape",f),U(P,"click",y),U(P,"loaderror",E),U(P,"loaderstart",h),U(P,"networkschange",v),U(P,"lineitemclick",w),U(P,"confirm",S),U(P,"cancel",C),U(P,"shippingaddresschange",k),U(P,"shippingratechange",T),"cart"===e?a=function(e){D(e),d&&d(e)}:d&&(a="payButton"===e?d:function(){d(P)}),U(P,"ready",a),U(P,"change","cart"===e?function(e){D(e),p&&p(e)}:p),U(P,"checkout","cart"===e?function(e){D(e),b&&b(e)}:b),t.useLayoutEffect((function(){if(null===I.current&&N&&null!==j.current){var t=N.create(e,s);"cart"===e&&M&&M(t),I.current=t,_(t),t.mount(j.current)}}),[N,s,M]);var L=g(s);return t.useEffect((function(){if(I.current){var e=O(s,L,["paymentRequest"]);e&&I.current.update(e)}}),[s,L]),t.useLayoutEffect((function(){return function(){I.current&&(I.current.destroy(),I.current=null)}}),[]),t.createElement("div",{id:o,className:l,ref:j})};return a.propTypes={id:h.string,className:h.string,onChange:h.func,onBlur:h.func,onFocus:h.func,onReady:h.func,onEscape:h.func,onClick:h.func,onLoadError:h.func,onLoaderStart:h.func,onNetworksChange:h.func,onCheckout:h.func,onLineItemClick:h.func,onConfirm:h.func,onCancel:h.func,onShippingAddressChange:h.func,onShippingRateChange:h.func,options:h.object},a.displayName=r,a.__elementType=e,a},q="undefined"==typeof window,$=Y("auBankAccount",q),K=Y("card",q),G=Y("cardNumber",q),J=Y("cardExpiry",q),z=Y("cardCvc",q),Q=Y("fpxBank",q),V=Y("iban",q),Z=Y("idealBank",q),H=Y("p24Bank",q),X=Y("epsBank",q),ee=Y("payment",q),te=Y("payButton",q),ne=Y("paymentRequestButton",q),re=Y("linkAuthentication",q),ae=Y("address",q),oe=Y("shippingAddress",q),ie=Y("cart",q),le=Y("paymentMethodMessaging",q),ce=Y("affirmMessage",q),se=Y("afterpayClearpayMessage",q);e.AddressElement=ae,e.AffirmMessageElement=ce,e.AfterpayClearpayMessageElement=se,e.AuBankAccountElement=$,e.CardCvcElement=z,e.CardElement=K,e.CardExpiryElement=J,e.CardNumberElement=G,e.CartElement=ie,e.Elements=j,e.ElementsConsumer=B,e.EpsBankElement=X,e.FpxBankElement=Q,e.IbanElement=V,e.IdealBankElement=Z,e.LinkAuthenticationElement=re,e.P24BankElement=H,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=le,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=oe,e.useCartElement=D,e.useCartElementState=L,e.useElements=F,e.useStripe=M,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(6540))},8009:function(e,t){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var r,a="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=null,c=function(e){return null!==l||(l=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();r&&e?console.warn(i):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(a).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(l){return void n(l)}else t(null)}))),l},s=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==n(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"==typeof e.advancedFraudSignals)return e;throw new Error(t)},u=!1,m=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];u=!0;var a=Date.now();return c(r).then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,a)}))};m.setLoadParameters=function(e){if(u&&r){var t=s(e);if(Object.keys(t).reduce((function(t,n){var a;return t&&e[n]===(null===(a=r)||void 0===a?void 0:a[n])}),!0))return}if(u)throw new Error("You cannot change load parameters after calling loadStripe");r=s(e)}},7458:function(e,t,n){n(8009)},1598:function(e,t,n){"use strict";var r=n(6540),a=n(4794),o=n(1468),i=n(4755),l=n(9251),c=n(3282);t.A=e=>{const t=(0,o.d4)((e=>e.darkMode.darkMode)),n=(0,a.useStaticQuery)("3500497023");return r.createElement("div",{className:"call "+(t?"dark-mode":"")},r.createElement("div",{className:"call-box-top"},r.createElement("div",{className:"call-phone"},r.createElement("strong",null,r.createElement(i.Trans,null,"Phone 1"),": "),r.createElement("a",{href:`http://wa.me/${n.site.siteMetadata.contact.phone1}`},"WhatsApp ",r.createElement("img",{src:l.A,width:"18rem",height:"18rem"})),r.createElement("br",null),r.createElement("strong",null,r.createElement(i.Trans,null,"Phone 2"),": "),r.createElement("a",{href:`tel:${n.site.siteMetadata.contact.phone2}`},"Mobile Call ",r.createElement("img",{src:c.A,width:"18rem",height:"18rem"}))),r.createElement("div",{className:"call-email"},r.createElement("strong",null,r.createElement(i.Trans,null,"Email"),": "),r.createElement("a",{href:`mailto:${n.site.siteMetadata.contact.email}`},n.site.siteMetadata.contact.email))),e.button&&r.createElement("div",{className:"call-box-bottom"},r.createElement(i.Link,{to:"/contact",className:"button",placeholder:void 0},r.createElement(i.Trans,null,"Get In Touch")),r.createElement("br",null),r.createElement(i.Link,{to:"/contact",placeholder:void 0})))}},4664:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(6540),a=n(1048),o=n(4926),i=n(1598),l=n(2926),c=n(741);n(7458);var s=r.createContext(null);var u="@formspree/react@2.5.1";function m(e,t={}){let n=(0,r.useContext)(s)??{client:(0,c.getDefaultClient)()},{client:a=n.client,extraData:o,onError:i,onSuccess:m,origin:p}=t,{stripe:f}=a,y=(0,r.useMemo)((()=>f?.elements().getElement(l.CardElement)),[f]);return async function(t){let n=function(e){return"preventDefault"in e&&"function"==typeof e.preventDefault}(t)?function(e){e.preventDefault();let t=e.currentTarget;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(t):t;if("object"==typeof o)for(let[e,a]of Object.entries(o)){let t;t="function"==typeof a?await a():a,void 0!==t&&(0,c.appendExtraData)(n,e,t)}let r=await a.submitForm(e,n,{endpoint:p,clientName:u,createPaymentMethod:f&&y?()=>f.createPaymentMethod({type:"card",card:y,billing_details:d(n)}):void 0});(0,c.isSubmissionError)(r)?i?.(r):m?.(r)}}function d(e){let t={address:p(e)};for(let n of["name","email","phone"]){let r=e instanceof FormData?e.get(n):e[n];r&&"string"==typeof r&&(t[n]=r)}return t}function p(e){let t={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let a=e instanceof FormData?e.get(n):e[n];a&&"string"==typeof a&&(t[r]=a)}return t}var f=n(3581),y=n(1468),E=n(4755);function h(){const[e,t]=function(e,t={}){let[n,a]=(0,r.useState)(null),[o,i]=(0,r.useState)(null),[l,c]=(0,r.useState)(!1),[s,u]=(0,r.useState)(!1);if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let d=m(e,{client:t.client,extraData:t.data,onError(e){a(e),c(!1),u(!1)},onSuccess(e){a(null),i(e),c(!1),u(!0)},origin:t.endpoint});return[{errors:n,result:o,submitting:l,succeeded:s},async function(e){c(!0),await d(e)},function(){a(null),i(null),c(!1),u(!1)}]}("mdoqnkzo"),n=(0,y.d4)((e=>e.darkMode.darkMode));return e.succeeded?r.createElement(o.A,{bodyClass:"page-contact"},r.createElement(a.A,{title:"Contact",meta:[],keywords:[]}),r.createElement("div",{className:"intro intro-small"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("h1",null,"Contact"))))),r.createElement(f.default,null)):r.createElement(o.A,{bodyClass:"page-contact"},r.createElement(a.A,{title:"Contact",meta:[],keywords:[]}),r.createElement("div",{className:"intro intro-small"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("h1",null,r.createElement(E.Trans,null,"Contact")))))),r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"container col-12",style:{paddingBottom:"20px"}},r.createElement(i.A,{button:!1}))),r.createElement("br",null),r.createElement("div",{className:"container",style:{margin:"0",paddingBottom:"80px"}},r.createElement("form",{onSubmit:t},r.createElement("div",null,r.createElement("p",null,r.createElement(E.Trans,null,"Full name"),r.createElement("input",{className:(n?"dark-mode":"")+" ",placeholder:"Write your name here..",type:"text",required:!0,name:"full name"}))),r.createElement("div",null,r.createElement("p",null,r.createElement(E.Trans,null,"Company"),r.createElement("input",{className:(n?"dark-mode":"")+" ",placeholder:"Write your company here..",type:"text",required:!0,name:"Company"}))),r.createElement("div",null,r.createElement("p",null,r.createElement(E.Trans,null,"Email"),r.createElement("input",{className:(n?"dark-mode":"")+" ",placeholder:"Let us know how to contact you back..",type:"email",required:!0,name:"Email"}))),r.createElement("div",null,r.createElement("p",null,r.createElement(E.Trans,null,"Phone number"),":",r.createElement("input",{className:(n?"dark-mode":"")+" ",placeholder:"Let us talk eg. +234 805 782 6599..",type:"number",required:!0,name:"Phone"}))),r.createElement("div",null,r.createElement("p",null,r.createElement(E.Trans,null,"Website"),r.createElement("input",{className:(n?"dark-mode":"")+" ",placeholder:"What name do you want for your website",type:"text",required:!0,name:"Website"}))),r.createElement("div",null,r.createElement("p",null,r.createElement(E.Trans,null,"Domain"),r.createElement("input",{className:(n?"dark-mode":"")+" ",placeholder:"Your Domain name",type:"text",required:!0,name:"Domain"}))),r.createElement("div",null,r.createElement("p",null,r.createElement(E.Trans,null,"Navigation items (number of pages), wanted functionalities, do you have a website that you like and why? The more details you mention in your request, our offer will be more precise and detailed:"),r.createElement("textarea",{className:(n?"dark-mode":"")+" ",style:{width:"100%",height:"300px"},placeholder:"Brief description of your needs",required:!0,name:"message"}))),r.createElement("div",null,r.createElement("p",null,r.createElement(E.Trans,null,"Websites you like"),r.createElement("input",{className:(n?"dark-mode":"")+" ",placeholder:"Where do you want to draw inspiration from",type:"text",required:!0,name:"Website Inspiration"}))),r.createElement("div",null,r.createElement("p",null,r.createElement(E.Trans,null,"Budget (USD or ₦)"),r.createElement("input",{className:(n?"dark-mode":"")+" ",placeholder:"Let us still know your budget",type:"text",required:!0,name:"Budget"}))),r.createElement("button",{className:(n?"dark-mode":"")+" ",type:"submit",disabled:e.submitting},r.createElement(E.Trans,null,"Hire Us")),r.createElement("br",null)),r.createElement("p",{style:{paddingTop:"20px"}},r.createElement(E.Trans,null,"Or send us an email to")," ",r.createElement("a",{href:"mailto:hello@forkhive.com"},r.createElement(E.Trans,null,"hello@forkhive.com"))))))}},3581:function(e,t,n){"use strict";n.r(t);var r=n(6540),a=n(4794);t.default=()=>r.createElement(r.Fragment,null,r.createElement("div",{className:"container"},r.createElement("div",{className:"container"},r.createElement("h3",{className:"mt-4"},"Glad, we've received your submission!"),r.createElement(a.Link,{to:"/",className:"button",style:{marginTop:"2rem"}},"Go to home"))))}}]);
//# sourceMappingURL=component---src-pages-contact-index-tsx-30a81a8c71dd07086de6.js.map