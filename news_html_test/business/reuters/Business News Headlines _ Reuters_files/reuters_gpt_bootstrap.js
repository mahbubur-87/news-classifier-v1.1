!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";(function(e){var o=n(4),r=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function c(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void s(t.promise,e)}u(t.promise,o)}else(1===e._state?u:s)(t.promise,e._value)}))):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void f((o=n,r=t,function(){o.apply(r,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){s(e,t)}var o,r}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)c(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e((function(e){n||(n=!0,u(t,e))}),(function(e){n||(n=!0,s(t,e))}))}catch(e){if(n)return;n=!0,s(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return c(this,new d(e,t,n)),n},a.prototype.finally=o.a,a.all=function(e){return new a((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,(function(t){i(e,t)}),n)}o[e]=a,0==--r&&t(o)}catch(e){n(e)}}for(var a=0;a<o.length;a++)i(a,o[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)}))},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){r(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){var o,r;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(r="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r),!0,e.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}function a(e,n){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var s=t(c[0]);if(u=(o.read||o)(u,s)||t(u),n)try{u=JSON.parse(u)}catch(e){}if(r[s]=u,e===s)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return a(e,!1)},r.getJSON=function(e){return a(e,!0)},r.remove=function(t,n){i(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))},function(e,t,n){"use strict";var o=n(0),r=n(1),i=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){return new o.a((function(t,n){if("us"===e||"uk"===e||"in"===e||"jp"===e||"cn"===e){try{console.log("MOAT init script"),function(){var e,t;try{var n={t:(new Date).getTime(),de:Math.floor(Math.random()*Math.pow(10,12)),zMoatAB_SNPT:"true"};void 0,e=n,t="reutersheader194883552024",window["__MHS_P__"+t]=e,window["__MHS_E__"+t]=function(){},function(){function e(e){u&&console.log(">>>MOAT /"+e)}function t(){try{var t=window.googletag;return!!t.apiReady&&t.pubads()}catch(t){return e("init:"+t),!1}}function n(e){var n=t(),r=o(e);n?r(n,window.googletag):(window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push((function(){var e=t();e&&r(e,window.googletag)})))}function o(e){return function(){try{return e&&e.apply?e.apply(null,arguments):e()}catch(e){try{var t=document.referrer}catch(e){t=""}try{var n="//px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=MOATHEADERSNIPPET1&vc=2&ac=1&k="+encodeURIComponent(void 0)+"&j="+encodeURIComponent(t)+"&cs="+(new Date).getTime();(new Image).src=n}catch(e){}throw e}}}function r(t){n((function(r){var a={};t.a?r=!(r={}.toString.call(t.a))||"[object Array]"!==r&&"[object Array Iterator]"!==r?[t.a]:t.a:r=r.getSlots(),a.slots=r,a.slots&&window&&window.setTimeout?("number"==typeof(r=t.timeout)&&!isNaN(r)||(t.timeout=1e3),a.fired=!1,a.callback="function"==typeof t.callback?t.callback:void 0,a.disableAdCall="boolean"==typeof t.disableAdCall&&t.disableAdCall,a.timeoutId=window.setTimeout(function(t){return function(){if(i)return i(t);!function(t){n((function(n,r){if(t.fired=!0,t.disableAdCall)e("init: Ad call disabled, not making ad call.");else{e("init: Making ad Call.");for(var i=0;i<t.slots.length;i++){var a=r,c=n,u=t.slots[i],s=a.pubadsReady&&!c.enableSingleRequest();s&&a.display(u),(!s||"function"==typeof c.isInitialLoadDisabled&&c.isInitialLoadDisabled())&&c.refresh([u])}}"function"==typeof t.callback&&(i=o(t.callback),e("init: Firing callback."),i(!1))}))}(t)}}(a),t.timeout),c.push(a)):e("init: No valid slots found or provided, exiting.")}))}var i,c=[],u=!1;if(!window.moatPrebidApi||"object"!==a(window.moatPrebidApi)){window.moatPrebidApi={};var s=window.moatPrebidApi;s.init=function(e){r(e||{})},s.enableLogging=function(){return u=!0},s.disableLogging=function(){return u=!1,!0},s.__onScriptLoad=function(){return{entries:c,enableLogging:u,setTimeoutFn:function(e){i||"function"!=typeof e||(i=e)}}}}}()}catch(e){!function(e){try{var t=document.referrer}catch(e){t=""}try{var n="//px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=MOATHEADERSNIPPET1&vc=2&ac=1&k="+encodeURIComponent(void 0)+"&j="+encodeURIComponent(t)+"&cs="+(new Date).getTime();(new Image).src=n}catch(e){}}()}}()}catch(e){console.warn("MOAT init script error"),t()}var o=document.createElement("script");o.src="https://z.moatads.com/".concat("reutersheader194883552024","/moatheader.js"),o.setAttribute("async","async"),document.head.appendChild(o),o.onload=function(){console.log("MOAT setup complete"),t()},o.onerror=function(e){console.warn("MOAT load error",e),window.__MHS_E__reutersheader194883552024(),t()}}else t()}))},u="a55a84b3-9632-4869-b625-3d8ef43ed18d",s=function(e){var t;!function(e){var t=e.require_consent,n=e.opt_in,o=e.token;!function(e,t,n,o,r){if(!t){t=t||{},window.permutive=t,t.q=[],t.config=r||{},t.config.projectId="a55a84b3-9632-4869-b625-3d8ef43ed18d",t.config.apiKey="9c1ce68f-7551-4e2e-9ddb-f2beacbd91bf",t.config.environment=t.config.environment||"production";for(var i=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],a=0;a<i.length;a++){var c=i[a];t[c]=function(e){return function(){var n=Array.prototype.slice.call(arguments,0);t.q.push({functionName:e,arguments:n})}}(c)}}}(document,window.permutive,0,0,{consentRequired:t});window.permutive.addon("web",function(){var e=window.location.pathname;if(e.startsWith("/news/pictures")||e.startsWith("/video")){return{page:{site_type:"Rcom2021",topic:{channel:null,sub_channel:null},content_type:"Landing Page",edition:"U.S.",platform:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",canonical_url:window.location.href,article:{content_title:null,keywords:null,keyword_slug:null,backend_channel:null,backend_channel_list:null,n2_names:null,n2_codes:null}}}}return{}}()),window.permutive.consent({opt_in:n,token:n&&!o?"CONSENT_CAPTURED":o})}(e),(t=document.createElement("script")).src="//cdn.permutive.com/".concat(u,"-web.js"),t.setAttribute("async","async"),document.head.appendChild(t)},l="US",d="CA",f="SA",p="BR",g="CA",m="EU",v="PL",w="ca",_="us",h="default",y="none",b="eu",T="ca",A={STRICTLY_NECESSARY_COOKIES:1,PERFORMANCE_COOKIES:2,FUNCTIONAL_COOKIES:3,TARGETING_COOKIES:4,SOCIAL_MEDIA_COOKIES:5,SALE_OF_PERSONAL_DATA:"SPD_BG",STACK_42:"STACK42"},E=function(){return new Promise((function(e){window.__tcfapi?window.__tcfapi("getTCData",2,(function(t,n){n&&e(t)})):e(!1)}))};function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var O=function(e){var t=e.geolocation_mock,n=e.onetrust_logs,r=e.onetrust_script_version;return new o.a((function(e,a){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;e===T&&(window.OneTrust={geolocationResponse:{stateCode:d,countryCode:l},useGeoLocationService:!1}),e===b&&(window.OneTrust={geolocationResponse:{regionCode:m,countryCode:v},useGeoLocationService:!1}),e===y&&(window.OneTrust={geolocationResponse:{regionCode:f,countryCode:p},useGeoLocationService:!1})}(t);var c="prod"===r?"38cb75bd-fbe1-4ac8-b4af-e531ab368caf":"".concat("38cb75bd-fbe1-4ac8-b4af-e531ab368caf","-test"),u="true"===n,s="ccpa-script-id-".concat(c),C=function(){u&&console.log("###### onetrust setup start");var n=!1;window.OptanonWrapper=function(){var r=function(e){var t=decodeURIComponent(e).split("&"),n={};if(t.forEach((function(e){var t=e.split("=");n[t[0]]=t[1]})),n.groups){n.groups=n.groups.split(",");var o={};n.groups.forEach((function(e){var t=e.split(":");o[t[0]]=t[1]})),n.groups=o}return n}(i.a.get("OptanonConsent"));u&&console.log("%c ++++ DECODED COOKIE: ","background: yellow; color: black",r);var a=void 0,c=function(){return o.a.all([E(),new Promise((function(e){window.__uspapi("getUSPData",1,(function(t,n){e(!!n&&t)}))}))]).then((function(t){var o=S(t,2),i=o[0],c=o[1];u&&(console.log("%c RESOLVED ----- GDPR: ","background: yellow; color: black",i),console.log("%c RESOLVED ----- CCPA: ","background: yellow; color: black",c)),function(){if(r.groups){if(u)for(var e in console.log("%c ALL GROUPS ","background: yellow; color: black",r.groups),A)r.groups[A[e]]&&console.log(e,r.groups[A[e]]);a=r.groups,n=!0}}();var s,f=function(e){var t=e.country,n=e.state;return t===l&&n===d}(p),g=!!i&&i.gdprApplies,m=f&&!a;if(n){var v=!!(s=a)&&"1"===s[A.STRICTLY_NECESSARY_COOKIES]&&"1"===s[A.PERFORMANCE_COOKIES]&&"1"===s[A.FUNCTIONAL_COOKIES]&&"1"===s[A.TARGETING_COOKIES],w=f||g,_=c?c.uspString:void 0,h=i?i.tcString:void 0;w?v?(f&&e({require_gdpr_consent:g,require_ccpa_consent:f,require_consent:!0,consent:!0,gdpr_consent_data:void 0,ccpa_consent_data:_}),g&&e({require_gdpr_consent:g,require_ccpa_consent:f,require_consent:!0,consent:!!h,gdpr_consent_data:h,ccpa_consent_data:_})):e({require_gdpr_consent:g,require_ccpa_consent:f,require_consent:!0,consent:!1,gdpr_consent_data:void 0,ccpa_consent_data:_}):e({require_gdpr_consent:g,require_ccpa_consent:f,require_consent:!1,consent:void 0,gdpr_consent_data:void 0,ccpa_consent_data:_})}!n&&m&&e({require_gdpr_consent:!1,require_ccpa_consent:!0,require_consent:!0,consent:!0,gdpr_consent_data:void 0,ccpa_consent_data:"1YNN"})})).catch((function(t){e({require_gdpr_consent:!1,require_ccpa_consent:!1,require_consent:!1,consent:void 0,gdpr_consent_data:void 0,ccpa_consent_data:void 0})}))},f=function(){return o.a.all([E()]).then((function(e){var t=S(e,1)[0],n=!!t&&t.gdprApplies,o=i.a.get("OptanonAlertBoxClosed");n&&!o?(window.OneTrust.ToggleInfoDisplay(),window.OneTrust.OnConsentChanged((function(){c()}))):c()})).catch((function(t){e({require_gdpr_consent:!1,require_ccpa_consent:!1,require_consent:!1,consent:void 0,gdpr_consent_data:void 0,ccpa_consent_data:void 0})}))},p=Optanon.getGeolocationData();if(document.getElementById(s))f();else{var g="";p.country===l&&(g=p.state===d?w:_),O("ca"===t?"./otCCPAiab.js":"https://cdn.cookielaw.org/opt-out/otCCPAiab.js",[{attr:"type",val:"text/javascript"},{attr:"charset",val:"UTF-8"},{attr:"id",val:s},{attr:"ccpa-opt-out-ids",val:"".concat(A.PERFORMANCE_COOKIES,",").concat(A.TARGETING_COOKIES)},{attr:"ccpa-opt-out-geo",val:g},{attr:"ccpa-opt-out-lspa",val:"false"}],(function(){f()}))}}},O=function(e,t,n){var o=document.createElement("script");o.src=e,t.forEach((function(e){o.setAttribute(e.attr,e.val)})),document.head.appendChild(o),o.onload=function(){return n()},o.onerror=a},I=function(){var e=function(){if(window.strLocalization)return window.strLocalization===p?"pt":window.strLocalization===g?"en":window.strLocalization.toLowerCase();var e=document.documentElement.lang;return"es-419"===e&&(e="es"),e||"en"}();O("https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",[{attr:"type",val:"text/javascript"},{attr:"charset",val:"UTF-8"},{attr:"data-language",val:e},{attr:"data-domain-script",val:c}],(function(){return C()}))};O("https://cdn.cookielaw.org/consent/tcf.stub.js",[{attr:"type",val:"text/javascript"},{attr:"charset",val:"UTF-8"}],(function(){return I()}))}))};function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n.d(t,"b",(function(){return k}));var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e,n=null,o=function(){window.clearTimeout(n),n=window.setTimeout((function(){t.forEach((function(e){"function"!=typeof e?console.warn("Ignore execution of ",e,"in the Boostrap queue, the input is not a function."):e()})),t.length=0}),0)},r=function(e){"function"!=typeof e?console.warn("Ignore push of ",e,"to the Boostrap queue, the input is not a function."):(t.push(e),o())};return o(),{exec:o,push:r}};t.a=function(e){console.log("Init Bootstrap with config",e);var t,n=e.admantx,r=e.admantx_url,a=e.adstest,u=(e.dart_zone,e.privacy_domain,e.hb_domain,e.geolocation_mock),l=e.onetrust_logs,d=e.onetrust_script_version,f=e.edition||"us",p=n?o.a.resolve(n):(t=r,new o.a((function(e){var n="//usasync01.admantx.com/admantx/service?request="+escape('{"key":"234330834c41105ad5ed794fa036e085b40225c44f9228bb9e2692f427917605", "decorator":"template.reuters_ss", "filter":["default"], "method":"descriptor", "mode":"async", "type":"URL", "body":"'+encodeURIComponent(t)+'"}'),o=new XMLHttpRequest;o&&(o.ontimeout=function(){o.abort(),e("none")},o.onreadystatechange=function(){if(4==o.readyState)if(200==o.status){var t=o.responseText,n=JSON.parse(t).admants;e(n.join(","))}else e("none")},o.open("GET",n,!0),o.timeout=500,o.send())}))),g=new o.a((function(e,t){var n=document.createElement("script");n.src="//cdn.adsafeprotected.com/iasPET.1.js",n.setAttribute("async","async"),document.head.appendChild(n),n.onload=function(){window.__iasPET=window.__iasPET||{},window.__iasPET.queue=window.__iasPET.queue||[],window.__iasPET.pubId="10764",console.log("IAS setup complete"),e()},n.onerror=function(t){console.warn("IAS load error",t),e()}})),m=c(f),v=O({geolocation_mock:u,onetrust_logs:l,onetrust_script_version:d}),w=o.a.all([p,g,m,v]).then((function(e){var t=I(e,4),n=t[0],o=(t[1],t[2],t[3]),r=o.require_gdpr_consent,c=o.require_ccpa_consent,u=o.require_consent,l=o.consent,d=o.gdpr_consent_data,f=o.ccpa_consent_data;window.gptadslots=window.gptadslots||[],window.googletag=window.googletag||{cmd:[]},window.googletag.cmd.splice(0,0,(function(){window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().enableAsyncRendering(),window.googletag.pubads().collapseEmptyDivs(!0),window.googletag.pubads().setTargeting("admant",n),console.log("GPT SET ADMANTX: ",n);var e=i.a.get("aam_uuid");e&&window.googletag.pubads().setTargeting("aam",e),a&&window.googletag.pubads().setTargeting("adstest",a),function(){if(0===window.googletag.pubads().getTargeting("permutive").length){var e=window.localStorage.getItem("_pdfps");window.googletag.pubads().setTargeting("permutive",e?JSON.parse(e):[])}}(),window.googletag.enableServices(),console.log("GPT ENABLE SERVICES")})),s({require_consent:u,opt_in:!u||l,token:(r?d:void 0)||(c?f:void 0)}),setTimeout((function(){!function(e){"http"!==e.substr(0,4)&&(e=("https:"==document.location.protocol?"https:":"")+e);var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}("https://securepubads.g.doubleclick.net/tag/js/gpt.js")}),500);var p={require_gdpr_consent:r,require_ccpa_consent:c,require_consent:u,consent:l,gdpr_consent_data:d,ccpa_consent_data:f,admantx:n};return console.table?console.table(p):console.log(p),p}));return{queue:k(),getResults:function(e){w.then(e)}}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(3))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,r,i,a,c,u=1,s={},l=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){g(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){g(e.data)},o=function(e){i.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,o=function(e){var t=d.createElement("script");t.onreadystatechange=function(){g(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):o=function(e){setTimeout(g,0,e)}:(a="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&g(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),o=function(t){e.postMessage(a+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[u]=r,o(u),u++},f.clearImmediate=p}function p(e){delete s[e]}function g(e){if(l)setTimeout(g,0,e);else{var t=s[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(3),n(7))},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var u,s=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?s=u.concat(s):d=-1,s.length&&p())}function p(){if(!l){var e=c(f);l=!0;for(var t=s.length;t;){for(u=s,s=[];++d<t;)u&&u[d].run();d=-1,t=s.length}u=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new g(e,t)),1!==s.length||l||c(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},,function(e,t,n){"use strict";n.r(t);var o=n(2),r=function(){var e=window.bootstrap?window.bootstrap.queue:void 0;Object(o.b)(e)};r(),window.initBootstrap=function(e){return r(),window.bootstrap=Object(o.a)(e),window.bootstrap}}]);
//# sourceMappingURL=bootstrap.static.js.mapvar init = true;

window.TR3 = {};
TR3.logEnabled = 1;
TR3.logs = [];
TR3.intervals = {};
TR3.tagEvents = {};
TR3.sync = {};
TR3.tags = {};
TR3.counters = {};
TR3.data = {};
TR3.Ads = {};
TR3.data.adslots = [];

TR3.data.ord = Math.floor(Math.random() * 10e12);

window.WT = window.WT || {};

//DFP Premimum code
TR3.data.GlobalAdsAllowed = true;
TR3.data.sites = {};
TR3.data.sites = {
  'www.reuters.com': {
    'enabled': true,
    'tier2': false,
    'rubicon': true
  },
  'prod.reuters.com': {
    'enabled': true,
    'tier2': false,
    'rubicon': true
  },
  'uk.reuters.com': {
    'enabled': true,
    'tier2': false,
    'rubicon': true
  },
  'live.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'ca.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'cn.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'in.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'jp.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'blogs.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'mx.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'lta.reuters.com': {
    'enabled': true,
    'tier2': false,
    'rubicon': true
  },
  'betalta.reuters.com': {
    'enabled': true,
    'tier2': false,
    'rubicon': true
  },
  'ar.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'br.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'es.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'ru.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'ara.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'fr.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'de.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'it.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'borsaitaliana.it.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'af.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  'olyadmin.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'betaus.admin.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'brazil-soccer.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'winter-games.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'live.jp.reuters.com': {
    'enabled': true,
    'tier2': true
  },
  '10.90.23.211': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.142': {
    'enabled': true,
    'tier2': false
  },
  '10.90.43.101': {
    'enabled': true,
    'tier2': false,
    'rubicon': true
  },
  '10.90.43.102': {
    'enabled': true,
    'tier2': false
  },
  '10.90.22.173': {
    'enabled': true,
    'tier2': false
  },
  '10.90.22.174': {
    'enabled': true,
    'tier2': false
  },
  '10.90.22.116': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.118': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.119': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.120': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.121': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.122': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.123': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.124': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.125': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.126': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.179': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.175': {
    'enabled': true,
    'tier2': true
  },
  '10.90.43.115': {
    'enabled': true,
    'tier2': true
  },
  '10.90.43.117': {
    'enabled': true,
    'tier2': true
  },
  '10.90.0.13': {
    'enabled': true,
    'tier2': false
  },
  'betacn.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  '10.90.43.107': {
    'enabled': true,
    'tier2': true
  },
  '10.90.22.166': {
    'enabled': true,
    'tier2': false
  },
  '10.90.22.167': {
    'enabled': true,
    'tier2': false
  },
  '10.90.22.141': {
    'enabled': true,
    'tier2': false
  },
  '10.90.22.206': {
    'enabled': true,
    'tier2': false
  },
  'betajp.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'funds.us.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'funds.uk.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'funds.in.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'portfolio.us.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'portfolio.uk.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'portfolio.in.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'alerts.us.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'alerts.uk.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'alerts.in.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'stockscreener.us.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'stockscreener.uk.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'stockscreener.in.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  'betade.reuters.com': {
    'enabled': true,
    'tier2': false
  },
  '10.90.22.207': {
    'enabled': true,
    'tier2': false
  },
  '10.90.23.207': {
    'enabled': true,
    'tier2': false
  },
  '10.35.60.43': {
    'enabled': true,
    'tier2': true
  },
  '10.35.60.44': {
    'enabled': true,
    'tier2': true
  },
  '10.35.60.45': {
    'enabled': true,
    'tier2': true
  },
  '10.35.60.50': {
    'enabled': true,
    'tier2': true
  },
  '10.35.60.42': {
    'enabled': true,
    'tier2': true
  },
  '10.35.60.19': {
    'enabled': true,
    'tier2': true
  },
  'live.special.reuters.com': {
    'enabled': true,
    'tier2': false
  }

};

TR3.data.DFPEnabled = !!TR3.data.sites[window.location.hostname]['enabled'] && TR3.data.GlobalAdsAllowed;

TR3.log = function(msgs) {
  TR3.logs.push([new Date()].concat(Array.prototype.slice.call(arguments)));
  if (TR3.logEnabled === 1) {
    return window.console && console.log &&
      Function.apply.call(console.log, console, arguments);
  }
};

TR3.checkHosts = function(hosts) {
  for (var i = hosts.length - 1; i >= 0; i--) {
    if (window.location.hostname.indexOf(hosts[i]) >= 0) {
      return true;
    }
  }
  return false;
};

TR3.getURLQueryParameterByName = function(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

TR3.extractDartZone = function() {
  var m = document.getElementsByTagName('meta');
  for (i = 0; i < m.length; i++) {
    if (m[i].name == "DCSext.DartZone") {
      return m[i].content;
    }
  }
  return "undefined";
};

TR3.writeScript = function(url) {
  document.write('<scr' + 'ipt type="text/javascript" src="' + url + '"></scr' + 'ipt>');
};

TR3.addEvent = function(name) {
  TR3.log("event fired: " + name);
  TR3.tagEvents[name.toLowerCase()] = 1;
};

TR3.checkHosts = function(hosts) {
  for (var i = hosts.length - 1; i >= 0; i--) {
    if (window.location.hostname.indexOf(hosts[i]) >= 0) {
      return true;
    }
  }
  return false;
};


(function() {
  TR3.data.contentType = "landing";
  var parts = window.location.pathname.split("/");
  if (parts[1] !== null && parts[1] === "article") {
    TR3.data.contentType = "articles";
  }

})();

var adSymbol = TR3.getURLQueryParameterByName("smbl");
var adTest = TR3.getURLQueryParameterByName("adstest");
var adParams = "";
var adParams2 = "";

if (TR3.data.admantx !== "" && !!TR3.data.admantx) {
  adParams += "admant=" + TR3.data.admantx + ";";
  adParams2 += "admant=" + TR3.data.admantx + ";";
}

if (typeof(adTest) != 'undefined') {
  adParams += "adstest=" + adTest + ";";
  adParams2 += "adstest=" + adTest + ";";
}

if (window.location.href.indexOf("idUSRTX4QGTB") > -1 || window.location.href.indexOf("idINRTX4QGTB") > -1 || window.location.href.indexOf("idUKRTX4QGTB") > -1) {
  adParams += "smbl=sa";
  adParams2 += "smbl=sa";
} else {
  if (typeof(adSymbol) != 'undefined') {
    adParams += "smbl=" + adSymbol;
    adParams2 += "smbl=" + adSymbol;
  }
}

// End Setup


// GPT Begin
var gptadslots = [];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
  var aam = getCookie('aam_uuid');
  if (aam) {
    googletag.pubads().setTargeting('aam', aam);
  }
});

