!function(){var a=/^https?\:\/\/([^\/\?]+\.)*yahoo.com/,m="comments",f=window,r=f&&f.document;function s(e){if(!e)return!1;var n=e.getBoundingClientRect();return!(n.top>f.innerHeight-100||n.bottom<100)}function e(e,n){if(e&&n&&n.context&&n.contextDisplayText&&n.contextUrl&&n.namespace)if(f.addEventListener){var t=this,o=n.device,i=n.rapidKeys;t._config=n,t._data={context:n.context,isExpanded:!1},t._iframe=null,t._isDwellActive=!1,t._isInViewport="smartphone"===o;var s=document.getElementById(e);if(s){var a="";if(i)for(var r in i)if(i.hasOwnProperty(r)){var d="pct"===r?m:i[r];d&&(a+=r+":"+d+";")}var c="https://www.yahoo.com/comments/";n.useRelativeHostName&&(c="/comments/");var l=c+"?context="+encodeURIComponent(n.context)+"&contextDisplayText="+encodeURIComponent(n.contextDisplayText)+"&contextUrl="+encodeURIComponent(n.contextUrl)+"&namespace="+encodeURIComponent(n.namespace)+"&expanded="+(n.expanded?1:0)+(n.site?"&site="+encodeURIComponent(n.site):"")+(n.region?"&region="+encodeURIComponent(n.region):"")+(n.lang?"&lang="+encodeURIComponent(n.lang):"")+(n.apptype?"&apptype="+encodeURIComponent(n.apptype):"")+(n.messageId?"&messageId="+encodeURIComponent(n.messageId):"")+(n.replyId?"&replyId="+encodeURIComponent(n.replyId):"")+(n.prid?"&prid="+encodeURIComponent(n.prid):"")+(n.sectionId?"&sectionId="+encodeURIComponent(n.sectionId):"")+(n.siteAttribute?"&siteAttribute="+encodeURIComponent(n.siteAttribute):"")+(n.spaceid?"&spaceid="+encodeURIComponent(n.spaceid):"")+(n.bucket?"&test_id="+encodeURIComponent(n.bucket):"")+(a?"&rapidKeys="+encodeURIComponent(a):"")+(n.sortBy?"&sortBy="+encodeURIComponent(n.sortBy):"")+(n.theme?"&theme="+encodeURIComponent(n.theme):"")+(n.themeContainerClasses?"&themeContainerClasses="+encodeURIComponent(n.themeContainerClasses):"")+(n.trafficSource?"&.tsrc="+encodeURIComponent(n.trafficSource):""),p=document.createElement("iframe");p.id=e+"-iframe",p.frameBorder=0,p.style.height=s.style.height="0",p.style.width=s.style.width="100%","smartphone"===n.device&&(s.style.boxShadow="0 0 8px 0 rgba(0,0,0,.12)",s.style.position="fixed",s.style.bottom="0",s.style.left="0",s.style.right="0",s.style.zIndex=n.zIndex||"12",p.style.height="1px"),p.src=l,s.appendChild(p),t._iframe=p,t._onPostMessage=t._onPostMessage.bind(t),f.addEventListener("message",t._onPostMessage),t._onWindowBlur=t._onWindowBlur.bind(t),f.addEventListener("blur",t._onWindowBlur),t._onWindowFocus=t._onWindowFocus.bind(t),f.addEventListener("focus",t._onWindowFocus),t._onWindowScroll=t._onWindowScroll.bind(t),f.addEventListener("scroll",t._onWindowScroll)}else console.warn("CanvassComments - Container element not found")}else console.warn("CanvassComments - Browser not supported");else console.warn("CanvassComments - Missing required params: id, config, context, contextDisplayText, contextUrl, namespace")}e.prototype={collapse:function(){var e=this._iframe;e&&(this._fireDwell(!1),e.contentWindow.postMessage("canvass:collapse","*"))},destroy:function(){var e=this,n=e._iframe;n&&(f.removeEventListener("message",e._onPostMessage),f.removeEventListener("blur",e._onWindowBlur),f.removeEventListener("focus",e._onWindowFocus),f.removeEventListener("scroll",e._onWindowScroll),n.parentNode&&n.parentNode.removeChild(n),e._config={},e._iframe=null)},expand:function(){var e=this._iframe;e&&e.contentWindow&&(this._fireDwell(!0),e.contentWindow.postMessage("canvass:expand","*"))},getCount:function(){return this._data.count},_fireEvents:function(e){var n=this,t=n._iframe,o=n._data||{},i=n._config;o.initialized?o.count!==e.count&&i.onCountChanged&&i.onCountChanged(e):(i.onInitialized&&i.onInitialized(e),"smartphone"!==i.device&&s(t)&&t.contentWindow.postMessage("canvass:enterViewport","*")),o.initialized&&o.isExpanded!==e.isExpanded&&(e.isExpanded?(i.onExpanded&&i.onExpanded(e),t.contentWindow.focus()):(i.onCollapsed&&i.onCollapsed(e),f.focus()))},_onPostMessage:function(e){var n=this,t=e&&e.data,o=n._iframe;if(o&&o.parentNode&&e.origin.match(a)&&(t=function(e){if("string"!=typeof e||"{"!==e[0])return null;try{return JSON.parse(e)}catch(e){return null}}(t))&&t.isCanvass&&t.context===n._data.context){var i=t.height;if("number"==typeof i&&(i+="px",t.height=i),i&&(t.initialized&&n._fireEvents(t),n._data=t,o.parentNode.style.height=i,o.style.height=i),t.loginUrl&&t.loginUrl.match(a)&&(f.location.href=t.loginUrl),t.initialized&&t.isExpanded){var s=r.getElementById("homepage-viewer")||r.getElementById("caas-content-body");"caas-content-body"===s.id&&(s=s.parentNode),s&&s.classList&&!s.classList.contains("commentsExpandedHideAd")&&s.classList.add("commentsExpandedHideAd")}}},_fireDwell:function(e){var n=this,t=n._config,o=t.rapid,i=t.rapidKeys,s=t.context;if(o&&i&&n._isDwellActive!==e){var a=e?m:i.pct;n._isDwellActive=e,o.beaconClick("rapidDwell","",0,{g:s},"",function(){o.setRapidAttribute({keys:{pct:a}}),o.beaconClick("rapidDwell","",0,{g:s},"",null,{dwell:"start"})},{dwell:"stop"})}},_onWindowBlur:function(){r&&r.activeElement===this._iframe&&this._fireDwell(!0)},_onWindowFocus:function(){this._fireDwell(!1)},_onWindowScroll:function(){var t=this;"smartphone"!==t._config.device&&(t._scrollTimer&&clearTimeout(t._scrollTimer),t._scrollTimer=setTimeout(function(){var e=t._iframe;if(e&&e.contentWindow){var n=s(e);t._isDwellActive&&!n&&f.focus(),t._isInViewport!==n&&(e.contentWindow.postMessage(n?"canvass:enterViewport":"canvass:exitViewport","*"),t._isInViewport=n)}},50))}},void 0!==f&&(f.YAHOO=f.YAHOO||{},f.YAHOO.CanvassComments=e)}();