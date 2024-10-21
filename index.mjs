// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import A from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-arrays2ptrs@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-strided2object@v0.0.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-wasm-memory@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-module-wrapper@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-base64-to-uint8array@esm/index.mjs";var d=I("AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEYA2AAAGAFf39/f38BfWAHf39/f39/fwF9Ag8BA2VudgZtZW1vcnkCAAADBAMAAQIHSgQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAZjX3Nkb3QAAQ5jX3Nkb3RfbmRhcnJheQACCt8EAwMAAQs7AQJ+IAAgASACIAKsIgVCASAArCIGfX5CACAFQgBXG6cgAyAEIASsIgVCASAGfX5CACAFQgBXG6cQAgucBAIBfQl/IABBAEwEQEMAAAAADwsCQAJAAkAgAkEBRiAFQQFGcUUEQCAAQQFxIQkgAEEBRw0BDAILAkAgAEEFcCIFRQRADAELIAVBAXEhCgJAIABBBXAiC0EBRgRAIAYhCCADIQIMAQsgBEEEaiEMIAFBBGohDSAFQQZxIQ4gBiEIIAMhAgNAIA0gAkECdCIPaioCACAMIAhBAnQiEGoqAgCUIAEgD2oqAgAgBCAQaioCAJQgB5KSIQcgCEECaiEIIAJBAmohAiAJQQJqIgkgDkcNAAsLIAoEQCABIAJBAnRqKgIAIAQgCEECdGoqAgCUIAeSIQcLIAAgBmogACALayICayEGIAAgA2ogAmshAwsgAEEFSA0CA0AgByABIANBAnRqIgIqAhAgBCAGQQJ0aiIIKgIQlCACKgIMIAgqAgyUIAIqAgggCCoCCJQgAioCACAIKgIAlCACKgIEIAgqAgSUkpKSkpIhByAGQQVqIQYgA0EFaiEDIAVBBWoiBSAASA0ACwwCCyAAQf7///8HcSEAIAUgBWohCiACIAJqIQsDQCABIAIgA2pBAnRqKgIAIAQgBSAGakECdGoqAgCUIAEgA0ECdGoqAgAgBCAGQQJ0aioCAJQgB5KSIQcgBiAKaiEGIAMgC2ohAyAIQQJqIgggAEcNAAsLIAlFDQAgASADQQJ0aioCACAEIAZBAnRqKgIAlCAHkiEHCyAHCw==");function m(A){if(!(this instanceof m))return new m(A);if(!n(A))throw new TypeError(g("invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.",A));return o.call(this,d,A,{env:{memory:A}}),this}function C(){return this instanceof C?(m.call(this,new e({initial:0})),this):new C}t(m,o),A(m.prototype,"main",(function(A,t,s,e,i){return this._instance.exports.c_sdot(A,t,s,e,i)})),A(m.prototype,"ndarray",(function(A,t,s,e,i,r,n){return this._instance.exports.c_sdot_ndarray(A,t,s,e,i,r,n)})),t(C,m),A(C.prototype,"main",(function(A,t,e,i,r){return this.ndarray(A,t,e,s(A,e),i,r,s(A,r))})),A(C.prototype,"ndarray",(function(A,t,s,e,n,o,g){var I,d,C;return d=(I=i(this,[r(A,t,s,e),r(A,n,o,g)]))[0],C=I[1],m.prototype.ndarray.call(this,A,d.ptr,d.stride,d.offset,C.ptr,C.stride,C.offset)}));var a=new C;a.initializeSync(),A(a,"Module",m);export{m as Module,a as default};
//# sourceMappingURL=index.mjs.map
