// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.0.8-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-enumerable-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function m(m,d){var p,l,j,h,f,a,g,v;if(arguments.length>1){if(!t(d))throw new TypeError(o("0k84I",d));f=d}else f=s;if(null==m)return[];for(j=r(m),p=[],l={},a=1;j&&a<=f;){for(h=e(j),v=0;v<h.length;v++)g=h[v],!1===n(l,g)&&i(j,g)&&p.push(g),l[g]=!0;j=r(j),a+=1}return p}export{m as default};
//# sourceMappingURL=index.mjs.map
