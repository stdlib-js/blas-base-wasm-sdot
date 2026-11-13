"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var m=d(function(K,h){
var g=require("path").resolve,j=require('@stdlib/fs-read-wasm/dist').sync,z=j(g(__dirname,"..","src","main.wasm"));h.exports=z
});var y=d(function(L,x){
var B=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),V=m();function n(e){if(!(this instanceof n))return new n(e);if(!B(e))throw new TypeError(T('26zH0',e));return M.call(this,V,e,{env:{memory:e}}),this}E(n,M);w(n.prototype,"main",function(r,t,i,a,s){return this._instance.exports.c_sdot(r,t,i,a,s)});w(n.prototype,"ndarray",function(r,t,i,a,s,c,p){return this._instance.exports.c_sdot_ndarray(r,t,i,a,s,c,p)});x.exports=n
});var A=d(function(P,W){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),C=require('@stdlib/wasm-memory/dist'),D=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),q=y();function o(){return this instanceof o?(q.call(this,new C({initial:0})),this):new o}k(o,q);R(o.prototype,"main",function(r,t,i,a,s){return this.ndarray(r,t,i,_(r,i),a,s,_(r,s))});R(o.prototype,"ndarray",function(r,t,i,a,s,c,p){var l,u,v;return l=D(this,[b(r,t,i,a),b(r,s,c,p)]),u=l[0],v=l[1],q.prototype.ndarray.call(this,r,u.ptr,u.stride,u.offset,v.ptr,v.stride,v.offset)});W.exports=o
});var S=d(function(Q,O){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=A(),H=y(),f=new G;f.initializeSync();F(f,"Module",H.bind(null));O.exports=f
});var I=S();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
