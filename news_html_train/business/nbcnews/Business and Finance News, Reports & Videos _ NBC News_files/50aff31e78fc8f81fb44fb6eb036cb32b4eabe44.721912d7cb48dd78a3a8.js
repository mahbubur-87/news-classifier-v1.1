(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"7jM5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("yDJ3"),a=n.n(r);const o=t=>a()(t,"layouts",[]),i=(t,e)=>{const n=t=>a()(t,"items",[]).some((t=>a()(t,"item.source.organization.name")===e));return o(t).some((t=>a()(t,"packages",[]).some(n)))},u=(t,e)=>{const n=[];return o(t).forEach((t=>{const r=a()(t,"packages",[]);n.push(...r.filter((t=>t.type===e)))})),n}},"8P85":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return w})),n.d(e,"f",(function(){return S})),n.d(e,"c",(function(){return $})),n.d(e,"d",(function(){return F})),n.d(e,"e",(function(){return M})),n.d(e,"g",(function(){return B})),n.d(e,"b",(function(){return H}));var r=n("2Eek"),a=n.n(r),o=n("XoMD"),i=n.n(o),u=n("Jo+v"),c=n.n(u),s=n("4mXO"),l=n.n(s),f=n("pLtp"),d=n.n(f),p=n("hfKm"),v=n.n(p),h=n("yDJ3"),_=n.n(h),y=n("aWKK"),g=n("RvHS"),b=n("IyGg");function m(t,e){var n=d()(t);if(l.a){var r=l()(t);e&&(r=r.filter((function(e){return c()(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){E(t,e,n[e])})):i.a?a()(t,i()(n)):m(Object(n)).forEach((function(e){v()(t,e,c()(n,e))}))}return t}function E(t,e,n){return e in t?v()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const A="liveBlog/CARD_LOAD_PENDING",j="liveBlog/CARD_LOAD_COMPLETE",I="liveBlog/CARD_LOAD_FAILED",D="liveBlog/CARD_FETCH_PENDING",w="liveBlog/CARD_FETCH_COMPLETE",C="liveBlog/CARD_INSTANCES_FETCH_COMPLETE",L="liveBlog/CARD_FETCH_FAILED",T="liveBlog/LOAD_MORE_CARDS_PENDING",N="liveBlog/LOAD_MORE_CARDS_COMPLETE",R="liveBlog/LOAD_MORE_CARDS_FAILED",P="liveBlog/UPDATE_ACTIVE_CARDS",S=t=>Object(g.a)({endpoint:`card/${t}`,types:[A,j,I]}),k=({excludeCard:t,datePublished:e,page:n,path:r,queryLimit:a},o)=>{let i=`type:card AND taxonomy:${r}`;e&&(i+=` AND datePublished:[* TO ${e}]`),t&&(i+=` NOT id:${t}`);let u=`card/search?filters=${i}&size=${a}`;return n&&(u=`${u}&page=${n}`),Object(g.a)({endpoint:u,types:o})},$=t=>k(t,[D,w,L]),F=t=>(({excludeCard:t,page:e,articleId:n,queryLimit:r,shownOnFronts:a},o)=>{let i=`url:*${n}* AND type:card`;a&&(i+=" AND autoCuration:true"),t&&(i+=` NOT id:${t}`);let u=`card/search?filters=${i}&size=${r}`;return e&&(u=`${u}&page=${e}`),Object(g.a)({endpoint:u,types:o,additionalData:{articleId:n}})})(t,[D,C,L]),M=t=>k(t,[T,N,R]),B=Object(y.a)(P),G={size:"medium",style:"default",_override:!0,_overrideSource:t.split("/src/")[1]||null},x=t=>{const e=t,n=_()(e,"content.markupAndEmbeds",[]);return e.content.markupAndEmbeds=n.filter((t=>!!t)).map((t=>{const e=t;return e.presentation?e.presentation=O(O({},e.presentation),G):"markup"===e.type&&"p"!==e.element&&(e.presentation=G),Object(b.a)(e)})),e},z=t=>{const e=_()(t,"data.search.pagination",null);return{transformed:_()(t,"data.search.items",[]).map(x),pagination:e}},K=(t,e)=>{if(!t.length||!e.length)return!1;const n=t.findIndex((({id:t})=>e[0].id===t)),r=n<0,a=!((t,e)=>{const n=e.reduce(((t,e)=>{const n=t;return n[e.id]=!0,n}),{});return t.some((({id:t})=>n[t]))})(t,e);return!(!r||a)||(!r||!a)&&!t.slice(n).every(((t,n)=>t.id===e[n].id))},X={activeItems:[],allTotalItems:null,card:null,cardLoading:!1,error:null,fetchingLatest:!1,latestItems:[],latestDate:null,loadingMoreCards:!1,numberOfNewItems:0,pagination:null,trueTotalItems:null,pkgInstances:{}};function H(t=X,e){switch(e.type){case A:return O(O({},t),{},{cardLoading:!0});case j:{const n=_()(e,"payload.data.card",null);return O(O({},t),{},{cardLoading:!1,card:x(n),latestDate:n.date.publishedAt})}case I:return O(O({},t),{},{cardLoading:!1,error:e.payload});case D:return O(O({},t),{},{fetchingLatest:!0});case C:{const{pagination:n,transformed:r}=z(e.payload),{articleId:a}=e.payload.additionalData,o=t.pkgInstances;return O(O({},t),{},{pkgInstances:O(O({},o),{},{[a]:{fetchingLatest:!1,latestDate:_()(r,"[0].date.publishedAt"),latestItems:r,pagination:n}})})}case w:{const{pagination:n,transformed:r}=z(e.payload),a=O(O({},t),{},{fetchingLatest:!1,latestDate:_()(r,"[0].date.publishedAt"),latestItems:r,pagination:n,cardPollingComplete:!0});t.activeItems.length?_()(t,"activeItems[0].id")!==_()(r,"[0].id")&&(a.numberOfNewItems=((t,e)=>{const n=t[0]&&t[0].id,r=e[0]&&e[0].id,a=K(t,e);if(n!==r&&!a){const e=t.findIndex((({id:t})=>t===r));return e<0?t.length:e}return 0})(r,t.activeItems),a.allTotalItems=n.totalItems):a.activeItems=r,t.trueTotalItems||(a.trueTotalItems=n.totalItems);return K(r,t.activeItems)&&(a.activeItems=r),a}case L:return O(O({},t),{},{fetchingLatest:!1,error:e.payload});case T:return O(O({},t),{},{loadingMoreCards:!0});case R:return O(O({},t),{},{loadingMoreCards:!1,error:!0});case N:{const{pagination:n,transformed:r}=z(e.payload);return O(O({},t),{},{activeItems:[...t.activeItems,...r],loadingMoreCards:!1,pagination:n})}case P:return O(O({},t),{},{activeItems:[...t.latestItems.map((e=>O(O({},e),{},{newActiveItem:!(t.activeItems||[]).some((({id:t})=>t===e.id))})))],numberOfNewItems:0,trueTotalItems:t.allTotalItems});default:return t}}}).call(this,"/index.js")},"90vK":function(t,e,n){"use strict";n.d(e,"b",(function(){return I}));var r=n("2Eek"),a=n.n(r),o=n("XoMD"),i=n.n(o),u=n("Jo+v"),c=n.n(u),s=n("4mXO"),l=n.n(s),f=n("pLtp"),d=n.n(f),p=n("hfKm"),v=n.n(p),h=n("aWKK"),_=n("FFCn"),y=n("QW55"),g=n("yekw");function b(t,e){var n=d()(t);if(l.a){var r=l()(t);e&&(r=r.filter((function(e){return c()(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){O(t,e,n[e])})):i.a?a()(t,i()(n)):b(Object(n)).forEach((function(e){v()(t,e,c()(n,e))}))}return t}function O(t,e,n){return e in t?v()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const E="router/GLOBAL_LOAD_PENDING",A="router/GLOBAL_LOAD_COMPLETE",j="route/SET_STATUS_PAGE_NOT_FOUND",I=(Object(h.a)(E),Object(h.a)(A)),D=(Object(h.a)(j),{status:200,error:null,loaded:!1,navigating:!1,path:"/",domain:null,host:null});e.a=(t=D,{payload:e,type:n})=>{switch(n){case g.a:case _.a:case y.a:return m(m({},t),{},{status:e.status});case E:return m(m({},t),{},{navigating:!0});case A:return m(m({},t),{},{navigating:!1,path:e.path,domain:e.domain,status:e.status||t.status,host:e.host});case j:return m(m({},t),{},{status:404});default:return t}}},FFCn:function(t,e,n){"use strict";n.d(e,"a",(function(){return C})),n.d(e,"c",(function(){return L})),n.d(e,"b",(function(){return R}));var r=n("2Eek"),a=n.n(r),o=n("XoMD"),i=n.n(o),u=n("Jo+v"),c=n.n(u),s=n("4mXO"),l=n.n(s),f=n("pLtp"),d=n.n(f),p=n("hfKm"),v=n.n(p),h=n("p0XB"),_=n.n(h),y=n("yDJ3"),g=n.n(y),b=n("RvHS"),m=n("IEIw"),O=n("IyGg"),E=n("8P85");function A(t,e){var n=d()(t);if(l.a){var r=l()(t);e&&(r=r.filter((function(e){return c()(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){I(t,e,n[e])})):i.a?a()(t,i()(n)):A(Object(n)).forEach((function(e){v()(t,e,c()(n,e))}))}return t}function I(t,e,n){return e in t?v()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const D="article/ARTICLE_LOAD_PENDING",w="article/ARTICLE_LOAD_COMPLETE",C="article/ARTICLE_LOAD_FAILED",L=t=>Object(b.a)({endpoint:`article/${t}`,types:[D,w,C]}),T={loading:!1,content:[],error:null,isNativeAd:!1,presentation:{}};function N(t,e){const n=t,r=[];return _()(n.body)&&n.body.forEach((t=>{try{const e=Object(O.a)(t);if(!e)return;r.push(e)}catch(e){}})),j(j({},n),{},{body:r,documentTracing:Object(m.a)(n,e)})}function R(t=T,e){switch(e.type){case D:return j(j({},t),{},{loading:!0});case w:{const{data:n,extensions:r}=e.payload,a=n&&n.article;return j(j({},t),{},a?{content:[N(a,r)],loading:!1,isNativeAd:a.nativeAd,presentation:a&&a.presentation||{}}:{loading:!1})}case C:return j(j({},t),{},{loading:!1,error:e.payload});case E.a:{const n=g()(e,"payload.data.search.items[0].date.publishedAt",null);if(n&&_()(t.content)&&t.content.length){const{content:e}=t;if(e[0]&&e[0].datePublished)return e[0].datePublished=n,j(j({},t),{},{content:e})}return j({},t)}default:return t}}},IyGg:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n("2Eek"),a=n.n(r),o=n("XoMD"),i=n.n(o),u=n("Jo+v"),c=n.n(u),s=n("4mXO"),l=n.n(s),f=n("pLtp"),d=n.n(f),p=n("hfKm"),v=n.n(p),h=n("LR/J"),_=n.n(h);function y(t,e){var n=d()(t);if(l.a){var r=l()(t);e&&(r=r.filter((function(e){return c()(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){b(t,e,n[e])})):i.a?a()(t,i()(n)):y(Object(n)).forEach((function(e){v()(t,e,c()(n,e))}))}return t}function b(t,e,n){return e in t?v()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const m={youtube:t=>({type:"embeddedWidget",widget:g(g({},t),{},{name:"youtubeplus"}),presentation:{size:"medium"}}),tweet_embed:t=>({type:"embeddedWidget",widget:g(g({},t),{},{name:"tweetplus_embed"}),presentation:{size:"medium"}}),facebook_embedded_post:t=>({type:"embeddedWidget",widget:g(g({},t),{},{name:"facebookplus_embedded_post",properties:g(g({},t.properties),{},{"facebookplus-post-url":t.properties["post-url"]})}),presentation:{size:"medium"}}),instagram:t=>({type:"embeddedWidget",widget:g(g({},t),{},{name:"instagramplus"}),presentation:{size:"medium"}})};function O(t){if("embeddedWidget"!==t.type)return t;const e=m[t.widget.name]?m[t.widget.name](t.widget):t;return _()(e).reduce(((t,[e,n])=>{if(t[e]=n,"string"===typeof n)try{t[e]=decodeURIComponent(n)}catch(r){}return t}),{})}},QW55:function(t,e,n){"use strict";n.d(e,"a",(function(){return E})),n.d(e,"d",(function(){return D})),n.d(e,"c",(function(){return w}));var r=n("2Eek"),a=n.n(r),o=n("XoMD"),i=n.n(o),u=n("Jo+v"),c=n.n(u),s=n("4mXO"),l=n.n(s),f=n("pLtp"),d=n.n(f),p=n("hfKm"),v=n.n(p),h=n("RvHS"),_=n("IEIw");function y(t,e){var n=d()(t);if(l.a){var r=l()(t);e&&(r=r.filter((function(e){return c()(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){b(t,e,n[e])})):i.a?a()(t,i()(n)):y(Object(n)).forEach((function(e){v()(t,e,c()(n,e))}))}return t}function b(t,e,n){return e in t?v()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const m="recipe/LOAD_PENDING",O="recipe/LOAD_SUCCESS",E="recipe/LOAD_ERROR",A="recipe/FETCH_PENDING",j="recipe/FETCH_SUCCESS",I="recipe/FETCH_ERROR",D=t=>Object(h.a)({endpoint:`recipe/${t}`,types:[m,O,E]}),w=t=>(({courseTypePath:t,currentRecipe:e,queryLimit:n,ratingThreshold:r},a)=>{const o=`recipe/related?filters=NOT id:${e} AND (type:Recipe AND taxonomy:${t} AND rating:>=${r})&size=${n}`;return Object(h.a)({endpoint:o,types:a})})(t,[A,j,I]),C={current:null,fetchingRelated:!1,loading:!1,relatedRecipes:null};e.b=function(t=C,e){switch(e.type){case m:return g(g({},t),{},{loading:!0});case O:{const{data:{recipe:n},extensions:r}=e.payload;return g(g({},t),{},{loading:!1,current:g(g({},n),{},{documentTracing:Object(_.a)(n,r)})})}case E:return g(g({},t),{},{loading:!1,error:e.payload});case A:return g(g({},t),{},{fetchingRelated:!0});case j:{const{data:{search:{items:n}}}=e.payload;return g(g({},t),{},{fetchingRelated:!1,relatedRecipes:[...n]})}case I:return g(g({},t),{},{fetchingRelated:!1,error:e.payload});default:return t}}},rSv4:function(t,e,n){(function(t,n){var r="__lodash_hash_undefined__",a=9007199254740991,o="[object Arguments]",i="[object Array]",u="[object Boolean]",c="[object Date]",s="[object Error]",l="[object Function]",f="[object Map]",d="[object Number]",p="[object Object]",v="[object Promise]",h="[object RegExp]",_="[object Set]",y="[object String]",g="[object Symbol]",b="[object WeakMap]",m="[object ArrayBuffer]",O="[object DataView]",E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/,j=/^\./,I=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,D=/\\(\\)?/g,w=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,L={};L["[object Float32Array]"]=L["[object Float64Array]"]=L["[object Int8Array]"]=L["[object Int16Array]"]=L["[object Int32Array]"]=L["[object Uint8Array]"]=L["[object Uint8ClampedArray]"]=L["[object Uint16Array]"]=L["[object Uint32Array]"]=!0,L[o]=L[i]=L[m]=L[u]=L[O]=L[c]=L[s]=L[l]=L[f]=L[d]=L[p]=L[h]=L[_]=L[y]=L[b]=!1;var T="object"==typeof t&&t&&t.Object===Object&&t,N="object"==typeof self&&self&&self.Object===Object&&self,R=T||N||Function("return this")(),P=e&&!e.nodeType&&e,S=P&&"object"==typeof n&&n&&!n.nodeType&&n,k=S&&S.exports===P&&T.process,$=function(){try{return k&&k.binding("util")}catch(t){}}(),F=$&&$.isTypedArray;function M(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function B(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function G(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function x(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var z,K,X=Array.prototype,H=Function.prototype,J=Object.prototype,W=R["__core-js_shared__"],U=function(){var t=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),V=H.toString,q=J.hasOwnProperty,Q=J.toString,Y=RegExp("^"+V.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Z=R.Symbol,tt=R.Uint8Array,et=J.propertyIsEnumerable,nt=X.splice,rt=(z=Object.keys,K=Object,function(t){return z(K(t))}),at=Bt(R,"DataView"),ot=Bt(R,"Map"),it=Bt(R,"Promise"),ut=Bt(R,"Set"),ct=Bt(R,"WeakMap"),st=Bt(Object,"create"),lt=Wt(at),ft=Wt(ot),dt=Wt(it),pt=Wt(ut),vt=Wt(ct),ht=Z?Z.prototype:void 0,_t=ht?ht.valueOf:void 0,yt=ht?ht.toString:void 0;function gt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function bt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function mt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ot(t){var e=-1,n=t?t.length:0;for(this.__data__=new mt;++e<n;)this.add(t[e])}function Et(t){this.__data__=new bt(t)}function At(t,e){var n=Qt(t)||qt(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,a=!!r;for(var o in t)!e&&!q.call(t,o)||a&&("length"==o||xt(o,r))||n.push(o);return n}function jt(t,e){for(var n=t.length;n--;)if(Vt(t[n][0],e))return n;return-1}gt.prototype.clear=function(){this.__data__=st?st(null):{}},gt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},gt.prototype.get=function(t){var e=this.__data__;if(st){var n=e[t];return n===r?void 0:n}return q.call(e,t)?e[t]:void 0},gt.prototype.has=function(t){var e=this.__data__;return st?void 0!==e[t]:q.call(e,t)},gt.prototype.set=function(t,e){return this.__data__[t]=st&&void 0===e?r:e,this},bt.prototype.clear=function(){this.__data__=[]},bt.prototype.delete=function(t){var e=this.__data__,n=jt(e,t);return!(n<0)&&(n==e.length-1?e.pop():nt.call(e,n,1),!0)},bt.prototype.get=function(t){var e=this.__data__,n=jt(e,t);return n<0?void 0:e[n][1]},bt.prototype.has=function(t){return jt(this.__data__,t)>-1},bt.prototype.set=function(t,e){var n=this.__data__,r=jt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},mt.prototype.clear=function(){this.__data__={hash:new gt,map:new(ot||bt),string:new gt}},mt.prototype.delete=function(t){return Mt(this,t).delete(t)},mt.prototype.get=function(t){return Mt(this,t).get(t)},mt.prototype.has=function(t){return Mt(this,t).has(t)},mt.prototype.set=function(t,e){return Mt(this,t).set(t,e),this},Ot.prototype.add=Ot.prototype.push=function(t){return this.__data__.set(t,r),this},Ot.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.clear=function(){this.__data__=new bt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var n=this.__data__;if(n instanceof bt){var r=n.__data__;if(!ot||r.length<199)return r.push([t,e]),this;n=this.__data__=new mt(r)}return n.set(t,e),this};var It,Dt,wt=(It=function(t,e){return t&&Ct(t,e,oe)},function(t,e){if(null==t)return t;if(!Yt(t))return It(t,e);for(var n=t.length,r=Dt?n:-1,a=Object(t);(Dt?r--:++r<n)&&!1!==e(a[r],r,a););return t}),Ct=function(t){return function(e,n,r){for(var a=-1,o=Object(e),i=r(e),u=i.length;u--;){var c=i[t?u:++a];if(!1===n(o[c],c,o))break}return e}}();function Lt(t,e){for(var n=0,r=(e=zt(e,t)?[e]:$t(e)).length;null!=t&&n<r;)t=t[Jt(e[n++])];return n&&n==r?t:void 0}function Tt(t,e){return null!=t&&e in Object(t)}function Nt(t,e,n,r,a){return t===e||(null==t||null==e||!ee(t)&&!ne(e)?t!==t&&e!==e:function(t,e,n,r,a,l){var v=Qt(t),b=Qt(e),E=i,A=i;v||(E=(E=Gt(t))==o?p:E);b||(A=(A=Gt(e))==o?p:A);var j=E==p&&!B(t),I=A==p&&!B(e),D=E==A;if(D&&!j)return l||(l=new Et),v||ae(t)?Ft(t,e,n,r,a,l):function(t,e,n,r,a,o,i){switch(n){case O:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case m:return!(t.byteLength!=e.byteLength||!r(new tt(t),new tt(e)));case u:case c:case d:return Vt(+t,+e);case s:return t.name==e.name&&t.message==e.message;case h:case y:return t==e+"";case f:var l=G;case _:var p=2&o;if(l||(l=x),t.size!=e.size&&!p)return!1;var v=i.get(t);if(v)return v==e;o|=1,i.set(t,e);var b=Ft(l(t),l(e),r,a,o,i);return i.delete(t),b;case g:if(_t)return _t.call(t)==_t.call(e)}return!1}(t,e,E,n,r,a,l);if(!(2&a)){var w=j&&q.call(t,"__wrapped__"),C=I&&q.call(e,"__wrapped__");if(w||C){var L=w?t.value():t,T=C?e.value():e;return l||(l=new Et),n(L,T,r,a,l)}}if(!D)return!1;return l||(l=new Et),function(t,e,n,r,a,o){var i=2&a,u=oe(t),c=u.length,s=oe(e).length;if(c!=s&&!i)return!1;var l=c;for(;l--;){var f=u[l];if(!(i?f in e:q.call(e,f)))return!1}var d=o.get(t);if(d&&o.get(e))return d==e;var p=!0;o.set(t,e),o.set(e,t);var v=i;for(;++l<c;){var h=t[f=u[l]],_=e[f];if(r)var y=i?r(_,h,f,e,t,o):r(h,_,f,t,e,o);if(!(void 0===y?h===_||n(h,_,r,a,o):y)){p=!1;break}v||(v="constructor"==f)}if(p&&!v){var g=t.constructor,b=e.constructor;g==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(t),o.delete(e),p}(t,e,n,r,a,l)}(t,e,Nt,n,r,a))}function Rt(t){return!(!ee(t)||function(t){return!!U&&U in t}(t))&&(Zt(t)||B(t)?Y:w).test(Wt(t))}function Pt(t){return"function"==typeof t?t:null==t?ie:"object"==typeof t?Qt(t)?function(t,e){if(zt(t)&&Kt(e))return Xt(Jt(t),e);return function(n){var r=function(t,e,n){var r=null==t?void 0:Lt(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?function(t,e){return null!=t&&function(t,e,n){e=zt(e,t)?[e]:$t(e);var r,a=-1,o=e.length;for(;++a<o;){var i=Jt(e[a]);if(!(r=null!=t&&n(t,i)))break;t=t[i]}if(r)return r;return!!(o=t?t.length:0)&&te(o)&&xt(i,o)&&(Qt(t)||qt(t))}(t,e,Tt)}(n,t):Nt(e,r,void 0,3)}}(t[0],t[1]):function(t){var e=function(t){var e=oe(t),n=e.length;for(;n--;){var r=e[n],a=t[r];e[n]=[r,a,Kt(a)]}return e}(t);if(1==e.length&&e[0][2])return Xt(e[0][0],e[0][1]);return function(n){return n===t||function(t,e,n,r){var a=n.length,o=a,i=!r;if(null==t)return!o;for(t=Object(t);a--;){var u=n[a];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++a<o;){var c=(u=n[a])[0],s=t[c],l=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var f=new Et;if(r)var d=r(s,l,c,t,e,f);if(!(void 0===d?Nt(l,s,r,3,f):d))return!1}}return!0}(n,t,e)}}(t):function(t){return zt(t)?(e=Jt(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return Lt(e,t)}}(t);var e}(t)}function St(t){if(!function(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||J;return t===n}(t))return rt(t);var e=[];for(var n in Object(t))q.call(t,n)&&"constructor"!=n&&e.push(n);return e}function kt(t,e){var n;return wt(t,(function(t,r,a){return!(n=e(t,r,a))})),!!n}function $t(t){return Qt(t)?t:Ht(t)}function Ft(t,e,n,r,a,o){var i=2&a,u=t.length,c=e.length;if(u!=c&&!(i&&c>u))return!1;var s=o.get(t);if(s&&o.get(e))return s==e;var l=-1,f=!0,d=1&a?new Ot:void 0;for(o.set(t,e),o.set(e,t);++l<u;){var p=t[l],v=e[l];if(r)var h=i?r(v,p,l,e,t,o):r(p,v,l,t,e,o);if(void 0!==h){if(h)continue;f=!1;break}if(d){if(!M(e,(function(t,e){if(!d.has(e)&&(p===t||n(p,t,r,a,o)))return d.add(e)}))){f=!1;break}}else if(p!==v&&!n(p,v,r,a,o)){f=!1;break}}return o.delete(t),o.delete(e),f}function Mt(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function Bt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Rt(n)?n:void 0}var Gt=function(t){return Q.call(t)};function xt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||C.test(t))&&t>-1&&t%1==0&&t<e}function zt(t,e){if(Qt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!re(t))||(A.test(t)||!E.test(t)||null!=e&&t in Object(e))}function Kt(t){return t===t&&!ee(t)}function Xt(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(at&&Gt(new at(new ArrayBuffer(1)))!=O||ot&&Gt(new ot)!=f||it&&Gt(it.resolve())!=v||ut&&Gt(new ut)!=_||ct&&Gt(new ct)!=b)&&(Gt=function(t){var e=Q.call(t),n=e==p?t.constructor:void 0,r=n?Wt(n):void 0;if(r)switch(r){case lt:return O;case ft:return f;case dt:return v;case pt:return _;case vt:return b}return e});var Ht=Ut((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(re(t))return yt?yt.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var n=[];return j.test(t)&&n.push(""),t.replace(I,(function(t,e,r,a){n.push(r?a.replace(D,"$1"):e||t)})),n}));function Jt(t){if("string"==typeof t||re(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Wt(t){if(null!=t){try{return V.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Ut(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=t.apply(this,r);return n.cache=o.set(a,i),i};return n.cache=new(Ut.Cache||mt),n}function Vt(t,e){return t===e||t!==t&&e!==e}function qt(t){return function(t){return ne(t)&&Yt(t)}(t)&&q.call(t,"callee")&&(!et.call(t,"callee")||Q.call(t)==o)}Ut.Cache=mt;var Qt=Array.isArray;function Yt(t){return null!=t&&te(t.length)&&!Zt(t)}function Zt(t){var e=ee(t)?Q.call(t):"";return e==l||"[object GeneratorFunction]"==e}function te(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function ee(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ne(t){return!!t&&"object"==typeof t}function re(t){return"symbol"==typeof t||ne(t)&&Q.call(t)==g}var ae=F?function(t){return function(e){return t(e)}}(F):function(t){return ne(t)&&te(t.length)&&!!L[Q.call(t)]};function oe(t){return Yt(t)?At(t):St(t)}function ie(t){return t}n.exports=function(t,e,n){var r=Qt(t)?M:kt;return n&&function(t,e,n){if(!ee(n))return!1;var r=typeof e;return!!("number"==r?Yt(n)&&xt(e,n.length):"string"==r&&e in n)&&Vt(n[e],t)}(t,e,n)&&(e=void 0),r(t,Pt(e))}}).call(this,n("ntbh"),n("LY0y")(t))},yekw:function(t,e,n){"use strict";n.d(e,"a",(function(){return I})),n.d(e,"d",(function(){return P})),n.d(e,"e",(function(){return S})),n.d(e,"f",(function(){return k})),n.d(e,"g",(function(){return $})),n.d(e,"c",(function(){return F})),n.d(e,"b",(function(){return B}));var r=n("2Eek"),a=n.n(r),o=n("XoMD"),i=n.n(o),u=n("Jo+v"),c=n.n(u),s=n("4mXO"),l=n.n(s),f=n("pLtp"),d=n.n(f),p=n("hfKm"),v=n.n(p),h=n("aWKK"),_=n("RvHS"),y=n("7jM5"),g=n("rSv4"),b=n.n(g);function m(t,e){var n=d()(t);if(l.a){var r=l()(t);e&&(r=r.filter((function(e){return c()(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){E(t,e,n[e])})):i.a?a()(t,i()(n)):m(Object(n)).forEach((function(e){v()(t,e,c()(n,e))}))}return t}function E(t,e,n){return e in t?v()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const A="front/FRONT_LOAD_PENDING",j="front/FRONT_LOAD_COMPLETE",I="front/FRONT_LOAD_FAILED",D="front/SET_DRAFT_ID",w="front/SET_PAID_CONTENT_POSITION",C="front/SET_HAS_NO_PAID_CONTENT",L=Object(h.a)(I)({status:404}),T=/^[/a-zA-Z0-9_-]+$/,N=t=>t(L);function R(t){return t&&!T.test(t)?N:null}const P=(t,e)=>Object(_.a)({endpoint:`curation/slug/${t}${e?`/${e}`:""}`,types:[A,j,I],failedValidationCallback:R(e)}),S=t=>Object(_.a)({endpoint:`curation/draft/${t}`,types:[A,j,I]}),k=t=>({type:D,payload:{draftId:t}}),$=t=>({type:w,payload:{paidContentPosition:t}}),F=()=>({type:C}),M={loading:!1,draftId:null,curation:{},error:null,paidContentPosition:null,hasNoPaidContent:!1,isEmbedProgramGuide:!1};function B(t=M,e){switch(e.type){case A:return O(O({},t),{},{loading:!0});case j:{const{curation:n}=e.payload.data,r=b()(n.layouts,{packages:[{type:"embed",items:[{computedValues:{url:"https://master.d2gnmmimbvzgnk.amplifyapp.com/?vertical=true"}}]}]});return O(O({},t),{},{curation:n,loading:!1,stackCommerceFront:Object(y.a)(n,"StackCommerce"),isEmbedProgramGuide:r})}case D:return O(O({},t),{},{draftId:e.payload.draftId});case I:return O(O({},t),{},{loading:!1,error:e.payload});case w:return null!==t.paidContentPosition?t:O(O({},t),{},{paidContentPosition:e.payload.paidContentPosition});case C:return O(O({},t),{},{hasNoPaidContent:!0});default:return t}}}}]);
//# sourceMappingURL=50aff31e78fc8f81fb44fb6eb036cb32b4eabe44.721912d7cb48dd78a3a8.js.map