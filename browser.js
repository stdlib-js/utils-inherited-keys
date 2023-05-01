// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).inheritedKeys=e()}(this,(function(){"use strict";var t=9007199254740991,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,s="set"in r,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),s&&f&&f.call(t,e,r.set),t};var a=r;function p(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&g.call(t,e)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[h],e=d(t,h);try{t[h]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[h]=r:delete t[h],n}:function(t){return v.call(t)},m=Number,w=m.prototype.toString;var O=b();function _(t){return"object"==typeof t&&(t instanceof m||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function S(t){return s(t)||_(t)}p(S,"isPrimitive",s),p(S,"isObject",_);var P=Number.POSITIVE_INFINITY,E=m.NEGATIVE_INFINITY,I=Math.floor;function T(t){return I(t)===t}function A(t){return t<P&&t>E&&T(t)}function N(t){return s(t)&&A(t)}function k(t){return _(t)&&A(t.valueOf())}function x(t){return N(t)||k(t)}function B(t){return N(t)&&t>0}function V(t){return k(t)&&t.valueOf()>0}function F(t){return B(t)||V(t)}p(x,"isPrimitive",N),p(x,"isObject",k),p(F,"isPrimitive",B),p(F,"isObject",V);var L=void 0!==Object.getOwnPropertyNames,C=Object.getOwnPropertyNames;function G(t){return Object.keys(Object(t))}var Y,M=void 0!==Object.keys;function X(t){return"[object Arguments]"===j(t)}Y=function(){return X(arguments)}();var H=Y;function R(t){return"string"==typeof t}var U=String.prototype.valueOf;var W=b();function D(t){return"object"==typeof t&&(t instanceof String||(W?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function K(t){return R(t)||D(t)}function q(t){return t!=t}function z(t){return s(t)&&q(t)}function J(t){return _(t)&&q(t.valueOf())}function Q(t){return z(t)||J(t)}p(K,"isPrimitive",R),p(K,"isObject",D),p(Q,"isPrimitive",z),p(Q,"isObject",J);var Z=Object.prototype.propertyIsEnumerable;var $,tt=!Z.call("beep","0");function et(t,e){var r;return null!=t&&(!(r=Z.call(t,e))&&tt&&K(t)?!z(e=+e)&&N(e)&&e>=0&&e<t.length:r)}$=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var rt,nt=$;rt=H?X:function(t){return null!==t&&"object"==typeof t&&!nt(t)&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!et(t,"callee")};var ot=rt,ut=Array.prototype.slice;function it(t){return null!==t&&"object"==typeof t}var ft=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!nt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(it);p(it,"isObjectLikeArray",ft);var ct=et((function(){}),"prototype"),lt=!et({toString:null},"toString");function at(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=9007199254740991}function pt(t,e,r){var n,o;if(!at(t)&&!R(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!N(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(Q(e)){for(;o<n;o++)if(Q(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var st=/./;function yt(t){return"boolean"==typeof t}var bt=Boolean.prototype.toString;var vt=b();function gt(t){return"object"==typeof t&&(t instanceof Boolean||(vt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function dt(t){return yt(t)||gt(t)}function ht(){return new Function("return this;")()}p(dt,"isPrimitive",yt),p(dt,"isObject",gt);var jt="object"==typeof self?self:null,mt="object"==typeof window?window:null,wt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ot="object"==typeof wt?wt:null;var _t=function(t){if(arguments.length){if(!yt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ht()}if(jt)return jt;if(mt)return mt;if(Ot)return Ot;throw new Error("unexpected error. Unable to resolve global object.")}(),St=_t.document&&_t.document.childNodes,Pt=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;function Tt(t){var e,r,n,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=It.exec(n.toString()))return e[1]}return it(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(Et,"REGEXP",It);var At="function"==typeof st||"object"==typeof Pt||"function"==typeof St?function(t){return Tt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Tt(t).toLowerCase():e};function Nt(t){return t.constructor&&t.constructor.prototype===t}var kt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xt="undefined"==typeof window?void 0:window;var Bt=function(){var t;if("undefined"===At(xt))return!1;for(t in xt)try{-1===pt(kt,t)&&d(xt,t)&&null!==xt[t]&&"object"===At(xt[t])&&Nt(xt[t])}catch(t){return!0}return!1}(),Vt="undefined"!=typeof window;var Ft,Lt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ft=M?function(){return 2!==(G(arguments)||"").length}(1,2)?function(t){return ot(t)?G(ut.call(t)):G(t)}:G:function(t){var e,r,n,o,u,i,f;if(o=[],ot(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!it(t))return o;r=ct&&n}for(u in t)r&&"prototype"===u||!d(t,u)||o.push(String(u));if(lt)for(e=function(t){if(!1===Vt&&!Bt)return Nt(t);try{return Nt(t)}catch(t){return!1}}(t),f=0;f<Lt.length;f++)i=Lt[f],e&&"constructor"===i||!d(t,i)||o.push(String(i));return o};var Ct,Gt=Ft;Ct=L?function(t){return C(Object(t))}:function(t){return Gt(Object(t))};var Yt=Ct;var Mt,Xt,Ht=Object.getPrototypeOf;Xt=Object.getPrototypeOf,Mt="function"===At(Xt)?Ht:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Rt=Mt;function Ut(t){return null==t?null:(t=Object(t),Rt(t))}function Wt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(e,r){var n,o,u,i,f,c,l,a;if(arguments.length>1){if(!B(r))throw new TypeError(Wt("0k84I",r));f=r}else f=t;if(null==e)return[];for(u=Ut(e),n=[],o={},c=1;u&&c<=f;){for(i=Yt(u),a=0;a<i.length;a++)!1===d(o,l=i[a])&&et(u,l)&&n.push(l),o[l]=!0;u=Ut(u),c+=1}return n}}));
//# sourceMappingURL=browser.js.map