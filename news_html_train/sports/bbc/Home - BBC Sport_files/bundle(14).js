Morph.versions["bbc-morph-gs-promo-body@6.0.0"]={"bbc-morph-classnames":"1.0.2","bbc-morph-ws-typography-info":"1.0.6","morph-require":"5.2.1",react:"0.14.7"},function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){Morph.modules["bbc-morph-gs-promo-body@6.0.0"]=t(1)},function(e,r,t){e.exports=t(2)},function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function p(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),a=t(3),u=o(a),c=t(4),l=o(c),f=t(5),h=o(f),d=t(6),b=o(d),m=function(e){function r(){return n(this,r),i(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,e),s(r,[{key:"componentWillMount",value:function(){var e=h.default.getDirectionality(this.props.serviceName);b.default.selfTransitiveThenUpdate(e.toLowerCase(),this)}},{key:"render",value:function(){var e=(0,l.default)("gs-c-promo-body",this.props.className,{"gs-c-promo-body--white-text":this.props.whiteText});return u.default.createElement("div",{className:e},this.props.children)}}]),r}(u.default.Component);r.default=m,m.displayName="GrandStand__PromoBody",m.propTypes={whiteText:u.default.PropTypes.bool,className:u.default.PropTypes.array,children:u.default.PropTypes.node.isRequired,serviceName:u.default.PropTypes.string},e.exports=r.default},function(e,r){e.exports=React},function(e,r){e.exports=Morph.modules["bbc-morph-classnames@1.0.2"]},function(e,r){e.exports=Morph.modules["bbc-morph-ws-typography-info@1.0.6"]},function(e,r){e.exports={transitive:function(e,r){return Morph.requireTransitiveWithCaller("bbc-morph-gs-promo-body@6.0.0",e,r)},selfTransitive:function(e,r){return Morph.requireTransitiveWithCaller("bbc-morph-gs-promo-body@6.0.0",e,r,!0)},transitiveThenUpdate:function(e,r){return Morph.requireTransitiveWithCallerThenUpdate("bbc-morph-gs-promo-body@6.0.0",e,r)},selfTransitiveThenUpdate:function(e,r){return Morph.requireTransitiveWithCallerThenUpdate("bbc-morph-gs-promo-body@6.0.0",e,r,!0)}}}]);