var can_display_ads = false;
var display_ads_resolvers = display_ads_resolvers || [];
var arrayAds = arrayAds || [];
var adParams3 = "";

// Admantx begin

function setupAdmantx() {
  return new Promise(function(resolve) {
    admantx_callback = function(data) {
      TR3.data.admantx = "";
      if (data && data.admants && data.status == "OK") {
        TR3.log("admantx_callback :" + data.status);
        for (var i = 0; i < data.admants.length; i++) {
          if (i > 0) TR3.data.admantx += ",";
          TR3.data.admantx += data.admants[i];
        }
        TR3.log("admantx_callback TR3.data.admantx:" + TR3.data.admantx);

        resolve(TR3.data.admantx);
      }
    };

    if (TR3.checkHosts(["www.reuters.com", "uk.reuters.com", "jp.reuters.com", "in.reuters.com", "lta.reuters.com", "betalta.reuters.com"]) && (!!TR3.data.contentType)) {
      var adxsvcReq = '//async01.admantx.com/admantx/service?request=' + escape('{"key":"234330834c41105ad5ed794fa036e085b40225c44f9228bb9e2692f427917605", "decorator":"template.reuters", "filter":["default"], "method":"descriptor", "mode":"async", "type":"URL", "body":"' + encodeURIComponent(document.location.href) + '"}');
      var adxsvcSE = document.createElement('script');
      adxsvcSE.id = "adxsvcSE_2";
      adxsvcSE.type = 'text/javascript';
      adxsvcSE.async = true;
      adxsvcSE.src = adxsvcReq;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(adxsvcSE, s);
    } else {
      resolve();
    }

    setTimeout(resolve, 500);
  });
}

