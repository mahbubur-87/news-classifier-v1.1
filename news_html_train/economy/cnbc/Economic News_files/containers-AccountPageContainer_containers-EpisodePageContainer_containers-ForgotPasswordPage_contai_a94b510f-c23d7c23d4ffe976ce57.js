(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[2],{1012:function(e,t,n){e.exports={spinnerParent:"DynamicLoadingIndicator-spinnerParent",spinner:"DynamicLoadingIndicator-spinner",spin:"DynamicLoadingIndicator-spin"}},1013:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return u}));var a=n(66),r=["philly.xfinity.comcast.net","mr.qa.xfinity.comcast.net","xfinity.comcast.net","finance.comcast.net","staging.xfinity.comcast.net","comcast.com","customer.comcast.com","xfinitytv.comcast.net","xfinityconnect.mail.comcast.net","search.comcast.net","my.xfinity.com","www.xfinity.com"],o="active_partner_exp",i={};function s(){if("undefined"==typeof window)return!1;var e=document.createElement("a");return e.href=document.referrer,r.includes(e.host)}function c(e){return"undefined"!=typeof window&&!!("xfinity"===Object(a.c)(o)||e&&"xfinity"===e[o])}function l(e){if(i.isXfinityReferrer(e)&&!document.getElementById("xfinity-third-party-script")){var t=document.createElement("script");t.id="xfinity-third-party-script",t.type="text/javascript",t.src="https://polaris.xfinity.com/polaris.js",t.async=!0,document.head.appendChild(t)}}function u(){if("undefined"!=typeof window){var e=document.getElementById("xfinity-third-party-script");e&&e.parentNode.removeChild(e)}}i.ACTIVE_PARTNER_EXP=o,i.isReferByOneOfOurPartners=s,i.isXfinityReferrer=c,i.injectXfinityPartnerScript=l,i.removeXfinityPartnerScript=u},1062:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),s=n(860),c=n(1638),l=n.n(c),u=function(e){var t=e.slotMethod,n=e.dataId;return r.a.createElement(s.a,{id:n,slot:"mobileadhesion",clsName:l.a.container,slotMethod:t,dataId:n})};u.propTypes={slotMethod:i.a.string,dataId:i.a.oneOfType([i.a.string,i.a.number])},u.defaultProps={slotMethod:"cloneAd",dataId:0},t.a=u},1638:function(e,t,n){e.exports={container:"MobileAdhesion-container"}},1639:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),s=n(46),c=n(1640),l=n.n(c),u=function(e){var t=e.contentID,n=e.text,a=e.pageType,o=a?{top:{article:"64px"}[a]}:null;return r.a.createElement("div",{className:l.a.container,style:o},r.a.createElement(s.b,{to:"#".concat(t),className:l.a.link},n))};u.defaultProps={contentID:"MainContent",text:"Skip Navigation",pageType:""},u.propTypes={contentID:i.a.string,text:i.a.string,pageType:i.a.string},t.a=u},1640:function(e,t,n){e.exports={electricblue:"#1ff1c8",orange:"#f87121",container:"JumpLink-container",link:"JumpLink-link"}},265:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),s=n(11),c=n(366),l=n.n(c),u=function(e){var t=e.data,n=e.errorSource,a=e.errorProps,o=t&&t.error||"NA";return console.error(n,"threw the following error:",o," With the following error props:",a),r.a.createElement("div",null,s.a.get("host.isPreRelease")&&r.a.createElement("div",{className:l.a.container},r.a.createElement("div",null,JSON.stringify(n)," threw the following error:"),r.a.createElement("div",null,JSON.stringify(o)," With the following error props:"),r.a.createElement("div",null,JSON.stringify(a))))};u.propTypes={data:i.a.object.isRequired,errorSource:i.a.string.isRequired,errorProps:i.a.object},u.defaultProps={errorProps:{}},t.a=u},362:function(e,t,n){e.exports={navSpacer:"NavSpacer-navSpacer",navSpacerCountDownClock:"NavSpacer-navSpacerCountDownClock",navSpacerFiveThings:"NavSpacer-navSpacerFiveThings",navSpacerNewsAlert:"NavSpacer-navSpacerNewsAlert",navSpacerLiveAlert:"NavSpacer-navSpacerLiveAlert","NavSpacer-navSpacerFiveThings":"NavSpacer-NavSpacer-navSpacerFiveThings"}},366:function(e,t,n){e.exports={electricblue:"#1ff1c8",orange:"#f87121",container:"ErrorHandler-container"}},531:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(0),i=n.n(o),s=n(1),c=n.n(s),l=n(48),u=n(59),p=n(11),h=n(52),m=n(265),d=n(23),v=n(532),f,b=(f={},r()(f,d.a,Object(u.a)({resolved:{},chunkName:function(){return"AcornsGlobalNav"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(1),n.e(7),n.e(16),n.e(8),n.e(38)]).then(n.bind(null,625))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function e(){return 625}})),r()(f,d.b,Object(u.a)({resolved:{},chunkName:function(){return"CNBCGlobalNav"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(1),n.e(7),n.e(16),n.e(8),n.e(40)]).then(n.bind(null,624))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function e(){return 624}})),r()(f,d.d,Object(u.a)({resolved:{},chunkName:function(){return"MakeItGlobalNav"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(1),n.e(7),n.e(16),n.e(8),n.e(42)]).then(n.bind(null,627))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function e(){return 627}})),r()(f,d.e,Object(u.a)({resolved:{},chunkName:function(){return"SelectGlobalNav"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(1),n.e(8),n.e(45)]).then(n.bind(null,626))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function e(){return 626}})),f),w=p.a.getProperties(),y=w.FLAG_ENABLE_XFINITY,g=function(){return!(!window.navigator.userAgent.includes("MSIE")&&!window.navigator.userAgent.includes("Trident/"))},C=function(e){var t=e||{},n=t.brand,a=t.data,r=t.page,o=t.region,s=t.standalone;if(!a||!a.collapsed)return i.a.createElement(m.a,{data:{error:"Menu query came back as null"},errorSource:"GlobalNavigation",errorProps:e});var c=b[n];return i.a.createElement(i.a.Fragment,null,s&&i.a.createElement(v.a,null),i.a.createElement(c,{data:a,template:r,pageType:e.navStatus.pageType,region:o,standalone:s,isIE:g,FLAG_ENABLE_XFINITY:y,navStatus:e.navStatus,setNavIsExpanded:e.setNavIsExpanded}))};C.propTypes={navStatus:c.a.object,setNavIsExpanded:c.a.func},C.defaultProps={brand:d.b,region:{selectedRegion:"USA",defaultRegion:"USA"},navStatus:{},setNavIsExpanded:function(){}};var k=function(e){return{navStatus:e.navStatus}},S={setNavIsExpanded:h.p};t.a=Object(l.b)(k,S)(C)},532:function(e,t,n){"use strict";var a=n(36),r=n.n(a),o=n(37),i=n.n(o),s=n(68),c=n.n(s),l=n(69),u=n.n(l),p=n(49),h=n.n(p),m=n(2),d=n.n(m),v=n(0),f=n.n(v),b=n(1),w=n.n(b),y=n(48),g=n(362),C=n.n(g);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var S=function(e){c()(n,e);var t=k(n);function n(){return r()(this,n),t.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var e="".concat(C.a.navSpacer);return this.props.hasNewsAlert&&(e+=" ".concat(C.a.navSpacerNewsAlert)),this.props.hasLiveAlert&&(e+=" ".concat(C.a.navSpacerLiveAlert)),this.props.hasCountDownClock&&(e+=" ".concat(C.a.navSpacerCountDownClock)),this.props.hasFiveThings&&(e+=" ".concat(C.a.navSpacerFiveThings)),f.a.createElement("span",{className:e,id:"NavSpacer"})}}]),n}(f.a.Component);d()(S,"propTypes",{hasNewsAlert:w.a.bool,hasLiveAlert:w.a.bool,hasCountDownClock:w.a.bool,hasFiveThings:w.a.bool}),d()(S,"defaultProps",{hasNewsAlert:!1,hasLiveAlert:!1,hasCountDownClock:!1,hasFiveThings:!1});t.a=Object(y.b)((function(e){return{hasNewsAlert:e.navStatus.hasNewsAlert,hasLiveAlert:e.navStatus.hasLiveAlert,hasCountDownClock:e.navStatus.hasCountDownClock,hasFiveThings:e.navStatus.hasFiveThings}}))(S)},533:function(e,t,n){"use strict";var a=n(28),r=n.n(a),o=n(2),i=n.n(o),s=n(0),c=n.n(s),l=n(1),u=n.n(l),p=n(59),h=n(265),m=n(23),d=n(537),v,f=(v={},i()(v,m.a,Object(p.a)({resolved:{},chunkName:function(){return"components-Footer-AcornsFooter"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(10),n.e(48)]).then(n.bind(null,621))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function e(){return 621}})),i()(v,m.b,Object(p.a)({resolved:{},chunkName:function(){return"components-Footer-CNBCFooter"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(10),n.e(49)]).then(n.bind(null,628))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function e(){return 628}})),i()(v,m.d,Object(p.a)({resolved:{},chunkName:function(){return"components-Footer-MakeItFooter"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(10),n.e(50)]).then(n.bind(null,622))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function e(){return 622}})),i()(v,m.e,Object(p.a)({resolved:{},chunkName:function(){return"components-Footer-SelectFooter"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(10),n.e(51)]).then(n.bind(null,623))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function e(){return 623}})),v),b=function(e){var t=e.brand,n=e.region.selectedRegion,a=Object(d.a)(t,n);if(!a||!Array.isArray(a.main))return c.a.createElement(h.a,{data:{error:"Menu query came back as null"},errorSource:"Footer",errorProps:e});var o=f[t];return c.a.createElement(o,r()({},e,{data:a}))};b.propTypes={template:u.a.string,brand:u.a.string,region:u.a.object},b.defaultProps={template:"",brand:m.b,region:{selectedRegion:"USA",defaultRegion:"USA"}},t.a=b},537:function(e,t,n){"use strict";var a=n(23),r={main:[{name:"subscribe_with_icon",label:"Subscribe to CNBC PRO",host:"",path:"/application/pro/?__source=pro|globalfooter",items:[]},{name:"licensing_and_reprints",label:"Licensing & Reprints",host:"",path:"/cnbc-reprints/",items:[]},{name:"cnbc_councils",label:"CNBC Councils",host:"https://www.cnbccouncils.com",path:"/",items:[]},{name:"Supply_Chain_Values",label:"Supply Chain Values",host:"https://corporate.comcast.com",path:"/values/integrity",items:[]},{name:"cnbc_on_peacock",label:"CNBC on Peacock",host:"https://www.peacocktv.com/?cid=20200101evergreensymdisp009&utm_source=cnbc&utm_medium=symphony_editorial_brandawareness_footerlink&utm_campaign=20200101evergreen&utm_term=na&utm_content=na_na",path:"/",items:[]},{name:"advertise",label:"Advertise With Us",host:"",path:"/advertising-and-partnerships/",items:[]},{name:"cnbc_panel",label:"Join the CNBC Panel",host:"https://cnbcrsh.qualtrics.com",path:"/jfe/form/SV_8v2FqPLC71m5Gaq?Origin=cnbc",items:[]},{name:"digital_products",label:"Digital Products",host:"",path:"/digital-products/",items:[]},{name:"terms_of_service",label:"Terms of Service",host:"",path:"/nbcuniversal-terms-of-service/",items:[]},{name:"privacy_policy",label:"Privacy Policy",host:"https://www.nbcuniversal.com",path:"/privacy?intake=CNBC",items:[]},{name:"do_not_sell",label:"Do Not Sell My Personal Information",host:"https://www.nbcuniversal.com",path:"/privacy/notrtoo?intake=CNBC",items:[]},{name:"ca_notice",label:"CA Notice",host:"https://www.nbcuniversal.com",path:"/privacy/california-consumer-privacy-act?intake=CNBC",items:[]},{name:"news_releases",label:"News Releases",host:"",path:"/cnbc-news-releases/",items:[]},{name:"closed_captioning",label:"Closed Captioning",host:"",path:"/closed-captioning/",items:[]},{name:"corrections",label:"Corrections",host:"",path:"/corrections/",items:[]},{name:"about_cnbc",label:"About CNBC",host:"",path:"/about/",region:"USA",items:[]},{name:"internships",label:"Internships",host:"",path:"/cnbc-internship-program/",items:[]},{name:"sitemap",label:"Site Map",host:"",path:"/site-map/",items:[]},{name:"podcasts",label:"Podcasts",host:"",path:"/podcast/",region:"USA",items:[]},{name:"ad_choices",label:"Ad Choices",host:"https://www.nbcuniversal.com",path:"/privacy/cookies#cookie_management",items:[]},{name:"careers",label:"Careers",host:"",path:"/cnbc-careers-and-employment/",items:[]},{name:"help",label:"Help",host:"https://help.cnbc.com/",path:"",items:[]},{name:"contact",label:"Contact",host:"https://help.cnbc.com/contact/",path:"",items:[]},{name:"reuters",label:"Market Data Terms of Use and Disclaimers",host:"",path:"/market-data-terms-of-service/",items:[]},{name:"nbc_copyright",label:"nbc_copyright",host:"",path:"https://www.nbcuniversal.com",items:[]},{name:"newsletter_link",label:"Sign Up Now",host:"",path:"/sign-up-for-cnbc-newsletters/",items:[]},{name:"news_tips_link",label:"Get In Touch",host:"",path:"/news-tips/",items:[]}],social:[{name:"facebook",label:"",host:"https://www.facebook.com",path:"/cnbc/",region:"USA",items:[]},{name:"twitter",label:"",host:"https://www.twitter.com",path:"/cnbc/",region:"USA",items:[]},{name:"linkedin",label:"",host:"https://www.linkedin.com",path:"/company/cnbc/",region:"USA",items:[]},{name:"instagram",label:"",host:"https://www.instagram.com",path:"/cnbc/",region:"USA",items:[]},{name:"youtube",label:"",host:"https://www.youtube.com",path:"/user/cnbc/",region:"USA",items:[]},{name:"apple_news",label:"",host:"https://apple.news",path:"/T3OtoXcxtRkuHRkM7SpFP_Q",items:[]},{name:"rss",label:"",host:"",path:"/rss-feeds/",items:[]}]},o={main:[{name:"subscribe_with_icon",label:"Subscribe to CNBC PRO",host:"",path:"/application/pro/?__source=pro|globalfooter/",items:[]},{name:"licensing_and_reprints",label:"Licensing & Reprints",host:"",path:"/cnbc-reprints/",items:[]},{name:"cnbc_councils",label:"CNBC Councils",host:"https://www.cnbccouncils.com",path:"/",items:[]},{name:"Supply_Chain_Values",label:"Supply Chain Values",host:"https://corporate.comcast.com",path:"/values/integrity",items:[]},{name:"cnbc_on_peacock",label:"CNBC on Peacock",host:"https://www.peacocktv.com/?cid=20200101evergreensymdisp009&utm_source=cnbc&utm_medium=symphony_editorial_brandawareness_footerlink&utm_campaign=20200101evergreen&utm_term=na&utm_content=na_na",path:"/",items:[]},{name:"advertise",label:"Advertise With Us",host:"",path:"/advertising-and-partnerships/",items:[]},{name:"cnbc_panel",label:"Join the CNBC Panel",host:"https://cnbcrsh.qualtrics.com",path:"/jfe/form/SV_8v2FqPLC71m5Gaq?Origin=cnbc",items:[]},{name:"digital_products",label:"Digital Products",host:"",path:"/digital-products/",items:[]},{name:"terms_of_service",label:"Terms of Service",host:"",path:"/nbcuniversal-terms-of-service/",items:[]},{name:"privacy_policy",label:"Privacy Policy",host:"https://www.nbcuniversal.com",path:"/privacy?intake=CNBC",items:[]},{name:"do_not_sell",label:"Do Not Sell My Personal Information",host:"https://www.nbcuniversal.com",path:"/privacy/notrtoo?intake=CNBC",items:[]},{name:"ca_notice",label:"CA Notice",host:"https://www.nbcuniversal.com",path:"/privacy/california-consumer-privacy-act?intake=CNBC",items:[]},{name:"news_releases",label:"News Releases",host:"",path:"/cnbc-news-releases/",items:[]},{name:"closed_captioning",label:"Closed Captioning",host:"",path:"/closed-captioning/",items:[]},{name:"corrections",label:"Corrections",host:"",path:"/corrections/",items:[]},{name:"about_cnbc",label:"About CNBC",host:"",path:"/about-cnbc-international/",region:"WORLD",items:[]},{name:"internships",label:"Internships",host:"",path:"/cnbc-internship-program/",items:[]},{name:"sitemap",label:"Site Map",host:"",path:"/site-map/",items:[]},{name:"ad_choices",label:"Ad Choices",host:"https://www.nbcuniversal.com",path:"/privacy/cookies#cookie_management",items:[]},{name:"careers",label:"Careers",host:"",path:"/cnbc-careers-and-employment/",items:[]},{name:"help",label:"Help",host:"https://help.cnbc.com/",path:"",items:[]},{name:"contact",label:"Contact",host:"https://help.cnbc.com/contact/",path:"",items:[]},{name:"reuters",label:"Market Data Terms of Use and Disclaimers",host:"",path:"/market-data-terms-of-service/",items:[]},{name:"nbc_copyright",label:"nbc_copyright",host:"",path:"https://www.nbcuniversal.com",items:[]},{name:"newsletter_link",label:"Sign Up Now",host:"",path:"/sign-up-for-cnbc-newsletters/",items:[]},{name:"news_tips_link",label:"Get In Touch",host:"",path:"/news-tips/",items:[]}],social:[{name:"facebook",label:"",host:"https://www.facebook.com",path:"/cnbcinternational/c/",region:"WORLD",items:[]},{name:"twitter",label:"",host:"https://www.twitter.com",path:"/cnbci?lang=en/",region:"WORLD",items:[]},{name:"linkedin",label:"",host:"https://www.linkedin.com",path:"/showcase/cnbc-international/",region:"WORLD",items:[]},{name:"instagram",label:"",host:"https://www.instagram.com",path:"/cnbcinternational/?hl=en/",region:"WORLD",items:[]},{name:"youtube",label:"",host:"https://www.youtube.com",path:"/user/CNBCInternational/",region:"WORLD",items:[]},{name:"apple_news",label:"",host:"https://apple.news",path:"/T3OtoXcxtRkuHRkM7SpFP_Q",items:[]},{name:"rss",label:"",host:"",path:"/rss-feeds/",items:[]}]},i={main:[],social:[{name:"facebook",label:"",host:"https://www.facebook.com",path:"/grow/",items:[]},{name:"twitter",label:"",host:"https://www.twitter.com",path:"/grow_mag",items:[]},{name:"linkedin",label:"",host:"https://www.linkedin.com",path:"/showcase/28555906/admin/",items:[]}]},s={main:[],social:[{name:"facebook",label:"",host:"https://www.facebook.com",path:"/CNBCMakeIt",items:[]},{name:"twitter",label:"",host:"https://www.twitter.com",path:"/CNBCMakeit",items:[]},{name:"linkedin",label:"",host:"https://www.linkedin.com",path:"/showcase/cnbc-make-it",items:[]},{name:"instagram",label:"",host:"https://www.instagram.com",path:"/cnbcmakeit",items:[]},{name:"youtube",label:"",host:"https://www.youtube.com",path:"/cnbcmakeit",items:[]}]},c={main:[],topLinks:[{name:"Advertiser Disclosure",path:"/select/disclosures/",host:""},{name:"About",path:"/select/about-us/",host:""},{name:"Contact",path:"/hc/en-us/requests/new?ticket_form_id=360000349393",host:"https://cnbc.zendesk.com"},{name:"More from Select",path:"/select/more-from-select/",host:""}],bottomLinks:[{name:"Privacy Policy",path:"/privacy?intake=CNBC",host:"https://www.nbcuniversal.com"},{name:"Do Not Sell My Personal Information",path:"/privacy/notrtoo?intake=CNBC",host:"https://www.nbcuniversal.com"},{name:"CA Notice",path:"/privacy/california-consumer-privacy-act?intake=CNBC",host:"https://www.nbcuniversal.com"},{name:"Terms of Service",path:"/nbcuniversal-terms-of-service/",host:"https://www.cnbc.com"}],social:[{name:"facebook",path:"/CNBCSelect/?business_id=1608618282793248",host:"https://www.facebook.com"},{name:"twitter",path:"/CNBCselect",host:"https://www.twitter.com"},{name:"linkedin",path:"/showcase/cnbcselect/about/?viewAsMember=true",host:"https://www.linkedin.com"},{name:"instagram",path:"/cnbcselect",host:"https://www.instagram.com"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USA";return e===a.b&&"USA"===t?r:e===a.b&&"WORLD"===t?o:e===a.e?c:e===a.d?s:e===a.a?i:void 0}},855:function(e,t,n){"use strict";n.d(t,"b",(function(){return E}));var a=n(28),r=n.n(a),o=n(36),i=n.n(o),s=n(37),c=n.n(s),l=n(68),u=n.n(l),p=n(69),h=n.n(p),m=n(49),d=n.n(m),v=n(2),f=n.n(v),b=n(97),w=n.n(b),y=n(0),g=n.n(y),C=n(126),k=n(874),S=n(23),_=Object(y.createContext)();function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}new Proxy({},{get:function(e,t){return t}});var P="undefined"!=typeof window&&window[C.a];var D=function(e){u()(n,e);var t=N(n);function n(e){var a;return i()(this,n),(a=t.call(this,e)).state={loaded:!1},a}return c()(n,[{key:"componentDidMount",value:function(){var e=this;this.props.load().then((function(){e.setState({loaded:!0})}))}},{key:"componentDidCatch",value:function(e,t){console.log("Error caught in CSSLoadable Loading Component:: ",e,t,this.props)}},{key:"render",value:function(){return this.state.loaded?g.a.createElement(this.props.Component,r()({},this.props.CommmponentProps,{styles:this.props.use()})):g.a.createElement(k.a,null)}}]),n}(g.a.Component);function E(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e.brand},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return S.b},o=function(o){var i=e[n(o)]||e[a(o)];if(!i)return console.error("No branded stylesheet found"),g.a.createElement(t,o);if("undefined"==typeof window){var s=Object(y.useContext)(_);s&&"function"==typeof s&&s(i.chunkName,O(O({},i.use()),{},{_style:void 0}))}return i.use()?g.a.createElement(t,r()({},o,{styles:i.use()})):g.a.createElement(D,{Component:t,CommmponentProps:o,load:i.load,use:i.use})};return o.displayName="".concat(t.name,"-CSSLoadable"),o}t.a=function(e){var t,n,a=e.requireAsync,r=w()(e,["requireAsync"]);function o(){return n||(n=a().then((function(e){t=e})).catch((function(e){console.error("Error fetching ".concat(r.chunkName," bundle. "),e)}))),n}return"undefined"==typeof window?O({load:o,use:function(){return a().catch((function(){})),r.requireSync()}},r):O({load:o,use:function(){return t||P&&P[r.chunkName]}},r)}},860:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(36),r=n.n(a),o=n(37),i=n.n(o),s=n(123),c=n.n(s),l=n(68),u=n.n(l),p=n(69),h=n.n(p),m=n(49),d=n.n(m),v=n(2),f=n.n(v),b=n(0),w=n.n(b),y=n(1),g=n.n(y),C=n(221);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}var S=function(e){u()(n,e);var t=k(n);function n(){var e;r()(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),f()(c()(e),"state",{adIsCalled:!1}),f()(c()(e),"initSlot",(function(t,n,a,r){"undefined"!=typeof window&&(window.mps=window.mps||{},window.mps._queue=window.mps._queue||{},"insertComponent"===a?(window.mps._queue.mpsinit=window.mps._queue.mpsinit||[],window.mps._queue.mpsinit.push((function(){window.mps&&window.mps[a]&&(window.mps[a]("#".concat(t),n),e.setState({adIsCalled:!0}))}))):(window.mps._queue.gptloaded=window.mps._queue.gptloaded||[],window.mps._queue.gptloaded.push((function(){window.mps&&window.mps[a]&&(window.mps[a]("#".concat(t),n,r),e.setState({adIsCalled:!0}))}))))})),f()(c()(e),"handleAd",(function(){var t=e.props,n=t.id,a=t.slot,r=t.slotMethod,o=t.target;e.state.adIsCalled||e.initSlot(n,a,r,o)})),e}return i()(n,[{key:"shouldComponentUpdate",value:function(){return!this.state.adIsCalled}},{key:"componentDidMount",value:function(){var e=this.props,t=e.Breakpoints,n=e.hideOnMobile,a=e.hideOnDesktop,r=t.isSmallMobile(),o=t.isDesktop();a&&o||n&&r||("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",this.handleAd):this.handleAd())}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.Breakpoints,n=e.hideOnMobile,a=e.hideOnDesktop,r=t.isSmallMobile(),o=t.isDesktop();a&&o||n&&r||document.removeEventListener("DOMContentLoaded",this.handleAd)}},{key:"componentDidCatch",value:function(e,t){console.log("Error caught in MPS component:: ",e,t,this.props)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.clsName;return w.a.createElement("div",{id:t,className:n,"data-module":"mps-slot"})}}]),n}(b.Component);f()(S,"propTypes",{slot:g.a.string.isRequired,id:g.a.string.isRequired,clsName:g.a.string,slotMethod:g.a.string.isRequired,target:g.a.string,hideOnMobile:g.a.bool,hideOnDesktop:g.a.bool,Breakpoints:g.a.shape({monitorBreakpoints:g.a.func,isSmallMobile:g.a.func,isDesktop:g.a.func})}),f()(S,"defaultProps",{slot:"",id:"",clsName:"",slotMethod:"cloneAd",target:"",hideOnMobile:!1,hideOnDesktop:!1,Breakpoints:C.a})},874:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),s=n(1012),c=n.n(s),l=function(e){return e.showSpinner?r.a.createElement("div",{className:c.a.spinnerParent,"data-test":"DynamicLoadingIndicator"},r.a.createElement("div",{className:c.a.spinner,style:{width:e.spinnerSize,height:e.spinnerSize}})):r.a.createElement("div",null)};l.propTypes={showSpinner:i.a.bool,spinnerSize:i.a.number},l.defaultProps={showSpinner:!1,spinnerSize:40},t.a=l},927:function(e,t,n){"use strict";(function(e){var a=n(9),r=n.n(a),o=n(0),i=n.n(o),s=n(1),c=n.n(s),l=n(48),u=n(11),p=n(265),h=n(533),m=n(531),d=n(1062),v=n(124),f=n(35),b=n(23),w=n(66),y=n(855),g=n(1013),C=n(970),k=n(1639),S=u.a.getProperties(),_=S.PHOENIX_MENU_ITEMS,N={},A=b.b;N[b.a]=Object(y.a)({chunkName:"containers/BrandPageWrapper/styles.acorns.scss",requireAsync:function(){return n.e(249).then(n.t.bind(null,1293,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1293}}),N[b.b]=Object(y.a)({chunkName:"containers/BrandPageWrapper/styles.cnbc.scss",requireAsync:function(){return n.e(416).then(n.t.bind(null,1294,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1294}}),N[b.d]=Object(y.a)({chunkName:"containers/BrandPageWrapper/styles.makeit.scss",requireAsync:function(){return n.e(312).then(n.t.bind(null,1295,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1295}}),N[b.e]=Object(y.a)({chunkName:"containers/BrandPageWrapper/styles.select.scss",requireAsync:function(){return n.e(346).then(n.t.bind(null,1296,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1296}});var O=function(e){var t=e.data,n=e.brand,a=e.pageType,s=e.url,c=e.cookies,l=e.hasNewsAlert,u=e.hasLiveAlert,v=e.hasFiveThings,y=e.hasCountDownClock,S=e.searchData,N=e.styles,A=e.isMobileWebview;if(!(_||t&&t.header&&t.footer))return i.a.createElement(p.a,{data:{error:"Menu query came back as null"},errorSource:"BrandPageWrapper",errorProps:e});var O=Object(o.useState)(!1),P=r()(O,1)[0],D=Object(o.useState)(!1),E=r()(D,2),R=E[0],q=E[1],j=Object(f.a)({keyValuePairs:[[N.newsAlert,l],[N.liveAlert,u],[N.fiveThings,v],[N.expanded,P],[N.countDownClock,y],[N.xfinity,Object(g.d)()],[N.home,"homepage"===a],[N.contentWrapperMakeit,n===b.d],[N.contentWrapperClock,R],[N.mobileWebview,A]]},N.contentWrapper),T="".concat(n,"Brand"),L=Object(w.d)(c);return i.a.createElement("div",{id:"BrandPageWrapper",className:T},i.a.createElement(k.a,{pageType:"isPage"}),!A&&i.a.createElement(m.a,{data:t.header,brand:n,product:"web",page:a,region:L,url:s,hasLiveAlert:u,updateHasClock:q,searchData:S}),i.a.createElement(C.a.Provider,{value:{pageTemplate:a}},i.a.createElement("div",{className:j,role:"main",id:"MainContentContainer"},i.a.createElement("p",{id:"MainContent",tabIndex:"-1"}),e.children)),i.a.createElement(d.a,{dataId:"MobileAdhesion-Homepage"}),!A&&i.a.createElement(h.a,{brand:n,product:"web",template:a,region:L}))};function P(e){var t=e.navStatus;return{hasNewsAlert:t.hasNewsAlert,hasLiveAlert:t.hasLiveAlert,hasFiveThings:t.hasFiveThings,hasCountDownClock:t.hasCountDownClock}}O.propTypes={data:c.a.object.isRequired,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),brand:c.a.string,pageType:c.a.string,url:c.a.string,hasNewsAlert:c.a.bool,hasLiveAlert:c.a.bool,hasFiveThings:c.a.bool,hasCountDownClock:c.a.bool,searchData:c.a.object,cookies:c.a.object.isRequired,styles:c.a.object.isRequired,isMobileWebview:c.a.bool},O.defaultProps={data:{},children:i.a.createElement("div",null),brand:A,pageType:"",url:"",searchData:{},hasNewsAlert:!1,hasLiveAlert:!1,hasFiveThings:!1,hasCountDownClock:!1,cookies:{},isMobileWebview:!1};var D=Object(y.b)(N,O);t.a=Object(l.b)(P)(Object(v.a)(D))}).call(this,"/")},970:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(0),r=Object(a.createContext)(),o=function(){return Object(a.useContext)(r)}}}]);
//# sourceMappingURL=../../source-maps/containers-AccountPageContainer~containers-EpisodePageContainer~containers-ForgotPasswordPage~contai~a94b510f-c23d7c23d4ffe976ce57.js.map