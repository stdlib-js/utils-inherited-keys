// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedKeys=e()}(this,(function(){"use strict";var r=9007199254740991,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,y,"e+0$1"),t=g.call(t,b,"e-0$1"),r.alternate&&(t=g.call(t,d,"$1."),t=g.call(t,h,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function O(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+O(n):O(n)+r}var S=String.fromCharCode,_=isNaN,T=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,u,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=I.exec(r);n;)(e=r.slice(o,I.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),o=I.lastIndex,n=I.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){return"string"==typeof r}function B(r){var e,t,n;if(!V(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var F,N=Object.prototype,C=N.toString,L=N.__defineGetter__,$=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var M=F;function U(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"number"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return X&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&H.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,K="function"==typeof D?D.toStringTag:"";var q=Z()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[K],e=z(r,K);try{r[K]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[K]=t:delete r[K],n}:function(r){return Y.call(r)},J=Number,Q=J.prototype.toString;var rr=Z();function er(r){return"object"==typeof r&&(r instanceof J||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function tr(r){return W(r)||er(r)}U(tr,"isPrimitive",W),U(tr,"isObject",er);var nr=Number.POSITIVE_INFINITY,or=J.NEGATIVE_INFINITY,ir=Math.floor;function ar(r){return ir(r)===r}function ur(r){return r<nr&&r>or&&ar(r)}function cr(r){return W(r)&&ur(r)}function fr(r){return er(r)&&ur(r.valueOf())}function lr(r){return cr(r)||fr(r)}function sr(r){return cr(r)&&r>0}function pr(r){return fr(r)&&r.valueOf()>0}function gr(r){return sr(r)||pr(r)}U(lr,"isPrimitive",cr),U(lr,"isObject",fr),U(gr,"isPrimitive",sr),U(gr,"isObject",pr);var yr=void 0!==Object.getOwnPropertyNames,br=Object,dr=br.getOwnPropertyNames;function hr(r){return Object.keys(Object(r))}var vr,wr=void 0!==Object.keys;function mr(r){return"[object Arguments]"===q(r)}vr=function(){return mr(arguments)}();var jr=vr;function Or(r){return"string"==typeof r}var Er=String.prototype.valueOf;var Sr=Z();function _r(r){return"object"==typeof r&&(r instanceof String||(Sr?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function Tr(r){return Or(r)||_r(r)}function kr(r){return r!=r}function xr(r){return W(r)&&kr(r)}function Ir(r){return er(r)&&kr(r.valueOf())}function Pr(r){return xr(r)||Ir(r)}U(Tr,"isPrimitive",Or),U(Tr,"isObject",_r),U(Pr,"isPrimitive",xr),U(Pr,"isObject",Ir);var Ar=Object.prototype.propertyIsEnumerable;var Vr,Br=!Ar.call("beep","0");function Fr(r,e){var t;return null!=r&&(!(t=Ar.call(r,e))&&Br&&Tr(r)?!xr(e=+e)&&cr(e)&&e>=0&&e<r.length:t)}Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};var Nr,Cr=Vr;Nr=jr?mr:function(r){return null!==r&&"object"==typeof r&&!Cr(r)&&"number"==typeof r.length&&ar(r.length)&&r.length>=0&&r.length<=4294967295&&z(r,"callee")&&!Fr(r,"callee")};var Lr=Nr,$r=Array.prototype.slice;function Rr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);U(Rr,"isObjectLikeArray",Gr);var Mr=Fr((function(){}),"prototype"),Ur=!Fr({toString:null},"toString");function Wr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ar(r.length)&&r.length>=0&&r.length<=9007199254740991}function Xr(r,e,t){var n,o;if(!Wr(r)&&!Or(r))throw new TypeError(B("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!cr(t))throw new TypeError(B("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Pr(e)){for(;o<n;o++)if(Pr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Zr=/./;function Yr(r){return"boolean"==typeof r}var Hr=Boolean,zr=Boolean.prototype.toString;var Dr=Z();function Kr(r){return"object"==typeof r&&(r instanceof Hr||(Dr?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function qr(r){return Yr(r)||Kr(r)}function Jr(){return new Function("return this;")()}U(qr,"isPrimitive",Yr),U(qr,"isObject",Kr);var Qr="object"==typeof self?self:null,re="object"==typeof window?window:null,ee="object"==typeof global?global:null,te="object"==typeof globalThis?globalThis:null;var ne=function(r){if(arguments.length){if(!Yr(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Jr()}if(te)return te;if(Qr)return Qr;if(re)return re;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ne.document&&ne.document.childNodes,ie=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function ce(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ue.exec(n.toString()))return e[1]}return Rr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}U(ae,"REGEXP",ue);var fe="function"==typeof Zr||"object"==typeof ie||"function"==typeof oe?function(r){return ce(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ce(r).toLowerCase():e};function le(r){return r.constructor&&r.constructor.prototype===r}var se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe="undefined"==typeof window?void 0:window;var ge=function(){var r;if("undefined"===fe(pe))return!1;for(r in pe)try{-1===Xr(se,r)&&z(pe,r)&&null!==pe[r]&&"object"===fe(pe[r])&&le(pe[r])}catch(r){return!0}return!1}(),ye="undefined"!=typeof window;var be,de=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];be=wr?function(){return 2!==(hr(arguments)||"").length}(1,2)?function(r){return Lr(r)?hr($r.call(r)):hr(r)}:hr:function(r){var e,t,n,o,i,a,u;if(o=[],Lr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!z(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Rr(r))return o;t=Mr&&n}for(i in r)t&&"prototype"===i||!z(r,i)||o.push(String(i));if(Ur)for(e=function(r){if(!1===ye&&!ge)return le(r);try{return le(r)}catch(r){return!1}}(r),u=0;u<de.length;u++)a=de[u],e&&"constructor"===a||!z(r,a)||o.push(String(a));return o};var he,ve=be;he=yr?function(r){return dr(br(r))}:function(r){return ve(br(r))};var we=he,me=/./;function je(r){return"boolean"==typeof r}var Oe=Boolean.prototype.toString;var Ee=Z();function Se(r){return"object"==typeof r&&(r instanceof Hr||(Ee?function(r){try{return Oe.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function _e(r){return je(r)||Se(r)}function Te(){return new Function("return this;")()}U(_e,"isPrimitive",je),U(_e,"isObject",Se);var ke="object"==typeof self?self:null,xe="object"==typeof window?window:null,Ie="object"==typeof global?global:null,Pe="object"==typeof globalThis?globalThis:null;var Ae=function(r){if(arguments.length){if(!je(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Te()}if(Pe)return Pe;if(ke)return ke;if(xe)return xe;if(Ie)return Ie;throw new Error("unexpected error. Unable to resolve global object.")}(),Ve=Ae.document&&Ae.document.childNodes,Be=Int8Array;function Fe(){return/^\s*function\s*([^(]*)/i}var Ne=/^\s*function\s*([^(]*)/i;function Ce(r){return null!==r&&"object"==typeof r}U(Fe,"REGEXP",Ne);var Le=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ce);function $e(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ne.exec(n.toString()))return e[1]}return Ce(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}U(Ce,"isObjectLikeArray",Le);var Re="function"==typeof me||"object"==typeof Be||"function"==typeof Ve?function(r){return $e(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?$e(r).toLowerCase():e};var Ge,Me,Ue=Object.getPrototypeOf;Me=Object.getPrototypeOf,Ge="function"===Re(Me)?Ue:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var We=Ge;function Xe(r){return null==r?null:(r=br(r),We(r))}function Ze(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return function(e,t){var n,o,i,a,u,c,f,l;if(arguments.length>1){if(!sr(t))throw new TypeError(Ze("1UZ45,IB",t));u=t}else u=r;if(null==e)return[];for(i=Xe(e),n=[],o={},c=1;i&&c<=u;){for(a=we(i),l=0;l<a.length;l++)!1===z(o,f=a[l])&&Fr(i,f)&&n.push(f),o[f]=!0;i=Xe(i),c+=1}return n}}));
//# sourceMappingURL=index.js.map