function returnAdmantx() {
  if (TR3.data.admantx) {
    return ";admant=" + TR3.data.admantx;
  }
}

//Admantx End    

// Key Value Functions end

document.addEventListener("DOMContentLoaded", function() {
  var edition = window.location.host.split('.reuters.com')[0];
  edition = edition === 'www' ? 'us' : edition;

  setupAdmantx().then(function(admantx) {
    window.initBootstrap({
      admantx: admantx,
      dart_zone: TR3.extractDartZone(),
      evidon_consent_cookie_reset_date: '2020-10-25',
      edition: edition,
      onetrust_script_version: 'prod'
    });

    window.bootstrap.getResults(function(result) {
      enableDisplayAds();

      if (!result.require_consent || result.consent) {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'Cookie Consent',
            category: 'Consent',
            action: 'Cookie Consent',
            label: 'Cookie Consent',
            attributes: {
              cookieConsent: true,
            }
          });
        }
      }
    });
  });

});

function gatherAd(pDivId, pSize, pSite, headerBid, type) {
  arrayAds.push({
    'pDivId': pDivId,
    'pSite': pSite,
    'pSize': pSize,
    'phb': headerBid,
    'pType': type
  });
}

//  Gather Page Ads end

function checkHB() {
  for (var k = 0; k <= arrayAds.length; k++) {
    if (arrayAds[k].phb == 'yes') {
      //console.log('yes');
      return 'yes';
    } else {
      return 'no';
    }
  }
}


