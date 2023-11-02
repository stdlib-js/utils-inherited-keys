// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedKeys=e()}(this,(function(){"use strict";var r=9007199254740991,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,b,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function O(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+O(n):O(n)+r}var _=String.fromCharCode,E=isNaN,T=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,i,a,u,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function F(r){var e,t,n;if(!V(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var N,C=Object.prototype,$=C.toString,B=C.__defineGetter__,L=C.__defineSetter__,R=C.__lookupGetter__,G=C.__lookupSetter__;N=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,e,t.get),a&&L&&L.call(r,e,t.set),r};var W=N;function Z(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"number"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return X&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&H.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,K="function"==typeof D?D.toStringTag:"";var q=M()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[K],e=z(r,K);try{r[K]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[K]=t:delete r[K],n}:function(r){return Y.call(r)},J=Number,Q=J.prototype.toString;var rr=M();function er(r){return"object"==typeof r&&(r instanceof J||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function tr(r){return U(r)||er(r)}Z(tr,"isPrimitive",U),Z(tr,"isObject",er);var nr=Number.POSITIVE_INFINITY,ir=J.NEGATIVE_INFINITY,or=Math.floor;function ar(r){return or(r)===r}function ur(r){return r<nr&&r>ir&&ar(r)}function cr(r){return U(r)&&ur(r)}function fr(r){return er(r)&&ur(r.valueOf())}function lr(r){return cr(r)||fr(r)}function sr(r){return cr(r)&&r>0}function pr(r){return fr(r)&&r.valueOf()>0}function gr(r){return sr(r)||pr(r)}Z(lr,"isPrimitive",cr),Z(lr,"isObject",fr),Z(gr,"isPrimitive",sr),Z(gr,"isObject",pr);var dr=void 0!==Object.getOwnPropertyNames,hr=Object,yr=hr.getOwnPropertyNames;function br(r){return Object.keys(Object(r))}var vr,wr=void 0!==Object.keys;function mr(r){return"[object Arguments]"===q(r)}vr=function(){return mr(arguments)}();var jr=vr;function Or(r){return"string"==typeof r}var Sr=String.prototype.valueOf;var _r=M();function Er(r){return"object"==typeof r&&(r instanceof String||(_r?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function Tr(r){return Or(r)||Er(r)}function kr(r){return r!=r}function Ir(r){return U(r)&&kr(r)}function xr(r){return er(r)&&kr(r.valueOf())}function Pr(r){return Ir(r)||xr(r)}Z(Tr,"isPrimitive",Or),Z(Tr,"isObject",Er),Z(Pr,"isPrimitive",Ir),Z(Pr,"isObject",xr);var Ar=Object.prototype.propertyIsEnumerable;var Vr,Fr=!Ar.call("beep","0");function Nr(r,e){var t;return null!=r&&(!(t=Ar.call(r,e))&&Fr&&Tr(r)?!Ir(e=+e)&&cr(e)&&e>=0&&e<r.length:t)}Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};var Cr,$r=Vr;Cr=jr?mr:function(r){return null!==r&&"object"==typeof r&&!$r(r)&&"number"==typeof r.length&&ar(r.length)&&r.length>=0&&r.length<=4294967295&&z(r,"callee")&&!Nr(r,"callee")};var Br=Cr,Lr=Array.prototype.slice;function Rr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!$r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);Z(Rr,"isObjectLikeArray",Gr);var Wr=Nr((function(){}),"prototype"),Zr=!Nr({toString:null},"toString");function Ur(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ar(r.length)&&r.length>=0&&r.length<=9007199254740991}function Xr(r,e,t){var n,i;if(!Ur(r)&&!Or(r))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!cr(t))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Pr(e)){for(;i<n;i++)if(Pr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Mr=/./;function Yr(r){return"boolean"==typeof r}var Hr=Boolean,zr=Boolean.prototype.toString;var Dr=M();function Kr(r){return"object"==typeof r&&(r instanceof Hr||(Dr?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function qr(r){return Yr(r)||Kr(r)}function Jr(){return new Function("return this;")()}Z(qr,"isPrimitive",Yr),Z(qr,"isObject",Kr);var Qr="object"==typeof self?self:null,re="object"==typeof window?window:null,ee="object"==typeof global?global:null,te="object"==typeof globalThis?globalThis:null;var ne=function(r){if(arguments.length){if(!Yr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Jr()}if(te)return te;if(Qr)return Qr;if(re)return re;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=ne.document&&ne.document.childNodes,oe=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function ce(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ue.exec(n.toString()))return e[1]}return Rr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(ae,"REGEXP",ue);var fe="function"==typeof Mr||"object"==typeof oe||"function"==typeof ie?function(r){return ce(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ce(r).toLowerCase():e};function le(r){return r.constructor&&r.constructor.prototype===r}var se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe="undefined"==typeof window?void 0:window;var ge=function(){var r;if("undefined"===fe(pe))return!1;for(r in pe)try{-1===Xr(se,r)&&z(pe,r)&&null!==pe[r]&&"object"===fe(pe[r])&&le(pe[r])}catch(r){return!0}return!1}(),de="undefined"!=typeof window;var he,ye=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];he=wr?function(){return 2!==(br(arguments)||"").length}(1,2)?function(r){return Br(r)?br(Lr.call(r)):br(r)}:br:function(r){var e,t,n,i,o,a,u;if(i=[],Br(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!z(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Rr(r))return i;t=Wr&&n}for(o in r)t&&"prototype"===o||!z(r,o)||i.push(String(o));if(Zr)for(e=function(r){if(!1===de&&!ge)return le(r);try{return le(r)}catch(r){return!1}}(r),u=0;u<ye.length;u++)a=ye[u],e&&"constructor"===a||!z(r,a)||i.push(String(a));return i};var be,ve=he;be=dr?function(r){return yr(hr(r))}:function(r){return ve(hr(r))};var we=be;var me,je,Oe=Object.getPrototypeOf;je=Object.getPrototypeOf,me="function"===fe(je)?Oe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Se=me;function _e(r){return null==r?null:(r=hr(r),Se(r))}function Ee(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return function(e,t){var n,i,o,a,u,c,f,l;if(arguments.length>1){if(!sr(t))throw new TypeError(Ee("1UZ45,IB",t));u=t}else u=r;if(null==e)return[];for(o=_e(e),n=[],i={},c=1;o&&c<=u;){for(a=we(o),l=0;l<a.length;l++)!1===z(i,f=a[l])&&Nr(o,f)&&n.push(f),i[f]=!0;o=_e(o),c+=1}return n}}));
//# sourceMappingURL=index.js.map