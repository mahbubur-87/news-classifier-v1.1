define("idcta-v2/statusbar",["idcta-v2/idCookie","idcta-v2/id-config","idcta-v2/logger","idcta-v2/analytics"],function(i,s,l,t){var e={};function a(i,a){return s.getConfigAsync().then(function(t){var e=a.getNameFromCookie(),n=t.translation_signedin;e&&(t=e.substring(0,1).toUpperCase(),n=function(t,e){if(t.length>e)return t.substring(0,e-1)+"…";return t}(e,14),i.element.className=i.element.className+" idcta-avatar",i.ctaLink.setAttribute("userInitial",t)),i.element.className=i.element.className+" idcta-signedin",i.ctaName.innerText=n}).catch(function(t){l.logCaughtError(t)})}return e.Statusbar=function(t){try{var e;this.id=null,this.element=null,this.ctaLink=null,this.ctaName=null,n=t,!document.getElementById(n.id)||!n.blq&&!document.getElementById("idcta-link")||n.blq&&!document.getElementById(n["link-id"])||(this.id=t.id,this.element=document.getElementById(t.id),t.blq?(this.ctaLink=document.getElementById(t["link-id"])?document.getElementById(t["link-id"]):this.element.getElementsByTagName("a")[0],this.ctaName=t["name-id"]?document.getElementById(t["name-id"]):this.element.getElementsByTagName("span")[1]):(this.ctaLink=document.getElementById("idcta-link"),this.ctaName=this.element.getElementsByTagName("span")[0]),e=this,!0===t.publiclyCacheable&&(i.getInstance().hasCookie()?s.getConfigAsync().then(function(t){t.status_url&&e.ctaLink.href!==t.status_url&&(e.ctaLink.href=t.status_url),a(e,i.getInstance())}):s.getConfigAsync().then(function(t){t.signin_url&&(e.ctaLink.href=t.signin_url),e.ctaName.innerText=t.translation_signedout})))}catch(t){l.logCaughtError(t)}var n},e.updateForAuthorisedState=a,t.wrapModuleWithAnalytics(e,"statusbar"),e});
//# sourceMappingURL=statusbar.js.map