function enableDisplayAds() {
  can_display_ads = true;

  for(var i = 0; i < display_ads_resolvers.length; i++) {
    display_ads_resolvers[i]();
  };
}

function promisifySetupAd(func) {
  var promise = new Promise(function(resolve) {
    if (can_display_ads) {
      resolve();
    } else {
      display_ads_resolvers.push(resolve);
    }
  }).then(function() {
    googletag.cmd.push(func);
  });
}

// Display ads
function requestAds(divId) {
  if (divId === 'group') {
    console.log('#### display group of ads');
    googletag.display('div_gpt_lb');
    googletag.display('div_gpt_mpu');
    googletag.display('div_gpt_mpulow');

    if ((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone() != "jp.reuters/home") && (TR3.extractDartZone().indexOf("/pictures/slideshow") == -1)) {
      // googletag.display('div_gpt_mpu2');
    }

    if ((TR3.extractDartZone() == "reuters.com/home") || (TR3.extractDartZone() == "uk.reuters/home") || (TR3.extractDartZone() == "jp.reuters/home") || (TR3.extractDartZone() == "lta.reuters/home")) {
      googletag.display('div_gpt_lb_center');
      googletag.display('div_gpt_lb_low');
    }
  } else {
    console.log('#### display single ad', divId);
    googletag.display(divId)
  }
  
}

