/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},e=document.forms.editProfile,r=document.forms.addPlace,n=document.forms.editAvatar,o=(document.forms.confirmChanges,document.querySelector("#edit-profile")),i=document.querySelector("#edit-avatar"),a=document.querySelector("#add-place"),c=document.querySelector("#enhance-image"),u=document.querySelector("#confirm-popup"),s=document.querySelector("#placeTemplate").content,l=document.querySelector(".user-profile__edit"),f=document.querySelector(".user-profile__avatar-wrapper"),p=document.querySelector(".user-profile__add-place"),h=document.querySelector(".places__list");function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function v(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var m=function(){function t(e,r,n,o){var i,a,c,u=this,s=o.handleCardClick,l=o.handleCardDelete,f=o.handleCardLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,c=function(){u._element.remove()},(a=v(a="deleteCard"))in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,this._cardData=e,this.template=r,this._userID=n,this._handleCardClick=s,this._handleCardDelete=l,this._handleCardLike=f}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return this.template.querySelector(".places__item").cloneNode(!0)}},{key:"_addListeners",value:function(){var t=this;this._cardLike.addEventListener("click",(function(){return t._handleCardLike(t._cardData)})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t._cardData)})),this._cardDelete.addEventListener("click",(function(){return t._handleCardDelete(t._cardData)}))}},{key:"isLikedCard",value:function(){var t=this;if(this._cardData.likes.find((function(e){return e._id===t._userID})))return!0}},{key:"changeLikesCard",value:function(t){this._cardData.likes=t,this._cardNumOfLikes.textContent=this._cardData.likes.length,this.isLikedCard()?this._cardLike.classList.add("place__like_active"):this._cardLike.classList.remove("place__like_active")}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".place__image"),this._cardTitle=this._element.querySelector(".place__title"),this._cardLike=this._element.querySelector(".place__like"),this._cardDelete=this._element.querySelector(".place__delete"),this._cardFull=this._element.querySelector(".place"),this._cardNumOfLikes=this._element.querySelector(".place__num-of-likes"),this._cardImage.src=this._cardData.link,this._cardImage.alt=this._cardData.name,this.cardID=this._cardData._id,this._cardTitle.textContent=this._cardData.name,this._cardNumOfLikes.textContent=this._cardData.likes.length,this._userID!=this._cardData.owner._id&&this._cardDelete.remove(),this.isLikedCard()&&this._cardLike.classList.add("place__like_active"),this._addListeners(),this._element}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var g=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=r}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderPlace",value:function(t){var e=this;this._clear(),t.forEach((function(t){e._renderer(t)}))}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}var k=function(){function t(e){var r=e.userNameSelector,n=e.userJobSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{editProfileName:this._userName.textContent,editProFileJob:this._userJob.textContent,userID:this._userID,avatar:this._avatar}}},{key:"getUserID",value:function(){return this._userID}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userJob.textContent=t.about,this._userID=t._id,this._avatar=t.avatar}},{key:"setUserAvatar",value:function(t){this._userAvatar.src=t.avatar}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}var P=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=e,this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){document.addEventListener("keyup",this._handleEscClose),this._popupElement.classList.add("popup_opened")}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"changeBtnSubmitText",value:function(t){this._btnSubmit.textContent=t}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.querySelector(".popup__close-btn").addEventListener("click",(function(){t.close()})),this._popupElement.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=x(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function x(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function I(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(n);if(o){var r=D(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return I(this,t)});function a(t,e){var r,n=t.handleSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._handleSubmitForm=n,r._form=r._popupElement.querySelector(".popup__form"),r._inputList=r._form.querySelectorAll(".popup__input"),r._btnSubmit=r._form.querySelector(".popup__save-btn"),r}return e=a,(r=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t._getInputValues())})),C(D(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),C(D(a.prototype),"close",this).call(this)}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=U(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},N.apply(this,arguments)}function U(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function F(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(n);if(o){var r=V(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return F(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupImageBig=e._popupElement.querySelector(".popup__image-big"),e._popupImageTitle=e._popupElement.querySelector(".popup__image-title"),e}return e=a,(r=[{key:"open",value:function(t){this._popupImageBig.src=t.link,this._popupImageBig.alt=t.name,this._popupImageTitle.textContent=t.name,N(V(a.prototype),"open",this).call(this)}}])&&A(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Y(n.key),n)}}function Y(t){var e=function(t,e){if("object"!==M(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===M(e)?e:String(e)}var $=function(){function t(e,r){var n,o,i,a,c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=function(){c._inputs.forEach((function(t){t.addEventListener("input",(function(){t.validity.valid?c._hideErrorMessage(t):c._showErrorMessage(t,t.validationMessage),c._toogleBtnDisabled()}))}))},(o=Y(o="_checkValidityForm"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this._config=e,this._formName=r,this._inputs=function(t){if(Array.isArray(t))return G(t)}(a=this._formName.querySelectorAll(this._config.inputSelector))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(a)||function(t,e){if(t){if("string"==typeof t)return G(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(t,e):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._submitButton=this._formName.querySelector(this._config.submitButtonSelector)}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._formName.addEventListener("submit",(function(t){t.preventDefault()})),this._checkValidityForm()}},{key:"checkOpenedPopup",value:function(){var t=this;this._inputs.forEach((function(e){t._hideErrorMessage(e)})),this._toogleBtnDisabled()}},{key:"_showErrorMessage",value:function(t,e){var r=this._formName.querySelector(".".concat(t.name,"-error"));t.classList.add("".concat(this._config.inputErrorClass)),r.textContent=e}},{key:"_hideErrorMessage",value:function(t){var e=this._formName.querySelector(".".concat(t.name,"-error"));t.classList.remove("".concat(this._config.inputErrorClass)),e.textContent=""}},{key:"_toogleBtnDisabled",value:function(){this._inputs.every((function(t){return t.validity.valid}))?(this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.disabled=""):(this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.disabled="disabled")}}])&&H(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function K(){K=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:w(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function h(){}function y(){}var d={};u(d,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(P([])));m&&m!==e&&r.call(m,i)&&(d=m);var b=y.prototype=p.prototype=Object.create(d);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==z(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(g.prototype),u(g.prototype,a,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function Q(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function W(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){Q(i,n,o,a,c,"next",t)}function c(t){Q(i,n,o,a,c,"throw",t)}a(void 0)}))}}function X(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===z(o)?o:String(o)),n)}var o}var Z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=e,this._baseUrl=this._options.baseUrl,this._headers=this._options.headers}var e,r,n,o,i,a,c,u,s,l;return e=t,r=[{key:"_responceProcessing",value:function(t){return t.ok?t.json():Promise.reject("Ошибка в Api: ".concat(t.status))}},{key:"getUserInfo",value:(l=W(K().mark((function t(){var e;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers});case 2:return e=t.sent,t.abrupt("return",this._responceProcessing(e));case 4:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"editUserInfo",value:(s=W(K().mark((function t(e){var r;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.editProfileName,about:e.editProFileJob})});case 2:return r=t.sent,t.abrupt("return",this._responceProcessing(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})},{key:"editUserAvatar",value:(u=W(K().mark((function t(e){var r;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})});case 2:return r=t.sent,t.abrupt("return",this._responceProcessing(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"getInitialCards",value:(c=W(K().mark((function t(){var e;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers});case 2:return e=t.sent,t.abrupt("return",this._responceProcessing(e));case 4:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"addNewCard",value:(a=W(K().mark((function t(e){var r;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})});case 2:return r=t.sent,t.abrupt("return",this._responceProcessing(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"deleteCard",value:(i=W(K().mark((function t(e){var r;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers});case 2:return r=t.sent,t.abrupt("return",this._responceProcessing(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{key:"addLike",value:(o=W(K().mark((function t(e){var r;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers});case 2:return r=t.sent,t.abrupt("return",this._responceProcessing(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"deleteLike",value:(n=W(K().mark((function t(e){var r;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers});case 2:return r=t.sent,t.abrupt("return",this._responceProcessing(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})}],r&&X(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function tt(t){return tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(t)}function et(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==tt(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==tt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===tt(o)?o:String(o)),n)}var o}function rt(){return rt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=nt(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},rt.apply(this,arguments)}function nt(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=at(t)););return t}function ot(t,e){return ot=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ot(t,e)}function it(t,e){if(e&&("object"===tt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function at(t){return at=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},at(t)}var ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ot(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=at(n);if(o){var r=at(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return it(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._form=e._popupElement.querySelector(".popup__form"),e._btnSubmit=e._form.querySelector(".popup__save-btn"),e}return e=a,(r=[{key:"handleSubmit",value:function(t){this._handleSubmitForm=t}},{key:"setEventListeners",value:function(){var t=this;rt(at(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm()}))}}])&&et(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function ut(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var st=new $(t,e);st.enableValidation();var lt=new $(t,r);lt.enableValidation();var ft=new $(t,n);ft.enableValidation();var pt=new Z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"03dc3376-ddee-4eae-b74f-6570ee2c94e8","Content-Type":"application/json"}});Promise.all([pt.getUserInfo(),pt.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return ut(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ut(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ht.setUserInfo(o),ht.setUserAvatar(o),vt.renderPlace(i)})).catch((function(t){console.log(t)}));var ht=new k({userNameSelector:".user-profile__name",userJobSelector:".user-profile__job",userAvatarSelector:".user-profile__photo"}),yt=new q({handleSubmitForm:function(t){yt.changeBtnSubmitText("Сохранение..."),pt.editUserInfo(t).then((function(t){ht.setUserInfo(t),yt.close()})).catch((function(t){console.log(t)})).finally((function(){return yt.changeBtnSubmitText("Сохранить")}))}},o);yt.setEventListeners();var dt=new q({handleSubmitForm:function(t){dt.changeBtnSubmitText("Сохранение..."),pt.editUserAvatar(t.link).then((function(t){ht.setUserAvatar(t),dt.close()})).catch((function(t){console.log(t)})).finally((function(){return yt.changeBtnSubmitText("Сохранить")}))}},i);dt.setEventListeners(),l.addEventListener("click",(function(){yt.setInputValues(ht.getUserInfo()),st.checkOpenedPopup(),yt.open()})),f.addEventListener("click",(function(){ft.checkOpenedPopup(),dt.open()}));var vt=new g({renderer:function(t){vt.addItem(bt(t))}},h),mt=new ct(u);function bt(t){var e=new m(t,s,ht.getUserID(),{handleCardClick:function(t){gt.open(t)},handleCardDelete:function(t){mt.open(),mt.handleSubmit((function(){mt.changeBtnSubmitText("Удаление..."),pt.deleteCard(t._id).then((function(){e.deleteCard(),mt.close()})).catch((function(t){console.log(t)})).finally((function(){return mt.changeBtnSubmitText("Да")}))}))},handleCardLike:function(t){e.isLikedCard()?pt.deleteLike(t._id).then((function(t){e.changeLikesCard(t.likes)})).catch((function(t){console.log(t)})):pt.addLike(t._id).then((function(t){return e.changeLikesCard(t.likes)})).catch((function(t){console.log(t)}))}});return e.createCard()}mt.setEventListeners();var _t=new q({handleSubmitForm:function(t){_t.changeBtnSubmitText("Сохранение..."),pt.addNewCard(t).then((function(t){vt.addItem(bt(t)),_t.close()})).catch((function(t){console.log(t)})).finally((function(){return _t.changeBtnSubmitText("Сохранить")}))}},a);_t.setEventListeners(),p.addEventListener("click",(function(){lt.checkOpenedPopup(),_t.open()}));var gt=new J(c);gt.setEventListeners()})();