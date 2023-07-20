(self["webpackChunkvehicles_marketplace"]=self["webpackChunkvehicles_marketplace"]||[]).push([[998],{6981:function(t,e,n){"use strict";n(1983);var r=i(n(1543));function i(t){return t&&t.__esModule?t:{default:t}}r["default"]._babelPolyfill&&"undefined"!==typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),r["default"]._babelPolyfill=!0},1983:function(t,e,n){"use strict";n(5033),n(8033),n(2863),n(6141),n(4316),n(117),n(6863),n(290),n(8652),n(1235),n(8930),n(1794),n(1523),n(5666)},5033:function(t,e,n){n(8997),n(7944),n(5388),n(266),n(7557),n(3386),n(81),n(4943),n(192),n(4371),n(7026),n(6736),n(7260),n(4649),n(8325),n(2798),n(6911),n(4394),n(8769),n(729),n(9383),n(9315),n(5072),n(348),n(1028),n(2610),n(4007),n(7616),n(6762),n(3316),n(3019),n(293),n(640),n(6589),n(3210),n(2372),n(511),n(6781),n(4434),n(4783),n(5521),n(4093),n(6378),n(2380),n(2803),n(3725),n(7977),n(4192),n(2940),n(5731),n(9382),n(8877),n(2539),n(9820),n(8417),n(4333),n(2858),n(2058),n(5472),n(7001),n(7492),n(447),n(5624),n(1263),n(5193),n(8241),n(6723),n(9394),n(6938),n(1961),n(9659),n(3354),n(9620),n(638),n(2338),n(641),n(1575),n(5611),n(1033),n(160),n(5271),n(8221),n(2523),n(5441),n(8375),n(9106),n(9139),n(3352),n(3289),n(5943),n(9483),n(8292),n(6174),n(6975),n(1412),n(360),n(8394),n(3118),n(8772),n(1308),n(7080),n(8615),n(5244),n(9544),n(5475),n(3770),n(5201),n(1385),n(2813),n(2509),n(8253),n(7391),n(3307),n(3315),n(2920),n(5443),n(9815),n(3771),n(6935),n(7846),n(6403),n(1200),n(951),n(29),n(9310),n(6722),n(8372),n(4604),n(4781),n(8416),n(4395),n(9649),n(2475),n(2924),n(6337),n(3286),n(7225),n(8766),t.exports=n(4411)},2863:function(t,e,n){n(8125),t.exports=n(4411).Array.flatMap},8033:function(t,e,n){n(9348),t.exports=n(4411).Array.includes},8930:function(t,e,n){n(1768),t.exports=n(4411).Object.entries},8652:function(t,e,n){n(9223),t.exports=n(4411).Object.getOwnPropertyDescriptors},1235:function(t,e,n){n(7442),t.exports=n(4411).Object.values},1794:function(t,e,n){"use strict";n(2813),n(4936),t.exports=n(4411).Promise["finally"]},4316:function(t,e,n){n(239),t.exports=n(4411).String.padEnd},6141:function(t,e,n){n(8755),t.exports=n(4411).String.padStart},6863:function(t,e,n){n(6948),t.exports=n(4411).String.trimRight},117:function(t,e,n){n(3412),t.exports=n(4411).String.trimLeft},290:function(t,e,n){n(8284),t.exports=n(8833).f("asyncIterator")},1543:function(t,e,n){n(4296),t.exports=n(1275).global},7411:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},3206:function(t,e,n){var r=n(700);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},1275:function(t){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},999:function(t,e,n){var r=n(7411);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},697:function(t,e,n){t.exports=!n(3834)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},2394:function(t,e,n){var r=n(700),i=n(1075).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},4553:function(t,e,n){var r=n(1075),i=n(1275),o=n(999),s=n(2550),a=n(4324),c="prototype",u=function(t,e,n){var l,h,f,d=t&u.F,p=t&u.G,g=t&u.S,m=t&u.P,v=t&u.B,y=t&u.W,_=p?i:i[e]||(i[e]={}),b=_[c],w=p?r:g?r[e]:(r[e]||{})[c];for(l in p&&(n=e),n)h=!d&&w&&void 0!==w[l],h&&a(_,l)||(f=h?w[l]:n[l],_[l]=p&&"function"!=typeof w[l]?n[l]:v&&h?o(f,r):y&&w[l]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(f):m&&"function"==typeof f?o(Function.call,f):f,m&&((_.virtual||(_.virtual={}))[l]=f,t&u.R&&b&&!b[l]&&s(b,l,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},3834:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},1075:function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},4324:function(t){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},2550:function(t,e,n){var r=n(249),i=n(3652);t.exports=n(697)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},3393:function(t,e,n){t.exports=!n(697)&&!n(3834)((function(){return 7!=Object.defineProperty(n(2394)("div"),"a",{get:function(){return 7}}).a}))},700:function(t){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},249:function(t,e,n){var r=n(3206),i=n(3393),o=n(3377),s=Object.defineProperty;e.f=n(697)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},3652:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},3377:function(t,e,n){var r=n(700);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},4296:function(t,e,n){var r=n(4553);r(r.G,{global:n(1075)})},3079:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},3373:function(t,e,n){var r=n(9426);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(e);return+t}},2802:function(t,e,n){var r=n(9739)("unscopables"),i=Array.prototype;void 0==i[r]&&n(8442)(i,r,{}),t.exports=function(t){i[r][t]=!0}},9959:function(t,e,n){"use strict";var r=n(7384)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},599:function(t){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},9719:function(t,e,n){var r=n(7481);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},4893:function(t,e,n){"use strict";var r=n(4200),i=n(5044),o=n(1838);t.exports=[].copyWithin||function(t,e){var n=r(this),s=o(n.length),a=i(t,s),c=i(e,s),u=arguments.length>2?arguments[2]:void 0,l=Math.min((void 0===u?s:i(u,s))-c,s-a),h=1;c<a&&a<c+l&&(h=-1,c+=l-1,a+=l-1);while(l-- >0)c in n?n[a]=n[c]:delete n[a],a+=h,c+=h;return n}},852:function(t,e,n){"use strict";var r=n(4200),i=n(5044),o=n(1838);t.exports=function(t){var e=r(this),n=o(e.length),s=arguments.length,a=i(s>1?arguments[1]:void 0,n),c=s>2?arguments[2]:void 0,u=void 0===c?n:i(c,n);while(u>a)e[a++]=t;return e}},1545:function(t,e,n){var r=n(8500),i=n(1838),o=n(5044);t.exports=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},6934:function(t,e,n){var r=n(2794),i=n(975),o=n(4200),s=n(1838),a=n(4087);t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,l=4==t,h=6==t,f=5==t||h,d=e||a;return function(e,a,p){for(var g,m,v=o(e),y=i(v),_=r(a,p,3),b=s(y.length),w=0,E=n?d(e,b):c?d(e,0):void 0;b>w;w++)if((f||w in y)&&(g=y[w],m=_(g,w,v),t))if(n)E[w]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:E.push(g)}else if(l)return!1;return h?-1:u||l?l:E}}},9857:function(t,e,n){var r=n(3079),i=n(4200),o=n(975),s=n(1838);t.exports=function(t,e,n,a,c){r(e);var u=i(t),l=o(u),h=s(u.length),f=c?h-1:0,d=c?-1:1;if(n<2)for(;;){if(f in l){a=l[f],f+=d;break}if(f+=d,c?f<0:h<=f)throw TypeError("Reduce of empty array with no initial value")}for(;c?f>=0:h>f;f+=d)f in l&&(a=e(a,l[f],f,u));return a}},4849:function(t,e,n){var r=n(7481),i=n(689),o=n(9739)("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},4087:function(t,e,n){var r=n(4849);t.exports=function(t,e){return new(r(t))(e)}},6966:function(t,e,n){"use strict";var r=n(3079),i=n(7481),o=n(3534),s=[].slice,a={},c=function(t,e,n){if(!(e in a)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";a[e]=Function("F,a","return new F("+r.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=s.call(arguments,1),a=function(){var r=n.concat(s.call(arguments));return this instanceof a?c(e,r.length,r):o(e,r,t)};return i(e.prototype)&&(a.prototype=e.prototype),a}},2845:function(t,e,n){var r=n(9426),i=n(9739)("toStringTag"),o="Arguments"==r(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},9426:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},5144:function(t,e,n){"use strict";var r=n(3530).f,i=n(2545),o=n(4092),s=n(2794),a=n(599),c=n(2971),u=n(9121),l=n(8611),h=n(5993),f=n(1916),d=n(2153).fastKey,p=n(1603),g=f?"_s":"size",m=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){a(t,l,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[g]=0,void 0!=r&&c(r,n,t[u],t)}));return o(l.prototype,{clear:function(){for(var t=p(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var n=p(this,e),r=m(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[g]--}return!!r},forEach:function(t){p(this,e);var n,r=s(t,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){r(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(t){return!!m(p(this,e),t)}}),f&&r(l.prototype,"size",{get:function(){return p(this,e)[g]}}),l},def:function(t,e,n){var r,i,o=m(t,e);return o?o.v=n:(t._l=o={i:i=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[g]++,"F"!==i&&(t._i[i]=o)),t},getEntry:m,setStrong:function(t,e,n){u(t,e,(function(t,n){this._t=p(t,e),this._k=n,this._l=void 0}),(function(){var t=this,e=t._k,n=t._l;while(n&&n.r)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?l(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,l(1))}),n?"entries":"values",!n,!0),h(e)}}},3503:function(t,e,n){"use strict";var r=n(4092),i=n(2153).getWeak,o=n(9719),s=n(7481),a=n(599),c=n(2971),u=n(6934),l=n(1063),h=n(1603),f=u(5),d=u(6),p=0,g=function(t){return t._l||(t._l=new m)},m=function(){this.a=[]},v=function(t,e){return f(t.a,(function(t){return t[0]===e}))};m.prototype={get:function(t){var e=v(this,t);if(e)return e[1]},has:function(t){return!!v(this,t)},set:function(t,e){var n=v(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=d(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,o){var u=t((function(t,r){a(t,u,e,"_i"),t._t=e,t._i=p++,t._l=void 0,void 0!=r&&c(r,n,t[o],t)}));return r(u.prototype,{delete:function(t){if(!s(t))return!1;var n=i(t);return!0===n?g(h(this,e))["delete"](t):n&&l(n,this._i)&&delete n[this._i]},has:function(t){if(!s(t))return!1;var n=i(t);return!0===n?g(h(this,e)).has(t):n&&l(n,this._i)}}),u},def:function(t,e,n){var r=i(o(e),!0);return!0===r?g(t).set(e,n):r[t._i]=n,t},ufstore:g}},8091:function(t,e,n){"use strict";var r=n(6341),i=n(5366),o=n(1564),s=n(4092),a=n(2153),c=n(2971),u=n(599),l=n(7481),h=n(1240),f=n(1461),d=n(1309),p=n(4805);t.exports=function(t,e,n,g,m,v){var y=r[t],_=y,b=m?"set":"add",w=_&&_.prototype,E={},S=function(t){var e=w[t];o(w,t,"delete"==t||"has"==t?function(t){return!(v&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!l(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof _&&(v||w.forEach&&!h((function(){(new _).entries().next()})))){var T=new _,I=T[b](v?{}:-0,1)!=T,C=h((function(){T.has(1)})),O=f((function(t){new _(t)})),A=!v&&h((function(){var t=new _,e=5;while(e--)t[b](e,e);return!t.has(-0)}));O||(_=e((function(e,n){u(e,_,t);var r=p(new y,e,_);return void 0!=n&&c(n,m,r[b],r),r})),_.prototype=w,w.constructor=_),(C||A)&&(S("delete"),S("has"),m&&S("get")),(A||I)&&S(b),v&&w.clear&&delete w.clear}else _=g.getConstructor(e,t,m,b),s(_.prototype,n),a.NEED=!0;return d(_,t),E[t]=_,i(i.G+i.W+i.F*(_!=y),E),v||g.setStrong(_,t,m),_}},4411:function(t){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},1676:function(t,e,n){"use strict";var r=n(3530),i=n(1761);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},2794:function(t,e,n){var r=n(3079);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},1792:function(t,e,n){"use strict";var r=n(1240),i=Date.prototype.getTime,o=Date.prototype.toISOString,s=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-50000000000001))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+s(t.getUTCMonth()+1)+"-"+s(t.getUTCDate())+"T"+s(t.getUTCHours())+":"+s(t.getUTCMinutes())+":"+s(t.getUTCSeconds())+"."+(n>99?n:"0"+s(n))+"Z"}:o},7687:function(t,e,n){"use strict";var r=n(9719),i=n(9241),o="number";t.exports=function(t){if("string"!==t&&t!==o&&"default"!==t)throw TypeError("Incorrect hint");return i(r(this),t!=o)}},3589:function(t){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},1916:function(t,e,n){t.exports=!n(1240)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},3383:function(t,e,n){var r=n(7481),i=n(6341).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},7590:function(t){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},4535:function(t,e,n){var r=n(5825),i=n(2520),o=n(1144);t.exports=function(t){var e=r(t),n=i.f;if(n){var s,a=n(t),c=o.f,u=0;while(a.length>u)c.call(t,s=a[u++])&&e.push(s)}return e}},5366:function(t,e,n){var r=n(6341),i=n(4411),o=n(8442),s=n(1564),a=n(2794),c="prototype",u=function(t,e,n){var l,h,f,d,p=t&u.F,g=t&u.G,m=t&u.S,v=t&u.P,y=t&u.B,_=g?r:m?r[e]||(r[e]={}):(r[e]||{})[c],b=g?i:i[e]||(i[e]={}),w=b[c]||(b[c]={});for(l in g&&(n=e),n)h=!p&&_&&void 0!==_[l],f=(h?_:n)[l],d=y&&h?a(f,r):v&&"function"==typeof f?a(Function.call,f):f,_&&s(_,l,f,t&u.U),b[l]!=f&&o(b,l,d),v&&w[l]!=f&&(w[l]=f)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},6881:function(t,e,n){var r=n(9739)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},1240:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},5307:function(t,e,n){"use strict";n(8615);var r=n(1564),i=n(8442),o=n(1240),s=n(3589),a=n(9739),c=n(8868),u=a("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=a(t),d=!o((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=d?!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e})):void 0;if(!d||!p||"replace"===t&&!l||"split"===t&&!h){var g=/./[f],m=n(s,f,""[t],(function(t,e,n,r,i){return e.exec===c?d&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),v=m[0],y=m[1];r(String.prototype,t,v),i(RegExp.prototype,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},6439:function(t,e,n){"use strict";var r=n(9719);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},3885:function(t,e,n){"use strict";var r=n(689),i=n(7481),o=n(1838),s=n(2794),a=n(9739)("isConcatSpreadable");function c(t,e,n,u,l,h,f,d){var p,g,m=l,v=0,y=!!f&&s(f,d,3);while(v<u){if(v in n){if(p=y?y(n[v],v,e):n[v],g=!1,i(p)&&(g=p[a],g=void 0!==g?!!g:r(p)),g&&h>0)m=c(t,e,p,o(p.length),m,h-1)-1;else{if(m>=9007199254740991)throw TypeError();t[m]=p}m++}v++}return m}t.exports=c},2971:function(t,e,n){var r=n(2794),i=n(5539),o=n(3894),s=n(9719),a=n(1838),c=n(8444),u={},l={},h=t.exports=function(t,e,n,h,f){var d,p,g,m,v=f?function(){return t}:c(t),y=r(n,h,e?2:1),_=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");if(o(v)){for(d=a(t.length);d>_;_++)if(m=e?y(s(p=t[_])[0],p[1]):y(t[_]),m===u||m===l)return m}else for(g=v.call(t);!(p=g.next()).done;)if(m=i(g,y,p.value,e),m===u||m===l)return m};h.BREAK=u,h.RETURN=l},5979:function(t,e,n){t.exports=n(7355)("native-function-to-string",Function.toString)},6341:function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},1063:function(t){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},8442:function(t,e,n){var r=n(3530),i=n(1761);t.exports=n(1916)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},6137:function(t,e,n){var r=n(6341).document;t.exports=r&&r.documentElement},4352:function(t,e,n){t.exports=!n(1916)&&!n(1240)((function(){return 7!=Object.defineProperty(n(3383)("div"),"a",{get:function(){return 7}}).a}))},4805:function(t,e,n){var r=n(7481),i=n(7135).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},3534:function(t){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},975:function(t,e,n){var r=n(9426);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},3894:function(t,e,n){var r=n(4919),i=n(9739)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},689:function(t,e,n){var r=n(9426);t.exports=Array.isArray||function(t){return"Array"==r(t)}},2289:function(t,e,n){var r=n(7481),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},7481:function(t){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},9543:function(t,e,n){var r=n(7481),i=n(9426),o=n(9739)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},5539:function(t,e,n){var r=n(9719);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(s){var o=t["return"];throw void 0!==o&&r(o.call(t)),s}}},7938:function(t,e,n){"use strict";var r=n(2545),i=n(1761),o=n(1309),s={};n(8442)(s,n(9739)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},9121:function(t,e,n){"use strict";var r=n(5113),i=n(5366),o=n(1564),s=n(8442),a=n(4919),c=n(7938),u=n(1309),l=n(4408),h=n(9739)("iterator"),f=!([].keys&&"next"in[].keys()),d="@@iterator",p="keys",g="values",m=function(){return this};t.exports=function(t,e,n,v,y,_,b){c(n,e,v);var w,E,S,T=function(t){if(!f&&t in A)return A[t];switch(t){case p:return function(){return new n(this,t)};case g:return function(){return new n(this,t)}}return function(){return new n(this,t)}},I=e+" Iterator",C=y==g,O=!1,A=t.prototype,k=A[h]||A[d]||y&&A[y],x=k||T(y),R=y?C?T("entries"):x:void 0,P="Array"==e&&A.entries||k;if(P&&(S=l(P.call(new t)),S!==Object.prototype&&S.next&&(u(S,I,!0),r||"function"==typeof S[h]||s(S,h,m))),C&&k&&k.name!==g&&(O=!0,x=function(){return k.call(this)}),r&&!b||!f&&!O&&A[h]||s(A,h,x),a[e]=x,a[I]=m,y)if(w={values:C?x:T(g),keys:_?x:T(p),entries:R},b)for(E in w)E in A||o(A,E,w[E]);else i(i.P+i.F*(f||O),e,w);return w}},1461:function(t,e,n){var r=n(9739)("iterator"),i=!1;try{var o=[7][r]();o["return"]=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(s){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(s){}return n}},8611:function(t){t.exports=function(t,e){return{value:e,done:!!t}}},4919:function(t){t.exports={}},5113:function(t){t.exports=!1},7117:function(t){var e=Math.expm1;t.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},9396:function(t,e,n){var r=n(4247),i=Math.pow,o=i(2,-52),s=i(2,-23),a=i(2,127)*(2-s),c=i(2,-126),u=function(t){return t+1/o-1/o};t.exports=Math.fround||function(t){var e,n,i=Math.abs(t),l=r(t);return i<c?l*u(i/c/s)*c*s:(e=(1+s/o)*i,n=e-(e-i),n>a||n!=n?l*(1/0):l*n)}},9007:function(t){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},4247:function(t){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},2153:function(t,e,n){var r=n(430)("meta"),i=n(7481),o=n(1063),s=n(3530).f,a=0,c=Object.isExtensible||function(){return!0},u=!n(1240)((function(){return c(Object.preventExtensions({}))})),l=function(t){s(t,r,{value:{i:"O"+ ++a,w:{}}})},h=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[r].i},f=function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[r].w},d=function(t){return u&&p.NEED&&c(t)&&!o(t,r)&&l(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:h,getWeak:f,onFreeze:d}},37:function(t,e,n){var r=n(6341),i=n(7122).set,o=r.MutationObserver||r.WebKitMutationObserver,s=r.process,a=r.Promise,c="process"==n(9426)(s);t.exports=function(){var t,e,n,u=function(){var r,i;c&&(r=s.domain)&&r.exit();while(t){i=t.fn,t=t.next;try{i()}catch(o){throw t?n():e=void 0,o}}e=void 0,r&&r.enter()};if(c)n=function(){s.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var l=a.resolve(void 0);n=function(){l.then(u)}}else n=function(){i.call(r,u)};else{var h=!0,f=document.createTextNode("");new o(u).observe(f,{characterData:!0}),n=function(){f.data=h=!h}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},3285:function(t,e,n){"use strict";var r=n(3079);function i(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new i(t)}},9821:function(t,e,n){"use strict";var r=n(1916),i=n(5825),o=n(2520),s=n(1144),a=n(4200),c=n(975),u=Object.assign;t.exports=!u||n(1240)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r}))?function(t,e){var n=a(t),u=arguments.length,l=1,h=o.f,f=s.f;while(u>l){var d,p=c(arguments[l++]),g=h?i(p).concat(h(p)):i(p),m=g.length,v=0;while(m>v)d=g[v++],r&&!f.call(p,d)||(n[d]=p[d])}return n}:u},2545:function(t,e,n){var r=n(9719),i=n(413),o=n(7590),s=n(3548)("IE_PROTO"),a=function(){},c="prototype",u=function(){var t,e=n(3383)("iframe"),r=o.length,i="<",s=">";e.style.display="none",n(6137).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+s+"document.F=Object"+i+"/script"+s),t.close(),u=t.F;while(r--)delete u[c][o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=r(t),n=new a,a[c]=null,n[s]=t):n=u(),void 0===e?n:i(n,e)}},3530:function(t,e,n){var r=n(9719),i=n(4352),o=n(9241),s=Object.defineProperty;e.f=n(1916)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},413:function(t,e,n){var r=n(3530),i=n(9719),o=n(5825);t.exports=n(1916)?Object.defineProperties:function(t,e){i(t);var n,s=o(e),a=s.length,c=0;while(a>c)r.f(t,n=s[c++],e[n]);return t}},7762:function(t,e,n){var r=n(1144),i=n(1761),o=n(8500),s=n(9241),a=n(1063),c=n(4352),u=Object.getOwnPropertyDescriptor;e.f=n(1916)?u:function(t,e){if(t=o(t),e=s(e,!0),c)try{return u(t,e)}catch(n){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},5009:function(t,e,n){var r=n(8500),i=n(4230).f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(r(t))}},4230:function(t,e,n){var r=n(2851),i=n(7590).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},2520:function(t,e){e.f=Object.getOwnPropertySymbols},4408:function(t,e,n){var r=n(1063),i=n(4200),o=n(3548)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},2851:function(t,e,n){var r=n(1063),i=n(8500),o=n(1545)(!1),s=n(3548)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)n!=s&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},5825:function(t,e,n){var r=n(2851),i=n(7590);t.exports=Object.keys||function(t){return r(t,i)}},1144:function(t,e){e.f={}.propertyIsEnumerable},1025:function(t,e,n){var r=n(5366),i=n(4411),o=n(1240);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",s)}},5346:function(t,e,n){var r=n(1916),i=n(5825),o=n(8500),s=n(1144).f;t.exports=function(t){return function(e){var n,a=o(e),c=i(a),u=c.length,l=0,h=[];while(u>l)n=c[l++],r&&!s.call(a,n)||h.push(t?[n,a[n]]:a[n]);return h}}},7285:function(t,e,n){var r=n(4230),i=n(2520),o=n(9719),s=n(6341).Reflect;t.exports=s&&s.ownKeys||function(t){var e=r.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},3765:function(t,e,n){var r=n(6341).parseFloat,i=n(7370).trim;t.exports=1/r(n(8275)+"-0")!==-1/0?function(t){var e=i(String(t),3),n=r(e);return 0===n&&"-"==e.charAt(0)?-0:n}:r},500:function(t,e,n){var r=n(6341).parseInt,i=n(7370).trim,o=n(8275),s=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(s.test(n)?16:10))}:r},8332:function(t){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},8614:function(t,e,n){var r=n(9719),i=n(7481),o=n(3285);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},1761:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4092:function(t,e,n){var r=n(1564);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},1564:function(t,e,n){var r=n(6341),i=n(8442),o=n(1063),s=n(430)("src"),a=n(5979),c="toString",u=(""+a).split(c);n(4411).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,s)||i(n,s,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,c,(function(){return"function"==typeof this&&this[s]||a.call(this)}))},9073:function(t,e,n){"use strict";var r=n(2845),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},8868:function(t,e,n){"use strict";var r=n(6439),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,a="lastIndex",c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[a]||0!==e[a]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(s=function(t){var e,n,s,l,h=this;return u&&(n=new RegExp("^"+h.source+"$(?!\\s)",r.call(h))),c&&(e=h[a]),s=i.call(h,t),c&&s&&(h[a]=h.global?s.index+s[0].length:e),u&&s&&s.length>1&&o.call(s[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s}),t.exports=s},1541:function(t){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},7135:function(t,e,n){var r=n(7481),i=n(9719),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(2794)(Function.call,n(7762).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},5993:function(t,e,n){"use strict";var r=n(6341),i=n(3530),o=n(1916),s=n(9739)("species");t.exports=function(t){var e=r[t];o&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},1309:function(t,e,n){var r=n(3530).f,i=n(1063),o=n(9739)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},3548:function(t,e,n){var r=n(7355)("keys"),i=n(430);t.exports=function(t){return r[t]||(r[t]=i(t))}},7355:function(t,e,n){var r=n(4411),i=n(6341),o="__core-js_shared__",s=i[o]||(i[o]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(5113)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},9789:function(t,e,n){var r=n(9719),i=n(3079),o=n(9739)("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},5139:function(t,e,n){"use strict";var r=n(1240);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},7384:function(t,e,n){var r=n(1549),i=n(3589);t.exports=function(t){return function(e,n){var o,s,a=String(i(e)),c=r(n),u=a.length;return c<0||c>=u?t?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):o:t?a.slice(c,c+2):s-56320+(o-55296<<10)+65536)}}},3256:function(t,e,n){var r=n(9543),i=n(3589);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},9048:function(t,e,n){var r=n(5366),i=n(1240),o=n(3589),s=/"/g,a=function(t,e,n,r){var i=String(o(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(r).replace(s,"&quot;")+'"'),a+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},9823:function(t,e,n){var r=n(1838),i=n(5),o=n(3589);t.exports=function(t,e,n,s){var a=String(o(t)),c=a.length,u=void 0===n?" ":String(n),l=r(e);if(l<=c||""==u)return a;var h=l-c,f=i.call(u,Math.ceil(h/u.length));return f.length>h&&(f=f.slice(0,h)),s?f+a:a+f}},5:function(t,e,n){"use strict";var r=n(1549),i=n(3589);t.exports=function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},7370:function(t,e,n){var r=n(5366),i=n(3589),o=n(1240),s=n(8275),a="["+s+"]",c="​",u=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),h=function(t,e,n){var i={},a=o((function(){return!!s[t]()||c[t]()!=c})),u=i[t]=a?e(f):s[t];n&&(i[n]=u),r(r.P+r.F*a,"String",i)},f=h.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=h},8275:function(t){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},7122:function(t,e,n){var r,i,o,s=n(2794),a=n(3534),c=n(6137),u=n(3383),l=n(6341),h=l.process,f=l.setImmediate,d=l.clearImmediate,p=l.MessageChannel,g=l.Dispatch,m=0,v={},y="onreadystatechange",_=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},b=function(t){_.call(t.data)};f&&d||(f=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return v[++m]=function(){a("function"==typeof t?t:Function(t),e)},r(m),m},d=function(t){delete v[t]},"process"==n(9426)(h)?r=function(t){h.nextTick(s(_,t,1))}:g&&g.now?r=function(t){g.now(s(_,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=b,r=s(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",b,!1)):r=y in u("script")?function(t){c.appendChild(u("script"))[y]=function(){c.removeChild(this),_.call(t)}}:function(t){setTimeout(s(_,t,1),0)}),t.exports={set:f,clear:d}},5044:function(t,e,n){var r=n(1549),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},9707:function(t,e,n){var r=n(1549),i=n(1838);t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length!");return n}},1549:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},8500:function(t,e,n){var r=n(975),i=n(3589);t.exports=function(t){return r(i(t))}},1838:function(t,e,n){var r=n(1549),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},4200:function(t,e,n){var r=n(3589);t.exports=function(t){return Object(r(t))}},9241:function(t,e,n){var r=n(7481);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},8754:function(t,e,n){"use strict";if(n(1916)){var r=n(5113),i=n(6341),o=n(1240),s=n(5366),a=n(7728),c=n(9895),u=n(2794),l=n(599),h=n(1761),f=n(8442),d=n(4092),p=n(1549),g=n(1838),m=n(9707),v=n(5044),y=n(9241),_=n(1063),b=n(2845),w=n(7481),E=n(4200),S=n(3894),T=n(2545),I=n(4408),C=n(4230).f,O=n(8444),A=n(430),k=n(9739),x=n(6934),R=n(1545),P=n(9789),N=n(1308),D=n(4919),L=n(1461),M=n(5993),j=n(852),F=n(4893),U=n(3530),$=n(7762),V=U.f,B=$.f,z=i.RangeError,q=i.TypeError,H=i.Uint8Array,W="ArrayBuffer",G="Shared"+W,K="BYTES_PER_ELEMENT",Q="prototype",X=Array[Q],J=c.ArrayBuffer,Y=c.DataView,Z=x(0),tt=x(2),et=x(3),nt=x(4),rt=x(5),it=x(6),ot=R(!0),st=R(!1),at=N.values,ct=N.keys,ut=N.entries,lt=X.lastIndexOf,ht=X.reduce,ft=X.reduceRight,dt=X.join,pt=X.sort,gt=X.slice,mt=X.toString,vt=X.toLocaleString,yt=k("iterator"),_t=k("toStringTag"),bt=A("typed_constructor"),wt=A("def_constructor"),Et=a.CONSTR,St=a.TYPED,Tt=a.VIEW,It="Wrong length!",Ct=x(1,(function(t,e){return Rt(P(t,t[wt]),e)})),Ot=o((function(){return 1===new H(new Uint16Array([1]).buffer)[0]})),At=!!H&&!!H[Q].set&&o((function(){new H(1).set({})})),kt=function(t,e){var n=p(t);if(n<0||n%e)throw z("Wrong offset!");return n},xt=function(t){if(w(t)&&St in t)return t;throw q(t+" is not a typed array!")},Rt=function(t,e){if(!w(t)||!(bt in t))throw q("It is not a typed array constructor!");return new t(e)},Pt=function(t,e){return Nt(P(t,t[wt]),e)},Nt=function(t,e){var n=0,r=e.length,i=Rt(t,r);while(r>n)i[n]=e[n++];return i},Dt=function(t,e,n){V(t,e,{get:function(){return this._d[n]}})},Lt=function(t){var e,n,r,i,o,s,a=E(t),c=arguments.length,l=c>1?arguments[1]:void 0,h=void 0!==l,f=O(a);if(void 0!=f&&!S(f)){for(s=f.call(a),r=[],e=0;!(o=s.next()).done;e++)r.push(o.value);a=r}for(h&&c>2&&(l=u(l,arguments[2],2)),e=0,n=g(a.length),i=Rt(this,n);n>e;e++)i[e]=h?l(a[e],e):a[e];return i},Mt=function(){var t=0,e=arguments.length,n=Rt(this,e);while(e>t)n[t]=arguments[t++];return n},jt=!!H&&o((function(){vt.call(new H(1))})),Ft=function(){return vt.apply(jt?gt.call(xt(this)):xt(this),arguments)},Ut={copyWithin:function(t,e){return F.call(xt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return nt(xt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return j.apply(xt(this),arguments)},filter:function(t){return Pt(this,tt(xt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return rt(xt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return it(xt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(xt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return st(xt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ot(xt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return dt.apply(xt(this),arguments)},lastIndexOf:function(t){return lt.apply(xt(this),arguments)},map:function(t){return Ct(xt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ht.apply(xt(this),arguments)},reduceRight:function(t){return ft.apply(xt(this),arguments)},reverse:function(){var t,e=this,n=xt(e).length,r=Math.floor(n/2),i=0;while(i<r)t=e[i],e[i++]=e[--n],e[n]=t;return e},some:function(t){return et(xt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return pt.call(xt(this),t)},subarray:function(t,e){var n=xt(this),r=n.length,i=v(t,r);return new(P(n,n[wt]))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,g((void 0===e?r:v(e,r))-i))}},$t=function(t,e){return Pt(this,gt.call(xt(this),t,e))},Vt=function(t){xt(this);var e=kt(arguments[1],1),n=this.length,r=E(t),i=g(r.length),o=0;if(i+e>n)throw z(It);while(o<i)this[e+o]=r[o++]},Bt={entries:function(){return ut.call(xt(this))},keys:function(){return ct.call(xt(this))},values:function(){return at.call(xt(this))}},zt=function(t,e){return w(t)&&t[St]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},qt=function(t,e){return zt(t,e=y(e,!0))?h(2,t[e]):B(t,e)},Ht=function(t,e,n){return!(zt(t,e=y(e,!0))&&w(n)&&_(n,"value"))||_(n,"get")||_(n,"set")||n.configurable||_(n,"writable")&&!n.writable||_(n,"enumerable")&&!n.enumerable?V(t,e,n):(t[e]=n.value,t)};Et||($.f=qt,U.f=Ht),s(s.S+s.F*!Et,"Object",{getOwnPropertyDescriptor:qt,defineProperty:Ht}),o((function(){mt.call({})}))&&(mt=vt=function(){return dt.call(this)});var Wt=d({},Ut);d(Wt,Bt),f(Wt,yt,Bt.values),d(Wt,{slice:$t,set:Vt,constructor:function(){},toString:mt,toLocaleString:Ft}),Dt(Wt,"buffer","b"),Dt(Wt,"byteOffset","o"),Dt(Wt,"byteLength","l"),Dt(Wt,"length","e"),V(Wt,_t,{get:function(){return this[St]}}),t.exports=function(t,e,n,c){c=!!c;var u=t+(c?"Clamped":"")+"Array",h="get"+t,d="set"+t,p=i[u],v=p||{},y=p&&I(p),_=!p||!a.ABV,E={},S=p&&p[Q],O=function(t,n){var r=t._d;return r.v[h](n*e+r.o,Ot)},A=function(t,n,r){var i=t._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[d](n*e+i.o,r,Ot)},k=function(t,e){V(t,e,{get:function(){return O(this,e)},set:function(t){return A(this,e,t)},enumerable:!0})};_?(p=n((function(t,n,r,i){l(t,p,u,"_d");var o,s,a,c,h=0,d=0;if(w(n)){if(!(n instanceof J||(c=b(n))==W||c==G))return St in n?Nt(p,n):Lt.call(p,n);o=n,d=kt(r,e);var v=n.byteLength;if(void 0===i){if(v%e)throw z(It);if(s=v-d,s<0)throw z(It)}else if(s=g(i)*e,s+d>v)throw z(It);a=s/e}else a=m(n),s=a*e,o=new J(s);f(t,"_d",{b:o,o:d,l:s,e:a,v:new Y(o)});while(h<a)k(t,h++)})),S=p[Q]=T(Wt),f(S,"constructor",p)):o((function(){p(1)}))&&o((function(){new p(-1)}))&&L((function(t){new p,new p(null),new p(1.5),new p(t)}),!0)||(p=n((function(t,n,r,i){var o;return l(t,p,u),w(n)?n instanceof J||(o=b(n))==W||o==G?void 0!==i?new v(n,kt(r,e),i):void 0!==r?new v(n,kt(r,e)):new v(n):St in n?Nt(p,n):Lt.call(p,n):new v(m(n))})),Z(y!==Function.prototype?C(v).concat(C(y)):C(v),(function(t){t in p||f(p,t,v[t])})),p[Q]=S,r||(S.constructor=p));var x=S[yt],R=!!x&&("values"==x.name||void 0==x.name),P=Bt.values;f(p,bt,!0),f(S,St,u),f(S,Tt,!0),f(S,wt,p),(c?new p(1)[_t]==u:_t in S)||V(S,_t,{get:function(){return u}}),E[u]=p,s(s.G+s.W+s.F*(p!=v),E),s(s.S,u,{BYTES_PER_ELEMENT:e}),s(s.S+s.F*o((function(){v.of.call(p,1)})),u,{from:Lt,of:Mt}),K in S||f(S,K,e),s(s.P,u,Ut),M(u),s(s.P+s.F*At,u,{set:Vt}),s(s.P+s.F*!R,u,Bt),r||S.toString==mt||(S.toString=mt),s(s.P+s.F*o((function(){new p(1).slice()})),u,{slice:$t}),s(s.P+s.F*(o((function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()}))||!o((function(){S.toLocaleString.call([1,2])}))),u,{toLocaleString:Ft}),D[u]=R?x:P,r||R||f(S,yt,P)}}else t.exports=function(){}},9895:function(t,e,n){"use strict";var r=n(6341),i=n(1916),o=n(5113),s=n(7728),a=n(8442),c=n(4092),u=n(1240),l=n(599),h=n(1549),f=n(1838),d=n(9707),p=n(4230).f,g=n(3530).f,m=n(852),v=n(1309),y="ArrayBuffer",_="DataView",b="prototype",w="Wrong length!",E="Wrong index!",S=r[y],T=r[_],I=r.Math,C=r.RangeError,O=r.Infinity,A=S,k=I.abs,x=I.pow,R=I.floor,P=I.log,N=I.LN2,D="buffer",L="byteLength",M="byteOffset",j=i?"_b":D,F=i?"_l":L,U=i?"_o":M;function $(t,e,n){var r,i,o,s=new Array(n),a=8*n-e-1,c=(1<<a)-1,u=c>>1,l=23===e?x(2,-24)-x(2,-77):0,h=0,f=t<0||0===t&&1/t<0?1:0;for(t=k(t),t!=t||t===O?(i=t!=t?1:0,r=c):(r=R(P(t)/N),t*(o=x(2,-r))<1&&(r--,o*=2),t+=r+u>=1?l/o:l*x(2,1-u),t*o>=2&&(r++,o/=2),r+u>=c?(i=0,r=c):r+u>=1?(i=(t*o-1)*x(2,e),r+=u):(i=t*x(2,u-1)*x(2,e),r=0));e>=8;s[h++]=255&i,i/=256,e-=8);for(r=r<<e|i,a+=e;a>0;s[h++]=255&r,r/=256,a-=8);return s[--h]|=128*f,s}function V(t,e,n){var r,i=8*n-e-1,o=(1<<i)-1,s=o>>1,a=i-7,c=n-1,u=t[c--],l=127&u;for(u>>=7;a>0;l=256*l+t[c],c--,a-=8);for(r=l&(1<<-a)-1,l>>=-a,a+=e;a>0;r=256*r+t[c],c--,a-=8);if(0===l)l=1-s;else{if(l===o)return r?NaN:u?-O:O;r+=x(2,e),l-=s}return(u?-1:1)*r*x(2,l-e)}function B(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function z(t){return[255&t]}function q(t){return[255&t,t>>8&255]}function H(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function W(t){return $(t,52,8)}function G(t){return $(t,23,4)}function K(t,e,n){g(t[b],e,{get:function(){return this[n]}})}function Q(t,e,n,r){var i=+n,o=d(i);if(o+e>t[F])throw C(E);var s=t[j]._b,a=o+t[U],c=s.slice(a,a+e);return r?c:c.reverse()}function X(t,e,n,r,i,o){var s=+n,a=d(s);if(a+e>t[F])throw C(E);for(var c=t[j]._b,u=a+t[U],l=r(+i),h=0;h<e;h++)c[u+h]=l[o?h:e-h-1]}if(s.ABV){if(!u((function(){S(1)}))||!u((function(){new S(-1)}))||u((function(){return new S,new S(1.5),new S(NaN),S.name!=y}))){S=function(t){return l(this,S),new A(d(t))};for(var J,Y=S[b]=A[b],Z=p(A),tt=0;Z.length>tt;)(J=Z[tt++])in S||a(S,J,A[J]);o||(Y.constructor=S)}var et=new T(new S(2)),nt=T[b].setInt8;et.setInt8(0,2147483648),et.setInt8(1,2147483649),!et.getInt8(0)&&et.getInt8(1)||c(T[b],{setInt8:function(t,e){nt.call(this,t,e<<24>>24)},setUint8:function(t,e){nt.call(this,t,e<<24>>24)}},!0)}else S=function(t){l(this,S,y);var e=d(t);this._b=m.call(new Array(e),0),this[F]=e},T=function(t,e,n){l(this,T,_),l(t,S,_);var r=t[F],i=h(e);if(i<0||i>r)throw C("Wrong offset!");if(n=void 0===n?r-i:f(n),i+n>r)throw C(w);this[j]=t,this[U]=i,this[F]=n},i&&(K(S,L,"_l"),K(T,D,"_b"),K(T,L,"_l"),K(T,M,"_o")),c(T[b],{getInt8:function(t){return Q(this,1,t)[0]<<24>>24},getUint8:function(t){return Q(this,1,t)[0]},getInt16:function(t){var e=Q(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=Q(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return B(Q(this,4,t,arguments[1]))},getUint32:function(t){return B(Q(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return V(Q(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return V(Q(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){X(this,1,t,z,e)},setUint8:function(t,e){X(this,1,t,z,e)},setInt16:function(t,e){X(this,2,t,q,e,arguments[2])},setUint16:function(t,e){X(this,2,t,q,e,arguments[2])},setInt32:function(t,e){X(this,4,t,H,e,arguments[2])},setUint32:function(t,e){X(this,4,t,H,e,arguments[2])},setFloat32:function(t,e){X(this,4,t,G,e,arguments[2])},setFloat64:function(t,e){X(this,8,t,W,e,arguments[2])}});v(S,y),v(T,_),a(T[b],s.VIEW,!0),e[y]=S,e[_]=T},7728:function(t,e,n){var r,i=n(6341),o=n(8442),s=n(430),a=s("typed_array"),c=s("view"),u=!(!i.ArrayBuffer||!i.DataView),l=u,h=0,f=9,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");while(h<f)(r=i[d[h++]])?(o(r.prototype,a,!0),o(r.prototype,c,!0)):l=!1;t.exports={ABV:u,CONSTR:l,TYPED:a,VIEW:c}},430:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},3843:function(t,e,n){var r=n(6341),i=r.navigator;t.exports=i&&i.userAgent||""},1603:function(t,e,n){var r=n(7481);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},8155:function(t,e,n){var r=n(6341),i=n(4411),o=n(5113),s=n(8833),a=n(3530).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:s.f(t)})}},8833:function(t,e,n){e.f=n(9739)},9739:function(t,e,n){var r=n(7355)("wks"),i=n(430),o=n(6341).Symbol,s="function"==typeof o,a=t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))};a.store=r},8444:function(t,e,n){var r=n(2845),i=n(9739)("iterator"),o=n(4919);t.exports=n(4411).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},1412:function(t,e,n){var r=n(5366);r(r.P,"Array",{copyWithin:n(4893)}),n(2802)("copyWithin")},5943:function(t,e,n){"use strict";var r=n(5366),i=n(6934)(4);r(r.P+r.F*!n(5139)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},360:function(t,e,n){var r=n(5366);r(r.P,"Array",{fill:n(852)}),n(2802)("fill")},3352:function(t,e,n){"use strict";var r=n(5366),i=n(6934)(2);r(r.P+r.F*!n(5139)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},3118:function(t,e,n){"use strict";var r=n(5366),i=n(6934)(6),o="findIndex",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(2802)(o)},8394:function(t,e,n){"use strict";var r=n(5366),i=n(6934)(5),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),r(r.P+r.F*s,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(2802)(o)},9106:function(t,e,n){"use strict";var r=n(5366),i=n(6934)(0),o=n(5139)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},5271:function(t,e,n){"use strict";var r=n(2794),i=n(5366),o=n(4200),s=n(5539),a=n(3894),c=n(1838),u=n(1676),l=n(8444);i(i.S+i.F*!n(1461)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,h,f=o(t),d="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,m=void 0!==g,v=0,y=l(f);if(m&&(g=r(g,p>2?arguments[2]:void 0,2)),void 0==y||d==Array&&a(y))for(e=c(f.length),n=new d(e);e>v;v++)u(n,v,m?g(f[v],v):f[v]);else for(h=y.call(f),n=new d;!(i=h.next()).done;v++)u(n,v,m?s(h,g,[i.value,v],!0):i.value);return n.length=v,n}})},6174:function(t,e,n){"use strict";var r=n(5366),i=n(1545)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(s||!n(5139)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},160:function(t,e,n){var r=n(5366);r(r.S,"Array",{isArray:n(689)})},1308:function(t,e,n){"use strict";var r=n(2802),i=n(8611),o=n(4919),s=n(8500);t.exports=n(9121)(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},2523:function(t,e,n){"use strict";var r=n(5366),i=n(8500),o=[].join;r(r.P+r.F*(n(975)!=Object||!n(5139)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},6975:function(t,e,n){"use strict";var r=n(5366),i=n(8500),o=n(1549),s=n(1838),a=[].lastIndexOf,c=!!a&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!n(5139)(a)),"Array",{lastIndexOf:function(t){if(c)return a.apply(this,arguments)||0;var e=i(this),n=s(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},9139:function(t,e,n){"use strict";var r=n(5366),i=n(6934)(1);r(r.P+r.F*!n(5139)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},8221:function(t,e,n){"use strict";var r=n(5366),i=n(1676);r(r.S+r.F*n(1240)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);while(e>t)i(n,t,arguments[t++]);return n.length=e,n}})},8292:function(t,e,n){"use strict";var r=n(5366),i=n(9857);r(r.P+r.F*!n(5139)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},9483:function(t,e,n){"use strict";var r=n(5366),i=n(9857);r(r.P+r.F*!n(5139)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},5441:function(t,e,n){"use strict";var r=n(5366),i=n(6137),o=n(9426),s=n(5044),a=n(1838),c=[].slice;r(r.P+r.F*n(1240)((function(){i&&c.call(i)})),"Array",{slice:function(t,e){var n=a(this.length),r=o(this);if(e=void 0===e?n:e,"Array"==r)return c.call(this,t,e);for(var i=s(t,n),u=s(e,n),l=a(u-i),h=new Array(l),f=0;f<l;f++)h[f]="String"==r?this.charAt(i+f):this[i+f];return h}})},3289:function(t,e,n){"use strict";var r=n(5366),i=n(6934)(3);r(r.P+r.F*!n(5139)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},8375:function(t,e,n){"use strict";var r=n(5366),i=n(3079),o=n(4200),s=n(1240),a=[].sort,c=[1,2,3];r(r.P+r.F*(s((function(){c.sort(void 0)}))||!s((function(){c.sort(null)}))||!n(5139)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},8772:function(t,e,n){n(5993)("Array")},2338:function(t,e,n){var r=n(5366);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},1575:function(t,e,n){var r=n(5366),i=n(1792);r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},641:function(t,e,n){"use strict";var r=n(5366),i=n(4200),o=n(9241);r(r.P+r.F*n(1240)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=i(this),n=o(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},1033:function(t,e,n){var r=n(9739)("toPrimitive"),i=Date.prototype;r in i||n(8442)(i,r,n(7687))},5611:function(t,e,n){var r=Date.prototype,i="Invalid Date",o="toString",s=r[o],a=r.getTime;new Date(NaN)+""!=i&&n(1564)(r,o,(function(){var t=a.call(this);return t===t?s.call(this):i}))},8769:function(t,e,n){var r=n(5366);r(r.P,"Function",{bind:n(6966)})},9383:function(t,e,n){"use strict";var r=n(7481),i=n(4408),o=n(9739)("hasInstance"),s=Function.prototype;o in s||n(3530).f(s,o,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;while(t=i(t))if(this.prototype===t)return!0;return!1}})},729:function(t,e,n){var r=n(3530).f,i=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in i||n(1916)&&r(i,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},2509:function(t,e,n){"use strict";var r=n(5144),i=n(1603),o="Map";t.exports=n(8091)(o,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(i(this,o),t);return e&&e.v},set:function(t,e){return r.def(i(this,o),0===t?0:t,e)}},r,!0)},2372:function(t,e,n){var r=n(5366),i=n(9007),o=Math.sqrt,s=Math.acosh;r(r.S+r.F*!(s&&710==Math.floor(s(Number.MAX_VALUE))&&s(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},511:function(t,e,n){var r=n(5366),i=Math.asinh;function o(t){return isFinite(t=+t)&&0!=t?t<0?-o(-t):Math.log(t+Math.sqrt(t*t+1)):t}r(r.S+r.F*!(i&&1/i(0)>0),"Math",{asinh:o})},6781:function(t,e,n){var r=n(5366),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},4434:function(t,e,n){var r=n(5366),i=n(4247);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},4783:function(t,e,n){var r=n(5366);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},5521:function(t,e,n){var r=n(5366),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},4093:function(t,e,n){var r=n(5366),i=n(7117);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},6378:function(t,e,n){var r=n(5366);r(r.S,"Math",{fround:n(9396)})},2380:function(t,e,n){var r=n(5366),i=Math.abs;r(r.S,"Math",{hypot:function(t,e){var n,r,o=0,s=0,a=arguments.length,c=0;while(s<a)n=i(arguments[s++]),c<n?(r=c/n,o=o*r*r+1,c=n):n>0?(r=n/c,o+=r*r):o+=n;return c===1/0?1/0:c*Math.sqrt(o)}})},2803:function(t,e,n){var r=n(5366),i=Math.imul;r(r.S+r.F*n(1240)((function(){return-5!=i(4294967295,5)||2!=i.length})),"Math",{imul:function(t,e){var n=65535,r=+t,i=+e,o=n&r,s=n&i;return 0|o*s+((n&r>>>16)*s+o*(n&i>>>16)<<16>>>0)}})},3725:function(t,e,n){var r=n(5366);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},7977:function(t,e,n){var r=n(5366);r(r.S,"Math",{log1p:n(9007)})},4192:function(t,e,n){var r=n(5366);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},2940:function(t,e,n){var r=n(5366);r(r.S,"Math",{sign:n(4247)})},5731:function(t,e,n){var r=n(5366),i=n(7117),o=Math.exp;r(r.S+r.F*n(1240)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},9382:function(t,e,n){var r=n(5366),i=n(7117),o=Math.exp;r(r.S,"Math",{tanh:function(t){var e=i(t=+t),n=i(-t);return e==1/0?1:n==1/0?-1:(e-n)/(o(t)+o(-t))}})},8877:function(t,e,n){var r=n(5366);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},348:function(t,e,n){"use strict";var r=n(6341),i=n(1063),o=n(9426),s=n(4805),a=n(9241),c=n(1240),u=n(4230).f,l=n(7762).f,h=n(3530).f,f=n(7370).trim,d="Number",p=r[d],g=p,m=p.prototype,v=o(n(2545)(m))==d,y="trim"in String.prototype,_=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():f(e,3);var n,r,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var s,c=e.slice(2),u=0,l=c.length;u<l;u++)if(s=c.charCodeAt(u),s<48||s>i)return NaN;return parseInt(c,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(v?c((function(){m.valueOf.call(n)})):o(n)!=d)?s(new g(_(e)),n,p):_(e)};for(var b,w=n(1916)?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)i(g,b=w[E])&&!i(p,b)&&h(p,b,l(g,b));p.prototype=m,m.constructor=p,n(1564)(r,d,p)}},4007:function(t,e,n){var r=n(5366);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},7616:function(t,e,n){var r=n(5366),i=n(6341).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},6762:function(t,e,n){var r=n(5366);r(r.S,"Number",{isInteger:n(2289)})},3316:function(t,e,n){var r=n(5366);r(r.S,"Number",{isNaN:function(t){return t!=t}})},3019:function(t,e,n){var r=n(5366),i=n(2289),o=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},293:function(t,e,n){var r=n(5366);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},640:function(t,e,n){var r=n(5366);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},6589:function(t,e,n){var r=n(5366),i=n(3765);r(r.S+r.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},3210:function(t,e,n){var r=n(5366),i=n(500);r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},1028:function(t,e,n){"use strict";var r=n(5366),i=n(1549),o=n(3373),s=n(5),a=1..toFixed,c=Math.floor,u=[0,0,0,0,0,0],l="Number.toFixed: incorrect invocation!",h="0",f=function(t,e){var n=-1,r=e;while(++n<6)r+=t*u[n],u[n]=r%1e7,r=c(r/1e7)},d=function(t){var e=6,n=0;while(--e>=0)n+=u[e],u[e]=c(n/t),n=n%t*1e7},p=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==u[t]){var n=String(u[t]);e=""===e?n:e+s.call(h,7-n.length)+n}return e},g=function(t,e,n){return 0===e?n:e%2===1?g(t,e-1,n*t):g(t*t,e/2,n)},m=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e};r(r.P+r.F*(!!a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(1240)((function(){a.call({})}))),"Number",{toFixed:function(t){var e,n,r,a,c=o(this,l),u=i(t),v="",y=h;if(u<0||u>20)throw RangeError(l);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=m(c*g(2,69,1))-69,n=e<0?c*g(2,-e,1):c/g(2,e,1),n*=4503599627370496,e=52-e,e>0){f(0,n),r=u;while(r>=7)f(1e7,0),r-=7;f(g(10,r,1),0),r=e-1;while(r>=23)d(1<<23),r-=23;d(1<<r),f(1,1),d(2),y=p()}else f(0,n),f(1<<-e,0),y=p()+s.call(h,u);return u>0?(a=y.length,y=v+(a<=u?"0."+s.call(h,u-a)+y:y.slice(0,a-u)+"."+y.slice(a-u))):y=v+y,y}})},2610:function(t,e,n){"use strict";var r=n(5366),i=n(1240),o=n(3373),s=1..toPrecision;r(r.P+r.F*(i((function(){return"1"!==s.call(1,void 0)}))||!i((function(){s.call({})}))),"Number",{toPrecision:function(t){var e=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?s.call(e):s.call(e,t)}})},8325:function(t,e,n){var r=n(5366);r(r.S+r.F,"Object",{assign:n(9821)})},7944:function(t,e,n){var r=n(5366);r(r.S,"Object",{create:n(2545)})},266:function(t,e,n){var r=n(5366);r(r.S+r.F*!n(1916),"Object",{defineProperties:n(413)})},5388:function(t,e,n){var r=n(5366);r(r.S+r.F*!n(1916),"Object",{defineProperty:n(3530).f})},192:function(t,e,n){var r=n(7481),i=n(2153).onFreeze;n(1025)("freeze",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},7557:function(t,e,n){var r=n(8500),i=n(7762).f;n(1025)("getOwnPropertyDescriptor",(function(){return function(t,e){return i(r(t),e)}}))},4943:function(t,e,n){n(1025)("getOwnPropertyNames",(function(){return n(5009).f}))},3386:function(t,e,n){var r=n(4200),i=n(4408);n(1025)("getPrototypeOf",(function(){return function(t){return i(r(t))}}))},4649:function(t,e,n){var r=n(7481);n(1025)("isExtensible",(function(t){return function(e){return!!r(e)&&(!t||t(e))}}))},6736:function(t,e,n){var r=n(7481);n(1025)("isFrozen",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},7260:function(t,e,n){var r=n(7481);n(1025)("isSealed",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},2798:function(t,e,n){var r=n(5366);r(r.S,"Object",{is:n(1541)})},81:function(t,e,n){var r=n(4200),i=n(5825);n(1025)("keys",(function(){return function(t){return i(r(t))}}))},7026:function(t,e,n){var r=n(7481),i=n(2153).onFreeze;n(1025)("preventExtensions",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},4371:function(t,e,n){var r=n(7481),i=n(2153).onFreeze;n(1025)("seal",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},6911:function(t,e,n){var r=n(5366);r(r.S,"Object",{setPrototypeOf:n(7135).set})},4394:function(t,e,n){"use strict";var r=n(2845),i={};i[n(9739)("toStringTag")]="z",i+""!="[object z]"&&n(1564)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},5072:function(t,e,n){var r=n(5366),i=n(3765);r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},9315:function(t,e,n){var r=n(5366),i=n(500);r(r.G+r.F*(parseInt!=i),{parseInt:i})},2813:function(t,e,n){"use strict";var r,i,o,s,a=n(5113),c=n(6341),u=n(2794),l=n(2845),h=n(5366),f=n(7481),d=n(3079),p=n(599),g=n(2971),m=n(9789),v=n(7122).set,y=n(37)(),_=n(3285),b=n(8332),w=n(3843),E=n(8614),S="Promise",T=c.TypeError,I=c.process,C=I&&I.versions,O=C&&C.v8||"",A=c[S],k="process"==l(I),x=function(){},R=i=_.f,P=!!function(){try{var t=A.resolve(1),e=(t.constructor={})[n(9739)("species")]=function(t){t(x,x)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(x)instanceof e&&0!==O.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(r){}}(),N=function(t){var e;return!(!f(t)||"function"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var n=t._c;y((function(){var r=t._v,i=1==t._s,o=0,s=function(e){var n,o,s,a=i?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(i||(2==t._h&&j(t),t._h=1),!0===a?n=r:(l&&l.enter(),n=a(r),l&&(l.exit(),s=!0)),n===e.promise?u(T("Promise-chain cycle")):(o=N(n))?o.call(n,c,u):c(n)):u(r)}catch(h){l&&!s&&l.exit(),u(h)}};while(n.length>o)s(n[o++]);t._c=[],t._n=!1,e&&!t._h&&L(t)}))}},L=function(t){v.call(c,(function(){var e,n,r,i=t._v,o=M(t);if(o&&(e=b((function(){k?I.emit("unhandledRejection",i,t):(n=c.onunhandledrejection)?n({promise:t,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)})),t._h=k||M(t)?2:1),t._a=void 0,o&&e.e)throw e.v}))},M=function(t){return 1!==t._h&&0===(t._a||t._c).length},j=function(t){v.call(c,(function(){var e;k?I.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0))},U=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw T("Promise can't be resolved itself");(e=N(t))?y((function(){var r={_w:n,_d:!1};try{e.call(t,u(U,r,1),u(F,r,1))}catch(i){F.call(r,i)}})):(n._v=t,n._s=1,D(n,!1))}catch(r){F.call({_w:n,_d:!1},r)}}};P||(A=function(t){p(this,A,S,"_h"),d(t),r.call(this);try{t(u(U,this,1),u(F,this,1))}catch(e){F.call(this,e)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(4092)(A.prototype,{then:function(t,e){var n=R(m(this,A));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=k?I.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=u(U,t,1),this.reject=u(F,t,1)},_.f=R=function(t){return t===A||t===s?new o(t):i(t)}),h(h.G+h.W+h.F*!P,{Promise:A}),n(1309)(A,S),n(5993)(S),s=n(4411)[S],h(h.S+h.F*!P,S,{reject:function(t){var e=R(this),n=e.reject;return n(t),e.promise}}),h(h.S+h.F*(a||!P),S,{resolve:function(t){return E(a&&this===s?A:this,t)}}),h(h.S+h.F*!(P&&n(1461)((function(t){A.all(t)["catch"](x)}))),S,{all:function(t){var e=this,n=R(e),r=n.resolve,i=n.reject,o=b((function(){var n=[],o=0,s=1;g(t,!1,(function(t){var a=o++,c=!1;n.push(void 0),s++,e.resolve(t).then((function(t){c||(c=!0,n[a]=t,--s||r(n))}),i)})),--s||r(n)}));return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=R(e),r=n.reject,i=b((function(){g(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return i.e&&r(i.v),n.promise}})},9310:function(t,e,n){var r=n(5366),i=n(3079),o=n(9719),s=(n(6341).Reflect||{}).apply,a=Function.apply;r(r.S+r.F*!n(1240)((function(){s((function(){}))})),"Reflect",{apply:function(t,e,n){var r=i(t),c=o(n);return s?s(r,e,c):a.call(r,e,c)}})},6722:function(t,e,n){var r=n(5366),i=n(2545),o=n(3079),s=n(9719),a=n(7481),c=n(1240),u=n(6966),l=(n(6341).Reflect||{}).construct,h=c((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),f=!c((function(){l((function(){}))}));r(r.S+r.F*(h||f),"Reflect",{construct:function(t,e){o(t),s(e);var n=arguments.length<3?t:o(arguments[2]);if(f&&!h)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(u.apply(t,r))}var c=n.prototype,d=i(a(c)?c:Object.prototype),p=Function.apply.call(t,d,e);return a(p)?p:d}})},8372:function(t,e,n){var r=n(3530),i=n(5366),o=n(9719),s=n(9241);i(i.S+i.F*n(1240)((function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,n){o(t),e=s(e,!0),o(n);try{return r.f(t,e,n),!0}catch(i){return!1}}})},4604:function(t,e,n){var r=n(5366),i=n(7762).f,o=n(9719);r(r.S,"Reflect",{deleteProperty:function(t,e){var n=i(o(t),e);return!(n&&!n.configurable)&&delete t[e]}})},4781:function(t,e,n){"use strict";var r=n(5366),i=n(9719),o=function(t){this._t=i(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(7938)(o,"Object",(function(){var t,e=this,n=e._k;do{if(e._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[e._i++])in e._t));return{value:t,done:!1}})),r(r.S,"Reflect",{enumerate:function(t){return new o(t)}})},4395:function(t,e,n){var r=n(7762),i=n(5366),o=n(9719);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.f(o(t),e)}})},9649:function(t,e,n){var r=n(5366),i=n(4408),o=n(9719);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},8416:function(t,e,n){var r=n(7762),i=n(4408),o=n(1063),s=n(5366),a=n(7481),c=n(9719);function u(t,e){var n,s,l=arguments.length<3?t:arguments[2];return c(t)===l?t[e]:(n=r.f(t,e))?o(n,"value")?n.value:void 0!==n.get?n.get.call(l):void 0:a(s=i(t))?u(s,e,l):void 0}s(s.S,"Reflect",{get:u})},2475:function(t,e,n){var r=n(5366);r(r.S,"Reflect",{has:function(t,e){return e in t}})},2924:function(t,e,n){var r=n(5366),i=n(9719),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},6337:function(t,e,n){var r=n(5366);r(r.S,"Reflect",{ownKeys:n(7285)})},3286:function(t,e,n){var r=n(5366),i=n(9719),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(e){return!1}}})},8766:function(t,e,n){var r=n(5366),i=n(7135);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){i.check(t,e);try{return i.set(t,e),!0}catch(n){return!1}}})},7225:function(t,e,n){var r=n(3530),i=n(7762),o=n(4408),s=n(1063),a=n(5366),c=n(1761),u=n(9719),l=n(7481);function h(t,e,n){var a,f,d=arguments.length<4?t:arguments[3],p=i.f(u(t),e);if(!p){if(l(f=o(t)))return h(f,e,n,d);p=c(0)}if(s(p,"value")){if(!1===p.writable||!l(d))return!1;if(a=i.f(d,e)){if(a.get||a.set||!1===a.writable)return!1;a.value=n,r.f(d,e,a)}else r.f(d,e,c(0,n));return!0}return void 0!==p.set&&(p.set.call(d,n),!0)}a(a.S,"Reflect",{set:h})},7080:function(t,e,n){var r=n(6341),i=n(4805),o=n(3530).f,s=n(4230).f,a=n(9543),c=n(6439),u=r.RegExp,l=u,h=u.prototype,f=/a/g,d=/a/g,p=new u(f)!==f;if(n(1916)&&(!p||n(1240)((function(){return d[n(9739)("match")]=!1,u(f)!=f||u(d)==d||"/a/i"!=u(f,"i")})))){u=function(t,e){var n=this instanceof u,r=a(t),o=void 0===e;return!n&&r&&t.constructor===u&&o?t:i(p?new l(r&&!o?t.source:t,e):l((r=t instanceof u)?t.source:t,r&&o?c.call(t):e),n?this:h,u)};for(var g=function(t){t in u||o(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},m=s(l),v=0;m.length>v;)g(m[v++]);h.constructor=u,u.prototype=h,n(1564)(r,"RegExp",u)}n(5993)("RegExp")},8615:function(t,e,n){"use strict";var r=n(8868);n(5366)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},9544:function(t,e,n){n(1916)&&"g"!=/./g.flags&&n(3530).f(RegExp.prototype,"flags",{configurable:!0,get:n(6439)})},5475:function(t,e,n){"use strict";var r=n(9719),i=n(1838),o=n(9959),s=n(9073);n(5307)("match",1,(function(t,e,n,a){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=a(n,t,this);if(e.done)return e.value;var c=r(t),u=String(this);if(!c.global)return s(c,u);var l=c.unicode;c.lastIndex=0;var h,f=[],d=0;while(null!==(h=s(c,u))){var p=String(h[0]);f[d]=p,""===p&&(c.lastIndex=o(u,i(c.lastIndex),l)),d++}return 0===d?null:f}]}))},3770:function(t,e,n){"use strict";var r=n(9719),i=n(4200),o=n(1838),s=n(1549),a=n(9959),c=n(9073),u=Math.max,l=Math.min,h=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n(5307)("replace",2,(function(t,e,n,g){return[function(r,i){var o=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=g(n,t,this,e);if(i.done)return i.value;var h=r(t),f=String(this),d="function"===typeof e;d||(e=String(e));var v=h.global;if(v){var y=h.unicode;h.lastIndex=0}var _=[];while(1){var b=c(h,f);if(null===b)break;if(_.push(b),!v)break;var w=String(b[0]);""===w&&(h.lastIndex=a(f,o(h.lastIndex),y))}for(var E="",S=0,T=0;T<_.length;T++){b=_[T];for(var I=String(b[0]),C=u(l(s(b.index),f.length),0),O=[],A=1;A<b.length;A++)O.push(p(b[A]));var k=b.groups;if(d){var x=[I].concat(O,C,f);void 0!==k&&x.push(k);var R=String(e.apply(void 0,x))}else R=m(I,f,C,O,k,e);C>=S&&(E+=f.slice(S,C)+R,S=C+I.length)}return E+f.slice(S)}];function m(t,e,r,o,s,a){var c=r+t.length,u=o.length,l=d;return void 0!==s&&(s=i(s),l=f),n.call(a,l,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":a=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>u){var f=h(l/10);return 0===f?n:f<=u?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):n}a=o[l-1]}return void 0===a?"":a}))}}))},5201:function(t,e,n){"use strict";var r=n(9719),i=n(1541),o=n(9073);n(5307)("search",1,(function(t,e,n,s){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=s(n,t,this);if(e.done)return e.value;var a=r(t),c=String(this),u=a.lastIndex;i(u,0)||(a.lastIndex=0);var l=o(a,c);return i(a.lastIndex,u)||(a.lastIndex=u),null===l?-1:l.index}]}))},1385:function(t,e,n){"use strict";var r=n(9543),i=n(9719),o=n(9789),s=n(9959),a=n(1838),c=n(9073),u=n(8868),l=n(1240),h=Math.min,f=[].push,d="split",p="length",g="lastIndex",m=4294967295,v=!l((function(){RegExp(m,"y")}));n(5307)("split",2,(function(t,e,n,l){var y;return y="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[p]||2!="ab"[d](/(?:ab)*/)[p]||4!="."[d](/(.?)(.?)/)[p]||"."[d](/()()/)[p]>1||""[d](/.?/)[p]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var o,s,a,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?m:e>>>0,v=new RegExp(t.source,l+"g");while(o=u.call(v,i)){if(s=v[g],s>h&&(c.push(i.slice(h,o.index)),o[p]>1&&o.index<i[p]&&f.apply(c,o.slice(1)),a=o[0][p],h=s,c[p]>=d))break;v[g]===o.index&&v[g]++}return h===i[p]?!a&&v.test("")||c.push(""):c.push(i.slice(h)),c[p]>d?c.slice(0,d):c}:"0"[d](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,r):y.call(String(i),n,r)},function(t,e){var r=l(y,t,this,e,y!==n);if(r.done)return r.value;var u=i(t),f=String(this),d=o(u,RegExp),p=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),_=new d(v?u:"^(?:"+u.source+")",g),b=void 0===e?m:e>>>0;if(0===b)return[];if(0===f.length)return null===c(_,f)?[f]:[];var w=0,E=0,S=[];while(E<f.length){_.lastIndex=v?E:0;var T,I=c(_,v?f:f.slice(E));if(null===I||(T=h(a(_.lastIndex+(v?0:E)),f.length))===w)E=s(f,E,p);else{if(S.push(f.slice(w,E)),S.length===b)return S;for(var C=1;C<=I.length-1;C++)if(S.push(I[C]),S.length===b)return S;E=w=T}}return S.push(f.slice(w)),S}]}))},5244:function(t,e,n){"use strict";n(9544);var r=n(9719),i=n(6439),o=n(1916),s="toString",a=/./[s],c=function(t){n(1564)(RegExp.prototype,s,t,!0)};n(1240)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?c((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):a.name!=s&&c((function(){return a.call(this)}))},8253:function(t,e,n){"use strict";var r=n(5144),i=n(1603),o="Set";t.exports=n(8091)(o,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,o),t=0===t?0:t,t)}},r)},447:function(t,e,n){"use strict";n(9048)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},5624:function(t,e,n){"use strict";n(9048)("big",(function(t){return function(){return t(this,"big","","")}}))},1263:function(t,e,n){"use strict";n(9048)("blink",(function(t){return function(){return t(this,"blink","","")}}))},5193:function(t,e,n){"use strict";n(9048)("bold",(function(t){return function(){return t(this,"b","","")}}))},2858:function(t,e,n){"use strict";var r=n(5366),i=n(7384)(!1);r(r.P,"String",{codePointAt:function(t){return i(this,t)}})},2058:function(t,e,n){"use strict";var r=n(5366),i=n(1838),o=n(3256),s="endsWith",a=""[s];r(r.P+r.F*n(6881)(s),"String",{endsWith:function(t){var e=o(this,t,s),n=arguments.length>1?arguments[1]:void 0,r=i(e.length),c=void 0===n?r:Math.min(i(n),r),u=String(t);return a?a.call(e,u,c):e.slice(c-u.length,c)===u}})},8241:function(t,e,n){"use strict";n(9048)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},6723:function(t,e,n){"use strict";n(9048)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},9394:function(t,e,n){"use strict";n(9048)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},2539:function(t,e,n){var r=n(5366),i=n(5044),o=String.fromCharCode,s=String.fromCodePoint;r(r.S+r.F*(!!s&&1!=s.length),"String",{fromCodePoint:function(t){var e,n=[],r=arguments.length,s=0;while(r>s){if(e=+arguments[s++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?o(e):o(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},5472:function(t,e,n){"use strict";var r=n(5366),i=n(3256),o="includes";r(r.P+r.F*n(6881)(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},6938:function(t,e,n){"use strict";n(9048)("italics",(function(t){return function(){return t(this,"i","","")}}))},4333:function(t,e,n){"use strict";var r=n(7384)(!0);n(9121)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},1961:function(t,e,n){"use strict";n(9048)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},9820:function(t,e,n){var r=n(5366),i=n(8500),o=n(1838);r(r.S,"String",{raw:function(t){var e=i(t.raw),n=o(e.length),r=arguments.length,s=[],a=0;while(n>a)s.push(String(e[a++])),a<r&&s.push(String(arguments[a]));return s.join("")}})},7001:function(t,e,n){var r=n(5366);r(r.P,"String",{repeat:n(5)})},9659:function(t,e,n){"use strict";n(9048)("small",(function(t){return function(){return t(this,"small","","")}}))},7492:function(t,e,n){"use strict";var r=n(5366),i=n(1838),o=n(3256),s="startsWith",a=""[s];r(r.P+r.F*n(6881)(s),"String",{startsWith:function(t){var e=o(this,t,s),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},3354:function(t,e,n){"use strict";n(9048)("strike",(function(t){return function(){return t(this,"strike","","")}}))},9620:function(t,e,n){"use strict";n(9048)("sub",(function(t){return function(){return t(this,"sub","","")}}))},638:function(t,e,n){"use strict";n(9048)("sup",(function(t){return function(){return t(this,"sup","","")}}))},8417:function(t,e,n){"use strict";n(7370)("trim",(function(t){return function(){return t(this,3)}}))},8997:function(t,e,n){"use strict";var r=n(6341),i=n(1063),o=n(1916),s=n(5366),a=n(1564),c=n(2153).KEY,u=n(1240),l=n(7355),h=n(1309),f=n(430),d=n(9739),p=n(8833),g=n(8155),m=n(4535),v=n(689),y=n(9719),_=n(7481),b=n(4200),w=n(8500),E=n(9241),S=n(1761),T=n(2545),I=n(5009),C=n(7762),O=n(2520),A=n(3530),k=n(5825),x=C.f,R=A.f,P=I.f,N=r.Symbol,D=r.JSON,L=D&&D.stringify,M="prototype",j=d("_hidden"),F=d("toPrimitive"),U={}.propertyIsEnumerable,$=l("symbol-registry"),V=l("symbols"),B=l("op-symbols"),z=Object[M],q="function"==typeof N&&!!O.f,H=r.QObject,W=!H||!H[M]||!H[M].findChild,G=o&&u((function(){return 7!=T(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=x(z,e);r&&delete z[e],R(t,e,n),r&&t!==z&&R(z,e,r)}:R,K=function(t){var e=V[t]=T(N[M]);return e._k=t,e},Q=q&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},X=function(t,e,n){return t===z&&X(B,e,n),y(t),e=E(e,!0),y(n),i(V,e)?(n.enumerable?(i(t,j)&&t[j][e]&&(t[j][e]=!1),n=T(n,{enumerable:S(0,!1)})):(i(t,j)||R(t,j,S(1,{})),t[j][e]=!0),G(t,e,n)):R(t,e,n)},J=function(t,e){y(t);var n,r=m(e=w(e)),i=0,o=r.length;while(o>i)X(t,n=r[i++],e[n]);return t},Y=function(t,e){return void 0===e?T(t):J(T(t),e)},Z=function(t){var e=U.call(this,t=E(t,!0));return!(this===z&&i(V,t)&&!i(B,t))&&(!(e||!i(this,t)||!i(V,t)||i(this,j)&&this[j][t])||e)},tt=function(t,e){if(t=w(t),e=E(e,!0),t!==z||!i(V,e)||i(B,e)){var n=x(t,e);return!n||!i(V,e)||i(t,j)&&t[j][e]||(n.enumerable=!0),n}},et=function(t){var e,n=P(w(t)),r=[],o=0;while(n.length>o)i(V,e=n[o++])||e==j||e==c||r.push(e);return r},nt=function(t){var e,n=t===z,r=P(n?B:w(t)),o=[],s=0;while(r.length>s)!i(V,e=r[s++])||n&&!i(z,e)||o.push(V[e]);return o};q||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(B,n),i(this,j)&&i(this[j],t)&&(this[j][t]=!1),G(this,t,S(1,n))};return o&&W&&G(z,t,{configurable:!0,set:e}),K(t)},a(N[M],"toString",(function(){return this._k})),C.f=tt,A.f=X,n(4230).f=I.f=et,n(1144).f=Z,O.f=nt,o&&!n(5113)&&a(z,"propertyIsEnumerable",Z,!0),p.f=function(t){return K(d(t))}),s(s.G+s.W+s.F*!q,{Symbol:N});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;rt.length>it;)d(rt[it++]);for(var ot=k(d.store),st=0;ot.length>st;)g(ot[st++]);s(s.S+s.F*!q,"Symbol",{for:function(t){return i($,t+="")?$[t]:$[t]=N(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in $)if($[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),s(s.S+s.F*!q,"Object",{create:Y,defineProperty:X,defineProperties:J,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var at=u((function(){O.f(1)}));s(s.S+s.F*at,"Object",{getOwnPropertySymbols:function(t){return O.f(b(t))}}),D&&s(s.S+s.F*(!q||u((function(){var t=N();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}))),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(_(e)||void 0!==t)&&!Q(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Q(e))return e}),r[1]=e,L.apply(D,r)}}),N[M][F]||n(8442)(N[M],F,N[M].valueOf),h(N,"Symbol"),h(Math,"Math",!0),h(r.JSON,"JSON",!0)},3315:function(t,e,n){"use strict";var r=n(5366),i=n(7728),o=n(9895),s=n(9719),a=n(5044),c=n(1838),u=n(7481),l=n(6341).ArrayBuffer,h=n(9789),f=o.ArrayBuffer,d=o.DataView,p=i.ABV&&l.isView,g=f.prototype.slice,m=i.VIEW,v="ArrayBuffer";r(r.G+r.W+r.F*(l!==f),{ArrayBuffer:f}),r(r.S+r.F*!i.CONSTR,v,{isView:function(t){return p&&p(t)||u(t)&&m in t}}),r(r.P+r.U+r.F*n(1240)((function(){return!new f(2).slice(1,void 0).byteLength})),v,{slice:function(t,e){if(void 0!==g&&void 0===e)return g.call(s(this),t);var n=s(this).byteLength,r=a(t,n),i=a(void 0===e?n:e,n),o=new(h(this,f))(c(i-r)),u=new d(this),l=new d(o),p=0;while(r<i)l.setUint8(p++,u.getUint8(r++));return o}}),n(5993)(v)},2920:function(t,e,n){var r=n(5366);r(r.G+r.W+r.F*!n(7728).ABV,{DataView:n(9895).DataView})},951:function(t,e,n){n(8754)("Float32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},29:function(t,e,n){n(8754)("Float64",8,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},6935:function(t,e,n){n(8754)("Int16",2,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},6403:function(t,e,n){n(8754)("Int32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},5443:function(t,e,n){n(8754)("Int8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},7846:function(t,e,n){n(8754)("Uint16",2,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},1200:function(t,e,n){n(8754)("Uint32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},9815:function(t,e,n){n(8754)("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},3771:function(t,e,n){n(8754)("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}),!0)},7391:function(t,e,n){"use strict";var r,i=n(6341),o=n(6934)(0),s=n(1564),a=n(2153),c=n(9821),u=n(3503),l=n(7481),h=n(1603),f=n(1603),d=!i.ActiveXObject&&"ActiveXObject"in i,p="WeakMap",g=a.getWeak,m=Object.isExtensible,v=u.ufstore,y=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},_={get:function(t){if(l(t)){var e=g(t);return!0===e?v(h(this,p)).get(t):e?e[this._i]:void 0}},set:function(t,e){return u.def(h(this,p),t,e)}},b=t.exports=n(8091)(p,y,_,u,!0,!0);f&&d&&(r=u.getConstructor(y,p),c(r.prototype,_),a.NEED=!0,o(["delete","has","get","set"],(function(t){var e=b.prototype,n=e[t];s(e,t,(function(e,i){if(l(e)&&!m(e)){this._f||(this._f=new r);var o=this._f[t](e,i);return"set"==t?this:o}return n.call(this,e,i)}))})))},3307:function(t,e,n){"use strict";var r=n(3503),i=n(1603),o="WeakSet";n(8091)(o,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,o),t,!0)}},r,!1,!0)},8125:function(t,e,n){"use strict";var r=n(5366),i=n(3885),o=n(4200),s=n(1838),a=n(3079),c=n(4087);r(r.P,"Array",{flatMap:function(t){var e,n,r=o(this);return a(t),e=s(r.length),n=c(r,0),i(n,r,r,e,0,1,t,arguments[1]),n}}),n(2802)("flatMap")},9348:function(t,e,n){"use strict";var r=n(5366),i=n(1545)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(2802)("includes")},1768:function(t,e,n){var r=n(5366),i=n(5346)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},9223:function(t,e,n){var r=n(5366),i=n(7285),o=n(8500),s=n(7762),a=n(1676);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),c=s.f,u=i(r),l={},h=0;while(u.length>h)n=c(r,e=u[h++]),void 0!==n&&a(l,e,n);return l}})},7442:function(t,e,n){var r=n(5366),i=n(5346)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},4936:function(t,e,n){"use strict";var r=n(5366),i=n(4411),o=n(6341),s=n(9789),a=n(8614);r(r.P+r.R,"Promise",{finally:function(t){var e=s(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then((function(){return n}))}:t,n?function(n){return a(e,t()).then((function(){throw n}))}:t)}})},239:function(t,e,n){"use strict";var r=n(5366),i=n(9823),o=n(3843),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*s,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},8755:function(t,e,n){"use strict";var r=n(5366),i=n(9823),o=n(3843),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*s,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},3412:function(t,e,n){"use strict";n(7370)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},6948:function(t,e,n){"use strict";n(7370)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},8284:function(t,e,n){n(8155)("asyncIterator")},8745:function(t,e,n){for(var r=n(1308),i=n(5825),o=n(1564),s=n(6341),a=n(8442),c=n(4919),u=n(9739),l=u("iterator"),h=u("toStringTag"),f=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(d),g=0;g<p.length;g++){var m,v=p[g],y=d[v],_=s[v],b=_&&_.prototype;if(b&&(b[l]||a(b,l,f),b[h]||a(b,h,v),c[v]=f,y))for(m in r)b[m]||o(b,m,r[m],!0)}},25:function(t,e,n){var r=n(5366),i=n(7122);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},1629:function(t,e,n){var r=n(6341),i=n(5366),o=n(3843),s=[].slice,a=/MSIE .\./.test(o),c=function(t){return function(e,n){var r=arguments.length>2,i=!!r&&s.call(arguments,2);return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};i(i.G+i.B+i.F*a,{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},1523:function(t,e,n){n(1629),n(25),n(8745),t.exports=n(4411)},5752:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9730),i=n(655),o=n(7019),s=n(1313),a=n(6531),c=function(){function t(t){this.container=t}return t.prototype.getPlatformInfoString=function(){var t=this.container.getProviders();return t.map((function(t){if(u(t)){var e=t.getImmediate();return"".concat(e.library,"/").concat(e.version)}return null})).filter((function(t){return t})).join(" ")},t}();function u(t){var e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}var l,h,f="@firebase/app",d="0.9.10",p=new o.Logger("@firebase/app"),g="@firebase/app-compat",m="@firebase/analytics-compat",v="@firebase/analytics",y="@firebase/app-check-compat",_="@firebase/app-check",b="@firebase/auth",w="@firebase/auth-compat",E="@firebase/database",S="@firebase/database-compat",T="@firebase/functions",I="@firebase/functions-compat",C="@firebase/installations",O="@firebase/installations-compat",A="@firebase/messaging",k="@firebase/messaging-compat",x="@firebase/performance",R="@firebase/performance-compat",P="@firebase/remote-config",N="@firebase/remote-config-compat",D="@firebase/storage",L="@firebase/storage-compat",M="@firebase/firestore",j="@firebase/firestore-compat",F="firebase",U="9.22.0",$="[DEFAULT]",V=(l={},l[f]="fire-core",l[g]="fire-core-compat",l[v]="fire-analytics",l[m]="fire-analytics-compat",l[_]="fire-app-check",l[y]="fire-app-check-compat",l[b]="fire-auth",l[w]="fire-auth-compat",l[E]="fire-rtdb",l[S]="fire-rtdb-compat",l[T]="fire-fn",l[I]="fire-fn-compat",l[C]="fire-iid",l[O]="fire-iid-compat",l[A]="fire-fcm",l[k]="fire-fcm-compat",l[x]="fire-perf",l[R]="fire-perf-compat",l[P]="fire-rc",l[N]="fire-rc-compat",l[D]="fire-gcs",l[L]="fire-gcs-compat",l[M]="fire-fst",l[j]="fire-fst-compat",l["fire-js"]="fire-js",l[F]="fire-js-all",l),B=new Map,z=new Map;function q(t,e){try{t.container.addComponent(e)}catch(n){p.debug("Component ".concat(e.name," failed to register with FirebaseApp ").concat(t.name),n)}}function H(t,e){t.container.addOrOverwriteComponent(e)}function W(t){var e,n,r=t.name;if(z.has(r))return p.debug("There were multiple attempts to register component ".concat(r,".")),!1;z.set(r,t);try{for(var o=i.__values(B.values()),s=o.next();!s.done;s=o.next()){var a=s.value;q(a,t)}}catch(c){e={error:c}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return!0}function G(t,e){var n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function K(t,e,n){void 0===n&&(n=$),G(t,e).clearInstance(n)}function Q(){z.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X=(h={},h["no-app"]="No Firebase App '{$appName}' has been created - call initializeApp() first",h["bad-app-name"]="Illegal App name: '{$appName}",h["duplicate-app"]="Firebase App named '{$appName}' already exists with different options or config",h["app-deleted"]="Firebase App named '{$appName}' already deleted",h["no-options"]="Need to provide options, when not being deployed to hosting via source.",h["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",h["invalid-log-argument"]="First argument to `onLog` must be null or a function.",h["idb-open"]="Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",h["idb-get"]="Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",h["idb-set"]="Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",h["idb-delete"]="Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",h),J=new s.ErrorFactory("app","Firebase",X),Y=function(){function t(t,e,n){var o=this;this._isDeleted=!1,this._options=i.__assign({},t),this._config=i.__assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.Component("app",(function(){return o}),"PUBLIC"))}return Object.defineProperty(t.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this.checkDestroyed(),this._name},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this.checkDestroyed(),this._options},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"config",{get:function(){return this.checkDestroyed(),this._config},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"container",{get:function(){return this._container},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isDeleted",{get:function(){return this._isDeleted},set:function(t){this._isDeleted=t},enumerable:!1,configurable:!0}),t.prototype.checkDestroyed=function(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})},t}(),Z=U;function tt(t,e){var n,o;void 0===e&&(e={});var a=t;if("object"!==typeof e){var c=e;e={name:c}}var u=i.__assign({name:$,automaticDataCollectionEnabled:!1},e),l=u.name;if("string"!==typeof l||!l)throw J.create("bad-app-name",{appName:String(l)});if(a||(a=s.getDefaultAppConfig()),!a)throw J.create("no-options");var h=B.get(l);if(h){if(s.deepEqual(a,h.options)&&s.deepEqual(u,h.config))return h;throw J.create("duplicate-app",{appName:l})}var f=new r.ComponentContainer(l);try{for(var d=i.__values(z.values()),p=d.next();!p.done;p=d.next()){var g=p.value;f.addComponent(g)}}catch(v){n={error:v}}finally{try{p&&!p.done&&(o=d.return)&&o.call(d)}finally{if(n)throw n.error}}var m=new Y(a,u,f);return B.set(l,m),m}function et(t){void 0===t&&(t=$);var e=B.get(t);if(!e&&t===$&&s.getDefaultAppConfig())return tt();if(!e)throw J.create("no-app",{appName:t});return e}function nt(){return Array.from(B.values())}function rt(t){return i.__awaiter(this,void 0,void 0,(function(){var e;return i.__generator(this,(function(n){switch(n.label){case 0:return e=t.name,B.has(e)?(B.delete(e),[4,Promise.all(t.container.getProviders().map((function(t){return t.delete()})))]):[3,2];case 1:n.sent(),t.isDeleted=!0,n.label=2;case 2:return[2]}}))}))}function it(t,e,n){var i,o=null!==(i=V[t])&&void 0!==i?i:t;n&&(o+="-".concat(n));var s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){var c=['Unable to register library "'.concat(o,'" with version "').concat(e,'":')];return s&&c.push('library name "'.concat(o,'" contains illegal characters (whitespace or "/")')),s&&a&&c.push("and"),a&&c.push('version name "'.concat(e,'" contains illegal characters (whitespace or "/")')),void p.warn(c.join(" "))}W(new r.Component("".concat(o,"-version"),(function(){return{library:o,version:e}}),"VERSION"))}function ot(t,e){if(null!==t&&"function"!==typeof t)throw J.create("invalid-log-argument");o.setUserLogHandler(t,e)}function st(t){o.setLogLevel(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at="firebase-heartbeat-database",ct=1,ut="firebase-heartbeat-store",lt=null;function ht(){return lt||(lt=a.openDB(at,ct,{upgrade:function(t,e){switch(e){case 0:t.createObjectStore(ut)}}}).catch((function(t){throw J.create("idb-open",{originalErrorMessage:t.message})}))),lt}function ft(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n,r,o;return i.__generator(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,ht()];case 1:return e=i.sent(),[4,e.transaction(ut).objectStore(ut).get(pt(t))];case 2:return n=i.sent(),[2,n];case 3:return r=i.sent(),r instanceof s.FirebaseError?p.warn(r.message):(o=J.create("idb-get",{originalErrorMessage:null===r||void 0===r?void 0:r.message}),p.warn(o.message)),[3,4];case 4:return[2]}}))}))}function dt(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,a,c;return i.__generator(this,(function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),[4,ht()];case 1:return n=i.sent(),r=n.transaction(ut,"readwrite"),o=r.objectStore(ut),[4,o.put(e,pt(t))];case 2:return i.sent(),[4,r.done];case 3:return i.sent(),[3,5];case 4:return a=i.sent(),a instanceof s.FirebaseError?p.warn(a.message):(c=J.create("idb-set",{originalErrorMessage:null===a||void 0===a?void 0:a.message}),p.warn(c.message)),[3,5];case 5:return[2]}}))}))}function pt(t){return"".concat(t.name,"!").concat(t.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt=1024,mt=2592e6,vt=function(){function t(t){var e=this;this.container=t,this._heartbeatsCache=null;var n=this.container.getProvider("app").getImmediate();this._storage=new bt(n),this._heartbeatsCachePromise=this._storage.read().then((function(t){return e._heartbeatsCache=t,t}))}return t.prototype.triggerHeartbeat=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e,n,r;return i.__generator(this,(function(i){switch(i.label){case 0:return t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=yt(),null!==this._heartbeatsCache?[3,2]:(r=this,[4,this._heartbeatsCachePromise]);case 1:r._heartbeatsCache=i.sent(),i.label=2;case 2:return this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some((function(t){return t.date===n}))?[2]:(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((function(t){var e=new Date(t.date).valueOf(),n=Date.now();return n-e<=mt})),[2,this._storage.overwrite(this._heartbeatsCache)])}}))}))},t.prototype.getHeartbeatsHeader=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e,n,r,o;return i.__generator(this,(function(i){switch(i.label){case 0:return null!==this._heartbeatsCache?[3,2]:[4,this._heartbeatsCachePromise];case 1:i.sent(),i.label=2;case 2:return null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length?[2,""]:(t=yt(),e=_t(this._heartbeatsCache.heartbeats),n=e.heartbeatsToSend,r=e.unsentEntries,o=s.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:n})),this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,[4,this._storage.overwrite(this._heartbeatsCache)]):[3,4]);case 3:return i.sent(),[3,5];case 4:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache),i.label=5;case 5:return[2,o]}}))}))},t}();function yt(){var t=new Date;return t.toISOString().substring(0,10)}function _t(t,e){var n,r;void 0===e&&(e=gt);var o=[],s=t.slice(),a=function(t){var n=o.find((function(e){return e.agent===t.agent}));if(n){if(n.dates.push(t.date),wt(o)>e)return n.dates.pop(),"break"}else if(o.push({agent:t.agent,dates:[t.date]}),wt(o)>e)return o.pop(),"break";s=s.slice(1)};try{for(var c=i.__values(t),u=c.next();!u.done;u=c.next()){var l=u.value,h=a(l);if("break"===h)break}}catch(f){n={error:f}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return{heartbeatsToSend:o,unsentEntries:s}}var bt=function(){function t(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t.prototype.runIndexedDBEnvironmentCheck=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){return s.isIndexedDBAvailable()?[2,s.validateIndexedDBOpenable().then((function(){return!0})).catch((function(){return!1}))]:[2,!1]}))}))},t.prototype.read=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e;return i.__generator(this,(function(n){switch(n.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return t=n.sent(),t?[3,2]:[2,{heartbeats:[]}];case 2:return[4,ft(this.app)];case 3:return e=n.sent(),[2,e||{heartbeats:[]}]}}))}))},t.prototype.overwrite=function(t){var e;return i.__awaiter(this,void 0,void 0,(function(){var n,r;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return n=i.sent(),n?[3,2]:[2];case 2:return[4,this.read()];case 3:return r=i.sent(),[2,dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})]}}))}))},t.prototype.add=function(t){var e;return i.__awaiter(this,void 0,void 0,(function(){var n,r;return i.__generator(this,(function(o){switch(o.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return n=o.sent(),n?[3,2]:[2];case 2:return[4,this.read()];case 3:return r=o.sent(),[2,dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:r.lastSentHeartbeatDate,heartbeats:i.__spreadArray(i.__spreadArray([],i.__read(r.heartbeats),!1),i.__read(t.heartbeats),!1)})]}}))}))},t}();function wt(t){return s.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){W(new r.Component("platform-logger",(function(t){return new c(t)}),"PRIVATE")),W(new r.Component("heartbeat",(function(t){return new vt(t)}),"PRIVATE")),it(f,d,t),it(f,d,"cjs5"),it("fire-js","")}Et("node"),Object.defineProperty(e,"FirebaseError",{enumerable:!0,get:function(){return s.FirebaseError}}),e.SDK_VERSION=Z,e._DEFAULT_ENTRY_NAME=$,e._addComponent=q,e._addOrOverwriteComponent=H,e._apps=B,e._clearComponents=Q,e._components=z,e._getProvider=G,e._registerComponent=W,e._removeServiceInstance=K,e.deleteApp=rt,e.getApp=et,e.getApps=nt,e.initializeApp=tt,e.onLog=ot,e.registerVersion=it,e.setLogLevel=st},9730:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(655),i=n(1313),o=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),s="[DEFAULT]",a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i.Deferred;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(d){}try{for(var i=r.__values(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=r.__read(o.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(d){}}}catch(p){e={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=s),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(r.__spreadArray(r.__spreadArray([],r.__read(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()}))),!1),r.__read(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()}))),!1))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=s),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=s),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error("".concat(this.name,"(").concat(s,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var c=r.__values(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=r.__read(u.value,2),h=l[0],f=l[1],d=this.normalizeInstanceIdentifier(h);s===d&&f.resolve(a)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,o=this.onInitCallbacks.get(e);if(o)try{for(var s=r.__values(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=s),this.component?this.component.multipleInstances?t:s:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function c(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component ".concat(t.name," has already been registered with ").concat(this.name));e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();e.Component=o,e.ComponentContainer=l,e.Provider=a},7019:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(655),o=[];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e.LogLevel=void 0,function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"}(e.LogLevel||(e.LogLevel={}));var s={debug:e.LogLevel.DEBUG,verbose:e.LogLevel.VERBOSE,info:e.LogLevel.INFO,warn:e.LogLevel.WARN,error:e.LogLevel.ERROR,silent:e.LogLevel.SILENT},a=e.LogLevel.INFO,c=(r={},r[e.LogLevel.DEBUG]="log",r[e.LogLevel.VERBOSE]="log",r[e.LogLevel.INFO]="info",r[e.LogLevel.WARN]="warn",r[e.LogLevel.ERROR]="error",r),u=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var o=(new Date).toISOString(),s=c[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(e,")"));console[s].apply(console,i.__spreadArray(["[".concat(o,"]  ").concat(t.name,":")],n,!1))}},l=function(){function t(t){this.name=t,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,o.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in e.LogLevel))throw new TypeError('Invalid value "'.concat(t,'" assigned to `logLevel`'));this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"===typeof t?s[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.DEBUG],t,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.DEBUG],t,!1))},t.prototype.log=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.VERBOSE],t,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.VERBOSE],t,!1))},t.prototype.info=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.INFO],t,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.INFO],t,!1))},t.prototype.warn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.WARN],t,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.WARN],t,!1))},t.prototype.error=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,i.__spreadArray([this,e.LogLevel.ERROR],t,!1)),this._logHandler.apply(this,i.__spreadArray([this,e.LogLevel.ERROR],t,!1))},t}();function h(t){o.forEach((function(e){e.setLogLevel(t)}))}function f(t,n){for(var r=function(r){var i=null;n&&n.level&&(i=s[n.level]),r.userLogHandler=null===t?null:function(n,r){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];var a=o.map((function(t){if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((function(t){return t})).join(" ");r>=(null!==i&&void 0!==i?i:n.logLevel)&&t({level:e.LogLevel[r].toLowerCase(),message:a,args:o,type:n.name})}},i=0,a=o;i<a.length;i++){var c=a[i];r(c)}}e.Logger=l,e.setLogLevel=h,e.setUserLogHandler=f},5820:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5752),i=n(1313),o=n(9730);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5,l=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends i.FirebaseError{constructor(t,e,n=0){super(f(t),`Firebase Storage: ${e} (${f(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return f(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(t){return"storage/"+t}function d(){const t="An unknown error occurred, please check the error payload for server response.";return new h(e.StorageErrorCode.UNKNOWN,t)}function p(t){return new h(e.StorageErrorCode.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function g(t){return new h(e.StorageErrorCode.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(e.StorageErrorCode.UNAUTHENTICATED,t)}function v(){return new h(e.StorageErrorCode.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function y(t){return new h(e.StorageErrorCode.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _(){return new h(e.StorageErrorCode.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function b(){return new h(e.StorageErrorCode.CANCELED,"User canceled the upload/download.")}function w(t){return new h(e.StorageErrorCode.INVALID_URL,"Invalid URL '"+t+"'.")}function E(t){return new h(e.StorageErrorCode.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function S(){return new h(e.StorageErrorCode.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new h(e.StorageErrorCode.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function I(){return new h(e.StorageErrorCode.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function C(){return new h(e.StorageErrorCode.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O(t){return new h(e.StorageErrorCode.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function A(t){return new h(e.StorageErrorCode.INVALID_ARGUMENT,t)}function k(){return new h(e.StorageErrorCode.APP_DELETED,"The Firebase app was deleted.")}function x(t){return new h(e.StorageErrorCode.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(t,n){return new h(e.StorageErrorCode.INVALID_FORMAT,"String does not match format '"+t+"': "+n)}function P(t){throw new h(e.StorageErrorCode.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e.StorageErrorCode=void 0,function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"}(e.StorageErrorCode||(e.StorageErrorCode={}));class N{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=N.makeFromUrl(t,e)}catch(r){return new N(t,"")}if(""===n.path)return n;throw E(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let s=0;s<_.length;s++){const e=_[s],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new N(t,i),e.postModify(n);break}}if(null==n)throw w(t);return n}}class D{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,c())}),e)}function f(){o&&clearTimeout(o)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||s;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),o=setTimeout((()=>{s=!0,g(!0)}),n),g}function M(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return void 0!==t}function F(t){return"function"===typeof t}function U(t){return"object"===typeof t&&!Array.isArray(t)}function $(t){return"string"===typeof t||t instanceof String}function V(t){return B()&&t instanceof Blob}function B(){return"undefined"!==typeof Blob&&!i.isNode()}function z(t,e,n,r){if(r<e)throw A(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw A(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function H(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),o=-1!==e.indexOf(t);return n||i||o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(W||(W={}));class K{constructor(t,e,n,r,i,o,s,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new Q(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===W.NO_ERROR,i=n.getStatus();if(!e||G(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===W.ABORT;return void t(!1,new Q(!1,null,e))}const o=-1!==this.successCodes_.indexOf(i);t(!0,new Q(o,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());j(t)?n(t):n()}catch(o){r(o)}else if(null!==i){const t=d();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?k():b();r(t)}else{const t=_();r(t)}};this.canceled_?e(!1,new Q(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&M(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Q{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function X(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function J(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Y(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Z(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function tt(t,e,n,r,i,o,s=!0){const a=H(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return Y(u,e),X(u,n),J(u,o),Z(u,r),new K(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function nt(...t){const n=et();if(void 0!==n){const e=new n;for(let n=0;n<t.length;n++)e.append(t[n]);return e.getBlob()}if(B())return new Blob(t);throw new h(e.StorageErrorCode.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function rt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){if("undefined"===typeof atob)throw O("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class st{constructor(t,e){this.data=t,this.contentType=e||null}}function at(t,e){switch(t){case ot.RAW:return new st(ct(e));case ot.BASE64:case ot.BASE64URL:return new st(lt(t,e));case ot.DATA_URL:return new st(ft(e),dt(e))}throw d()}function ct(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,o=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function ut(t){let e;try{e=decodeURIComponent(t)}catch(n){throw R(ot.DATA_URL,"Malformed data URL.")}return ct(e)}function lt(t,e){switch(t){case ot.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw R(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case ot.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw R(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=it(e)}catch(i){if(i.message.includes("polyfill"))throw i;throw R(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class ht{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw R(ot.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=pt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function ft(t){const e=new ht(t);return e.base64?lt(ot.BASE64,e.rest):ut(e.rest)}function dt(t){const e=new ht(t);return e.contentType}function pt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e){let n=0,r="";V(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(V(this.data_)){const n=this.data_,r=rt(n,t,e);return null===r?null:new gt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new gt(n,!0)}}static getBlob(...t){if(B()){const e=t.map((t=>t instanceof gt?t.data_:t));return new gt(nt.apply(null,e))}{const e=t.map((t=>$(t)?at(ot.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new gt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return U(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function yt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function _t(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return e}class wt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||bt}}let Et=null;function St(t){return!$(t)||t.length<2?t:_t(t)}function Tt(){if(Et)return Et;const t=[];function e(t,e){return St(e)}t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));const n=new wt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new wt("size");return i.xform=r,t.push(i),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),Et=t,Et}function It(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new N(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Ct(t,e,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const t=n[o];r[t.local]=t.xform(r,e[t.server])}return It(r,t),r}function Ot(t,e,n){const r=mt(e);if(null===r)return null;const i=r;return Ct(t,i,n)}function At(t,e,n,r){const i=mt(e);if(null===i)return null;if(!$(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map((e=>{const i=t["bucket"],o=t["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=q(a,n,r),u=H({alt:"media",token:e});return c+u}));return c[0]}function kt(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="prefixes",Rt="items";function Pt(t,e,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[xt])for(const i of n[xt]){const n=i.replace(/\/$/,""),o=t._makeStorageReference(new N(e,n));r.prefixes.push(o)}if(n[Rt])for(const i of n[Rt]){const n=t._makeStorageReference(new N(e,i["name"]));r.items.push(n)}return r}function Nt(t,e,n){const r=mt(n);if(null===r)return null;const i=r;return Pt(t,e,i)}class Dt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){if(!t)throw d()}function Mt(t,e){function n(n,r){const i=Ot(t,r,e);return Lt(null!==i),i}return n}function jt(t,e){function n(n,r){const i=Nt(t,e,r);return Lt(null!==i),i}return n}function Ft(t,e){function n(n,r){const i=Ot(t,r,e);return Lt(null!==i),At(i,r,t.host,t._protocol)}return n}function Ut(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():m():402===e.getStatus()?g(t.bucket):403===e.getStatus()?y(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function $t(t){const e=Ut(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=p(t.path)),i.serverResponse=r.serverResponse,i}return n}function Vt(t,e,n){const r=e.fullServerUrl(),i=q(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new Dt(i,o,Mt(t,n),s);return a.errorHandler=$t(e),a}function Bt(t,e,n,r,i){const o={};e.isRoot?o["prefix"]="":o["prefix"]=e.path+"/",n&&n.length>0&&(o["delimiter"]=n),r&&(o["pageToken"]=r),i&&(o["maxResults"]=i);const s=e.bucketOnlyServerUrl(),a=q(s,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new Dt(a,c,jt(t,e.bucket),u);return l.urlParams=o,l.errorHandler=Ut(e),l}function zt(t,e,n){const r=e.fullServerUrl(),i=q(r,t.host,t._protocol)+"?alt=media",o="GET",s=t.maxOperationRetryTime,a=new Dt(i,o,((t,e)=>e),s);return a.errorHandler=$t(e),void 0!==n&&(a.headers["Range"]=`bytes=0-${n}`,a.successCodes=[200,206]),a}function qt(t,e,n){const r=e.fullServerUrl(),i=q(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new Dt(i,o,Ft(t,n),s);return a.errorHandler=$t(e),a}function Ht(t,e,n,r){const i=e.fullServerUrl(),o=q(i,t.host,t._protocol),s="PATCH",a=kt(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new Dt(o,s,Mt(t,r),u);return l.headers=c,l.body=a,l.errorHandler=$t(e),l}function Wt(t,e){const n=e.fullServerUrl(),r=q(n,t.host,t._protocol),i="DELETE",o=t.maxOperationRetryTime;function s(t,e){}const a=new Dt(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=$t(e),a}function Gt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Kt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Gt(null,e)),r}function Qt(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=Kt(e,r,i),l=kt(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=gt.getBlob(h,r,f);if(null===d)throw T();const p={name:u["fullPath"]},g=q(o,t.host,t._protocol),m="POST",v=t.maxUploadRetryTime,y=new Dt(g,m,Mt(t,n),v);return y.urlParams=p,y.headers=s,y.body=d.uploadData(),y.errorHandler=Ut(e),y}class Xt{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function Jt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){Lt(!1)}const r=e||["active"];return Lt(!!n&&-1!==r.indexOf(n)),n}function Yt(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s=Kt(e,r,i),a={name:s["fullPath"]},c=q(o,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s["contentType"],"Content-Type":"application/json; charset=utf-8"},h=kt(s,n),f=t.maxUploadRetryTime;function d(t){let e;Jt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Lt(!1)}return Lt($(e)),e}const p=new Dt(c,u,d,f);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Ut(e),p}function Zt(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function o(t){const e=Jt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Lt(!1)}n||Lt(!1);const i=Number(n);return Lt(!isNaN(i)),new Xt(i,r.size(),"final"===e)}const s="POST",a=t.maxUploadRetryTime,c=new Dt(n,s,o,a);return c.headers=i,c.errorHandler=Ut(e),c}const te=262144;function ee(t,e,n,r,i,o,s,a){const c=new Xt(0,0);if(s?(c.current=s.current,c.total=s.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw I();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,f=h+l;let d="";d=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${c.current}`},g=r.slice(h,f);if(null===g)throw T();function m(t,n){const i=Jt(t,["active","final"]),s=c.current+l,a=r.size();let u;return u="final"===i?Mt(e,o)(t,n):null,new Xt(s,a,"final"===i,u)}const v="POST",y=e.maxUploadRetryTime,_=new Dt(n,v,m,y);return _.headers=p,_.body=g.uploadData(),_.progressCallback=a||null,_.errorHandler=Ut(t),_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={STATE_CHANGED:"state_changed"},re={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ie(t){switch(t){case"running":case"pausing":case"canceling":return re.RUNNING;case"paused":return re.PAUSED;case"success":return re.SUCCESS;case"canceled":return re.CANCELED;case"error":return re.ERROR;default:return re.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e,n){const r=F(t)||null!=e||null!=n;if(r)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ae=null;class ce{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=W.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=W.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class ue extends ce{initXhr(){this.xhr_.responseType="text"}}function le(){return ae?ae():new ue}class he extends ce{initXhr(){this.xhr_.responseType="arraybuffer"}}function fe(){return new he}class de extends ce{initXhr(){this.xhr_.responseType="blob"}}function pe(){return new de}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=Tt(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{if(this._request=void 0,this._chunkMultiplier=1,t._codeEquals(e.StorageErrorCode.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const e=this.isExponentialBackoffExpired();if(G(t.status,[])){if(!e)return this.sleepTime=Math.max(2*this.sleepTime,l),this._needToFetchStatus=!0,void this.completeTransitions_();t=_()}this._error=t,this._transition("error")}},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals(e.StorageErrorCode.CANCELED)?this.completeTransitions_():(this._error=t,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=Yt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,le,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const r=Zt(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,le,e,n);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=te*this._chunkMultiplier,e=new Xt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let o;try{o=ee(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const s=this._ref.storage._makeRequest(o,le,r,i,!1);this._request=s,s.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=te*this._chunkMultiplier;2*t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=Vt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,le,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=Qt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,le,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=b(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=ie(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const i=new oe(e||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(ie(this._state)){case re.SUCCESS:se(this._resolve.bind(null,this.snapshot))();break;case re.CANCELED:case re.ERROR:const e=this._reject;se(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=ie(this._state);switch(e){case re.RUNNING:case re.PAUSED:t.next&&se(t.next.bind(t,this.snapshot))();break;case re.SUCCESS:t.complete&&se(t.complete.bind(t))();break;case re.CANCELED:case re.ERROR:t.error&&se(t.error.bind(t,this._error))();break;default:t.error&&se(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this._service=t,this._location=e instanceof N?e:N.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new me(t,e)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _t(this._location.path)}get storage(){return this._service}get parent(){const t=vt(this._location.path);if(null===t)return null;const e=new N(this._location.bucket,t);return new me(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw x(t)}}function ve(t,e){t._throwIfRoot("getBytes");const n=zt(t.storage,t._location,e);return t.storage.makeRequestWithTokens(n,fe).then((t=>void 0!==e?t.slice(0,e):t))}function ye(t,e){t._throwIfRoot("getBlob");const n=zt(t.storage,t._location,e);return t.storage.makeRequestWithTokens(n,pe).then((t=>void 0!==e?t.slice(0,e):t))}function _e(t,e,n){t._throwIfRoot("uploadBytes");const r=Qt(t.storage,t._location,Tt(),new gt(e,!0),n);return t.storage.makeRequestWithTokens(r,le).then((e=>({metadata:e,ref:t})))}function be(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ge(t,new gt(e),n)}function we(t,e,n=ot.RAW,r){t._throwIfRoot("uploadString");const i=at(n,e),o=Object.assign({},r);return null==o["contentType"]&&null!=i.contentType&&(o["contentType"]=i.contentType),_e(t,i.data,o)}function Ee(t){const e={prefixes:[],items:[]};return Se(t,e).then((()=>e))}async function Se(t,e,n){const r={pageToken:n},i=await Te(t,r);e.prefixes.push(...i.prefixes),e.items.push(...i.items),null!=i.nextPageToken&&await Se(t,e,i.nextPageToken)}function Te(t,e){null!=e&&"number"===typeof e.maxResults&&z("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Bt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,le)}function Ie(t){t._throwIfRoot("getMetadata");const e=Vt(t.storage,t._location,Tt());return t.storage.makeRequestWithTokens(e,le)}function Ce(t,e){t._throwIfRoot("updateMetadata");const n=Ht(t.storage,t._location,e,Tt());return t.storage.makeRequestWithTokens(n,le)}function Oe(t){t._throwIfRoot("getDownloadURL");const e=qt(t.storage,t._location,Tt());return t.storage.makeRequestWithTokens(e,le).then((t=>{if(null===t)throw C();return t}))}function Ae(t){t._throwIfRoot("deleteObject");const e=Wt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,le)}function ke(t,e){const n=yt(t._location.path,e),r=new N(t._location.bucket,n);return new me(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return/^[A-Za-z]+:\/\//.test(t)}function Re(t,e){return new me(t,e)}function Pe(t,e){if(t instanceof Me){const n=t;if(null==n._bucket)throw S();const r=new me(n,n._bucket);return null!=e?Pe(r,e):r}return void 0!==e?ke(t,e):t}function Ne(t,e){if(e&&xe(e)){if(t instanceof Me)return Re(t,e);throw A("To use ref(service, url), the first argument must be a Storage instance.")}return Pe(t,e)}function De(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:N.makeFromBucketSpec(n,t)}function Le(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken="string"===typeof o?o:i.createMockUserToken(o,t.app.options.projectId))}class Me{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):De(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=De(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){z("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){z("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new me(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new D(k());{const o=tt(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const je="@firebase/storage",Fe="0.11.2",Ue="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $e(t,e){return t=i.getModularInstance(t),ve(t,e)}function Ve(t,e,n){return t=i.getModularInstance(t),_e(t,e,n)}function Be(t,e,n,r){return t=i.getModularInstance(t),we(t,e,n,r)}function ze(t,e,n){return t=i.getModularInstance(t),be(t,e,n)}function qe(t){return t=i.getModularInstance(t),Ie(t)}function He(t,e){return t=i.getModularInstance(t),Ce(t,e)}function We(t,e){return t=i.getModularInstance(t),Te(t,e)}function Ge(t){return t=i.getModularInstance(t),Ee(t)}function Ke(t){return t=i.getModularInstance(t),Oe(t)}function Qe(t){return t=i.getModularInstance(t),Ae(t)}function Xe(t,e){return t=i.getModularInstance(t),Ne(t,e)}function Je(t,e){return ke(t,e)}function Ye(t=r.getApp(),e){t=i.getModularInstance(t);const n=r._getProvider(t,Ue),o=n.getImmediate({identifier:e}),s=i.getDefaultEmulatorHostnameAndPort("storage");return s&&Ze(o,...s),o}function Ze(t,e,n,r={}){Le(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){return t=i.getModularInstance(t),ye(t,e)}function en(t,e){throw new Error("getStream() is only supported by NodeJS builds")}function nn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Me(n,i,o,e,r.SDK_VERSION)}function rn(){r._registerComponent(new o.Component(Ue,nn,"PUBLIC").setMultipleInstances(!0)),r.registerVersion(je,Fe,""),r.registerVersion(je,Fe,"cjs2017")}rn(),e.StorageError=h,e.StringFormat=ot,e._FbsBlob=gt,e._Location=N,e._TaskEvent=ne,e._TaskState=re,e._UploadTask=ge,e._dataFromString=at,e._getChild=Je,e._invalidArgument=A,e._invalidRootOperation=x,e.connectStorageEmulator=Ze,e.deleteObject=Qe,e.getBlob=tn,e.getBytes=$e,e.getDownloadURL=Ke,e.getMetadata=qe,e.getStorage=Ye,e.getStream=en,e.list=We,e.listAll=Ge,e.ref=Xe,e.updateMetadata=He,e.uploadBytes=Ve,e.uploadBytesResumable=ze,e.uploadString=Be},1313:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(t,e){if(!t)throw o(e)},o=function(t){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},s=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==h)throw new u;const f=e<<2|s>>4;if(r.push(f),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(t){const e=s(t);return c.encodeByteArray(e,!0)},h=function(t){return l(t).replace(/\./g,"")},f=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(t){return p(void 0,t)}function p(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&g(n)&&(t[n]=p(t[n],e[n]));return t}function g(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=()=>m().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},_=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&f(t[1]);return e&&JSON.parse(e)},b=()=>{try{return v()||y()||_()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},w=t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},E=t=>{const e=w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},S=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config},T=t=>{var e;return null===(e=b())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[h(JSON.stringify(n)),h(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function A(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())}function k(){var t;const e=null===(t=b())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function x(){return"object"===typeof self&&self.self===self}function R(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function P(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function N(){return O().indexOf("Electron/")>=0}function D(){const t=O();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function L(){return O().indexOf("MSAppHost/")>=0}function M(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function j(){return!k()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function F(){try{return"object"===typeof indexedDB}catch(t){return!1}}function U(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function $(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="FirebaseError";class B extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=V,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?q(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new B(r,s,n);return a}}function q(t,e){return t.replace(H,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const H=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){return JSON.parse(t)}function G(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=W(f(o[0])||""),n=W(f(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:e,claims:n,data:r,signature:i}},Q=function(t){const e=K(t).claims,n=Math.floor((new Date).getTime()/1e3);let r=0,i=0;return"object"===typeof e&&(e.hasOwnProperty("nbf")?r=e["nbf"]:e.hasOwnProperty("iat")&&(r=e["iat"]),i=e.hasOwnProperty("exp")?e["exp"]:r+86400),!!n&&!!r&&!!i&&n>=r&&n<=i},X=function(t){const e=K(t).claims;return"object"===typeof e&&e.hasOwnProperty("iat")?e["iat"]:null},J=function(t){const e=K(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},Y=function(t){const e=K(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nt(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function rt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(it(n)&&it(o)){if(!rt(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function it(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e=2e3){const n=new I;return setTimeout((()=>n.reject("timeout!")),e),t.then(n.resolve,n.reject),n.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function at(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function ct(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let l=0;l<16;l++)n[l]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let l=0;l<16;l++)n[l]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let l=16;l<80;l++){const t=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):l<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const t=(o<<5|o>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<e){if(0===o)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<e)if(i[o]=t[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[r]>>e&255,++n;return t}}function lt(t,e){const n=new ht(t,e);return n.subscribe.bind(n)}class ht{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=dt(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=pt),void 0===r.error&&(r.error=pt),void 0===r.complete&&(r.complete=pt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ft(t,e){return(...n)=>{Promise.resolve(!0).then((()=>{t(...n)})).catch((t=>{e&&e(t)}))}}function dt(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function pt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=0===n?"none":"no more than "+n),i){const e=t+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".";throw new Error(e)}};function mt(t,e){return`${t} failed: ${e} argument `}function vt(t,e,n){if((!n||e)&&"string"!==typeof e)throw new Error(mt(t,"namespace")+"must be a valid firebase namespace.")}function yt(t,e,n,r){if((!r||n)&&"function"!==typeof n)throw new Error(mt(t,e)+"must be a valid function.")}function _t(t,e,n,r){if((!r||n)&&("object"!==typeof n||null===n))throw new Error(mt(t,e)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);if(o>=55296&&o<=56319){const e=o-55296;r++,i(r<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(r)-56320;o=65536+(e<<10)+n}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},wt=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e},Et=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)}))},St=1e3,Tt=2,It=144e5,Ct=.5;function Ot(t,e=St,n=Tt){const r=e*Math.pow(n,t),i=Math.round(Ct*r*(Math.random()-.5)*2);return Math.min(It,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return Number.isFinite(t)?t+kt(t):`${t}`}function kt(t){t=Math.abs(t);const e=t%100;if(e>=10&&e<=20)return"th";const n=t%10;return 1===n?"st":2===n?"nd":3===n?"rd":"th"}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}e.CONSTANTS=r,e.DecodeBase64StringError=u,e.Deferred=I,e.ErrorFactory=z,e.FirebaseError=B,e.MAX_VALUE_MILLIS=It,e.RANDOM_FACTOR=Ct,e.Sha1=ut,e.areCookiesEnabled=$,e.assert=i,e.assertionError=o,e.async=ft,e.base64=c,e.base64Decode=f,e.base64Encode=l,e.base64urlEncodeWithoutPadding=h,e.calculateBackoffMillis=Ot,e.contains=Z,e.createMockUserToken=C,e.createSubscribe=lt,e.decode=K,e.deepCopy=d,e.deepEqual=rt,e.deepExtend=p,e.errorPrefix=mt,e.extractQuerystring=ct,e.getDefaultAppConfig=S,e.getDefaultEmulatorHost=w,e.getDefaultEmulatorHostnameAndPort=E,e.getDefaults=b,e.getExperimentalSetting=T,e.getGlobal=m,e.getModularInstance=xt,e.getUA=O,e.isAdmin=Y,e.isBrowser=x,e.isBrowserExtension=R,e.isElectron=N,e.isEmpty=et,e.isIE=D,e.isIndexedDBAvailable=F,e.isMobileCordova=A,e.isNode=k,e.isNodeSdk=M,e.isReactNative=P,e.isSafari=j,e.isUWP=L,e.isValidFormat=J,e.isValidTimestamp=Q,e.issuedAtTime=X,e.jsonEval=W,e.map=nt,e.ordinal=At,e.promiseWithTimeout=ot,e.querystring=st,e.querystringDecode=at,e.safeGet=tt,e.stringLength=wt,e.stringToByteArray=bt,e.stringify=G,e.uuidv4=Et,e.validateArgCount=gt,e.validateCallback=yt,e.validateContextObject=_t,e.validateIndexedDBOpenable=U,e.validateNamespace=vt},4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return _},L:function(){return c},LL:function(){return R},P0:function(){return m},Pz:function(){return y},Sg:function(){return b},UG:function(){return S},ZR:function(){return x},aH:function(){return v},b$:function(){return I},eu:function(){return A},hl:function(){return O},m9:function(){return q},ne:function(){return $},pd:function(){return U},q4:function(){return g},ru:function(){return T},tV:function(){return u},uI:function(){return E},vZ:function(){return L},w1:function(){return C},xO:function(){return j},xb:function(){return D},z$:function(){return w},zd:function(){return F}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new s;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function S(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function I(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const t=w();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function O(){try{return"object"===typeof indexedDB}catch(t){return!1}}function A(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="FirebaseError";class x extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=k,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?P(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new x(r,s,n);return a}}function P(t,e){return t.replace(N,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function L(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(M(n)&&M(o)){if(!L(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function M(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function F(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function U(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){const n=new V(t,e);return n.subscribe.bind(n)}class V{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=B(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t){return t&&t._delegate?t._delegate:t}},8628:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("input",t._g(t._b({ref:"input"},"input",t.$attrs,!1),t.$listeners))},i=[],o=function(t){return t.default||t}(n(8795)),s=o,a=n(1001),c=(0,a.Z)(s,r,i,!1,null,null,null),u=c.exports},296:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{ref:"flyaway"},[t._t("default")],2)])},i=[],o=function(t){return t.default||t}(n(6401)),s=o,a=n(1001),c=(0,a.Z)(s,r,i,!1,null,null,null),u=c.exports},6159:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),e("div",{staticClass:"vue-map-hidden"},[t._t("default")],2),t._t("visible")],2)},i=[],o=function(t){return t.default||t}(n(7626)),s=o,a=n(1001),c=(0,a.Z)(s,r,i,!1,null,null,null),u=c.exports},5852:function(t,e,n){"use strict";n.r(e),n.d(e,{__esModule:function(){return o.X},default:function(){return u}});var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("label",[e("span",{domProps:{textContent:t._s(t.label)}}),e("input",{ref:"input",class:t.className,attrs:{type:"text",placeholder:t.placeholder}})])},i=[],o=n(2587),s=o.Z,a=n(1001),c=(0,a.Z)(s,r,i,!1,null,null,null),u=c.exports},1806:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),t._t("default")],2)},i=[],o=function(t){return t.default||t}(n(19)),s=o,a=n(1001),c=(0,a.Z)(s,r,i,!1,null,null,null),u=c.exports},1001:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},9662:function(t,e,n){var r=n(614),i=n(6330),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),i=n(1400),o=n(6244),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),l=i(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},9920:function(t,e,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8880:function(t,e,n){var r=n(9781),i=n(3070),o=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&o(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),i=n(7293),o=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a(t,""):s(t)}:s},2788:function(t,e,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},9909:function(t,e,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw g(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},o=function(t){return _.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},o=function(t){return l(t,b)}}t.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),o=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===o}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),o=n(7976),s=n(4774),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),i=n(7293),o=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&s(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return s(r,"source")||(r.source=v(_,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return o(this)&&f(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293),o=n(7854),s=o.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},4774:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),i=n(614),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},5112:function(t,e,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(4774),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return o(l,t)||(l[t]=a&&o(u,t)?u[t]:h("Symbol."+t)),l[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},1923:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5752),i="firebase",o="9.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.registerVersion(i,o,"app"),Object.keys(r).forEach((function(t){"default"===t||e.hasOwnProperty(t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}))},7618:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5820);Object.keys(r).forEach((function(t){"default"===t||e.hasOwnProperty(t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}))},537:function(){window.MutationObserver||(window.MutationObserver=function(t){function e(t){this.i=[],this.m=t}function n(t){(function n(){var r=t.takeRecords();r.length&&t.m(r,t),t.h=setTimeout(n,e._period)})()}function r(e){var n,r={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(n in e)r[n]!==t&&e[n]!==t&&(r[n]=e[n]);return r}function i(t,e){var n=u(t,e);return function(i){var o=i.length;if(e.a&&3===t.nodeType&&t.nodeValue!==n.a&&i.push(new r({type:"characterData",target:t,oldValue:n.a})),e.b&&n.b&&a(i,t,n.b,e.f),e.c||e.g)var s=c(i,t,n,e);(s||i.length!==o)&&(n=u(t,e))}}function o(t,e){return e.value}function s(t,e){return"style"!==e.name?e.value:t.style.cssText}function a(e,n,i,o){for(var s,a,c={},u=n.attributes,l=u.length;l--;)s=u[l],a=s.name,o&&o[a]===t||(g(n,s)!==i[a]&&e.push(r({type:"attributes",target:n,attributeName:a,oldValue:i[a],attributeNamespace:s.namespaceURI})),c[a]=!0);for(a in i)c[a]||e.push(r({target:n,type:"attributes",attributeName:a,oldValue:i[a]}))}function c(e,n,i,o){function s(t,n,i,s,u){var l,h,f,d=t.length-1;for(u=-~((d-u)/2);f=t.pop();)l=i[f.j],h=s[f.l],o.c&&u&&Math.abs(f.j-f.l)>=d&&(e.push(r({type:"childList",target:n,addedNodes:[l],removedNodes:[l],nextSibling:l.nextSibling,previousSibling:l.previousSibling})),u--),o.b&&h.b&&a(e,l,h.b,o.f),o.a&&3===l.nodeType&&l.nodeValue!==h.a&&e.push(r({type:"characterData",target:l,oldValue:h.a})),o.g&&c(l,h)}function c(n,i){for(var h,f,p,g,m,v=n.childNodes,y=i.c,_=v.length,b=y?y.length:0,w=0,E=0,S=0;E<_||S<b;)g=v[E],m=(p=y[S])&&p.node,g===m?(o.b&&p.b&&a(e,g,p.b,o.f),o.a&&p.a!==t&&g.nodeValue!==p.a&&e.push(r({type:"characterData",target:g,oldValue:p.a})),f&&s(f,n,v,y,w),o.g&&(g.childNodes.length||p.c&&p.c.length)&&c(g,p),E++,S++):(u=!0,h||(h={},f=[]),g&&(h[p=l(g)]||(h[p]=!0,-1===(p=d(y,g,S,"node"))?o.c&&(e.push(r({type:"childList",target:n,addedNodes:[g],nextSibling:g.nextSibling,previousSibling:g.previousSibling})),w++):f.push({j:E,l:p})),E++),m&&m!==v[E]&&(h[p=l(m)]||(h[p]=!0,-1===(p=d(v,m,E))?o.c&&(e.push(r({type:"childList",target:i.node,removedNodes:[m],nextSibling:y[S+1],previousSibling:y[S-1]})),w--):f.push({j:p,l:S})),S++));f&&s(f,n,v,y,w)}var u;return c(n,i),u}function u(t,e){var n=!0;return function t(r){var i={node:r};return!e.a||3!==r.nodeType&&8!==r.nodeType?(e.b&&n&&1===r.nodeType&&(i.b=f(r.attributes,(function(t,n){return e.f&&!e.f[n.name]||(t[n.name]=g(r,n)),t}),{})),n&&(e.c||e.a||e.b&&e.g)&&(i.c=h(r.childNodes,t)),n=e.g):i.a=r.nodeValue,i}(t)}function l(t){try{return t.id||(t.mo_id=t.mo_id||m++)}catch(e){try{return t.nodeValue}catch(n){return m++}}}function h(t,e){for(var n=[],r=0;r<t.length;r++)n[r]=e(t[r],r,t);return n}function f(t,e,n){for(var r=0;r<t.length;r++)n=e(n,t[r],r,t);return n}function d(t,e,n,r){for(;n<t.length;n++)if((r?t[n][r]:t[n])===e)return n;return-1}e._period=30,e.prototype={observe:function(t,e){for(var r={b:!!(e.attributes||e.attributeFilter||e.attributeOldValue),c:!!e.childList,g:!!e.subtree,a:!(!e.characterData&&!e.characterDataOldValue)},o=this.i,s=0;s<o.length;s++)o[s].s===t&&o.splice(s,1);e.attributeFilter&&(r.f=f(e.attributeFilter,(function(t,e){return t[e]=!0,t}),{})),o.push({s:t,o:i(t,r)}),this.h||n(this)},takeRecords:function(){for(var t=[],e=this.i,n=0;n<e.length;n++)e[n].o(t);return t},disconnect:function(){this.i=[],clearTimeout(this.h),this.h=null}};var p=document.createElement("i");p.style.top=0;var g=(p="null"!=p.attributes.style.value)?o:s,m=1;return e}(void 0))},5666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"===typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,s=Object.create(o.prototype),a=new x(r||[]);return i(s,"_invoke",{value:C(t,n,a)}),s}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var f="suspendedStart",d="suspendedYield",p="executing",g="completed",m={};function v(){}function y(){}function _(){}var b={};u(b,s,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(R([])));E&&E!==n&&r.call(E,s)&&(b=E);var S=_.prototype=v.prototype=Object.create(b);function T(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function n(i,o,s,a){var c=h(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(l).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var o;function s(t,r){function i(){return new e((function(e,i){n(t,r,e,i)}))}return o=o?o.then(i,i):i()}i(this,"_invoke",{value:s})}function C(t,e,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===g){if("throw"===i)throw o;return P()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=O(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=h(t,e,n);if("normal"===c.type){if(r=n.done?g:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=g,n.method="throw",n.arg=c.arg)}}}function O(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator["return"]&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=h(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var s=o.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function R(t){if(t){var n=t[s];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=_,i(S,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:y,configurable:!0}),y.displayName=u(_,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},T(I.prototype),u(I.prototype,a,(function(){return this})),t.AsyncIterator=I,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new I(l(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},T(S),u(S,c,"Generator"),u(S,s,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){while(n.length){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=R,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:R(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},655:function(t,e,n){"use strict";n.r(e),n.d(e,{__assign:function(){return o},__asyncDelegator:function(){return I},__asyncGenerator:function(){return T},__asyncValues:function(){return C},__await:function(){return S},__awaiter:function(){return p},__classPrivateFieldGet:function(){return R},__classPrivateFieldIn:function(){return N},__classPrivateFieldSet:function(){return P},__createBinding:function(){return m},__decorate:function(){return a},__esDecorate:function(){return u},__exportStar:function(){return v},__extends:function(){return i},__generator:function(){return g},__importDefault:function(){return x},__importStar:function(){return k},__makeTemplateObject:function(){return O},__metadata:function(){return d},__param:function(){return c},__propKey:function(){return h},__read:function(){return _},__rest:function(){return s},__runInitializers:function(){return l},__setFunctionName:function(){return f},__spread:function(){return b},__spreadArray:function(){return E},__spreadArrays:function(){return w},__values:function(){return y}});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function a(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}function c(t,e){return function(n,r){e(n,r,t)}}function u(t,e,n,r,i,o){function s(t){if(void 0!==t&&"function"!==typeof t)throw new TypeError("Function expected");return t}for(var a,c=r.kind,u="getter"===c?"get":"setter"===c?"set":"value",l=!e&&t?r["static"]?t:t.prototype:null,h=e||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),f=!1,d=n.length-1;d>=0;d--){var p={};for(var g in r)p[g]="access"===g?{}:r[g];for(var g in r.access)p.access[g]=r.access[g];p.addInitializer=function(t){if(f)throw new TypeError("Cannot add initializers after decoration has completed");o.push(s(t||null))};var m=(0,n[d])("accessor"===c?{get:h.get,set:h.set}:h[u],p);if("accessor"===c){if(void 0===m)continue;if(null===m||"object"!==typeof m)throw new TypeError("Object expected");(a=s(m.get))&&(h.get=a),(a=s(m.set))&&(h.set=a),(a=s(m.init))&&i.push(a)}else(a=s(m))&&("field"===c?i.push(a):h[u]=a)}l&&Object.defineProperty(l,r.name,h),f=!0}function l(t,e,n){for(var r=arguments.length>2,i=0;i<e.length;i++)n=r?e[i].call(t,n):e[i].call(t);return r?n:void 0}function h(t){return"symbol"===typeof t?t:"".concat(t)}function f(t,e,n){return"symbol"===typeof e&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})}function d(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)}function p(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function g(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(o&&(o=0,a[0]&&(s=0)),s)try{if(n=1,r&&(i=2&a[0]?r["return"]:a[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}var m=Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]};function v(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||m(e,t,n)}function y(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function _(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function b(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(_(arguments[e]));return t}function w(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function E(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}function S(t){return this instanceof S?(this.v=t,this):new S(t)}function T(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(t,e||[]),o=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){i[t]&&(r[t]=function(e){return new Promise((function(n,r){o.push([t,e,n,r])>1||a(t,e)}))})}function a(t,e){try{c(i[t](e))}catch(n){h(o[0][3],n)}}function c(t){t.value instanceof S?Promise.resolve(t.value.v).then(u,l):h(o[0][2],t)}function u(t){a("next",t)}function l(t){a("throw",t)}function h(t,e){t(e),o.shift(),o.length&&a(o[0][0],o[0][1])}}function I(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,i){e[r]=t[r]?function(e){return(n=!n)?{value:S(t[r](e)),done:!1}:i?i(e):e}:i}}function C(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"===typeof y?y(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){e=t[n](e),i(r,o,e.done,e.value)}))}}function i(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)}}function O(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var A=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t["default"]=e};function k(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&m(e,t,n);return A(e,t),e}function x(t){return t&&t.__esModule?t:{default:t}}function R(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)}function P(t,e,n,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(t,n):i?i.value=n:e.set(t,n),n}function N(t,e){if(null===e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("Cannot use 'in' operator on non-object");return"function"===typeof t?e===t:t.has(e)}},5934:function(t,e,n){"use strict";var r;n.d(e,{Z:function(){return p}});var i=new Uint8Array(16);function o(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function a(t){return"string"===typeof t&&s.test(t)}for(var c=a,u=[],l=0;l<256;++l)u.push((l+256).toString(16).substr(1));function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n}var f=h;function d(t,e,n){t=t||{};var r=t.random||(t.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return f(r)}var p=d},5918:function(t){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={install:function(t){t.prototype.$getLocation=r.getLocation,t.prototype.$watchLocation=r.watchLocation,t.prototype.$clearLocationWatch=r.clearLocation},getLocation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(n,i){e?i("reject forced for testing purposes"):r._isAvailable()?window.navigator.geolocation.getCurrentPosition((function(t){n({lat:t.coords.latitude,lng:t.coords.longitude,altitude:t.coords.altitude,altitudeAccuracy:t.coords.altitudeAccuracy,accuracy:t.coords.accuracy})}),(function(){i("no position access")}),t):i("no browser support")}))},watchLocation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(n,i){e?i("reject forced for testing purposes"):r._isAvailable()?window.navigator.geolocation.watchPosition((function(t){n({lat:t.coords.latitude,lng:t.coords.longitude,altitude:t.coords.altitude,altitudeAccuracy:t.coords.altitudeAccuracy,accuracy:t.coords.accuracy,heading:t.coords.heading,speed:t.coords.speed})}),(function(){i("no position access")}),t):i("no browser support")}))},clearLocation:function(t){return new Promise((function(e,n){r._isAvailable()?t?e(window.navigator.geolocation.clearWatch(t)):n("please provide watchID"):n("no browser support")}))},_isAvailable:function(){return"geolocation"in window.navigator}};e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)}])}))},8345:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}n.d(e,{ZP:function(){return Ee}});var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=g(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:y(e,i),matched:t?v(t):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var m=p(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||f;return(n||"/")+o(r)+i}function _(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function w(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function S(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,f=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=h,f){var p=l[c],g=p&&p.component;return g?(p.configProps&&I(g,s,p.route,p.configProps),a(g,s,i)):a()}var m=u.matched[h],v=m&&m.components[c];if(!m||!v)return l[c]=null,a();l[c]={component:v},s.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),S(u)};var y=m.props&&m.props[c];return y&&(r(l[c],{route:u,configProps:y}),I(v,s,u,y)),a(v,s,i)}};function I(t,e,n,i){var o=e.props=C(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function C(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function O(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function A(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function k(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var x=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},R=X,P=j,N=F,D=V,L=Q,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],f=n[2],d=n[3],p=n[4],g=n[5],m=n[6],v=n[7];s&&(r.push(s),s="");var y=null!=f&&null!=h&&h!==f,_="+"===m||"*"===m,b="?"===m||"*"===m,w=n[2]||a,E=p||g;r.push({name:d||i++,prefix:f||"",delimiter:w,optional:b,repeat:_,partial:y,asterisk:!!v,pattern:E?z(E):v?".*":"[^"+B(w)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function F(t,e){return V(j(t,e),e)}function U(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function $(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",H(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?U:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(x(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?$(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function q(t,e){return t.keys=e,t}function H(t){return t&&t.sensitive?"":"i"}function W(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(X(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",H(n));return q(o,e)}function K(t,e,n){return Q(j(t,n),e,n)}function Q(t,e,n){x(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=B(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",q(new RegExp("^"+o,H(n)),e)}function X(t,e,n){return x(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?W(t,e):x(t)?G(t,e,n):K(t,e,n)}R.parse=P,R.compile=N,R.tokensToFunction=D,R.tokensToRegExp=L;var J=Object.create(null);function Y(t,e,n){e=e||{};try{var r=J[t]||(J[t]=R.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=Y(c,a,"path "+e.path)}else 0;return o}var l=A(o.path||""),h=e&&e.path||"/",f=l.path?O(l.path,h,n||o.append):h,d=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,d=null==h?"router-link-exact-active":h,g=null==this.activeClass?f:this.activeClass,m=null==this.exactActiveClass?d:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[m]=_(i,v,this.exactPath),u[g]=this.exact||this.exactPath?u[m]:w(i,v);var y=u[m]?this.ariaCurrentValue:null,b=function(t){ot(t)&&(e.replace?n.replace(s,rt):n.push(s,rt))},E={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){E[t]=b})):E[this.event]=b;var S={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[g],isExactActive:u[m]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?t():t("span",{},T)}if("a"===this.tag)S.on=E,S.attrs={href:c,"aria-current":y};else{var I=st(this.$slots.default);if(I){I.isStatic=!1;var C=I.data=r({},I.data);for(var O in C.on=C.on||{},C.on){var A=C.on[O];O in E&&(C.on[O]=Array.isArray(A)?A:[A])}for(var k in E)k in C.on?C.on[k].push(E[k]):C.on[k]=b;var x=I.data.attrs=r({},I.data.attrs);x.href=c,x["aria-current"]=y}else S.on=E}return t(this.tag,S,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",T),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(o,s,a,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function lt(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?k(o+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=R(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:k(e.path+"/"+t)}function dt(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){ut(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;ut([e||t],r,i,o,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,s){var a=Z(t,n,!1,e),c=a.name;if(c){var u=o[c];if(!u)return f(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Y(u.path,a.params,'named route "'+c+'"'),f(u,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],g=i[p];if(pt(g.regex,a.path,a.params))return f(g,a,s)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,d=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,d=s.hasOwnProperty("params")?s.params:d,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:d},void 0,n)}if(c){var g=gt(c,t),m=Y(g,d,'redirect route with path "'+g+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=Y(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,f(s,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function gt(t,e){return O(t,e.parent?e.parent.path:"/",!0)}var mt=ct&&window.performance&&window.performance.now?window.performance:Date;function vt(){return mt.now().toFixed(3)}var yt=vt();function _t(){return yt}function bt(t){return yt=t}var wt=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=_t(),window.history.replaceState(n,"",e),window.addEventListener("popstate",It),function(){window.removeEventListener("popstate",It)}}function St(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=Ct(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Nt(t,o)})).catch((function(t){0})):Nt(s,o))}))}}function Tt(){var t=_t();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function It(t){Tt(),t.state&&t.state.key&&bt(t.state.key)}function Ct(){var t=_t();if(t)return wt[t]}function Ot(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function At(t){return Rt(t.x)||Rt(t.y)}function kt(t){return{x:Rt(t.x)?t.x:window.pageXOffset,y:Rt(t.y)?t.y:window.pageYOffset}}function xt(t){return{x:Rt(t.x)?t.x:0,y:Rt(t.y)?t.y:0}}function Rt(t){return"number"===typeof t}var Pt=/^#\d/;function Nt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Pt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=xt(i),e=Ot(r,i)}else At(t)&&(e=kt(t))}else n&&At(t)&&(e=kt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Dt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){Tt();var n=window.history;try{if(e){var i=r({},n.state);i.key=_t(),n.replaceState(i,"",t)}else n.pushState({key:bt(vt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Mt(t){Lt(t,!0)}var jt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ft(t,e){return Bt(t,e,jt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+qt(e)+'" via a navigation guard.')}function Ut(t,e){var n=Bt(t,e,jt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function $t(t,e){return Bt(t,e,jt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Vt(t,e){return Bt(t,e,jt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Bt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var zt=["params","query","hash"];function qt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Ht(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return Ht(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}function Kt(t){return function(e,n,r){var i=!1,o=0,s=null;Qt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=Zt((function(e){Yt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,o--,o<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=Ht(t)?t:new Error(e),r(s))}));try{c=t(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Qt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Yt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Qt(t,(function(t,r,i,o){var s=ie(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Xt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",ae,!0)}function se(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Wt(t,jt.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!Wt(t)&&Ht(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},s=t.matched.length-1,a=i.matched.length-1;if(_(t,i)&&s===a&&t.matched[s]===i.matched[a])return this.ensureURL(),t.hash&&St(this.router,i,t,!1),o(Ut(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,f=[].concat(oe(l),this.router.beforeHooks,se(u),h.map((function(t){return t.beforeEnter})),Kt(h)),d=function(e,n){if(r.pending!==t)return o($t(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(Vt(i,t))):Ht(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Ft(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(s){o(s)}};Gt(f,d,(function(){var n=ce(h),s=n.concat(r.router.resolveHooks);Gt(s,d,(function(){if(r.pending!==t)return o($t(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){S(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Dt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=he(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,(function(t){r&&St(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Lt(k(r.base+t.fullPath)),St(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Mt(k(r.base+t.fullPath)),St(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?Lt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(k(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Dt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;pe()&&t.transitionTo(ge(),(function(n){r&&St(t.router,n,e,!0),Dt||ye(n.fullPath)}))},o=Dt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),St(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),St(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ge()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return ge()},e}(te);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}function pe(){var t=ge();return"/"===t.charAt(0)||(ye("/"+t),!1)}function ge(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Dt?Lt(me(t)):window.location.hash=t}function ye(t){Dt?Mt(me(t)):window.location.replace(me(t))}var _e=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Wt(t,jt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Dt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new _e(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Dt&&i;o&&"fullPath"in t&&St(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return Se(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return Se(this.resolveHooks,t)},be.prototype.afterEach=function(t){return Se(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Te(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,we);var Ee=be;function Se(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Te(t,e,n){var r="hash"===n?"#"+e:e;return t?k(t+"/"+r):r}be.install=at,be.version="3.6.5",be.isNavigationFailure=Wt,be.NavigationFailureType=jt,be.START_LOCATION=m,ct&&window.Vue&&window.Vue.use(be)},4494:function(t){(function(e,n){t.exports=n()})("undefined"!==typeof self&&self,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"capitalize",(function(){return _})),n.d(r,"uppercase",(function(){return w})),n.d(r,"lowercase",(function(){return S})),n.d(r,"placeholder",(function(){return I})),n.d(r,"truncate",(function(){return O}));var i={};function o(t){return c(t)||a(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function u(t){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}n.r(i),n.d(i,"currency",(function(){return U})),n.d(i,"bytes",(function(){return V})),n.d(i,"pluralize",(function(){return z})),n.d(i,"ordinal",(function(){return H})),n.d(i,"number",(function(){return Y})),n.d(i,"percent",(function(){return tt}));var l=Array.prototype,h=Object.prototype,f=(l.slice,h.toString),d={isArray:function(t){return Array.isArray(t)}},p=Math.pow(2,53)-1;function g(t,e){return e.length?g(t[e[0]],e.slice(1)):t}d.isArrayLike=function(t){if("object"!==u(t)||!t)return!1;var e=t.length;return"number"===typeof e&&e%1===0&&e>=0&&e<=p},d.isObject=function(t){var e=u(t);return"function"===e||"object"===e&&!!t},d.each=function(t,e){var n,r;if(d.isArray(t)){for(n=0,r=t.length;n<r;n++)if(!1===e(t[n],n,t))break}else for(n in t)if(!1===e(t[n],n,t))break;return t},d.each(["Arguments","Function","String","Number","Date","RegExp","Error"],(function(t){d["is"+t]=function(e){return f.call(e)==="[object "+t+"]"}})),d.toArray=function(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r},d.toNumber=function(t){if("string"!==typeof t)return t;var e=Number(t);return isNaN(e)?t:e},d.convertRangeToArray=function(t){return o(Array(t+1).keys()).slice(1)},d.convertArray=function(t){if(d.isArray(t))return t;if(d.isPlainObject(t)){var e,n=Object.keys(t),r=n.length,i=new Array(r);while(r--)e=n[r],i[r]={$key:e,$value:t[e]};return i}return t||[]},d.getPath=function(t,e){return g(t,e.split("."))};f=Object.prototype.toString;var m="[object Object]";d.isPlainObject=function(t){return f.call(t)===m},d.exist=function(t){return null!==t&&"undefined"!==typeof t};var v=d;function y(t,e){var n=this&&this.capitalize?this.capitalize:{};e=e||n;var r=null!=e.onlyFirstLetter&&e.onlyFirstLetter;return t||0===t?!0===r?t.toString().charAt(0).toUpperCase()+t.toString().slice(1):(t=t.toString().toLowerCase().split(" "),t.map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" ")):""}var _=y;function b(t){return t||0===t?t.toString().toUpperCase():""}var w=b;function E(t){return t||0===t?t.toString().toLowerCase():""}var S=E;function T(t,e){return void 0===t||""===t||null===t?e:t}var I=T;function C(t,e){return e=e||15,t&&"string"===typeof t?t.length<=e?t:t.substring(0,e)+"...":""}var O=C;function A(t,e,n){return t=v.isArray(t)?t:v.convertRangeToArray(t),n=n?parseInt(n,10):0,e=v.toNumber(e),"number"===typeof e?t.slice(n,n+e):t}var k=A;function x(t,e){t=v.convertArray(t);if(null==e)return t;if("function"===typeof e)return t.filter(e);e=(""+e).toLowerCase();for(var n,r,i,o,s=2,a=Array.prototype.concat.apply([],v.toArray(arguments,s)),c=[],u=0,l=t.length;u<l;u++)if(n=t[u],i=n&&n.$value||n,o=a.length,o){while(o--)if(r=a[o],"$key"===r&&R(n.$key,e)||R(v.getPath(i,r),e)){c.push(n);break}}else R(n,e)&&c.push(n);return c}function R(t,e){var n;if(v.isPlainObject(t)){var r=Object.keys(t);n=r.length;while(n--)if(R(t[r[n]],e))return!0}else if(v.isArray(t)){n=t.length;while(n--)if(R(t[n],e))return!0}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}var P=x;function N(t){var e,n=null;t=v.convertArray(t);var r=v.toArray(arguments,1),i=r[r.length-1];"number"===typeof i?(i=i<0?-1:1,r=r.length>1?r.slice(0,-1):r):i=1;var o=r[0];if(!o)return t;function s(t,n,r){var o=e[r];return o&&("$key"!==o&&(v.isObject(t)&&"$value"in t&&(t=t.$value),v.isObject(n)&&"$value"in n&&(n=n.$value)),t=v.isObject(t)?v.getPath(t,o):t,n=v.isObject(n)?v.getPath(n,o):n,t="string"===typeof t?t.toLowerCase():t,n="string"===typeof n?n.toLowerCase():n),t===n?0:t>n?i:-i}return"function"===typeof o?n=function(t,e){return o(t,e)*i}:(e=Array.prototype.concat.apply([],r),n=function(t,r,i){return i=i||0,i>=e.length-1?s(t,r,i):s(t,r,i)||n(t,r,i+1)}),t.slice().sort(n)}var D=N;function L(t,e){var n=P.apply(this,arguments);return n.splice(1),n}var M=L;function j(t,e,n,r){var i,o,s,a,c=this&&this.currency?this.currency:{};e=v.exist(e)?e:c.symbol,n=v.exist(n)?n:c.decimalDigits,r=r||c;var u=/(\d{3})(?=\d)/g;if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e="undefined"!==typeof e?e:"$",n="undefined"!==typeof n?n:2,i=null!=r.thousandsSeparator?r.thousandsSeparator:",",o=null==r.symbolOnLeft||r.symbolOnLeft,s=null!=r.spaceBetweenAmountAndSymbol&&r.spaceBetweenAmountAndSymbol,a=null!=r.showPlusSign&&r.showPlusSign;var l=Math.abs(t),h=F(l,n);h=r.decimalSeparator?h.replace(".",r.decimalSeparator):h;var f=n?h.slice(0,-1-n):h,d=f.length%3,p=d>0?f.slice(0,d)+(f.length>3?i:""):"",g=n?h.slice(-1-n):"";e=s?o?e+" ":" "+e:e,e=o?e+p+f.slice(d).replace(u,"$1"+i)+g:p+f.slice(d).replace(u,"$1"+i)+g+e;var m=t<0?"-":"",y=t>0&&a?"+":"";return y+m+e}function F(t,e){return(+(Math.round(+(t+"e"+e))+"e"+-e)).toFixed(e)}var U=j;function $(t,e){var n=this&&this.bytes?this.bytes:{};return e=v.exist(e)?e:n.decimalDigits,e="undefined"!==typeof e?e:2,t=null===t||isNaN(t)?0:t,t>=Math.pow(1024,4)?"".concat((t/Math.pow(1024,4)).toFixed(e)," TB"):t>=Math.pow(1024,3)?"".concat((t/Math.pow(1024,3)).toFixed(e)," GB"):t>=Math.pow(1024,2)?"".concat((t/Math.pow(1024,2)).toFixed(e)," MB"):t>=1024?"".concat((t/1024).toFixed(e)," kB"):"".concat(t,1===t?" byte":" bytes")}var V=$;function B(t,e,n){var r=this&&this.pluralize?this.pluralize:{};n=n||r;var i="",o=null!=n.includeNumber&&n.includeNumber;return!0===o&&(i+=t+" "),!t&&0!==t||!e||(Array.isArray(e)?i+=e[t-1]||e[e.length-1]:i+=e+(1===t?"":"s")),i}var z=B;function q(t,e){var n=this&&this.ordinal?this.ordinal:{};e=e||n;var r="",i=null!=e.includeNumber&&e.includeNumber;!0===i&&(r+=t);var o=t%10,s=t%100;return r+=1==o&&11!=s?"st":2==o&&12!=s?"nd":3==o&&13!=s?"rd":"th",r}var H=q;function W(t,e,n){var r=this&&this.number?this.number:{};e=v.exist(e)?e:r.format,n=n||r;var i=K(e),o=G(t),s=null!=n.thousandsSeparator?n.thousandsSeparator:",",a=null!=n.decimalSeparator?n.decimalSeparator:".";if(i.sign=i.sign||o.sign,i.unit){var c=Q(o.float,i);return i.sign+c}var u=J(o.float,i.decimals),l=X(u,i.base,s,a);return i.sign+l}function G(t){return{float:Math.abs(parseFloat(t)),int:Math.abs(parseInt(t)),sign:Math.sign(t)<0?"-":""}}function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",e=/([\+\-])?([0-9\,]+)?([\.0-9]+)?([a\s]+)?/,n=t?t.match(e):["","","","",""],r=n[3],i=r?r.match(/0/g).length:0;return{sign:n[1]||"",base:n[2]||"",decimals:i,unit:n[4]||""}}function Q(t,e){var n,r=/\.0+$|(\.[0-9]*[1-9])0+$/,i=[{value:1,symbol:""},{value:1e3,symbol:"K"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"T"}];for(n=i.length-1;n>0;n--)if(t>=i[n].value)break;return t=(t/i[n].value).toFixed(e.decimals).replace(r,"$1"),t+e.unit.replace("a",i[n].symbol)}function X(t,e,n,r){var i=/(\d+)(\d{3})/,o=t.toString(),s=o.split("."),a=s[0],c=s.length>1?r+s[1]:"";switch(e){case"":a="";break;case"0,0":while(i.test(a))a=a.replace(i,"$1"+n+"$2");break}return a+c}function J(t,e){return(+(Math.round(+(t+"e"+e))+"e"+-e)).toFixed(e)}Math.sign=function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1};var Y=W;function Z(t,e,n,r){var i=this&&this.percent?this.percent:{};r=r||i,n=v.exist(n)?n:i.multiplier,n="undefined"!==typeof n?n:100,e=v.exist(e)?e:i.decimalDigits,e="undefined"!==typeof e?e:0;var o=null!=r.decimalSeparator?r.decimalSeparator:".";return t=null===t||isNaN(t)?0:t,"".concat((t*n).toFixed(e).replace(".",o),"%")}var tt=Z,et={install:function(t,e){v.each(r,(function(n,r){t.filter(r,n.bind(e))})),v.each(i,(function(n,r){t.filter(r,n.bind(e))}))},mixin:{methods:{limitBy:k,filterBy:P,orderBy:D,find:M}}};e["default"]=et;"undefined"!==typeof window&&window.Vue&&(window.Vue.use(et),window.Vue2Filters=et)}])}))},8795:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(8179),o=n(3166),s=c(o),a=n(8336);function c(t){return t&&t.__esModule?t:{default:t}}var u={bounds:{type:Object},componentRestrictions:{type:Object,noBind:!0},types:{type:Array,default:function(){return[]}}},l={selectFirstOnEnter:{required:!1,type:Boolean,default:!1},options:{type:Object}};e["default"]={mounted:function(){var t=this;this.$gmapApiPromiseLazy().then((function(){if(t.selectFirstOnEnter&&(0,s.default)(t.$refs.input),"function"!==typeof google.maps.places.Autocomplete)throw new Error("google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?");var e=r({},(0,i.getPropsValues)(t,u),t.options);t.$autocomplete=new google.maps.places.Autocomplete(t.$refs.input,e),(0,i.bindProps)(t,t.$autocomplete,u),t.$watch("componentRestrictions",(function(e){void 0!==e&&t.$autocomplete.setComponentRestrictions(e)})),t.$autocomplete.addListener("place_changed",(function(){t.$emit("place_changed",t.$autocomplete.getPlace())}))}))},props:r({},(0,a.mappedPropsToVueProps)(u),l)}},4001:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8336),i=o(r);function o(t){return t&&t.__esModule?t:{default:t}}var s={center:{type:Object,twoWay:!0,required:!0},radius:{type:Number,twoWay:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},options:{type:Object,twoWay:!1}},a=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];e["default"]=(0,i.default)({mappedProps:s,name:"circle",ctr:function(){return google.maps.Circle},events:a})},6401:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8336),i=o(r);function o(t){return t&&t.__esModule?t:{default:t}}var s={options:{type:Object,required:!1,default:function(){return{}}},position:{type:Object,twoWay:!0},zIndex:{type:Number,twoWay:!0}},a=["domready","closeclick","content_changed"];e["default"]=(0,i.default)({mappedProps:s,events:a,name:"infoWindow",ctr:function(){return google.maps.InfoWindow},props:{opened:{type:Boolean,default:!0}},inject:{$markerPromise:{default:null}},mounted:function(){var t=this.$refs.flyaway;t.parentNode.removeChild(t)},beforeCreate:function(t){var e=this;if(t.content=this.$refs.flyaway,this.$markerPromise)return delete t.position,this.$markerPromise.then((function(t){return e.$markerObject=t,t}))},methods:{_openInfoWindow:function(){this.opened?null!==this.$markerObject?this.$infoWindowObject.open(this.$map,this.$markerObject):this.$infoWindowObject.open(this.$map):this.$infoWindowObject.close()}},afterCreate:function(){var t=this;this._openInfoWindow(),this.$watch("opened",(function(){t._openInfoWindow()}))}})},8336:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=function(t){var e=t.mappedProps,n=t.name,r=t.ctr,o=t.ctrArgs,c=t.events,l=t.beforeCreate,m=t.afterCreate,v=t.props,y=d(t,["mappedProps","name","ctr","ctrArgs","events","beforeCreate","afterCreate","props"]),_="$"+n+"Promise",b="$"+n+"Object";return p(!(y.props instanceof Array),"`props` should be an object, not Array"),i({},"undefined"!==typeof GENERATE_DOC?{$vgmOptions:t}:{},{mixins:[u.default],props:i({},v,g(e)),render:function(){return""},provide:function(){var t=this,n=this.$mapPromise.then((function(n){t.$map=n;var r=i({},t.options,{map:n},(0,a.getPropsValues)(t,e));if(delete r.options,l){var o=l.bind(t)(r);if(o instanceof Promise)return o.then((function(){return{options:r}}))}return{options:r}})).then((function(n){var i,u=n.options,l=r();return t[b]=o?new((i=Function.prototype.bind).call.apply(i,[l,null].concat(f(o(u,(0,a.getPropsValues)(t,v||{})))))):new l(u),(0,a.bindProps)(t,t[b],e),(0,s.default)(t,t[b],c),m&&m.bind(t)(t[b]),t[b]}));return this[_]=n,h({},_,n)},destroyed:function(){this[b]&&this[b].setMap&&this[b].setMap(null)}},y)},e.mappedPropsToVueProps=g;var o=n(8636),s=l(o),a=n(8179),c=n(9859),u=l(c);function l(t){return t&&t.__esModule?t:{default:t}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function d(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function p(t,e){if(!t)throw new Error(e)}function g(t){return Object.entries(t).map((function(t){var e=r(t,2),n=e[0],i=e[1],o={};return"type"in i&&(o.type=i.type),"default"in i&&(o.default=i.default),"required"in i&&(o.required=i.required),[n,o]})).reduce((function(t,e){var n=r(e,2),i=n[0],o=n[1];return t[i]=o,t}),{})}},9859:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={inject:{$mapPromise:{default:"abcdef"}},provide:function(){var t=this;return this.$mapPromise.then((function(e){t.$map=e})),{}}}},7626:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(8636),o=p(i),s=n(8179),a=n(4062),c=p(a),u=n(7777),l=p(u),h=n(7382),f=p(h),d=n(8336);function p(t){return t&&t.__esModule?t:{default:t}}var g={center:{required:!0,twoWay:!0,type:Object,noBind:!0},zoom:{required:!1,twoWay:!0,type:Number,noBind:!0},heading:{type:Number,twoWay:!0},mapTypeId:{twoWay:!0,type:String},tilt:{twoWay:!0,type:Number},options:{type:Object,default:function(){return{}}}},m=["bounds_changed","click","dblclick","drag","dragend","dragstart","idle","mousemove","mouseout","mouseover","resize","rightclick","tilesloaded"],v=["panBy","panTo","panToBounds","fitBounds"].reduce((function(t,e){return t[e]=function(){this.$mapObject&&this.$mapObject[e].apply(this.$mapObject,arguments)},t}),{}),y={resize:function(){this.$mapObject&&google.maps.event.trigger(this.$mapObject,"resize")},resizePreserveCenter:function(){if(this.$mapObject){var t=this.$mapObject.getCenter();google.maps.event.trigger(this.$mapObject,"resize"),this.$mapObject.setCenter(t)}},_resizeCallback:function(){this.resizePreserveCenter()}};e["default"]={mixins:[c.default],props:(0,d.mappedPropsToVueProps)(g),provide:function(){var t=this;return this.$mapPromise=new Promise((function(e,n){t.$mapPromiseDeferred={resolve:e,reject:n}})),{$mapPromise:this.$mapPromise}},computed:{finalLat:function(){return this.center&&"function"===typeof this.center.lat?this.center.lat():this.center.lat},finalLng:function(){return this.center&&"function"===typeof this.center.lng?this.center.lng():this.center.lng},finalLatLng:function(){return{lat:this.finalLat,lng:this.finalLng}}},watch:{zoom:function(t){this.$mapObject&&this.$mapObject.setZoom(t)}},mounted:function(){var t=this;return this.$gmapApiPromiseLazy().then((function(){var e=t.$refs["vue-map"],n=r({},t.options,(0,s.getPropsValues)(t,g));return delete n.options,t.$mapObject=new google.maps.Map(e,n),(0,s.bindProps)(t,t.$mapObject,g),(0,o.default)(t,t.$mapObject,m),(0,l.default)((function(e,n,r){t.$mapObject.addListener("center_changed",(function(){r()&&t.$emit("center_changed",t.$mapObject.getCenter()),n()})),(0,f.default)(t,["finalLat","finalLng"],(function(){e(),t.$mapObject.setCenter(t.finalLatLng)}))})),t.$mapObject.addListener("zoom_changed",(function(){t.$emit("zoom_changed",t.$mapObject.getZoom())})),t.$mapObject.addListener("bounds_changed",(function(){t.$emit("bounds_changed",t.$mapObject.getBounds())})),t.$mapPromiseDeferred.resolve(t.$mapObject),t.$mapObject})).catch((function(t){throw t}))},methods:r({},y,v)}},3576:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8336),i=o(r);function o(t){return t&&t.__esModule?t:{default:t}}var s={animation:{twoWay:!0,type:Number},attribution:{type:Object},clickable:{type:Boolean,twoWay:!0,default:!0},cursor:{type:String,twoWay:!0},draggable:{type:Boolean,twoWay:!0,default:!1},icon:{twoWay:!0},label:{},opacity:{type:Number,default:1},options:{type:Object},place:{type:Object},position:{type:Object,twoWay:!0},shape:{type:Object,twoWay:!0},title:{type:String,twoWay:!0},zIndex:{type:Number,twoWay:!0},visible:{twoWay:!0,default:!0}},a=["click","rightclick","dblclick","drag","dragstart","dragend","mouseup","mousedown","mouseover","mouseout"];e["default"]=(0,i.default)({mappedProps:s,events:a,name:"marker",ctr:function(){return google.maps.Marker},inject:{$clusterPromise:{default:null}},render:function(t){return this.$slots.default&&0!==this.$slots.default.length?1===this.$slots.default.length?this.$slots.default[0]:t("div",this.$slots.default):""},destroyed:function(){this.$markerObject&&(this.$clusterObject?this.$clusterObject.removeMarker(this.$markerObject,!0):this.$markerObject.setMap(null))},beforeCreate:function(t){return this.$clusterPromise&&(t.map=null),this.$clusterPromise},afterCreate:function(t){var e=this;this.$clusterPromise&&this.$clusterPromise.then((function(n){n.addMarker(t),e.$clusterObject=n}))}})},2587:function(t,e,n){"use strict";Object.defineProperty(e,"X",{value:!0});var r=n(8179),i=n(3166),o=s(i);function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var c={bounds:{type:Object},defaultPlace:{type:String,default:""},componentRestrictions:{type:Object,default:null},types:{type:Array,default:function(){return[]}},placeholder:{required:!1,type:String},className:{required:!1,type:String},label:{required:!1,type:String,default:null},selectFirstOnEnter:{require:!1,type:Boolean,default:!1}};e.Z={mounted:function(){var t=this,e=this.$refs.input;e.value=this.defaultPlace,this.$watch("defaultPlace",(function(){e.value=t.defaultPlace})),this.$gmapApiPromiseLazy().then((function(){var e=(0,r.getPropsValues)(t,c);if(t.selectFirstOnEnter&&(0,o.default)(t.$refs.input),"function"!==typeof google.maps.places.Autocomplete)throw new Error("google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?");t.autoCompleter=new google.maps.places.Autocomplete(t.$refs.input,e);c.placeholder,c.place,c.defaultPlace,c.className,c.label,c.selectFirstOnEnter;var n=a(c,["placeholder","place","defaultPlace","className","label","selectFirstOnEnter"]);(0,r.bindProps)(t,t.autoCompleter,n),t.autoCompleter.addListener("place_changed",(function(){t.$emit("place_changed",t.autoCompleter.getPlace())}))}))},created:function(){console.warn("The PlaceInput class is deprecated! Please consider using the Autocomplete input instead")},props:c}},890:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(8336),o=s(i);function s(t){return t&&t.__esModule?t:{default:t}}var a={draggable:{type:Boolean},editable:{type:Boolean},options:{type:Object},path:{type:Array,twoWay:!0,noBind:!0},paths:{type:Array,twoWay:!0,noBind:!0}},c=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];e["default"]=(0,o.default)({props:{deepWatch:{type:Boolean,default:!1}},events:c,mappedProps:a,name:"polygon",ctr:function(){return google.maps.Polygon},beforeCreate:function(t){t.path||delete t.path,t.paths||delete t.paths},afterCreate:function(t){var e=this,n=function(){};this.$watch("paths",(function(i){if(i){n(),t.setPaths(i);for(var o=function(){e.$emit("paths_changed",t.getPaths())},s=[],a=t.getPaths(),c=0;c<a.getLength();c++){var u=a.getAt(c);s.push([u,u.addListener("insert_at",o)]),s.push([u,u.addListener("remove_at",o)]),s.push([u,u.addListener("set_at",o)])}s.push([a,a.addListener("insert_at",o)]),s.push([a,a.addListener("remove_at",o)]),s.push([a,a.addListener("set_at",o)]),n=function(){s.map((function(t){var e=r(t,2),n=(e[0],e[1]);return google.maps.event.removeListener(n)}))}}}),{deep:this.deepWatch,immediate:!0}),this.$watch("path",(function(i){if(i){n(),t.setPaths(i);var o=t.getPath(),s=[],a=function(){e.$emit("path_changed",t.getPath())};s.push([o,o.addListener("insert_at",a)]),s.push([o,o.addListener("remove_at",a)]),s.push([o,o.addListener("set_at",a)]),n=function(){s.map((function(t){var e=r(t,2),n=(e[0],e[1]);return google.maps.event.removeListener(n)}))}}}),{deep:this.deepWatch,immediate:!0})}})},9562:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(8336),o=s(i);function s(t){return t&&t.__esModule?t:{default:t}}var a={draggable:{type:Boolean},editable:{type:Boolean},options:{twoWay:!1,type:Object},path:{type:Array,twoWay:!0}},c=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];e["default"]=(0,o.default)({mappedProps:a,props:{deepWatch:{type:Boolean,default:!1}},events:c,name:"polyline",ctr:function(){return google.maps.Polyline},afterCreate:function(){var t=this,e=function(){};this.$watch("path",(function(n){if(n){e(),t.$polylineObject.setPath(n);var i=t.$polylineObject.getPath(),o=[],s=function(){t.$emit("path_changed",t.$polylineObject.getPath())};o.push([i,i.addListener("insert_at",s)]),o.push([i,i.addListener("remove_at",s)]),o.push([i,i.addListener("set_at",s)]),e=function(){o.map((function(t){var e=r(t,2),n=(e[0],e[1]);return google.maps.event.removeListener(n)}))}}}),{deep:this.deepWatch,immediate:!0})}})},9605:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8336),i=o(r);function o(t){return t&&t.__esModule?t:{default:t}}var s={bounds:{type:Object,twoWay:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},options:{type:Object,twoWay:!1}},a=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];e["default"]=(0,i.default)({mappedProps:s,name:"rectangle",ctr:function(){return google.maps.Rectangle},events:a})},19:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(8636),o=p(i),s=n(8179),a=n(4062),c=p(a),u=n(7777),l=p(u),h=n(7382),f=p(h),d=n(8336);function p(t){return t&&t.__esModule?t:{default:t}}var g={zoom:{twoWay:!0,type:Number},pov:{twoWay:!0,type:Object,trackProperties:["pitch","heading"]},position:{twoWay:!0,type:Object,noBind:!0},pano:{twoWay:!0,type:String},motionTracking:{twoWay:!1,type:Boolean},visible:{twoWay:!0,type:Boolean,default:!0},options:{twoWay:!1,type:Object,default:function(){return{}}}},m=["closeclick","status_changed"];e["default"]={mixins:[c.default],props:(0,d.mappedPropsToVueProps)(g),replace:!1,methods:{resize:function(){this.$panoObject&&google.maps.event.trigger(this.$panoObject,"resize")}},provide:function(){var t=this,e=new Promise((function(e,n){t.$panoPromiseDeferred={resolve:e,reject:n}}));return{$panoPromise:e,$mapPromise:e}},computed:{finalLat:function(){return this.position&&"function"===typeof this.position.lat?this.position.lat():this.position.lat},finalLng:function(){return this.position&&"function"===typeof this.position.lng?this.position.lng():this.position.lng},finalLatLng:function(){return{lat:this.finalLat,lng:this.finalLng}}},watch:{zoom:function(t){this.$panoObject&&this.$panoObject.setZoom(t)}},mounted:function(){var t=this;return this.$gmapApiPromiseLazy().then((function(){var e=t.$refs["vue-street-view-pano"],n=r({},t.options,(0,s.getPropsValues)(t,g));return delete n.options,t.$panoObject=new google.maps.StreetViewPanorama(e,n),(0,s.bindProps)(t,t.$panoObject,g),(0,o.default)(t,t.$panoObject,m),(0,l.default)((function(e,n,r){e(),t.$panoObject.addListener("position_changed",(function(){r()&&t.$emit("position_changed",t.$panoObject.getPosition()),n()})),(0,f.default)(t,["finalLat","finalLng"],(function(){e(),t.$panoObject.setPosition(t.finalLatLng)}))})),t.$panoPromiseDeferred.resolve(t.$panoObject),t.$panoPromise})).catch((function(t){throw t}))}}},6292:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StreetViewPanorama=e.MountableMixin=e.Autocomplete=e.MapElementFactory=e.MapElementMixin=e.PlaceInput=e.Map=e.InfoWindow=e.Rectangle=e.Cluster=e.Circle=e.Polygon=e.Polyline=e.Marker=e.loadGmapApi=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.install=M,e.gmapApi=F;var i=n(7009),o=N(i),s=n(6922),a=n(3576),c=N(a),u=n(9562),l=N(u),h=n(890),f=N(h),d=n(4001),p=N(d),g=n(9605),m=N(g),v=n(296),y=N(v),_=n(6159),b=N(_),w=n(1806),E=N(w),S=n(5852),T=N(S),I=n(8628),C=N(I),O=n(9859),A=N(O),k=n(8336),x=N(k),R=n(4062),P=N(R);function N(t){return t&&t.__esModule?t:{default:t}}var D=void 0,L=null;function M(t,e){e=r({installComponents:!0,autobindAllEvents:!1},e),L=new t({data:{gmapApi:null}});var n=new t,i=j(e);t.mixin({created:function(){this.$gmapDefaultResizeBus=n,this.$gmapOptions=e,this.$gmapApiPromiseLazy=i}}),t.$gmapDefaultResizeBus=n,t.$gmapApiPromiseLazy=i,e.installComponents&&(t.component("GmapMap",b.default),t.component("GmapMarker",c.default),t.component("GmapInfoWindow",y.default),t.component("GmapPolyline",l.default),t.component("GmapPolygon",f.default),t.component("GmapCircle",p.default),t.component("GmapRectangle",m.default),t.component("GmapAutocomplete",C.default),t.component("GmapPlaceInput",T.default),t.component("GmapStreetViewPanorama",E.default))}function j(t){function e(){return L.gmapApi={},window.google}if(t.load)return(0,o.default)((function(){return"undefined"===typeof window?new Promise((function(){})).then(e):new Promise((function(e,n){try{window["vueGoogleMapsInit"]=e,(0,s.loadGmapApi)(t.load,t.loadCn)}catch(r){n(r)}})).then(e)}));var n=new Promise((function(t){"undefined"!==typeof window&&(window["vueGoogleMapsInit"]=t)})).then(e);return(0,o.default)((function(){return n}))}function F(){return L.gmapApi&&window.google}e.loadGmapApi=s.loadGmapApi,e.Marker=c.default,e.Polyline=l.default,e.Polygon=f.default,e.Circle=p.default,e.Cluster=D,e.Rectangle=m.default,e.InfoWindow=y.default,e.Map=b.default,e.PlaceInput=T.default,e.MapElementMixin=A.default,e.MapElementFactory=x.default,e.Autocomplete=C.default,e.MountableMixin=P.default,e.StreetViewPanorama=E.default},6922:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=!1;e.loadGmapApi=function(t,e){if("undefined"!==typeof document){if(r)throw new Error("You already started the loading of google maps");r=!0;var i=document.createElement("SCRIPT");if("object"!==("undefined"===typeof t?"undefined":n(t)))throw new Error("options should  be an object");Array.prototype.isPrototypeOf(t.libraries)&&(t.libraries=t.libraries.join(",")),t["callback"]="vueGoogleMapsInit";var o="https://maps.googleapis.com/";"boolean"===typeof e&&!0===e&&(o="https://maps.google.cn/");var s=o+"maps/api/js?"+Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");i.setAttribute("src",s),i.setAttribute("async",""),i.setAttribute("defer",""),document.head.appendChild(i)}}},7777:function(t,e){"use strict";function n(t){var e=0;t((function(){e+=1}),(function(){e=Math.max(0,e-1)}),(function(){return 0===e}))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},7382:function(t,e){"use strict";function n(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=!1;function o(){i||(i=!0,t.$nextTick((function(){i=!1,n()})))}var s=!0,a=!1,c=void 0;try{for(var u,l=e[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){var h=u.value;t.$watch(h,o,{immediate:r})}}catch(f){a=!0,c=f}finally{try{!s&&l.return&&l.return()}finally{if(a)throw c}}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},8636:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,n){var r=function(n){(t.$gmapOptions.autobindAllEvents||t.$listeners[n])&&e.addListener(n,(function(e){t.$emit(n,e)}))},i=!0,o=!1,s=void 0;try{for(var a,c=n[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var u=a.value;r(u)}}catch(l){o=!0,s=l}finally{try{!i&&c.return&&c.return()}finally{if(o)throw s}}}},8179:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPropsValues=a,e.bindProps=c;var r=n(7382),i=o(r);function o(t){return t&&t.__esModule?t:{default:t}}function s(t){return t.charAt(0).toUpperCase()+t.slice(1)}function a(t,e){return Object.keys(e).reduce((function(e,n){return void 0!==t[n]&&(e[n]=t[n]),e}),{})}function c(t,e,n){var r=function(r){var o=n[r],a=o.twoWay,c=o.type,u=o.trackProperties,l=o.noBind;if(l)return"continue";var h="set"+s(r),f="get"+s(r),d=r.toLowerCase()+"_changed",p=t[r];if("undefined"===typeof e[h])throw new Error(h+" is not a method of (the Maps object corresponding to) "+t.$options._componentTag);c===Object&&u?(0,i.default)(t,u.map((function(t){return r+"."+t})),(function(){e[h](t[r])}),void 0!==t[r]):t.$watch(r,(function(){var n=t[r];e[h](n)}),{immediate:"undefined"!==typeof p,deep:c===Object}),a&&(t.$gmapOptions.autobindAllEvents||t.$listeners[d])&&e.addListener(d,(function(){t.$emit(d,e[f]())}))};for(var o in n)r(o)}},7009:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=!1,n=void 0;return function(){return e||(e=!0,n=t()),n}}},4062:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["resizeBus"],data:function(){return{_actualResizeBus:null}},created:function(){"undefined"===typeof this.resizeBus?this.$data._actualResizeBus=this.$gmapDefaultResizeBus:this.$data._actualResizeBus=this.resizeBus},methods:{_resizeCallback:function(){this.resize()},_delayedResizeCallback:function(){var t=this;this.$nextTick((function(){return t._resizeCallback()}))}},watch:{resizeBus:function(t){this.$data._actualResizeBus=t},"$data._actualResizeBus":function(t,e){e&&e.$off("resize",this._delayedResizeCallback),t&&t.$on("resize",this._delayedResizeCallback)}},destroyed:function(){this.$data._actualResizeBus&&this.$data._actualResizeBus.$off("resize",this._delayedResizeCallback)}}},3166:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=t.addEventListener?t.addEventListener:t.attachEvent;function n(n,r){if("keydown"===n){var i=r;r=function(e){var n=document.getElementsByClassName("pac-item-selected").length>0;if(13===e.which&&!n){var r=document.createEvent("Event");r.keyCode=40,r.which=40,i.apply(t,[r])}i.apply(t,[e])}}e.apply(t,[n,r])}t.addEventListener=n,t.attachEvent=n}},144:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Xr}});
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({}),i=Array.isArray;function o(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function d(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function g(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function m(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||d(t)&&t.toString===f?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var b=_("key,ref,slot,slot-scope,is");function w(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var E=Object.prototype.hasOwnProperty;function S(t,e){return E.call(t,e)}function T(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var I=/-(\w)/g,C=T((function(t){return t.replace(I,(function(t,e){return e?e.toUpperCase():""}))})),O=T((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),A=/\B([A-Z])/g,k=T((function(t){return t.replace(A,"-$1").toLowerCase()}));function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function R(t,e){return t.bind(e)}var P=Function.prototype.bind?R:x;function N(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function D(t,e){for(var n in e)t[n]=e[n];return t}function L(t){for(var e={},n=0;n<t.length;n++)t[n]&&D(e,t[n]);return e}function M(t,e,n){}var j=function(t,e,n){return!1},F=function(t){return t};function U(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return U(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return U(t[n],e[n])}))}catch(c){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(U(t[n],e))return n;return-1}function V(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function B(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var z="data-server-rendered",q=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:M,parsePlatformTagName:F,mustUseProp:j,async:!0,_lifecycleHooks:H},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(G.source,".$_\\d]"));function J(t){if(!X.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Y="__proto__"in{},Z="undefined"!==typeof window,tt=Z&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var it=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var ot,st=tt&&tt.match(/firefox\/(\d+)/),at={}.watch,ct=!1;if(Z)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){ct=!0}}),window.addEventListener("test-passive",null,ut)}catch(Js){}var lt=function(){return void 0===ot&&(ot=!Z&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),ot},ht=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ft(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,pt="undefined"!==typeof Symbol&&ft(Symbol)&&"undefined"!==typeof Reflect&&ft(Reflect.ownKeys);dt="undefined"!==typeof Set&&ft(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var gt=null;function mt(t){void 0===t&&(t=null),t||gt&&gt._scope.off(),gt=t,t&&t._scope.on()}var vt=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function _t(t){return new vt(void 0,void 0,void 0,String(t))}function bt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var wt=0,Et=[],St=function(){for(var t=0;t<Et.length;t++){var e=Et[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Et.length=0},Tt=function(){function t(){this._pending=!1,this.id=wt++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Et.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();Tt.target=null;var It=[];function Ct(t){It.push(t),Tt.target=t}function Ot(){It.pop(),Tt.target=It[It.length-1]}var At=Array.prototype,kt=Object.create(At),xt=["push","pop","shift","unshift","splice","sort","reverse"];xt.forEach((function(t){var e=At[t];Q(kt,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Rt=Object.getOwnPropertyNames(kt),Pt={},Nt=!0;function Dt(t){Nt=t}var Lt={notify:M,depend:M,addSub:M,removeSub:M},Mt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Lt:new Tt,this.vmCount=0,Q(t,"__ob__",this),i(t)){if(!n)if(Y)t.__proto__=kt;else for(var r=0,o=Rt.length;r<o;r++){var s=Rt[r];Q(t,s,kt[s])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){s=a[r];Ft(t,s,Pt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)jt(t[e],!1,this.mock)},t}();function jt(t,e,n){return t&&S(t,"__ob__")&&t.__ob__ instanceof Mt?t.__ob__:!Nt||!n&&lt()||!i(t)&&!d(t)||!Object.isExtensible(t)||t.__v_skip||Ht(t)||t instanceof vt?void 0:new Mt(t,e,n)}function Ft(t,e,n,r,o,s){var a=new Tt,c=Object.getOwnPropertyDescriptor(t,e);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==Pt&&2!==arguments.length||(n=t[e]);var h=!o&&jt(n,!1,s);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return Tt.target&&(a.depend(),h&&(h.dep.depend(),i(e)&&Vt(e))),Ht(e)&&!o?e.value:e},set:function(e){var r=u?u.call(t):n;if(B(r,e)){if(l)l.call(t,e);else{if(u)return;if(!o&&Ht(r)&&!Ht(e))return void(r.value=e);n=e}h=!o&&jt(e,!1,s),a.notify()}}}),a}}function Ut(t,e,n){if(!qt(t)){var r=t.__ob__;return i(t)&&g(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&jt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?(Ft(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function $t(t,e){if(i(t)&&g(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||qt(t)||S(t,e)&&(delete t[e],n&&n.dep.notify())}}function Vt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&Vt(e)}function Bt(t){return zt(t,!0),Q(t,"__v_isShallow",!0),t}function zt(t,e){if(!qt(t)){jt(t,e,lt());0}}function qt(t){return!(!t||!t.__v_isReadonly)}function Ht(t){return!(!t||!0!==t.__v_isRef)}function Wt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Ht(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];Ht(r)&&!Ht(t)?r.value=t:e[n]=t}})}var Gt="watcher";"".concat(Gt," callback"),"".concat(Gt," getter"),"".concat(Gt," cleanup");var Kt;var Qt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!t&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Kt;try{return Kt=this,t()}finally{Kt=e}}else 0},t.prototype.on=function(){Kt=this},t.prototype.off=function(){Kt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Xt(t,e){void 0===e&&(e=Kt),e&&e.active&&e.effects.push(t)}function Jt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Yt=T((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function Zt(t,e){function n(){var t=n.fns;if(!i(t))return Qe(t,null,arguments,e,"v-on handler");for(var r=t.slice(),o=0;o<r.length;o++)Qe(r[o],null,arguments,e,"v-on handler")}return n.fns=t,n}function te(t,e,n,r,i,s){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=Yt(c),o(u)||(o(l)?(o(u.fns)&&(u=t[c]=Zt(u,s)),a(h.once)&&(u=t[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)o(t[c])&&(h=Yt(c),r(h.name,e[c],h.capture))}function ee(t,e,n){var r;t instanceof vt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function c(){n.apply(this,arguments),w(r.fns,c)}o(i)?r=Zt([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Zt([i,c]),r.merged=!0,t[e]=r}function ne(t,e,n){var r=e.options.props;if(!o(r)){var i={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var u in r){var l=k(u);re(i,c,u,l,!0)||re(i,a,u,l,!1)}return i}}function re(t,e,n,r,i){if(s(e)){if(S(e,n))return t[n]=e[n],i||delete e[n],!0;if(S(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ie(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function oe(t){return u(t)?[_t(t)]:i(t)?ae(t):void 0}function se(t){return s(t)&&s(t.text)&&c(t.isComment)}function ae(t,e){var n,r,c,l,h=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ae(r,"".concat(e||"","_").concat(n)),se(r[0])&&se(l)&&(h[c]=_t(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?se(l)?h[c]=_t(l.text+r):""!==r&&h.push(_t(r)):se(r)&&se(l)?h[c]=_t(l.text+r.text):(a(t._isVList)&&s(r.tag)&&o(r.key)&&s(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function ce(t,e){var n,r,o,a,c=null;if(i(t)||"string"===typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(pt&&t[Symbol.iterator]){c=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)c.push(e(l.value,c.length)),l=u.next()}else for(o=Object.keys(t),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=e(t[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function ue(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=D(D({},r),n)),i=o(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function le(t){return Sr(this.$options,"filters",t,!0)||F}function he(t,e){return i(t)?-1===t.indexOf(e):t!==e}function fe(t,e,n,r,i){var o=W.keyCodes[e]||n;return i&&r&&!W.keyCodes[e]?he(i,r):o?he(o,t):r?k(r)!==e:void 0===t}function de(t,e,n,r,o){if(n)if(h(n)){i(n)&&(n=L(n));var s=void 0,a=function(i){if("class"===i||"style"===i||b(i))s=t;else{var a=t.attrs&&t.attrs.type;s=r||W.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=C(i),u=k(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=t.on||(t.on={});l["update:".concat(i)]=function(t){n[i]=t}}};for(var c in n)a(c)}else;return t}function pe(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),me(r,"__static__".concat(t),!1)),r}function ge(t,e,n){return me(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function me(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&ve(t[r],"".concat(e,"_").concat(r),n);else ve(t,e,n)}function ve(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ye(t,e){if(e)if(d(e)){var n=t.on=t.on?D({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function _e(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var s=t[o];i(s)?_e(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function be(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function we(t,e){return"string"===typeof t?e+t:t}function Ee(t){t._o=ge,t._n=y,t._s=v,t._l=ce,t._t=ue,t._q=U,t._i=$,t._m=pe,t._f=le,t._k=fe,t._b=de,t._v=_t,t._e=yt,t._u=_e,t._g=ye,t._d=be,t._p=we}function Se(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Te)&&delete n[u];return n}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ie(t){return t.isComment&&t.asyncFactory}function Ce(t,e,n,i){var o,s=Object.keys(n).length>0,a=e?!!e.$stable:!s,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},e)e[u]&&"$"!==u[0]&&(o[u]=Oe(t,n,u,e[u]))}else o={};for(var l in n)l in o||(o[l]=Ae(n,l));return e&&Object.isExtensible(e)&&(e._normalized=o),Q(o,"$stable",a),Q(o,"$key",c),Q(o,"$hasNormal",s),o}function Oe(t,e,n,r){var o=function(){var e=gt;mt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:oe(n);var o=n&&n[0];return mt(e),n&&(!o||1===n.length&&o.isComment&&!Ie(o))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:o,enumerable:!0,configurable:!0}),o}function Ae(t,e){return function(){return t[e]}}function ke(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=xe(t);mt(t),Ct();var i=Qe(n,null,[t._props||Bt({}),r],t,"setup");if(Ot(),mt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&Wt(o,i,s)}else for(var s in i)K(s)||Wt(t,i,s);else 0}}function xe(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};Q(e,"_v_attr_proxy",!0),Re(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};Re(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Ne(t)},emit:P(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Wt(t,e,n)}))}}}function Re(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,Pe(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function Pe(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Ne(t){return t._slotsProxy||De(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function De(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Le(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Se(e._renderChildren,i),t.$scopedSlots=n?Ce(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return qe(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return qe(t,e,n,r,i,!0)};var o=n&&n.data;Ft(t,"$attrs",o&&o.attrs||r,null,!0),Ft(t,"$listeners",e._parentListeners||r,null,!0)}var Me=null;function je(t){Ee(t.prototype),t.prototype.$nextTick=function(t){return cn(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&e._isMounted&&(e.$scopedSlots=Ce(e.$parent,o.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&De(e._slotsProxy,e.$scopedSlots)),e.$vnode=o;try{mt(e),Me=e,t=r.call(e._renderProxy,e.$createElement)}catch(Js){Ke(Js,e,"render"),t=e._vnode}finally{Me=null,mt()}return i(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=o,t}}function Fe(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Ue(t,e,n,r,i){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function $e(t,e){if(a(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=Me;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var r=t.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=V((function(n){t.resolved=Fe(n,e),i?r.length=0:l(!0)})),d=V((function(e){s(t.errorComp)&&(t.error=!0,l(!0))})),p=t(f,d);return h(p)&&(m(p)?o(t.resolved)&&p.then(f,d):m(p.component)&&(p.component.then(f,d),s(p.error)&&(t.errorComp=Fe(p.error,e)),s(p.loading)&&(t.loadingComp=Fe(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,l(!1))}),p.delay||200)),s(p.timeout)&&(u=setTimeout((function(){u=null,o(t.resolved)&&d(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function Ve(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||Ie(n)))return n}}var Be=1,ze=2;function qe(t,e,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=ze),He(t,e,n,r,o)}function He(t,e,n,r,o){if(s(n)&&s(n.__ob__))return yt();if(s(n)&&s(n.is)&&(e=n.is),!e)return yt();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===ze?r=oe(r):o===Be&&(r=ie(r)),"string"===typeof e){var u=void 0;c=t.$vnode&&t.$vnode.ns||W.getTagNamespace(e),a=W.isReservedTag(e)?new vt(W.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!s(u=Sr(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):sr(u,n,t,r,e)}else a=sr(e,n,t,r);return i(a)?a:s(a)?(s(c)&&We(a,c),s(n)&&Ge(n),a):yt()}function We(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var r=0,i=t.children.length;r<i;r++){var c=t.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&We(c,e,n)}}function Ge(t){h(t.style)&&dn(t.style),h(t.class)&&dn(t.class)}function Ke(t,e,n){Ct();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Js){Xe(Js,r,"errorCaptured hook")}}}Xe(t,e,n)}finally{Ot()}}function Qe(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&m(o)&&!o._handled&&(o.catch((function(t){return Ke(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Js){Ke(Js,r,i)}return o}function Xe(t,e,n){if(W.errorHandler)try{return W.errorHandler.call(null,t,e,n)}catch(Js){Js!==t&&Je(Js,null,"config.errorHandler")}Je(t,e,n)}function Je(t,e,n){if(!Z||"undefined"===typeof console)throw t;console.error(t)}var Ye,Ze=!1,tn=[],en=!1;function nn(){en=!1;var t=tn.slice(0);tn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ft(Promise)){var rn=Promise.resolve();Ye=function(){rn.then(nn),it&&setTimeout(M)},Ze=!0}else if(et||"undefined"===typeof MutationObserver||!ft(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ye="undefined"!==typeof setImmediate&&ft(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var on=1,sn=new MutationObserver(nn),an=document.createTextNode(String(on));sn.observe(an,{characterData:!0}),Ye=function(){on=(on+1)%2,an.data=String(on)},Ze=!0}function cn(t,e){var n;if(tn.push((function(){if(t)try{t.call(e)}catch(Js){Ke(Js,e,"nextTick")}else n&&n(e)})),en||(en=!0,Ye()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function un(t){return function(e,n){if(void 0===n&&(n=gt),n)return ln(n,t,e)}}function ln(t,e,n){var r=t.$options;r[e]=gr(r[e],n)}un("beforeMount"),un("mounted"),un("beforeUpdate"),un("updated"),un("beforeDestroy"),un("destroyed"),un("activated"),un("deactivated"),un("serverPrefetch"),un("renderTracked"),un("renderTriggered"),un("errorCaptured");var hn="2.7.14";var fn=new dt;function dn(t){return pn(t,fn),fn.clear(),t}function pn(t,e){var n,r,o=i(t);if(!(!o&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(o){n=t.length;while(n--)pn(t[n],e)}else if(Ht(t))pn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)pn(t[r[n]],e)}}}var gn,mn=0,vn=function(){function t(t,e,n,r,i){Xt(this,Kt&&!Kt._vm?Kt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++mn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="",l(e)?this.getter=e:(this.getter=J(e),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;Ct(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Js){if(!this.user)throw Js;Ke(Js,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&dn(t),Ot(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Qn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Qe(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&w(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&En(t,e)}function _n(t,e){gn.$on(t,e)}function bn(t,e){gn.$off(t,e)}function wn(t,e){var n=gn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function En(t,e,n){gn=t,te(e,n||{},_n,bn,wn,t),gn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var o=0,s=t.length;o<s;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var s,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(s=a[c],s===e||s.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?N(n):n;for(var r=N(arguments,1),i='event handler for "'.concat(t,'"'),o=0,s=n.length;o<s;o++)Qe(n[o],e,r,e,i)}return e}}var Tn=null;function In(t){var e=Tn;return Tn=t,function(){Tn=e}}function Cn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function On(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=In(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Nn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||w(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Nn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function An(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=yt),Nn(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Nn(t,"beforeUpdate")}};new vn(t,r,M,i,!0),n=!1;var o=t._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==t.$vnode&&(t._isMounted=!0,Nn(t,"mounted")),t}function kn(t,e,n,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c),l=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o;var h=i.data.attrs||r;t._attrsProxy&&Re(t._attrsProxy,h,l.data&&l.data.attrs||r,t,"$attrs")&&(u=!0),t.$attrs=h,n=n||r;var f=t.$options._parentListeners;if(t._listenersProxy&&Re(t._listenersProxy,n,f||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,En(t,n,f),e&&t.$options.props){Dt(!1);for(var d=t._props,p=t.$options._propKeys||[],g=0;g<p.length;g++){var m=p[g],v=t.$options.props;d[m]=Tr(m,v,e,t)}Dt(!0),t.$options.propsData=e}u&&(t.$slots=Se(o,i.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Rn(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Rn(t.$children[n]);Nn(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Nn(t,"deactivated")}}function Nn(t,e,n,r){void 0===r&&(r=!0),Ct();var i=gt;r&&mt(t);var o=t.$options[e],s="".concat(e," hook");if(o)for(var a=0,c=o.length;a<c;a++)Qe(o[a],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&mt(i),Ot()}var Dn=[],Ln=[],Mn={},jn=!1,Fn=!1,Un=0;function $n(){Un=Dn.length=Ln.length=0,Mn={},jn=Fn=!1}var Vn=0,Bn=Date.now;if(Z&&!et){var zn=window.performance;zn&&"function"===typeof zn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return zn.now()})}var qn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Hn(){var t,e;for(Vn=Bn(),Fn=!0,Dn.sort(qn),Un=0;Un<Dn.length;Un++)t=Dn[Un],t.before&&t.before(),e=t.id,Mn[e]=null,t.run();var n=Ln.slice(),r=Dn.slice();$n(),Kn(n),Wn(r),St(),ht&&W.devtools&&ht.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Nn(r,"updated")}}function Gn(t){t._inactive=!1,Ln.push(t)}function Kn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Rn(t[e],!0)}function Qn(t){var e=t.id;if(null==Mn[e]&&(t!==Tt.target||!t.noRecurse)){if(Mn[e]=!0,Fn){var n=Dn.length-1;while(n>Un&&Dn[n].id>t.id)n--;Dn.splice(n+1,0,t)}else Dn.push(t);jn||(jn=!0,cn(Hn))}}function Xn(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=Jt(t),i=pt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Jn(t){var e=Yn(t.$options.inject,t);e&&(Dt(!1),Object.keys(e).forEach((function(n){Ft(t,n,e[n])})),Dt(!0))}function Yn(t,e){if(t){for(var n=Object.create(null),r=pt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=l(a)?a.call(e):a}else 0}}return n}}function Zn(t,e,n,o,s){var c,u=this,l=s.options;S(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(l._compiled),f=!h;this.data=t,this.props=e,this.children=n,this.parent=o,this.listeners=t.on||r,this.injections=Yn(l.inject,o),this.slots=function(){return u.$slots||Ce(o,t.scopedSlots,u.$slots=Se(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ce(o,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ce(o,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var s=qe(c,t,e,n,r,f);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(t,e,n,r){return qe(c,t,e,n,r,f)}}function tr(t,e,n,o,a){var c=t.options,u={},l=c.props;if(s(l))for(var h in l)u[h]=Tr(h,l,e||r);else s(n.attrs)&&nr(u,n.attrs),s(n.props)&&nr(u,n.props);var f=new Zn(n,u,a,o,t),d=c.render.call(null,f._c,f);if(d instanceof vt)return er(d,n,f.parent,c,f);if(i(d)){for(var p=oe(d)||[],g=new Array(p.length),m=0;m<p.length;m++)g[m]=er(p[m],n,f.parent,c,f);return g}}function er(t,e,n,r,i){var o=bt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function nr(t,e){for(var n in e)t[C(n)]=e[n]}function rr(t){return t.name||t.__name||t._componentTag}Ee(Zn.prototype);var ir={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;ir.prepatch(n,n)}else{var r=t.componentInstance=ar(t,Tn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;kn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Nn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Gn(n):Rn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},or=Object.keys(ir);function sr(t,e,n,r,i){if(!o(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(o(t.cid)&&(u=t,t=$e(u,c),void 0===t))return Ue(u,e,n,r,i);e=e||{},Kr(t),s(e.model)&&lr(t.options,e);var l=ne(e,t,i);if(a(t.options.functional))return tr(t,l,e,n,r);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}cr(e);var p=rr(t.options)||i,g=new vt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:f,tag:i,children:r},u);return g}}}function ar(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cr(t){for(var e=t.hook||(t.hook={}),n=0;n<or.length;n++){var r=or[n],i=e[r],o=ir[r];i===o||i&&i._merged||(e[r]=i?ur(o,i):o)}}function ur(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function lr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],c=e.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var hr=M,fr=W.optionMergeStrategies;function dr(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,o,s=pt?Reflect.ownKeys(e):Object.keys(e),a=0;a<s.length;a++)r=s[a],"__ob__"!==r&&(i=t[r],o=e[r],n&&S(t,r)?i!==o&&d(i)&&d(o)&&dr(i,o):Ut(t,r,o));return t}function pr(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?dr(r,i):i}:e?t?function(){return dr(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function gr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?mr(n):n}function mr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function vr(t,e,n,r){var i=Object.create(t||null);return e?D(i,e):i}fr.data=function(t,e,n){return n?pr(t,e,n):e&&"function"!==typeof e?t:pr(t,e)},H.forEach((function(t){fr[t]=gr})),q.forEach((function(t){fr[t+"s"]=vr})),fr.watch=function(t,e,n,r){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var s in D(o,t),e){var a=o[s],c=e[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},fr.props=fr.methods=fr.inject=fr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return D(i,t),e&&D(i,e),i},fr.provide=function(t,e){return t?function(){var n=Object.create(null);return dr(n,l(t)?t.call(this):t),e&&dr(n,l(e)?e.call(this):e,!1),n}:e};var yr=function(t,e){return void 0===e?t:e};function _r(t,e){var n=t.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=C(o),a[s]={type:null})}else if(d(n))for(var c in n)o=n[c],s=C(c),a[s]=d(o)?o:{type:o};else 0;t.props=a}}function br(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(d(n))for(var s in n){var a=n[s];r[s]=d(a)?D({from:s},a):{from:a}}else 0}}function wr(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}function Er(t,e,n){if(l(e)&&(e=e.options),_r(e,n),br(e,n),wr(e),!e._base&&(e.extends&&(t=Er(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Er(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)S(t,o)||a(o);function a(r){var i=fr[r]||yr;s[r]=i(t[r],e[r],n,r)}return s}function Sr(t,e,n,r){if("string"===typeof n){var i=t[e];if(S(i,n))return i[n];var o=C(n);if(S(i,o))return i[o];var s=O(o);if(S(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Tr(t,e,n,r){var i=e[t],o=!S(n,t),s=n[t],a=kr(Boolean,i.type);if(a>-1)if(o&&!S(i,"default"))s=!1;else if(""===s||s===k(t)){var c=kr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Ir(r,i,t);var u=Nt;Dt(!0),jt(s),Dt(u)}return s}function Ir(t,e,n){if(S(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:l(r)&&"Function"!==Or(e.type)?r.call(t):r}}var Cr=/^\s*function (\w+)/;function Or(t){var e=t&&t.toString().match(Cr);return e?e[1]:""}function Ar(t,e){return Or(t)===Or(e)}function kr(t,e){if(!i(e))return Ar(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Ar(e[n],t))return n;return-1}var xr={enumerable:!0,configurable:!0,get:M,set:M};function Rr(t,e,n){xr.get=function(){return this[e][n]},xr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,xr)}function Pr(t){var e=t.$options;if(e.props&&Nr(t,e.props),ke(t),e.methods&&Vr(t,e.methods),e.data)Dr(t);else{var n=jt(t._data={});n&&n.vmCount++}e.computed&&jr(t,e.computed),e.watch&&e.watch!==at&&Br(t,e.watch)}function Nr(t,e){var n=t.$options.propsData||{},r=t._props=Bt({}),i=t.$options._propKeys=[],o=!t.$parent;o||Dt(!1);var s=function(o){i.push(o);var s=Tr(o,e,n,t);Ft(r,o,s),o in t||Rr(t,"_props",o)};for(var a in e)s(a);Dt(!0)}function Dr(t){var e=t.$options.data;e=t._data=l(e)?Lr(e,t):e||{},d(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&S(r,o)||K(o)||Rr(t,"_data",o)}var s=jt(e);s&&s.vmCount++}function Lr(t,e){Ct();try{return t.call(e,e)}catch(Js){return Ke(Js,e,"data()"),{}}finally{Ot()}}var Mr={lazy:!0};function jr(t,e){var n=t._computedWatchers=Object.create(null),r=lt();for(var i in e){var o=e[i],s=l(o)?o:o.get;0,r||(n[i]=new vn(t,s||M,M,Mr)),i in t||Fr(t,i,o)}}function Fr(t,e,n){var r=!lt();l(n)?(xr.get=r?Ur(e):$r(n),xr.set=M):(xr.get=n.get?r&&!1!==n.cache?Ur(e):$r(n.get):M,xr.set=n.set||M),Object.defineProperty(t,e,xr)}function Ur(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Tt.target&&e.depend(),e.value}}function $r(t){return function(){return t.call(this,this)}}function Vr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?M:P(e[n],t)}function Br(t,e){for(var n in e){var r=e[n];if(i(r))for(var o=0;o<r.length;o++)zr(t,n,r[o]);else zr(t,n,r)}}function zr(t,e,n,r){return d(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function qr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ut,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var r=this;if(d(e))return zr(r,t,e,n);n=n||{},n.user=!0;var i=new vn(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Ct(),Qe(e,r,[i.value],r,o),Ot()}return function(){i.teardown()}}}var Hr=0;function Wr(t){t.prototype._init=function(t){var e=this;e._uid=Hr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Qt(!0),e._scope._vm=!0,t&&t._isComponent?Gr(e,t):e.$options=Er(Kr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Cn(e),yn(e),Le(e),Nn(e,"beforeCreate",void 0,!1),Jn(e),Pr(e),Xn(e),Nn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Gr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Kr(t){var e=t.options;if(t.super){var n=Kr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Qr(t);i&&D(t.extendOptions,i),e=t.options=Er(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Qr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Xr(t){this._init(t)}function Jr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=N(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}function Yr(t){t.mixin=function(t){return this.options=Er(this.options,t),this}}function Zr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=rr(t)||rr(n.options);var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Er(n.options,t),s["super"]=n,s.options.props&&ti(s),s.options.computed&&ei(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,q.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=D({},s.options),i[r]=s,s}}function ti(t){var e=t.options.props;for(var n in e)Rr(t.prototype,"_props",n)}function ei(t){var e=t.options.computed;for(var n in e)Fr(t.prototype,n,e[n])}function ni(t){q.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&d(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ri(t){return t&&(rr(t.Ctor.options)||t.tag)}function ii(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function oi(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&si(n,o,r,i)}}}function si(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,w(n,e)}Wr(Xr),qr(Xr),Sn(Xr),On(Xr),je(Xr);var ai=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:ai,exclude:ai,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:ri(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&si(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)si(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){oi(t,(function(t){return ii(e,t)}))})),this.$watch("exclude",(function(e){oi(t,(function(t){return!ii(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Ve(t),n=e&&e.componentOptions;if(n){var r=ri(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!ii(o,r))||s&&r&&ii(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,w(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},ui={KeepAlive:ci};function li(t){var e={get:function(){return W}};Object.defineProperty(t,"config",e),t.util={warn:hr,extend:D,mergeOptions:Er,defineReactive:Ft},t.set=Ut,t.delete=$t,t.nextTick=cn,t.observable=function(t){return jt(t),t},t.options=Object.create(null),q.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,D(t.options.components,ui),Jr(t),Yr(t),Zr(t),ni(t)}li(Xr),Object.defineProperty(Xr.prototype,"$isServer",{get:lt}),Object.defineProperty(Xr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Xr,"FunctionalRenderContext",{value:Zn}),Xr.version=hn;var hi=_("style,class"),fi=_("input,textarea,option,select,progress"),di=function(t,e,n){return"value"===n&&fi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},pi=_("contenteditable,draggable,spellcheck"),gi=_("events,caret,typing,plaintext-only"),mi=function(t,e){return wi(e)||"false"===e?"false":"contenteditable"===t&&gi(e)?e:"true"},vi=_("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),yi="http://www.w3.org/1999/xlink",_i=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},bi=function(t){return _i(t)?t.slice(6,t.length):""},wi=function(t){return null==t||!1===t};function Ei(t){var e=t.data,n=t,r=t;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Si(r.data,e));while(s(n=n.parent))n&&n.data&&(e=Si(e,n.data));return Ti(e.staticClass,e.class)}function Si(t,e){return{staticClass:Ii(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Ti(t,e){return s(t)||s(e)?Ii(t,Ci(e)):""}function Ii(t,e){return t?e?t+" "+e:t:e||""}function Ci(t){return Array.isArray(t)?Oi(t):h(t)?Ai(t):"string"===typeof t?t:""}function Oi(t){for(var e,n="",r=0,i=t.length;r<i;r++)s(e=Ci(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Ai(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ki={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},xi=_("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ri=_("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Pi=function(t){return xi(t)||Ri(t)};function Ni(t){return Ri(t)?"svg":"math"===t?"math":void 0}var Di=Object.create(null);function Li(t){if(!Z)return!0;if(Pi(t))return!1;if(t=t.toLowerCase(),null!=Di[t])return Di[t];var e=document.createElement(t);return t.indexOf("-")>-1?Di[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Di[t]=/HTMLUnknownElement/.test(e.toString())}var Mi=_("text,number,password,search,email,tel,url");function ji(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Fi(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Ui(t,e){return document.createElementNS(ki[t],e)}function $i(t){return document.createTextNode(t)}function Vi(t){return document.createComment(t)}function Bi(t,e,n){t.insertBefore(e,n)}function zi(t,e){t.removeChild(e)}function qi(t,e){t.appendChild(e)}function Hi(t){return t.parentNode}function Wi(t){return t.nextSibling}function Gi(t){return t.tagName}function Ki(t,e){t.textContent=e}function Qi(t,e){t.setAttribute(e,"")}var Xi=Object.freeze({__proto__:null,createElement:Fi,createElementNS:Ui,createTextNode:$i,createComment:Vi,insertBefore:Bi,removeChild:zi,appendChild:qi,parentNode:Hi,nextSibling:Wi,tagName:Gi,setTextContent:Ki,setStyleScope:Qi}),Ji={create:function(t,e){Yi(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Yi(t,!0),Yi(e))},destroy:function(t){Yi(t,!0)}};function Yi(t,e){var n=t.data.ref;if(s(n)){var r=t.context,o=t.componentInstance||t.elm,a=e?null:o,c=e?void 0:o;if(l(n))Qe(n,r,[a],r,"template ref function");else{var u=t.data.refInFor,h="string"===typeof n||"number"===typeof n,f=Ht(n),d=r.$refs;if(h||f)if(u){var p=h?d[n]:n.value;e?i(p)&&w(p,o):i(p)?p.includes(o)||p.push(o):h?(d[n]=[o],Zi(r,n,d[n])):n.value=[o]}else if(h){if(e&&d[n]!==o)return;d[n]=c,Zi(r,n,a)}else if(f){if(e&&n.value!==o)return;n.value=a}else 0}}}function Zi(t,e,n){var r=t._setupState;r&&S(r,e)&&(Ht(r[e])?r[e].value=n:r[e]=n)}var to=new vt("",{},[]),eo=["create","activate","update","remove","destroy"];function no(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&ro(t,e)||a(t.isAsyncPlaceholder)&&o(e.asyncFactory.error))}function ro(t,e){if("input"!==t.tag)return!0;var n,r=s(n=t.data)&&s(n=n.attrs)&&n.type,i=s(n=e.data)&&s(n=n.attrs)&&n.type;return r===i||Mi(r)&&Mi(i)}function io(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,s(i)&&(o[i]=r);return o}function oo(t){var e,n,r={},c=t.modules,l=t.nodeOps;for(e=0;e<eo.length;++e)for(r[eo[e]]=[],n=0;n<c.length;++n)s(c[n][eo[e]])&&r[eo[e]].push(c[n][eo[e]]);function h(t){return new vt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);s(e)&&l.removeChild(e,t)}function p(t,e,n,r,i,o,c){if(s(t.elm)&&s(o)&&(t=o[c]=bt(t)),t.isRootInsert=!i,!g(t,e,n,r)){var u=t.data,h=t.children,f=t.tag;s(f)?(t.elm=t.ns?l.createElementNS(t.ns,f):l.createElement(f,t),S(t),b(t,h,e),s(u)&&E(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,r)):(t.elm=l.createTextNode(t.text),y(n,t.elm,r))}}function g(t,e,n,r){var i=t.data;if(s(i)){var o=s(t.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(t,!1),s(t.componentInstance))return m(t,e),y(n,t.elm,r),a(o)&&v(t,e,n,r),!0}}function m(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(E(t,e),S(t)):(Yi(t),e.push(t))}function v(t,e,n,i){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](to,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){s(t)&&(s(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function b(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else u(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function E(t,n){for(var i=0;i<r.create.length;++i)r.create[i](to,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(to,t),s(e.insert)&&n.push(t))}function S(t){var e;if(s(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}s(e=Tn)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function T(t,e,n,r,i,o){for(;r<=i;++r)p(n[r],o,t,e,!1,n,r)}function I(t){var e,n,i=t.data;if(s(i))for(s(e=i.hook)&&s(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)I(t.children[n])}function C(t,e,n){for(;e<=n;++e){var r=t[e];s(r)&&(s(r.tag)?(O(r),I(r)):d(r.elm))}}function O(t,e){if(s(e)||s(t.data)){var n,i=r.remove.length+1;for(s(e)?e.listeners+=i:e=f(t.elm,i),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&O(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else d(t.elm)}function A(t,e,n,r,i){var a,c,u,h,f=0,d=0,g=e.length-1,m=e[0],v=e[g],y=n.length-1,_=n[0],b=n[y],w=!i;while(f<=g&&d<=y)o(m)?m=e[++f]:o(v)?v=e[--g]:no(m,_)?(x(m,_,r,n,d),m=e[++f],_=n[++d]):no(v,b)?(x(v,b,r,n,y),v=e[--g],b=n[--y]):no(m,b)?(x(m,b,r,n,y),w&&l.insertBefore(t,m.elm,l.nextSibling(v.elm)),m=e[++f],b=n[--y]):no(v,_)?(x(v,_,r,n,d),w&&l.insertBefore(t,v.elm,m.elm),v=e[--g],_=n[++d]):(o(a)&&(a=io(e,f,g)),c=s(_.key)?a[_.key]:k(_,e,f,g),o(c)?p(_,r,t,m.elm,!1,n,d):(u=e[c],no(u,_)?(x(u,_,r,n,d),e[c]=void 0,w&&l.insertBefore(t,u.elm,m.elm)):p(_,r,t,m.elm,!1,n,d)),_=n[++d]);f>g?(h=o(n[y+1])?null:n[y+1].elm,T(t,h,n,d,y,r)):d>y&&C(e,f,g)}function k(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(s(o)&&no(t,o))return i}}function x(t,e,n,i,c,u){if(t!==e){s(e.elm)&&s(i)&&(e=i[c]=bt(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?N(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;s(d)&&s(f=d.hook)&&s(f=f.prepatch)&&f(t,e);var p=t.children,g=e.children;if(s(d)&&w(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);s(f=d.hook)&&s(f=f.update)&&f(t,e)}o(e.text)?s(p)&&s(g)?p!==g&&A(h,p,g,n,u):s(g)?(s(t.text)&&l.setTextContent(h,""),T(h,null,g,0,g.length-1,n)):s(p)?C(p,0,p.length-1):s(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),s(d)&&s(f=d.hook)&&s(f=f.postpatch)&&f(t,e)}}}function R(t,e,n){if(a(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var P=_("attrs,class,staticClass,staticStyle,key");function N(t,e,n,r){var i,o=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(e,!0),s(i=e.componentInstance)))return m(e,n),!0;if(s(o)){if(s(u))if(t.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!N(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(s(c)){var d=!1;for(var p in c)if(!P(p)){d=!0,E(e,n);break}!d&&c["class"]&&dn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!o(e)){var c=!1,u=[];if(o(t))c=!0,p(e,u);else{var f=s(t.nodeType);if(!f&&no(t,e))x(t,e,u,null,null,i);else{if(f){if(1===t.nodeType&&t.hasAttribute(z)&&(t.removeAttribute(z),n=!0),a(n)&&N(t,e,u))return R(e,u,!0),t;t=h(t)}var d=t.elm,g=l.parentNode(d);if(p(e,u,d._leaveCb?null:g,l.nextSibling(d)),s(e.parent)){var m=e.parent,v=w(e);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=e.elm,v){for(var _=0;_<r.create.length;++_)r.create[_](to,m);var b=m.data.hook.insert;if(b.merged)for(var E=1;E<b.fns.length;E++)b.fns[E]()}else Yi(m);m=m.parent}}s(g)?C([t],0,0):s(t.tag)&&I(t)}}return R(e,u,c),e.elm}s(t)&&I(t)}}var so={create:ao,update:ao,destroy:function(t){ao(t,to)}};function ao(t,e){(t.data.directives||e.data.directives)&&co(t,e)}function co(t,e){var n,r,i,o=t===to,s=e===to,a=lo(t.data.directives,t.context),c=lo(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,fo(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(fo(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)fo(u[n],"inserted",e,t)};o?ee(e,"insert",h):h()}if(l.length&&ee(e,"postpatch",(function(){for(var n=0;n<l.length;n++)fo(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||fo(a[n],"unbind",t,t,s)}var uo=Object.create(null);function lo(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=uo),i[ho(r)]=r,e._setupState&&e._setupState.__sfc){var o=r.def||Sr(e,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Sr(e.$options,"directives",r.name,!0)}return i}function ho(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function fo(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Js){Ke(Js,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var po=[Ji,so];function go(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(t.data.attrs)||!o(e.data.attrs))){var r,i,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=D({},h)),h)i=h[r],c=l[r],c!==i&&mo(u,r,i,e.data.pre);for(r in(et||rt)&&h.value!==l.value&&mo(u,"value",h.value),l)o(h[r])&&(_i(r)?u.removeAttributeNS(yi,bi(r)):pi(r)||u.removeAttribute(r))}}function mo(t,e,n,r){r||t.tagName.indexOf("-")>-1?vo(t,e,n):vi(e)?wi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):pi(e)?t.setAttribute(e,mi(e,n)):_i(e)?wi(n)?t.removeAttributeNS(yi,bi(e)):t.setAttributeNS(yi,e,n):vo(t,e,n)}function vo(t,e,n){if(wi(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var yo={create:go,update:go};function _o(t,e){var n=e.elm,r=e.data,i=t.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Ei(e),c=n._transitionClasses;s(c)&&(a=Ii(a,Ci(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var bo,wo={create:_o,update:_o},Eo="__r",So="__c";function To(t){if(s(t[Eo])){var e=et?"change":"input";t[e]=[].concat(t[Eo],t[e]||[]),delete t[Eo]}s(t[So])&&(t.change=[].concat(t[So],t.change||[]),delete t[So])}function Io(t,e,n){var r=bo;return function i(){var o=e.apply(null,arguments);null!==o&&Ao(t,i,n,r)}}var Co=Ze&&!(st&&Number(st[1])<=53);function Oo(t,e,n,r){if(Co){var i=Vn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}bo.addEventListener(t,e,ct?{capture:n,passive:r}:n)}function Ao(t,e,n,r){(r||bo).removeEventListener(t,e._wrapper||e,n)}function ko(t,e){if(!o(t.data.on)||!o(e.data.on)){var n=e.data.on||{},r=t.data.on||{};bo=e.elm||t.elm,To(n),te(n,r,Oo,Ao,Io,e.context),bo=void 0}}var xo,Ro={create:ko,update:ko,destroy:function(t){return ko(t,to)}};function Po(t,e){if(!o(t.data.domProps)||!o(e.data.domProps)){var n,r,i=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=e.data.domProps=D({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);No(i,l)&&(i.value=l)}else if("innerHTML"===n&&Ri(i.tagName)&&o(i.innerHTML)){xo=xo||document.createElement("div"),xo.innerHTML="<svg>".concat(r,"</svg>");var h=xo.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Js){}}}}function No(t,e){return!t.composing&&("OPTION"===t.tagName||Do(t,e)||Lo(t,e))}function Do(t,e){var n=!0;try{n=document.activeElement!==t}catch(Js){}return n&&t.value!==e}function Lo(t,e){var n=t.value,r=t._vModifiers;if(s(r)){if(r.number)return y(n)!==y(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Mo={create:Po,update:Po},jo=T((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Fo(t){var e=Uo(t.style);return t.staticStyle?D(t.staticStyle,e):e}function Uo(t){return Array.isArray(t)?L(t):"string"===typeof t?jo(t):t}function $o(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=Fo(i.data))&&D(r,n)}(n=Fo(t.data))&&D(r,n);var o=t;while(o=o.parent)o.data&&(n=Fo(o.data))&&D(r,n);return r}var Vo,Bo=/^--/,zo=/\s*!important$/,qo=function(t,e,n){if(Bo.test(e))t.style.setProperty(e,n);else if(zo.test(n))t.style.setProperty(k(e),n.replace(zo,""),"important");else{var r=Wo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Ho=["Webkit","Moz","ms"],Wo=T((function(t){if(Vo=Vo||document.createElement("div").style,t=C(t),"filter"!==t&&t in Vo)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Ho.length;n++){var r=Ho[n]+e;if(r in Vo)return r}}));function Go(t,e){var n=e.data,r=t.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,f=Uo(e.data.style)||{};e.data.normalizedStyle=s(f.__ob__)?D({},f):f;var d=$o(e,!0);for(a in h)o(d[a])&&qo(c,a,"");for(a in d)i=d[a],i!==h[a]&&qo(c,a,null==i?"":i)}}var Ko={create:Go,update:Go},Qo=/\s+/;function Xo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Qo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Jo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Qo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Yo(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&D(e,Zo(t.name||"v")),D(e,t),e}return"string"===typeof t?Zo(t):void 0}}var Zo=T((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),ts=Z&&!nt,es="transition",ns="animation",rs="transition",is="transitionend",os="animation",ss="animationend";ts&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(rs="WebkitTransition",is="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(os="WebkitAnimation",ss="webkitAnimationEnd"));var as=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function cs(t){as((function(){as(t)}))}function us(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Xo(t,e))}function ls(t,e){t._transitionClasses&&w(t._transitionClasses,e),Jo(t,e)}function hs(t,e,n){var r=ds(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===es?is:ss,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var fs=/\b(transform|all)(,|$)/;function ds(t,e){var n,r=window.getComputedStyle(t),i=(r[rs+"Delay"]||"").split(", "),o=(r[rs+"Duration"]||"").split(", "),s=ps(i,o),a=(r[os+"Delay"]||"").split(", "),c=(r[os+"Duration"]||"").split(", "),u=ps(a,c),l=0,h=0;e===es?s>0&&(n=es,l=s,h=o.length):e===ns?u>0&&(n=ns,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?es:ns:null,h=n?n===es?o.length:c.length:0);var f=n===es&&fs.test(r[rs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function ps(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return gs(e)+gs(t[n])})))}function gs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function ms(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Yo(t.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,f=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,g=r.appearActiveClass,m=r.beforeEnter,v=r.enter,_=r.afterEnter,b=r.enterCancelled,w=r.beforeAppear,E=r.appear,S=r.afterAppear,T=r.appearCancelled,I=r.duration,C=Tn,O=Tn.$vnode;while(O&&O.parent)C=O.context,O=O.parent;var A=!C._isMounted||!t.isRootInsert;if(!A||E||""===E){var k=A&&d?d:c,x=A&&g?g:f,R=A&&p?p:u,P=A&&w||m,N=A&&l(E)?E:v,D=A&&S||_,L=A&&T||b,M=y(h(I)?I.enter:I);0;var j=!1!==i&&!nt,F=_s(N),U=n._enterCb=V((function(){j&&(ls(n,R),ls(n,x)),U.cancelled?(j&&ls(n,k),L&&L(n)):D&&D(n),n._enterCb=null}));t.data.show||ee(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,U)})),P&&P(n),j&&(us(n,k),us(n,x),cs((function(){ls(n,k),U.cancelled||(us(n,R),F||(ys(M)?setTimeout(U,M):hs(n,a,U)))}))),t.data.show&&(e&&e(),N&&N(n,U)),j||F||U()}}}function vs(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Yo(t.data.transition);if(o(r)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,g=r.leaveCancelled,m=r.delayLeave,v=r.duration,_=!1!==i&&!nt,b=_s(d),w=y(h(v)?v.leave:v);0;var E=n._leaveCb=V((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(ls(n,u),ls(n,l)),E.cancelled?(_&&ls(n,c),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(S):S()}function S(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),_&&(us(n,c),us(n,l),cs((function(){ls(n,c),E.cancelled||(us(n,u),b||(ys(w)?setTimeout(E,w):hs(n,a,E)))}))),d&&d(n,E),_||b||E())}}function ys(t){return"number"===typeof t&&!isNaN(t)}function _s(t){if(o(t))return!1;var e=t.fns;return s(e)?_s(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function bs(t,e){!0!==e.data.show&&ms(e)}var ws=Z?{create:bs,activate:bs,remove:function(t,e){!0!==t.data.show?vs(t,e):e()}}:{},Es=[yo,wo,Ro,Mo,Ko,ws],Ss=Es.concat(po),Ts=oo({nodeOps:Xi,modules:Ss});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Ps(t,"input")}));var Is={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ee(n,"postpatch",(function(){Is.componentUpdated(t,e,n)})):Cs(t,e,n.context),t._vOptions=[].map.call(t.options,ks)):("textarea"===n.tag||Mi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",xs),t.addEventListener("compositionend",Rs),t.addEventListener("change",Rs),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Cs(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ks);if(i.some((function(t,e){return!U(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return As(t,i)})):e.value!==e.oldValue&&As(e.value,i);o&&Ps(t,"change")}}}};function Cs(t,e,n){Os(t,e,n),(et||rt)&&setTimeout((function(){Os(t,e,n)}),0)}function Os(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=$(r,ks(s))>-1,s.selected!==o&&(s.selected=o);else if(U(ks(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function As(t,e){return e.every((function(e){return!U(e,t)}))}function ks(t){return"_value"in t?t._value:t.value}function xs(t){t.target.composing=!0}function Rs(t){t.target.composing&&(t.target.composing=!1,Ps(t.target,"input"))}function Ps(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Ns(t){return!t.componentInstance||t.data&&t.data.transition?t:Ns(t.componentInstance._vnode)}var Ds={bind:function(t,e,n){var r=e.value;n=Ns(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,ms(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Ns(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?ms(n,(function(){t.style.display=t.__vOriginalDisplay})):vs(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},Ls={model:Is,show:Ds},Ms={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function js(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?js(Ve(e.children)):t}function Fs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[C(r)]=i[r];return e}function Us(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function $s(t){while(t=t.parent)if(t.data.transition)return!0}function Vs(t,e){return e.key===t.key&&e.tag===t.tag}var Bs=function(t){return t.tag||Ie(t)},zs=function(t){return"show"===t.name},qs={name:"transition",props:Ms,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Bs),n.length)){0;var r=this.mode;0;var i=n[0];if($s(this.$vnode))return i;var o=js(i);if(!o)return i;if(this._leaving)return Us(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=Fs(this),c=this._vnode,l=js(c);if(o.data.directives&&o.data.directives.some(zs)&&(o.data.show=!0),l&&l.data&&!Vs(o,l)&&!Ie(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=D({},a);if("out-in"===r)return this._leaving=!0,ee(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Us(t,i);if("in-out"===r){if(Ie(o))return c;var f,d=function(){f()};ee(a,"afterEnter",d),ee(a,"enterCancelled",d),ee(h,"delayLeave",(function(t){f=t}))}}return i}}},Hs=D({tag:String,moveClass:String},Ms);delete Hs.mode;var Ws={props:Hs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=In(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=Fs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Gs),t.forEach(Ks),t.forEach(Qs),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;us(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(is,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(is,t),n._moveCb=null,ls(n,e))})}})))},methods:{hasMove:function(t,e){if(!ts)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Jo(n,t)})),Xo(n,e),n.style.display="none",this.$el.appendChild(n);var r=ds(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Gs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Ks(t){t.data.newPos=t.elm.getBoundingClientRect()}function Qs(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Xs={Transition:qs,TransitionGroup:Ws};Xr.config.mustUseProp=di,Xr.config.isReservedTag=Pi,Xr.config.isReservedAttr=hi,Xr.config.getTagNamespace=Ni,Xr.config.isUnknownElement=Li,D(Xr.options.directives,Ls),D(Xr.options.components,Xs),Xr.prototype.__patch__=Z?Ts:M,Xr.prototype.$mount=function(t,e){return t=t&&Z?ji(t):void 0,An(this,t,e)},Z&&setTimeout((function(){W.devtools&&ht&&ht.emit("init",Xr)}),0)},8620:function(t,e,n){"use strict";e.ZP=void 0;var r=n(2584),i=n(8413);function o(t){return u(t)||c(t)||a(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function u(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}var g=function(){return null},m=function(t,e,n){return t.reduce((function(t,r){return t[n?n(r):r]=e(r),t}),{})};function v(t){return"function"===typeof t}function y(t){return null!==t&&("object"===p(t)||v(t))}function _(t){return y(t)&&v(t.then)}var b=function(t,e,n,r){if("function"===typeof n)return n.call(t,e,r);n=Array.isArray(n)?n:n.split(".");for(var i=0;i<n.length;i++){if(!e||"object"!==p(e))return r;e=e[n[i]]}return"undefined"===typeof e?r:e},w="__isVuelidateAsyncVm";function E(t,e){var n=new t({data:{p:!0,v:!1}});return e.then((function(t){n.p=!1,n.v=t}),(function(t){throw n.p=!1,n.v=!1,t})),n[w]=!0,n}var S={$invalid:function(){var t=this,e=this.proxy;return this.nestedKeys.some((function(e){return t.refProxy(e).$invalid}))||this.ruleKeys.some((function(t){return!e[t]}))},$dirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(e){return t.refProxy(e).$dirty}))},$anyDirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(e){return t.refProxy(e).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var t=this;return!!this.$error||this.nestedKeys.some((function(e){return t.refProxy(e).$anyError}))},$pending:function(){var t=this;return this.ruleKeys.some((function(e){return t.getRef(e).$pending}))||this.nestedKeys.some((function(e){return t.refProxy(e).$pending}))},$params:function(){var t=this,e=this.validations;return f(f({},m(this.nestedKeys,(function(t){return e[t]&&e[t].$params||null}))),m(this.ruleKeys,(function(e){return t.getRef(e).$params})))}};function T(t){this.dirty=t;var e=this.proxy,n=t?"$touch":"$reset";this.nestedKeys.forEach((function(t){e[t][n]()}))}var I={$touch:function(){T.call(this,!0)},$reset:function(){T.call(this,!1)},$flattenParams:function(){var t=this.proxy,e=[];for(var n in this.$params)if(this.isNested(n)){for(var r=t[n].$flattenParams(),i=0;i<r.length;i++)r[i].path.unshift(n);e=e.concat(r)}else e.push({path:[],name:n,params:this.$params[n]});return e}},C=Object.keys(S),O=Object.keys(I),A=null,k=function(t){if(A)return A;var e=t.extend({computed:{refs:function(){var t=this._vval;this._vval=this.children,(0,r.patchChildren)(t,this._vval);var e={};return this._vval.forEach((function(t){e[t.key]=t.vm})),e}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,r.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(t){var e=this.getModel();if(e)return e[t]},hasIter:function(){return!1}}}),n=e.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(e){var n=this.getModel();(0,i.pushParams)();var r=this.rule.call(this.rootModel,n,e),o=_(r)?E(t,r):r,s=(0,i.popParams)(),a=s&&s.$sub?s.$sub.length>1?s:s.$sub[0]:null;return{output:o,params:a}}},computed:{run:function(){var t=this,e=this.lazyParentModel(),n=Array.isArray(e)&&e.__ob__;if(n){var r=e.__ob__.dep;r.depend();var i=r.constructor.target;if(!this._indirectWatcher){var o=i.constructor;this._indirectWatcher=new o(this,(function(){return t.runRule(e)}),null,{lazy:!0})}var s=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===s)return this._indirectWatcher.depend(),i.value;this._lastModel=s,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(e)},$params:function(){return this.run.params},proxy:function(){var t=this.run.output;return t[w]?!!t.v:!!t},$pending:function(){var t=this.run.output;return!!t[w]&&t.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),s=e.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:f(f({},I),{},{refProxy:function(t){return this.getRef(t).proxy},getRef:function(t){return this.refs[t]},isNested:function(t){return"function"!==typeof this.validations[t]}}),computed:f(f({},S),{},{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var t=this;return this.keys.filter((function(e){return!t.isNested(e)}))},keys:function(){return Object.keys(this.validations).filter((function(t){return"$params"!==t}))},proxy:function(){var t=this,e=m(this.keys,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t.refProxy(e)}}})),n=m(C,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t[e]}}})),r=m(O,(function(e){return{enumerable:!1,configurable:!0,get:function(){return t[e]}}})),i=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},f({},e))}}:{};return Object.defineProperties({},f(f(f(f({},e),i),{},{$model:{enumerable:!0,get:function(){var e=t.lazyParentModel();return null!=e?e[t.prop]:null},set:function(e){var n=t.lazyParentModel();null!=n&&(n[t.prop]=e,t.$touch())}}},n),r))},children:function(){var t=this;return[].concat(o(this.nestedKeys.map((function(e){return u(t,e)}))),o(this.ruleKeys.map((function(e){return l(t,e)})))).filter(Boolean)}})}),a=s.extend({methods:{isNested:function(t){return"undefined"!==typeof this.validations[t]()},getRef:function(t){var e=this;return{get proxy(){return e.validations[t]()||!1}}}}}),c=s.extend({computed:{keys:function(){var t=this.getModel();return y(t)?Object.keys(t):[]},tracker:function(){var t=this,e=this.validations.$trackBy;return e?function(n){return"".concat(b(t.rootModel,t.getModelKey(n),e))}:function(t){return"".concat(t)}},getModelLazy:function(){var t=this;return function(){return t.getModel()}},children:function(){var t=this,e=this.validations,n=this.getModel(),i=f({},e);delete i["$trackBy"];var o={};return this.keys.map((function(e){var a=t.tracker(e);return o.hasOwnProperty(a)?null:(o[a]=!0,(0,r.h)(s,a,{validations:i,prop:e,lazyParentModel:t.getModelLazy,model:n[e],rootModel:t.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(t){return this.refs[this.tracker(t)]},hasIter:function(){return!0}}}),u=function(t,e){if("$each"===e)return(0,r.h)(c,e,{validations:t.validations[e],lazyParentModel:t.lazyParentModel,prop:e,lazyModel:t.getModel,rootModel:t.rootModel});var n=t.validations[e];if(Array.isArray(n)){var i=t.rootModel,o=m(n,(function(t){return function(){return b(i,i.$v,t)}}),(function(t){return Array.isArray(t)?t.join("."):t}));return(0,r.h)(a,e,{validations:o,lazyParentModel:g,prop:e,lazyModel:g,rootModel:i})}return(0,r.h)(s,e,{validations:n,lazyParentModel:t.getModel,prop:e,lazyModel:t.getModelKey,rootModel:t.rootModel})},l=function(t,e){return(0,r.h)(n,e,{rule:t.validations[e],lazyParentModel:t.lazyParentModel,lazyModel:t.getModel,rootModel:t.rootModel})};return A={VBase:e,Validation:s},A},x=null;function R(t){if(x)return x;var e=t.constructor;while(e.super)e=e.super;return x=e,e}var P=function(t,e){var n=R(t),i=k(n),o=i.Validation,s=i.VBase,a=new s({computed:{children:function(){var n="function"===typeof e?e.call(t):e;return[(0,r.h)(o,"$v",{validations:n,lazyParentModel:g,prop:"$v",model:t,rootModel:t})]}}});return a},N={data:function(){var t=this.$options.validations;return t&&(this._vuelidate=P(this,t)),{}},beforeCreate:function(){var t=this.$options,e=t.validations;e&&(t.computed||(t.computed={}),t.computed.$v||(t.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function D(t){t.mixin(N)}var L=D;e.ZP=L},8413:function(t,e){"use strict";function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}Object.defineProperty(e,"__esModule",{value:!0}),e._setTarget=void 0,e.popParams=l,e.pushParams=u,e.target=void 0,e.withParams=p;var s=[],a=null;e.target=a;var c=function(t){e.target=a=t};function u(){null!==a&&s.push(a),e.target=a={}}function l(){var t=a,n=e.target=a=s.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(t)),t}function h(t){if("object"!==o(t)||Array.isArray(t))throw new Error("params must be an object");e.target=a=r(r({},a),t)}function f(t,e){return d((function(n){return function(){n(t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return e.apply(this,i)}}))}function d(t){var e=t(h);return function(){u();try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(this,n)}finally{l()}}}function p(t,e){return"object"===o(t)&&void 0!==e?f(t,e):d(t)}e._setTarget=c},2584:function(t,e){"use strict";function n(t){return null===t||void 0===t}function r(t){return null!==t&&void 0!==t}function i(t,e){return e.tag===t.tag&&e.key===t.key}function o(t){var e=t.tag;t.vm=new e({data:t.args})}function s(t){for(var e=Object.keys(t.args),n=0;n<e.length;n++)e.forEach((function(e){t.vm[e]=t.args[e]}))}function a(t,e,n){var i,o,s={};for(i=e;i<=n;++i)o=t[i].key,r(o)&&(s[o]=i);return s}function c(t,e){var s,c,f,d=0,p=0,g=t.length-1,m=t[0],v=t[g],y=e.length-1,_=e[0],b=e[y];while(d<=g&&p<=y)n(m)?m=t[++d]:n(v)?v=t[--g]:i(m,_)?(h(m,_),m=t[++d],_=e[++p]):i(v,b)?(h(v,b),v=t[--g],b=e[--y]):i(m,b)?(h(m,b),m=t[++d],b=e[--y]):i(v,_)?(h(v,_),v=t[--g],_=e[++p]):(n(s)&&(s=a(t,d,g)),c=r(_.key)?s[_.key]:null,n(c)?(o(_),_=e[++p]):(f=t[c],i(f,_)?(h(f,_),t[c]=void 0,_=e[++p]):(o(_),_=e[++p])));d>g?u(e,p,y):p>y&&l(t,d,g)}function u(t,e,n){for(;e<=n;++e)o(t[e])}function l(t,e,n){for(;e<=n;++e){var i=t[e];r(i)&&(i.vm.$destroy(),i.vm=null)}}function h(t,e){t!==e&&(e.vm=t.vm,s(e))}function f(t,e){r(t)&&r(e)?t!==e&&c(t,e):r(e)?u(e,0,e.length-1):r(t)&&l(t,0,t.length-1)}function d(t,e,n){return{tag:t,key:e,args:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.h=d,e.patchChildren=f},629:function(t,e,n){"use strict";
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,{OI:function(){return D},Se:function(){return L},nv:function(){return M},rn:function(){return N}});var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){u(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var g=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;m(t.concat(r),e.getChild(r),n.modules[r])}}g.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},g.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},g.prototype.update=function(t){m([],this.root,t)},g.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},g.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},g.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&P(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new g(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;S(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:v.config.devtools;l&&s(this)},_={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;S(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};u(i,(function(e,n){o[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:o}),v.config.silent=s,t.strict&&k(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function S(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=x(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=T(t,s,n);r.forEachMutation((function(e,n){var r=s+n;C(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;O(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;A(t,r,e,u)})),r.forEachChild((function(r,o){S(t,e,n.concat(o),r,i)}))}function T(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=R(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return I(t,e)}},state:{get:function(){return x(t.state,n)}}}),i}function I(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function C(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function O(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function k(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function x(t,e){return e.reduce((function(t,e){return t[e]}),t)}function R(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function P(t){v&&t===v||(v=t,r(v))}_.state.get=function(){return this._vm._data.$$state},_.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=R(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=R(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),S(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=x(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),w(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,_);var N=$((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=V(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),D=$((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=V(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),L=$((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||V(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=$((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=V(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),j=function(t){return{mapState:N.bind(null,t),mapGetters:L.bind(null,t),mapMutations:D.bind(null,t),mapActions:M.bind(null,t)}};function F(t){return U(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function U(t){return Array.isArray(t)||l(t)}function $(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function V(t,e,n){var r=t._modulesNamespaceMap[n];return r}function B(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,o){var s=c(o);if(n(t,h,s)){var a=H(),u=i(t),f="mutation "+t.type+a;z(l,f,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),q(l)}h=s})),u&&t.subscribeAction((function(t,n){if(o(t,n)){var r=H(),i=s(t),a="action "+t.type+r;z(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),q(l)}})))}}function z(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function q(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function H(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function G(t,e){return W("0",e-t.toString().length)+t}var K={Store:y,install:P,version:"3.6.2",mapState:N,mapMutations:D,mapGetters:L,mapActions:M,createNamespacedHelpers:j,createLogger:B};e["ZP"]=K},2238:function(t,e,n){"use strict";n.d(e,{Jn:function(){return G},KN:function(){return X},Mq:function(){return Q},Xd:function(){return B},ZF:function(){return K},qX:function(){return z}});var r=n(8463),i=n(3333),o=n(4444),s=n(6531);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(c(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function c(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const u="@firebase/app",l="0.9.10",h=new i.Yd("@firebase/app"),f="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",y="@firebase/auth-compat",_="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",E="@firebase/functions-compat",S="@firebase/installations",T="@firebase/installations-compat",I="@firebase/messaging",C="@firebase/messaging-compat",O="@firebase/performance",A="@firebase/performance-compat",k="@firebase/remote-config",x="@firebase/remote-config-compat",R="@firebase/storage",P="@firebase/storage-compat",N="@firebase/firestore",D="@firebase/firestore-compat",L="firebase",M="9.22.0",j="[DEFAULT]",F={[u]:"fire-core",[f]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[v]:"fire-auth",[y]:"fire-auth-compat",[_]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[E]:"fire-fn-compat",[S]:"fire-iid",[T]:"fire-iid-compat",[I]:"fire-fcm",[C]:"fire-fcm-compat",[O]:"fire-perf",[A]:"fire-perf-compat",[k]:"fire-rc",[x]:"fire-rc-compat",[R]:"fire-gcs",[P]:"fire-gcs-compat",[N]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},U=new Map,$=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if($.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;$.set(e,t);for(const n of U.values())V(n,t);return!0}function z(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},H=new o.LL("app","Firebase",q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=M;function K(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:j,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw H.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw H.create("no-options");const a=U.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw H.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of $.values())c.addComponent(r);const u=new W(n,i,c);return U.set(s,u),u}function Q(t=j){const e=U.get(t);if(!e&&t===j&&(0,o.aH)())return K();if(!e)throw H.create("no-app",{appName:t});return e}function X(t,e,n){var i;let o=null!==(i=F[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}B(new r.wA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="firebase-heartbeat-database",Y=1,Z="firebase-heartbeat-store";let tt=null;function et(){return tt||(tt=(0,s.openDB)(J,Y,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Z)}}}).catch((t=>{throw H.create("idb-open",{originalErrorMessage:t.message})}))),tt}async function nt(t){try{const e=await et(),n=await e.transaction(Z).objectStore(Z).get(it(t));return n}catch(e){if(e instanceof o.ZR)h.warn(e.message);else{const t=H.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});h.warn(t.message)}}}async function rt(t,e){try{const n=await et(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);await i.put(e,it(t)),await r.done}catch(n){if(n instanceof o.ZR)h.warn(n.message);else{const t=H.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(t.message)}}}function it(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=1024,st=2592e6;class at{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new lt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=ct();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=st})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ct(),{heartbeatsToSend:e,unsentEntries:n}=ut(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ct(){const t=new Date;return t.toISOString().substring(0,10)}function ut(t,e=ot){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),ht(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ht(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await nt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ht(t){return(0,o.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){B(new r.wA("platform-logger",(t=>new a(t)),"PRIVATE")),B(new r.wA("heartbeat",(t=>new at(t)),"PRIVATE")),X(u,l,t),X(u,l,"esm2017"),X("fire-js","")}ft("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},3977:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(2238),i="firebase",o="9.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},4367:function(t,e,n){"use strict";n.d(e,{w9:function(){return he},Xb:function(){return xe},v0:function(){return qr},aF:function(){return Oe},LS:function(){return ke},e5:function(){return Re},w7:function(){return Me},gQ:function(){return Pe}});var r=n(4444),i=n(2238),o=n(655),s=n(3333),a=n(8463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function f(t,...e){h.logLevel<=s["in"].WARN&&h.warn(`Auth (${i.Jn}): ${t}`,...e)}function d(t,...e){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw v(t,...e)}function g(t,...e){return v(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),o=new r.LL("auth","Firebase",i);return o.create(e,{appName:t.name})}function v(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function y(t,e,...n){if(!t)throw v(e,...n)}function _(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||_(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,o={}){return N(t,o,(async()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),A.fetch()(L(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))}))}async function N(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},k),e);try{const e=new M(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw j(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw j(t,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(t,a,s);p(t,a)}}catch(o){if(o instanceof r.ZR)throw o;p(t,"network-request-failed",{message:String(o)})}}async function D(t,e,n,r,i={}){const o=await P(t,e,n,r,i);return"mfaPendingCredential"in o&&p(t,"multi-factor-auth-required",{_serverResponse:o}),o}function L(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O(t.config,i):`${t.config.apiScheme}://${i}`}class M{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function U(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),o=z(i);y(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:$(B(o.auth_time)),issuedAtTime:$(B(o.iat)),expirationTime:$(B(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function B(t){return 1e3*Number(t)}function z(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function q(t){const e=z(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&W(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function W({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await H(t,U(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?Y(o.providerUserInfo):[],a=J(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new K(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function X(t){const e=(0,r.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function J(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function Y(t){return t.map((t=>{var{providerId:e}=t,n=(0,o.__rest)(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e){const n=await N(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=L(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):q(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new tt;return n&&(y("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class nt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=(0,o.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new K(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await H(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return V(this,t)}reload(){return X(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await H(this,F(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:S}=e;y(_&&S,t,"internal-error");const T=tt.fromJSON(this.name,S);y("string"===typeof _,t,"internal-error"),et(l,t.name),et(h,t.name),y("boolean"===typeof b,t,"internal-error"),y("boolean"===typeof w,t,"internal-error"),et(f,t.name),et(d,t.name),et(p,t.name),et(g,t.name),et(m,t.name),et(v,t.name);const I=new nt({uid:_,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map((t=>Object.assign({},t)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new tt;r.updateFromServerResponse(e);const i=new nt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Map;function it(t){b(t instanceof Function,"Expected a class definition");let e=rt.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rt.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const st=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=at(this.userKey,r.apiKey,i),this.fullPersistenceKey=at("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(it(st),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||it(st);const o=at(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=nt._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(o)}catch(c){}}))),new ct(i,t,n)):new ct(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(mt(e))return"Webos";if(ht(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(pt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function lt(t=(0,r.z$)()){return/firefox\//i.test(t)}function ht(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.z$)()){return/crios\//i.test(t)}function dt(t=(0,r.z$)()){return/iemobile/i.test(t)}function pt(t=(0,r.z$)()){return/android/i.test(t)}function gt(t=(0,r.z$)()){return/blackberry/i.test(t)}function mt(t=(0,r.z$)()){return/webos/i.test(t)}function vt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yt(t=(0,r.z$)()){var e;return vt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function _t(){return(0,r.w1)()&&10===document.documentMode}function bt(t=(0,r.z$)()){return vt(t)||pt(t)||mt(t)||gt(t)||/windows phone/i.test(t)||dt(t)}function wt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e=[]){let n;switch(t){case"Browser":n=ut((0,r.z$)());break;case"Worker":n=`${ut((0,r.z$)())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(t,e){return P(t,"GET","/v2/recaptchaConfig",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){return void 0!==t&&void 0!==t.enterprise}class It{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ot(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Ct().appendChild(r)}))}function At(t){return`__${t}${Math.floor(1e6*Math.random())}`}const kt="https://www.google.com/recaptcha/enterprise.js?render=",xt="recaptcha-enterprise",Rt="NO_RECAPTCHA";class Pt{constructor(t){this.type=xt,this.auth=Mt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{St(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new It(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;Tt(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Rt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&Tt(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Ot(kt+n).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Nt(t,e,n,r=!1){const i=new Pt(t);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jt(this),this.idTokenSubscription=new jt(this),this.beforeStateQueue=new Dt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=it(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(it(t))}))}async initializeRecaptchaConfig(){const t=await St(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new It(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){const t=new Pt(this);t.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&it(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[it(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return y(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Et(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&f(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Mt(t){return(0,r.m9)(t)}class jt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const o=n.initialize({options:e});return o}function Ut(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function $t(t,e,n){const r=Mt(t);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Vt(e),{host:s,port:a}=Bt(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qt()}function Vt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bt(t){const e=Vt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:zt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:zt(e)}}}function zt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return _("not implemented")}_getIdTokenResponse(t){return _("not implemented")}_linkToIdToken(t,e){return _("not implemented")}_getReauthenticationResolver(t){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gt(t,e){return D(t,"POST","/v1/accounts:signInWithPassword",R(t,e))}async function Kt(t,e){return P(t,"POST","/v1/accounts:sendOobCode",R(t,e))}async function Qt(t,e){return Kt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}async function Jt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ht{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Yt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Yt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await Nt(t,n,"signInWithPassword");return Gt(t,e)}return Gt(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Nt(t,n,"signInWithPassword");return Gt(t,e)}return Promise.reject(e)}));case"emailLink":return Xt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Wt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Jt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(t,e){return D(t,"POST","/v1/accounts:signInWithIdp",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="http://localhost";class ee extends Ht{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ee(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=(0,o.__rest)(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ee(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return Zt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Zt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Zt(t,e)}buildRequest(){const t={requestUri:te,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",R(t,e))}async function re(t,e){return D(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e))}async function ie(t,e){const n=await D(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const oe={["USER_NOT_FOUND"]:"user-not-found"};async function se(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return D(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,n),oe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends Ht{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ae({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ae({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return re(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ie(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return se(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ae({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ue(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||e||t}class le{constructor(t){var e,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ce(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ue(t);try{return new le(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(){this.providerId=he.PROVIDER_ID}static credential(t,e){return Yt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=le.parseLink(e);return y(n,"argument-error"),Yt._fromEmailAndCode(t,n.code,n.tenantId)}}he.PROVIDER_ID="password",he.EMAIL_PASSWORD_SIGN_IN_METHOD="password",he.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends fe{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends de{constructor(){super("facebook.com")}static credential(t){return ee._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pe.credential(t.oauthAccessToken)}catch(e){return null}}}pe.FACEBOOK_SIGN_IN_METHOD="facebook.com",pe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends de{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ee._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ge.credential(e,n)}catch(r){return null}}}ge.GOOGLE_SIGN_IN_METHOD="google.com",ge.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends de{constructor(){super("github.com")}static credential(t){return ee._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return me.credential(t.oauthAccessToken)}catch(e){return null}}}me.GITHUB_SIGN_IN_METHOD="github.com",me.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve extends de{constructor(){super("twitter.com")}static credential(t,e){return ee._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ve.credentialFromTaggedObject(t)}static credentialFromError(t){return ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ve.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ye(t,e){return D(t,"POST","/v1/accounts:signUp",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.TWITTER_SIGN_IN_METHOD="twitter.com",ve.PROVIDER_ID="twitter.com";class _e{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await nt._fromIdTokenResponse(t,n,r),o=be(n),s=new _e({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=be(n);return new _e({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function be(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,we.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new we(t,e,n,r)}}function Ee(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw we._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t,e,n=!1){const r=await H(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _e._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Te(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await H(t,Ee(r,i,e,t),n);y(o.idToken,r,"internal-error");const s=z(o.idToken);y(s,r,"internal-error");const{sub:a}=s;return y(t.uid===a,r,"user-mismatch"),_e._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(t,e,n=!1){const r="signIn",i=await Ee(t,r,e),o=await _e._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Ce(t,e){return Ie(Mt(t),e)}async function Oe(t,e){return Te((0,r.m9)(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ae(t,e,n){var r;y((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),y("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(y(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(y(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(t,e,n){var r;const i=Mt(t),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const t=await Nt(i,o,"getOobCode",!0);n&&Ae(i,t,n),await Qt(i,t)}else n&&Ae(i,o,n),await Qt(i,o).catch((async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const t=await Nt(i,o,"getOobCode",!0);n&&Ae(i,t,n),await Qt(i,t)}}))}async function xe(t,e,n){var r;const i=Mt(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const t=await Nt(i,o,"signUpPassword");s=ye(i,t)}else s=ye(i,o).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await Nt(i,o,"signUpPassword");return ye(i,t)}return Promise.reject(t)}));const a=await s.catch((t=>Promise.reject(t))),c=await _e._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Re(t,e,n){return Ce((0,r.m9)(t),he.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){return Ne((0,r.m9)(t),null,e)}async function Ne(t,e,n){const{auth:r}=t,i=await t.getIdToken(),o={idToken:i,returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await H(t,Wt(r,o));await t._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function Le(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}function Me(t){return(0,r.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",R(t,e))}function Fe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",R(t,e))}function Ue(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",R(t,e))}function $e(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",R(t,e))}new WeakMap;const Ve="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ve,"1"),this.storage.removeItem(Ve),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){const t=(0,r.z$)();return ht(t)||vt(t)}const qe=1e3,He=10;class We extends Be{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ze()&&wt(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);_t()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,He):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),qe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}We.type="LOCAL";const Ge=We;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Be{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ke.type="SESSION";const Qe=Ke;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Je(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async t=>t(e.origin,i))),a=await Xe(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je.receivers=[];class Ze{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Ye("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function en(t){tn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return"undefined"!==typeof tn()["WorkerGlobalScope"]&&"function"===typeof tn()["importScripts"]}async function rn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function on(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function sn(){return nn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="firebaseLocalStorageDb",cn=1,un="firebaseLocalStorage",ln="fbase_key";class hn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function fn(t,e){return t.transaction([un],e?"readwrite":"readonly").objectStore(un)}function dn(){const t=indexedDB.deleteDatabase(an);return new hn(t).toPromise()}function pn(){const t=indexedDB.open(an,cn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(un,{keyPath:ln})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(un)?e(n):(n.close(),await dn(),e(await pn()))}))}))}async function gn(t,e,n){const r=fn(t,!0).put({[ln]:e,value:n});return new hn(r).toPromise()}async function mn(t,e){const n=fn(t,!1).get(e),r=await new hn(n).toPromise();return void 0===r?null:r.value}function vn(t,e){const n=fn(t,!0).delete(e);return new hn(n).toPromise()}const yn=800,_n=3;class bn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await pn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>_n)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Je._getInstance(sn()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await rn(),!this.activeServiceWorker)return;this.sender=new Ze(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&on()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await pn();return await gn(t,Ve,"1"),await vn(t,Ve),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>gn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>mn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>vn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=fn(t,!1).getAll();return new hn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),yn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bn.type="LOCAL";const wn=bn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",R(t,e))}function Sn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",R(t,e))}function Tn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
At("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const In="recaptcha";async function Cn(t,e,n){var r;const i=await n.verify();try{let o;if(y("string"===typeof i,t,"argument-error"),y(n.type===In,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){y("enroll"===e.type,t,"internal-error");const n=await je(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;y(n,t,"missing-multi-factor-info");const s=await En(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ne(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On{constructor(t){this.providerId=On.PROVIDER_ID,this.auth=Mt(t)}verifyPhoneNumber(t,e){return Cn(this.auth,t,(0,r.m9)(e))}static credential(t,e){return ae._fromVerification(t,e)}static credentialFromResult(t){const e=t;return On.credentialFromTaggedObject(e)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ae._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function An(t,e){return e?it(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.PROVIDER_ID="phone",On.PHONE_SIGN_IN_METHOD="phone";class kn extends Ht{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Zt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Zt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Zt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function xn(t){return Ie(t.auth,new kn(t),t.bypassAuthState)}function Rn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Te(n,new kn(t),t.bypassAuthState)}async function Pn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Se(n,new kn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xn;case"linkViaPopup":case"linkViaRedirect":return Pn;case"reauthViaPopup":case"reauthViaRedirect":return Rn;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new C(2e3,1e4);class Ln extends Nn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=Ye();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Dn.get())};t()}}Ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mn="pendingRedirect",jn=new Map;class Fn extends Nn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=jn.get(this.auth._key());if(!t){try{const e=await Un(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}jn.set(this.auth._key(),t)}return this.bypassAuthState||jn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Un(t,e){const n=Bn(e),r=Vn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function $n(t,e){jn.set(t._key(),e)}function Vn(t){return it(t._redirectPersistence)}function Bn(t){return at(Mn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e,n=!1){const r=Mt(t),i=An(r,e),o=new Fn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn=6e5;class Hn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Kn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Gn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=qn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wn(t))}saveEventToCache(t){this.cachedEventUids.add(Wn(t)),this.lastProcessedEventTime=Date.now()}}function Wn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Gn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Kn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jn=/^https?/;async function Yn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qn(t);for(const r of e)try{if(Zn(r))return}catch(n){}p(t,"unauthorized-domain")}function Zn(t){const e=w(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Jn.test(n))return!1;if(Xn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new C(3e4,6e4);function er(){const t=tn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function nr(t){return new Promise(((e,n)=>{var r,i,o;function s(){er(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{er(),n(g(t,"network-request-failed"))},timeout:tr.get()})}if(null===(i=null===(r=tn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=tn().gapi)||void 0===o?void 0:o.load)){const e=At("iframefcb");return tn()[e]=()=>{gapi.load?s():n(g(t,"network-request-failed"))},Ot(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw rr=null,t}))}let rr=null;function ir(t){return rr=rr||nr(t),rr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new C(5e3,15e3),sr="__/auth/iframe",ar="emulator/auth/iframe",cr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ur=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lr(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,ar):`https://${t.config.authDomain}/${sr}`,o={apiKey:e.apiKey,appName:t.name,v:i.Jn},s=ur.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function hr(t){const e=await ir(t),n=tn().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:lr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),o=tn().setTimeout((()=>{r(i)}),or.get());function s(){tn().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dr=500,pr=600,gr="_blank",mr="http://localhost";class vr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function yr(t,e,n,i=dr,o=pr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},fr),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=ft(l)?gr:n),lt(l)&&(e=e||mr,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(yt(l)&&"_self"!==c)return _r(e||"",c),new vr(null);const f=window.open(e||"",c,h);y(f,t,"popup-blocked");try{f.focus()}catch(d){}return new vr(f)}function _r(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="__/auth/handler",wr="emulator/auth/handler",Er=encodeURIComponent("fac");async function Sr(t,e,n,o,s,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(e instanceof fe){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof de){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${Er}=${encodeURIComponent(l)}`:"";return`${Tr(t)}?${(0,r.xO)(u).slice(1)}${h}`}function Tr({config:t}){return t.emulator?O(t,wr):`https://${t.authDomain}/${br}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="webStorageSupport";class Cr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qe,this._completeRedirectFn=zn,this._overrideRedirectResult=$n}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sr(t,e,n,w(),r);return yr(t,o,Ye())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Sr(t,e,n,w(),r);return en(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await hr(t),n=new Hn(t);return e.register("authEvent",(e=>{y(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Ir,{type:Ir},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ir];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Yn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bt()||ht()||vt()}}const Or=Cr;class Ar{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return _("unexpected MultiFactorSessionType")}}}class kr extends Ar{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new kr(t)}_finalizeEnroll(t,e,n){return Fe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Sn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class xr{constructor(){}static assertion(t){return kr._fromCredential(t)}}xr.FACTOR_ID="phone";class Rr{static assertionForEnrollment(t,e){return Pr._fromSecret(t,e)}static assertionForSignIn(t,e){return Pr._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;y("undefined"!==typeof e.auth,"internal-error");const n=await Ue(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return Nr._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}Rr.FACTOR_ID="totp";class Pr extends Ar{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Pr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Pr(e,t)}async _finalizeEnroll(t,e,n){return y("undefined"!==typeof this.secret,t,"argument-error"),$e(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){y(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return Tn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Nr{constructor(t,e,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Nr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Dr(t)||Dr(e))&&(r=!0),r&&(Dr(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Dr(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Dr(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Lr="@firebase/auth",Mr="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ur(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;y(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Et(t)},u=new Lt(r,i,o,c);return Ut(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=Mt(t.getProvider("auth").getImmediate());return(t=>new jr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Lr,Mr,Fr(t)),(0,i.KN)(Lr,Mr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=300,Vr=(0,r.Pz)("authIdTokenMaxAge")||$r;let Br=null;const zr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Vr)return;const i=null===n||void 0===n?void 0:n.token;Br!==i&&(Br=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qr(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ft(t,{popupRedirectResolver:Or,persistence:[wn,Ge,Qe]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const t=zr(o);Le(n,t,(()=>t(n.currentUser))),De(n,(e=>t(e)))}const s=(0,r.q4)("auth");return s&&$t(n,`http://${s}`),n}Ur("Browser")},6100:function(t,e,n){"use strict";n.d(e,{ET:function(){return pf},hJ:function(){return uh},oe:function(){return df},JU:function(){return lh},QT:function(){return uf},PL:function(){return hf},ad:function(){return dh},IO:function(){return Gh},r7:function(){return ff},ar:function(){return Qh}});var r,i=n(2238),o=n(8463),s=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:_,b.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function S(){this.s=this.s,this.o=this.o}var T=0;S.prototype.s=!1,S.prototype.ra=function(){this.s||(this.s=!0,this.N(),0==T)||g(this)},S.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function C(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function x(t){return/^[\s\xa0]*$/.test(t)}var R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function P(t,e){return t<e?-1:t>e?1:0}function N(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function D(t){return-1!=N().indexOf(t)}function L(t){return L[" "](t),t}function M(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}L[" "]=f;var j,F=D("Opera"),U=D("Trident")||D("MSIE"),$=D("Edge"),V=$||U,B=D("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),z=-1!=N().toLowerCase().indexOf("webkit")&&!D("Edge");function q(){var t=h.document;return t?t.documentMode:void 0}t:{var H="",W=function(){var t=N();return B?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):z?/WebKit\/(\S+)/.exec(t):F?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(W&&(H=W?W[1]:""),U){var G=q();if(null!=G&&G>parseFloat(H)){j=String(G);break t}}j=H}var K,Q={};function X(){return M(Q,9,(function(){let t=0;const e=R(String(j)).split("."),n=R("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=P(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||P(0==i[2].length,0==o[2].length)||P(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(h.document&&U){var J=q();K=J||(parseInt(j,10)||void 0)}else K=void 0;var Y=K;function Z(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{L(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.$.h.call(this)}}E(Z,A);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++nt,this.fa=this.ia=!1}function it(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ot(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function st(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ut(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=I(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}ut.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=ht(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new rt(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),dt={};function pt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)pt(t,e[o],n,r,i);return null}return n=Tt(n),t&&t[et]?t.O(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=p(i)?!!i.capture:!!i,a=Et(t);if(a||(t[ft]=a=new ut(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=mt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)k||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(bt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function mt(){function t(n){return e.call(t.src,t.listener,n)}const e=wt;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)vt(t,e[o],n,r,i);return null}return n=Tt(n),t&&t[et]?t.P(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function yt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);else r=p(r)?!!r.capture:!!r,n=Tt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=ht(o,n,r,i),-1<n&&(it(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,r,i)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[et])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(bt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Et(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):it(t)}}}function bt(t){return t in dt?dt[t]:dt[t]="on"+t}function wt(t,e){if(t.fa)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.la||t.src;t.ia&&_t(t),t=n.call(r,e)}return t}function Et(t){return t=t[ft],t instanceof ut?t:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"===typeof t?t:(t[St]||(t[St]=function(e){return t.handleEvent(e)}),t[St])}function It(){S.call(this),this.i=new ut(this),this.S=this,this.J=null}function Ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;e=new A(r,t),ct(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Ot(s,r,!0,e)&&i}if(s=e.g=t,i=Ot(s,r,!0,e)&&i,i=Ot(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Ot(s,r,!1,e)&&i}function Ot(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,c=s.la||s.src;s.ia&&lt(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(It,S),It.prototype[et]=!0,It.prototype.removeEventListener=function(t,e,n,r){yt(this,t,e,n,r)},It.prototype.N=function(){if(It.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.J=null},It.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},It.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=h.JSON.stringify;function kt(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xt{constructor(){this.h=this.g=null}add(t,e){const n=Pt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Pt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Nt),(t=>t.reset()));class Nt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Dt(t){h.setTimeout((()=>{throw t}),0)}function Lt(t,e){Rt||Mt(),jt||(Rt(),jt=!0),Ft.add(t,e)}function Mt(){var t=h.Promise.resolve(void 0);Rt=function(){t.then(Ut)}}var jt=!1,Ft=new xt;function Ut(){for(var t;t=kt();){try{t.h.call(t.g)}catch(n){Dt(n)}var e=Pt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function $t(t,e){It.call(this),this.h=t||1,this.g=e||h,this.j=b(this.qb,this),this.l=Date.now()}function Vt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Bt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function zt(t){t.g=Bt((()=>{t.g=null,t.i&&(t.i=!1,zt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E($t,It),r=$t.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ct(this,"tick"),this.ga&&(Vt(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){$t.$.N.call(this),Vt(this),delete this.g};class qt extends S{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){S.call(this),this.h=t,this.g={}}E(Ht,S);var Wt=[];function Gt(t,e,n,r){Array.isArray(n)||(n&&(Wt[0]=n.toString()),n=Wt);for(var i=0;i<n.length;i++){var o=pt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Kt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function Qt(){this.g=!0}function Xt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Jt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Yt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(r?" "+r:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return At(n)}catch(a){return e}}Ht.prototype.N=function(){Ht.$.N.call(this),Kt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Ea=function(){this.g=!1},Qt.prototype.info=function(){};var ee={},ne=null;function re(){return ne=ne||new It}function ie(t){A.call(this,ee.Ta,t)}function oe(t){const e=re();Ct(e,new ie(e))}function se(t,e){A.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=re();Ct(e,new se(e,t))}function ce(t,e){A.call(this,ee.Ua,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Ta="serverreachability",E(ie,A),ee.STAT_EVENT="statevent",E(se,A),ee.Ua="timingevent",E(ce,A);var le={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},he={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fe(){}function de(t){return t.h||(t.h=t.i())}function pe(){}fe.prototype.h=null;var ge,me={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ve(){A.call(this,"d")}function ye(){A.call(this,"c")}function _e(){}function be(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ht(this),this.P=Ee,t=V?125:void 0,this.V=new $t(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new we}function we(){this.i=null,this.g="",this.h=!1}E(ve,A),E(ye,A),E(_e,fe),_e.prototype.g=function(){return new XMLHttpRequest},_e.prototype.i=function(){return{}},ge=new _e;var Ee=45e3,Se={},Te={};function Ie(t,e,n){t.L=1,t.v=Ge(Be(e)),t.s=n,t.S=!0,Ce(t,null)}function Ce(t,e){t.G=Date.now(),xe(t),t.A=Be(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),t.C=0,n=t.l.I,t.h=new we,t.g=hr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new qt(b(t.Pa,t,t.g),t.O)),Gt(t.U,t.g,"readystatechange",t.nb),e=t.I?st(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),oe(),Xt(t.j,t.u,t.A,t.m,t.W,t.s)}function Oe(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Ae(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=ke(t,n),r==Te){4==e&&(t.o=4,ae(14),i=!1),Yt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Se){t.o=4,ae(15),Yt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Yt(t.j,t.m,r,null),Le(t,r)}Oe(t)&&r!=Te&&r!=Se&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(e),e.L=!0,ae(11))):(Yt(t.j,t.m,n,"[Invalid Chunked Response]"),De(t),Ne(t))}function ke(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Te:(n=Number(e.substring(n,r)),isNaN(n)?Se:(r+=1,r+n>e.length?Te:(e=e.substr(r,n),t.C=r+n,e)))}function xe(t){t.Y=Date.now()+t.P,Re(t,t.P)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(b(t.lb,t),e)}function Pe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Ne(t){0==t.l.H||t.J||sr(t.l,t)}function De(t){Pe(t);var e=t.M;e&&"function"==typeof e.ra&&e.ra(),t.M=null,Vt(t.V),Kt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Le(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||gn(n.h,t)))if(!t.K&&gn(n.h,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;or(n),Kn(n)}nr(n),ae(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=ue(b(n.ib,n),6e3));if(1>=pn(n.h)&&n.na){try{n.na()}catch(u){}n.na=void 0}}else cr(n,11)}else if((t.K||n.g==t)&&or(n),!x(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const e=u[3];null!=e&&(n.qa=e,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(mn(o,o.h),o.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,We(r.G,r.F,t))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=lr(r,r.I?r.oa:null,r.Y),s.K){vn(r.h,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(Pe(a),xe(a)),r.g=s}else er(r);0<n.i.length&&Xn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):Gn(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}oe(4)}catch(u){}}function Me(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function je(t){if(t.sa&&"function"==typeof t.sa)return t.sa();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=je(t),r=Me(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}r=be.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Vn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Vn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||V||this.g&&(this.h.h||this.g.ja()||Bn(this.g)))){this.J||4!=l||7==e||oe(8==e||0>=f?3:2),Pe(this);var n=this.g.da();this.aa=n;e:if(Oe(this)){var r=Bn(this.g);t="";var i=r.length,o=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){De(this),Ne(this);var s="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ae(12),De(this),Ne(this);break t}Yt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Le(this,n)}this.S?(Ae(this,l,s),V&&this.i&&3==l&&(Gt(this.U,this.V,"tick",this.mb),this.V.start())):(Yt(this.j,this.m,s,null),Le(this,s)),4==l&&De(this),this.i&&!this.J&&(4==l?sr(this.l,this):(this.i=!1,xe(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),De(this),Ne(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(Pe(this),Ae(this,t,e),this.i&&4!=t&&xe(this))}},r.cancel=function(){this.J=!0,De(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Zt(this.j,this.A),2!=this.L&&(oe(),ae(17)),De(this),this.o=2,Ne(this)):Re(this,this.Y-t)};var Ue=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ve(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ve){this.h=void 0!==e?e:t.h,ze(this,t.j),this.s=t.s,this.g=t.g,qe(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),He(this,n),this.o=t.o}else t&&(n=String(t).match(Ue))?(this.h=!!e,ze(this,n[1]||"",!0),this.s=Ke(n[2]||""),this.g=Ke(n[3]||"",!0),qe(this,n[4]),this.l=Ke(n[5]||"",!0),He(this,n[6]||"",!0),this.o=Ke(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function Be(t){return new Ve(t)}function ze(t,e,n){t.j=n?Ke(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function He(t,e,n){e instanceof nn?(t.i=e,un(t.i,t.h)):(n||(e=Qe(e,tn)),t.i=new nn(e,t.h))}function We(t,e,n){t.i.set(e,n)}function Ge(t){return We(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ke(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qe(e,Je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Qe(e,Je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Qe(n,"/"==n.charAt(0)?Ze:Ye,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qe(n,en)),t.join("")};var Je=/[#\/\?@]/g,Ye=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){rn(t),e=cn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sn(t,e){return rn(t),e=cn(t,e),t.g.has(e)}function an(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(cn(t,e),C(n)),t.h+=n.length)}function cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function un(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),an(this,n,t))}),t)),t.j=e}r=nn.prototype,r.add=function(t,e){rn(this),this.i=null,t=cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.sa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){rn(this);let e=[];if("string"===typeof t)sn(this,t)&&(e=e.concat(this.g.get(cn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return rn(this),this.i=null,t=cn(this,t),sn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};var ln=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||fn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function dn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function yn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return C(t.i)}function _n(){}function bn(){this.g=new _n}function wn(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;p(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(t,e){const n=new Qt;if(h.Image){const r=new Image;r.onload=w(Sn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(Sn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(Sn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(Sn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Sn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function Tn(t){this.l=t.fc||null,this.j=t.ob||!1}function In(t,e){It.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},_n.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},_n.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Tn,fe),Tn.prototype.g=function(){return new In(this.l,this.j)},Tn.prototype.i=function(t){return function(){return t}}({}),E(In,It);var Cn=0;function On(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,kn(t)}function kn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=In.prototype,r.open=function(t,e){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,kn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Cn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;On(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):kn(this),3==this.readyState&&On(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,An(this))},r.Ya=function(t){this.g&&(this.response=t,An(this))},r.ka=function(){this.g&&An(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(In.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var xn=h.JSON.parse;function Rn(t){It.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pn,this.L=this.M=!1}E(Rn,It);var Pn="",Nn=/^https?$/i,Dn=["POST","PUT"];function Ln(t){return U&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jn(t),Un(t)}function jn(t){t.F||(t.F=!0,Ct(t,"complete"),Ct(t,"error"))}function Fn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Vn(t)||2!=t.da()))if(t.v&&4==Vn(t))Bt(t.La,0,t);else if(Ct(t,"readystatechange"),4==Vn(t)){t.h=!1;try{const c=t.da();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.I).match(Ue)[1]||null;if(!i&&h.self&&h.self.location){var o=h.self.location.protocol;i=o.substr(0,o.length-1)}r=!Nn.test(i?i.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch(a){s=""}t.j=s+" ["+t.da()+"]",jn(t)}}finally{Un(t)}}}function Un(t,e){if(t.g){$n(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||Ct(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function $n(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}function Bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Pn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Xr){return null}}function zn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function qn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=zn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):We(t,e,n))}function Hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wn(t){this.Ga=0,this.i=[],this.j=new Qt,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hn("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hn("baseRetryDelayMs",5e3,t),this.hb=Hn("retryDelaySeedMs",1e4,t),this.eb=Hn("forwardChannelMaxRetries",2,t),this.xa=Hn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new hn(t&&t.concurrentRequestLimit),this.Ja=new bn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Gn(t){if(Qn(t),3==t.H){var e=t.W++,n=Be(t.G);We(n,"SID",t.J),We(n,"RID",e),We(n,"TYPE","terminate"),Zn(t,n),e=new be(t,t.j,e,void 0),e.L=2,e.v=Ge(Be(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),xe(e)}ur(t)}function Kn(t){t.g&&(rr(t),t.g.cancel(),t.g=null)}function Qn(t){Kn(t),t.u&&(h.clearTimeout(t.u),t.u=null),or(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Xn(t){dn(t.h)||t.m||(t.m=!0,Lt(t.Na,t),t.C=0)}function Jn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.F.concat(t.i),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=ue(b(t.Na,t,e),ar(t,t.C)),t.C++,!0))}function Yn(t,e){var n;n=e?e.m:t.W++;const r=Be(t.G);We(r,"SID",t.J),We(r,"RID",n),We(r,"AID",t.V),Zn(t,r),t.o&&t.s&&qn(r,t.o,t.s),n=new be(t,t.j,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=tr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mn(t.h,n),Ie(n,r,e)}function Zn(t,e){t.ma&&ot(t.ma,(function(t,n){We(e,n,t)})),t.l&&Fe({},(function(t,n){We(e,n,t)}))}function tr(t,e,n){n=Math.min(t.i.length,n);var r=t.l?b(t.l.Va,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].h;const a=i[s].g;if(n-=e,0>n)e=Math.max(0,i[s].h-100),o=!1;else try{wn(a,t,"req"+n+"_")}catch(ai){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.F=t,r}function er(t){t.g||t.u||(t.ba=1,Lt(t.Ma,t),t.A=0)}function nr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=ue(b(t.Ma,t),ar(t,t.A)),t.A++,!0)}function rr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new be(t,t.j,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Be(t.wa);We(e,"RID","rpc"),We(e,"SID",t.J),We(e,"CI",t.M?"0":"1"),We(e,"AID",t.V),We(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&qn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ge(Be(e)),n.s=null,n.S=!0,Ce(n,t)}function or(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function sr(t,e){var n=null;if(t.g==e){or(t),rr(t),t.g=null;var r=2}else{if(!gn(t.h,e))return;n=e.F,vn(t.h,e),r=1}if(0!=t.H)if(t.ta=e.aa,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=re(),Ct(r,new ce(r,n)),Xn(t)}else er(t);else if(i=e.o,3==i||0==i&&0<t.ta||!(1==r&&Jn(t,e)||2==r&&nr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}function ar(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function cr(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=b(t.pb,t);n||(n=new Ve("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||ze(n,"https"),Ge(n)),En(n.toString(),r)}else ae(2);t.H=0,t.l&&t.l.za(e),ur(t),Qn(t)}function ur(t){if(t.H=0,t.pa=[],t.l){const e=yn(t.h);0==e.length&&0==t.i.length||(O(t.pa,e),O(t.pa,t.i),t.h.i.length=0,C(t.i),t.i.length=0),t.l.ya()}}function lr(t,e,n){var r=n instanceof Ve?Be(n):new Ve(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),qe(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Ve(null,void 0);r&&ze(o,r),e&&(o.g=e),i&&qe(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&We(r,n,e),We(r,"VER",t.qa),Zn(t,r),r}function hr(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Rn(new Tn({ob:!0})):new Rn(t.va),e.Oa(t.I),e}function fr(){}function dr(){if(U&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(t,e){It.call(this),this.g=new Wn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vr(this)}function gr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mr(){ye.call(this),this.status=1}function vr(t){this.g=t}function yr(){this.blockSize=-1}function _r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function br(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function wr(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=0|t[i];r&&o==e||(n[i]=o,r=!1)}this.g=n}r=Rn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?de(this.u):de(ge),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){return void Mn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=I(Dn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$n(this),0<this.B&&((this.L=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=Bt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Mn(this,o)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),Un(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Un(this,!0)),Rn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Fn(this):this.kb())},r.kb=function(){Fn(this)},r.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),xn(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Wn.prototype,r.qa=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new be(this,this.j,t,void 0);let o=this.s;if(this.U&&(o?(o=st(o),ct(o,this.U)):o=this.U),null!==this.o||this.O||(i.I=o,o=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=tr(this,i,e),n=Be(this.G),We(n,"RID",t),We(n,"CVER",22),this.F&&We(n,"X-HTTP-Session-Id",this.F),Zn(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(zn(o)))+"&"+e:this.o&&qn(n,this.o,o)),mn(this.h,i),this.bb&&We(n,"TYPE","init"),this.P?(We(n,"$req",e),We(n,"SID","null"),i.ba=!0,Ie(i,n,null)):Ie(i,n,e),this.H=2}}else 3==this.H&&(t?Yn(this,t):0==this.i.length||dn(this.h)||Yn(this))},r.Ma=function(){if(this.u=null,ir(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=ue(b(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ae(10),Kn(this),ir(this))},r.ib=function(){null!=this.v&&(this.v=null,Kn(this),nr(this),ae(19))},r.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},r=fr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.Va=function(){},dr.prototype.g=function(t,e){return new pr(t,e)},E(pr,It),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=lr(t,null,t.Y),Xn(t)},pr.prototype.close=function(){Gn(this.g)},pr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=At(t),t=n);e.i.push(new ln(e.fb++,t)),3==e.H&&Xn(e)},pr.prototype.N=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pr.$.N.call(this)},E(gr,ve),E(mr,ye),E(vr,fr),vr.prototype.Ba=function(){Ct(this.g,"a")},vr.prototype.Aa=function(t){Ct(this.g,new gr(t))},vr.prototype.za=function(t){Ct(this.g,new mr)},vr.prototype.ya=function(){Ct(this.g,"b")},E(_r,yr),_r.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},_r.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(0==i)for(;o<=n;)br(this,t,o),o+=this.blockSize;if("string"===typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){br(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){br(this,r),i=0;break}}this.h=i,this.i+=e},_r.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var Er={};function Sr(t){return-128<=t&&128>t?M(Er,t,(function(t){return new wr([0|t],0>t?-1:0)})):new wr([0|t],0>t?-1:0)}function Tr(t){if(isNaN(t)||!isFinite(t))return Or;if(0>t)return Pr(Tr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cr;return new wr(e,0)}function Ir(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Pr(Ir(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tr(Math.pow(e,8)),r=Or,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=Tr(Math.pow(e,o)),r=r.R(o).add(Tr(s))):(r=r.R(n),r=r.add(Tr(s)))}return r}var Cr=4294967296,Or=Sr(0),Ar=Sr(1),kr=Sr(16777216);function xr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Rr(t){return-1==t.h}function Pr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new wr(n,~t.h).add(Ar)}function Nr(t,e){return t.add(Pr(e))}function Dr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Lr(t,e){this.g=t,this.h=e}function Mr(t,e){if(xr(e))throw Error("division by zero");if(xr(t))return new Lr(Or,Or);if(Rr(t))return e=Mr(Pr(t),e),new Lr(Pr(e.g),Pr(e.h));if(Rr(e))return e=Mr(t,Pr(e)),new Lr(Pr(e.g),e.h);if(30<t.g.length){if(Rr(t)||Rr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ar,r=e;0>=r.X(t);)n=jr(n),r=jr(r);var i=Fr(n,1),o=Fr(r,1);for(r=Fr(r,2),n=Fr(n,2);!xr(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=Fr(r,1),n=Fr(n,1)}return e=Nr(t,i.R(e)),new Lr(i,e)}for(i=Or;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=Tr(n),s=o.R(e);Rr(s)||0<s.X(t);)n-=r,o=Tr(n),s=o.R(e);xr(o)&&(o=Ar),i=i.add(o),t=Nr(t,s)}return new Lr(i,t)}function jr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new wr(n,t.h)}function Fr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new wr(i,t.h)}r=wr.prototype,r.ea=function(){if(Rr(this))return-Pr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cr+r)*e,e*=Cr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(xr(this))return"0";if(Rr(this))return"-"+Pr(this).toString(t);for(var e=Tr(Math.pow(t,6)),n=this,r="";;){var i=Mr(n,e).g;n=Nr(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,xr(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=Nr(this,t),Rr(t)?-1:xr(t)?0:1},r.abs=function(){return Rr(this)?Pr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(65535&this.D(i))+(65535&t.D(i)),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(xr(this)||xr(t))return Or;if(Rr(this))return Rr(t)?Pr(this).R(Pr(t)):Pr(Pr(this).R(t));if(Rr(t))return Pr(this.R(Pr(t)));if(0>this.X(kr)&&0>t.X(kr))return Tr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=s*c,Dr(n,2*r+2*i),n[2*r+2*i+1]+=o*c,Dr(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Dr(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Dr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new wr(n,0)},r.gb=function(t){return Mr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new wr(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new wr(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new wr(n,this.h^t.h)},dr.prototype.createWebChannel=dr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",It.prototype.listen=It.prototype.O,Rn.prototype.listenOnce=Rn.prototype.P,Rn.prototype.getLastError=Rn.prototype.Sa,Rn.prototype.getLastErrorCode=Rn.prototype.Ia,Rn.prototype.getStatus=Rn.prototype.da,Rn.prototype.getResponseJson=Rn.prototype.Wa,Rn.prototype.getResponseText=Rn.prototype.ja,Rn.prototype.send=Rn.prototype.ha,Rn.prototype.setWithCredentials=Rn.prototype.Oa,_r.prototype.digest=_r.prototype.l,_r.prototype.reset=_r.prototype.reset,_r.prototype.update=_r.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=Tr,wr.fromString=Ir;var Ur=u.createWebChannelTransport=function(){return new dr},$r=u.getStatEventTarget=function(){return re()},Vr=u.ErrorCode=le,Br=u.EventType=he,zr=u.Event=ee,qr=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hr=u.FetchXmlHttpFactory=Tn,Wr=u.WebChannel=pe,Gr=u.XhrIo=Rn,Kr=u.Md5=_r,Qr=u.Integer=wr;const Xr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Jr.UNAUTHENTICATED=new Jr(null),Jr.GOOGLE_CREDENTIALS=new Jr("google-credentials-uid"),Jr.FIRST_PARTY=new Jr("first-party-uid"),Jr.MOCK_USER=new Jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yr="9.22.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new s.Yd("@firebase/firestore");function ti(){return Zr.logLevel}function ei(t,...e){if(Zr.logLevel<=s["in"].DEBUG){const n=e.map(ii);Zr.debug(`Firestore (${Yr}): ${t}`,...n)}}function ni(t,...e){if(Zr.logLevel<=s["in"].ERROR){const n=e.map(ii);Zr.error(`Firestore (${Yr}): ${t}`,...n)}}function ri(t,...e){if(Zr.logLevel<=s["in"].WARN){const n=e.map(ii);Zr.warn(`Firestore (${Yr}): ${t}`,...n)}}function ii(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw ni(e),new Error(e)}function si(t,e){t||oi()}function ai(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ui extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Jr.UNAUTHENTICATED)))}shutdown(){}}class di{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class pi{constructor(t){this.t=t,this.currentUser=Jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new li;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new li,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{ei("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(ei("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new li)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ei("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(si("string"==typeof e.accessToken),new hi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return si(null===t||"string"==typeof t),new Jr(t)}}class gi{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Jr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class mi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new gi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yi{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&ei("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,ei("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{ei("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):ei("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(si("string"==typeof t.token),this.T=t.token,new vi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _i(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=_i(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function wi(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ui(ci.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ui(ci.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ui(ci.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ui(ci.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Si.fromMillis(Date.now())}static fromDate(t){return Si.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Si(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?wi(this.nanoseconds,t.nanoseconds):wi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ti(t)}static min(){return new Ti(new Si(0,0))}static max(){return new Ti(new Si(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,n){void 0===e?e=0:e>t.length&&oi(),void 0===n?n=t.length-e:n>t.length-e&&oi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ii.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ii?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ci extends Ii{construct(t,e,n){return new Ci(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ui(ci.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ci(e)}static emptyPath(){return new Ci([])}}const Oi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ai extends Ii{construct(t,e,n){return new Ai(t,e,n)}static isValidIdentifier(t){return Oi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ai.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ai(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ui(ci.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ui(ci.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ui(ci.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new ui(ci.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ai(e)}static emptyPath(){return new Ai([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.path=t}static fromPath(t){return new ki(Ci.fromString(t))}static fromName(t){return new ki(Ci.fromString(t).popFirst(5))}static empty(){return new ki(Ci.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ci.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ci.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ki(new Ci(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}xi.UNKNOWN_ID=-1;function Ri(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ti.fromTimestamp(1e9===r?new Si(n+1,0):new Si(n,r));return new Ni(i,ki.empty(),e)}function Pi(t){return new Ni(t.readTime,t.key,-1)}class Ni{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ni(Ti.min(),ki.empty(),-1)}static max(){return new Ni(Ti.max(),ki.empty(),-1)}}function Di(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ki.comparator(t.documentKey,e.documentKey),0!==n?n:wi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t){if(t.code!==ci.FAILED_PRECONDITION||t.message!==Li)throw t;ei("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&oi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Fi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Fi?e:Fi.resolve(e)}catch(t){return Fi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Fi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Fi.reject(e)}static resolve(t){return new Fi(((e,n)=>{e(t)}))}static reject(t){return new Fi(((e,n)=>{n(t)}))}static waitFor(t){return new Fi(((e,n)=>{let r=0,i=0,o=!1;t.forEach((t=>{++r,t.next((()=>{++i,o&&i===r&&e()}),(t=>n(t)))})),o=!0,i===r&&e()}))}static or(t){let e=Fi.resolve(!1);for(const n of t)e=e.next((t=>t?Fi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Fi(((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{o[c]=t,++s,s===i&&n(o)}),(t=>r(t)))}}))}static doWhile(t,e){return new Fi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Vi(t){return null==t}function Bi(t){return 0===t&&1/t==-1/0}function zi(t){return"number"==typeof t&&Number.isInteger(t)&&!Bi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$i.ct=-1;const qi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Hi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Wi=Hi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e){this.comparator=t,this.root=e||Yi.EMPTY}insert(t,e){return new Xi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Yi.BLACK,null,null))}remove(t){return new Xi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Yi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ji(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ji(this.root,t,this.comparator,!0)}}class Ji{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Yi{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Yi.RED,this.left=null!=r?r:Yi.EMPTY,this.right=null!=i?i:Yi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Yi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Yi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Yi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Yi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Yi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oi();if(this.right.isRed())throw oi();const t=this.left.check();if(t!==this.right.check())throw oi();return t+(this.isRed()?0:1)}}Yi.EMPTY=null,Yi.RED=!0,Yi.BLACK=!1,Yi.EMPTY=new class{constructor(){this.size=0}get key(){throw oi()}get value(){throw oi()}get color(){throw oi()}get left(){throw oi()}get right(){throw oi()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Yi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(t){this.comparator=t,this.data=new Xi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new to(this.data.getIterator())}getIteratorFrom(t){return new to(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Zi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Zi(this.comparator);return e.data=t,e}}class to{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(t){this.fields=t,t.sort(Ai.comparator)}static empty(){return new eo([])}unionWith(t){let e=new Zi(Ai.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new eo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ei(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new no("Invalid base64 string: "+t):t}}(t);return new ro(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ro(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ro.EMPTY_BYTE_STRING=new ro("");const io=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oo(t){if(si(!!t),"string"==typeof t){let e=0;const n=io.exec(t);if(si(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:so(t.seconds),nanos:so(t.nanos)}}function so(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ao(t){return"string"==typeof t?ro.fromBase64String(t):ro.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function uo(t){const e=t.mapValue.fields.__previous_value__;return co(e)?uo(e):e}function lo(t){const e=oo(t.mapValue.fields.__local_write_time__.timestampValue);return new Si(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,e,n,r,i,o,s,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class fo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new fo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof fo&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function go(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?co(t)?4:ko(t)?9007199254740991:10:oi()}function mo(t,e){if(t===e)return!0;const n=go(t);if(n!==go(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lo(t).isEqual(lo(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=oo(t.timestampValue),r=oo(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ao(t.bytesValue).isEqual(ao(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return so(t.geoPointValue.latitude)===so(e.geoPointValue.latitude)&&so(t.geoPointValue.longitude)===so(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return so(t.integerValue)===so(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=so(t.doubleValue),r=so(e.doubleValue);return n===r?Bi(n)===Bi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],mo);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Gi(n)!==Gi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!mo(n[i],r[i])))return!1;return!0}(t,e);default:return oi()}}function vo(t,e){return void 0!==(t.values||[]).find((t=>mo(t,e)))}function yo(t,e){if(t===e)return 0;const n=go(t),r=go(e);if(n!==r)return wi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return wi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=so(t.integerValue||t.doubleValue),r=so(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return _o(t.timestampValue,e.timestampValue);case 4:return _o(lo(t),lo(e));case 5:return wi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ao(t),r=ao(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=wi(n[i],r[i]);if(0!==t)return t}return wi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=wi(so(t.latitude),so(e.latitude));return 0!==n?n:wi(so(t.longitude),so(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=yo(n[i],r[i]);if(t)return t}return wi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===po.mapValue&&e===po.mapValue)return 0;if(t===po.mapValue)return 1;if(e===po.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=wi(r[s],o[s]);if(0!==t)return t;const e=yo(n[r[s]],i[o[s]]);if(0!==e)return e}return wi(r.length,o.length)}(t.mapValue,e.mapValue);default:throw oi()}}function _o(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return wi(t,e);const n=oo(t),r=oo(e),i=wi(n.seconds,r.seconds);return 0!==i?i:wi(n.nanos,r.nanos)}function bo(t){return wo(t)}function wo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=oo(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ao(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ki.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=wo(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${wo(t.fields[i])}`;return n+"}"}(t.mapValue):oi();var e,n}function Eo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function So(t){return!!t&&"integerValue"in t}function To(t){return!!t&&"arrayValue"in t}function Io(t){return!!t&&"nullValue"in t}function Co(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oo(t){return!!t&&"mapValue"in t}function Ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ao(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ko(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(t){this.value=t}static empty(){return new xo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Oo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ao(e)}setAll(t){let e=Ai.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Ao(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Oo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return mo(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Oo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ki(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new xo(Ao(this.value))}}function Ro(t){const e=[];return Ki(t.fields,((t,n)=>{const r=new Ai([t]);if(Oo(n)){const t=Ro(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new eo(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Po{constructor(t,e,n,r,i,o,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(t){return new Po(t,0,Ti.min(),Ti.min(),Ti.min(),xo.empty(),0)}static newFoundDocument(t,e,n,r){return new Po(t,1,e,Ti.min(),n,r,0)}static newNoDocument(t,e){return new Po(t,2,e,Ti.min(),Ti.min(),xo.empty(),0)}static newUnknownDocument(t,e){return new Po(t,3,e,Ti.min(),Ti.min(),xo.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ti.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ti.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Po&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Po(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,e){this.position=t,this.inclusive=e}}function Do(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?ki.comparator(ki.fromName(s.referenceValue),n.key):yo(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function Lo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mo(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e="asc"){this.field=t,this.dir=e}}function jo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{}class Uo extends Fo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Go(t,e,n):"array-contains"===e?new Jo(t,n):"in"===e?new Yo(t,n):"not-in"===e?new Zo(t,n):"array-contains-any"===e?new ts(t,n):new Uo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ko(t,n):new Qo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(yo(e,this.value)):null!==e&&go(this.value)===go(e)&&this.matchesComparison(yo(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return oi()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $o extends Fo{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new $o(t,e)}matches(t){return Vo(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft((t=>t.isInequality()));return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Vo(t){return"and"===t.op}function Bo(t){return zo(t)&&Vo(t)}function zo(t){for(const e of t.filters)if(e instanceof $o)return!1;return!0}function qo(t){if(t instanceof Uo)return t.field.canonicalString()+t.op.toString()+bo(t.value);if(Bo(t))return t.filters.map((t=>qo(t))).join(",");{const e=t.filters.map((t=>qo(t))).join(",");return`${t.op}(${e})`}}function Ho(t,e){return t instanceof Uo?function(t,e){return e instanceof Uo&&t.op===e.op&&t.field.isEqual(e.field)&&mo(t.value,e.value)}(t,e):t instanceof $o?function(t,e){return e instanceof $o&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Ho(n,e.filters[r])),!0)}(t,e):void oi()}function Wo(t){return t instanceof Uo?function(t){return`${t.field.canonicalString()} ${t.op} ${bo(t.value)}`}(t):t instanceof $o?function(t){return t.op.toString()+" {"+t.getFilters().map(Wo).join(" ,")+"}"}(t):"Filter"}class Go extends Uo{constructor(t,e,n){super(t,e,n),this.key=ki.fromName(n.referenceValue)}matches(t){const e=ki.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ko extends Uo{constructor(t,e){super(t,"in",e),this.keys=Xo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Qo extends Uo{constructor(t,e){super(t,"not-in",e),this.keys=Xo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Xo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ki.fromName(t.referenceValue)))}class Jo extends Uo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return To(e)&&vo(e.arrayValue,this.value)}}class Yo extends Uo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&vo(this.value.arrayValue,e)}}class Zo extends Uo{constructor(t,e){super(t,"not-in",e)}matches(t){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!vo(this.value.arrayValue,e)}}class ts extends Uo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!To(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>vo(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.dt=null}}function ns(t,e=null,n=[],r=[],i=null,o=null,s=null){return new es(t,e,n,r,i,o,s)}function rs(t){const e=ai(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>qo(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Vi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>bo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>bo(t))).join(",")),e.dt=t}return e.dt}function is(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ho(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lo(t.startAt,e.startAt)&&Lo(t.endAt,e.endAt)}function os(t){return ki.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function as(t,e,n,r,i,o,s,a){return new ss(t,e,n,r,i,o,s,a)}function cs(t){return new ss(t)}function us(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ls(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hs(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function fs(t){return null!==t.collectionGroup}function ds(t){const e=ai(t);if(null===e.wt){e.wt=[];const t=hs(e),n=ls(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Mo(t)),e.wt.push(new Mo(Ai.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Mo(Ai.keyField(),t))}}}return e.wt}function ps(t){const e=ai(t);if(!e._t)if("F"===e.limitType)e._t=ns(e.path,e.collectionGroup,ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ds(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Mo(i.field,e))}const n=e.endAt?new No(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new No(e.startAt.position,e.startAt.inclusive):null;e._t=ns(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function gs(t,e){e.getFirstInequalityField(),hs(t);const n=t.filters.concat([e]);return new ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ms(t,e,n){return new ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vs(t,e){return is(ps(t),ps(e))&&t.limitType===e.limitType}function ys(t){return`${rs(ps(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Wo(t))).join(", ")}]`),Vi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>bo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>bo(t))).join(",")),`Target(${e})`}(ps(t))}; limitType=${t.limitType})`}function bs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ki.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of ds(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Do(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,ds(t),e))&&!(t.endAt&&!function(t,e,n){const r=Do(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,ds(t),e))}(t,e)}function ws(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Es(t){return(e,n)=>{let r=!1;for(const i of ds(t)){const t=Ss(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ss(t,e,n){const r=t.field.isKeyField()?ki.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?yo(r,i):oi()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oi()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ki(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Qi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Xi(ki.comparator);function Cs(){return Is}const Os=new Xi(ki.comparator);function As(...t){let e=Os;for(const n of t)e=e.insert(n.key,n);return e}function ks(t){let e=Os;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function xs(){return Ps()}function Rs(){return Ps()}function Ps(){return new Ts((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ns=new Xi(ki.comparator),Ds=new Zi(ki.comparator);function Ls(...t){let e=Ds;for(const n of t)e=e.add(n);return e}const Ms=new Zi(wi);function js(){return Ms}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(e)?"-0":e}}function Us(t){return{integerValue:""+t}}function $s(t,e){return zi(e)?Us(e):Fs(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this._=void 0}}function Bs(t,e,n){return t instanceof Hs?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&co(e)&&(e=uo(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ws?Gs(t,e):t instanceof Ks?Qs(t,e):function(t,e){const n=qs(t,e),r=Js(n)+Js(t.gt);return So(n)&&So(t.gt)?Us(r):Fs(t.serializer,r)}(t,e)}function zs(t,e,n){return t instanceof Ws?Gs(t,e):t instanceof Ks?Qs(t,e):n}function qs(t,e){return t instanceof Xs?So(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Hs extends Vs{}class Ws extends Vs{constructor(t){super(),this.elements=t}}function Gs(t,e){const n=Ys(e);for(const r of t.elements)n.some((t=>mo(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Ks extends Vs{constructor(t){super(),this.elements=t}}function Qs(t,e){let n=Ys(e);for(const r of t.elements)n=n.filter((t=>!mo(t,r)));return{arrayValue:{values:n}}}class Xs extends Vs{constructor(t,e){super(),this.serializer=t,this.gt=e}}function Js(t){return so(t.integerValue||t.doubleValue)}function Ys(t){return To(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ws&&e instanceof Ws||t instanceof Ks&&e instanceof Ks?Ei(t.elements,e.elements,mo):t instanceof Xs&&e instanceof Xs?mo(t.gt,e.gt):t instanceof Hs&&e instanceof Hs}(t.transform,e.transform)}class ta{constructor(t,e){this.version=t,this.transformResults=e}}class ea{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ea}static exists(t){return new ea(void 0,t)}static updateTime(t){return new ea(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function na(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ra{}function ia(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new pa(t.key,ea.none()):new ua(t.key,t.data,ea.none());{const n=t.data,r=xo.empty();let i=new Zi(Ai.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new la(t.key,r,new eo(i.toArray()),ea.none())}}function oa(t,e,n){t instanceof ua?function(t,e,n){const r=t.value.clone(),i=fa(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof la?function(t,e,n){if(!na(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=fa(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ha(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function sa(t,e,n,r){return t instanceof ua?function(t,e,n,r){if(!na(t.precondition,e))return n;const i=t.value.clone(),o=da(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof la?function(t,e,n,r){if(!na(t.precondition,e))return n;const i=da(t.fieldTransforms,r,e),o=e.data;return o.setAll(ha(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return na(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function aa(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=qs(r.transform,t||null);null!=i&&(null===n&&(n=xo.empty()),n.set(r.field,i))}return n||null}function ca(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ei(t,e,((t,e)=>Zs(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ua extends ra{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class la extends ra{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ha(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function fa(t,e,n){const r=new Map;si(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,zs(s,a,n[i]))}return r}function da(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Bs(t,o,e))}return r}class pa extends ra{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ga extends ra{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&oa(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Rs();return this.mutations.forEach((r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=ia(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(Ti.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ls())}isEqual(t){return this.batchId===t.batchId&&Ei(this.mutations,t.mutations,((t,e)=>ca(t,e)))&&Ei(this.baseMutations,t.baseMutations,((t,e)=>ca(t,e)))}}class va{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){si(t.mutations.length===n.length);let r=Ns;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new va(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ba,wa;function Ea(t){switch(t){default:return oi();case ci.CANCELLED:case ci.UNKNOWN:case ci.DEADLINE_EXCEEDED:case ci.RESOURCE_EXHAUSTED:case ci.INTERNAL:case ci.UNAVAILABLE:case ci.UNAUTHENTICATED:return!1;case ci.INVALID_ARGUMENT:case ci.NOT_FOUND:case ci.ALREADY_EXISTS:case ci.PERMISSION_DENIED:case ci.FAILED_PRECONDITION:case ci.ABORTED:case ci.OUT_OF_RANGE:case ci.UNIMPLEMENTED:case ci.DATA_LOSS:return!0}}function Sa(t){if(void 0===t)return ni("GRPC error has no .code"),ci.UNKNOWN;switch(t){case ba.OK:return ci.OK;case ba.CANCELLED:return ci.CANCELLED;case ba.UNKNOWN:return ci.UNKNOWN;case ba.DEADLINE_EXCEEDED:return ci.DEADLINE_EXCEEDED;case ba.RESOURCE_EXHAUSTED:return ci.RESOURCE_EXHAUSTED;case ba.INTERNAL:return ci.INTERNAL;case ba.UNAVAILABLE:return ci.UNAVAILABLE;case ba.UNAUTHENTICATED:return ci.UNAUTHENTICATED;case ba.INVALID_ARGUMENT:return ci.INVALID_ARGUMENT;case ba.NOT_FOUND:return ci.NOT_FOUND;case ba.ALREADY_EXISTS:return ci.ALREADY_EXISTS;case ba.PERMISSION_DENIED:return ci.PERMISSION_DENIED;case ba.FAILED_PRECONDITION:return ci.FAILED_PRECONDITION;case ba.ABORTED:return ci.ABORTED;case ba.OUT_OF_RANGE:return ci.OUT_OF_RANGE;case ba.UNIMPLEMENTED:return ci.UNIMPLEMENTED;case ba.DATA_LOSS:return ci.DATA_LOSS;default:return oi()}}(wa=ba||(ba={}))[wa.OK=0]="OK",wa[wa.CANCELLED=1]="CANCELLED",wa[wa.UNKNOWN=2]="UNKNOWN",wa[wa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wa[wa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wa[wa.NOT_FOUND=5]="NOT_FOUND",wa[wa.ALREADY_EXISTS=6]="ALREADY_EXISTS",wa[wa.PERMISSION_DENIED=7]="PERMISSION_DENIED",wa[wa.UNAUTHENTICATED=16]="UNAUTHENTICATED",wa[wa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wa[wa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wa[wa.ABORTED=10]="ABORTED",wa[wa.OUT_OF_RANGE=11]="OUT_OF_RANGE",wa[wa.UNIMPLEMENTED=12]="UNIMPLEMENTED",wa[wa.INTERNAL=13]="INTERNAL",wa[wa.UNAVAILABLE=14]="UNAVAILABLE",wa[wa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ia}static getOrCreateInstance(){return null===Ia&&(Ia=new Ta),Ia}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Ia=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Qr([4294967295,4294967295],0);function Aa(t){const e=Ca().encode(t),n=new Kr;return n.update(e),new Uint8Array(n.digest())}function ka(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([i,o],0)]}class xa{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ra(`Invalid padding: ${e}`);if(n<0)throw new Ra(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Ra(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Ra(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=Qr.fromNumber(this.It)}Et(t,e,n){let r=t.add(e.multiply(Qr.fromNumber(n)));return 1===r.compare(Oa)&&(r=new Qr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=Aa(t),[n,r]=ka(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);if(!this.At(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new xa(i,r,e);return n.forEach((t=>o.insert(t))),o}insert(t){if(0===this.It)return;const e=Aa(t),[n,r]=ka(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);this.Rt(t)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Na.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Pa(Ti.min(),r,new Xi(wi),Cs(),Ls())}}class Na{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Na(n,e,Ls(),Ls(),Ls())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e,n,r){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=r}}class La{constructor(t,e){this.targetId=t,this.Vt=e}}class Ma{constructor(t,e,n=ro.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ja{constructor(){this.St=0,this.Dt=$a(),this.Ct=ro.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=Ls(),e=Ls(),n=Ls();return this.Dt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:oi()}})),new Na(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=$a()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Fa{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Cs(),this.zt=Ua(),this.Wt=new Xi(wi)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,(e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:oi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach(((t,n)=>{this.te(n)&&e(n)}))}ne(t){var e;const n=t.targetId,r=t.Vt.count,i=this.se(n);if(i){const o=i.target;if(os(o))if(0===r){const t=new ki(o.path);this.Yt(n,t,Po.newNoDocument(t,Ti.min()))}else si(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(t,i);if(0!==r){this.ee(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=Ta.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,o,s,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(s=null===(o=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===o?void 0:o.length)&&void 0!==s?s:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:r}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=n;let a,c;try{a=ao(i).toUint8Array()}catch(t){if(t instanceof no)return ri("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new xa(a,o,s)}catch(t){return ri(t instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:r!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(o)||(this.Yt(t,n,null),r++)})),r}ce(t){const e=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&os(i.target)){const e=new ki(i.target.path);null!==this.jt.get(e)||this.ae(r,e)||this.Yt(r,e,Po.newNoDocument(e,t))}n.Mt&&(e.set(r,n.Ot()),n.Ft())}}));let n=Ls();this.zt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.jt.forEach(((e,n)=>n.setReadTime(t)));const r=new Pa(t,e,this.Wt,this.jt,n);return this.jt=Cs(),this.zt=Ua(),this.Wt=new Xi(wi),r}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,e)?r.Bt(e,1):r.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new ja,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new Zi(wi),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||ei("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new ja),this.Gt.getRemoteKeysForTarget(t).forEach((e=>{this.Yt(t,e,null)}))}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function Ua(){return new Xi(ki.comparator)}function $a(){return new Xi(ki.comparator)}const Va=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ba=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),za=(()=>{const t={and:"AND",or:"OR"};return t})();class qa{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ha(t,e){return t.useProto3Json||Vi(e)?e:{value:e}}function Wa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ga(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ka(t,e){return Wa(t,e.toTimestamp())}function Qa(t){return si(!!t),Ti.fromTimestamp(function(t){const e=oo(t);return new Si(e.seconds,e.nanos)}(t))}function Xa(t,e){return function(t){return new Ci(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ja(t){const e=Ci.fromString(t);return si(bc(e)),e}function Ya(t,e){return Xa(t.databaseId,e.path)}function Za(t,e){const n=Ja(e);if(n.get(1)!==t.databaseId.projectId)throw new ui(ci.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ui(ci.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ki(rc(n))}function tc(t,e){return Xa(t.databaseId,e)}function ec(t){const e=Ja(t);return 4===e.length?Ci.emptyPath():rc(e)}function nc(t){return new Ci(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rc(t){return si(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ic(t,e,n){return{name:Ya(t,e),fields:n.value.mapValue.fields}}function oc(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:oi()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(si(void 0===e||"string"==typeof e),ro.fromBase64String(e||"")):(si(void 0===e||e instanceof Uint8Array),ro.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?ci.UNKNOWN:Sa(t.code);return new ui(e,t.message||"")}(s);n=new Ma(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Za(t,r.document.name),o=Qa(r.document.updateTime),s=r.document.createTime?Qa(r.document.createTime):Ti.min(),a=new xo({mapValue:{fields:r.document.fields}}),c=Po.newFoundDocument(i,o,s,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Da(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Za(t,r.document),o=r.readTime?Qa(r.readTime):Ti.min(),s=Po.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Da([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Za(t,r.document),o=r.removedTargetIds||[];n=new Da([],o,i,null)}else{if(!("filter"in e))return oi();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,o=new _a(r,i),s=t.targetId;n=new La(s,o)}}return n}function sc(t,e){let n;if(e instanceof ua)n={update:ic(t,e.key,e.value)};else if(e instanceof pa)n={delete:Ya(t,e.key)};else if(e instanceof la)n={update:ic(t,e.key,e.data),updateMask:_c(e.fieldMask)};else{if(!(e instanceof ga))return oi();n={verify:Ya(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Hs)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ws)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ks)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Xs)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw oi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ka(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:oi()}(t,e.precondition)),n}function ac(t,e){return t&&t.length>0?(si(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Qa(t.updateTime):Qa(e);return n.isEqual(Ti.min())&&(n=Qa(e)),new ta(n,t.transformResults||[])}(t,e)))):[]}function cc(t,e){return{documents:[tc(t,e.path)]}}function uc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=tc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=tc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return yc($o.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:mc(t.field),direction:dc(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=Ha(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function lc(t){let e=ec(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){si(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=function(t){const e=fc(t);return e instanceof $o&&Bo(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((t=>function(t){return new Mo(vc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Vi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new No(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new No(n,e)}(n.endAt)),as(e,i,s,o,a,"F",c,u)}function hc(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oi()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function fc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=vc(t.unaryFilter.field);return Uo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=vc(t.unaryFilter.field);return Uo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vc(t.unaryFilter.field);return Uo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=vc(t.unaryFilter.field);return Uo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return oi()}}(t):void 0!==t.fieldFilter?function(t){return Uo.create(vc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oi()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return $o.create(t.compositeFilter.filters.map((t=>fc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return oi()}}(t.compositeFilter.op))}(t):oi()}function dc(t){return Va[t]}function pc(t){return Ba[t]}function gc(t){return za[t]}function mc(t){return{fieldPath:t.canonicalString()}}function vc(t){return Ai.fromServerFormat(t.fieldPath)}function yc(t){return t instanceof Uo?function(t){if("=="===t.op){if(Co(t.value))return{unaryFilter:{field:mc(t.field),op:"IS_NAN"}};if(Io(t.value))return{unaryFilter:{field:mc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Co(t.value))return{unaryFilter:{field:mc(t.field),op:"IS_NOT_NAN"}};if(Io(t.value))return{unaryFilter:{field:mc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mc(t.field),op:pc(t.op),value:t.value}}}(t):t instanceof $o?function(t){const e=t.getFilters().map((t=>yc(t)));return 1===e.length?e[0]:{compositeFilter:{op:gc(t.op),filters:e}}}(t):oi()}function _c(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function bc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,n,r,i=Ti.min(),o=Ti.min(),s=ro.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(t){return new wc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.fe=t}}function Sc(t){const e=lc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ms(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(so(t.integerValue));else if("doubleValue"in t){const n=so(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),Bi(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(ao(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?ko(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):oi()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const r of Object.keys(n))this.Te(r,e),this.me(n[r],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const r of n)this.me(r,e)}ve(t,e){this.ye(e,37),ki.fromName(t).path.forEach((t=>{this.ye(e,60),this.be(t,e)}))}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}Tc.Ve=new Tc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(){this.rn=new Cc}addToCollectionParentIndex(t,e){return this.rn.add(e),Fi.resolve()}getCollectionParents(t,e){return Fi.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return Fi.resolve()}deleteFieldIndex(t,e){return Fi.resolve()}getDocumentsMatchingTarget(t,e){return Fi.resolve(null)}getIndexType(t,e){return Fi.resolve(0)}getFieldIndexes(t,e){return Fi.resolve([])}getNextCollectionGroupToUpdate(t){return Fi.resolve(null)}getMinOffset(t,e){return Fi.resolve(Ni.min())}getMinOffsetFromCollectionGroup(t,e){return Fi.resolve(Ni.min())}updateCollectionGroup(t,e,n){return Fi.resolve()}updateIndexEntries(t,e){return Fi.resolve()}}class Cc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Zi(Ci.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Zi(Ci.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Oc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Oc(t,Oc.DEFAULT_COLLECTION_PERCENTILE,Oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oc.DEFAULT_COLLECTION_PERCENTILE=10,Oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oc.DEFAULT=new Oc(41943040,Oc.DEFAULT_COLLECTION_PERCENTILE,Oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oc.DISABLED=new Oc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Ac(0)}static Mn(){return new Ac(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(){this.changes=new Ts((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Po.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Fi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&sa(n.mutation,t,eo.empty(),Si.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ls()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ls()){const r=xs();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=As();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=xs();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ls())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Cs();const o=Ps(),s=Ps();return e.forEach(((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof la)?i=i.insert(e.key,e):void 0!==s?(o.set(e.key,s.mutation.getFieldMask()),sa(s.mutation,e,s.mutation.getFieldMask(),Si.now())):o.set(e.key,eo.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>o.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new xc(e,null!==(n=o.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=Ps();let r=new Xi(((t,e)=>t-e)),i=Ls();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||eo.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||Ls()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=Rs();c.forEach((t=>{if(!i.has(t)){const r=ia(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Fi.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ki.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Fi.resolve(xs());let s=-1,a=i;return o.next((e=>Fi.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?Fi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ls()))).next((t=>({batchId:s,changes:ks(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ki(e)).next((t=>{let e=As();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=As();return this.indexManager.getCollectionParents(t,r).next((o=>Fi.forEach(o,(o=>{const s=function(t,e){return new ss(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,s,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Po.newInvalidDocument(r)))}));let n=As();return t.forEach(((t,i)=>{const o=r.get(t);void 0!==o&&sa(o.mutation,i,eo.empty(),Si.now()),bs(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return Fi.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:Qa(n.createTime)}),Fi.resolve()}getNamedQuery(t,e){return Fi.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:Sc(t.bundledQuery),readTime:Qa(t.readTime)}}(e)),Fi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.overlays=new Xi(ki.comparator),this.ls=new Map}getOverlay(t,e){return Fi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=xs();return Fi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.we(t,e,r)})),Fi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.ls.delete(n)),Fi.resolve()}getOverlaysForCollection(t,e,n){const r=xs(),i=e.length+1,o=new ki(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Fi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Xi(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=xs(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=xs(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=r)break;return Fi.resolve(s)}we(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ya(e,n));let i=this.ls.get(e);void 0===i&&(i=Ls(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.fs=new Zi(Lc.ds),this.ws=new Zi(Lc._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new Lc(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ys(new Lc(t,e))}ps(t,e){t.forEach((t=>this.removeReference(t,e)))}Is(t){const e=new ki(new Ci([])),n=new Lc(e,t),r=new Lc(e,t+1),i=[];return this.ws.forEachInRange([n,r],(t=>{this.ys(t),i.push(t.key)})),i}Ts(){this.fs.forEach((t=>this.ys(t)))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new ki(new Ci([])),n=new Lc(e,t),r=new Lc(e,t+1);let i=Ls();return this.ws.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Lc(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Lc{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return ki.comparator(t.key,e.key)||wi(t.As,e.As)}static _s(t,e){return wi(t.As,e.As)||ki.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new Zi(Lc.ds)}checkEmpty(t){return Fi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ma(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.Rs=this.Rs.add(new Lc(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return Fi.resolve(o)}lookupMutationBatch(t,e){return Fi.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.bs(n),i=r<0?0:r;return Fi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Fi.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return Fi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Lc(e,0),r=new Lc(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(t=>{const e=this.Ps(t.As);i.push(e)})),Fi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Zi(wi);return e.forEach((t=>{const e=new Lc(t,0),r=new Lc(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],(t=>{n=n.add(t.As)}))})),Fi.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;ki.isDocumentKey(i)||(i=i.child(""));const o=new Lc(new ki(i),0);let s=new Zi(wi);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.As)),!0)}),o),Fi.resolve(this.Vs(s))}Vs(t){const e=[];return t.forEach((t=>{const n=this.Ps(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){si(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Fi.forEach(e.mutations,(r=>{const i=new Lc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Rs=n}))}Cn(t){}containsKey(t,e){const n=new Lc(e,0),r=this.Rs.firstAfterOrEqual(n);return Fi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Fi.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.Ds=t,this.docs=new Xi(ki.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Fi.resolve(n?n.document.mutableCopy():Po.newInvalidDocument(e))}getEntries(t,e){let n=Cs();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Po.newInvalidDocument(t))})),Fi.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Cs();const o=e.path,s=new ki(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:t,value:{document:s}}=a.getNext();if(!o.isPrefixOf(t.path))break;t.path.length>o.length+1||Di(Pi(s),n)<=0||(r.has(s.key)||bs(e,s))&&(i=i.insert(s.key,s.mutableCopy()))}return Fi.resolve(i)}getAllFromCollectionGroup(t,e,n,r){oi()}Cs(t,e){return Fi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Fc(this)}getSize(t){return Fi.resolve(this.size)}}class Fc extends kc{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.os.addEntry(t,r)):this.os.removeEntry(n)})),Fi.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t){this.persistence=t,this.xs=new Ts((t=>rs(t)),is),this.lastRemoteSnapshotVersion=Ti.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Dc,this.targetCount=0,this.Ms=Ac.kn()}forEachTarget(t,e){return this.xs.forEach(((t,n)=>e(n))),Fi.resolve()}getLastRemoteSnapshotVersion(t){return Fi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Fi.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),Fi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),Fi.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Ac(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,Fi.resolve()}updateTargetData(t,e){return this.Fn(e),Fi.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,Fi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.xs.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)})),Fi.waitFor(i).next((()=>r))}getTargetCount(t){return Fi.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return Fi.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),Fi.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Fi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),Fi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return Fi.resolve(n)}containsKey(t,e){return Fi.resolve(this.ks.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e){this.$s={},this.overlays={},this.Os=new $i(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Uc(this),this.indexManager=new Ic,this.remoteDocumentCache=function(t){return new jc(t)}((t=>this.referenceDelegate.Ls(t))),this.serializer=new Ec(e),this.qs=new Pc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Nc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new Mc(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){ei("MemoryPersistence","Starting transaction:",t);const r=new Vc(this.Os.next());return this.referenceDelegate.Us(),n(r).next((t=>this.referenceDelegate.Ks(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Gs(t,e){return Fi.or(Object.values(this.$s).map((n=>()=>n.containsKey(t,e))))}}class Vc extends Mi{constructor(t){super(),this.currentSequenceNumber=t}}class Bc{constructor(t){this.persistence=t,this.Qs=new Dc,this.js=null}static zs(t){return new Bc(t)}get Ws(){if(this.js)return this.js;throw oi()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),Fi.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),Fi.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),Fi.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach((t=>this.Ws.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ws.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Fi.forEach(this.Ws,(n=>{const r=ki.fromPath(n);return this.Hs(t,r).next((t=>{t||e.removeEntry(r,Ti.min())}))})).next((()=>(this.js=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hs(t,e).next((t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())}))}Ls(t){return 0}Hs(t,e){return Fi.or([()=>Fi.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=r}static Li(t,e){let n=Ls(),r=Ls();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ki(t,e).next((i=>i||this.Gi(t,e,r,n))).next((n=>n||this.Qi(t,e)))}Ki(t,e){if(us(e))return Fi.resolve(null);let n=ps(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=ms(e,null,"F"),n=ps(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ls(...r);return this.Ui.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const o=this.ji(e,r);return this.zi(e,o,i,n.readTime)?this.Ki(t,ms(e,null,"F")):this.Wi(t,o,e,n)}))))})))))}Gi(t,e,n,r){return us(e)||r.isEqual(Ti.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next((i=>{const o=this.ji(e,i);return this.zi(e,o,n,r)?this.Qi(t,e):(ti()<=s["in"].DEBUG&&ei("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_s(e)),this.Wi(t,o,e,Ri(r,-1)))}))}ji(t,e){let n=new Zi(Es(t));return e.forEach(((e,r)=>{bs(t,r)&&(n=n.add(r))})),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,e){return ti()<=s["in"].DEBUG&&ei("QueryEngine","Using full collection scan to execute query:",_s(e)),this.Ui.getDocumentsMatchingQuery(t,e,Ni.min())}Wi(t,e,n,r){return this.Ui.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new Xi(wi),this.Yi=new Ts((t=>rs(t)),is),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Rc(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function Wc(t,e,n,r){return new Hc(t,e,n,r)}async function Gc(t,e){const n=ai(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],o=[];let s=Ls();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({er:t,removedBatchIds:i,addedBatchIds:o})))}))}))}function Kc(t,e){const n=ai(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=Fi.resolve();return o.forEach((t=>{s=s.next((()=>r.getEntry(e,t))).next((e=>{const o=n.docVersions.get(t);si(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),s.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ls();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Qc(t){const e=ai(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function Xc(t,e){const n=ai(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const s=[];e.targetChanges.forEach(((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Bs.removeMatchingKeys(t,o.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(t,o.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ro.EMPTY_BYTE_STRING,Ti.min()).withLastLimboFreeSnapshotVersion(Ti.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.Bs.updateTargetData(t,u))}));let a=Cs(),c=Ls();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),s.push(Jc(t,o,e.documentUpdates).next((t=>{a=t.nr,c=t.sr}))),!r.isEqual(Ti.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next((e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,r)));s.push(e)}return Fi.waitFor(s).next((()=>o.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=i,t)))}function Jc(t,e,n){let r=Ls(),i=Ls();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Cs();return n.forEach(((n,o)=>{const s=t.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(Ti.min())?(e.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o),r=r.insert(n,o)):ei("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{nr:r,sr:i}}))}function Yc(t,e){const n=ai(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Zc(t,e){const n=ai(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Bs.getTargetData(t,e).next((i=>i?(r=i,Fi.resolve(r)):n.Bs.allocateTargetId(t).next((i=>(r=new wc(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ji.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function tu(t,e,n){const r=ai(t),i=r.Ji.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ui(t))throw t;ei("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function eu(t,e,n){const r=ai(t);let i=Ti.min(),o=Ls();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=ai(t),i=r.Yi.get(n);return void 0!==i?Fi.resolve(r.Ji.get(i)):r.Bs.getTargetData(e,n)}(r,t,ps(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{o=t}))})).next((()=>r.Hi.getDocumentsMatchingQuery(t,e,n?i:Ti.min(),n?o:Ls()))).next((t=>(nu(r,ws(e),t),{documents:t,ir:o})))))}function nu(t,e,n){let r=t.Xi.get(e)||Ti.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Xi.set(e,r)}class ru{constructor(){this.activeTargetIds=js()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class iu{constructor(){this.Hr=new ru,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new ru,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{Yr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){ei("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){ei("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au=null;function cu(){return null===au?au=268435456+Math.round(2147483648*Math.random()):au++,"0x"+au.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const uu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="WebChannelConnection";class fu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,r,i){const o=cu(),s=this.To(t,e);ei("RestConnection",`Sending RPC '${t}' ${o}:`,s,n);const a={};return this.Eo(a,r,i),this.Ao(t,s,a,n).then((e=>(ei("RestConnection",`Received RPC '${t}' ${o}: `,e),e)),(e=>{throw ri("RestConnection",`RPC '${t}' ${o} failed with error: `,e,"url: ",s,"request:",n),e}))}vo(t,e,n,r,i,o){return this.Io(t,e,n,r,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Yr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}To(t,e){const n=uu[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,r){const i=cu();return new Promise(((o,s)=>{const a=new Gr;a.setWithCredentials(!0),a.listenOnce(Br.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const e=a.getResponseJson();ei(hu,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),o(e);break;case Vr.TIMEOUT:ei(hu,`RPC '${t}' ${i} timed out`),s(new ui(ci.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const n=a.getStatus();if(ei(hu,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ci).indexOf(e)>=0?e:ci.UNKNOWN}(e.status);s(new ui(t,e.message))}else s(new ui(ci.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new ui(ci.UNAVAILABLE,"Connection failed."));break;default:oi()}}finally{ei(hu,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);ei(hu,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const r=cu(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ur(),s=$r(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Hr({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");ei(hu,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=o.createWebChannel(u,a);let h=!1,f=!1;const d=new lu({ro:e=>{f?ei(hu,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(ei(hu,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),ei(hu,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},oo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,Wr.EventType.OPEN,(()=>{f||ei(hu,`RPC '${t}' stream ${r} transport opened.`)})),p(l,Wr.EventType.CLOSE,(()=>{f||(f=!0,ei(hu,`RPC '${t}' stream ${r} transport closed`),d.wo())})),p(l,Wr.EventType.ERROR,(e=>{f||(f=!0,ri(hu,`RPC '${t}' stream ${r} transport errored:`,e),d.wo(new ui(ci.UNAVAILABLE,"The operation could not be completed")))})),p(l,Wr.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];si(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){ei(hu,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=ba[t];if(void 0!==e)return Sa(e)}(e),i=s.message;void 0===n&&(n=ci.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),f=!0,d.wo(new ui(n,i)),l.close()}else ei(hu,`RPC '${t}' stream ${r} received:`,i),d._o(i)}})),p(s,zr.STAT_EVENT,(e=>{e.stat===qr.PROXY?ei(hu,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===qr.NOPROXY&&ei(hu,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.fo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){return new qa(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,e-n);r>0&&ei("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e,n,r,i,o,s,a){this.ii=t,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new gu(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===ci.RESOURCE_EXHAUSTED?(ni(e.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===ci.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Fo===e&&this.Zo(t,n)}),(e=>{t((()=>{const t=new ui(ci.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)}))}))}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((t=>{n((()=>this.tu(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(t){return ei("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.Fo===t?e():(ei("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vu extends mu{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=oc(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ti.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ti.min():e.readTime?Qa(e.readTime):Ti.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=nc(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=os(r)?{documents:cc(t,r)}:{query:uc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ga(t,e.resumeToken);const r=Ha(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ti.min())>0){n.readTime=Wa(t,e.snapshotVersion.toTimestamp());const r=Ha(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=hc(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=nc(this.serializer),e.removeTarget=t,this.Wo(e)}}class yu extends mu{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(si(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const e=ac(t.writeResults,t.commitTime),n=Qa(t.commitTime);return this.listener.cu(n,e)}return si(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=nc(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>sc(this.serializer,t)))};this.Wo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new ui(ci.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ci.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ui(ci.UNKNOWN,t.toString())}))}vo(t,e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.vo(t,e,n,i,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ci.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ui(ci.UNKNOWN,t.toString())}))}terminate(){this.lu=!0}}class bu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ni(e),this.mu=!1):ei("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((t=>{n.enqueueAndForget((async()=>{xu(this)&&(ei("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ai(t);e.vu.add(4),await Su(e),e.bu.set("Unknown"),e.vu.delete(4),await Eu(e)}(this))}))})),this.bu=new bu(n,r)}}async function Eu(t){if(xu(t))for(const e of t.Ru)await e(!0)}async function Su(t){for(const e of t.Ru)await e(!1)}function Tu(t,e){const n=ai(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),ku(n)?Au(n):Ku(n).Ko()&&Cu(n,e))}function Iu(t,e){const n=ai(t),r=Ku(n);n.Au.delete(e),r.Ko()&&Ou(n,e),0===n.Au.size&&(r.Ko()?r.jo():xu(n)&&n.bu.set("Unknown"))}function Cu(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ti.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ku(t).su(e)}function Ou(t,e){t.Vu.qt(e),Ku(t).iu(e)}function Au(t){t.Vu=new Fa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ku(t).start(),t.bu.gu()}function ku(t){return xu(t)&&!Ku(t).Uo()&&t.Au.size>0}function xu(t){return 0===ai(t).vu.size}function Ru(t){t.Vu=void 0}async function Pu(t){t.Au.forEach(((e,n)=>{Cu(t,e)}))}async function Nu(t,e){Ru(t),ku(t)?(t.bu.Iu(e),Au(t)):t.bu.set("Unknown")}async function Du(t,e,n){if(t.bu.set("Online"),e instanceof Ma&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Au.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Au.delete(r),t.Vu.removeTarget(r))}(t,e)}catch(n){ei("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Lu(t,n)}else if(e instanceof Da?t.Vu.Ht(e):e instanceof La?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Ti.min()))try{const e=await Qc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(r);i&&t.Au.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Au.get(e);if(!r)return;t.Au.set(e,r.withResumeToken(ro.EMPTY_BYTE_STRING,r.snapshotVersion)),Ou(t,e);const i=new wc(r.target,e,n,r.sequenceNumber);Cu(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){ei("RemoteStore","Failed to raise snapshot:",e),await Lu(t,e)}}async function Lu(t,e,n){if(!Ui(e))throw e;t.vu.add(1),await Su(t),t.bu.set("Offline"),n||(n=()=>Qc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ei("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Eu(t)}))}function Mu(t,e){return e().catch((n=>Lu(t,n,e)))}async function ju(t){const e=ai(t),n=Qu(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Fu(e);)try{const t=await Yc(e.localStore,r);if(null===t){0===e.Eu.length&&n.jo();break}r=t.batchId,Uu(e,t)}catch(t){await Lu(e,t)}$u(e)&&Vu(e)}function Fu(t){return xu(t)&&t.Eu.length<10}function Uu(t,e){t.Eu.push(e);const n=Qu(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function $u(t){return xu(t)&&!Qu(t).Uo()&&t.Eu.length>0}function Vu(t){Qu(t).start()}async function Bu(t){Qu(t).hu()}async function zu(t){const e=Qu(t);for(const n of t.Eu)e.uu(n.mutations)}async function qu(t,e,n){const r=t.Eu.shift(),i=va.from(r,e,n);await Mu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await ju(t)}async function Hu(t,e){e&&Qu(t).ou&&await async function(t,e){if(n=e.code,Ea(n)&&n!==ci.ABORTED){const n=t.Eu.shift();Qu(t).Qo(),await Mu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ju(t)}var n}(t,e),$u(t)&&Vu(t)}async function Wu(t,e){const n=ai(t);n.asyncQueue.verifyOperationInProgress(),ei("RemoteStore","RemoteStore received new credentials");const r=xu(n);n.vu.add(3),await Su(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Eu(n)}async function Gu(t,e){const n=ai(t);e?(n.vu.delete(2),await Eu(n)):e||(n.vu.add(2),await Su(n),n.bu.set("Unknown"))}function Ku(t){return t.Su||(t.Su=function(t,e,n){const r=ai(t);return r.fu(),new vu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{uo:Pu.bind(null,t),ao:Nu.bind(null,t),nu:Du.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Qo(),ku(t)?Au(t):t.bu.set("Unknown")):(await t.Su.stop(),Ru(t))}))),t.Su}function Qu(t){return t.Du||(t.Du=function(t,e,n){const r=ai(t);return r.fu(),new yu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{uo:Bu.bind(null,t),ao:Hu.bind(null,t),au:zu.bind(null,t),cu:qu.bind(null,t)}),t.Ru.push((async e=>{e?(t.Du.Qo(),await ju(t)):(await t.Du.stop(),t.Eu.length>0&&(ei("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))}))),t.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Xu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Xu(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ui(ci.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ju(t,e){if(ni("AsyncQueue",`${e}: ${t}`),Ui(t))return new ui(ci.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ki.comparator(e.key,n.key):(t,e)=>ki.comparator(t.key,e.key),this.keyedMap=As(),this.sortedSet=new Xi(this.comparator)}static emptySet(t){return new Yu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Yu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Yu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.Cu=new Xi(ki.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):oi():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class tl{constructor(t,e,n,r,i,o,s,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const o=[];return e.forEach((t=>{o.push({type:0,doc:t})})),new tl(t,e,Yu.emptySet(e),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.Nu=void 0,this.listeners=[]}}class nl{constructor(){this.queries=new Ts((t=>ys(t)),vs),this.onlineState="Unknown",this.ku=new Set}}async function rl(t,e){const n=ai(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new el),i)try{o.Nu=await n.onListen(r)}catch(t){const n=Ju(t,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.Mu(n.onlineState),o.Nu&&e.$u(o.Nu)&&al(n)}async function il(t,e){const n=ai(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ol(t,e){const n=ai(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.$u(i)&&(r=!0);e.Nu=i}}r&&al(n)}function sl(t,e,n){const r=ai(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function al(t){t.ku.forEach((t=>{t.next()}))}class cl{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new tl(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=tl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(t){this.key=t}}class ll{constructor(t){this.key=t}}class hl{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ls(),this.mutatedKeys=Ls(),this.tc=Es(t),this.ec=new Yu(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new Zu,r=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=bs(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.rc(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:o,ic:n,zi:s,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oi()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.tc(t.doc,e.doc))),this.oc(n);const o=e?this.uc():[],s=0===this.Zu.size&&this.current?1:0,a=s!==this.Xu;return this.Xu=s,0!==i.length||a?{snapshot:new tl(this.query,t.ec,r,i,t.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Zu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=Ls(),this.ec.forEach((t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))}));const e=[];return t.forEach((t=>{this.Zu.has(t)||e.push(new ll(t))})),this.Zu.forEach((n=>{t.has(n)||e.push(new ul(n))})),e}hc(t){this.Yu=t.ir,this.Zu=Ls();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return tl.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class fl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class dl{constructor(t){this.key=t,this.fc=!1}}class pl{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ts((t=>ys(t)),vs),this._c=new Map,this.mc=new Set,this.gc=new Xi(ki.comparator),this.yc=new Map,this.Ic=new Dc,this.Tc={},this.Ec=new Map,this.Ac=Ac.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function gl(t,e){const n=Dl(t);let r,i;const o=n.wc.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.lc();else{const t=await Zc(n.localStore,ps(e)),o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await ml(n,e,r,"current"===o,t.resumeToken),n.isPrimaryClient&&Tu(n.remoteStore,t)}return i}async function ml(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.sc(n);i.zi&&(i=await eu(t.localStore,e.query,!1).then((({documents:t})=>e.view.sc(t,i))));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return Al(t,e.targetId,s.cc),s.snapshot}(t,e,n,r);const o=await eu(t.localStore,e,!0),s=new hl(e,o.ir),a=s.sc(o.documents),c=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=s.applyChanges(a,t.isPrimaryClient,c);Al(t,n,u.cc);const l=new fl(e,n,s);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function vl(t,e){const n=ai(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((t=>!vs(t,e)))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await tu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Iu(n.remoteStore,r.targetId),Cl(n,r.targetId)})).catch(ji)):(Cl(n,r.targetId),await tu(n.localStore,r.targetId,!0))}async function yl(t,e,n){const r=Ll(t);try{const t=await function(t,e){const n=ai(t),r=Si.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ls());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Cs(),c=Ls();return n.Zi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{o=i;const s=[];for(const t of e){const e=aa(t,o.get(t.key).overlayedDocument);null!=e&&s.push(new la(t.key,e,Ro(e.value.mapValue),ea.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,s,e)})).next((e=>{s=e;const r=e.applyToLocalDocumentSet(o,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:ks(o)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Tc[t.currentUser.toKey()];r||(r=new Xi(wi)),r=r.insert(e,n),t.Tc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Rl(r,t.changes),await ju(r.remoteStore)}catch(t){const e=Ju(t,"Failed to persist write");n.reject(e)}}async function _l(t,e){const n=ai(t);try{const t=await Xc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.yc.get(e);r&&(si(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.fc=!0:t.modifiedDocuments.size>0?si(r.fc):t.removedDocuments.size>0&&(si(r.fc),r.fc=!1))})),await Rl(n,t,e)}catch(t){await ji(t)}}function bl(t,e,n){const r=ai(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ai(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Mu(e)&&(r=!0)})),r&&al(n)}(r.eventManager,e),t.length&&r.dc.nu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wl(t,e,n){const r=ai(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),o=i&&i.key;if(o){let t=new Xi(ki.comparator);t=t.insert(o,Po.newNoDocument(o,Ti.min()));const n=Ls().add(o),i=new Pa(Ti.min(),new Map,new Xi(wi),t,n);await _l(r,i),r.gc=r.gc.remove(o),r.yc.delete(e),xl(r)}else await tu(r.localStore,e,!1).then((()=>Cl(r,e,n))).catch(ji)}async function El(t,e){const n=ai(t),r=e.batch.batchId;try{const t=await Kc(n.localStore,e);Il(n,r,null),Tl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rl(n,t)}catch(t){await ji(t)}}async function Sl(t,e,n){const r=ai(t);try{const t=await function(t,e){const n=ai(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(si(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Il(r,e,n),Tl(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rl(r,t)}catch(n){await ji(n)}}function Tl(t,e){(t.Ec.get(e)||[]).forEach((t=>{t.resolve()})),t.Ec.delete(e)}function Il(t,e,n){const r=ai(t);let i=r.Tc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Cl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach((e=>{t.Ic.containsKey(e)||Ol(t,e)}))}function Ol(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(Iu(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),xl(t))}function Al(t,e,n){for(const r of n)r instanceof ul?(t.Ic.addReference(r.key,e),kl(t,r)):r instanceof ll?(ei("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Ol(t,r.key)):oi()}function kl(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(ei("SyncEngine","New document in limbo: "+n),t.mc.add(r),xl(t))}function xl(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new ki(Ci.fromString(e)),r=t.Ac.next();t.yc.set(r,new dl(n)),t.gc=t.gc.insert(n,r),Tu(t.remoteStore,new wc(ps(cs(n.path)),r,"TargetPurposeLimboResolution",$i.ct))}}async function Rl(t,e,n){const r=ai(t),i=[],o=[],s=[];r.wc.isEmpty()||(r.wc.forEach(((t,a)=>{s.push(r.Rc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=zc.Li(a.targetId,t);o.push(e)}})))})),await Promise.all(s),r.dc.nu(i),await async function(t,e){const n=ai(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Fi.forEach(e,(e=>Fi.forEach(e.Fi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Fi.forEach(e.Bi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ui(t))throw t;ei("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,o))}async function Pl(t,e){const n=ai(t);if(!n.currentUser.isEqual(e)){ei("SyncEngine","User change. New user:",e.toKey());const t=await Gc(n.localStore,e);n.currentUser=e,function(t,e){t.Ec.forEach((t=>{t.forEach((t=>{t.reject(new ui(ci.CANCELLED,e))}))})),t.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Rl(n,t.er)}}function Nl(t,e){const n=ai(t),r=n.yc.get(e);if(r&&r.fc)return Ls().add(r.key);{let t=Ls();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.wc.get(e);t=t.unionWith(r.view.nc)}return t}}function Dl(t){const e=ai(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_l.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wl.bind(null,e),e.dc.nu=ol.bind(null,e.eventManager),e.dc.Pc=sl.bind(null,e.eventManager),e}function Ll(t){const e=ai(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=El.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Sl.bind(null,e),e}class Ml{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=pu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Wc(this.persistence,new qc,t.initialUser,this.serializer)}createPersistence(t){return new $c(Bc.zs,this.serializer)}createSharedClientState(t){return new iu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>bl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pl.bind(null,this.syncEngine),await Gu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new nl}createDatastore(t){const e=pu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new fu(r));var r;return function(t,e,n,r){return new _u(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>bl(this.syncEngine,t,0),o=su.D()?new su:new ou,new wu(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new pl(t,e,n,r,i,o);return s&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ai(t);ei("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await Su(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):ni("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ul{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Jr.UNAUTHENTICATED,this.clientId=bi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ei("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(ei("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ui(ci.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ju(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function $l(t,e){t.asyncQueue.verifyOperationInProgress(),ei("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Gc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Vl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zl(t);ei("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Wu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Wu(e.remoteStore,n))),t._onlineComponents=e}function Bl(t){return"FirebaseError"===t.name?t.code===ci.FAILED_PRECONDITION||t.code===ci.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function zl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ei("FirestoreClient","Using user provided OfflineComponentProvider");try{await $l(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Bl(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await $l(t,new Ml)}}else ei("FirestoreClient","Using default OfflineComponentProvider"),await $l(t,new Ml);return t._offlineComponents}async function ql(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ei("FirestoreClient","Using user provided OnlineComponentProvider"),await Vl(t,t._uninitializedComponentsProvider._online)):(ei("FirestoreClient","Using default OnlineComponentProvider"),await Vl(t,new jl))),t._onlineComponents}function Hl(t){return ql(t).then((t=>t.syncEngine))}async function Wl(t){const e=await ql(t),n=e.eventManager;return n.onListen=gl.bind(null,e.syncEngine),n.onUnlisten=vl.bind(null,e.syncEngine),n}function Gl(t,e,n={}){const r=new li;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new Fl({next:o=>{e.enqueueAndForget((()=>il(t,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new ui(ci.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new ui(ci.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new cl(cs(n.path),o,{includeMetadataChanges:!0,Ku:!0});return rl(t,s)}(await Wl(t),t.asyncQueue,e,n,r))),r.promise}function Kl(t,e,n={}){const r=new li;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new Fl({next:n=>{e.enqueueAndForget((()=>il(t,s))),n.fromCache&&"server"===r.source?i.reject(new ui(ci.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new cl(n,o,{includeMetadataChanges:!0,Ku:!0});return rl(t,s)}(await Wl(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ql(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Xl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e,n){if(!n)throw new ui(ci.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Yl(t,e,n,r){if(!0===e&&!0===r)throw new ui(ci.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zl(t){if(!ki.isDocumentKey(t))throw new ui(ci.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function th(t){if(ki.isDocumentKey(t))throw new ui(ci.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function eh(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":oi()}function nh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ui(ci.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eh(t);throw new ui(ci.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rh{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ui(ci.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ui(ci.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ql(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ui(ci.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ui(ci.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ui(ci.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class ih{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ui(ci.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ui(ci.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new fi;switch(t.type){case"firstParty":return new mi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ui(ci.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Xl.get(t);e&&(ei("ComponentProvider","Removing Datastore"),Xl.delete(t),e.terminate())}(this),Promise.resolve()}}function oh(t,e,n,r={}){var i;const o=(t=nh(t,ih))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&ri("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Jr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new ui(ci.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Jr(o)}t._authCredentials=new di(new hi(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ch(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sh(this.firestore,t,this._key)}}class ah{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ah(this.firestore,t,this._query)}}class ch extends ah{constructor(t,e,n){super(t,e,cs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sh(this.firestore,null,new ki(t))}withConverter(t){return new ch(this.firestore,t,this._path)}}function uh(t,e,...n){if(t=(0,a.m9)(t),Jl("collection","path",e),t instanceof ih){const r=Ci.fromString(e,...n);return th(r),new ch(t,null,r)}{if(!(t instanceof sh||t instanceof ch))throw new ui(ci.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ci.fromString(e,...n));return th(r),new ch(t.firestore,null,r)}}function lh(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=bi.A()),Jl("doc","path",e),t instanceof ih){const r=Ci.fromString(e,...n);return Zl(r),new sh(t,null,new ki(r))}{if(!(t instanceof sh||t instanceof ch))throw new ui(ci.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ci.fromString(e,...n));return Zl(r),new sh(t.firestore,t instanceof ch?t.converter:null,new ki(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hh{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new gu(this,"async_queue_retry"),this.Xc=()=>{const t=du();t&&ei("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=du();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=du();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new li;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Ui(t))throw t;ei("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw ni("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const r=Xu.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(r),r}Zc(){this.Wc&&oi()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}class fh extends ih{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new hh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gh(this),this._firestoreClient.terminate()}}function dh(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",o=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const t=(0,a.P0)("firestore");t&&oh(o,...t)}return o}function ph(t){return t._firestoreClient||gh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gh(t){var e,n,r;const i=t._freezeSettings(),o=function(t,e,n,r){return new ho(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ql(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Ul(t._authCredentials,t._appCheckCredentials,t._queue,o),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new mh(ro.fromBase64String(t))}catch(t){throw new ui(ci.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new mh(ro.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ui(ci.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ai(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ui(ci.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ui(ci.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wi(this._lat,t._lat)||wi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=/^__.*__$/;class wh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new la(t,this.data,this.fieldMask,e,this.fieldTransforms):new ua(t,this.data,e,this.fieldTransforms)}}class Eh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new la(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Sh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oi()}}class Th{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Th(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.fa(t),r}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Uh(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(Sh(this.ca)&&bh.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Ih{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||pu(t)}ya(t,e,n,r=!1){return new Th({ca:t,methodName:e,ga:n,path:Ai.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ch(t){const e=t._freezeSettings(),n=pu(t._databaseId);return new Ih(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Oh(t,e,n,r,i,o={}){const s=t.ya(o.merge||o.mergeFields?2:0,e,n,i);Lh("Data must be an object, but it was:",s,r);const a=Nh(r,s);let c,u;if(o.merge)c=new eo(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=Mh(e,r,n);if(!s.contains(i))throw new ui(ci.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);$h(t,i)||t.push(i)}c=new eo(t),u=s.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=s.fieldTransforms;return new wh(new xo(a),c,u)}class Ah extends yh{_toFieldTransform(t){if(2!==t.ca)throw 1===t.ca?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ah}}function kh(t,e,n,r){const i=t.ya(1,e,n);Lh("Data must be an object, but it was:",i,r);const o=[],s=xo.empty();Ki(r,((t,r)=>{const c=Fh(e,t,n);r=(0,a.m9)(r);const u=i.da(c);if(r instanceof Ah)o.push(c);else{const t=Ph(r,u);null!=t&&(o.push(c),s.set(c,t))}}));const c=new eo(o);return new Eh(s,c,i.fieldTransforms)}function xh(t,e,n,r,i,o){const s=t.ya(1,e,n),c=[Mh(e,r,n)],u=[i];if(o.length%2!=0)throw new ui(ci.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<o.length;a+=2)c.push(Mh(e,o[a])),u.push(o[a+1]);const l=[],h=xo.empty();for(let d=c.length-1;d>=0;--d)if(!$h(l,c[d])){const t=c[d];let e=u[d];e=(0,a.m9)(e);const n=s.da(t);if(e instanceof Ah)l.push(t);else{const r=Ph(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new eo(l);return new Eh(h,f,s.fieldTransforms)}function Rh(t,e,n,r=!1){return Ph(n,t.ya(r?4:3,e))}function Ph(t,e){if(Dh(t=(0,a.m9)(t)))return Lh("Unsupported field value:",e,t),Nh(t,e);if(t instanceof yh)return function(t,e){if(!Sh(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Ph(i,e.wa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return $s(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Si.fromDate(t);return{timestampValue:Wa(e.serializer,n)}}if(t instanceof Si){const n=new Si(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Wa(e.serializer,n)}}if(t instanceof _h)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof mh)return{bytesValue:Ga(e.serializer,t._byteString)};if(t instanceof sh){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${eh(t)}`)}(t,e)}function Nh(t,e){const n={};return Qi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,((t,r)=>{const i=Ph(r,e.ha(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Dh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Si||t instanceof _h||t instanceof mh||t instanceof sh||t instanceof yh)}function Lh(t,e,n){if(!Dh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=eh(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}}function Mh(t,e,n){if((e=(0,a.m9)(e))instanceof vh)return e._internalPath;if("string"==typeof e)return Fh(t,e);throw Uh("Field path arguments must be of type string or ",t,!1,void 0,n)}const jh=new RegExp("[~\\*/\\[\\]]");function Fh(t,e,n){if(e.search(jh)>=0)throw Uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vh(...e.split("."))._internalPath}catch(r){throw Uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uh(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new ui(ci.INVALID_ARGUMENT,a+t+c)}function $h(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Bh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(zh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Bh extends Vh{data(){return super.data()}}function zh(t,e){return"string"==typeof e?Fh(t,e):e instanceof vh?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ui(ci.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hh{}class Wh extends Hh{}function Gh(t,e,...n){let r=[];e instanceof Hh&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof Xh)).length,n=t.filter((t=>t instanceof Kh)).length;if(e>1||e>0&&n>0)throw new ui(ci.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)t=i._apply(t);return t}class Kh extends Wh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Kh(t,e,n)}_apply(t){const e=this._parse(t);return Zh(t._query,e),new ah(t.firestore,t.converter,gs(t._query,e))}_parse(t){const e=Ch(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new ui(ci.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Yh(s,o);const e=[];for(const n of s)e.push(Jh(r,t,n));a={arrayValue:{values:e}}}else a=Jh(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Yh(s,o),a=Rh(n,e,s,"in"===o||"not-in"===o);return Uo.create(i,o,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Qh(t,e,n){const r=e,i=zh("where",t);return Kh._create(i,r,n)}class Xh extends Hh{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Xh(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:$o.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)Zh(n,i),n=gs(n,i)}(t._query,e),new ah(t.firestore,t.converter,gs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Jh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new ui(ci.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fs(e)&&-1!==n.indexOf("/"))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ci.fromString(n));if(!ki.isDocumentKey(r))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Eo(t,new ki(r))}if(n instanceof sh)return Eo(t,n._key);throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${eh(n)}.`)}function Yh(t,e){if(!Array.isArray(t)||0===t.length)throw new ui(ci.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zh(t,e){if(e.isInequality()){const n=hs(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=ls(t);null!==i&&tf(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ui(ci.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ui(ci.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function tf(t,e,n){if(!n.isEqual(e))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ef{convertValue(t,e="none"){switch(go(t)){case 0:return null;case 1:return t.booleanValue;case 2:return so(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ao(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw oi()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ki(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new _h(so(t.latitude),so(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=uo(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(lo(t));default:return null}}convertTimestamp(t){const e=oo(t);return new Si(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ci.fromString(t);si(bc(n));const r=new fo(n.get(1),n.get(3)),i=new ki(n.popFirst(5));return r.isEqual(e)||ni(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rf{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class of extends Vh{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(zh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class sf extends of{data(t={}){return super.data(t)}}class af{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new rf(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new sf(this._firestore,this._userDataWriter,n.key,n,new rf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ui(ci.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new sf(t._firestore,t._userDataWriter,n.doc.key,n.doc,new rf(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new sf(t._firestore,t._userDataWriter,e.doc.key,e.doc,new rf(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:cf(e.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function cf(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uf(t){t=nh(t,sh);const e=nh(t.firestore,fh);return Gl(ph(e),t._key).then((n=>mf(e,t,n)))}class lf extends ef{constructor(t){super(),this.firestore=t}convertBytes(t){return new mh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new sh(this.firestore,null,e)}}function hf(t){t=nh(t,ah);const e=nh(t.firestore,fh),n=ph(e),r=new lf(e);return qh(t._query),Kl(n,t._query).then((n=>new af(e,r,t,n)))}function ff(t,e,n,...r){t=nh(t,sh);const i=nh(t.firestore,fh),o=Ch(i);let s;return s="string"==typeof(e=(0,a.m9)(e))||e instanceof vh?xh(o,"updateDoc",t._key,e,n,r):kh(o,"updateDoc",t._key,e),gf(i,[s.toMutation(t._key,ea.exists(!0))])}function df(t){return gf(nh(t.firestore,fh),[new pa(t._key,ea.none())])}function pf(t,e){const n=nh(t.firestore,fh),r=lh(t),i=nf(t.converter,e);return gf(n,[Oh(Ch(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,ea.exists(!1))]).then((()=>r))}function gf(t,e){return function(t,e){const n=new li;return t.asyncQueue.enqueueAndForget((async()=>yl(await Hl(t),e,n))),n.promise}(ph(t),e)}function mf(t,e,n){const r=n.docs.get(e._key),i=new lf(t);return new of(t,i,e._key,r,new rf(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Yr=t}(i.Jn),(0,i.Xd)(new o.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new fh(new pi(t.getProvider("auth-internal")),new yi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ui(ci.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fo(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Xr,"3.12.0",t),(0,i.KN)(Xr,"3.12.0","esm2017")}()},6650:function(t,e,n){"use strict";n.d(e,{oq:function(){return ue},Jt:function(){return ce},sd:function(){return ae},cF:function(){return he},iH:function(){return le},KV:function(){return se}});var r=n(2238),i=n(4444),o=n(8463);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.ZR{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,f;function d(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function g(t){return new l(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,t)}function y(){return new l(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _(t){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function b(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w(){return new l(h.CANCELED,"User canceled the upload/download.")}function E(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function S(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function T(){return new l(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function I(){return new l(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function C(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O(t){return new l(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function A(t){return new l(h.INVALID_ARGUMENT,t)}function k(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function x(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(t,e){return new l(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function P(t){throw new l(h.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class N{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=N.makeFromUrl(t,e)}catch(r){return new N(t,"")}if(""===n.path)return n;throw S(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let s=0;s<_.length;s++){const e=_[s],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new N(t,i),e.postModify(n);break}}if(null==n)throw E(t);return n}}class D{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,c())}),e)}function f(){o&&clearTimeout(o)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||s;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),o=setTimeout((()=>{s=!0,g(!0)}),n),g}function M(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return void 0!==t}function F(t){return"object"===typeof t&&!Array.isArray(t)}function U(t){return"string"===typeof t||t instanceof String}function $(t){return V()&&t instanceof Blob}function V(){return"undefined"!==typeof Blob&&!(0,i.UG)()}function B(t,e,n,r){if(r<e)throw A(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw A(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function q(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),o=-1!==e.indexOf(t);return n||i||o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(f||(f={}));class W{constructor(t,e,n,r,i,o,s,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===f.NO_ERROR,i=n.getStatus();if(!e||H(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===f.ABORT;return void t(!1,new G(!1,null,e))}const o=-1!==this.successCodes_.indexOf(i);t(!0,new G(o,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());j(t)?n(t):n()}catch(o){r(o)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?k():w();r(t)}else{const t=b();r(t)}};this.canceled_?e(!1,new G(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&M(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class G{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function X(t,e){e&&(t["X-Firebase-GMPID"]=e)}function J(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Y(t,e,n,r,i,o,s=!0){const a=q(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return X(u,e),K(u,n),Q(u,o),J(u,r),new W(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(V())return new Blob(t);throw new l(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){if("undefined"===typeof atob)throw O("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class it{constructor(t,e){this.data=t,this.contentType=e||null}}function ot(t,e){switch(t){case rt.RAW:return new it(st(e));case rt.BASE64:case rt.BASE64URL:return new it(ct(t,e));case rt.DATA_URL:return new it(lt(e),ht(e))}throw p()}function st(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,o=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw R(rt.DATA_URL,"Malformed data URL.")}return st(e)}function ct(t,e){switch(t){case rt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw R(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case rt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw R(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(i){if(i.message.includes("polyfill"))throw i;throw R(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw R(rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ft(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function lt(t){const e=new ut(t);return e.base64?ct(rt.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ut(t);return e.contentType}function ft(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){let n=0,r="";$(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if($(this.data_)){const n=this.data_,r=et(n,t,e);return null===r?null:new dt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new dt(n,!0)}}static getBlob(...t){if(V()){const e=t.map((t=>t instanceof dt?t.data_:t));return new dt(tt.apply(null,e))}{const e=t.map((t=>U(t)?ot(rt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new dt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return F(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function vt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return e}class _t{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||yt}}let bt=null;function wt(t){return!U(t)||t.length<2?t:vt(t)}function Et(){if(bt)return bt;const t=[];function e(t,e){return wt(e)}t.push(new _t("bucket")),t.push(new _t("generation")),t.push(new _t("metageneration")),t.push(new _t("name","fullPath",!0));const n=new _t("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new _t("size");return i.xform=r,t.push(i),t.push(new _t("timeCreated")),t.push(new _t("updated")),t.push(new _t("md5Hash",null,!0)),t.push(new _t("cacheControl",null,!0)),t.push(new _t("contentDisposition",null,!0)),t.push(new _t("contentEncoding",null,!0)),t.push(new _t("contentLanguage",null,!0)),t.push(new _t("contentType",null,!0)),t.push(new _t("metadata","customMetadata",!0)),bt=t,bt}function St(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new N(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Tt(t,e,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const t=n[o];r[t.local]=t.xform(r,e[t.server])}return St(r,t),r}function It(t,e,n){const r=pt(e);if(null===r)return null;const i=r;return Tt(t,i,n)}function Ct(t,e,n,r){const i=pt(e);if(null===i)return null;if(!U(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map((e=>{const i=t["bucket"],o=t["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=z(a,n,r),u=q({alt:"media",token:e});return c+u}));return c[0]}function Ot(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){if(!t)throw p()}function xt(t,e){function n(n,r){const i=It(t,r,e);return kt(null!==i),i}return n}function Rt(t,e){function n(n,r){const i=It(t,r,e);return kt(null!==i),Ct(i,r,t.host,t._protocol)}return n}function Pt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?y():v():402===e.getStatus()?m(t.bucket):403===e.getStatus()?_(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Nt(t){const e=Pt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=g(t.path)),i.serverResponse=r.serverResponse,i}return n}function Dt(t,e,n){const r=e.fullServerUrl(),i=z(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new At(i,o,xt(t,n),s);return a.errorHandler=Nt(e),a}function Lt(t,e,n){const r=e.fullServerUrl(),i=z(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new At(i,o,Rt(t,n),s);return a.errorHandler=Nt(e),a}function Mt(t,e){const n=e.fullServerUrl(),r=z(n,t.host,t._protocol),i="DELETE",o=t.maxOperationRetryTime;function s(t,e){}const a=new At(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=Nt(e),a}function jt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Ft(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=jt(null,e)),r}function Ut(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=Ft(e,r,i),l=Ot(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=dt.getBlob(h,r,f);if(null===d)throw I();const p={name:u["fullPath"]},g=z(o,t.host,t._protocol),m="POST",v=t.maxUploadRetryTime,y=new At(g,m,xt(t,n),v);return y.urlParams=p,y.headers=s,y.body=d.uploadData(),y.errorHandler=Pt(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $t=null;class Vt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Bt extends Vt{initXhr(){this.xhr_.responseType="text"}}function zt(){return $t?$t():new Bt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(t,e){this._service=t,this._location=e instanceof N?e:N.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new qt(t,e)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vt(this._location.path)}get storage(){return this._service}get parent(){const t=gt(this._location.path);if(null===t)return null;const e=new N(this._location.bucket,t);return new qt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw x(t)}}function Ht(t,e,n){t._throwIfRoot("uploadBytes");const r=Ut(t.storage,t._location,Et(),new dt(e,!0),n);return t.storage.makeRequestWithTokens(r,zt).then((e=>({metadata:e,ref:t})))}function Wt(t){t._throwIfRoot("getMetadata");const e=Dt(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,zt)}function Gt(t){t._throwIfRoot("getDownloadURL");const e=Lt(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,zt).then((t=>{if(null===t)throw C();return t}))}function Kt(t){t._throwIfRoot("deleteObject");const e=Mt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,zt)}function Qt(t,e){const n=mt(t._location.path,e),r=new N(t._location.bucket,n);return new qt(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t){return/^[A-Za-z]+:\/\//.test(t)}function Jt(t,e){return new qt(t,e)}function Yt(t,e){if(t instanceof ne){const n=t;if(null==n._bucket)throw T();const r=new qt(n,n._bucket);return null!=e?Yt(r,e):r}return void 0!==e?Qt(t,e):t}function Zt(t,e){if(e&&Xt(e)){if(t instanceof ne)return Jt(t,e);throw A("To use ref(service, url), the first argument must be a Storage instance.")}return Yt(t,e)}function te(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:N.makeFromBucketSpec(n,t)}function ee(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken="string"===typeof o?o:(0,i.Sg)(o,t.app.options.projectId))}class ne{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):te(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=te(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){B("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){B("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new qt(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new D(k());{const o=Y(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const re="@firebase/storage",ie="0.11.2",oe="storage";function se(t,e,n){return t=(0,i.m9)(t),Ht(t,e,n)}function ae(t){return t=(0,i.m9)(t),Wt(t)}function ce(t){return t=(0,i.m9)(t),Gt(t)}function ue(t){return t=(0,i.m9)(t),Kt(t)}function le(t,e){return t=(0,i.m9)(t),Zt(t,e)}function he(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,oe),o=n.getImmediate({identifier:e}),s=(0,i.P0)("storage");return s&&fe(o,...s),o}function fe(t,e,n,r={}){ee(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new ne(n,i,o,e,r.Jn)}function pe(){(0,r.Xd)(new o.wA(oe,de,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(re,ie,""),(0,r.KN)(re,ie,"esm2017")}pe()},6531:function(t,e,n){"use strict";n.r(e),n.d(e,{deleteDB:function(){return E},openDB:function(){return w},unwrap:function(){return b},wrap:function(){return _}});const r=(t,e)=>e.some((e=>t instanceof e));let i,o;function s(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,u=new WeakMap,l=new WeakMap,h=new WeakMap,f=new WeakMap;function d(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(_(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&c.set(e,t)})).catch((()=>{})),f.set(e,t),e}function p(t){if(u.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));u.set(t,e)}let g={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return u.get(t);if("objectStoreNames"===e)return t.objectStoreNames||l.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function m(t){g=t(g)}function v(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(t)?function(...e){return t.apply(b(this),e),_(c.get(this))}:function(...e){return _(t.apply(b(this),e))}:function(e,...n){const r=t.call(b(this),e,...n);return l.set(r,e.sort?e.sort():[e]),_(r)}}function y(t){return"function"===typeof t?v(t):(t instanceof IDBTransaction&&p(t),r(t,s())?new Proxy(t,g):t)}function _(t){if(t instanceof IDBRequest)return d(t);if(h.has(t))return h.get(t);const e=y(t);return e!==t&&(h.set(t,e),f.set(e,t)),e}const b=t=>f.get(t);function w(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=_(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(_(s.result),t.oldVersion,t.newVersion,_(s.transaction),t)})),n&&s.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}function E(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",(t=>e(t.oldVersion,t))),_(n).then((()=>{}))}const S=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],I=new Map;function C(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return I.set(e,o),o}m((t=>({...t,get:(e,n,r)=>C(e,n)||t.get(e,n,r),has:(e,n)=>!!C(e,n)||t.has(e,n)})))}}]);
//# sourceMappingURL=chunk-vendors.b38f9227.js.map