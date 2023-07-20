"use strict";(self["webpackChunkvehicles_marketplace"]=self["webpackChunkvehicles_marketplace"]||[]).push([[966],{9966:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-wrapper"},[e.user.isActive?t("div",{staticClass:"profile-container"},[t("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.tryChangePassword.apply(null,arguments)}}},[t("div",{staticClass:"form-field-container"},[t("label",{staticClass:"form-label",attrs:{for:"name"}},[e._v("Current Password")]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password.currentPassword,expression:"password.currentPassword"}],class:["form-input",{"is-invalid ":e.submitted&&!e.$v.password.currentPassword.required}],attrs:{id:"name",type:"text",placeholder:"Enter commercial name"},domProps:{value:e.password.currentPassword},on:{input:function(t){t.target.composing||e.$set(e.password,"currentPassword",t.target.value)}}}),e.submitted&&!e.$v.password.currentPassword.required?t("div",{staticClass:"invalid-feedback"},[e._v(" Current password is required. ")]):e._e()])]),t("div",{staticClass:"form-field-container"},[t("label",{staticClass:"form-label",attrs:{for:"name"}},[e._v("New Password")]),t("div",{staticClass:"input-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password.newPassword,expression:"password.newPassword"}],class:["form-input",{"is-invalid ":e.submitted&&!e.$v.password.newPassword.required}],attrs:{id:"name",type:"text",placeholder:"Enter new password"},domProps:{value:e.password.newPassword},on:{input:function(t){t.target.composing||e.$set(e.password,"newPassword",t.target.value)}}}),e.submitted&&!e.$v.password.newPassword.required?t("div",{staticClass:"invalid-feedback"},[e._v(" A new password is required. ")]):e._e()])]),e._m(0)])]):t("div",{staticClass:"inactive-account"},[t("p",[e._v("Please update profile to activate account")]),t("div",{staticClass:"button"},[t("router-link",{attrs:{to:{name:"profile"}}},[e._v("Go to profile")])],1)])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"submit-btn"},[t("button",{staticClass:"update-btn",attrs:{type:"submit"}},[e._v("Change Password")])])}],u=r(379),o=r(629),i={data(){return{password:{},submitted:!1}},validations:{password:{currentPassword:{required:u.C1},newPassword:{required:u.C1}}},methods:{...(0,o.nv)("auth",["changePassword"]),...(0,o.OI)("auth",["SET_ALERT_MSG","TOGGLE_IS_LOADING"]),async tryChangePassword(){if(this.submitted=!0,!this.$v.$invalid){this.TOGGLE_IS_LOADING();try{await this.changePassword(this.password),this.SET_ALERT_MSG({title:"Success",type:"success",msg:"Password updated successfully"}),this.password={}}catch(e){this.SET_ALERT_MSG({title:"ERROR",type:"error",msg:e})}finally{this.TOGGLE_IS_LOADING()}}}},computed:{...(0,o.rn)("auth",["user"])}},s=i,f=r(1001),d=(0,f.Z)(s,n,a,!1,null,"a9e2561c",null),l=d.exports},6408:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=a},6195:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=a},5573:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t["default"]=a},7884:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=a},6681:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=a(r(8085));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var i=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.len=i;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var f=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=f},4078:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=a},8107:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,u=(0,n.regex)("email",a);t["default"]=u},379:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"Do",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return p.default}});var a=q(r(6408)),u=q(r(6195)),o=q(r(5669)),i=q(r(7884)),s=q(r(8107)),f=q(r(9103)),d=q(r(7340)),l=q(r(5287)),c=q(r(3091)),p=q(r(2419)),v=q(r(2941)),y=q(r(8300)),m=q(r(918)),w=q(r(3213)),b=q(r(5832)),_=q(r(5573)),h=q(r(2500)),P=q(r(2628)),g=q(r(6040)),x=q(r(6673)),O=q(r(4078)),j=S(r(6681));function M(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(M=function(e){return e?r:t})(e)}function S(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=M(t);if(r&&r.has(e))return r.get(e);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}function q(e){return e&&e.__esModule?e:{default:e}}},6673:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=a},9103:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t["default"]=a;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},7340:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(u)}))};t["default"]=a;var u=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5287:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t["default"]=a},6040:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=a},3091:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t["default"]=a},2628:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=a},2500:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t["default"]=a},5669:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=(0,n.regex)("numeric",/^[0-9]*$/);t["default"]=a},5832:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t["default"]=a},2419:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t["default"]=a},2941:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=a},8300:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=a},918:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t["default"]=a},3213:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(6681),a=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,u=(0,n.regex)("url",a);t["default"]=u},8085:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?r(16).R:r(8413).withParams,a=n;t["default"]=a},16:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.R=void 0;var a="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},u=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},o=a.vuelidate?a.vuelidate.withParams:u;t.R=o}}]);
//# sourceMappingURL=966.99d939fd.js.map