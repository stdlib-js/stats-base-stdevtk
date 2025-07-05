"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=s(function(g,u){
var y=require('@stdlib/stats-strided-variancetk/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function k(e,r,a,t,o){return f(y(e,r,a,t,o))}u.exports=k
});var v=s(function(h,n){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=i();function l(e,r,a,t){return x(e,r,a,t,p(e,t))}n.exports=l
});var c=s(function(j,d){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),O=i();m(q,"ndarray",O);d.exports=q
});var R=c();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
