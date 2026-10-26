"use strict";var p=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var g=p(function(b,f){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,c=require('@stdlib/utils-property-names/dist'),m=require('@stdlib/utils-get-prototype-of/dist'),w=require('@stdlib/assert-is-enumerable-property/dist'),E=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/error-tools-fmtprodmsg/dist');function d(i,r){var t,s,e,u,v,o,a,n;if(arguments.length>1){if(!q(r))throw new TypeError(P('1UZ45',r));v=r}else v=h;if(i==null)return[];for(e=m(i),t=[],s={},o=1;e&&o<=v;){for(u=c(e),n=0;n<u.length;n++)a=u[n],E(s,a)===!1&&w(e,a)&&t.push(a),s[a]=!0;e=m(e),o+=1}return t}f.exports=d
});var l=g();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
