"use strict";(()=>{function a(){const{navCls:a}=w;let b=!1;const{globalNav:c=!0,globalNavInsert:d=!1}=HFSconfig.header||{};c?(d&&(a.add("show-global"),a.add("has-global-insert")),u.add(({position:a,down:c})=>{600<a&&(c&&!b?w.eventDispatch(p("global","stash")):!c&&b&&w.eventDispatch(p("global","reveal")))})):(a.add("hide-global"),a.rem("show-global")),w.eventListenAdd(o.global.stash,()=>{b=!0,a.add("stash-global")}),w.eventListenAdd(o.global.reveal,()=>{b=!1,a.rem("stash-global")})}function b(){const{navCls:a}=w,b=!document.cookie.includes("nbcnews_geolocation=us");if(b)return;if(!a.has("show-identity"))return;const c=w.QS(".js-login-wrapper"),d=w.QS(".js-auth-options"),e=w.QS(".js-sign-in"),f=w.QS(".js-sign-out");let g;const h="login-open",i="login-close",l=()=>{a.has(h)&&(a.add(i),setTimeout(()=>{a.rem(i)},500),a.rem(h))};w.eventListenAdd(o.local.active,()=>{l()}),w.eventListenAdd(o.share.open,()=>{l()});const m=()=>{a.has(h)?l():a.add(h)},q=()=>{clearTimeout(g),a.add(h)},r=()=>{g=setTimeout(()=>{l()},500)},s=()=>{clearTimeout(g),a.add(h)},t=()=>{g=setTimeout(()=>{l()},500)},u=()=>{f.addEventListener("click",m),f.removeEventListener("mouseenter",q),f.removeEventListener("mouseleave",r),d.removeEventListener("mouseenter",s),d.removeEventListener("mouseleave",t)},v=()=>{f.addEventListener("mouseenter",q),f.addEventListener("mouseleave",r),d.addEventListener("mouseenter",s),d.addEventListener("mouseleave",t),f.removeEventListener("click",m)},{_HFS:{identity:x={}}={}}=j,{appKey:y="nbcnewsweb",options:z={}}=x;z.debug=/dev|stage/.test(z.env);const A=a=>{w.eventDispatch(p("id","error",{error:a}))},B=a=>{const{Identity:b}=j;w.eventDispatch(p("id","init",{init:a})),c.style.visibility="visible",e.addEventListener("click",()=>{b.authenticate(),w.eventDispatch(p("id","click"))});const d=a=>{l(),a.matches?u():v()};d(n),n.addEventListener("change",d)},C=b=>{w.eventDispatch(p("id","state",{state:b})),"authenticated"===b?(e.classList.add("h-dn"),f.classList.remove("h-dn")):(e.classList.remove("h-dn"),f.classList.add("h-dn"),a.has(h)&&l())},D=a=>{w.eventDispatch(p("id","result",{result:a}))};let E="id.nbc.com";z.env&&"production"!==z.env&&(E=`${"stage"===z.env?"stage":"dev"}-${E}`);const F=`https://${E}/sdk/v7.4.0/identity.min.js`,G=k.getElementsByTagName("head")[0],H=k.createElement("script");H.setAttribute("type","text/javascript"),H.setAttribute("src",F),G.addEventListener("load",a=>{try{if("SCRIPT"===a.target.nodeName&&a.target.getAttribute("src")===F){const{Identity:a}=j;C(a.state),D(a.result),a.getHealth(z.env).then(b=>{b&&(a.initialize(y,z).then(B).catch(A),a.on("state",C),a.on("result",D))}).catch(A)}}catch(a){A(a)}},!0),G.appendChild(H)}function c(){const a=w.QS(".menu");w.QS(".js-menu-toggle").addEventListener("click",()=>{w.navCls.has("menu-open")?w.eventDispatch(p("menu","close",{isOpen:!1})):w.eventDispatch(p("menu","open",{isOpen:!0}))}),w.eventListenAdd(o.menu.open,()=>{w.navCls.add("menu-open"),0>=w.nav.getBoundingClientRect().top&&w.navCls.add("stuck"),a.scrollTop=0,j.dispatchEvent(q)}),w.eventListenAdd(o.menu.close,()=>{w.navCls.rem("stuck"),w.navCls.rem("menu-open"),a.removeAttribute("style")})}function d(){w.eventListenAdd(o.menu.close,v.enable),w.eventListenAdd(o.menu.open,()=>{v.disable(".js-menu-selector")}),w.eventListenAdd(o.search.close,v.enable),w.eventListenAdd(o.search.open,v.disable),w.eventListenAdd(o.share.close,v.enable),w.eventListenAdd(o.share.open,()=>{758>=j.innerWidth&&v.disable(".js-share-selector")})}function e(){const a=w.QS(".global");a&&(w.QS(".js-search-open").addEventListener("click",()=>{w.navCls.add("search-open"),w.eventDispatch(p("search","open",{isOpen:!0}))}),w.QS(".js-search-close").addEventListener("click",()=>{w.navCls.rem("search-open"),w.navCls.has("menu-open")||w.eventDispatch(p("search","close",{isOpen:!1}))}),s(".js-search-form",a=>{a.addEventListener("submit",a=>{a.preventDefault();const b=a.target;"post"===b.method.toLowerCase()&&(b.action+=encodeURI(b.querySelector("input[type=\"search\"]").value)),b.submit()})}),s(".js-search-input",a=>{a.addEventListener("focus",a=>{r(a.target.form).add("active")}),a.addEventListener("blur",a=>{a.target.value.length||r(a.target.form).rem("active")})}))}function f(){const{navCls:a}=w,b=()=>{a.add("share-close"),a.rem("share-open")};w.QS(".js-share-toggle").addEventListener("click",()=>{a.has("share-open")?w.eventDispatch(p("share","close",{isOpen:!1})):w.eventDispatch(p("share","open",{isOpen:!0}))}),w.eventListenAdd(o.share.open,()=>{a.rem("share-close"),a.add("share-open")}),w.eventListenAdd(o.share.close,()=>{b(),setTimeout(()=>{a.rem("share-close")},500)}),w.eventListenAdd(o.local.inactive,()=>{w.navCls.rem("share-open")}),w.eventListenAdd(o.menu.open,b),w.eventListenAdd(o.search.open,b)}function g(){const{nav:a,navCls:b}=w,c=({position:c,force:d=!1})=>{const e=b.has("stuck"),{top:f}=w.sel.getBoundingClientRect();if(y){const g=c>f+j.pageYOffset-y;(d||!e)&&g?(b.add("stuck"),a.style.top=`${y}px`):(d||e)&&!g&&(b.rem("stuck"),a.style.top="")}else b.toggle("stuck",c>f+j.pageYOffset),a.style.top=""},d=new MutationObserver(()=>{z(),c({position:j.pageYOffset,force:!0}),j.dispatchEvent(q)});for(({previousSibling:x}=w.sel);null!==x;){if(-1<["DIV"].indexOf(x.nodeName)){const{position:a}=j.getComputedStyle(x);("fixed"===a||"sticky"===a)&&d.observe(x,{attributes:!0,attributeFilter:["class"],characterData:!1})}({previousSibling:x}=x)}z(),u.add(c),c({position:j.pageYOffset,force:!0})}function h(){const a=j.$t||function(){const b=function(...c){return 1<=c.length&&"getSaves"!==c[0]&&b.e.push(c),"getSaves"===c[0]?b.e:""};return b.e=[],b.stub="2.0",b}(),b={hmbClick:"mbt_navbar_hamburgerClick",idClick:"hfs_identity_iconClick",idError:"hfs_identity_error",idInit:"hfs_identity_init",idResult:"hfs_identity_result",idState:"hfs_identity_state",shrClick:"mbt_navbar_shareClick"},c=Object.values(b),d=document.querySelectorAll("[data-track-event]");for(let b=0;b<d.length;b+=1){const{trackEvent:e,trackKey:f,trackValue:g}=d[b].dataset;e&&(-1===c.indexOf(e)&&c.push(e),f&&g&&d[b].addEventListener("click",()=>{a("track",e,{[f]:g})}))}a("register",c),w.eventListenAdd(o.share.open,c=>{a("track",b.shrClick,c.detail)}),w.eventListenAdd(o.share.close,c=>{a("track",b.shrClick,c.detail)}),w.eventListenAdd(o.menu.open,c=>{a("track",b.hmbClick,c.detail)}),w.eventListenAdd(o.menu.close,c=>{a("track",b.hmbClick,c.detail)});const{navCls:e}=w;e.has("show-identity")&&(w.eventListenAdd(o.id.click,c=>{a("track",b.idClick,c.detail)}),w.eventListenAdd(o.id.error,c=>{a("track",b.idError,c.detail)}),w.eventListenAdd(o.id.init,c=>{a("track",b.idInit,c.detail)}),w.eventListenAdd(o.id.result,c=>{a("track",b.idResult,c.detail)}),w.eventListenAdd(o.id.state,c=>{a("track",b.idState,c.detail)}))}function i(){const{useSmallNav:s=!1,shortcuts:t=!0,activeAt:i,primary:l,social:n,theme:o,url:q}=HFSconfig.header||{};w.sel=k.getElementById("hfs-header"),w.QS=w.sel.querySelector.bind(w.sel),w.nav=w.QS("nav.hfsh");const v=r(w.nav);w.navCls=v,v.has("init")||v.add("init"),o&&-1!==m.indexOf(o)&&v.add(o),s&&v.add("small"),t&&v.add("show-shortcuts"),u.add(({position:a})=>{v.toggle("scrolled",0<a)}),i&&u.add(({position:a})=>{!v.has("active")&&a>=i?w.activate():v.has("active")&&a<i&&w.deactivate()}),a(),d(),g(),c(),f(),e(),h(),b(),w.updateHeadline(l),w.updateSocial(q,n),k.addEventListener("keyup",a=>{a.key&&"Escape"===a.key&&(w.eventDispatch(p("search","close",{isOpen:!1})),w.eventDispatch(p("menu","close",{isOpen:!1})),w.eventDispatch(p("share","close",{isOpen:!1})))}),j.HFSapi=w}const j=window,k=document,l=(a,b)=>/iPad|iPhone|iPod/.test(a)&&!b,m=["vertical","dark","transparent","transparentLight"],n=j.matchMedia("(max-width: 999px)"),o={global:{reveal:"HFS.global.reveal",stash:"HFS.global.stash"},id:{error:"HFS.identity.error",init:"HFS.identity.init",result:"HFS.identity.result",state:"HFS.identity.state",click:"HFS.identity.click"},local:{active:"HFS.local.active",inactive:"HFS.local.inactive"},menu:{close:"HFS.menu.close",open:"HFS.menu.open"},search:{close:"HFS.search.close",open:"HFS.search.open"},share:{close:"HFS.share.close",open:"HFS.share.open"}},p=(a,b,c=null)=>new CustomEvent(o[a][b],{detail:c}),q=new CustomEvent("HFS.recalculateHeight"),r=a=>({add(b){return a.classList&&a.classList.add(b),this},rem(b){return a.classList&&a.classList.remove(b),this},toggle(a,b=null){const c=this.has(a);return"boolean"==typeof b?b&&!c?this.add(a):!b&&c&&this.rem(a):this[c?"rem":"add"](a),this},has(b){return!!a.classList&&a.classList.contains(b)}}),s=(a,b)=>{const c=k.querySelectorAll(a);for(let d=0;d<c.length;d+=1)b.call(void 0,c[d])};class t{constructor(a){this.cb=[],this.on=!1,this.type=a}run(){this.cb.forEach(a=>{a()}),this.on=!1}listen(){this.on||(this.on=!0,j.requestAnimationFrame?j.requestAnimationFrame(()=>{this.run.call(this)}):setTimeout(this.run,66))}add(a){return this.cb.length||j.addEventListener(this.type,()=>{this.listen.call(this)}),!!a&&this.cb.push(a)}}const u=new class a extends t{constructor(){super("scroll")}run(){this.cb.forEach(a=>{a({position:this.lastPosition,down:this.scrollDown})}),this.on=!1}listen(){this.scrollDown=j.pageYOffset>this.lastPosition,this.lastPosition=j.pageYOffset,super.listen()}},v={selector:null,allow:!0,originalEvent:null,toggle:a=>{v[v.allow?"disable":"enable"](a)},isDescendant:(a,b)=>{for(let c=b.parentNode;null!=c;){if(c===a)return!0;c=c.parentNode}return!1},iosHandler:a=>{const b=k.querySelector(v.selector);v.isDescendant(b,a.target)||a.preventDefault(),v.originalEvent&&v.originalEvent.target===a.target||(v.originalEvent=a),a.pageY<v.originalEvent.pageY&&0>=b.scrollHeight-b.scrollTop-b.clientHeight?a.preventDefault():a.pageY>v.originalEvent.pageY&&0>=b.scrollTop&&a.preventDefault()},disable:a=>{const b=l(navigator.userAgent,j.MSStream);v.selector=a||null,v.allow=!1,v.selector&&b?(j.addEventListener("wheel",v.iosHandler,{passive:!1}),j.addEventListener("touchmove",v.iosHandler,{passive:!1})):k.querySelector("body").style.overflow="hidden"},enable:()=>{const a=l(navigator.userAgent,j.MSStream);v.allow=!0,a?(j.removeEventListener("wheel",v.iosHandler,{passive:!1}),j.removeEventListener("touchmove",v.iosHandler,{passive:!1})):k.querySelector("body").style.overflow=null}},w={sel:null,navCls:null,QS:null,eventDispatch(a){this.sel&&this.sel.dispatchEvent(a)},eventListenAdd(a,b){this.sel&&this.sel.addEventListener(a,b)},eventListenRem(a,b){this.sel&&this.sel.removeEventListener(a,b)},updateHeadline(a){let b=null;a&&(b=a);const c=this.QS(".js-headline-text");c&&(c.innerHTML=b),HFSconfig.header.primary=b},updateSocial(a,b){let c=null;a&&/^https?:\/\/[^ "]+$/.test(a)&&(c=a);let d="";b&&"string"==typeof b&&(d=encodeURIComponent(b.replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,"\""))),s(".js-hfs-share",a=>{const{key:b,template:e}=a.dataset,f=l(navigator.userAgent,j.MSStream);let g=e.replace(/URL/,decodeURI(c));g=g.replace(/HEADLINE/,d),g=g.replace(/VIA/,j._HFS&&j._HFS.social?j._HFS.social:""),"sms"===b&&f&&(g=g.replace("?body","&body")),a.setAttribute("href",g)}),HFSconfig.header.url=c,HFSconfig.header.social=decodeURIComponent(d)},updateTheme(a){this.navCls&&(m.forEach(a=>{this.navCls.rem(a)}),-1<m.indexOf(a)&&this.navCls.add(a))},activate(){this.eventDispatch(p("local","active")),this.navCls.add("active")},deactivate(){this.eventDispatch(p("local","inactive")),this.navCls.rem("active")},enableGlobalInsert(){this.navCls.add("has-global-insert")},disableGlobalInsert(){this.navCls.rem("has-global-insert")},enableLocalInsert(){this.navCls.add("has-local-insert")},disableLocalInsert(){this.navCls.rem("has-local-insert")}};let x,y=0;const z=()=>{for(({previousSibling:x}=w.sel),y=0;null!==x;){if(-1<["DIV"].indexOf(x.nodeName)){const{position:a,display:b}=j.getComputedStyle(x),{height:c}=x.getBoundingClientRect();("fixed"===a||"sticky"===a)&&"none"!==b&&0<c&&(y+=c)}({previousSibling:x}=x)}};j.addEventListener(q.type,()=>{const a=w.QS(".menu");if(a){const{navCls:b}=w,c=w.QS(".global"),{height:d=0}=c&&c.getBoundingClientRect()||{};let e=!1;if(y&&b.has("stuck"))e=y,b.has("stash-global")||(e+=d);else if(!b.has("stuck")){const{top:a=0}=w.sel.getBoundingClientRect();e=a+d}b.has("small")&&(e+=60),e?a.setAttribute("style",`height: calc(100vh - ${e}px)`):a.removeAttribute("style")}}),k.addEventListener("DOMContentLoaded",i),j.addEventListener("HFS.ready",a=>{"header"===a.detail&&i()})})();