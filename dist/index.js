"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(g,i){
var k=require('@stdlib/stats-strided-variancetk/dist'),p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t,a){return p(k(e,r,t,a))}i.exports=x
});var v=s(function(h,n){
var y=require('@stdlib/stats-strided-variancetk/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,t,a,o){return f(y(e,r,t,a,o))}n.exports=l
});var d=s(function(j,c){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),O=v();m(q,"ndarray",O);c.exports=q
});var R=d();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
