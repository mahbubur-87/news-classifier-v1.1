(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[27],{1227:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(860),s=n(1228),l=n.n(s),u=function(e){var t=e.slotMethod,n=e.dataId,a=e.target;return r.a.createElement(c.a,{id:n,slot:"nativethreeup",clsName:l.a.container,slotMethod:t,dataId:n,target:a})};u.propTypes={slotMethod:o.a.string,dataId:o.a.oneOfType([o.a.string,o.a.number]),target:o.a.string},u.defaultProps={slotMethod:"insertComponent",dataId:0,target:""},t.a=u},1228:function(e,t,n){e.exports={electricblue:"#1ff1c8",orange:"#f87121",container:"NativeThreeUp-container"}},1229:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(860),s=n(1230),l=n.n(s),u=function(e){var t=e.slotMethod,n=e.dataId,a=e.target;return r.a.createElement("div",{"data-module":"nativethreeupstackv2"},r.a.createElement(c.a,{id:n,slot:"nativethreeupstackv2",clsName:l.a.container,slotMethod:t,dataId:n,target:a}))};u.propTypes={slotMethod:o.a.string,dataId:o.a.oneOfType([o.a.string,o.a.number]),target:o.a.string},u.defaultProps={slotMethod:"insertComponent",dataId:0,target:""},t.a=u},1230:function(e,t,n){e.exports={electricblue:"#1ff1c8",orange:"#f87121",container:"NativeThreeUpStackv2-container"}},1231:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(860),s=n(1232),l=n.n(s),u=function(e){var t=e.slotMethod,n=e.dataId,a=e.target;return r.a.createElement(c.a,{id:n,slot:"nativeultradense",clsName:l.a.container,slotMethod:t,dataId:n,target:a})};u.propTypes={slotMethod:o.a.string,dataId:o.a.oneOfType([o.a.string,o.a.number]),target:o.a.string},u.defaultProps={slotMethod:"cloneAd",dataId:0,target:""},t.a=u},1232:function(e,t,n){e.exports={electricblue:"#1ff1c8",orange:"#f87121",container:"NativeUltraDense-container"}},858:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return u})),n.d(t,"g",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"o",(function(){return v})),n.d(t,"p",(function(){return b})),n.d(t,"f",(function(){return T})),n.d(t,"n",(function(){return C})),n.d(t,"h",(function(){return E})),n.d(t,"q",(function(){return k})),n.d(t,"l",(function(){return w})),n.d(t,"d",(function(){return N})),n.d(t,"m",(function(){return S})),n.d(t,"r",(function(){return D})),n.d(t,"c",(function(){return M})),n.d(t,"b",(function(){return P}));var a,r,i=n(9),o=n.n(i),c=(r=[{threshold:540*(a=864e5),modifier:365*a,render:function(e){return"".concat(e," years ago")}},{threshold:320*a,render:function(){return"a year ago"}},{threshold:45*a,modifier:30*a,render:function(e){return"".concat(e," months ago")}},{threshold:26*a,render:function(){return"a month ago"}},{threshold:1296e5,modifier:864e5,render:function(e){return"".concat(e," days ago")}},{threshold:792e5,render:function(){return"a day ago"}},{threshold:54e5,modifier:36e5,render:function(e){return"".concat(e," hours ago")}},{threshold:27e5,render:function(){return"an hour ago"}},{threshold:9e4,modifier:6e4,render:function(e){return"".concat(e," minutes ago")}},{threshold:46e3,render:function(){return"a minute ago"}},{threshold:0,render:function(){return"a few seconds ago"}}],function(e){var t=Math.round(new Date-e),n=r.find((function(e){var n=e.threshold;return t>=n})),a=n.render,i=n.modifier;return a(Math.round(t/i))}),s=" • ";function l(e){if(null===e)return!1;var t=new Date(e);return"Invalid Date"!==String(t)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!l(e))return"";var t=Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"numeric"}).format(new Date(e)),n=t.split("/"),a=o()(n,3),r=a[0],i=a[1],c=a[2];return"".concat(c,"-").concat(r,"-").concat(i)}var d=function(e){var t=e;if(!t||!l(e))return null;var n=/(.*) (GMT)/.exec(t);return n&&(t=new Date("".concat(n[1],"Z"))),new Date(t)},f=function(e){if(e&&"string"==typeof e){var t=e.split("T");if(t[1]){var n=t[0],a=t[1];if((a.match(/\+/g)||a.match(/-/g)||[]).length>0)return function(e,t){var n=t.split(/\+|-/)[1]||"";return n.length>2?":"===n.charAt(n.length-3)?"".concat(e,"T").concat(t):"".concat(e,"T").concat(t.slice(0,-2),":").concat(t.slice(-2)):"".concat(e,"T").concat(t,":00")}(n,a)}}return e};function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Intl.DateTimeFormat("en-US",{timeZone:"UTC",hour:"numeric",hour12:!1}).formatToParts(new Date(e)),n=Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",hour:"numeric",hour12:!1}).formatToParts(new Date(e)),a=t[0].value-n[0].value;return a<0&&(a+=24),5===a?"EST":4===a?"EDT":"ET"}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{var t=f(e);if(!l(t))return"";var n=Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date(t)),a=m(t),r=n.replace(/,/g,"").split(" "),i=o()(r,6),c=i[0],u=i[1],d=i[2],p=i[3],h=i[4],v=i[5];return"".concat(c,", ").concat(u," ").concat(d," ").concat(p).concat(s).concat(h," ").concat(v," ").concat(a)}catch(e){return""}}function h(e){if(null===e)return null;var t=new Date(e);if(!l(t))return null;var n="0".concat(t.getMonth()+1).slice(-2),a="0".concat(t.getDate()).slice(-2),r=t.getFullYear(),i="0".concat(t.getHours()).slice(-2),o="0".concat(t.getMinutes()).slice(-2),c="0".concat(t.getSeconds()).slice(-2);return"".concat(r).concat(n).concat(a,"T").concat(i).concat(o).concat(c)}function v(e){var t=d(e);return l(t)?t.getTime():0}function g(e){var t=d(e);return l(t)?p(t):e}function y(e){try{var t=d(e);return l(t)?Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"long",day:"numeric"}).format(new Date(t)):e}catch(e){return""}}function b(e){var t=d(e);return l(t)&&t?c(t):""}function T(e){return e&&"string"==typeof e?e.replace("+0000",".000Z"):e}function C(e){return l(d(e))?g(e):g(T(e))}function E(e){if(!e)return"";var t,n=Date.now()-v(e);if(6e4>n)return"Moments Ago";if(36e5>n)return"".concat(Math.round(n/6e4)," Min Ago");if(864e5>n){var a=Math.round(n/36e5),r=1===a?"Hour":"Hours";return"".concat(a," ").concat(r," Ago")}return n>864e5?l(d(t=e))?y(t):y(T(t)):""}function k(e){if(!e)return"";var t=f(e),n=Date.now()-v(t);if(6e4>n)return"Moments Ago";if(36e5>n)return"".concat(Math.round(n/6e4)," Min Ago");if(216e5>n){var a=Math.round(n/36e5);return 1===a?"An Hour Ago":"".concat(a," Hours Ago")}return null}var w=function(e){var t=(Date.now()-new Date(e).getTime())/1e3/60;return Math.floor(t)},N=function(e){return 0===e?12:e>12?e-12:e},S=function(e){return e>11?"pm":"am"},D={0:"Sun",1:"Mon",2:"Tues",3:"Wed",4:"Thurs",5:"Fri",6:"Sat"},M={0:"Jan",1:"Feb",2:"March",3:"Apr",4:"May",5:"June",6:"July",7:"Aug",8:"Sept",9:"Oct",10:"Nov",11:"Dec"},P={1:"st",2:"nd",3:"rd"}},862:function(e,t,n){"use strict";var a={isMobile:function(){return"undefined"!=typeof navigator&&(!/ipad|silk/i.test(navigator.userAgent)&&!!/mobi|phone/i.test(navigator.userAgent))},isTablet:function(){return"undefined"!=typeof navigator&&!(this.isMobile()||!(/android|ios|ipad|silk/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1))},deviceDetectType:function(){return this.isMobile()?"mobile":this.isTablet()?"tablet":"desktop"},getMobileOperatingSystem:function(){if("undefined"==typeof navigator)return null;var e=navigator.userAgent||navigator.vendor||window.opera;return/crios/i.test(e)?"iOS Chrome":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":null},isBrowserSupportsHLS:function(){return"undefined"!=typeof document&&document.createElement("video").canPlayType("application/vnd.apple.mpegURL")},isChrome66:function(){if("undefined"==typeof navigator)return!1;var e=navigator.userAgent,t=e.match(/chrome/i);if(null!=t&&"chrome"===t[0].toLowerCase()){var n=t.index,a=e.substring(n+7,n+9);if(!isNaN(a)&&a>=66)return!0}return!1},isCNBCReferrerWithChrome66:function(e){return"undefined"!=typeof document&&(!this.isChrome66()||(!!e||!(document.referrer&&!document.referrer.includes("cnbc.com")||!document.referrer)))},isChrome:function(){return"undefined"!=typeof navigator&&navigator.userAgent.indexOf("Chrome")>-1},isFirefox:function(){return"undefined"!=typeof navigator&&navigator.userAgent.indexOf("Firefox")>-1},isEdge:function(){return"undefined"!=typeof navigator&&"Edge"===navigator.vendor},isSafari:function(){return"undefined"!=typeof navigator&&"Apple Computer, Inc."===navigator.vendor},isDesktopSafari:function(){return this.isSafari()&&"desktop"===this.deviceDetectType()},isTouch:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},isOpera:function(){return"undefined"!=typeof navigator&&navigator.userAgent.indexOf("OPR")>-1},isSupportedBrowser:function(){return!this.isOpera()&&(!(!this.isChrome()&&!this.isSafari())||!(!this.isFirefox()&&!this.isEdge()||this.isMobile()||this.isTablet()))}};t.a=a},863:function(e,t,n){e.exports=n.p+"7fd26026fd34587b562550a63aea7aae.jpg"},881:function(e,t,n){"use strict";var a=n(28),r=n.n(a),i=n(0),o=n.n(i),c=n(1),s=n.n(c),l=n(858),u=function(e){if(e){var t=e.contentClassification;return Array.isArray(t)&&(t.includes("watchLive")||t.includes("watchLivePro"))}return!1};t.a=function(e){var t=function(t){var n=t.asset,a=t.cardData,i=(Object.keys(a).length>0?a:n).type,c=void 0===i?"":i,s=function(e){var t=e.asset,n=e.cardData;return"live_story"===e.type||"live_story"===n.type||[t,n,e].some(u)}(t),d=a.dateLastPublishedSixHr||n.dateLastPublishedSixHr,f=a.datePublished||n.datePublished,m=Object(l.f)(f);if(s&&"webresource"!==c){var p=n.coverageEndDate||a.coverageEndDate;if(p){var h=new Date(Object(l.f)(p));s=new Date<=h}else s=!!(d||Object(l.l)(m)/60<6)}return o.a.createElement(e,r()({},t,{showLivePill:s}))};return t.propTypes={asset:s.a.object,cardData:s.a.object,type:s.a.string,contentClassification:s.a.array},t.defaultProps={cardData:{},asset:{},type:"",contentClassification:[]},t}},889:function(e,t,n){"use strict";var a=n(36),r=n.n(a),i=n(37),o=n.n(i),c=n(123),s=n.n(c),l=n(68),u=n.n(l),d=n(69),f=n.n(d),m=n(49),p=n.n(m),h=n(2),v=n.n(h),g=n(0),y=n.n(g),b=n(1),T=n.n(b),C=n(894),E=n.n(C);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var w=function(e){u()(n,e);var t=k(n);function n(){var e;return r()(this,n),(e=t.call(this)).update=e.update.bind(s()(e)),e.containerRef=y.a.createRef(),"undefined"!=typeof window&&(window.removeEventListener("resize",e.update,!1),window.removeEventListener("load",e.update,!1)),e}return o()(n,[{key:"componentDidUpdate",value:function(){this.init()}},{key:"componentDidMount",value:function(){"undefined"!=typeof window&&(window.addEventListener("resize",this.update,!1),window.addEventListener("load",this.update,!1)),this.init()}},{key:"update",value:function(){this.forceUpdate()}},{key:"init",value:function(){var e=this,t=this.containerRef.current;if(t&&this.props.clamp){var n={};["animate","clamp","truncationChar","useNativeClamp"].forEach((function(t){var a=e.props[t];a&&(n[t]=a)})),"function"==typeof this.props.clampJs&&this.props.clampJs(t,n)}}},{key:"render",value:function(){return y.a.createElement(this.props.tagName,{ref:this.containerRef,className:this.props.className},this.props.children)}}]),n}(y.a.Component);v()(w,"propTypes",{children:T.a.node,clamp:T.a.oneOfType([T.a.string,T.a.number,T.a.bool]).isRequired,truncationChar:T.a.string,useNativeClamp:T.a.bool,className:T.a.string,tagName:T.a.string,clampJs:T.a.func}),v()(w,"defaultProps",{children:null,truncationChar:"…",useNativeClamp:!0,tagName:"div",className:void 0,clampJs:E.a}),t.a=w},890:function(e,t,n){e.exports=n.p+"23dcd2f4e1897a45eaaaa7834b35fc48.png"},894:function(e,t,n){var a,r,i;
/*!
 * Clamp.js 0.11.5
 *
 * Now Maintained by Josh English http://joshengish.com
 * Joseph Schmitt http://joe.sh
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */r=[],void 0===(i="function"==typeof(a=function(){return function(e,t){t=t||{};var n,a=window,r={clamp:t.clamp||2,useNativeClamp:void 0===t.useNativeClamp||t.useNativeClamp,splitOnChars:t.splitOnChars||[".","-","–","—"," "],animate:t.animate||!1,truncationChar:t.truncationChar||"…",truncationHTML:t.truncationHTML},i=e.style,o=e.innerHTML,c=void 0!==e.style.webkitLineClamp,s=r.clamp,l=s.indexOf&&(s.indexOf("px")>-1||s.indexOf("em")>-1);function u(e,t){return a.getComputedStyle||(a.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"==t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,(function(){return arguments[2].toUpperCase()}))),e.currentStyle&&e.currentStyle[t]?e.currentStyle[t]:null},this}),a.getComputedStyle(e,null).getPropertyValue(t)}function d(t){var n=t||e.clientHeight,a=f(e);return Math.max(Math.floor(n/a),0)}function f(e){var t=u(e,"line-height");return"normal"==t&&(t=1.187*parseInt(u(e,"font-size"))),Math.ceil(parseFloat(t))}r.truncationHTML&&((n=document.createElement("span")).innerHTML=r.truncationHTML);var m,p,h,v,g=r.splitOnChars.slice(0),y=g[0];function b(t){if(t.lastChild)return t.lastChild.childNodes&&t.lastChild.childNodes.length>0?b(Array.prototype.slice.call(t.childNodes).pop()):t.lastChild&&t.lastChild.nodeValue&&""!==t.lastChild.nodeValue&&t.lastChild.nodeValue!=r.truncationChar?t.lastChild:(t.lastChild.parentNode.removeChild(t.lastChild),b(e))}function T(e,t){e.nodeValue=t+r.truncationChar}if("auto"==s?s=d():l&&(s=d(parseInt(s))),c&&r.useNativeClamp)i.overflow="hidden",i.textOverflow="ellipsis",i.webkitBoxOrient="vertical",i.display="-webkit-box",i.webkitLineClamp=s,l&&(i.height=r.clamp+"px");else{var C=(v=s,f(e)*v);C<e.clientHeight&&(h=function t(a,i){if(a&&i){var o=a.nodeValue.replace(r.truncationChar,"");if(m||(y=g.length>0?g.shift():"",m=o.split(y)),m.length>1?(p=m.pop(),T(a,m.join(y))):m=null,n&&(a.nodeValue=a.nodeValue.replace(r.truncationChar,""),e.innerHTML=a.nodeValue+" "+n.innerHTML+r.truncationChar),m){if(e.clientHeight<=i){if(!(g.length>=0&&""!==y))return e.innerHTML;T(a,m.join(y)+y+p),m=null}}else""===y&&(T(a,""),a=b(e),g=r.splitOnChars.slice(0),y=g[0],m=null,p=null);if(!r.animate)return t(a,i);setTimeout((function(){t(a,i)}),!0===r.animate?10:r.animate)}}(b(e),C))}return{original:o,clamped:h}}})?a.apply(t,r):a)||(e.exports=i)},895:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Card",(function(){return re}));var a=n(28),r=n.n(a),i=n(36),o=n.n(i),c=n(37),s=n.n(c),l=n(123),u=n.n(l),d=n(68),f=n.n(d),m=n(69),p=n.n(m),h=n(49),v=n.n(h),g=n(2),y=n.n(g),b=n(0),T=n.n(b),C=n(1),E=n.n(C),k=n(46),w=n(889),N=n(495),S=n(1227),D=n(1229),M=n(1231),P=n(864),I=n(877),L=n(876),O=n(881),A=n(30),x=n(221),H=n(35),R=n(862),U=n(23),j=n(855),B=n(857),V=n(861),q=n(890),F=n.n(q),_=n(863),z=n.n(_),J=n(964),G=n.n(J),Z=n(310),Y=n(1033),K=n.n(Y),W=n(947),Q;function X(e){var t=$();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p()(this,n)}}function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ee=U.b,te={};te[U.a]=Object(j.a)({chunkName:"components/shared/Card/styles.acorns.scss",requireAsync:function(){return n.e(30).then(n.t.bind(null,939,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 939}}),te[U.b]=Object(j.a)({chunkName:"components/shared/Card/styles.cnbc.scss",requireAsync:function(){return n.e(36).then(n.t.bind(null,940,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 940}}),te[U.d]=Object(j.a)({chunkName:"components/shared/Card/styles.makeit.scss",requireAsync:function(){return n.e(32).then(n.t.bind(null,941,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 941}}),te[U.e]=Object(j.a)({chunkName:"components/shared/Card/styles.select.scss",requireAsync:function(){return n.e(34).then(n.t.bind(null,942,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 942}});var ne=(Q={},y()(Q,U.a,F.a),y()(Q,U.b,z.a),y()(Q,U.e,G.a),y()(Q,"default",z.a),Q),ae=function(e,t,n){return"".concat(e.titleAndFooter," ").concat(n&&e.hoverState||"").trim()},re=function(e){f()(n,e);var t=X(n);function n(){var e;o()(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),y()(u()(e),"state",{isHovered:!1}),y()(u()(e),"componentDidMount",(function(){A.a.on("breakpointChange",e.handleBreakpointChange),x.a.monitorBreakpoints()})),y()(u()(e),"componentWillUnmount",(function(){A.a.remove("breakpointChange",e.handleBreakpointChange)})),y()(u()(e),"handleBreakpointChange",(function(){e.forceUpdate()})),y()(u()(e),"getTruncationRules",(function(){var t=e.props.cardType,n=(W.a[t]||{}).truncationRules;if(!n)return null;var a=n[x.a.current()];return a||n.default})),y()(u()(e),"getImageSizeRequestString",(function(){var t=e.getImageSizeDimensions()||{},n=t.width,a=t.height;return"w=".concat(n||"600","&h=").concat(a||"300","&vtcrop=y")})),y()(u()(e),"getImageSizeDimensions",(function(){var t=e.props,n=t.cardType,a=t.brand,r=(W.a[n]||{}).thumbnailSizes,i=void 0===r?{}:r;if(!i)return null;(i[a]||i.defaultSizes)&&(i=i[a]||i.defaultSizes);var o=i["medium_desktop"===x.a.current()?"small_desktop":x.a.current()];return o||null})),e}return s()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.isLive,i=t.assetId,o=t.type,c=t.isPro,s=t.isPackage,l=t.packageTitle,u=t.image,d=t.byline,f=t.bylineUrl,m=t.timestamp,p=t.formattedTimeStamp,h=t.cardType,v=t.mediaType,g=t.playlistCount,y=t.videoTime,b=t.totalTime,C=t.sponsoredLogo,E=t.sponsorLink,O=t.customCardStyles,A=t.dark,x=t.description,j=t.eyebrow,q=t.eyebrowUrl,F=t.url,_=t.isSlideshow,z=t.dataId,J=t.inlineVideoPlayback,G=t.brand,Y=t.cardBrand,Q=t.targetBlank,X=t.hero,$=t.layoutType,ee=t.isLastCard,te=t.shareThrough,re=t.imageDense,ie=t.videoIsPlayingOrPaused,oe=t.displayThumbnailPreviews,ce=t.hideByline,se=t.styles,le=t.showLivePill,ue=t.showProVideoGate,de=ne[G]||ne.default,fe=h,me=function(){var e=s?se.timePackage:se.time,t=se.cardFooter,n=se.byline;return s?n=se.bylinePackage:h.includes("rectangle-to-left-square-media")&&(t=se.threeUpCardFooterStyle,n=se.threeUpBylineStyle),ce?T.a.createElement("div",{className:"".concat(t," ").concat(c?se.bylinePosition:"")},""!==p&&T.a.createElement("span",{className:e},p)):fe.includes("title-only")&&!fe.includes("four-up")&&!fe.includes("three-up-stack")&&ce||!d&&!p?null:T.a.createElement("div",{className:"".concat(t," ").concat(c?se.bylinePosition:"")},d&&(f&&f.length>4?T.a.createElement("span",{className:n},T.a.createElement(k.b,{to:f},d)):T.a.createElement("span",{className:n},d)),""!==p&&T.a.createElement("span",{className:e},p))},pe=T.a.createElement("span",{className:se.live},T.a.createElement("img",{src:K.a,alt:"live-indicator"})),he=T.a.createElement("div",{className:se.sponsoredLogo},T.a.createElement("span",null,"Paid post for"),T.a.createElement(k.b,{to:E},T.a.createElement("img",{src:C,alt:"sponsored-logo"}))),ve={video:["VIDEO",function(e){if("string"!=typeof e){var t=e||0;return Object(V.b)(t)}return e}(y)],playlist:["PLAYLIST","".concat(g," VIDEOS")],"full episode":["FULL EPISODE",void 0],"":[null,null]},ge=function(){var t,a=m?"".concat(n," | ").concat(m):null,r=e.getTruncationRules()?T.a.createElement(w.a,{clamp:1},j):j;t=!e.getTruncationRules()||(R.a.isSafari()||R.a.isFirefox())&&le?T.a.createElement("div",{className:se[Object(B.f)("title-html-".concat(h))]},le&&T.a.createElement(I.a,{styles:se}),c&&T.a.createElement(L.a,{styles:se}),a||n):T.a.createElement(w.a,{clamp:e.getTruncationRules(),className:se[Object(B.f)("title-html-".concat(h))]},le&&T.a.createElement(I.a,{styles:se}),c&&T.a.createElement(L.a,{styles:se}),a||n);var i=ae(se,G,e.state.isHovered);return T.a.createElement("div",{className:i},T.a.createElement("div",null,j&&!c&&T.a.createElement("div",{className:se.eyebrowContainer},T.a.createElement(k.b,{to:q,className:se.eyebrow},r)),T.a.createElement("div",{onMouseEnter:function(){return e.setState({isHovered:!0})},onMouseLeave:function(){return e.setState({isHovered:!1})},className:"".concat(c?se.pro:se.titleContainer)},T.a.createElement(k.b,{to:F,assetType:o,target:Q?"_blank":"",className:A?se.titleDark:se.title},t))),x&&h.includes("description")&&T.a.createElement("div",{className:se.description},x),me())},ye=[ve[v]&&T.a.createElement("div",{className:se.videoFooter,key:"videoFooter"},T.a.createElement("div",{className:se.videoFooterContent},T.a.createElement("span",{className:"".concat(se.videoIcon," icon-makeit-play")}),T.a.createElement("span",{className:se.videoLabel},ve[v][0]),T.a.createElement("span",{className:se.videoTime},ve[v][1]),b?T.a.createElement("span",{className:se.totalTime},ve[v][2]):""))];if(!ie&&!ue){var be=G===U.d||G===U.a?T.a.createElement("span",{className:Object(H.a)(se.videoButton,this.state.isHovered&&se.videoButtonHighlighted)},T.a.createElement("span",{className:"icon-makeit-play"})):T.a.createElement(P.a,{buttonType:{video:"play",playlist:"playlist","full episode":"lock"}[v],isFeatured:fe.includes("featured"),hoverInitiated:this.state.isHovered,key:"playButton",dataId:z,hero:X,brand:G||Y,sizeVariationThree:"rectangle-media-clip-player"===h});ye.unshift(be)}var Te,Ce=[T.a.createElement("div",{className:se.imageGradient,key:"packageImageGradient"}),T.a.createElement("button",{href:F,key:"packageTitle",className:se.packageTitle},l)],Ee=oe?{"data-vilynx-id":"".concat(i)}:{},ke=oe?"vilynx_enabled":"",we=re?se.imageContainer:"",Ne="".concat(we," ").concat(ke),Se=this.getImageSizeRequestString(),De=u?"".concat(u).concat(u.includes("?")?"&":"?").concat(Se):"".concat(de,"?").concat(Se),Me=T.a.createElement(k.b,{to:F,assetType:o,target:Q?"_blank":"",tabIndex:"cnbcvideo"===o?"0":"-1",className:fe.includes("package")?se.mediaContainerPackage:se.mediaContainer},T.a.createElement("div",r()({className:Ne},Ee),T.a.createElement("div",{className:"".concat(fe.includes("square")?se.squareMediaContainer:se.rectangleMediaContainer," ").concat(se.placeholder)},T.a.createElement(N.a,null,"cnbcvideo"===o&&G===U.b&&T.a.createElement(P.a,{key:"playButton",dataId:z,hoverInitiated:this.state.isHovered,brand:G||Y,sizeVariationOne:"rectangle-media-video"===h,sizeVariationTwo:"rectangle-to-left-square-media"===h,sizeVariationThree:"rectangle-media-clip-player"===h}),T.a.createElement("img",{className:se.mediaContainerInner,src:"".concat(De),alt:"thumbnail",onMouseEnter:function(){return e.setState({isHovered:!0})},onMouseLeave:function(){return e.setState({isHovered:!1})}}))),["video","playlist","full episode"].includes(v)?ye:void 0,fe.includes("package")?Ce:void 0,"one-image-dense"===$&&T.a.createElement("div",{className:se.aboveImageContent},T.a.createElement("h2",{className:se.aboveImageTitle},T.a.createElement(k.b,{to:F,title:n,assetType:o},T.a.createElement(w.a,{clamp:5},le&&T.a.createElement(I.a,{styles:se}),c&&T.a.createElement(L.a,{styles:se}),n)))))),Pe=T.a.createElement("div",{className:fe.includes("package")?se.mediaContainerPackage:se.mediaContainer},T.a.createElement("div",{className:"".concat(fe.includes("square")?se.squareMediaContainer:se.rectangleMediaContainer," ").concat(se.placeholder),style:{backgroundImage:u?'url("'.concat(u).concat(u.includes("?")?"&":"?",'w=600&vtcrop=y")'):'url("'.concat(de,'?w=600")'),backgroundSize:"cover"},onMouseEnter:function(){return e.setState({isHovered:!0})},onMouseLeave:function(){return e.setState({isHovered:!1})}},ue&&T.a.createElement("div",{className:Z.a.desktop,style:{zIndex:100,position:"absolute",top:0,width:"100%",height:"100%"}})),["video","playlist","full episode"].includes(v)?ye:void 0,fe.includes("package")?Ce:void 0),Ie=Object(H.a)(se.standardBreakerCard,{keyValuePairs:[[se.slideshow,_],[se.makeit,G===U.d],[se.lastCard,ee]]},se[(W.a[h]||{}).style]),Le=function(){if(fe.includes("media"))return J?Pe:Me};if(J)return T.a.createElement("div",{className:Ie,style:O,"data-test":"Card",onClick:function(e){return e.preventDefault()},onKeyDown:function(e){return e.preventDefault()},role:"button",tabIndex:"0"},Le(),T.a.createElement("div",{className:se.textContent},C&&he,a&&s?pe:void 0,ge()));if(te&&("dense"===$&&ee?Te=T.a.createElement(M.a,{dataId:"NativeUltraDense-".concat(z)}):"three-up"===$?Te=T.a.createElement(S.a,{dataId:"NativeThreeUp-".concat(z),slotMethod:"cloneAd"}):"three-up-stack"!==$&&"three-up-stack-last"!==$||(Te=T.a.createElement(D.a,{dataId:"NativeThreeUpStackv2-".concat(z),slotMethod:"cloneAd"})),Te))return T.a.createElement("div",{className:Ie,"data-test":"Card",style:O},Te);return T.a.createElement("div",{className:"".concat(Ie," ").concat(se[o||""]||"").trim(),"data-test":"Card",style:O},Le(),"one-image-dense"===$?null:T.a.createElement("div",{className:Object(H.a)(c&&se.proContent,se.textContent)},C&&he,a&&s?pe:void 0,ge()))}}]),n}(b.Component);re.defaultProps={title:"",image:"",assetId:0,isLive:!1,type:void 0,isPro:!1,byline:"",timestamp:"",isPackage:!1,packageTitle:"",mediaType:"",playlistCount:null,videoTime:"",totalTime:"",customCardStyles:{},dark:!1,eyebrow:"",eyebrowUrl:"",sponsoredLogo:null,sponsorLink:"",isSlideshow:!1,url:"#",bylineUrl:"#",formattedTimeStamp:"",dataId:0,inlineVideoPlayback:!1,brand:ee,cardBrand:null,videoSize:"600",targetBlank:!1,hero:!1,layoutType:"",isLastCard:!1,shareThrough:!1,imageDense:!1,cardType:"",videoIsPlayingOrPaused:!1,displayThumbnailPreviews:!1,hideByline:!1,description:null,showLivePill:!1,sectionLayout:U.c.unspecified,showProVideoGate:!1,cardData:{}},re.propTypes={title:E.a.string,type:E.a.string,assetId:E.a.oneOfType([E.a.string,E.a.number]),isLive:E.a.bool.isRequired,isPro:E.a.bool.isRequired,image:E.a.string,byline:E.a.oneOfType([E.a.string,E.a.element]),bylineUrl:E.a.string,timestamp:E.a.string,eyebrow:E.a.string,eyebrowUrl:E.a.string,cardType:E.a.string.isRequired,isPackage:E.a.bool,packageTitle:E.a.string,mediaType:E.a.string,playlistCount:E.a.string,videoTime:E.a.oneOfType([E.a.string,E.a.number]),totalTime:E.a.string,customCardStyles:E.a.object,dark:E.a.bool,sponsoredLogo:E.a.string,sponsorLink:E.a.string,isSlideshow:E.a.bool,url:E.a.string,dataId:E.a.oneOfType([E.a.string,E.a.number]),inlineVideoPlayback:E.a.bool,targetBlank:E.a.bool,brand:E.a.string,cardBrand:E.a.string,formattedTimeStamp:E.a.string,videoSize:E.a.string,hero:E.a.bool,layoutType:E.a.string,isLastCard:E.a.bool,shareThrough:E.a.bool,imageDense:E.a.bool,videoIsPlayingOrPaused:E.a.bool,displayThumbnailPreviews:E.a.bool,hideByline:E.a.bool,description:E.a.string,styles:E.a.object.isRequired,showLivePill:E.a.bool,sectionLayout:E.a.string,showProVideoGate:E.a.bool,cardData:E.a.object},t.default=Object(O.a)(Object(j.b)(te,re))}.call(this,"/")},964:function(e,t,n){e.exports=n.p+"906141a02c3e44e527ac24fa52b20e5c.png"}}]);
//# sourceMappingURL=../../source-maps/components-shared-Card-4facf63736a3a2ce735b.js.map