TR3.requestPETAds = function(adContainerId) {
  // make the PET request
  if (adContainerId === 'group') {

    googletag.cmd.push(function() {
      // read the currently defined GPT ad slots for sending to the PET endpoint
      // defined all GPT ad slots before calling PET
      var gptSlots = googletag.pubads().getSlots(); 
      var iasPETSlots = [];
      for (var i = 0; i < gptSlots.length; i++) {
        var sizes = gptSlots[i].getSizes().map(function(size) { 
          if (size.getWidth && size.getHeight)
            return [size.getWidth(), size.getHeight()]; 
          else
            return [1, 1];
        });
        
        iasPETSlots.push({
          adSlotId: gptSlots[i].getSlotElementId(),
          //size: can either be a single size (for example, [728, 90]) // or an array of sizes (for example, [[728, 90], [970, 90]]) size: sizes,
          size: gptSlots[i].getSizes(),
          adUnitPath: gptSlots[i].getAdUnitPath()
        }); 
      }
      
      
      console.log('####iasPET slots from group call', iasPETSlots);
      // make the request to PET. if your page makes multiple ad requests to DFP // (for example, lazily loaded ads, infinite scrolling pages, etc.), make // a request to PET before every request to DFP
      __iasPET.queue.push({
        adSlots: iasPETSlots,
        dataHandler: function() {
          __iasPET.setTargetingForGPT();
          console.log('#### display group of ads with ias');
          googletag.display('div_gpt_lb');
          googletag.display('div_gpt_mpu');
          googletag.display('div_gpt_mpulow');

          if ((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone() != "jp.reuters/home") && (TR3.extractDartZone().indexOf("/pictures/slideshow") == -1)) {
            // googletag.display('div_gpt_mpu2');
          }

          if ((TR3.extractDartZone() == "reuters.com/home") || (TR3.extractDartZone() == "uk.reuters/home") || (TR3.extractDartZone() == "jp.reuters/home") || (TR3.extractDartZone() == "lta.reuters/home")) {
            googletag.display('div_gpt_lb_center');
            googletag.display('div_gpt_lb_low');
          }
        }
      });
    });

  } else {
    window.googletag.cmd.push(function() {
      var gptSlots = googletag.pubads().getSlots(); 
      var gptSlot = gptSlots.find(function(slot) {
        return slot.getSlotElementId() === adContainerId;
      });
      var iasPETSlot = {
        adSlotId: gptSlot.getSlotElementId(),
        //size: can either be a single size (for example, [728, 90]) // or an array of sizes (for example, [[728, 90], [970, 90]]) size: sizes,
        size: gptSlot.getSizes(),
        adUnitPath: gptSlot.getAdUnitPath()
      }

      console.log('####iasPET slot from single call', iasPETSlot);
      // make the request to PET. if your page makes multiple ad requests to DFP // (for example, lazily loaded ads, infinite scrolling pages, etc.), make // a request to PET before every request to DFP
      __iasPET.queue.push({
        adSlots: iasPETSlot,
        dataHandler: function() {
          __iasPET.setTargetingForGPT();
          console.log('#### display single ad with ias', adContainerId);
          googletag.display(adContainerId)
        }
      });
    });
  }
  
}

