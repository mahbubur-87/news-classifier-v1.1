(window.webpackJsonp=window.webpackJsonp||[]).push([[764],{"4HTz":function(t){t.exports=JSON.parse('{"id":"fad93083-286c-42af-9f47-0485f256f455","displayName":"CouponLinks"}')},ChiG:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var m=n("q1tI"),b=m.Component,d=n("XW3W"),g=n("n/w/");t.exports=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var c=d(n).map((function(t){if(2!==Object.keys(t).length||"string"!=typeof t.namespace||"object"!==y(t.styles))return t;var e={};return Object.keys(t.styles).forEach((function(n){e["".concat(t.namespace).concat(n)]=t.styles[n]})),e}));return function(e){if(!e)throw g.DECORATOR_THEME_MISSING_COMPONENT();var n=function(n){u(s,n);var o=f(s);function s(t){var e;return i(this,s),(e=o.call(this,t))._css=e._css.bind(p(e)),e._namespace=e._namespace.bind(p(e)),e}return a(s,[{key:"_namespace",value:function(t){var e=this._css.bind(this,t);return e.namespace=this._namespace,e}},{key:"_css",value:function(t){for(var e="",n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a,u=d(o).map((function(e){return"".concat(t).concat(e)}));this.props.css&&"function"==typeof this.props.css&&(e+=(a=this.props).css.apply(a,r(u))||"");return c.forEach((function(t){u.forEach((function(n){"string"==typeof t[n]&&(e+="".concat(t[n]," "))}))})),e}},{key:"render",value:function(){var n=this.props.decorators||[],r=this.props.theme||{};c.push(r),n.indexOf(t)<0&&n.push(t);var o=this._css.bind(this,"");o.namespace=this._namespace;var i=Object.assign({},this.props,{css:o,decorators:n});return m.createElement(e,i)}}]),s}(b);return n.displayName="".concat(t,"(").concat(e.displayName||e.name,")"),e.transferStaticProps&&e.transferStaticProps(n),n}}},E8oE:function(t,e){var n=/^(?:0|[1-9]\d*)$/;function r(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=o.propertyIsEnumerable,u=Math.max;function s(t,e){var n=b(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&d(t)}(t)&&i.call(t,"callee")&&(!a.call(t,"callee")||"[object Arguments]"==c.call(t))}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var u in t)!e&&!i.call(t,u)||o&&("length"==u||y(u,r))||n.push(u);return n}function f(t,e,n,r){return void 0===t||m(t,o[n])&&!i.call(r,n)?e:t}function l(t,e,n){var r=t[e];i.call(t,e)&&m(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function p(t){if(!g(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e,n,r,c=(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||o,e===r),a=[];for(var u in t)("constructor"!=u||!c&&i.call(t,u))&&a.push(u);return a}function h(t,e){return e=u(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=u(n.length-e,0),c=Array(i);++o<i;)c[o]=n[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=n[o];return a[e]=c,r(t,this,a)}}function y(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||n.test(t))&&t>-1&&t%1==0&&t<e}function m(t,e){return t===e||t!=t&&e!=e}var b=Array.isArray;function d(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!function(t){var e=g(t)?c.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var v,_=(v=function(t,e,n,r){!function(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var c=e[o],a=r?r(n[c],t[c],c,n,t):void 0;l(n,c,void 0===a?t[c]:a)}}(e,function(t){return d(t)?s(t,!0):p(t)}(e),t,r)},h((function(t,e){var n=-1,r=e.length,o=r>1?e[r-1]:void 0,i=r>2?e[2]:void 0;for(o=v.length>3&&"function"==typeof o?(r--,o):void 0,i&&function(t,e,n){if(!g(n))return!1;var r=typeof e;return!!("number"==r?d(n)&&y(e,n.length):"string"==r&&e in n)&&m(n[e],t)}(e[0],e[1],i)&&(o=r<3?void 0:o,r=1),t=Object(t);++n<r;){var c=e[n];c&&v(t,c,n,o)}return t}))),S=h((function(t){return t.push(void 0,f),r(_,void 0,t)}));t.exports=S},TYSa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.formatClassNameProp=function(t){if("string"==typeof t)return[t];if(Array.isArray(t))return t;return null},e.includeClassNames=function(t,e){t.forEach((function(t){return e.push(t)}))},e.includeSpecAttributes=function(t,e,n){e.forEach((function(e){return n.push("".concat(t,"-").concat(e))}))}},XW3W:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e,r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();function i(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}var c=Object.prototype,a=c.hasOwnProperty,u=c.toString,s=o.Symbol,f=c.propertyIsEnumerable,l=s?s.isConcatSpreadable:void 0;function p(t){return h(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!function(t){var e=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}(t)?u.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)}(t)}(t)&&a.call(t,"callee")&&(!f.call(t,"callee")||"[object Arguments]"==u.call(t))}(t)||!!(l&&t&&t[l])}var h=Array.isArray;t.exports=function(t){return(t?t.length:0)?function t(e,n,r,o,c){var a=-1,u=e.length;for(r||(r=p),c||(c=[]);++a<u;){var s=e[a];n>0&&r(s)?n>1?t(s,n-1,r,o,c):i(c,s):o||(c[c.length]=s)}return c}(t,1/0):[]}}).call(this,n("yLpj"))},XhxB:function(t,e,n){"use strict";t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"string"!=typeof t?(n=e||{},e=t):e.id=t;return e.setDefinition(n),Object.assign(e,{default:e,metadata:n,__esModule:!0}),e}},ZEai:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="/home/jenkins/workspace/NPM-web-ui/lib/components/wsj/CouponLinks/index.js";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=n("q1tI"),p=n("fFtP"),h=n("XhxB"),y=n("ChiG"),m=n("uDhY"),b=n("TYSa").includeSpecAttributes,d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(f,t);var e,n,r,s=u(f);function f(){return i(this,f),s.apply(this,arguments)}return e=f,(n=[{key:"generateCouponLists",value:function(t){var e=this;if(!t||!Array.isArray(t)||0===t.length)return null;var n=this.props.css,r=t.map((function(t){var r=t.id,i=t.shop_name,c=t.anchor_text,a=t.url;return l.createElement("li",{key:r,className:n("coupon-list-item"),__self:e,__source:{fileName:o,lineNumber:25,columnNumber:9}},l.createElement("span",{__self:e,__source:{fileName:o,lineNumber:26,columnNumber:11}},i,":",l.createElement("br",{__self:e,__source:{fileName:o,lineNumber:26,columnNumber:29}})),l.createElement("a",{href:a,target:"_blank",__self:e,__source:{fileName:o,lineNumber:27,columnNumber:11}},c))}));return l.createElement("ul",{className:n("coupon-list"),__self:this,__source:{fileName:o,lineNumber:33,columnNumber:7}},r)}},{key:"componentDidMount",value:function(){this.setContext({isClient:!0})}},{key:"render",value:function(){var t=this.props,e=t.content,n=t.context,r=t.css,i=t.options;if(!n.isClient)return null;if(!e||!e.data||!Array.isArray(e.data)||0===e.data.length)return null;var c=e.data,a=i.ariaLabel,u=i.ariaRole,s=i.breakpoint,f=i.id,p=i.padding,h=i.margin,y=i.tabIndex,m="string"==typeof this.props.options.className?[this.props.options.className]:this.props.options.className,d=["coupon-container","at".concat(s,"nits")];m&&m.forEach((function(t){return d.push(t)})),p&&b("padding",p,d),h&&b("margin",h,d);var g=c.slice(0,6);return l.createElement("div",{className:r(d),id:f,role:u,"aria-label":a,tabIndex:y,__self:this,__source:{fileName:o,lineNumber:68,columnNumber:7}},l.createElement("div",{className:r("coupon-headline"),__self:this,__source:{fileName:o,lineNumber:69,columnNumber:9}},"Sponsored Offers"),this.generateCouponLists(g))}}])&&c(e.prototype,n),r&&c(e,r),f}(p);d.options={type:"object",properties:{ariaLabel:{type:"string"},ariaRole:{type:"string"},breakpoint:"string",className:{type:["string","array"]},id:{type:"string"},margin:{type:"array",items:{type:"string",enum:["top","right","bottom","left"]}},padding:{type:"array",items:{type:"string",enum:["top","right","bottom","left"]}},tabIndex:{type:"string"}}},d.defaultOptions={breakpoint:"16u"},d.content=["coupon_links"],d.decorators={WSJTheme:y("WSJTheme",m)},t.exports=h(d,n("4HTz"))},fFtP:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=n("q1tI"),l=f.Component,p=n("n/w/"),h=n("E8oE"),y=n("zT9C"),m=n("NOtv")("packageEngine:WebUIComponent"),b=n("17x9"),d=["options","content","children","states","context","propTypes","decorators","definition","defaultProps","defaultOptions","transferStaticProps"];function g(t,e){h(e,{options:{},decorators:[],content:{},context:{}}),h(e.options,y(t.defaultOptions)),h(e.context,y(t.defaultContext)),h(e.content,y(t.defaultContent))}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=c(n);function n(t,r,o){var i;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),i=e.call(this,t,r,o),void 0===t)throw p.WEB_UI_SUPER_PROPS_UNDEFINED();d.forEach((function(t){if(u(i)&&i.constructor&&void 0===i.constructor[t])throw p.WEB_UI_STATIC_PROPS_UNDEFINED()})),i.state={},g(i.constructor,t);var c=i.setState.bind(u(i));return i.setState=function(t){m(p.WEB_UI_SET_STATE_WARNING()),c(t)},t._setContext?i.setContext=function(e){return t._setContext({context:e,goodBoy:"Don't fake this"})}:i.setContext=c,i}return function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(t){g(this.constructor,t)}},{key:"UNSAFE_componentWillUpdate",value:function(t,e){t._setContext||Object.assign(t.context,e)}},{key:"applyDecorators",value:function(t,e){if("function"!=typeof t||e||(e=t,t=[]),!Array.isArray(t))throw p.WEB_UI_INVALID_ARGS_DECORATORS({decorators:t});var n=[].concat(this.props.decorators||[]);t.forEach((function(t){var e=t.match(/^(\+\+|--)?.*/),r=(e.match,e.pre),o=e.decoratorName,i=n.indexOf(o);"--"===r&&i>=0&&n.splice(i,1),"--"!==r&&i<0&&n.push(o)}));var r=e;n.forEach((function(t){"function"==typeof e.decorators[t]&&(r=e.decorators[t](r))}));var o=function(t){return f.createElement(r,Object.assign({},t,{decorators:n}))};return o.displayName="appliedDecorators(".concat(r.displayName||r.name,")"),r.transferStaticProps&&r.transferStaticProps(o),o}}]),n}(l);Object.assign(v,{options:{},context:!1,content:[],children:!1,states:null,decorators:{},description:"",markAsImmutableForCache:[],propTypes:{options:b.object,decorators:b.array,content:function(){return null},context:b.object,theme:b.object,name:b.string},defaultProps:{options:{},decorators:[],content:null,context:{}},defaultOptions:{},defaultContent:{},defaultContext:{},definition:{},setDefinition:function(t){Object.assign(this,t);var e={id:this.id,name:this.displayName||this.name,states:this.states||null,markAsImmutableForCache:this.markAsImmutableForCache,options:this.options,decorators:Object.keys(this.decorators||{})};if(e.states&&e.markAsImmutableForCache.length>0)throw p.COMPONENT_STATEFUL_IMMUTABLE_PROPS({name:e.name});e.states?e.children=Object.keys(e.states).length:e.children=this.children||!1;null!==this.content?(Array.isArray(this.content)?e.content=this.content||[]:e.content=[this.content],e.content=e.content.map((function(t){return"string"==typeof t?{contentType:t}:t})),0===e.content.length&&(e.content=null)):e.content=null;this.definition=e},transferStaticProps:function(t){var e=this;d.forEach((function(n){t[n]=t[n]||e[n]}))}}),t.exports=v},uDhY:function(t,e,n){t.exports={"mobile-homepage":"WSJTheme--mobile-homepage--1HWSTInK","coupon-container":"WSJTheme--coupon-container--1e2qB9DU","coupon-headline":"WSJTheme--coupon-headline--3seqsuxh","coupon-list":"WSJTheme--coupon-list--3H_KpS7t","coupon-list-item":"WSJTheme--coupon-list-item--3NzGmaOM",at16units:"WSJTheme--at16units--3JAzBZVy",at12units:"WSJTheme--at12units--2-qzDSgX",at8units:"WSJTheme--at8units--VAkd6pUn",at4units:"WSJTheme--at4units--3ixVAQ8R","padding-top":"WSJTheme--padding-top--1YDLi2oB","padding-right":"WSJTheme--padding-right--vZVp7oFT","padding-right-large":"WSJTheme--padding-right-large--23A6nty0","padding-left-large":"WSJTheme--padding-left-large--2NE8VCrF","padding-bottom":"WSJTheme--padding-bottom--92Q4SkgB","padding-left":"WSJTheme--padding-left--3fOSGJEk","margin-top":"WSJTheme--margin-top--3BG-15qS","margin-right":"WSJTheme--margin-right--2Gkh33Ta","margin-bottom":"WSJTheme--margin-bottom--2-iArK_Z","margin-left":"WSJTheme--margin-left--1hsjyARb"}}}]);