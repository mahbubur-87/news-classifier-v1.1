Morph.versions["morph-react-graphql@2.3.111"]={"bbc-morph-graphql":"2.3.92","morph":"5.3.1","morph-container":"4.0.0","morph-graphql":"1.4.0","prop-types":"15.7.2","react":"0.14.7"};
!function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=4)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var a=t(1);Object.defineProperty(r,"optimiseQuery",{enumerable:!0,get:function(){return n(a).default}});var i=t(12);Object.defineProperty(r,"createUri",{enumerable:!0,get:function(){return n(i).default}});var s=t(13);Object.defineProperty(r,"createUriString",{enumerable:!0,get:function(){return n(s).default}});var o=t(14);Object.defineProperty(r,"generateToken",{enumerable:!0,get:function(){return n(o).default}})},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,r){var t=[],n=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=[[/([{}])\s+/g,"$1"],[/\s+([{}])/g,"$1"],[/\s+([:)])/g,"$1"],[/([:(])\s+/g,"$1"],[/([\s+,]+)(?=([^"]*"[^"]*")*[^"]*$)/g,","],[/\.\.\.,on,/g,"...on "]],i=function(e){return a.reduce(function(e,r){var t=n(r,2),a=t[0],i=t[1];return e.replace(a,i)},e)};r.default=i},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0),a=t(28),i=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(e){var r=(0,n.optimiseQuery)(e);if((0,i.default)()){var t=Object.keys(window.Morph.payloads).filter(function(e){return 0===e.indexOf((0,n.createUriString)(r)+"/token/")})[0],a=/\/token\/([^\/]+)/.exec(t);return a&&a[1]}return(0,n.generateToken)(r)};r.default=s},function(e,r){e.exports=Morph},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(5),a=t.n(n);Morph.modules["morph-react-graphql@2.3.111"]=a.a},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.generateToken=r.willUpdate=r.setPayload=r.Query=void 0;var a=t(6),i=n(a),s=t(29),o=n(s),u=t(30),c=n(u),d=t(2),l=n(d);r.Query=i.default,r.setPayload=o.default,r.willUpdate=c.default,r.generateToken=l.default,r.default={Query:i.default,setPayload:o.default,willUpdate:c.default,generateToken:l.default}},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var a=t(7),i=n(a),s=t(10),o=n(s),u=t(11),c=n(u),d=t(0),l=t(2),f=n(l),h=function(e){var r=e.children,t=e.query,n=e.variables,a=e.updates,i=function(e){var t=e.data;return r(t&&202!==t.meta.responseCode?200!==t.meta.responseCode?{data:null,loading:!1,error:!0}:{data:t.body,loading:!1,error:!1}:{data:null,loading:!0,error:!1})},s=c.default.create(i,{data:function(){var e="undefined"==typeof window;return{data:{uri:(0,d.createUri)(t,(0,f.default)(t),n),requireSuccess:e,updates:a}}}});return o.default.createElement(s,null)};h.displayName="Query",h.propTypes={children:i.default.func.isRequired,query:i.default.string.isRequired,updates:i.default.bool,variables:i.default.objectOf(i.default.any)},h.defaultProps={updates:!1,variables:null},r.default=h},function(e,r,t){e.exports=t(8)()},function(e,r,t){"use strict";function n(){}function a(){}var i=t(9);a.resetWarningCache=n,e.exports=function(){function e(e,r,t,n,a,s){if(s!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:n};return t.PropTypes=t,t}},function(e,r,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r){e.exports=React},function(e,r){e.exports={create:function(e,r){return Morph.createContainerWithCaller("morph-react-graphql@2.3.111",e,r)}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=t(1),i=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(e,r,t){return n({data:"bbc-morph-graphql",query:(0,i.default)(e)},r?{token:r}:{},t?{variables:JSON.stringify(t)}:{})};r.default=s},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1),a=function(e){return e&&e.__esModule?e:{default:e}}(n),i=function(e){return e?"/variables/"+encodeURIComponent(JSON.stringify(e)):""},s=function(e){return e?"/token/"+e:""},o=function(e){return"/query/"+encodeURIComponent((0,a.default)(e))},u=function(e,r,t){return"/data/bbc-morph-graphql"+o(e)+s(r)+i(t)};r.default=u},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object({NODE_ENV:"production"}).MORPH_SECRET,n=t(15),a=n.createHmac("sha256",r||"");return a.update(e),a.digest("hex")};r.default=n},function(e,r,t){"use strict";r.randomBytes=r.rng=r.pseudoRandomBytes=r.prng=t(16),r.createHash=r.Hash=t(17),r.createHmac=r.Hmac=t(18);var n=t(19),a=Object.keys(n),i=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(a);r.getHashes=function(){return i};var s=t(21);r.pbkdf2=s.pbkdf2,r.pbkdf2Sync=s.pbkdf2Sync;var o=t(22);r.Cipher=o.Cipher,r.createCipher=o.createCipher,r.Cipheriv=o.Cipheriv,r.createCipheriv=o.createCipheriv,r.Decipher=o.Decipher,r.createDecipher=o.createDecipher,r.Decipheriv=o.Decipheriv,r.createDecipheriv=o.createDecipheriv,r.getCiphers=o.getCiphers,r.listCiphers=o.listCiphers;var u=t(23);r.DiffieHellmanGroup=u.DiffieHellmanGroup,r.createDiffieHellmanGroup=u.createDiffieHellmanGroup,r.getDiffieHellman=u.getDiffieHellman,r.createDiffieHellman=u.createDiffieHellman,r.DiffieHellman=u.DiffieHellman;var c=t(24);r.createSign=c.createSign,r.Sign=c.Sign,r.createVerify=c.createVerify,r.Verify=c.Verify,r.createECDH=t(25);var d=t(26);r.publicEncrypt=d.publicEncrypt,r.privateEncrypt=d.privateEncrypt,r.publicDecrypt=d.publicDecrypt,r.privateDecrypt=d.privateDecrypt;var l=t(27);r.randomFill=l.randomFill,r.randomFillSync=l.randomFillSync,r.createCredentials=function(){throw new Error(["sorry, createCredentials is not implemented yet","we accept pull requests","https://github.com/crypto-browserify/crypto-browserify"].join("\n"))},r.constants={DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,ALPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6}},function(e,r){e.exports=Morph.modules["randombytes@2.1.0"]},function(e,r){e.exports=Morph.modules["create-hash@1.2.0"]},function(e,r){e.exports=Morph.modules["create-hmac@1.1.7"]},function(e,r,t){e.exports=t(20)},function(e,r){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},function(e,r){e.exports=Morph.modules["pbkdf2@3.1.2"]},function(e,r){e.exports=Morph.modules["browserify-cipher@1.0.1"]},function(e,r){e.exports=Morph.modules["diffie-hellman@5.0.3"]},function(e,r){e.exports=Morph.modules["browserify-sign@4.2.1"]},function(e,r){e.exports=Morph.modules["create-ecdh@4.0.4"]},function(e,r){e.exports=Morph.modules["public-encrypt@4.0.3"]},function(e,r){e.exports=Morph.modules["randomfill@1.0.4"]},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){return"undefined"!=typeof window};r.default=n},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(3),a=function(e){return e&&e.__esModule?e:{default:e}}(n),i=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;a.default.setPayload(e,{meta:{responseCode:t},body:r})};r.default=i},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var a=t(3),i=n(a),s=t(0),o=t(2),u=n(o),c=function(e){var r=i.default.subscriptions.all()[(0,s.createUriString)(e,(0,u.default)(e))];return Array.isArray(r)&&r.length>0};r.default=c}]);
//# sourceMappingURL=bundle.js.map