function setupAd(site, size, divId, ptype) {
  promisifySetupAd(
    function() {
      //define slot
      gptadslots[divId] = googletag.defineSlot("/4735792/" + site, size, divId).setTargeting('type', [ptype]).addService(googletag.pubads());

      //add the targetting
      if (!!adParams3) {
        var t = adParams3.split(";");

        for (var k = 0; k < t.length; k++) {
          if (t[k].indexOf("=") > 0) {
            gptadslots[divId].setTargeting(t[k].substr(0, t[k].indexOf("=")), t[k].substr(t[k].indexOf("=") + 1));
          } else {
            console.error("Targeting string index of = " + adParams3 + " in Error for " + arrayAds[k].pDivId);
          }
        }
      }

      if (divId === 'div_gpt_bi_content') {
        gptadslots['div_gpt_bi_content'].setTargeting('div_id', ['bi_content']);
      }

      if (divId === 'div_gpt_home_rr1') {
        gptadslots['BizDev_Home_RR1'].setTargeting('div_id', ['BizDev_Home_RR1']);
      }

      //--> Native Ad Setup Begin
      if (divId == 'div_gpt_bi_content_landing') {
        $('#div_gpt_bi_content_landing').insertAfter($('#moreSectionNews').find('.feature')[2]);
      }

      if (divId == 'div_gpt_bi_video') {
        $('#div_gpt_bi_video').insertAfter($('#moreVideos').find('.feature')[3]);
      }

      if (divId == 'div_gpt_bi_feature') {
        $('#div_gpt_bi_feature').css('visibility', 'hidden');
        setTimeout(function() {

          $('#div_gpt_bi_feature').css('position', 'absolute');
          $('#div_gpt_bi_feature').css('z-index', '9');
          var lt = $('.featured-module.left').last().offset();
          var rt = $('#div_gpt_bi_feature').offset();
          var newt = lt.top - rt.top;
          $('#div_gpt_bi_feature').css('margin-top', newt);
          $('#div_gpt_bi_feature').css('right', '334px');
          var newh = $('.featured-module.left').last().height();
          $('.featured-module.right').last().css('height', newh + 'px');
          $('.featured-module.right').last().css('background', '#f5f5f5');
          $('article.story:nth-child(1)').css('max-height', '130px');
          $('#div_gpt_bi_feature').css('visibility', 'visible');
        }, 2000);
      }

      if (divId == 'div_gpt_bi_video_landing') {
        $('#moreVideoStrip .columnRight').hide();
        $('#div_gpt_bi_video_landing').insertAfter($('#moreVideoStrip .columnCenter'));
        $('#div_gpt_bi_video_landing').addClass('columnRight');

        setTimeout(function() {
          if ($("#div_gpt_bi_video_landing").css('display') == 'none') {
            $('#div_gpt_bi_video_landing').removeClass('columnRight');
            $('#moreVideoStrip .columnRight').show();
          }
        }, 3000);
      }

      if (divId == 'sponsored_content_gpt') {
        $('#ad-replacement-video').html('');
        $('#ad-replacement-video').append($('#sponsored_content_gpt'));
      }

      if (divId == 'div_gpt_ntent') {

        $('#div_gpt_ntent').insertAfter($('.news-horizontal-tri').find('article')[1]);
        $('.news-horizontal-tri article').last().hide();

        setTimeout(function() {
          if ($('#div_gpt_ntent').css('display') == 'none') {
            $('#div_gpt_ntent').hide();
            $('.news-horizontal-tri article').last().show();
          }
        }, 3000);

      }

      if (divId == 'div_gpt_ntentc') {

        $('#div_gpt_ntentc').insertAfter($('.news-horizontal-sm').find('article')[2]);
        $('.news-horizontal-sm article').last().hide();

        setTimeout(function() {
          if ($('#div_gpt_ntentc').css('display') == 'none') {
            $('#div_gpt_ntentc').hide();
            $('.news-horizontal-sm article').last().show();
          }
        }, 3000);

      }
      //--> Native Ad Setup End

      // display ad
      if ( window.__iasPET ) {
        console.log('###### request native ad with ias', divId);
        TR3.requestPETAds(divId);
      } else {
        console.log('###### request native ad w/o ias');
        googletag.display(divId);
      }
      console.log("Display Ad via GPT: Site:" + site + " Target: type=" + ptype + ";" + adParams3 + " Div Slot:" + divId + " new_framework");
    }
  );
}

