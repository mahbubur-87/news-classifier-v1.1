!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("sdc-site-carousel",[],t):"object"==typeof exports?exports["sdc-site-carousel"]=t():e["sdc-site-carousel"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/js/modules/components",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=n(o),a=r(2),l=n(a),c=r(6),u=n(c),s=r(4),f=n(s);t["default"]=function(e){function t(e){var t=e.offsetLeft,r=o.offsetWidth/2,n=e.offsetWidth/2;o.scrollLeft=t-r+n}if(e){var r=null,n=e.getAttribute("data-tracking");n&&(n=JSON.parse(n),r=new u["default"](n),r.init());var o=e.querySelector(".sdc-site-carousel__nav-wrap"),a=e.querySelectorAll(".sdc-site-carousel__nav-label"),c=e.querySelectorAll(".sdc-site-carousel__rail-group");a.length>0&&a.forEach(function(n,o){n.addEventListener("click",function(){var n=a[o];t(n),(0,i["default"])(e,n,c[o]);var l={element:n,config:f["default"]};r&&r.provider&&r.trackClick(l)})}),c.forEach(function(e){(0,l["default"])(e,r)})}},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,r){var n="sdc-site-carousel__selected",o=e.querySelector("."+n),i=e.querySelector('[data-hidden="false"]'),a=function(e,t){e.classList.remove(n),e.setAttribute("aria-selected","false"),t.setAttribute("data-hidden","true")},l=function(e,t){e.setAttribute("aria-selected","true"),e.classList.add(n),t.setAttribute("data-hidden","false")};a(o,i),l(t,r)},e.exports=t["default"]},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(3),i=n(o),a=r(4),l=n(a),c=r(5),u=n(c);t["default"]=function(e,t){function r(e){var t=e;0>t&&(t=0);var r=f[t].offsetLeft;c?s.scrollLeft=r:(0,i["default"])(s,r,0),a()}function n(e){null===d[e].getAttribute("disabled")&&d[e].setAttribute("disabled",!0)}function o(e){null!==d[e].getAttribute("disabled")&&d[e].removeAttribute("disabled")}function a(){var e=0;f.forEach(function(t,r){t.getBoundingClientRect("item",r).left-s.getBoundingClientRect("rail").left<50&&(e=r)}),p=e,s.scrollLeft<50?n(0):o(0),s.scrollWidth-s.scrollLeft-50<s.offsetWidth?n(1):o(1),setTimeout(function(){requestAnimationFrame(a)},1e3/60)}var c="scrollBehavior"in document.documentElement.style,s=e.querySelector('[data-role="carousel-rail"]'),f=e.querySelectorAll('[data-role="carousel-item"]'),d=e.querySelectorAll('[data-role="nav-direction-item"]'),p=0;d.forEach(function(e,n){e.onclick=function(){var o=p;0===n?o-=2:o+=2,r(o);var i={element:e,config:l["default"]};t&&t.provider&&t.trackClick(i)}}),f.forEach(function(e,r){e.onclick=function(){if(t&&t.provider){var n={element:e,position:r+1,config:u["default"]};t.trackClick(n)}}}),a()},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,r){function n(e){return.5*(1-Math.cos(Math.PI*e))}function o(e){var t=c(),r=(t-e.startTime)/l;r=r>1?1:r;var i=n(r),a=e.startX+(e.x-e.startX)*i,u=e.startY+(e.y-e.startY)*i;e.method.call(e.scrollable,a,u),(a!==e.x||u!==e.y)&&window.requestAnimationFrame(o.bind(window,e))}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function a(e,t,r){var n=c(),a=e,l=e.scrollLeft,u=e.scrollTop,s=i;o({scrollable:a,method:s,startTime:n,startX:l,startY:u,x:t,y:r})}var l=468,c=window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now;a(e,t,r)},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["prop15"],evars:[{name:"eVar7",value:"D=c15"}],events:"event6",linkTrackVars:"prop39,eVar39,prop15,eVar7,events",linkTrackEvents:"event6"},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["prop15","prop26"],evars:[{name:"eVar7",value:"D=c15"},{name:"eVar28",value:"D=c26"}],events:"event6",linkTrackVars:"prop39,eVar39,prop15,eVar7,prop26,eVar28,,events",linkTrackEvents:"event6"},e.exports=t["default"]},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(7),l=n(a),c=function(){function e(t){o(this,e),this.trackingData=t}return i(e,[{key:"init",value:function(){switch(this.trackingData.provider){case"omniture":this.provider=new l["default"];break;default:this.provider=null}}},{key:"trackClick",value:function(e){this.provider&&this.provider.trackClick(this.trackingData,e)}}]),e}();t["default"]=c,e.exports=t["default"]},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(){r(this,e)}return n(e,[{key:"trackClick",value:function(e,t){if(e&&sky.tracking&&t.element){var r=t.element.getAttribute("data-section-name"),n=t.element.getAttribute("data-item-title"),o=t.element.getAttribute("data-tracking-element-id"),i=e.elements[o];t.position&&(i=i+"|position_"+t.position);var a={props:[{prop:"prop15",place:r,description:i},{prop:"prop26",description:n}],config:t.config};sky.tracking.multipleEVarsClickManual(a,a.config)}}}]),e}();t["default"]=o,e.exports=t["default"]}])});
//# sourceMappingURL=sdc-site-carousel.js.map