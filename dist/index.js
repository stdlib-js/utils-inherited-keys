"use strict";var p=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var g=p(function(b,f){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,c=require('@stdlib/utils-property-names/dist'),m=require('@stdlib/utils-get-prototype-of/dist'),w=require('@stdlib/assert-is-enumerable-property/dist'),E=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/error-tools-fmtprodmsg/dist');function d(i,r){var n,s,e,u,v,o,t,a;if(arguments.length>1){if(!q(r))throw new TypeError(P('1UZ45',r));v=r}else v=h;if(i==null)return[];for(e=m(i),n=[],s={},o=1;e&&o<=v;){for(u=c(e),a=0;a<u.length;a++)t=u[a],E(s,t)===!1&&w(e,t)&&n.push(t),s[t]=!0;e=m(e),o+=1}return n}f.exports=d
});var l=g();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