function callAds() {

  if (TR3.data.GlobalAdsAllowed) {

    var adSymbol = TR3.getURLQueryParameterByName("smbl");

    var adTest = TR3.getURLQueryParameterByName("adstest");
    var dzn = arrayAds[0].pSite.split(";");
    var pSite = arrayAds[0].pSite;


    // adstest
    if (typeof(adTest) != 'undefined') {
      adParams3 += "adstest=" + adTest;
    }

    // symbol now smbl

    if (window.location.href.indexOf("finance/stocks/overview") > -1) {
      var getRic = window.location.href.split("/");
      var ricVal = getRic.slice(-1).pop();
      adParams3 += ";smbl=" + ricVal;
    } else {

      if (window.location.href.indexOf("idUSRTX4QGTB") > -1 || window.location.href.indexOf("idINRTX4QGTB") > -1 || window.location.href.indexOf("idUKRTX4QGTB") > -1) {
        adParams3 += ";smbl=sa";
      } else {

        if (typeof(adSymbol) != 'undefined') {
          adParams3 += ";smbl=" + adSymbol;
        }
      }

    }

    // template
    if (dzn[0] == 'reuters.com/home' || dzn[0] == 'in.reuters/home') {
      adParams3 += ";template=home";
    } else if (dzn[0].indexOf("article") > -1) {
      if (dzn[0].indexOf("article_archive") == -1) {
        adParams3 += ";template=article";
      }
    } else {
      adParams3 += ";template=other";
    }

    // article ID / story channel
    if (dzn[0].indexOf("article") > -1 && dzn[0].indexOf("archive") < -1) {
      adParams3 += ";articleID=" + Reuters.info.articleId;
      adParams3 += ";storychannel=" + Reuters.info.channel;
    }

    // Ad Refresh
    if (Reuters.refresh) {
      adParams3 += ";prefresh=" + Reuters.refresh.prefresh;
    }


    // admantx
    if (TR3.data.admantx) {
      adParams3 += returnAdmantx();
    }

    // header bidding 

    //if (checkHB() == 'yes') {

      promisifySetupAd(function() {

        //--> Adslot 1 declaration 
        var bidxc = typeof window.advBidxc === "object" ? '1' : '0';

        if (TR3.extractDartZone() === 'reuters.com/home') {
          gptadslots[0] = googletag.defineSlot('/4735792/' + pSite, [
            [1, 1]
          ], 'div_gpt_lb').setTargeting('type', ['leaderboard-old']).setTargeting('bidxc', [bidxc]).addService(googletag.pubads());
          console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboard;" + adParams3 + " Div Slot: div_gpt_lb" + " Sync FL new_framework");
        } else {
          gptadslots[0] = googletag.defineSlot('/4735792/' + pSite, [
            [728, 90],
            [970, 250],
            [970, 90],
            [970, 66],
            [970, 180],
            [940, 230],
            [1, 1]
          ], 'div_gpt_lb').setTargeting('type', ['leaderboard']).setTargeting('div_id', ['leaderboard']).setTargeting('bidxc', [bidxc]).addService(googletag.pubads());
          console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboard;" + adParams3 + " Div Slot: div_gpt_lb" + " Sync FL new_framework");
        }

        if (TR3.extractDartZone().indexOf("/pictures/slideshow") > -1) {
          //--> Adslot 2 declaration 
          gptadslots[1] = googletag.defineSlot('/4735792/' + pSite, [
            [300, 250]
          ], 'div_gpt_mpu').setTargeting('type', ['mpu']).setTargeting('div_id', ['mpu']).addService(googletag.pubads());
          console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu;" + adParams3 + " Div Slot: div_gpt_mpu" + " Sync FL new_framework");
        } else if (TR3.extractDartZone().indexOf("jp.reuters") > -1) {
          //--> Adslot 2 declaration 
          gptadslots[1] = googletag.defineSlot('/4735792/' + pSite, [
            [300, 250],
            [1, 1],
            [300, 600],
            [300, 1050]
          ], 'div_gpt_mpu').setTargeting('type', ['mpu']).setTargeting('div_id', ['mpu']).addService(googletag.pubads());
          console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu;" + adParams3 + " Div Slot: div_gpt_mpu" + " Sync FL new_framework");
        }  else {
          //--> Adslot 2 declaration 
          gptadslots[1] = googletag.defineSlot('/4735792/' + arrayAds[0].pSite, [
            [300, 250],
            [1, 1],
            [300, 600],
            [300, 1050],
            [160, 600]
          ], 'div_gpt_mpu').setTargeting('type', ['mpu']).setTargeting('div_id', ['mpu']).addService(googletag.pubads());
          console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu;" + adParams3 + " Div Slot: div_gpt_mpu" + " Sync FL new_framework");
        }

        //--> Adslot 3 declaration 
        gptadslots[2] = googletag.defineSlot('/4735792/' + pSite, [
          [300, 250],
          [1, 1],
          [300, 600]
        ], 'div_gpt_mpulow').setTargeting('type', ['mpulow']).setTargeting('div_id', ['mpulow']).addService(googletag.pubads());
        console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpulow;" + adParams3 + " Div Slot: div_gpt_mpulow" + " Sync FL new_framework");

        if (/*(TR3.extractDartZone() == "reuters.com/home") || */(TR3.extractDartZone() == "uk.reuters/home") || (TR3.extractDartZone() == "jp.reuters/home") || (TR3.extractDartZone().indexOf("reuters.com/tentpoles") > -1) || (TR3.extractDartZone() == "lta.reuters/home")) {
          //--> Adslot 4 declaration 
          gptadslots[3] = googletag.defineSlot('/4735792/' + pSite, [
            [728, 90],
            [970, 250],
            [970, 90],
            [970, 66],
            [940, 230],
            [1100, 375],
            [1, 1]
          ], 'div_gpt_lb_center').setTargeting('type', ['leaderboardcenter']).setTargeting('div_id', ['leaderboardcenter']).addService(googletag.pubads());
          console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboardcenter;" + adParams3 + " Div Slot: div_gpt_lb_center" + " Sync FL new_framework");
        }

        if ((TR3.extractDartZone() == "reuters.com/home") || (TR3.extractDartZone() == "uk.reuters/home") || (TR3.extractDartZone() == "jp.reuters/home") || (TR3.extractDartZone().indexOf("reuters.com/tentpoles") > -1) || (TR3.extractDartZone() == "lta.reuters/home")) {
          //--> Adslot 5 declaration 
          gptadslots[4] = googletag.defineSlot('/4735792/' + pSite, [
            [728, 90],
            [970, 250],
            [970, 90],
            [970, 66],
            [940, 230],
            [1, 1]
          ], 'div_gpt_lb_low').setTargeting('type', ['leaderboardlow']).setTargeting('div_id', ['leaderboardlow']).addService(googletag.pubads());
          console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboardlow;" + adParams3 + " Div Slot: div_gpt_lb_low" + " Sync FL new_framework");
        }

        // if ((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone() != "jp.reuters/home") && (TR3.extractDartZone().indexOf("/pictures/slideshow") == -1) && document.getElementById('div_gpt_mpu2')) {
        //   //--> Adslot 5 declaration 
        //   gptadslots[5] = googletag.defineSlot('/4735792/' + pSite, [
        //     [300, 250],
        //     [1, 1],
        //     [300, 600]
        //   ], 'div_gpt_mpu2').setTargeting('type', ['mpu2']).addService(googletag.pubads());
        //   console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu2;" + adParams3 + " Div Slot: div_gpt_mpu2" + " Sync FL new_framework");
        // }

        //add the targetting 
        if (!!adParams3) {
          var t = adParams3.split(";");
          for (var k = 0; k < t.length; k++) {
            if (t[k].indexOf("=") > 0) {
              gptadslots[0].setTargeting(t[k].substr(0, t[k].indexOf("=")), t[k].substr(t[k].indexOf("=") + 1));
              gptadslots[1].setTargeting(t[k].substr(0, t[k].indexOf("=")), t[k].substr(t[k].indexOf("=") + 1));
              gptadslots[2].setTargeting(t[k].substr(0, t[k].indexOf("=")), t[k].substr(t[k].indexOf("=") + 1));

              if ((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone() != "jp.reuters/home") && (TR3.extractDartZone().indexOf("/pictures/slideshow") == -1) && gptadslots[5]) {
                gptadslots[5].setTargeting(t[k].substr(0, t[k].indexOf("=")), t[k].substr(t[k].indexOf("=") + 1));
              }

              if (/*(TR3.extractDartZone() == "reuters.com/home") || */(TR3.extractDartZone() == "uk.reuters/home") || (TR3.extractDartZone() == "jp.reuters/home") || (TR3.extractDartZone() == "lta.reuters/home") && gptadslots[3]) {
                gptadslots[3].setTargeting(t[k].substr(0, t[k].indexOf("=")), t[k].substr(t[k].indexOf("=") + 1));
              }

              if ((TR3.extractDartZone() == "reuters.com/home") || (TR3.extractDartZone() == "uk.reuters/home") || (TR3.extractDartZone() == "jp.reuters/home") || (TR3.extractDartZone() == "lta.reuters/home") && gptadslots[4]) {
                gptadslots[4].setTargeting(t[k].substr(0, t[k].indexOf("=")), t[k].substr(t[k].indexOf("=") + 1));
              }
            } else {
              console.error("Targeting string index of = " + adParams3);
            }
          }
        }

        if ( window.__iasPET ) {
          console.log('###### request ads with ias');
          TR3.requestPETAds('group');
        } else {
          console.log('###### request ads w/o ias');
          requestAds('group');
        }


      });
    //}

    // end header bidding

    // not header bidding
    for (var b = 0; b < arrayAds.length; b++) {
      if (arrayAds[b].phb !== 'yes') {
        setupAd(pSite, arrayAds[b].pSize, arrayAds[b].pDivId, arrayAds[b].pType);
      }
    }
  }

};
