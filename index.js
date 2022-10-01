// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,d,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),d="get"in r,_="set"in r,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&a&&a.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e};function c(e,t,r){f(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function d(e,t,r,n){var o,a,i,u,l,f;if(l=e-t,e<=0||l<=0)return NaN;if(1===e||0===n)return 0;for(a=n<0?(1-e)*n:0,o=0,i=0,f=0;f<e;f++)o+=(u=r[a])*u,i+=u,a+=n;return(o-i/e*i)/l}c(d,"ndarray",(function(e,t,r,n,o){var a,i,u,l,f,c;if(f=e-t,e<=0||f<=0)return NaN;if(1===e||0===n)return 0;for(i=o,a=0,u=0,c=0;c<e;c++)a+=(l=r[i])*l,u+=l,i+=n;return(a-u/e*u)/f}));const{ndarray:_}=d;var p=Math.sqrt;function s(e,t,r,n){return p(d(e,t,r,n))}c(s,"ndarray",(function(e,t,r,n,o){return p(_(e,t,r,n,o))}));const{ndarray:y}=stdevtk;e.default=s,e.ndarray=y,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).stdevtk={});
//# sourceMappingURL=index.js.map
