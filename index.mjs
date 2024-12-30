// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-enumerable-property@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function m(m,d){var p,l,j,h,f,v,a,g;if(arguments.length>1){if(!t(d))throw new TypeError(o("1UZ45",d));f=d}else f=s;if(null==m)return[];for(j=r(m),p=[],l={},v=1;j&&v<=f;){for(h=e(j),g=0;g<h.length;g++)a=h[g],!1===n(l,a)&&i(j,a)&&p.push(a),l[a]=!0;j=r(j),v+=1}return p}export{m as default};
//# sourceMappingURL=index.mjs.map